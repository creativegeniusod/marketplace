(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-menu-home-menu-module"],{

/***/ "./src/default/pages/home-menu/home-menu.component.html":
/*!**************************************************************!*\
  !*** ./src/default/pages/home-menu/home-menu.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-carousel></app-main-carousel>\n\n<div class=\"products-tabs featured-tabs\">\n    <mat-tab-group mat-stretch-tabs>\n        <mat-tab label=\"Most Popular and Trending\">\n            <app-trending-product></app-trending-product>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n<div class=\"products-tabs featured-tabs\">\n    <app-advertisment-product></app-advertisment-product>\n</div>\n\n\n\n<!-- <div class=\"products-tabs featured-tabs\">\n    <mat-tab-group mat-stretch-tabs>\n        <mat-tab label=\"Today Deals\">\n            <app-products-carousel [products]=\"listSandbox.todayDealList$ | async\"></app-products-carousel>\n        </mat-tab>\n    </mat-tab-group>\n</div> -->\n\n<!-- <app-brands-carousel [brands]=\"listSandbox.manufacturer$ | async\"></app-brands-carousel> -->"

/***/ }),

/***/ "./src/default/pages/home-menu/home-menu.component.scss":
/*!**************************************************************!*\
  !*** ./src/default/pages/home-menu/home-menu.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-tabs {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9zdG9yZS9zcmMvZGVmYXVsdC9wYWdlcy9ob21lLW1lbnUvaG9tZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL2hvbWUtbWVudS9ob21lLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtdGFic3tcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/home-menu/home-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/default/pages/home-menu/home-menu.component.ts ***!
  \************************************************************/
/*! exports provided: HomeMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMenuComponent", function() { return HomeMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var HomeMenuComponent = /** @class */ (function () {
    function HomeMenuComponent(listSandbox, platformId, activatedRoute) {
        var _this = this;
        this.listSandbox = listSandbox;
        this.platformId = platformId;
        this.activatedRoute = activatedRoute;
        this.categoryId = '';
        this.activatedRoute.params.subscribe(function (param) {
            _this.categoryId = param.id;
            _this.getBannerList();
        });
    }
    // Initially calls getBannerList,getBransList
    HomeMenuComponent.prototype.ngOnInit = function () {
        // this.getBannerList();
        // this.getBransList();
        // this.getTodayDealList();
        // this.listSandbox.getSettings();
        // if (isPlatformBrowser(this.platformId)) {
        //     localStorage.removeItem('checkout');
        // }
    };
    // fetch banner list from sandbox
    HomeMenuComponent.prototype.getBannerList = function () {
        var params = {};
        params.limit = 100;
        params.offset = 0;
        params.parent = this.categoryId;
        this.listSandbox.getBannerList(params);
    };
    // fetch brand list from sandbox
    HomeMenuComponent.prototype.getBransList = function () {
        var params = {};
        params.limit = 10;
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    };
    // fetch getTodayDealList product list from sandbox
    HomeMenuComponent.prototype.getTodayDealList = function () {
        var params = {};
        params.limit = 0;
        params.offset = 0;
        params.keyword = '';
        params.sku = '';
        // params.count = '';
        this.listSandbox.getTodayDealList(params);
    };
    HomeMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-menu',
            template: __webpack_require__(/*! ./home-menu.component.html */ "./src/default/pages/home-menu/home-menu.component.html"),
            styles: [__webpack_require__(/*! ./home-menu.component.scss */ "./src/default/pages/home-menu/home-menu.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__["ListsSandbox"],
            Object,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeMenuComponent);
    return HomeMenuComponent;
}());



/***/ }),

/***/ "./src/default/pages/home-menu/home-menu.module.ts":
/*!*********************************************************!*\
  !*** ./src/default/pages/home-menu/home-menu.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, HomeMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMenuModule", function() { return HomeMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-menu.component */ "./src/default/pages/home-menu/home-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var routes = [
    { path: '', component: _home_menu_component__WEBPACK_IMPORTED_MODULE_6__["HomeMenuComponent"], pathMatch: 'full' }
];
var HomeMenuModule = /** @class */ (function () {
    function HomeMenuModule() {
    }
    HomeMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            ],
            declarations: [
                _home_menu_component__WEBPACK_IMPORTED_MODULE_6__["HomeMenuComponent"],
            ],
            providers: []
        })
    ], HomeMenuModule);
    return HomeMenuModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-menu-home-menu-module.js.map