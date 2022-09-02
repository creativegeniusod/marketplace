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

module.exports = "<mat-card class=\"loginPage\">\n    <div class=\"containerWrap\">\n        <div class=\"formSignInUp\" fxLayout=\"row wrap\">\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"47\" class=\"p-2\">\n                <router-outlet></router-outlet>\n            </div>\n            <div class=\"signUpForm\" fxFlex=\"100\" fxFlex.gt-sm=\"47\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n                <h4><span>or continue with</span></h4>\n\n                <div class=\"text-center mt-3 formIcons\">\n                    <button class=\"loginBtn loginBtn--facebook\" (click)=\"login()\">\n                        <mat-icon>facebook</mat-icon>\n                    </button>\n                    <mat-icon><img src=\"../../../../assets/images/google.png\" alt=\"\"></mat-icon>\n                </div>\n                <!-- <h2 class=\"text-muted text-center\">Sign up</h2> -->\n                <h6>Become a Beaver Member</h6>\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\" novalidate>\n                    <mat-form-field class=\"w-100 mt-2\"\n                        [ngClass]=\"{validationcolor:registerForm.controls.name.hasError('required') && submitted }\">\n                        <input matInput placeholder=\"Full Name\" formControlName=\"name\" required>\n                        <mat-error *ngIf=\"registerForm.controls['name'].hasError('required') && submitted\">Full Name is\n                            required</mat-error>\n                        <mat-error *ngIf=\"registerForm.controls['name'].hasError('minlength') && submitted\">Full Name\n                            isn't long enough, minimum of 3 characters</mat-error>\n                        <mat-error *ngIf=\"registerForm.controls['name'].hasError('pattern') && submitted\">Name must be\n                            string</mat-error>\n                    </mat-form-field>\n                    <div class=\"formField fieldWithIcon emailIcon\">\n                        <mat-form-field class=\"w-100 mt-1\"\n                            [ngClass]=\"{validationcolor:registerForm.controls.email.hasError('required') && submitted }\">\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                            <mat-error *ngIf=\"registerForm.controls['email'].hasError('required') && submitted\">Email is\n                                required</mat-error>\n                            <mat-error *ngIf=\"registerForm.controls['email'].hasError('invalidEmail') && submitted\">\n                                Invalid email address</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"formField fieldWithIcon lockIcon\">\n                        <mat-form-field class=\"w-100 mt-1\"\n                            [ngClass]=\"{validationcolor:registerForm.controls.password.hasError('required') && submitted }\">\n                            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\"\n                                minlength=\"5\" required>\n                            <mat-error *ngIf=\"registerForm.controls['password'].hasError('required') && submitted\">\n                                Password is required</mat-error>\n                            <mat-error *ngIf=\"registerForm.controls['password'].hasError('minlength') && submitted\">\n                                Password isn't long enough, minimum of 5 characters</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <mat-form-field class=\"w-100 mt-1\"\n                        [ngClass]=\"{validationcolor:registerForm.controls.confirmPassword.hasError('required') && submitted }\">\n                        <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\"\n                            required>\n                        <mat-error *ngIf=\"registerForm.controls['confirmPassword'].hasError('required') && submitted\">\n                            Confirm Password is required</mat-error>\n                        <mat-error\n                            *ngIf=\"registerForm.controls['confirmPassword'].hasError('mismatchedPasswords') && submitted\">\n                            Passwords do not match</mat-error>\n                    </mat-form-field>\n                    <div class=\"text-center mt-2\">\n                        <mat-checkbox class=\"example-margin\">Remember me!</mat-checkbox>\n                    </div>\n\n                    <div class=\"mt-2\">\n                        <h3>By continueing. I agree to the terms of use & pivacy polices</h3>\n                    </div>\n                    <!-- <mat-form-field class=\"w-100 mt-1\">\n                        <input matInput type=\"text\" maxlength=15 appOnlyNumber placeholder=\"Phone Number\" formControlName=\"phoneNumber\">\n\n                    </mat-form-field> -->\n\n                    <div class=\"text-center mt-2\">\n                        <button type=\"submit\" mat-button color=\"primary\" class=\"signUpBtn actionBtn\">\n                            <!-- <mat-icon>person_add</mat-icon> -->\n                            Sign up\n                        </button>\n                    </div>\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\n                        <h5 class=\"text-center text-red auth forgot w-100\">\n                            Already have an account? </h5>\n                    </div>\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-1\">\n                        <h5 class=\"text-center text-red auth forgot w-100\">\n                            Become a seller</h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/Authentication/Auth/auth.component.scss":
/*!*******************************************************************!*\
  !*** ./src/default/pages/Authentication/Auth/auth.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500; }\n\n.forgot {\n  cursor: pointer; }\n\n.validationcolor ::ng-deep .mat-form-field-underline, .validationcolor ::ng-deep .mat-form-field-ripple {\n  background-color: red !important;\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: red  !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: gray !important;\n  color: gray !important; }\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: gray !important; }\n\n::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: gray  !important; }\n\nh4 {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 20px; }\n\nh4 span {\n  background: #fff;\n  padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL0F1dGhlbnRpY2F0aW9uL0F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFHSSxpQ0FBZ0M7RUFDaEMsc0JBQXFCLEVBQ3RCOztBQUxIO0VBT0ksc0JBQXFCLEVBQ3RCOztBQVJIO0VBVUksdUJBQXNCLEVBQ3ZCOztBQUdIO0VBQ0Usa0NBQWlDO0VBQ2pDLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsOEJBQTZCO0VBQzdCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRyxpQkFBZTtFQUNmLGdCQUFjLEVBQ2hCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL0F1dGhlbnRpY2F0aW9uL0F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoe1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiA3cHggMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb3Jnb3R7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52YWxpZGF0aW9uY29sb3J7XG5cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6IHJlZCAgIWltcG9ydGFudDtcbiAgfVxuXG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiBncmF5ICAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gIHdpZHRoOiAxMDAlOyBcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7IFxuICBsaW5lLWhlaWdodDogMC4xZW07XG4gIG1hcmdpbjogMTBweCAwIDIwcHg7IFxufSBcblxuaDQgc3BhbiB7IFxuICAgYmFja2dyb3VuZDojZmZmOyBcbiAgIHBhZGRpbmc6MCAxMHB4OyBcbn0iXX0= */"

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
        this.fbLibrary();
        var mobileValidationPattern = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
        var nameValidationPattern = '[a-zA-Z \'-,;.]*';
        this.registerForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(nameValidationPattern), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        }, { validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["matchingPasswords"])('password', 'confirmPassword') });
    };
    AuthComponent.prototype.login = function () {
        window['FB'].login(function (response) {
            console.log('login response', response);
            if (response.authResponse) {
                window['FB'].api('/me', {
                    fields: 'last_name, first_name, email'
                }, function (userInfo) {
                    console.log("user information");
                    console.log(userInfo);
                });
            }
            else {
                console.log('User login failed');
            }
        }, { scope: 'email' });
    };
    AuthComponent.prototype.fbLibrary = function () {
        window.fbAsyncInit = function () {
            window['FB'].init({
                appId: '1815259135478978',
                cookie: true,
                xfbml: true,
                version: 'v3.1'
            });
            window['FB'].AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    /** calls authSandbox doRegister if tthe from is valid.
     Then calls resetAllFormFields for reset **/
    AuthComponent.prototype.onRegisterFormSubmit = function (values) {
        if (this.registerForm.valid) {
            console.log(this.registerForm.value);
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

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500; }\n\n.forgot {\n  cursor: pointer; }\n\n.validationcolor ::ng-deep .mat-form-field-underline, .validationcolor ::ng-deep .mat-form-field-ripple {\n  background-color: red !important;\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: red  !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: gray !important;\n  color: gray !important; }\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: gray !important; }\n\n::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: gray  !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL0F1dGhlbnRpY2F0aW9uL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBR0ksaUNBQWdDO0VBQ2hDLHNCQUFxQixFQUN0Qjs7QUFMSDtFQU9JLHNCQUFxQixFQUN0Qjs7QUFSSDtFQVVJLHVCQUFzQixFQUN2Qjs7QUFHSDtFQUNFLGtDQUFpQztFQUNqQyx1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSx1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvQXV0aGVudGljYXRpb24vZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoe1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiA3cHggMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb3Jnb3R7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52YWxpZGF0aW9uY29sb3J7XG5cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6IHJlZCAgIWltcG9ydGFudDtcbiAgfVxuXG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwgPiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiBncmF5ICAhaW1wb3J0YW50O1xufVxuIl19 */"

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

module.exports = "<div fxFlex=\"100\" class=\"signInForm\">\r\n    <!-- <span style=\"padding: 2px; font-weight: 500;\">or continue with</span> -->\r\n\r\n    <h4><span>or continue with</span></h4>\r\n    <div class=\"text-center mt-3 formIcons\">\r\n        <mat-icon>facebook</mat-icon>\r\n        <mat-icon><img src=\"../../../../assets/images/google.png\" alt=\"\"></mat-icon> \r\n    </div>\r\n\r\n    <h2 class=\"signInTitle\">Sign In</h2>\r\n    <span>Become a Beaver Member and recieve exclusive offers customized for you</span>\r\n    <form [formGroup]=\"loginForm\" novalidate class=\"mt-2\">\r\n        <div class=\"formField fieldWithIcon emailIcon\">\r\n            <mat-form-field class=\"w-100 mt-1\" [ngClass]=\"{'validationcolor':\r\n        (loginForm.controls.email.hasError('required') && submitted)}\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                <mat-error *ngIf=\"loginForm.controls['email'].hasError('required') && submitted\">\r\n                    Email is required\r\n                </mat-error>\r\n                <mat-error *ngIf=\"loginForm.controls['email'].hasError('invalidEmail') && submitted\">\r\n                    Invalid email address\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"formField fieldWithIcon emailIcon\">\r\n        <mat-form-field class=\"w-100 mt-1\" [ngClass]=\"{'validationcolor':\r\n    (loginForm.controls.password.hasError('required') && submitted)}\">\r\n            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\">\r\n            <mat-error *ngIf=\"loginForm.controls['password'].hasError('required') && submitted\">\r\n                Password is required\r\n            </mat-error>\r\n            <mat-error *ngIf=\"loginForm.controls['password'].hasError('minlength') && submitted\">\r\n                Password isn't long enough, minimum of 5 characters\r\n            </mat-error>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n        <div class=\"text-center mt-2\">\r\n            <mat-checkbox class=\"example-margin\">Remember me!</mat-checkbox>\r\n        </div>\r\n\r\n        <div class=\"mt-2\">\r\n            <h3>By continueing. I agree to the terms of use & pivacy polices</h3>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-2\">\r\n            <!-- <button mat-fab color=\"primary\" class=\"mat-elevation-z6\" (click)=\"onLoginFormSubmit(loginForm.value)\">\r\n                <i *ngIf=\"(authSandbox.loginLoading$ | async)\" class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\r\n\r\n                <mat-icon *ngIf=\"!(authSandbox.loginLoading$ | async)\">exit_to_app</mat-icon>\r\n            </button> -->\r\n            <button mat-button color=\"primary\" class=\"signInBtn actionBtn\" (click)=\"onLoginFormSubmit(loginForm.value)\">\r\n                <i *ngIf=\"(authSandbox.loginLoading$ | async)\" class=\"fa fa-spinner fa-spin\"\r\n                    style=\"font-size:24px\"></i>Sign In</button>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-2\">\r\n            <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\">Create A New Accout</button>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\r\n            <h5 class=\"text-center text-red auth w-100\">\r\n                Become a seller</h5>\r\n        </div>\r\n\r\n\r\n        <!-- <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-2\">\r\n            <h5 class=\"text-muted auth forgot\" routerLink=\"/auth/forgot\">\r\n                Forgot Password?</h5>\r\n        </div> -->\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/default/pages/Authentication/sign-in/sign-in.component.scss":
/*!*************************************************************************!*\
  !*** ./src/default/pages/Authentication/sign-in/sign-in.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500; }\n\n.forgot {\n  cursor: pointer;\n  margin-left: 40%; }\n\n.validationcolor ::ng-deep .mat-form-field-underline, .validationcolor ::ng-deep .mat-form-field-ripple {\n  background-color: red !important;\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: red !important; }\n\n.validationcolor ::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: red  !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: gray !important;\n  color: gray !important; }\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: gray !important; }\n\n::ng-deep .mat-form-field-label > .mat-form-field-required-marker {\n  color: gray  !important; }\n\n.boder-right {\n  border-right: 1px solid black; }\n\nh4 {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 20px; }\n\nh4 span {\n  background: #ffffff;\n  padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL0F1dGhlbnRpY2F0aW9uL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFHUSxpQ0FBZ0M7RUFDaEMsc0JBQXFCLEVBQ3hCOztBQUxMO0VBT1Esc0JBQXFCLEVBQ3hCOztBQVJMO0VBVVEsdUJBQXNCLEVBQ3pCOztBQUVMO0VBQ0ksa0NBQWlDO0VBQ2pDLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsOEJBQTZCO0VBQzdCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDckI7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsZ0JBQWMsRUFDakIiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvQXV0aGVudGljYXRpb24vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5mb3Jnb3R7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcbi52YWxpZGF0aW9uY29sb3J7XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsID4gIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQgICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCA+ICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcclxuICAgIGNvbG9yOiBncmF5ICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9kZXItcmlnaHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgXHJcbiAgICBsaW5lLWhlaWdodDogMC4xZW07XHJcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4OyBcclxuIH0gXHJcbiBcclxuIGg0IHNwYW4geyBcclxuICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcclxuICAgICBwYWRkaW5nOjAgMTBweDsgXHJcbiB9Il19 */"

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
        this.fbLibrary();
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
            console.log(params, "");
            // return false;
            this.authSandbox.doLogin(params);
            this.submitted = false;
        }
    };
    SignInComponent.prototype.fbLibrary = function () {
        window.fbAsyncInit = function () {
            window['FB'].init({
                appId: '1815259135478978',
                cookie: true,
                xfbml: true,
                version: 'v3.1'
            });
            window['FB'].AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    SignInComponent.prototype.login = function () {
        window['FB'].login(function (response) {
            console.log('login response', response);
            if (response.authResponse) {
                window['FB'].api('/me', {
                    fields: 'last_name, first_name, email'
                }, function (userInfo) {
                    console.log("user information");
                    console.log(userInfo);
                });
            }
            else {
                console.log('User login failed');
            }
        }, { scope: 'email' });
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