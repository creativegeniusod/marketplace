/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  Validators,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
// Routing Module
import { ActivatedRoute, Router } from '@angular/router';
// Store Module

import { CoupenSandbox } from '../../../../../../../core/admin/adv/coupens/coupen.sandbox';
import { CoupenService } from '../../../../../../../core/admin/adv/coupens/coupen.service';
import { ConfigService } from '../../../../../../../core/admin/service/config.service';
import { CategoriesSandbox } from '../../../../../../../core/admin/catalog/category/categories.sandbox';
import { CategoriesService } from '../../../../../../../core/admin/catalog/category/categories.service';

@Component({
  selector: 'app-adv-coupen-add',
  templateUrl: 'add.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #009efb;
        color: white;
      }

      .dark-modal .close {
        color: white;
      }

      .light-blue-backdrop {
        background-color: #5cb3fd;
      }

      .image-manager .modal-dialog {
        max-width: 70%;
      }
    `
  ]
})
export class CoupenAddComponent implements OnInit {
  // VARIABLES
  private closeResult: string;
  public coupenInfo: any;
  public serviceData: any;
  public ImageUrl: any = '';
  public coupenForm: FormGroup;
  public coupenTitle: FormControl;
  public category: FormControl;
  public subcategory: FormControl;
  public coupenContent: FormControl;
  public coupenLink: FormControl;
  public position: FormControl;
  public active: FormControl;
  public submitted = false;
  public postImageUrl: any;
  public editCoupenId: any;
  id = '';
  public imageUrl: string;
  // Image
  @ViewChild('filePath') filePath: ElementRef;

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  constructor(
    private modalService: NgbModal,
    private modalService2: NgbModal,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private changeDetectRef: ChangeDetectorRef,
    public categoriessandbox: CategoriesSandbox,
    public categoryservice: CategoriesService,
    private configService: ConfigService,
    public sandbox: CoupenSandbox,
    private service: CoupenService
  ) {}

  ngOnInit() {
    this.getCategoryList()
    // alert("df")
    this.imageUrl = this.configService.getImageUrl();
    this.postImageUrl = './assets/upload-coupen/upload.png';
    this.initForm();
    this.editCoupenData();
    // alert(this.route.snapshot.paramMap.get('id'));
    this.editCoupenId = this.route.snapshot.paramMap.get('id');
  }

  getCategoryList() {
    // alert("hello");
    const param: any = {};
    param.limit = '';
    param.offset = '';
    param.keyword = undefined;
    param.sortOrder = '';
    param.parentInt = 0;
    param.status = 1;
    console.log(param,"make params");
    this.categoriessandbox.categorylist(param);
    /*this.categoriessandbox.getCategoriesList$.subscribe( data => {
      if(data != undefined){
        console.log(data,"data"); 
      }
    });   */ 
  }
  getSubCategoryList(deviceValue) {
    // console.log(deviceValue,"*********&&&&&&&&********")
    // getSubCategorylist
    const param: any = {};
    param.limit = '';
    param.offset = '';
    param.keyword = undefined;
    param.sortOrder = '';
    param.parentInt = deviceValue;
    param.status = 1;
    console.log(param,"make params SubCategoryList");
    this.categoriessandbox.subcategorylist(param);
    /*this.categoriessandbox.getSubCategoriesList$.subscribe( data => {
      if(data){
        console.log(data,"data"); 
      }
    }); */   
  }

  onSelectcategory(deviceValue){
    this.getSubCategoryList(deviceValue)  
    // getSubCategoriesList  
  }
  open2(content) {
    this.modalService
      .open(content, { windowClass: 'image-manager' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  open(content) {
    this.modalService2.open(content, {
      windowClass: 'dark-modal,image-manager'
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //  cancel it  navigate  to - add page to  list page
  coupenCancel() {
    this.service.setCoupenListData('');
    this.router.navigate(['/adv/coupens/list']);
  }

  // Form  Initialization
  initForm() {
    this.coupenForm = this.fb.group({
      coupenTitle: [null, [Validators.required]],
      coupenContent: [''],
      category: ['', [Validators.required]],
      subcategory: [''],
      active: ['', [Validators.required]],
      homecoupen: ['', [Validators.required]],
      coupenLink: [null],
      position: [null],
      imageInput: ['', [Validators.required]]
    });
  }

  /**
   * Handles form 'submit' event. Calls sandbox coupen  function if form is valid.
   *
   * @param event form event
   * @param form entire form value
   */
  public onSubmit() {
    console.log('forms', this.coupenForm.value);
    this.submitted = true;
    if (!this.coupenForm.valid) {
      this.validateAllFormFields(this.coupenForm);
      return;
    } else {
      // console.log(this.coupenForm.value.subcategory,"**********")
      const subCateval=((this.coupenForm.value.subcategory==null || this.coupenForm.value.subcategory=="")?0:this.coupenForm.value.subcategory)
      const params: any = {};
      params.title = this.coupenForm.value.coupenTitle;
      params.category = parseInt(this.coupenForm.value.category);
      params.subcategory = parseInt(subCateval);
      params.homecoupen = parseInt(this.coupenForm.value.homecoupen);
      params.content = this.coupenForm.value.coupenContent;
      params.position = +this.coupenForm.value.position;
      params.link = this.coupenForm.value.coupenLink;
      params.image = this.ImageUrl;
      // tslint:disable-next-line: radix
      const tempActive = parseInt(this.coupenForm.value.active);
      params.status = tempActive;
      if (this.coupenInfo[0] && this.coupenInfo[0].coupenId) {
        params.coupenId = this.coupenInfo[0].coupenId;
        console.log(params,"*****")
        this.sandbox.UpdateCoupen(params);
      } else {
        console.log('params', params);
        this.sandbox.addCoupen(params);
      }
    }
  }

  // editCoupen Data
  editCoupenData() {
    this.coupenInfo = [];

    this.serviceData = this.service.getcoupenListdata();
    if (this.serviceData) {
      this.coupenInfo.push(this.serviceData);
    }
    if (this.coupenInfo && this.coupenInfo[0]) {
      for (let i = 0; i < this.coupenInfo.length; i++) {
        this.coupenTitle = this.coupenInfo[0].title;
        this.coupenForm.controls['coupenContent'].setValue(
          this.serviceData.content
        );
        // console.log(this.serviceData,this.coupenInfo[0].categoryChildId,"*******");
        this.coupenForm.controls['imageInput'].setValue(this.serviceData.image); // <-- Set Value for Validation
        this.coupenLink = this.coupenInfo[0].link;
        this.position = this.coupenInfo[0].position;
        this.coupenForm.controls['active'].setValue(this.serviceData.active);

        this.coupenForm.controls['category'].setValue(this.serviceData.categoryId);
        console.log("**&&&&&&&&&***",this.serviceData,"**&&&&&&&&&**");
        this.coupenForm.controls['homecoupen'].setValue(this.serviceData.homecoupen);

        if(this.serviceData.categoryId){
          this.getSubCategoryList(this.serviceData.categoryId);
          this.coupenForm.controls['subcategory'].setValue(this.serviceData.categoryChildId);
        }

        this.postImageUrl =
          this.imageUrl + '?path=' +
          `${this.coupenInfo[0].imagePath}` + '&name=' +
          `${this.coupenInfo[0].image}` +
          '&width=160&height=150';
        this.changeDetectRef.detectChanges();
      }
    } else {
      this.coupenInfo = ' ';
    }
  }

  // Upload Image
  uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }

  uploadChange($event): void {
    this.submitted = false;
    this.convertBase64($event.target);
  }

  convertBase64(inputValue: any): void {
    const file: File = inputValue.files[0];
    this.coupenForm.controls['imageInput'].setValue(file ? file.name : ''); // <-- Set Value for Validation
    const myReader: FileReader = new FileReader();

    myReader.onloadend = e => {
      this.postImageUrl = myReader.result;
      this.ImageUrl = myReader.result;
      console.log('select image', this.ImageUrl);
      this.changeDetectRef.detectChanges();
    };
    myReader.readAsDataURL(file);
  }

  //  validation controls  -  function (f) is using in coupen add html
  get f() {
    return this.coupenForm.controls;
  }

  // show all validation at when invalid form
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
