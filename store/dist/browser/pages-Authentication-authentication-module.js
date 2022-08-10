(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Authentication-authentication-module"],{

/***/ "./src/core/auth/auth.service.ts":
/*!***************************************!*\
  !*** ./src/core/auth/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthApiService", function() { return AuthApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/providers/api/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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


var AuthApiService = /** @class */ (function (_super) {
    __extends(AuthApiService, _super);
    function AuthApiService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = _this.getBaseUrl();
        return _this;
    }
    /* call login api*/
    AuthApiService.prototype.doLogin = function (params) {
        // if ((params.emailId) && (params.password)) {
        return this.http.post(this.base + 'customer/login', params);
        // }
        // else {
        //     return this.http.post(this.base + 'customer/Oauth-login', params);
        // }
    };
    AuthApiService.prototype.doOauth = function (params) {
        var auth = params.url;
        delete params.url;
        return this.http.post('https://' + auth, params);
    };
    /* call register api*/
    AuthApiService.prototype.doRegister = function (params) {
        return this.http.post(this.base + 'customer/register', params);
    };
    /* call recover account api*/
    AuthApiService.prototype.doRecover = function (params) {
        return this.http.post(this.base + 'customer/forgot-password', params);
    };
    AuthApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthApiService);
    return AuthApiService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_1__["Api"]));



/***/ }),

/***/ "./src/core/auth/effects/auth.effect.ts":
/*!**********************************************!*\
  !*** ./src/core/auth/effects/auth.effect.ts ***!
  \**********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_loginResponse_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/loginResponse.model */ "./src/core/auth/models/loginResponse.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/core/auth/auth.service.ts");
/* harmony import */ var _action_auth_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../action/auth.action */ "./src/core/auth/action/auth.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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










var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, router, authApi, appState$) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.authApi = authApi;
        this.appState$ = appState$;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].DO_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.doLogin(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
                _this.router.navigate(['/']);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (loggedin) {
                return new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoLoginSuccess"](new _models_loginResponse_model__WEBPACK_IMPORTED_MODULE_6__["LoginResponseModel"](loggedin));
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoLoginFail"](new _models_loginResponse_model__WEBPACK_IMPORTED_MODULE_6__["LoginResponseModel"](error)));
            }));
        }));
        this.register$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].DO_REGISTER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            if (state.phoneNumber === '') {
                delete state.phoneNumber;
            }
            return _this.authApi.doRegister(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (register) { return new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoRegisterSuccess"](register); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoRegisterFail"](error)); }));
        }));
        this.recover$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].DO_RECOVER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.doRecover(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (register) { return new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["RecoverAccountSuccess"](register); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["RecoverAccountFail"](error)); }));
        }));
        this.oauthLogin$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_8__["ActionTypes"].DO_OAUTH_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.doOauth(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) {
                _this.router.navigate(['/']);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (log) { return new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoLoginSuccess"](new _models_loginResponse_model__WEBPACK_IMPORTED_MODULE_6__["LoginResponseModel"](log)); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_8__["DoLoginFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "register$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "recover$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AuthEffects.prototype, "oauthLogin$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/core/auth/models/loginResponse.model.ts":
/*!*****************************************************!*\
  !*** ./src/core/auth/models/loginResponse.model.ts ***!
  \*****************************************************/
/*! exports provided: LoginResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginResponseModel", function() { return LoginResponseModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var LoginResponseModel = /** @class */ (function () {
    function LoginResponseModel(loginResponse) {
        this.user_token = loginResponse.data || '';
    }
    return LoginResponseModel;
}());



/***/ }),

