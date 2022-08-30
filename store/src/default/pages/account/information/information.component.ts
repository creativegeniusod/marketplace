/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { emailValidator } from '../../../theme/utils/app-validators';
import { ConfigService } from '../../../../core/service/config.service';
import { CommonSandbox } from '../../../../core/common/common.sandbox';
import { AccountSandbox } from '../../../../core/account/account.sandbox';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, OnDestroy {
    // reactive form
    public infoForm: FormGroup;
    // public passwordForm: FormGroup;
    // validation
    public ifSubmitted = false;
    // public ifPasswordForm = false;
    // subscription
    private subscriptions: Array<Subscription> = [];

    constructor(public formBuilder: FormBuilder,
        public configService: ConfigService,
        public snackBar: MatSnackBar,
        public commonSandbox: CommonSandbox,
        public listsSandbox: ListsSandbox,
        public accountSandbox: AccountSandbox) {
    }

    // Initially calls initInfoForm,initPasswordForm,setProfile
    ngOnInit() {
        this.initInfoForm();
        // this.initPasswordForm();
        this.setProfile();
    }

    // build a form for info  by gouping the form control
    initInfoForm() {
        this.infoForm = this.formBuilder.group({
            'phoneNumber': [''],
            'checkPhoneNumber': [''],
            'primaryAddess': ['', Validators.compose([Validators.required])],
            'checkPrimaryAddess': [''],
            'recoveryEmail': ['', Validators.compose([Validators.required])],
            'bio': ['', Validators.compose([Validators.required])],
            'dob': ['', Validators.compose([Validators.required])],
            'gender': ['', Validators.compose([Validators.required])],
        });
    }

    // build a form for change password  by gouping the form control

    // initPasswordForm() {
    //     this.passwordForm = this.formBuilder.group({
    //         'currentPassword': ['', Validators.compose([Validators.required])],
    //         'newPassword': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    //     }
    //     );
    // }


    // set the user details to the form by fetching the profile details from sandbox
    setProfile() {
        this.subscriptions.push(this.commonSandbox.getProfile$.subscribe(profile => {
            if (profile) {
                console.log('profile', profile);
                this.infoForm.controls['firstName'].setValue(profile.firstName);
                this.infoForm.controls['email'].setValue(profile.email);
                this.infoForm.controls['phoneNumber'].setValue(profile.phoneNumber);
                this.infoForm.controls['checkPhoneNumber'].setValue(profile.checkPhoneNumber);
                this.infoForm.controls['primaryAddess'].setValue(profile.primaryAddess);
                this.infoForm.controls['checkPrimaryAddess'].setValue(profile.checkPrimaryAddess);
                this.infoForm.controls['recoveryEmail'].setValue(profile.recoveryEmail);
                this.infoForm.controls['bio'].setValue(profile.bio);
                this.infoForm.controls['dob'].setValue(profile.dob);
                this.infoForm.controls['gender'].setValue(profile.gender);
            }
        }));
    }

    public onInfoFormSubmit(): void {
        console.log('this.infoForm.', this.infoForm.value);
        if (this.infoForm.valid) {           
            const params: any = this.infoForm.value;
            this.accountSandbox.doEditProfile(params);
            this.ifSubmitted = false;
            this.infoForm.reset();
            this.infoForm.clearValidators();
        } else {
            this.ifSubmitted = true;
        }
    }

    // reset form fields and clear validation
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

    // destroy the subscribed events while page destroy
    ngOnDestroy() {
        this.subscriptions.forEach(each => {
            each.unsubscribe();
        });
    }

}
