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

module.exports = "<div class=\"card-align\">\n    <div class=\"cards\">\n        <form (ngSubmit)=\"onSubmits($event, forgotPasswordForm.value)\" [formGroup]=\"forgotPasswordForm\">\n            <div class=\"admin\">Forgot Password</div>\n            <input type=\"text\" class=\"form-control placeholder-fix\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"{'validationcolor':forgotPasswordForm.get('email').hasError('required') && (forgotPasswordForm.get('email').touched)&&ifSubmitted==true}\">\n            <div class=\"error\" *ngIf=\"(forgotPasswordForm.get('email').hasError('required') && forgotPasswordForm.get('email').touched)&&ifSubmitted==true \">\n                Email required\n            </div>\n\n            <div class=\"error\" *ngIf=\"(forgotPasswordForm.get('email').hasError('pattern') && forgotPasswordForm.get('email').touched)&&ifSubmitted==true\">\n                Incorrect email\n            </div>\n            <button class=\"btn btn-log\">Submit <span [hidden]=\"!(authSandbox.forgotpasswordLoading$ | async)\"\n                class=\"spinner-border spinner-border-sm pull-right\" role=\"status\"\n                aria-hidden=\"true\"></span></button>\n            <div class=\"forgot\" [routerLink]=\"['/auth/login']\">Back to Login</div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/forgotpassword/forgotpassword.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n/* LOGIN VALIDATION*/\n/* .validationcolor {\n    border-color: red;\n\n}\n.error {\n    color: red;\n} */\n.form-control {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.53px;\n  color: #000000 !important;\n  height: 53px;\n  border-radius: 2px;\n  border: solid 1px #d6d6d6;\n  background-color: #ffffff;\n  margin-bottom: 8%;\n}\n.card-align {\n  margin-top: 23%;\n}\n.cards {\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);\n  background-color: #ffffff;\n  width: 70%;\n  margin: auto;\n  padding: 3% 5%;\n}\n.cards .admin {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #264151;\n  margin-bottom: 7%;\n}\n.cards .btn-log {\n  height: 53px;\n  background-color: #264151;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n  width: 100%;\n  margin: 5% 0% 3%;\n}\n.cards .forgot {\n  font-family: Roboto;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #514c4c;\n  text-decoration: underline;\n  text-align: right;\n  margin: 3% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAyL21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vYXV0aGVudGljYXRpb24vZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFFQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLFVBQUE7QUNBSjtBRElBLG9CQUFBO0FBR0E7Ozs7OztHQUFBO0FBUUE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9BO0VBQ0ksZUFBQTtBQ0pKO0FET0E7RUFDSSw0Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSko7QURLSTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNIUjtBREtJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBREtJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSFIiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vYXV0aGVudGljYXRpb24vZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMT0dJTiBWQUxJREFUSU9OKi9cblxuLnZhbGlkYXRpb25jb2xvciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4vKiBMT0dJTiBWQUxJREFUSU9OKi9cblxuXG4vKiAudmFsaWRhdGlvbmNvbG9yIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcblxufVxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufSAqL1xuXG4uZm9ybS1jb250cm9sIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUzcHg7XG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkNmQ2ZDY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cblxuLmNhcmQtYWxpZ24ge1xuICAgIG1hcmdpbi10b3A6IDIzJTtcbn1cblxuLmNhcmRzIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDMlIDUlO1xuICAgIC5hZG1pbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICMyNjQxNTE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDclO1xuICAgIH1cbiAgICAuYnRuLWxvZyB7XG4gICAgICAgIGhlaWdodDogNTNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDE1MTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogNSUgMCUgMyU7XG4gICAgfVxuICAgIC5mb3Jnb3Qge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICM1MTRjNGM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luOiAzJSAwJSA1JTtcbiAgICB9XG59IiwiLyogTE9HSU4gVkFMSURBVElPTiovXG4udmFsaWRhdGlvbmNvbG9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIExPR0lOIFZBTElEQVRJT04qL1xuLyogLnZhbGlkYXRpb25jb2xvciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG5cbn1cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn0gKi9cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNTNweDtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkNmQ2ZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuXG4uY2FyZC1hbGlnbiB7XG4gIG1hcmdpbi10b3A6IDIzJTtcbn1cblxuLmNhcmRzIHtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMyUgNSU7XG59XG4uY2FyZHMgLmFkbWluIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMjY0MTUxO1xuICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cbi5jYXJkcyAuYnRuLWxvZyB7XG4gIGhlaWdodDogNTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDE1MTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSAwJSAzJTtcbn1cbi5jYXJkcyAuZm9yZ290IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjNTE0YzRjO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMyUgMCUgNSU7XG59Il19 */"

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

