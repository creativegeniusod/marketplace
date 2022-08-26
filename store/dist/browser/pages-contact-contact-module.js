(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./src/default/pages/contact/contact.component.html":
/*!**********************************************************!*\
  !*** ./src/default/pages/contact/contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\">\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\r\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">home</mat-icon>\r\n            <h3 class=\"primary-text py-1\">ADDRESS:</h3>\r\n            <span class=\"text-muted\">{{(listSandbox.settingDetail$ | async)?.storeAddress}}</span>\r\n        </div>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">call</mat-icon>\r\n            <h3 class=\"primary-text py-1\">PHONE:</h3>\r\n            <span class=\"text-muted\">{{(listSandbox.settingDetail$ | async)?.storeTelephone}}</span>\r\n        </div>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">mail_outline</mat-icon>\r\n            <h3 class=\"primary-text py-1\">E-MAIL:</h3>\r\n            <span class=\"text-muted\">{{(listSandbox.settingDetail$ | async)?.storeEmail}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"divider w-100 mt-2\"></div>\r\n    <h3 class=\"w-100 text-center py-2\">CONTACT US</h3>\r\n\r\n    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n            <mat-form-field class=\"w-100\" [ngClass]=\"{'validationcolor':((contactForm.controls.name.errors?.required)&&(submitted))}\">\r\n                <input matInput (keyup)=\"onKeyPress($event, 'name')\" placeholder=\"Name\" formControlName=\"name\" required>\r\n                <mat-error *ngIf=\"contactForm.controls['name'].errors?.required && submitted\">Name is required</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n            <mat-form-field class=\"w-100\" [ngClass]=\"{'validationcolor':((contactForm.controls.email.errors?.required)&&(submitted))}\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                <mat-error *ngIf=\"contactForm.controls['email'].errors?.required && submitted\">Email is required</mat-error>\r\n                <mat-error *ngIf=\"contactForm.controls['email'].hasError('invalidEmail') && submitted\">Invalid email address</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n            <mat-form-field class=\"w-100\" [ngClass]=\"{'validationcolor':((contactForm.controls.phone.errors?.required)&&(submitted))}\">\r\n                <input matInput placeholder=\"Phone\" formControlName=\"phone\" maxlength=\"15\" appOnlyNumber required>\r\n                <mat-error *ngIf=\"contactForm.controls['phone'].errors?.required && submitted\">Phone number is required</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n            <mat-form-field class=\"w-100\" [ngClass]=\"{'validationcolor':((contactForm.controls.message.errors?.required)&&(submitted))}\">\r\n                <input matInput (keyup)=\"onKeyPress($event, 'message')\" placeholder=\"Message\" formControlName=\"message\" required>\r\n                <mat-error *ngIf=\"contactForm.controls['message'].errors?.required && submitted\">Message is required</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"w-100 py-2 text-center\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n        </div>\r\n    </form>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/contact/contact.component.scss":
/*!**********************************************************!*\
  !*** ./src/default/pages/contact/contact.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validationcolor ::ng-deep .mat-form-field-underline, .validationcolor ::ng-deep .mat-form-field-ripple {\n  background-color: red !important;\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: red  !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: gray !important;\n  color: gray !important; }\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: gray !important; }\n\n::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: gray  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3BhZ2VzL2NvbnRhY3QvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxpQ0FBZ0M7RUFDaEMsc0JBQXFCLEVBQ3RCOztBQUxIO0VBT0ksc0JBQXFCLEVBQ3RCOztBQVJIO0VBVUksdUJBQXNCLEVBQ3ZCOztBQUVIO0VBQ0Usa0NBQWlDO0VBQ2pDLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbmNvbG9ye1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsID4gIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xyXG4gICAgY29sb3I6IHJlZCAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XHJcbiAgY29sb3I6IGdyYXkgICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/pages/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/default/pages/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/default/theme/utils/app-validators.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */




var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, listSandbox) {
        this.formBuilder = formBuilder;
        this.listSandbox = listSandbox;
        // validation
        this.submitted = false;
    }
    // Initially calls initContactForm
    ContactComponent.prototype.ngOnInit = function () {
        this.initContactForm();
    };
    // create form group for the contact form
    ContactComponent.prototype.initContactForm = function () {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // call contact us function from sand box if the contact form is valid
    ContactComponent.prototype.onContactFormSubmit = function (values) {
        this.submitted = true;
        if (this.contactForm.valid) {
            this.submitted = false;
            this.listSandbox.contactUs(this.contactForm.value);
        }
    };
    ContactComponent.prototype.onKeyPress = function (e, field) {
        var val = this.contactForm.controls[field].value;
        var string = val.replace(/  +/g, ' ');
        this.contactForm.controls[field].setValue(string);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/default/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/default/pages/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__["ListsSandbox"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/default/pages/contact/contact.module.ts":
/*!*****************************************************!*\
  !*** ./src/default/pages/contact/contact.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.component */ "./src/default/pages/contact/contact.component.ts");
/* harmony import */ var _shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/validation-directives/onlyNumber.module */ "./src/default/shared/validation-directives/onlyNumber.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
// module








var routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], pathMatch: 'full' }
];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_7__["NumberAcceptModule"]
            ],
            declarations: [
                _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/default/shared/validation-directives/only-number.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/default/shared/validation-directives/only-number.directive.ts ***!
  \***************************************************************************/
/*! exports provided: OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    OnlyNumberDirective.prototype.KeyDown = function (event) {
        this.regex = new RegExp(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/);
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "KeyDown", null);
    OnlyNumberDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appOnlyNumber]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "./src/default/shared/validation-directives/onlyNumber.module.ts":
/*!***********************************************************************!*\
  !*** ./src/default/shared/validation-directives/onlyNumber.module.ts ***!
  \***********************************************************************/
/*! exports provided: NumberAcceptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberAcceptModule", function() { return NumberAcceptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./only-number.directive */ "./src/default/shared/validation-directives/only-number.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var NumberAcceptModule = /** @class */ (function () {
    function NumberAcceptModule() {
    }
    NumberAcceptModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_only_number_directive__WEBPACK_IMPORTED_MODULE_1__["OnlyNumberDirective"]],
            exports: [_only_number_directive__WEBPACK_IMPORTED_MODULE_1__["OnlyNumberDirective"]]
        })
    ], NumberAcceptModule);
    return NumberAcceptModule;
}());



/***/ }),

/***/ "./src/default/theme/utils/app-validators.ts":
/*!***************************************************!*\
  !*** ./src/default/theme/utils/app-validators.ts ***!
  \***************************************************/
/*! exports provided: emailValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module.js.map