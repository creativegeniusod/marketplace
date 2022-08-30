(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-localizations-localization-module"],{

/***/ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.html":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/layout/layout.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\r\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/countries']\" class=\"tablinks\">Country</button>\r\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/zone']\" class=\"tablinks\">Zone</button>\r\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/order-status']\" class=\"tablinks\">Order Status</button>\r\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/stock-status']\" class=\"tablinks\">Stock Status</button>\r\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/local/emailtemp']\" class=\"tablinks\">Email Template</button>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/layout/layout.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/layout/layout.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "/* Style the tab */\n.tab {\n  overflow: hidden;\n  border-bottom: 1px solid #ccc;\n  background-color: #f1f1f1;\n  margin-left: 198px;\n  margin-top: 40px;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 17px 27px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #eaeaea;\n  color: #f2086d;\n}\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9sb2NhbGl6YXRpb25zL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRElBLDREQUFBO0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7QURNQSxnREFBQTtBQUVBO0VBQ0ksc0JBQUE7QUNKSjtBRFFBLDJDQUFBO0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNOSjtBRFdBLDBCQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDVEoiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9sb2NhbGl6YXRpb25zL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSB0aGUgdGFiICovXG5cbi50YWIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBtYXJnaW4tbGVmdDogMTk4cHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXG5cbi50YWIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxN3B4IDI3cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXG5cbi50YWIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG5cbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXG5cbi50YWIgYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICBjb2xvcjogI2YyMDg2ZDtcbiAgICAvL2NvbG9yOiA7XG59XG5cblxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXG5cbi50YWJjb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn0iLCIvKiBTdHlsZSB0aGUgdGFiICovXG4udGFiIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1hcmdpbi1sZWZ0OiAxOThweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xuLnRhYiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE3cHggMjdweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xuLnRhYiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xuLnRhYiBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgY29sb3I6ICNmMjA4NmQ7XG59XG5cbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuLnRhYmNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn0iXX0= */"
=======
module.exports = "/* Style the tab */\n.tab {\n  overflow: hidden;\n  border-bottom: 1px solid #ccc;\n  background-color: #f1f1f1;\n  margin-left: 198px;\n  margin-top: 40px;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 17px 27px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #eaeaea;\n  color: #f2086d;\n}\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9sYXlvdXQvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXGFkbWluL3NyY1xcdGhlbWVcXGRlZmF1bHRcXGFkbWluXFxzZXR0aW5nc1xcY29tcG9uZW50c1xcbG9jYWxpemF0aW9uc1xcbGF5b3V0XFxsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FESUEsNERBQUE7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRE1BLGdEQUFBO0FBRUE7RUFDSSxzQkFBQTtBQ0pKO0FEUUEsMkNBQUE7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ05KO0FEV0EsMEJBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIHRoZSB0YWIgKi9cclxuXHJcbi50YWIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOThweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXHJcblxyXG4udGFiIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTdweCAyN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuXHJcbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cclxuXHJcbi50YWIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcblxyXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xyXG5cclxuLnRhYiBidXR0b24uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbiAgICBjb2xvcjogI2YyMDg2ZDtcclxuICAgIC8vY29sb3I6IDtcclxufVxyXG5cclxuXHJcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xyXG5cclxuLnRhYmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn0iLCIvKiBTdHlsZSB0aGUgdGFiICovXG4udGFiIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1hcmdpbi1sZWZ0OiAxOThweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xuLnRhYiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE3cHggMjdweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xuLnRhYiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xuLnRhYiBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgY29sb3I6ICNmMjA4NmQ7XG59XG5cbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuLnRhYmNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn0iXX0= */"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68

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