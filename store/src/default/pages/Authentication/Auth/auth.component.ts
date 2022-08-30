/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { emailValidator, matchingPasswords } from '../../../theme/utils/app-validators';
import { AuthSandbox } from '../../../../core/auth/auth.sandbox';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    // reactive form
    public registerForm: FormGroup;
    // validation
    public submitted = false;

    constructor(public formBuilder: FormBuilder,
        public router: Router,
        public snackBar: MatSnackBar,
        public authSandbox: AuthSandbox) {
    }

    // Initially initialize reactive form
    ngOnInit() {
        this.fbLibrary();
        const mobileValidationPattern = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
        const nameValidationPattern = '[a-zA-Z \'-,;.]*';
        this.registerForm = this.formBuilder.group({
            'name': ['', Validators.compose([Validators.required, Validators.pattern(nameValidationPattern), Validators.minLength(3)])],
            'email': ['', Validators.compose([Validators.required, emailValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'confirmPassword': ['', Validators.compose([Validators.required])],
            // 'phoneNumber': ['', Validators.compose([Validators.required, Validators.pattern(mobileValidationPattern)])]
        }, { validator: matchingPasswords('password', 'confirmPassword') });

    }

    public login() {

        window['FB'].login((response) => {
            console.log('login response', response);
            if (response.authResponse) {

                window['FB'].api('/me', {
                    fields: 'last_name, first_name, email'
                }, (userInfo) => {

                    console.log("user information");
                    console.log(userInfo);
                });

            } else {
                console.log('User login failed');
            }
        }, { scope: 'email' });
    }

    fbLibrary() {
        (window as any).fbAsyncInit = function () {
            window['FB'].init({
                appId: '1815259135478978',
                cookie: true,
                xfbml: true,
                version: 'v3.1'
            });
            window['FB'].AppEvents.logPageView();
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    /** calls authSandbox doRegister if tthe from is valid.
     Then calls resetAllFormFields for reset **/
    public onRegisterFormSubmit(values: Object): void {
        if (this.registerForm.valid) {
            console.log(this.registerForm.value)
            this.authSandbox.doRegister(this.registerForm.value)
            this.submitted = false;
            this.registerForm.reset();
            // this.resetAllFormFields(this.registerForm);
        } else {
            this.submitted = true;
        }
    }

    // reset the values
    resetAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.reset();
                control.clearValidators();
                control.updateValueAndValidity();
            } else if (control instanceof FormGroup) {
                this.resetAllFormFields(control);
            }
        });
    }

    // validate the reactive form
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

}
