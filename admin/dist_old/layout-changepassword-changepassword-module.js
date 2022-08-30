(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-changepassword-changepassword-module"],{

/***/ "./src/core/admin/profile/changepassword/changepassword-effect/changepassword.effect.ts":
/*!**********************************************************************************************!*\
  !*** ./src/core/admin/profile/changepassword/changepassword-effect/changepassword.effect.ts ***!
  \**********************************************************************************************/
/*! exports provided: ChangepasswordEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordEffect", function() { return ChangepasswordEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _changepassword_action_changepassword_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../changepassword-action/changepassword.action */ "./src/core/admin/profile/changepassword/changepassword-action/changepassword.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _changepassword_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../changepassword.service */ "./src/core/admin/profile/changepassword/changepassword.service.ts");
/* harmony import */ var _changepassword_models_changepassword_response_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../changepassword-models/changepassword.response.model */ "./src/core/admin/profile/changepassword/changepassword-models/changepassword.response.model.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */








var ChangepasswordEffect = /** @class */ (function () {
    function ChangepasswordEffect(action$, service) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        this.doChangePassword$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_changepassword_action_changepassword_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_CHANGE_PASWORD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.changePassword(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [
                new _changepassword_action_changepassword_action__WEBPACK_IMPORTED_MODULE_5__["DoChangePasswordSucessAction"](new _changepassword_models_changepassword_response_model__WEBPACK_IMPORTED_MODULE_8__["ChangepasswordResponseModel"](user))
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _changepassword_action_changepassword_action__WEBPACK_IMPORTED_MODULE_5__["DoChangePasswordFailAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ChangepasswordEffect.prototype, "doChangePassword$", void 0);
    ChangepasswordEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _changepassword_service__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordService"]])
    ], ChangepasswordEffect);
    return ChangepasswordEffect;
}());



/***/ }),

/***/ "./src/core/admin/profile/changepassword/changepassword-models/changepassword.model.ts":
/*!*********************************************************************************************!*\
  !*** ./src/core/admin/profile/changepassword/changepassword-models/changepassword.model.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChangePasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordForm", function() { return ChangePasswordForm; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ChangePasswordForm = /** @class */ (function () {
    function ChangePasswordForm(changePasswordForm) {
        this.oldPassword = changePasswordForm.oldpsw || '';
        this.newPassword = changePasswordForm.newpsw || '';
    }
    return ChangePasswordForm;
}());



/***/ }),

/***/ "./src/core/admin/profile/changepassword/changepassword-models/changepassword.response.model.ts":
/*!******************************************************************************************************!*\
  !*** ./src/core/admin/profile/changepassword/changepassword-models/changepassword.response.model.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChangepasswordResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordResponseModel", function() { return ChangepasswordResponseModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ChangepasswordResponseModel = /** @class */ (function () {
    function ChangepasswordResponseModel(changepasswordResponse) {
        this.user = {};
        this.user = changepasswordResponse || '';
    }
    return ChangepasswordResponseModel;
}());



/***/ }),

/***/ "./src/core/admin/profile/changepassword/changepassword-reducer/changepassword.selector.ts":
/*!*************************************************************************************************!*\
  !*** ./src/core/admin/profile/changepassword/changepassword-reducer/changepassword.selector.ts ***!
  \*************************************************************************************************/
/*! exports provided: getChangePasswordState, getChangePassword, getChangePasswordResponse, getChangePasswordRequestLoading, getChangePasswordRequestLoaded, getChangePasswordRequestFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangePasswordState", function() { return getChangePasswordState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangePassword", function() { return getChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangePasswordResponse", function() { return getChangePasswordResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangePasswordRequestLoading", function() { return getChangePasswordRequestLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangePasswordRequestLoaded", function() { return getChangePasswordRequestLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangePasswordRequestFailed", function() { return getChangePasswordRequestFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _changepassword_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.reducer */ "./src/core/admin/profile/changepassword/changepassword-reducer/changepassword.reducer.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
var getChangePasswordState = function (state) { return state.changepassword; };
var getChangePassword = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChangePasswordState, _changepassword_reducer__WEBPACK_IMPORTED_MODULE_1__["getChangePassword"]);
var getChangePasswordResponse = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChangePasswordState, _changepassword_reducer__WEBPACK_IMPORTED_MODULE_1__["getChangePasswordResponse"]);
var getChangePasswordRequestLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChangePasswordState, _changepassword_reducer__WEBPACK_IMPORTED_MODULE_1__["getChangePasswordRequestLoading"]);
var getChangePasswordRequestLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChangePasswordState, _changepassword_reducer__WEBPACK_IMPORTED_MODULE_1__["getChangePasswordRequestLoaded"]);
var getChangePasswordRequestFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChangePasswordState, _changepassword_reducer__WEBPACK_IMPORTED_MODULE_1__["getChangePasswordRequestFailed"]);


/***/ }),

