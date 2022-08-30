(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-error-module"],{

/***/ "./src/theme/default/admin/error/404/not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/theme/default/admin/error/404/not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n        <h1 class=\"error-title text-danger\">404</h1>\r\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\r\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/error/404/not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/theme/default/admin/error/404/not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngAfterViewInit = function () { };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/theme/default/admin/error/404/not-found.component.html")
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/error/500/server.error.component.html":
/*!***********************************************************************!*\
  !*** ./src/theme/default/admin/error/500/server.error.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\r\n    <div class=\"error-body text-center\">\r\n        <h1 class=\"error-title text-danger\">404</h1>\r\n        <h3 class=\"text-uppercase error-subtitle\">PAGE NOT FOUND !</h3>\r\n        <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n        <a href=\"#/dashboard/classic\" class=\"btn btn-danger btn-rounded waves-effect waves-light m-b-40\">Back to home</a> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/error/500/server.error.component.ts":
/*!*********************************************************************!*\
  !*** ./src/theme/default/admin/error/500/server.error.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngAfterViewInit = function () { };
    ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server.error.component.html */ "./src/theme/default/admin/error/500/server.error.component.html")
        })
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/error/error-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/theme/default/admin/error/error-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404/not-found.component */ "./src/theme/default/admin/error/404/not-found.component.ts");
/* harmony import */ var _500_server_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./500/server.error.component */ "./src/theme/default/admin/error/500/server.error.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var errorRoutes = [
    {
        path: '404',
        component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"]
    },
    {
        path: '500',
        component: _500_server_error_component__WEBPACK_IMPORTED_MODULE_4__["ServerErrorComponent"]
    }
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(errorRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/error/error.module.ts":
/*!*******************************************************!*\
  !*** ./src/theme/default/admin/error/error.module.ts ***!
  \*******************************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-routing.module */ "./src/theme/default/admin/error/error-routing.module.ts");
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./404/not-found.component */ "./src/theme/default/admin/error/404/not-found.component.ts");
/* harmony import */ var _500_server_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./500/server.error.component */ "./src/theme/default/admin/error/500/server.error.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */






var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _error_routing_module__WEBPACK_IMPORTED_MODULE_4__["ErrorRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [
                _404_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"],
                _500_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"]
            ],
            providers: []
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ })

}]);
//# sourceMappingURL=error-error-module.js.map