import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { AccountSandbox } from 'src/core/account/account.sandbox';
import { CommonSandbox } from 'src/core/common/common.sandbox';
import { ListsSandbox } from 'src/core/lists/lists.sandbox';
import { ConfigService } from 'src/core/service/config.service';
import { emailValidator } from 'src/default/theme/utils/app-validators';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  // reactive form
  public profileForm: FormGroup;
  public passwordForm: FormGroup;
  // ipload image
  public imageUrl: any;
  private userImage: any;
  public imagePath: string;
  // validation
  public ifSubmitted = false;
  public ifPasswordForm = false;
  // default image
  public ifImageAvailable: string;
  // subscription
  private subscriptions: Array<Subscription> = [];

  @ViewChild('filePath') filePath: ElementRef;

  // public formName = 'profile'
  // public formTitle: String = 'Create / Edit My Public Profile'


  constructor(public formBuilder: FormBuilder,
    public configService: ConfigService,
    public snackBar: MatSnackBar,
    public commonSandbox: CommonSandbox,
    public listsSandbox: ListsSandbox,
    public accountSandbox: AccountSandbox) {
  }

  // Initially calls initprofileForm,initPasswordForm,setProfile
  ngOnInit() {
    this.imagePath = this.configService.getImageUrl();
    this.initprofileForm();
    // this.initPasswordForm();
    this.setProfile();
  }

  // build a form for info  by gouping the form control
  initprofileForm() {
    this.profileForm = this.formBuilder.group({
      'firstName': ['test'],
      'lastName': [''],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'interest': [''],
      'bio': [''],
      'iam': [''],
      'mobileNumber': ['00000000']
    });
  }

  // build a form for change password  by gouping the form control

  // initPasswordForm() {
  //   this.passwordForm = this.formBuilder.group({
  //     'currentPassword': ['', Validators.compose([Validators.required])],
  //     'newPassword': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  //   }
  //   );
  // }


  // set the user details to the form by fetching the profile details from sandbox
  setProfile() {
    this.subscriptions.push(this.commonSandbox.getProfile$.subscribe(profile => {
      if (profile) {
        this.profileForm.controls['firstName'].setValue(profile.firstName);
        this.profileForm.controls['lastName'].setValue(profile.lastName);
        this.profileForm.controls['email'].setValue(profile.email);
        this.profileForm.controls['interest'].setValue(profile.interest);
        this.profileForm.controls['bio'].setValue(profile.bio);
        this.profileForm.controls['iam'].setValue(profile.iam);
        // this.profileForm.controls['phoneNumber'].setValue(profile.mobileNumber);
        this.imageUrl = this.imagePath + '?path=' + profile.avatarPath + '&name=' + profile.avatar + '&width=60&height=60';
        this.ifImageAvailable = profile.avatarPath;
      }
    }));
  }

  onSelectCountry(countryid: number) {
  }
  onSelectZone(zoneid: number) {

  }
  /**
   * upload new user image
   *
   * @param el refer the HTMLElement filePath
   * it will activate the click function of el
   */
  uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }

  // calls convertBase64 to convert data into base64 formt
  uploadChange($event): void {
    this.ifImageAvailable = 'avatar';
    this.convertBase64($event.target);
  }

  // convert image file into Base64 format
  convertBase64(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imageUrl = myReader.result;
      this.userImage = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  // call edit user info functionality if the form is valid

  public onProfileFormSubmit(): void {
    if (this.profileForm.valid) {
      const params: any = this.profileForm.value;
      params.image = this.userImage;
      this.accountSandbox.doEditProfile(params);
      this.ifSubmitted = false;
      this.imageUrl = '';
      // this.profileForm.reset();
      this.setProfile();
      this.profileForm.clearValidators();
    } else {
      this.ifSubmitted = true;
    }
  }

  // call change password functionality if the password form is valid
  // public onPasswordFormSubmit(): void {

  //   if (this.passwordForm.valid) {
  //     this.accountSandbox.doChangepassword(this.passwordForm.value);
  //     this.ifPasswordForm = false;
  //     this.passwordForm.reset();
  //     this.passwordForm.clearValidators();
  //     // this.resetAllFormFields(this.passwordForm);
  //   } else {
  //     this.ifPasswordForm = true;
  //   }
  // }

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
