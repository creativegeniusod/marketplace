(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/core/auth/auth.sandbox.ts":
/*!***************************************!*\
  !*** ./src/core/auth/auth.sandbox.ts ***!
  \***************************************/
/*! exports provided: AuthSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSandbox", function() { return AuthSandbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/auth.action */ "./src/core/auth/action/auth.action.ts");
/* harmony import */ var _reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/auth.selector */ "./src/core/auth/reducer/auth.selector.ts");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/login.model */ "./src/core/auth/models/login.model.ts");
/* harmony import */ var _models_register_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/register.model */ "./src/core/auth/models/register.model.ts");
/* harmony import */ var _common_common_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/common.sandbox */ "./src/core/common/common.sandbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */









var AuthSandbox = /** @class */ (function () {
    function AuthSandbox(router, appState$, commonSandbox, platformId) {
        this.router = router;
        this.appState$ = appState$;
        this.commonSandbox = commonSandbox;
        this.platformId = platformId;
        this.subscriptions = [];
        /* login status*/
        this.userToken$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["getToken"]);
        this.userTokenValid$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["getTokenValid"]);
        this.loginLoading$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_loginLoading"]);
        this.loginLoaded$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_loginLoaded"]);
        this.loginFailed$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_loginFailed"]);
        /* register status*/
        this.registerLoading$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_registerLoading"]);
        this.registerLoaded$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_registerLoaded"]);
        this.registerFailed$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_registerFailed"]);
        /* recover account status*/
        this.recoverLoading$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_recoverLoading"]);
        this.recoverLoaded$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_recoverLoaded"]);
        this.recoverFailed$ = this.appState$.select(_reducer_auth_selector__WEBPACK_IMPORTED_MODULE_5__["get_recoverFailed"]);
        this.registerEvents();
    }
    AuthSandbox.prototype.doLogin = function (params) {
        this.appState$.dispatch(new _action_auth_action__WEBPACK_IMPORTED_MODULE_4__["DoLogin"](new _models_login_model__WEBPACK_IMPORTED_MODULE_6__["LoginModel"](params)));
    };
    AuthSandbox.prototype.doRegister = function (params) {
        this.appState$.dispatch(new _action_auth_action__WEBPACK_IMPORTED_MODULE_4__["DoRegister"](new _models_register_model__WEBPACK_IMPORTED_MODULE_7__["RegisterModel"](params)));
    };
    AuthSandbox.prototype.doRecover = function (params) {
        this.appState$.dispatch(new _action_auth_action__WEBPACK_IMPORTED_MODULE_4__["RecoverAccount"](params));
    };
    /**
     * Registers events
     */
    AuthSandbox.prototype.registerEvents = function () {
        var _this = this;
        this.subscriptions.push(this.userToken$.subscribe(function (token) {
            if (token) {
                if (token.token) {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this.platformId)) {
                        localStorage.setItem('userToken', token.token);
                        localStorage.setItem('user', JSON.stringify(token.user));
                    }
                    _this.commonSandbox.doGetProfile();
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this.platformId)) {
                        var data = localStorage.getItem('checkout');
                    }
                }
            }
        }));
    };
    /**
     * Un registers events
     */
    AuthSandbox.prototype.unsubscribeEvents = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    AuthSandbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _common_common_sandbox__WEBPACK_IMPORTED_MODULE_8__["CommonSandbox"],
            Object])
    ], AuthSandbox);
    return AuthSandbox;
}());



/***/ }),

/***/ "./src/core/auth/models/login.model.ts":
/*!*********************************************!*\
  !*** ./src/core/auth/models/login.model.ts ***!
  \*********************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var LoginModel = /** @class */ (function () {
    function LoginModel(loginRequest) {
        this.emailId = loginRequest.email || '';
        this.password = loginRequest.password || '';
        this.type = loginRequest.type || '';
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/core/auth/models/register.model.ts":
/*!************************************************!*\
  !*** ./src/core/auth/models/register.model.ts ***!
  \************************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var RegisterModel = /** @class */ (function () {
    function RegisterModel(registerRequest) {
        this.name = registerRequest.name || '';
        this.password = registerRequest.password || '';
        this.confirmPassword = registerRequest.confirmPassword || '';
        this.emailId = registerRequest.email || '';
        this.phoneNumber = registerRequest.phoneNumber || '';
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./src/core/auth/reducer/auth.selector.ts":
/*!************************************************!*\
  !*** ./src/core/auth/reducer/auth.selector.ts ***!
  \************************************************/
/*! exports provided: getState, getToken, getTokenValid, get_loginLoading, get_loginLoaded, get_loginFailed, get_registerLoading, get_registerLoaded, get_registerFailed, get_recoverLoading, get_recoverLoaded, get_recoverFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenValid", function() { return getTokenValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_loginLoading", function() { return get_loginLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_loginLoaded", function() { return get_loginLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_loginFailed", function() { return get_loginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_registerLoading", function() { return get_registerLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_registerLoaded", function() { return get_registerLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_registerFailed", function() { return get_registerFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_recoverLoading", function() { return get_recoverLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_recoverLoaded", function() { return get_recoverLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_recoverFailed", function() { return get_recoverFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "./src/core/auth/reducer/auth.reducer.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var getState = function (State) { return State.auth; };
var getToken = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getToken"]);
var getTokenValid = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getTokenValid"]);
var get_loginLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getLoginLoading"]);
var get_loginLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getLoginLoaded"]);
var get_loginFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getLoginFailed"]);
var get_registerLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRegisterLoading"]);
var get_registerLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRegisterLoaded"]);
var get_registerFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRegisterFailed"]);
var get_recoverLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecoverLoading"]);
var get_recoverLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecoverLoaded"]);
var get_recoverFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecoverFailed"]);


/***/ })

}]);
//# sourceMappingURL=common.js.map