/***/ "./src/default/pages/Authentication/Auth/auth.component.html":
/*!*******************************************************************!*\
  !*** ./src/default/pages/Authentication/Auth/auth.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div fxLayout=\"row wrap\">\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\n            <router-outlet></router-outlet>\n        </div>\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n            <h2 class=\"text-muted text-center\">Sign up</h2>\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\" novalidate>\n                <mat-form-field class=\"w-100 mt-2\" [ngClass]=\"{validationcolor:registerForm.controls.name.hasError('required') && submitted }\">\n                    <input matInput placeholder=\"Full Name\" formControlName=\"name\" required>\n                    <mat-error *ngIf=\"registerForm.controls['name'].hasError('required') && submitted\">Full Name is required</mat-error>\n                    <mat-error *ngIf=\"registerForm.controls['name'].hasError('minlength') && submitted\">Full Name isn't long enough, minimum of 3 characters</mat-error>\n                    <mat-error *ngIf=\"registerForm.controls['name'].hasError('pattern') && submitted\">Name must be string</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"w-100 mt-1\" [ngClass]=\"{validationcolor:registerForm.controls.email.hasError('required') && submitted }\">\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                    <mat-error *ngIf=\"registerForm.controls['email'].hasError('required') && submitted\">Email is required</mat-error>\n                    <mat-error *ngIf=\"registerForm.controls['email'].hasError('invalidEmail') && submitted\">Invalid email address</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"w-100 mt-1\" [ngClass]=\"{validationcolor:registerForm.controls.password.hasError('required') && submitted }\">\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"5\" required>\n                    <mat-error *ngIf=\"registerForm.controls['password'].hasError('required') && submitted\">Password is required</mat-error>\n                    <mat-error *ngIf=\"registerForm.controls['password'].hasError('minlength') && submitted\">Password isn't long enough, minimum of 5 characters</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"w-100 mt-1\" [ngClass]=\"{validationcolor:registerForm.controls.confirmPassword.hasError('required') && submitted }\">\n                    <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\" required>\n                    <mat-error *ngIf=\"registerForm.controls['confirmPassword'].hasError('required') && submitted\">Confirm Password is required</mat-error>\n                    <mat-error *ngIf=\"registerForm.controls['confirmPassword'].hasError('mismatchedPasswords') && submitted\">Passwords do not match</mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"w-100 mt-1\">\n                    <input matInput type=\"text\" maxlength=15 appOnlyNumber placeholder=\"Phone Number\" formControlName=\"phoneNumber\">\n\n                </mat-form-field>\n\n                <div class=\"text-center mt-2\">\n                    <button mat-fab color=\"primary\" type=\"submit\" class=\"mat-elevation-z6\">\n                        <mat-icon>person_add</mat-icon>\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/Authentication/Auth/auth.component.scss":
/*!*******************************************************************!*\
  !*** ./src/default/pages/Authentication/Auth/auth.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500; }\n\n.forgot {\n  cursor: pointer; }\n\n.validationcolor ::ng-deep .mat-form-field-underline, .validationcolor ::ng-deep .mat-form-field-ripple {\n  background-color: red !important;\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: red  !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: gray !important;\n  color: gray !important; }\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: gray !important; }\n\n::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: gray  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2Uvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvQXV0aGVudGljYXRpb24vQXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUdJLGlDQUFnQztFQUNoQyxzQkFBcUIsRUFDdEI7O0FBTEg7RUFPSSxzQkFBcUIsRUFDdEI7O0FBUkg7RUFVSSx1QkFBc0IsRUFDdkI7O0FBR0g7RUFDRSxrQ0FBaUM7RUFDakMsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL0F1dGhlbnRpY2F0aW9uL0F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoe1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiA3cHggMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb3Jnb3R7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52YWxpZGF0aW9uY29sb3J7XG5cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6IHJlZCAgIWltcG9ydGFudDtcbiAgfVxuXG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiBncmF5ICAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/Authentication/Auth/auth.component.ts":
/*!*****************************************************************!*\
  !*** ./src/default/pages/Authentication/Auth/auth.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/default/theme/utils/app-validators.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
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






var AuthComponent = /** @class */ (function () {
    function AuthComponent(formBuilder, router, snackBar, authSandbox) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.authSandbox = authSandbox;
        // validation
        this.submitted = false;
    }
    // Initially initialize reactive form
    AuthComponent.prototype.ngOnInit = function () {
        var mobileValidationPattern = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
        var nameValidationPattern = '[a-zA-Z \'-,;.]*';
        this.registerForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(nameValidationPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'phoneNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(mobileValidationPattern)])]
        }, { validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["matchingPasswords"])('password', 'confirmPassword') });
    };
    /** calls authSandbox doRegister if tthe from is valid.
     Then calls resetAllFormFields for reset **/
    AuthComponent.prototype.onRegisterFormSubmit = function (values) {
        if (this.registerForm.valid) {
            this.authSandbox.doRegister(this.registerForm.value);
            this.submitted = false;
            this.registerForm.reset();
            // this.resetAllFormFields(this.registerForm);
        }
        else {
            this.submitted = true;
        }
    };
    // reset the values
    AuthComponent.prototype.resetAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.reset();
                control.clearValidators();
                control.updateValueAndValidity();
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.resetAllFormFields(control);
            }
        });
    };
    // validate the reactive form
    AuthComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/default/pages/Authentication/Auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/default/pages/Authentication/Auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__["AuthSandbox"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/default/pages/Authentication/authentication.module.ts":
/*!*******************************************************************!*\
  !*** ./src/default/pages/Authentication/authentication.module.ts ***!
  \*******************************************************************/
/*! exports provided: routes, AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/validation-directives/onlyNumber.module */ "./src/default/shared/validation-directives/onlyNumber.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_auth_effects_auth_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/auth/effects/auth.effect */ "./src/core/auth/effects/auth.effect.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/default/pages/Authentication/sign-in/sign-in.component.ts");
/* harmony import */ var _Auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Auth/auth.component */ "./src/default/pages/Authentication/Auth/auth.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/default/pages/Authentication/forgot/forgot.component.ts");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/auth/auth.service */ "./src/core/auth/auth.service.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// module






