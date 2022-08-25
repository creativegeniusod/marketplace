import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  public helpForm: FormGroup;
  public ifSubmitted = false;

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initHelpForm();
  }


  // build a form for info  by gouping the form control
  initHelpForm() {
    this.helpForm = this.formBuilder.group({
      'category': ['', Validators.compose([Validators.required])],
      'subject': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.required])],
    });
  }



  public onhelpFormFormSubmit(): void {
    if (this.helpForm.valid) {
      const params: any = this.helpForm.value;
      this.ifSubmitted = false;
      this.helpForm.reset();
      this.helpForm.clearValidators();
    } else {
      this.ifSubmitted = true;
    }
  }
}
