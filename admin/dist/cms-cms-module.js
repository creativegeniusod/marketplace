(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cms-cms-module"],{

/***/ "./src/theme/default/admin/cms/cms.module.ts":
/*!***************************************************!*\
  !*** ./src/theme/default/admin/cms/cms.module.ts ***!
  \***************************************************/
/*! exports provided: CMSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSModule", function() { return CMSModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/theme/default/admin/cms/components/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/theme/default/admin/cms/components/header/header.component.ts");
/* harmony import */ var _cms_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cms.routing */ "./src/theme/default/admin/cms/cms.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../default.material.module */ "./src/theme/default/default.material.module.ts");

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

var CMSModule = /** @class */ (function () {
    function CMSModule() {
    }
    CMSModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["CMSLayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["CMSHeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cms_routing__WEBPACK_IMPORTED_MODULE_7__["CMSRoutingModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [],
            entryComponents: []
        })
    ], CMSModule);
    return CMSModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/cms.routing.ts":
/*!****************************************************!*\
  !*** ./src/theme/default/admin/cms/cms.routing.ts ***!
  \****************************************************/
/*! exports provided: CMSRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSRoutingModule", function() { return CMSRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/theme/default/admin/cms/components/layout/layout.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var cmsRoutes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["CMSLayoutComponent"],
        children: [
            {
                path: 'pages',
                loadChildren: './components/pages/pages.module#PagesModule'
            }
        ]
    }
];
var CMSRoutingModule = /** @class */ (function () {
    function CMSRoutingModule() {
    }
    CMSRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(cmsRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CMSRoutingModule);
    return CMSRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/components/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subtoolbar cmstoolbar\">\r\n    <div class=\"sub-nav-menu\">\r\n        <a href=\"javascript:void(0)\" [routerLink]=\"['/cms/pages']\" [routerLinkActive]=\"'active'\">\r\n            <img src=\"assets/img/page-ico.png\"> Pages\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/header/header.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/header/header.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jbXMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/header/header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/header/header.component.ts ***!
  \***************************************************************************/
/*! exports provided: CMSHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSHeaderComponent", function() { return CMSHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var CMSHeaderComponent = /** @class */ (function () {
    function CMSHeaderComponent(titleService) {
        this.titleService = titleService;
    }
    CMSHeaderComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('CMS');
    };
    CMSHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cms-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/theme/default/admin/cms/components/header/header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/theme/default/admin/cms/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], CMSHeaderComponent);
    return CMSHeaderComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/components/layout/layout.component.html":
/*!*****************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/layout/layout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cms-header></app-cms-header>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/layout/layout.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/layout/layout.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jbXMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/layout/layout.component.ts":
/*!***************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/layout/layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: CMSLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSLayoutComponent", function() { return CMSLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var CMSLayoutComponent = /** @class */ (function () {
    function CMSLayoutComponent() {
    }
    CMSLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cms-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/theme/default/admin/cms/components/layout/layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/theme/default/admin/cms/components/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CMSLayoutComponent);
    return CMSLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cms-cms-module.js.map