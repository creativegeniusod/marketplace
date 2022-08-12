(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-localizations-localization-module"],{

/***/ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.html":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/layout/layout.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/countries']\" class=\"tablinks\">Country</button>\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/zone']\" class=\"tablinks\">Zone</button>\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/order-status']\" class=\"tablinks\">Order Status</button>\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/stock-status']\" class=\"tablinks\">Stock Status</button>\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/emailtemp']\" class=\"tablinks\">Email Template</button>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/layout/layout.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\n.tab {\n  overflow: hidden;\n  border-bottom: 1px solid #ccc;\n  background-color: #f1f1f1;\n  margin-left: 198px;\n  margin-top: 40px;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 17px 27px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #eaeaea;\n  color: #f2086d;\n}\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9hZG1pbi9zcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBRUE7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURJQSw0REFBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FETUEsZ0RBQUE7QUFFQTtFQUNJLHNCQUFBO0FDSko7QURRQSwyQ0FBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDTko7QURXQSwwQkFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgdGhlIHRhYiAqL1xuXG4udGFiIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWFyZ2luLWxlZnQ6IDE5OHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xuXG4udGFiIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTdweCAyN3B4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cblxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xuXG4udGFiIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xuXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgY29sb3I6ICNmMjA4NmQ7XG4gICAgLy9jb2xvcjogO1xufVxuXG5cbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuXG4udGFiY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59IiwiLyogU3R5bGUgdGhlIHRhYiAqL1xuLnRhYiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtYXJnaW4tbGVmdDogMTk4cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiB0aGUgdGFiIGNvbnRlbnQgKi9cbi50YWIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxN3B4IDI3cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cbi50YWIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cbi50YWIgYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIGNvbG9yOiAjZjIwODZkO1xufVxuXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cbi50YWJjb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/layout/layout.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LocalizationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationLayoutComponent", function() { return LocalizationLayoutComponent; });
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


var LocalizationLayoutComponent = /** @class */ (function () {
    function LocalizationLayoutComponent(titleService) {
        this.titleService = titleService;
        this.isClassVisible = false;
    }
    LocalizationLayoutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Settings');
    };
    LocalizationLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidesetting-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], LocalizationLayoutComponent);
    return LocalizationLayoutComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/localization.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/localization.module.ts ***!
  \******************************************************************************************/
/*! exports provided: LocalizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationModule", function() { return LocalizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var Routers = [
    { path: '', redirectTo: 'countries', pathMatch: 'full' },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LocalizationLayoutComponent"],
        children: [
            {
                path: 'stock-status',
                loadChildren: './stockstatus/stockstatus.module#StockStatusModule'
            },
            {
                path: 'order-status',
                loadChildren: './orderstatus/orderstatus.module#OrderStatusModule'
            },
            {
                path: 'countries',
                loadChildren: './countries/countries.module#CountriesModule'
            },
            {
                path: 'zone',
                loadChildren: './zone/zone.module#ZoneModule'
            },
            {
                path: 'emailtemp',
                loadChildren: './emailtemplate/emailtemplate.module#EmailTemplateModule'
            }
        ]
    }
];
var LocalizationModule = /** @class */ (function () {
    function LocalizationModule() {
    }
    LocalizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LocalizationLayoutComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Routers)],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LocalizationModule);
    return LocalizationModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-localizations-localization-module.js.map