module.exports = "<!-- <div class=\"auth-box on-sidebar\">\n    <div class=\"loginform\" style=\"left: 25%;\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <form (ngSubmit)=\"onSubmit(loginForm.value)\" [formGroup]=\"loginForm\" class=\"form-horizontal m-t-20\">\n                    <h3>Login Here</h3>\n                    <div class=\"input-group mb-4\">\n\n                        <input type=\"text\" class=\"form-control form-control-md\" placeholder=\"User Name\" aria-label=\"username\" aria-describedby=\"basic-addon1\" formControlName=\"username\" [ngClass]=\"{'validationcolor':loginForm.get('username').hasError('required') && loginForm.get('username').touched&& ifSubmitted==true||(badResponse==true)}\">\n\n                    </div>\n\n                    <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('required') && loginForm.get('username').touched)&&ifSubmitted==true\">\n                        username required\n                    </div>\n                    <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('pattern') && loginForm.get('username').touched)&& ifSubmitted==true\">\n\n                        Incorrect email\n                    </div>\n\n                    <div class=\"input-group mb-4\">\n                        <input type=\"password\" class=\"form-control form-control-md\" placeholder=\"Password\" aria-label=\"password\" aria-describedby=\"basic-addon1\" formControlName=\"password\" [ngClass]=\"{'validationcolor':loginForm.get('password').hasError('required') && loginForm.get('password').touched&& ifSubmitted==true||(badResponse==true)}\">\n\n                    </div>\n\n                    <div class=\"error\" *ngIf=\"(loginForm.get('password').hasError('required') && loginForm.get('password').touched )&& ifSubmitted==true\">\n                        password required\n                    </div>\n                    <div class=\"error\" *ngIf=\"badResponse==true\">\n                        username or password is incorrect\n                    </div>\n\n\n                    <div novalidate class=\"form-group row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"custom-control custom-checkbox\">\n                                <a href=\"javascript:void(0)\" [routerLink]=\"['/auth/forgot-password']\" class=\"text-dark\">\n                                    Forgot password?</a>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 p-b-20\">\n                            <button class=\"btn btn-block btn-info  float-right\" type=\"submit\">\n                                Login\n                                <span [hidden]=\"!(authSandbox.loginLoading$ | async)\"\n                                      class=\"spinner-border spinner-border-sm pull-right\" role=\"status\"\n                                      aria-hidden=\"true\"></span>\n                            </button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n\n<div class=\"card-align\">\n    <div class=\"cards\">\n        <form (ngSubmit)=\"onSubmit(loginForm.value)\" [formGroup]=\"loginForm\">\n            <div class=\"admin\">Admin Log in</div>\n            <input type=\"text\" class=\"form-control placeholder-fix\" placeholder=\"User Name\" formControlName=\"username\" [ngClass]=\"{'validationcolor':loginForm.get('username').hasError('required') && loginForm.get('username').touched&& ifSubmitted==true||(badResponse==true)}\">\n            <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('required') && loginForm.get('username').touched)&&ifSubmitted==true\">\n                username required\n            </div>\n            <div class=\"error\" *ngIf=\"(loginForm.get('username').hasError('pattern') && loginForm.get('username').touched)&& ifSubmitted==true\">\n\n                Incorrect email\n            </div>\n            <input type=\"password\" class=\"form-control placeholder-fix\" placeholder=\"Password\" formControlName=\"password\" [ngClass]=\"{'validationcolor':loginForm.get('password').hasError('required') && loginForm.get('password').touched&& ifSubmitted==true||(badResponse==true)}\">\n            <div class=\"error\" *ngIf=\"(loginForm.get('password').hasError('required') && loginForm.get('password').touched )&& ifSubmitted==true\">\n                password required\n            </div>\n            <div class=\"error\" *ngIf=\"badResponse==true\">\n                username or password is incorrect\n            </div>\n            <button class=\"btn btn-log\">Log in</button>\n            <div class=\"forgot\" [routerLink]=\"['/auth/forgot-password']\">Cant login?</div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/authentication/login/login.component.scss":
/*!***************************************************************************!*\
  !*** ./src/theme/default/admin/authentication/login/login.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n.form-control {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.53px;\n  color: #000000 !important;\n  height: 53px;\n  border-radius: 2px;\n  border: solid 1px #d6d6d6;\n  background-color: #ffffff;\n  margin-bottom: 8%;\n}\n.card-align {\n  margin-top: 23%;\n}\n.cards {\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);\n  background-color: #ffffff;\n  width: 70%;\n  margin: auto;\n  padding: 3% 5%;\n}\n.cards .admin {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #264151;\n  margin-bottom: 7%;\n}\n.cards .btn-log {\n  height: 53px;\n  background-color: #264151;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n  width: 100%;\n  margin: 5% 0% 3%;\n}\n.cards .forgot {\n  font-family: Roboto;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #514c4c;\n  text-decoration: underline;\n  text-align: right;\n  margin: 3% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAyL21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFFQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLFVBQUE7QUNBSjtBREdBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7QUNBSjtBREdBO0VBQ0ksNENBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FKO0FEQ0k7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ1I7QURDSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTE9HSU4gVkFMSURBVElPTiovXG5cbi52YWxpZGF0aW9uY29sb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTNweDtcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTNweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q2ZDZkNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDglO1xufVxuXG4uY2FyZC1hbGlnbiB7XG4gICAgbWFyZ2luLXRvcDogMjMlO1xufVxuXG4uY2FyZHMge1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMyUgNSU7XG4gICAgLmFkbWluIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICBjb2xvcjogIzI2NDE1MTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNyU7XG4gICAgfVxuICAgIC5idG4tbG9nIHtcbiAgICAgICAgaGVpZ2h0OiA1M3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0MTUxO1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiA1JSAwJSAzJTtcbiAgICB9XG4gICAgLmZvcmdvdCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICBjb2xvcjogIzUxNGM0YztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDMlIDAlIDUlO1xuICAgIH1cbn0iLCIvKiBMT0dJTiBWQUxJREFUSU9OKi9cbi52YWxpZGF0aW9uY29sb3Ige1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC41M3B4O1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Q2ZDZkNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG59XG5cbi5jYXJkLWFsaWduIHtcbiAgbWFyZ2luLXRvcDogMjMlO1xufVxuXG4uY2FyZHMge1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzJSA1JTtcbn1cbi5jYXJkcyAuYWRtaW4ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyNjQxNTE7XG4gIG1hcmdpbi1ib3R0b206IDclO1xufVxuLmNhcmRzIC5idG4tbG9nIHtcbiAgaGVpZ2h0OiA1M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0MTUxO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIDAlIDMlO1xufVxuLmNhcmRzIC5mb3Jnb3Qge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM1MTRjNGM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAzJSAwJSA1JTtcbn0iXX0= */"

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