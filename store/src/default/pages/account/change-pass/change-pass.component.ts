import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountSandbox } from 'src/core/account/account.sandbox';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  public passwordForm: FormGroup;
  public ifPasswordForm = false;

  constructor(
    public formBuilder: FormBuilder,
    public accountSandbox: AccountSandbox
  ) { }

  ngOnInit() {
    this.initPasswordForm();
  }

  // build a form for change password  by gouping the form control

  initPasswordForm() {
    this.passwordForm = this.formBuilder.group({
      'currentPassword': ['', Validators.compose([Validators.required])],
      'newPassword': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    }
    );
  }


  // call change password functionality if the password form is valid
  public onPasswordFormSubmit(): void {
    if (this.passwordForm.valid) {
      this.accountSandbox.doChangepassword(this.passwordForm.value);
      this.ifPasswordForm = false;
      this.passwordForm.reset();
      this.passwordForm.clearValidators();
      // this.resetAllFormFields(this.passwordForm);
    } else {
      this.ifPasswordForm = true;
    }
  }

}
