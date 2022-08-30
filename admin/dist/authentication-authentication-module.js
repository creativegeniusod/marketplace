(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/core/admin/auth/effects/auth.effect.ts":
/*!****************************************************!*\
  !*** ./src/core/admin/auth/effects/auth.effect.ts ***!
  \****************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _action_auth_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/auth.action */ "./src/core/admin/auth/action/auth.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/core/admin/auth/auth.service.ts");
/* harmony import */ var _auth_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.sandbox */ "./src/core/admin/auth/auth.sandbox.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


// Store





// Service


var AuthEffects = /** @class */ (function () {
    function AuthEffects(action$, authService, sandbox) {
        var _this = this;
        this.action$ = action$;
        this.authService = authService;
        this.sandbox = sandbox;
        // LOGIN EFFECT
        this.doLogin$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authService.login(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_auth_action__WEBPACK_IMPORTED_MODULE_5__["DoLoginSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_5__["DoLoginFailAction"](error)); }));
        }));
        // FORGET EFFECT
        this.doForget$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_FORGOT_PASSWORD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authService.forgetPassword(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_auth_action__WEBPACK_IMPORTED_MODULE_5__["DoForgotPasswordSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_auth_action__WEBPACK_IMPORTED_MODULE_5__["DoForgotPasswordFailAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "doLogin$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "doForget$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _auth_sandbox__WEBPACK_IMPORTED_MODULE_8__["AuthSandbox"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/theme/default/admin/authentication/authentication.module.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/authentication.module.ts ***!
  \*************************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/theme/default/admin/authentication/login/login.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.routing */ "./src/theme/default/admin/authentication/authentication.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _core_admin_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/admin/auth/auth.service */ "./src/core/admin/auth/auth.service.ts");
/* harmony import */ var _core_admin_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/admin/auth/auth.sandbox */ "./src/core/admin/auth/auth.sandbox.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_auth_effects_auth_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/admin/auth/effects/auth.effect */ "./src/core/admin/auth/effects/auth.effect.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */












var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authentication_routing__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([_core_admin_auth_effects_auth_effect__WEBPACK_IMPORTED_MODULE_12__["AuthEffects"]])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]],
            providers: [_core_admin_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _core_admin_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_10__["AuthSandbox"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/authentication/authentication.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/authentication.routing.ts ***!
  \**************************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/theme/default/admin/authentication/login/login.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// components


var authRoutes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'forgot-password',
        component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-align\">\r\n    <div class=\"cards\">\r\n        <form (ngSubmit)=\"onSubmits($event, forgotPasswordForm.value)\" [formGroup]=\"forgotPasswordForm\">\r\n            <div class=\"admin\">Forgot Password</div>\r\n            <input type=\"text\" class=\"form-control placeholder-fix\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"{'validationcolor':forgotPasswordForm.get('email').hasError('required') && (forgotPasswordForm.get('email').touched)&&ifSubmitted==true}\">\r\n            <div class=\"error\" *ngIf=\"(forgotPasswordForm.get('email').hasError('required') && forgotPasswordForm.get('email').touched)&&ifSubmitted==true \">\r\n                Email required\r\n            </div>\r\n\r\n            <div class=\"error\" *ngIf=\"(forgotPasswordForm.get('email').hasError('pattern') && forgotPasswordForm.get('email').touched)&&ifSubmitted==true\">\r\n                Incorrect email\r\n            </div>\r\n            <button class=\"btn btn-log\">Submit <span [hidden]=\"!(authSandbox.forgotpasswordLoading$ | async)\"\r\n                class=\"spinner-border spinner-border-sm pull-right\" role=\"status\"\r\n                aria-hidden=\"true\"></span></button>\r\n            <div class=\"forgot\" [routerLink]=\"['/auth/login']\">Back to Login</div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n/* LOGIN VALIDATION*/\n/* .validationcolor {\n    border-color: red;\n\n}\n.error {\n    color: red;\n} */\n.form-control {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.53px;\n  color: #000000 !important;\n  height: 53px;\n  border-radius: 2px;\n  border: solid 1px #d6d6d6;\n  background-color: #ffffff;\n  margin-bottom: 8%;\n}\n.card-align {\n  margin-top: 23%;\n}\n.cards {\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);\n  background-color: #ffffff;\n  width: 70%;\n  margin: auto;\n  padding: 3% 5%;\n}\n.cards .admin {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #264151;\n  margin-bottom: 7%;\n}\n.cards .btn-log {\n  height: 53px;\n  background-color: #264151;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n  width: 100%;\n  margin: 5% 0% 3%;\n}\n.cards .forgot {\n  font-family: Roboto;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #514c4c;\n  text-decoration: underline;\n  text-align: right;\n  margin: 3% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdHBhc3N3b3JkL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxhZG1pbi9zcmNcXHRoZW1lXFxkZWZhdWx0XFxhZG1pblxcYXV0aGVudGljYXRpb25cXGZvcmdvdHBhc3N3b3JkXFxmb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBRUE7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0FDQUo7QURJQSxvQkFBQTtBQUdBOzs7Ozs7R0FBQTtBQVFBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTtFQUNJLGVBQUE7QUNKSjtBRE9BO0VBQ0ksNENBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0pKO0FES0k7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSFI7QURLSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSFI7QURLSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTE9HSU4gVkFMSURBVElPTiovXHJcblxyXG4udmFsaWRhdGlvbmNvbG9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi8qIExPR0lOIFZBTElEQVRJT04qL1xyXG5cclxuXHJcbi8qIC52YWxpZGF0aW9uY29sb3Ige1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcblxyXG59XHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTNweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDZkNmQ2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG59XHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMyU7XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyUgNSU7XHJcbiAgICAuYWRtaW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogIzI2NDE1MTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3JTtcclxuICAgIH1cclxuICAgIC5idG4tbG9nIHtcclxuICAgICAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDE1MTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiA1JSAwJSAzJTtcclxuICAgIH1cclxuICAgIC5mb3Jnb3Qge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgY29sb3I6ICM1MTRjNGM7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAzJSAwJSA1JTtcclxuICAgIH1cclxufSIsIi8qIExPR0lOIFZBTElEQVRJT04qL1xuLnZhbGlkYXRpb25jb2xvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBMT0dJTiBWQUxJREFUSU9OKi9cbi8qIC52YWxpZGF0aW9uY29sb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xuXG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59ICovXG4uZm9ybS1jb250cm9sIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjUzcHg7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDZkNmQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cblxuLmNhcmQtYWxpZ24ge1xuICBtYXJnaW4tdG9wOiAyMyU7XG59XG5cbi5jYXJkcyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDMlIDUlO1xufVxuLmNhcmRzIC5hZG1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzI2NDE1MTtcbiAgbWFyZ2luLWJvdHRvbTogNyU7XG59XG4uY2FyZHMgLmJ0bi1sb2cge1xuICBoZWlnaHQ6IDUzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQxNTE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgMCUgMyU7XG59XG4uY2FyZHMgLmZvcmdvdCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzUxNGM0YztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDMlIDAlIDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/admin/auth/auth.sandbox */ "./src/core/admin/auth/auth.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, authSandbox) {
        this.fb = fb;
        this.authSandbox = authSandbox;
        this.emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
        this.ifSubmitted = false;
    }
    // FORM VALIDATION
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        // FORGET PASSWORD
        this.forgotPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]]
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox forget password function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    ForgotPasswordComponent.prototype.onSubmits = function (event, form) {
        this.ifSubmitted = true;
        if (!this.forgotPasswordForm.valid) {
            this.validateAllFormFields(this.forgotPasswordForm);
            return;
        }
        var param = {};
        param.email = this.forgotPasswordForm.value.email;
        this.authSandbox.authforget(param);
    };
    // validation for forget password
    ForgotPasswordComponent.prototype.validateAllFormFields = function (formGroup) {
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
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.scss */ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_admin_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_3__["AuthSandbox"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/authentication/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"auth-box on-sidebar\">\r\n    <div class=\"loginform\" style=\"left: 25%;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <form (ngSubmit)=\"onSubmit(loginForm.value)\" [formGroup]=\"loginForm\" class=\"form-horizontal m-t-20\">\r\n                    <h3>Login Here</h3>\r\n                    <div class=\"input-group mb-4\">\r\n\r\n                        <input type=\"text\" class=\"form-control form-control-md\" placeholder=\"User Name\" aria-label=\"username\" aria-describedby=\"basic-addon1\" formControlName=\"username\" [ngClass]=\"{'validationcolor':loginForm.get('username').hasError('required') && loginForm.get('username').touched&& ifSubmitted==true||(badResponse==true)}\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('required') && loginForm.get('username').touched)&&ifSubmitted==true\">\r\n                        username required\r\n                    </div>\r\n                    <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('pattern') && loginForm.get('username').touched)&& ifSubmitted==true\">\r\n\r\n                        Incorrect email\r\n                    </div>\r\n\r\n                    <div class=\"input-group mb-4\">\r\n                        <input type=\"password\" class=\"form-control form-control-md\" placeholder=\"Password\" aria-label=\"password\" aria-describedby=\"basic-addon1\" formControlName=\"password\" [ngClass]=\"{'validationcolor':loginForm.get('password').hasError('required') && loginForm.get('password').touched&& ifSubmitted==true||(badResponse==true)}\">\r\n\r\n                    </div>\r\n\r\n                    <div class=\"error\" *ngIf=\"(loginForm.get('password').hasError('required') && loginForm.get('password').touched )&& ifSubmitted==true\">\r\n                        password required\r\n                    </div>\r\n                    <div class=\"error\" *ngIf=\"badResponse==true\">\r\n                        username or password is incorrect\r\n                    </div>\r\n\r\n\r\n                    <div novalidate class=\"form-group row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <a href=\"javascript:void(0)\" [routerLink]=\"['/auth/forgot-password']\" class=\"text-dark\">\r\n                                    Forgot password?</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 p-b-20\">\r\n                            <button class=\"btn btn-block btn-info  float-right\" type=\"submit\">\r\n                                Login\r\n                                <span [hidden]=\"!(authSandbox.loginLoading$ | async)\"\r\n                                      class=\"spinner-border spinner-border-sm pull-right\" role=\"status\"\r\n                                      aria-hidden=\"true\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n<div class=\"card-align\">\r\n    <div class=\"cards\">\r\n        <form (ngSubmit)=\"onSubmit(loginForm.value)\" [formGroup]=\"loginForm\">\r\n            <div class=\"admin\">Admin Log in</div>\r\n            <input type=\"text\" class=\"form-control placeholder-fix\" placeholder=\"User Name\" formControlName=\"username\" [ngClass]=\"{'validationcolor':loginForm.get('username').hasError('required') && loginForm.get('username').touched&& ifSubmitted==true||(badResponse==true)}\">\r\n            <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('required') && loginForm.get('username').touched)&&ifSubmitted==true\">\r\n                username required\r\n            </div>\r\n            <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('pattern') && loginForm.get('username').touched)&& ifSubmitted==true\">\r\n\r\n                Incorrect email\r\n            </div>\r\n            <input type=\"password\" class=\"form-control placeholder-fix\" placeholder=\"Password\" formControlName=\"password\" [ngClass]=\"{'validationcolor':loginForm.get('password').hasError('required') && loginForm.get('password').touched&& ifSubmitted==true||(badResponse==true)}\">\r\n            <div class=\"error\" *ngIf=\"(loginForm.get('password').hasError('required') && loginForm.get('password').touched )&& ifSubmitted==true\">\r\n                password required\r\n            </div>\r\n            <div class=\"error\" *ngIf=\"badResponse==true\">\r\n                username or password is incorrect\r\n            </div>\r\n            <button class=\"btn btn-log\">Log in</button>\r\n            <div class=\"forgot\" [routerLink]=\"['/auth/forgot-password']\">Cant login?</div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/authentication/login/login.component.scss":
/*!***************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/login/login.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n.form-control {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.53px;\n  color: #000000 !important;\n  height: 53px;\n  border-radius: 2px;\n  border: solid 1px #d6d6d6;\n  background-color: #ffffff;\n  margin-bottom: 8%;\n}\n.card-align {\n  margin-top: 23%;\n}\n.cards {\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);\n  background-color: #ffffff;\n  width: 70%;\n  margin: auto;\n  padding: 3% 5%;\n}\n.cards .admin {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #264151;\n  margin-bottom: 7%;\n}\n.cards .btn-log {\n  height: 53px;\n  background-color: #264151;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n  width: 100%;\n  margin: 5% 0% 3%;\n}\n.cards .forgot {\n  font-family: Roboto;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #514c4c;\n  text-decoration: underline;\n  text-align: right;\n  margin: 3% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2xvZ2luL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxhZG1pbi9zcmNcXHRoZW1lXFxkZWZhdWx0XFxhZG1pblxcYXV0aGVudGljYXRpb25cXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBRUE7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0FDQUo7QURHQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0FDQUo7QURHQTtFQUNJLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjtBRENJO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQ0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExPR0lOIFZBTElEQVRJT04qL1xyXG5cclxuLnZhbGlkYXRpb25jb2xvciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41M3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkNmQ2ZDY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICAgIG1hcmdpbi10b3A6IDIzJTtcclxufVxyXG5cclxuLmNhcmRzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzJSA1JTtcclxuICAgIC5hZG1pbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgIGNvbG9yOiAjMjY0MTUxO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1sb2cge1xyXG4gICAgICAgIGhlaWdodDogNTNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0MTUxO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDUlIDAlIDMlO1xyXG4gICAgfVxyXG4gICAgLmZvcmdvdCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogIzUxNGM0YztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXJnaW46IDMlIDAlIDUlO1xyXG4gICAgfVxyXG59IiwiLyogTE9HSU4gVkFMSURBVElPTiovXG4udmFsaWRhdGlvbmNvbG9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTNweDtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkNmQ2ZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuXG4uY2FyZC1hbGlnbiB7XG4gIG1hcmdpbi10b3A6IDIzJTtcbn1cblxuLmNhcmRzIHtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMyUgNSU7XG59XG4uY2FyZHMgLmFkbWluIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMjY0MTUxO1xuICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cbi5jYXJkcyAuYnRuLWxvZyB7XG4gIGhlaWdodDogNTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDE1MTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSAwJSAzJTtcbn1cbi5jYXJkcyAuZm9yZ290IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjNTE0YzRjO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMyUgMCUgNSU7XG59Il19 */"

/***/ }),

/***/ "./src/theme/default/admin/authentication/login/login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/login/login.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/admin/auth/auth.sandbox */ "./src/core/admin/auth/auth.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authSandbox) {
        this.fb = fb;
        this.authSandbox = authSandbox;
        this.emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
        this.ifSubmitted = false;
        this.badResponse = false;
        this.subscriptions = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    // validation for forget password
    LoginComponent.prototype.validateAllFormFields = function (formGroup) {
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
    /**
     * Handles form 'submit' event. Calls sandbox login function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    LoginComponent.prototype.onSubmit = function (form) {
        this.ifSubmitted = true;
        if (!this.loginForm.valid) {
            this.validateAllFormFields(this.loginForm);
            return;
        }
        var param = {};
        param.username = this.loginForm.value.username;
        param.password = this.loginForm.value.password;
        this.authSandbox.authlogin(param);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/theme/default/admin/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/theme/default/admin/authentication/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_admin_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_3__["AuthSandbox"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map