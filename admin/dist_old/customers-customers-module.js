(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./src/core/admin/Customers/layout/effects/layout.effect.ts":
/*!******************************************************************!*\
  !*** ./src/core/admin/Customers/layout/effects/layout.effect.ts ***!
  \******************************************************************/
/*! exports provided: LayoutEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutEffects", function() { return LayoutEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _action_layout_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/layout.action */ "./src/core/admin/Customers/layout/action/layout.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout.service */ "./src/core/admin/Customers/layout/layout.service.ts");

/*
* spurtcommerce
* version 1.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2022 piccosoft ltd
* Author piccosoft ltd <support@piccosoft.com>
* Licensed under the MIT license.
*/







var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(action$, layoutService) {
        var _this = this;
        this.action$ = action$;
        this.layoutService = layoutService;
        this.doTotalCustomerListCount$ = this.action$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_layout_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_TOTAL_CUSTOMER_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.layoutService.getCustomerListCount(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetTotalCustomerCountSuccessAction"](response),
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetTotalCustomerCountFailAction"](error)); }));
        }));
        this.doActiveCustomerListCount$ = this.action$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_layout_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_ACTIVE_CUSTOMER_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.layoutService.getCustomerListCount(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCustomerCountSuccessAction"](response),
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCustomerCountFailAction"](error)); }));
        }));
        this.doInActiveCustomerListCount$ = this.action$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_layout_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_INACTIVE_CUSTOMER_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.layoutService.getCustomerListCount(state)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetInActiveCustomerCountSuccessAction"](response),
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetInActiveCustomerCountFailAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LayoutEffects.prototype, "doTotalCustomerListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LayoutEffects.prototype, "doActiveCustomerListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LayoutEffects.prototype, "doInActiveCustomerListCount$", void 0);
    LayoutEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]])
    ], LayoutEffects);
    return LayoutEffects;
}());



/***/ }),

/***/ "./src/core/admin/Customers/layout/layout.service.ts":
/*!***********************************************************!*\
  !*** ./src/core/admin/Customers/layout/layout.service.ts ***!
  \***********************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var LayoutService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayoutService, _super);
    function LayoutService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        // private URL = this.configService.get('api').baseUrl;
        _this.URL = _this.getBaseUrl();
        return _this;
    }
    /* get product list count api*/
    LayoutService.prototype.getCustomerListCount = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/customer/customerlist', reqOpts);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LayoutService);
    return LayoutService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/customers/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/customers/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subtoolbar customertoolbar\">\n    <div class=\"sub-nav-menu\">\n        <a href=\"javascript:void(0)\" [routerLink]=\"['/customers/customer']\" [routerLinkActive]=\"'active'\">\n            <img src=\"assets/img/customers-nav-ico.png\"> Customers\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/customers/components/header/header.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/customers/components/header/header.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jdXN0b21lcnMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/theme/default/admin/customers/components/header/header.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/customers/components/header/header.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHeaderComponent", function() { return CustomerHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


var CustomerHeaderComponent = /** @class */ (function () {
    function CustomerHeaderComponent(titleService) {
        this.titleService = titleService;
    }
    CustomerHeaderComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Customer');
    };
    CustomerHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cms-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/theme/default/admin/customers/components/header/header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/theme/default/admin/customers/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], CustomerHeaderComponent);
    return CustomerHeaderComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/customers/components/layout/layout.component.html":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/customers/components/layout/layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cms-header></app-cms-header>\n<div class=\"row products-section\">\n    <div class=\"col-12 layout-mar\">\n        <div class=\"card\">\n            <div class=\"product-ts-left\">\n                <ul>\n                    <li>\n                        <p>Total Customers </p>\n                        <h3>{{layoutSandbox.totalCustomerCount$ | async}}\n                        </h3>\n                    </li>\n                    <li>\n                        <p>Active Customers</p>\n                        <h3>{{layoutSandbox.activeCustomerCount$ | async}}\n                        </h3>\n                    </li>\n                    <li>\n                        <p>In-Active Customers</p>\n                        <h3>{{layoutSandbox.inActiveCustomerCount$ | async}}\n                        </h3>\n                    </li>\n                </ul>\n            </div>\n            <!--Left-->\n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/theme/default/admin/customers/components/layout/layout.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/customers/components/layout/layout.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jdXN0b21lcnMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/theme/default/admin/customers/components/layout/layout.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/customers/components/layout/layout.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerLayoutComponent", function() { return CustomerLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_Customers_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/admin/Customers/layout/layout.sandbox */ "./src/core/admin/Customers/layout/layout.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


var CustomerLayoutComponent = /** @class */ (function () {
    function CustomerLayoutComponent(layoutSandbox) {
        this.layoutSandbox = layoutSandbox;
    }
    // initiallyt calls layoutSandbox getCustomerListCount,getActiveCustomerListCount,getInActiveCustomerListCount
    CustomerLayoutComponent.prototype.ngOnInit = function () {
        this.layoutSandbox.getCustomerListCount({ count: true });
        this.layoutSandbox.getActiveCustomerListCount({ status: 1, count: true });
        this.layoutSandbox.getInActiveCustomerListCount({ status: 0, count: true });
    };
    CustomerLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/theme/default/admin/customers/components/layout/layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/theme/default/admin/customers/components/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_Customers_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_2__["LayoutSandbox"]])
    ], CustomerLayoutComponent);
    return CustomerLayoutComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/customers/customers.module.ts":
/*!***************************************************************!*\
  !*** ./src/theme/default/admin/customers/customers.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/theme/default/admin/customers/components/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/theme/default/admin/customers/components/header/header.component.ts");
/* harmony import */ var _customers_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers.routing */ "./src/theme/default/admin/customers/customers.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_Customers_layout_layout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/admin/Customers/layout/layout.service */ "./src/core/admin/Customers/layout/layout.service.ts");
/* harmony import */ var _core_admin_Customers_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/admin/Customers/layout/layout.sandbox */ "./src/core/admin/Customers/layout/layout.sandbox.ts");
/* harmony import */ var _core_admin_Customers_layout_effects_layout_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/admin/Customers/layout/effects/layout.effect */ "./src/core/admin/Customers/layout/effects/layout.effect.ts");

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

// Store Actions




var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["CustomerLayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["CustomerHeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _customers_routing__WEBPACK_IMPORTED_MODULE_7__["CustomersRoutingModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_core_admin_Customers_layout_effects_layout_effect__WEBPACK_IMPORTED_MODULE_12__["LayoutEffects"]]),
            ],
            providers: [_core_admin_Customers_layout_layout_service__WEBPACK_IMPORTED_MODULE_10__["LayoutService"], _core_admin_Customers_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_11__["LayoutSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/customers/customers.routing.ts":
/*!****************************************************************!*\
  !*** ./src/theme/default/admin/customers/customers.routing.ts ***!
  \****************************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/theme/default/admin/customers/components/layout/layout.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var customersRoutes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["CustomerLayoutComponent"],
        children: [
            {
                path: 'customer',
                loadChildren: './components/customer/customer.module#CustomerModule'
            }
        ]
    }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(customersRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map