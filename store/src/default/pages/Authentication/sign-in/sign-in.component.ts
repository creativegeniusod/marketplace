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
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { emailValidator } from '../../../theme/utils/app-validators';
import { AuthSandbox } from '../../../../core/auth/auth.sandbox';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  // reactive form
  public loginForm: FormGroup;
  // validation
  public submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public snackBar: MatSnackBar,
    public authSandbox: AuthSandbox
  ) {}

  // Initially initialize the reactive form
  ngOnInit() {
     this.fbLibrary();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    });
  }
  /** calls authSandbox  doLogin if the form is valid.
   *
   * Then calls resetAllFormFields to reset the form fields .
   */
  public onLoginFormSubmit(values: Object): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const params = this.loginForm.value;
      params.type = 'normal';
      console.log(params,"")
      // return false;
      this.authSandbox.doLogin(params);
      this.submitted = false;
    }
  }

  fbLibrary() { 

    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '1815259135478978',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      window['FB'].AppEvents.logPageView();
    };
 
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
 
}

  public login() {
 
    window['FB'].login((response) => {
        console.log('login response',response);
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
    }, {scope: 'email'});
}

  // reset the form fields
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

  // validate the form fields
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
