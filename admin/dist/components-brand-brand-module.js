(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-brand-brand-module"],{

/***/ "./src/theme/default/admin/catalog/components/brand/add/add.component.html":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/add/add.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--REACTIVE FORM-->\n<form novalidate [formGroup]=\"brandForm\">\n\n    <div class=\"row products-section\">\n        <div class=\"col-12\">\n            <div class=\"breadcrumbs-row noborder\">\n                <div class=\"bc-col\">\n                    <ul>\n                        <li><a href=\"javascript:void(0)\" [routerLink]=\"['/catalog/brand']\">Brand </a></li>\n                        <li> {{updateManufacturerId ? 'Update Brand' : 'Add Brand' }}</li>\n                    </ul>\n                </div>\n                <div class=\"bc-col-btn ap-col-btn\">\n                    <button class=\"btn btn-save\" type=\"submit\" (click)=\"onSubmits()\"><img\n                            src=\"assets/img/tick-round-white.png\"> Save\n                    </button>\n                    <button class=\"btn btn-cancel\" (click)='cancel()'><img\n                            src=\"assets/img/close-white-ico.png\"> Cancel\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"flex addproduct-wrap\">\n        <div class=\"card ap-general\">\n            <div class=\"ap-header\">\n                <span> 1 </span> General\n            </div>\n            <div class=\"flex ap-body\">\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Brand Name <sup>*</sup></label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Brand Name\" formControlName=\"name\" [ngClass]=\"{'validationcolor':brandForm.get('name').hasError('required') && brandForm.get('name').touched && submitted}\">\n                        <div class=\"error\" *ngIf=\"brandForm.get('name').hasError('required') && brandForm.get('name').touched && submitted\">\n                            Brand Name is required\n                        </div>\n                    </div>\n                </div>\n                <!-- Col -->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label class=\"image-upload-container\">Brand Image\n                            <sup>{{updateManufacturerId ? '' : '*'}}</sup></label>\n                        <input type=\"file\" accept=\"image/*\" class=\"form-control\" formControlName=\"image\" (change)='onUpload($event)' #filePath style=\"display:none\" [ngClass]=\"{'validationcolor':brandForm.get('image').hasError('required') && brandForm.get('image').touched && submitted}\">\n                    </div>\n                    <button class=\"btn btn-success\" (click)='uploadButtonClick()'>Upload Pic</button>\n                    <div *ngIf=\"brandForm.controls['image'].hasError('required') && brandForm.controls['image'].touched\" class=\"error\">\n                        Brand Image is required\n                    </div>\n                </div>\n\n                <!-- col for updating image -->\n                <!--  -->\n                <div *ngIf='captureUrl'>\n                    <img [src]=captureUrl class=\"brand-img\" alt=\"\">\n                </div>\n\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Sort Order<sup>*</sup></label>\n                        <input type=\"text\" appOnlyNumber class=\"form-control\" placeholder=\"sort Order\" formControlName=\"sortOrder\" [ngClass]=\"{'validationcolor':brandForm.get('sortOrder').hasError('required') && brandForm.get('sortOrder').touched && submitted}\">\n                        <div class=\"error\" *ngIf=\"brandForm.get('sortOrder').hasError('required') && brandForm.get('sortOrder').touched && submitted\">\n                            Sort Order is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label> Status<sup>*</sup></label>\n                        <select class=\"form-control custom-select\" formControlName=\"status\" placeholder=\"status\" [ngClass]=\"{'validationcolor':!brandForm.get('status').valid && !brandForm.get('status').untouched && submitted}\">\n                            <option value=''>- -Select Status- -</option>\n                            <option value=\"1\">Enabled</option>\n                            <option value=\"0\">Disabled</option>\n                        </select>\n                        <div class=\"error\" *ngIf=\"brandForm.get('status').hasError('required') && brandForm.get('status').touched && submitted\">\n                            Status is required\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/add/add.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/add/add.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n/* input[type=text].ng-invalid.ng-touched{\n  border: red solid 1px;\n} */\n.dark-modal .modal-content {\n  background-color: #009efb;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #5cb3fd;\n}\n.image-manager .modal-dialog {\n  max-width: 70%;\n}\n.brand-img {\n  width: 67px;\n  height: 63px;\n  padding-left: -3%;\n  margin-left: -122px;\n}\n.disabled {\n  pointer-events: all !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2JyYW5kL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvYnJhbmQvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQUNBO0VBQ0UsaUJBQUE7QUNDRjtBREdBO0VBQ0UsVUFBQTtBQ0FGO0FER0E7O0dBQUE7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLHlCQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7QUNBRjtBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLDhCQUFBO0FDQUYiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2JyYW5kL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMT0dJTiBWQUxJREFUSU9OKi9cbi52YWxpZGF0aW9uY29sb3Ige1xuICBib3JkZXItY29sb3I6IHJlZDtcblxufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBpbnB1dFt0eXBlPXRleHRdLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xufSAqL1xuLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLW1vZGFsIC5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuXG4uaW1hZ2UtbWFuYWdlciAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG59XG5cbi5icmFuZC1pbWcge1xuICB3aWR0aDogNjdweDtcbiAgaGVpZ2h0OiA2M3B4O1xuICBwYWRkaW5nLWxlZnQ6IC0zJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMjJweFxufVxuXG4uZGlzYWJsZWR7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cbiIsIi8qIExPR0lOIFZBTElEQVRJT04qL1xuLnZhbGlkYXRpb25jb2xvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBpbnB1dFt0eXBlPXRleHRdLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xufSAqL1xuLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLW1vZGFsIC5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuXG4uaW1hZ2UtbWFuYWdlciAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG59XG5cbi5icmFuZC1pbWcge1xuICB3aWR0aDogNjdweDtcbiAgaGVpZ2h0OiA2M3B4O1xuICBwYWRkaW5nLWxlZnQ6IC0zJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMjJweDtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/add/add.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/add/add.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BrandAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandAddComponent", function() { return BrandAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/brand/brand.sandbox */ "./src/core/admin/catalog/brand/brand.sandbox.ts");
/* harmony import */ var _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/brand/brandApiClientservice */ "./src/core/admin/catalog/brand/brandApiClientservice.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */








var BrandAddComponent = /** @class */ (function () {
    function BrandAddComponent(modalService, modalService2, fb, sandBox, brandApi, router, configService, changeDetectRef) {
        this.modalService = modalService;
        this.modalService2 = modalService2;
        this.fb = fb;
        this.sandBox = sandBox;
        this.brandApi = brandApi;
        this.router = router;
        this.configService = configService;
        this.changeDetectRef = changeDetectRef;
        this.params = {};
        this.submitted = false;
    }
    BrandAddComponent.prototype.ngOnInit = function () {
        this.imageUrl = this.configService.getImageUrl();
        this.loadForm();
        this.editManufacturerForm();
    };
    // STYLE PURPOSE
    BrandAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // STYLE PURPOSE
    BrandAddComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService
            .open(content, { windowClass: 'image-manager' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // STYLE PURPOSE
    BrandAddComponent.prototype.open = function (content) {
        this.modalService2.open(content, {
            windowClass: 'dark-modal,image-manager'
        });
    };
    // STYLE PURPOSE
    BrandAddComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // initial form created  with Validation
    BrandAddComponent.prototype.loadForm = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.image = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.sortOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.brandForm = this.fb.group({
            name: this.name,
            image: this.image,
            sortOrder: this.sortOrder,
            status: this.status
        });
    };
    /**
     * Handles form 'onSubmit' event . Calls sandbox function addManufacturer updateManufactuer if form is valid.
     * @param brandForm entire form value
     * @param params storing entire form value
     */
    BrandAddComponent.prototype.onSubmits = function () {
        this.submitted = true;
        if (!this.brandForm.valid) {
            this.validateAllFormFields(this.brandForm);
            return;
        }
        else {
            this.params.name = this.brandForm.value.name;
            if (this.imageCaptureUrl != null && this.imageCaptureUrl !== undefined) {
                var fileExtension = this.imageCaptureUrl.replace(/^.*\./, '');
                if (fileExtension === 'jpeg' ||
                    fileExtension === 'png' ||
                    fileExtension === 'jpg') {
                    this.params.image = '';
                    this.brandForm.controls['image'].clearValidators();
                    this.brandForm.controls['image'].updateValueAndValidity();
                }
                else {
                    this.params.image = this.imageCaptureUrl;
                }
            }
            this.params.sortOrder = this.brandForm.value.sortOrder;
            this.params.status = this.brandForm.value.status;
            if (this.manufacturerEditedValue) {
                this.params.manufacturerId = this.manufacturerEditedValue.manufacturerId;
                this.sandBox.updateManufactuer(this.params);
            }
            else {
                this.sandBox.addManufacturer(this.params);
                this.imageCaptureUrl = '';
                this.brandForm.reset();
            }
        }
    };
    /**
     * A function 'editManufacturerForm' for update and add manufacturer list
     * @param manufacturerEditedValue getting the manufacturer list data
     */
    BrandAddComponent.prototype.editManufacturerForm = function () {
        this.manufacturerEditedValue = this.brandApi.getManufacturerEditeValue();
        if (this.manufacturerEditedValue != null &&
            this.manufacturerEditedValue !== undefined &&
            this.manufacturerEditedValue) {
            this.updateManufacturerId = this.manufacturerEditedValue.manufacturerId;
            this.name.setValue(this.manufacturerEditedValue.name);
            // tslint:disable-next-line:max-line-length
            this.captureUrl =
                this.imageUrl + '?path=' +
                    ("" + this.manufacturerEditedValue.imagePath) + '&name=' +
                    ("" + this.manufacturerEditedValue.image) +
                    '&width=160&height=150';
            if (this.manufacturerEditedValue.image ||
                this.manufacturerEditedValue.image === '') {
                this.brandForm.controls['image'].clearValidators();
                this.brandForm.controls['image'].updateValueAndValidity();
            }
            this.sortOrder.setValue(this.manufacturerEditedValue.sortOrder);
            this.status.setValue(this.manufacturerEditedValue.isActive);
        }
    };
    // cancel add brand form and navigate to brandList Page
    BrandAddComponent.prototype.cancel = function () {
        this.brandForm.reset();
        this.imageCaptureUrl = '';
        this.updateManufacturerId = null;
        this.router.navigate(['/catalog/brand/list']);
    };
    // show all validation at when invalid form
    BrandAddComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    // image upload and base64 convert section
    BrandAddComponent.prototype.uploadButtonClick = function () {
        var el = this.filePath.nativeElement;
        el.click();
    };
    // A Function 'onUpload' getting upload file
    BrandAddComponent.prototype.onUpload = function (event) {
        this.convertBase64(event.target);
    };
    /**
     * A function 'convertBase64' for converting image file into base64
     * @param imageFile getting image file from input
     */
    BrandAddComponent.prototype.convertBase64 = function (imageFile) {
        var _this = this;
        var file = imageFile.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.imageCaptureUrl = myReader.result;
            _this.captureUrl = myReader.result;
            // this.image = this.imageCaptureUrl;
            _this.brandForm.controls['image'].setErrors(null);
            _this.changeDetectRef.detectChanges();
        };
        myReader.readAsDataURL(file);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filePath'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BrandAddComponent.prototype, "filePath", void 0);
    BrandAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-brand-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/catalog/components/brand/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/theme/default/admin/catalog/components/brand/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_6__["BrandSandbox"],
            _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_7__["BrandApiClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BrandAddComponent);
    return BrandAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/brand.module.ts":
/*!**************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/brand.module.ts ***!
  \**************************************************************************/
/*! exports provided: BrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModule", function() { return BrandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/catalog/components/brand/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/catalog/components/brand/list/list.component.ts");
/* harmony import */ var _brand_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brand.routing */ "./src/theme/default/admin/catalog/components/brand/brand.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _core_admin_shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/admin/shared/validation-directives/onlyNumber.module */ "./src/core/admin/shared/validation-directives/onlyNumber.module.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter/filter.component */ "./src/theme/default/admin/catalog/components/brand/filter/filter.component.ts");
/* harmony import */ var _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/product/product.sandbox */ "./src/core/admin/catalog/product/product.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




// components


// Routing Module

// Shared Module




var BrandModule = /** @class */ (function () {
    function BrandModule() {
    }
    BrandModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_add_component__WEBPACK_IMPORTED_MODULE_5__["BrandAddComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["BrandListComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["BrandFilterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _brand_routing__WEBPACK_IMPORTED_MODULE_7__["BrandRoutingModule"],
                _core_admin_shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_9__["NumberAcceptModule"]
            ],
            providers: [_core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_11__["ProductSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], BrandModule);
    return BrandModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/brand.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/brand.routing.ts ***!
  \***************************************************************************/
/*! exports provided: BrandRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandRoutingModule", function() { return BrandRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/catalog/components/brand/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/catalog/components/brand/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var brandRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["BrandListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["BrandAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["BrandAddComponent"]
    },
];
var BrandRoutingModule = /** @class */ (function () {
    function BrandRoutingModule() {
    }
    BrandRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(brandRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], BrandRoutingModule);
    return BrandRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/filter/filter.component.html":
/*!***************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/filter/filter.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div [formGroup]=\"prodfilter\" class=\"new-user\">-->\n\n<form [formGroup]=\"filterForm\">\n\n    <div class=\"form-group\">\n        <label for=\"keyword\">Brand Name</label>\n        <input type=\"text\" formControlName=\"keyword\" class=\"form-control\" id=\"Keyword\" aria-describedby=\"emailHelp\" placeholder=\"Enter Brand Name\">\n    </div>\n\n    <div class=\"text-right filter-btns\">\n        <a (click)=\"resetFilter()\" style=\"cursor: pointer\">Reset</a>\n\n        <button type=\"submit\" class=\"btn\" (click)=\"applyFilter()\">Apply Filters\n        </button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/filter/filter.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/filter/filter.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  background: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2JyYW5kL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvYnJhbmQvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2JyYW5kL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xufSIsIi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/filter/filter.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/filter/filter.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BrandFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandFilterComponent", function() { return BrandFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/product/product.sandbox */ "./src/core/admin/catalog/product/product.sandbox.ts");
/* harmony import */ var _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/brand/brand.sandbox */ "./src/core/admin/catalog/brand/brand.sandbox.ts");

/*
 * SpurtCommerce API
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




// Store Module
var BrandFilterComponent = /** @class */ (function () {
    function BrandFilterComponent(fb, sandbox, brandSandBox) {
        this.fb = fb;
        this.sandbox = sandbox;
        this.brandSandBox = brandSandBox;
        this.price = 0;
        this.selectedLink = 'Min';
        this.progressEmits = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // initially calling the reactive form by setting  pagination count
    BrandFilterComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage');
        this.pagenationCount = true;
        this.initFilterForm();
    };
    // reactive form
    BrandFilterComponent.prototype.initFilterForm = function () {
        this.filterForm = this.fb.group({
            keyword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    // selecting the price
    BrandFilterComponent.prototype.selectPrice = function (e) {
        this.selectedLink = e;
    };
    /**
     * Handles  'resetFilter' event. Calls  getProductList and reset().
     *
     * @param filterForm entire form value
     */
    BrandFilterComponent.prototype.resetFilter = function () {
        this.filterForm.reset();
        var param = {};
        param.limit = this.pageSize;
        param.offset = '';
        param.keyword = '';
        this.progressEmits.emit(param);
        this.brandSandBox.manufacturerList(param);
    };
    /**
     * Handles  'applyFilter' event. Calls  getProductList.
     * if (selectedLink == 'Min') assign price value 1 ,
     * else assign price value 1
     */
    BrandFilterComponent.prototype.applyFilter = function () {
        this.keyword = this.filterForm.value.keyword;
        this.getProductList();
    };
    /**
     * Handles  'getProductList' event. Calls sandbox getProductList function ,
     * if (pagenationCount) then calls sandbox getProductCount.
     * @param params with pagination values
     * @param form entire form value
     */
    BrandFilterComponent.prototype.getProductList = function () {
        var params = {};
        params.offset = '';
        params.limit = this.pageSize;
        params.keyword = this.keyword;
        this.progressEmits.emit(params);
        this.brandSandBox.manufacturerList(params);
        params.limit = '';
        params.count = true;
        this.brandSandBox.manufacturerCountList(params);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BrandFilterComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BrandFilterComponent.prototype, "progressEmits", void 0);
    BrandFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-brand-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/theme/default/admin/catalog/components/brand/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/theme/default/admin/catalog/components/brand/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_3__["ProductSandbox"], _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_4__["BrandSandbox"]])
    ], BrandFilterComponent);
    return BrandFilterComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/list/list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/list/list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row products-section products-sub-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\"> Catalog </a></li>\n                    <li> Brand</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn\">\n                <button class=\"btn\" (click)='addBrand()'><img\n                        src=\"assets/img/add-white-ico.png\"> Add Brand\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n    <div class=\"col-12\">\n        <div class=\"flex filter-row\">\n            <div class=\"filter-lft\">\n                <div class=\"toggle\">\n                    <p>Filters</p>\n                    <input class=\"tgl tgl-light\" id=\"cb1\" type=\"checkbox\" [checked]=\"true\" (change)=\"changeFilter($event)\" />\n                    <label class=\"tgl-btn\" for=\"cb1\"></label>\n                </div>\n                <div class=\"order-status\">\n                    <p>Status</p>\n                    <li style=\"list-style: none\">\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-right: 6px;vertical-align: middle;background-color: #32b643;\"></span>Active\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-left: 3px;margin-right: 7px;vertical-align: middle;background-color: #ea5738e6;\"></span>In Active\n\n                    </li>\n                </div>\n            </div>\n            <!--Lft-->\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"flex product-wrap example-full-width\">\n    <div *ngIf=\"buttonCheck == true\" class=\"filter-section\">\n        <div class=\"w3-container w3-animate-left\">\n            <app-catalog-brand-filter (progressEmit)=\"receiveProgress($event)\"></app-catalog-brand-filter>\n        </div>\n    </div>\n    <!--Filter-->\n    <div class=\"product-table\" [ngClass]=\"{'changesize': buttonCheck == true }\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th class=\"text-center\" scope=\"col\">Brand Name</th>\n                        <th class=\"text-center\" scope=\"col\">Brand Image</th>\n                        <th class=\"text-center\" scope=\"col\">Sort Order</th>\n                        <th class=\"text-center\" scope=\"col\">Action</th>\n                        <th class=\"text-center\" scope=\"col\" width=\"100px\" class=\"text-center\">Status\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let arr of (sandbox.getManufactureList$|async)'>\n\n                        <td class=\"text-center\">{{arr.name}}\n                        </td>\n                        <td class=\"text-center\">\n                            <img *ngIf=\"arr.image\" [src]=\"imageUrl + '?path=' + arr.imagePath + '&name=' + arr.image + '&width=60&height=60'\" onError=\"this.src='/assets/error-images/Load icon Products.png';\" (load)=\"brandListImageLoading(arr.manufacturerId)\" [hidden]=\"!brandListImage[arr.manufacturerId]\">\n                            <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"brandListImage[arr.manufacturerId]\">\n                        </td>\n                        <td class=\"text-center\">{{arr.sortOrder}}</td>\n                        <td class=\"text-center\">\n                            <a href=\"javascript:void(0)\" (click)='editManufacture(arr)'> <img src=\"assets/img/edit-ico.png\"></a>\n                            <a href=\"javascript:void(0)\">\n                                <img src=\"assets/img/delete-file-ico.png\" [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: 15px;\">\n                                <ng-template #deleteContent>\n                                    <div class=\"style\">\n                                        <div class=\"modal-header\">\n                                            <h6 class=\"modal-title\" style=\"margin-left: 17%;\">Do you want to delete ?\n                                            </h6>\n                                        </div>\n                                        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-success\" (click)=\"deleteBrand(arr.manufacturerId, deletePop)\" data-dismiss=\"modal\">Yes\n                                            </button>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </a>\n                        </td>\n                        <td class=\"text-center\">\n                            <div *ngIf=\"arr.isActive === 1\">\n                                <span style=\"width: 41px;background: #32b643; color: white;display: inline-block;padding: 1px 4px;\"><b>Active</b></span>\n\n                            </div>\n                            <div *ngIf=\"arr.isActive === 0\">\n                                <span style=\"background: #ea5738e6; color: white;width: 63px;display: inline-block;padding: 1px 4px;\"><b>In-Active</b></span>\n\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"no_data\" *ngIf=\"(sandbox.getManufactureList$|async)?.length==0\">\n                <p>Items not found</p>\n            </div>\n            <mat-paginator [length]='(sandbox.getManufacturercount$|async)' [pageSize]=\"pageSize\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\n            </mat-paginator>\n\n        </div>\n    </div>\n    <!--Table-->\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/list/list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/list/list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ed571f !important;\n  border: #ed571f !important;\n}\n\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2JyYW5kL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9icmFuZC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQ0FBQTtFQUNBLDBCQUFBO0FDREY7O0FER0E7RUFDRSxvQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9icmFuZC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZWQ1NzFmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjojZWQ1NzFmICAhaW1wb3J0YW50O1xufVxuLnRvZ2dsZSAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbn0iLCIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogI2VkNTcxZiAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/brand/list/list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/brand/list/list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BrandListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandListComponent", function() { return BrandListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/brand/brand.sandbox */ "./src/core/admin/catalog/brand/brand.sandbox.ts");
/* harmony import */ var _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/brand/brandApiClientservice */ "./src/core/admin/catalog/brand/brandApiClientservice.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Routing Module

// Shared Module

// Store Module


var BrandListComponent = /** @class */ (function () {
    function BrandListComponent(sandbox, brandApi, route, configService) {
        this.sandbox = sandbox;
        this.brandApi = brandApi;
        this.route = route;
        this.configService = configService;
        this.keyword = '';
        this.pageSize = '10';
        this.pageSizeOptions = [10, 25, 100];
        this.brandListImage = {};
        // condition for filter component
        this.buttonCheck = true;
    }
    BrandListComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.pagenationcount = true;
        this.getManufacturerList();
        this.regSubscriptionEvents();
        this.imageUrl = this.configService.getImageUrl();
    };
    /**
     * Handles form 'getManufacturerList' event . Calls sandbox function manufacturerList manufacturerCountList if form is valid.
     * @param offset intial offset value
     */
    BrandListComponent.prototype.getManufacturerList = function (offset) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = '';
        params.count = '';
        this.sandbox.manufacturerList(params);
        if (this.pagenationcount) {
            params.limit = '';
            params.count = 'true';
            this.sandbox.manufacturerCountList(params);
        }
    };
    /**
     * A function 'onPageChange' handle the page change event
     * @param event from event
     */
    BrandListComponent.prototype.onPageChange = function (event) {
        this.pagenationcount = false;
        this.pageoffset = event.pageSize * event.pageIndex;
        this.pageSize = event.pageSize;
        this.getManufacturerList(this.pageoffset);
    };
    /**
     *  Handles form 'editManufacture' event. Calls brandApi Service setManufactureEditValue function if form is valid
     * @param editValue brand list data value
     */
    BrandListComponent.prototype.editManufacture = function (editValue) {
        this.brandApi.setManufactureEditValue(editValue);
        this.route.navigate(['catalog/brand/edit', editValue.manufacturerId]);
    };
    // open add brand component form
    BrandListComponent.prototype.addBrand = function () {
        this.brandApi.setManufactureEditValue('');
        this.route.navigate(['catalog/brand/add']);
    };
    /**
     * A function 'deleteBrand' handle delete brandlist data
     * @param manufacturerId From manufacturerId
     */
    BrandListComponent.prototype.deleteBrand = function (manufacturerId, deletePop) {
        event.stopPropagation();
        this.sandbox.deleteManufacturer({ manufacturerId: manufacturerId });
    };
    // A function 'regSubscribeEvents'  call after getting delete response for pagination purpose
    BrandListComponent.prototype.regSubscriptionEvents = function () {
        var _this = this;
        this.sandbox.getManufacturerDelete$.subscribe(function (_delete) {
            if (_delete && _delete.status && _delete.status === 1) {
                _this.pagenationcount = true;
                _this.getManufacturerList(_this.pageoffset);
            }
        });
    };
    // BrandList Image Loader
    BrandListComponent.prototype.brandListImageLoading = function (id) {
        this.brandListImage[id] = true;
    };
    // shows the filter component
    BrandListComponent.prototype.changeFilter = function (event) {
        this.buttonCheck = event.target.checked;
    };
    // receive param from filter component .And calls categoriesPagination event
    BrandListComponent.prototype.receiveProgress = function (event) {
        this.index = 0;
        this.getManufacturerList();
        this.keyword = event.keyword;
        this.sortOrder = event.sortOrder;
    };
    BrandListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-brand-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/catalog/components/brand/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/catalog/components/brand/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_4__["BrandSandbox"],
            _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_5__["BrandApiClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], BrandListComponent);
    return BrandListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-brand-brand-module.js.map