/***/ "./src/core/admin/profile/changepassword/changepassword.sandbox.ts":
/*!*************************************************************************!*\
  !*** ./src/core/admin/profile/changepassword/changepassword.sandbox.ts ***!
  \*************************************************************************/
/*! exports provided: ChangepasswordSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordSandbox", function() { return ChangepasswordSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _changepassword_action_changepassword_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword-action/changepassword.action */ "./src/core/admin/profile/changepassword/changepassword-action/changepassword.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _changepassword_models_changepassword_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changepassword-models/changepassword.model */ "./src/core/admin/profile/changepassword/changepassword-models/changepassword.model.ts");
/* harmony import */ var _changepassword_reducer_changepassword_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword-reducer/changepassword.selector */ "./src/core/admin/profile/changepassword/changepassword-reducer/changepassword.selector.ts");

/*
* spurtcommerce
* version 1.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2022 piccosoft ltd
* Author piccosoft ltd <support@piccosoft.com>
* Licensed under the MIT license.
*/






var ChangepasswordSandbox = /** @class */ (function () {
    function ChangepasswordSandbox(appState, router) {
        this.appState = appState;
        this.router = router;
        this.getChangePassword$ = this.appState.select(_changepassword_reducer_changepassword_selector__WEBPACK_IMPORTED_MODULE_6__["getChangePassword"]);
        this.getChangePasswordResponse$ = this.appState.select(_changepassword_reducer_changepassword_selector__WEBPACK_IMPORTED_MODULE_6__["getChangePasswordResponse"]);
        this.getChangePasswordRequestLoading$ = this.appState.select(_changepassword_reducer_changepassword_selector__WEBPACK_IMPORTED_MODULE_6__["getChangePasswordRequestLoading"]);
        this.getChangePasswordRequestLoade$ = this.appState.select(_changepassword_reducer_changepassword_selector__WEBPACK_IMPORTED_MODULE_6__["getChangePasswordRequestLoaded"]);
        this.getChangePasswordRequestFailed$ = this.appState.select(_changepassword_reducer_changepassword_selector__WEBPACK_IMPORTED_MODULE_6__["getChangePasswordRequestFailed"]);
        this.subscriptions = [];
        this.subscribe();
    }
    ChangepasswordSandbox.prototype.changePSW = function (value) {
        this.appState.dispatch(new _changepassword_action_changepassword_action__WEBPACK_IMPORTED_MODULE_3__["DoChangePasswordAction"](new _changepassword_models_changepassword_model__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordForm"](value)));
    };
    ChangepasswordSandbox.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.getChangePassword$.subscribe(function (data) {
            if (data) {
                if (data.user) {
                    if (data.user.status === 1) {
                        _this.router.navigate(['/catalog/product']);
                    }
                }
            }
        }));
    };
    ChangepasswordSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChangepasswordSandbox);
    return ChangepasswordSandbox;
}());



/***/ }),