// shared module

// effects


// component



// service

// sandbox

// social sign in
var routes = [
    {
        path: '', component: _Auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
        children: [
            { path: '', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"], pathMatch: 'full' },
            { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"], pathMatch: 'full' },
            { path: 'forgot', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_11__["ForgotComponent"], pathMatch: 'full' }
        ]
    },
];
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_core_auth_effects_auth_effect__WEBPACK_IMPORTED_MODULE_8__["AuthEffects"]]),
                _shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_6__["NumberAcceptModule"]
            ],
            declarations: [
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_11__["ForgotComponent"],
                _Auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"]
            ],
            providers: [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthApiService"], _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_13__["AuthSandbox"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/default/pages/Authentication/forgot/forgot.component.html":
/*!***********************************************************************!*\
  !*** ./src/default/pages/Authentication/forgot/forgot.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-muted text-center\">\n    Forgot Password</h2>\n<form [formGroup]=\"forgotForm\" novalidate>\n    <mat-form-field class=\"w-100 mt-2\" [ngClass]=\"{'validationcolor':\n    (forgotForm.controls.emailId.hasError('required') && submitted)}\">\n        <input matInput placeholder=\"Email\" formControlName=\"emailId\" required>\n        <mat-error *ngIf=\"forgotForm.controls['emailId'].hasError('required') && submitted\">Email is required</mat-error>\n        <mat-error *ngIf=\"forgotForm.controls['emailId'].hasError('invalidEmail') && submitted\">Invalid email address</mat-error>\n    </mat-form-field>\n    <div class=\"text-center mt-2\">\n        <button mat-fab color=\"primary\" class=\"mat-elevation-z6\" (click)=\"onForgotFormSubmit(forgotForm.value)\">\n            <mat-icon>exit_to_app</mat-icon>\n        </button>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\n        <div class=\"divider w-100\"></div>\n        <h3 class=\"text-muted auth forgot\" routerLink=\"/auth/sign-in\">or Go back to Login</h3>\n        <div class=\"divider w-100\"></div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/default/pages/Authentication/forgot/forgot.component.scss":
/*!***********************************************************************!*\
  !*** ./src/default/pages/Authentication/forgot/forgot.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500; }\n\n.forgot {\n  cursor: pointer; }\n\n.validationcolor ::ng-deep .mat-form-field-underline, .validationcolor ::ng-deep .mat-form-field-ripple {\n  background-color: red !important;\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: red  !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: gray !important;\n  color: gray !important; }\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: gray !important; }\n\n::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: gray  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2Uvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvQXV0aGVudGljYXRpb24vZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFHSSxpQ0FBZ0M7RUFDaEMsc0JBQXFCLEVBQ3RCOztBQUxIO0VBT0ksc0JBQXFCLEVBQ3RCOztBQVJIO0VBVUksdUJBQXNCLEVBQ3ZCOztBQUdIO0VBQ0Usa0NBQWlDO0VBQ2pDLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9BdXRoZW50aWNhdGlvbi9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDdweCAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvcmdvdHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnZhbGlkYXRpb25jb2xvcntcblxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCA+ICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogcmVkICAhaW1wb3J0YW50O1xuICB9XG5cbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCA+ICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6IGdyYXkgICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/default/pages/Authentication/forgot/forgot.component.ts":
/*!*********************************************************************!*\
  !*** ./src/default/pages/Authentication/forgot/forgot.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/default/theme/utils/app-validators.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
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






var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(formBuilder, router, snackBar, authSandbox) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.authSandbox = authSandbox;
        // validation
        this.submitted = false;
    }
    // Initially initialize reactive form
    ForgotComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.formBuilder.group({
            'emailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])]
        });
    };
    /**  calls authSandbox doRecover with values from forgotForm.
     * Then calls resetAllFormFields to reset all fields.
     *
     * */
    ForgotComponent.prototype.onForgotFormSubmit = function (values) {
        if (this.forgotForm.valid) {
            this.authSandbox.doRecover(this.forgotForm.value);
            this.submitted = false;
            this.forgotForm.reset();
            this.forgotForm.clearValidators();
        }
        else {
            this.submitted = true;
        }
    };
    // reset reactive form fields
    ForgotComponent.prototype.resetAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.reset();
                control.clearValidators();
                control.updateValueAndValidity();
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.resetAllFormFields(control);
            }
        });
    };
    // validate reactive form fields
    ForgotComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/default/pages/Authentication/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/default/pages/Authentication/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__["AuthSandbox"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/default/pages/Authentication/sign-in/sign-in.component.html":
/*!*************************************************************************!*\
  !*** ./src/default/pages/Authentication/sign-in/sign-in.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div fxFlex=\"100\"  class=\"p-2\">-->\r\n<h2 class=\"text-muted text-center\">Sign In</h2>\r\n<form [formGroup]=\"loginForm\" novalidate>\r\n    <mat-form-field class=\"w-100 mt-2\" [ngClass]=\"{'validationcolor':\r\n    (loginForm.controls.email.hasError('required') && submitted)}\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n        <mat-error *ngIf=\"loginForm.controls['email'].hasError('required') && submitted\">\r\n            Email is required\r\n        </mat-error>\r\n        <mat-error *ngIf=\"loginForm.controls['email'].hasError('invalidEmail') && submitted\">\r\n            Invalid email address\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"w-100 mt-1\" [ngClass]=\"{'validationcolor':\r\n    (loginForm.controls.password.hasError('required') && submitted)}\">\r\n        <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\">\r\n        <mat-error *ngIf=\"loginForm.controls['password'].hasError('required') && submitted\">\r\n            Password is required\r\n        </mat-error>\r\n        <mat-error *ngIf=\"loginForm.controls['password'].hasError('minlength') && submitted\">\r\n            Password isn't long enough, minimum of 5 characters\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <div class=\"text-center mt-2\">\r\n        <button mat-fab color=\"primary\" class=\"mat-elevation-z6\" (click)=\"onLoginFormSubmit(loginForm.value)\">\r\n                <i *ngIf=\"(authSandbox.loginLoading$ | async)\" class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\r\n\r\n            <mat-icon *ngIf=\"!(authSandbox.loginLoading$ | async)\">exit_to_app</mat-icon>\r\n        </button>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\r\n        <h5 class=\"text-muted auth forgot\" routerLink=\"/auth/forgot\">\r\n            Forgot Password?</h5>\r\n    </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/default/pages/Authentication/sign-in/sign-in.component.scss":
/*!*************************************************************************!*\
  !*** ./src/default/pages/Authentication/sign-in/sign-in.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500; }\n\n.forgot {\n  cursor: pointer;\n  margin-left: 40%; }\n\n.validationcolor ::ng-deep .mat-form-field-underline, .validationcolor ::ng-deep .mat-form-field-ripple {\n  background-color: red !important;\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: red  !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: gray !important;\n  color: gray !important; }\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: gray !important; }\n\n::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: gray  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2Uvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvQXV0aGVudGljYXRpb24vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFDRDtFQUdRLGlDQUFnQztFQUNoQyxzQkFBcUIsRUFDeEI7O0FBTEw7RUFPUSxzQkFBcUIsRUFDeEI7O0FBUkw7RUFVUSx1QkFBc0IsRUFDekI7O0FBRUw7RUFDSSxrQ0FBaUM7RUFDakMsdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL0F1dGhlbnRpY2F0aW9uL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoe1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDdweCAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uZm9yZ290e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG4udmFsaWRhdGlvbmNvbG9ye1xyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCA+ICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcclxuICAgICAgICBjb2xvcjogcmVkICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XHJcbiAgICBjb2xvcjogZ3JheSAgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/Authentication/sign-in/sign-in.component.ts":
/*!***********************************************************************!*\
  !*** ./src/default/pages/Authentication/sign-in/sign-in.component.ts ***!
  \***********************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/default/theme/utils/app-validators.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
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






var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBuilder, router, snackBar, authSandbox) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.authSandbox = authSandbox;
        // validation
        this.submitted = false;
    }
    // Initially initialize the reactive form
    SignInComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])
            ]
        });
    };
    /** calls authSandbox  doLogin if the form is valid.
     *
     * Then calls resetAllFormFields to reset the form fields .
     */
    SignInComponent.prototype.onLoginFormSubmit = function (values) {
        this.submitted = true;
        if (this.loginForm.valid) {
            var params = this.loginForm.value;
            params.type = 'normal';
            this.authSandbox.doLogin(params);
            this.submitted = false;
        }
    };
    // reset the form fields
    SignInComponent.prototype.resetAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.reset();
                control.clearValidators();
                control.updateValueAndValidity();
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.resetAllFormFields(control);
            }
        });
    };
    // validate the form fields
    SignInComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/default/pages/Authentication/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/default/pages/Authentication/sign-in/sign-in.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_5__["AuthSandbox"]])
    ], SignInComponent);
    return SignInComponent;
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
//# sourceMappingURL=pages-Authentication-authentication-module.js.map