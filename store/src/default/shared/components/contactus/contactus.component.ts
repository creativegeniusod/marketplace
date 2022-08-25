import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/default/theme/utils/app-validators';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  public contactUsForm: FormGroup;
  public ifSubmitted = false;

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initContactUsForm();
  }


  // build a form for info  by gouping the form control
  initContactUsForm() {
    this.contactUsForm = this.formBuilder.group({
      'subject': ['', Validators.compose([Validators.required])],
      'department': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.required])],
    });
  }



  public onContactUsFormSubmit(): void {
    if (this.contactUsForm.valid) {
      const params: any = this.contactUsForm.value;
      this.ifSubmitted = false;
      this.contactUsForm.reset();
      this.contactUsForm.clearValidators();
    } else {
      this.ifSubmitted = true;
    }
  }
}