/***/ "./src/core/admin/profile/changepassword/changepassword.service.ts":
/*!*************************************************************************!*\
  !*** ./src/core/admin/profile/changepassword/changepassword.service.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordService", function() { return ChangePasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var ChangePasswordService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangePasswordService, _super);
    function ChangePasswordService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.URL = _this.getBaseUrl();
        return _this;
    }
    // change psw
    ChangePasswordService.prototype.changePassword = function (param) {
        return this.http.put(this.URL + '/auth/change-password', param);
    };
    ChangePasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ChangePasswordService);
    return ChangePasswordService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/layout/changepassword/changepassword.component.html":
/*!*************************************************************************************!*\
  !*** ./src/theme/default/admin/layout/changepassword/changepassword.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n    <div class=\"auth-box on-sidebar\">\n        <div class=\"changePswform\">\n            <!-- Form -->\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <form novalidate (ngSubmit)=\"onSubmit(changePassword.value)\" [formGroup]=\"changePassword\" class=\"form-horizontal m-t-20\">\n\n                        <h3>Change Password</h3>\n                        <div class=\"input-group mb-4\">\n                            <input [(ngModel)]=\"oldPSW\" required minlength=\"5\" type=\"password\" formControlName=\"oldPSW\" class=\"form-control form-control-md\" [ngClass]=\"{ 'is-invalid': submitted && f.oldPSW.errors }\" placeholder=\"Current Password\" aria-label=\"Current Password\" aria-describedby=\"basic-addon1\">\n                            <div *ngIf=\"submitted && f.oldPSW.errors\" class=\"invalid-feedback\">\n                                (minimum 5 characters).\n                                <div *ngIf=\"f.oldPSW.errors.required\">Current Password is required\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"input-group mb-4\">\n                            <input [(ngModel)]=\"newPSW\" required minlength=\"5\" type=\"password\" formControlName=\"newPSW\" class=\"form-control form-control-md\" [ngClass]=\"{ 'is-invalid': submitted && f.newPSW.errors }\" placeholder=\"New Password\" aria-label=\"New Password\" aria-describedby=\"basic-addon2\">\n                            <div *ngIf=\"submitted && f.newPSW.errors\" class=\"invalid-feedback\">\n                                (minimum 5 characters).\n                                <div *ngIf=\"f.newPSW.errors.required\">New Password is required\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"input-group mb-4\">\n                            <input [(ngModel)]=\"confirmPSW\" required minlength=\"5\" type=\"password\" formControlName=\"confirmPSW\" class=\"form-control form-control-md\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPSW.errors }\" placeholder=\"Confirm Password\" aria-label=\"Confirm Password\"\n                                aria-describedby=\"basic-addon2\">\n                            <div *ngIf=\"submitted && f.confirmPSW.errors\" class=\"invalid-feedback\">\n                                (minimum 5 characters).\n                                <div *ngIf=\"f.confirmPSW.errors.required\">Confirm Password is required\n\n                                </div>\n                                <div *ngIf=\"f.confirmPSW.errors.mismatchedPasswords\">New Password and Confirm password should Match </div>\n\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"custom-control custom-checkbox\">\n\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 p-b-20\">\n                                <button class=\"btn btn-info  float-left\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\">\n                                    Cancel\n                                </button>\n                                <button class=\"btn btn-block btn-info  float-right\" type=\"submit\">\n                                    Submit\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/layout/changepassword/changepassword.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/layout/changepassword/changepassword.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_profile_changepassword_changepassword_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/admin/profile/changepassword/changepassword.sandbox */ "./src/core/admin/profile/changepassword/changepassword.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb, sandbox) {
        this.fb = fb;
        this.sandbox = sandbox;
        this.submitted = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.initChangePswForm();
    };
    // InitFormGroup
    ChangePasswordComponent.prototype.initChangePswForm = function () {
        this.changePassword = this.fb.group({
            oldPSW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPSW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPSW: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: this.matchingPasswords('newPSW', 'confirmPSW') });
    };
    /**
     * Handles form 'matchingPasswords' event. for conformation password.
     * @param passwordKey for password value
     * @param passwordConfirmationKey for Repassword value
     */
    ChangePasswordComponent.prototype.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var passwordConfirmation = group.controls[passwordConfirmationKey];
            if (password.value !== passwordConfirmation.value) {
                return passwordConfirmation.setErrors({ mismatchedPasswords: true });
            }
        };
    };
    /**
     * Handles form 'submit' event. Calls sandbox change password function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    ChangePasswordComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
        if (this.changePassword.invalid) {
            return;
        }
        var para = {};
        para.oldpsw = this.changePassword.value.oldPSW;
        para.newpsw = this.changePassword.value.newPSW;
        this.sandbox.changePSW(para);
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        // form Validation
        get: function () {
            return this.changePassword.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/theme/default/admin/layout/changepassword/changepassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_admin_profile_changepassword_changepassword_sandbox__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordSandbox"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/layout/changepassword/changepassword.module.ts":
/*!********************************************************************************!*\
  !*** ./src/theme/default/admin/layout/changepassword/changepassword.module.ts ***!
  \********************************************************************************/
/*! exports provided: ChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_profile_changepassword_changepassword_effect_changepassword_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/admin/profile/changepassword/changepassword-effect/changepassword.effect */ "./src/core/admin/profile/changepassword/changepassword-effect/changepassword.effect.ts");
/* harmony import */ var _changepassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword.component */ "./src/theme/default/admin/layout/changepassword/changepassword.component.ts");
/* harmony import */ var _core_admin_profile_changepassword_changepassword_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/admin/profile/changepassword/changepassword.sandbox */ "./src/core/admin/profile/changepassword/changepassword.sandbox.ts");
/* harmony import */ var _core_admin_profile_changepassword_changepassword_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/admin/profile/changepassword/changepassword.service */ "./src/core/admin/profile/changepassword/changepassword.service.ts");
/* harmony import */ var _changepassword_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changepassword.routing */ "./src/theme/default/admin/layout/changepassword/changepassword.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */










var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_core_admin_profile_changepassword_changepassword_effect_changepassword_effect__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordEffect"]]),
                _changepassword_routing__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            declarations: [_changepassword_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"]],
            providers: [_core_admin_profile_changepassword_changepassword_sandbox__WEBPACK_IMPORTED_MODULE_7__["ChangepasswordSandbox"], _core_admin_profile_changepassword_changepassword_service__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordService"]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/layout/changepassword/changepassword.routing.ts":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/layout/changepassword/changepassword.routing.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePasswordRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordRouting", function() { return ChangePasswordRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _changepassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword.component */ "./src/theme/default/admin/layout/changepassword/changepassword.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var changePasswordRoutes = [
    {
        path: '',
        component: _changepassword_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]
    }
];
var ChangePasswordRouting = /** @class */ (function () {
    function ChangePasswordRouting() {
    }
    ChangePasswordRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(changePasswordRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChangePasswordRouting);
    return ChangePasswordRouting;
}());



/***/ })

}]);
//# sourceMappingURL=layout-changepassword-changepassword-module.js.map