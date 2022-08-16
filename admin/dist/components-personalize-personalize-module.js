(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-personalize-personalize-module"],{

/***/ "./src/theme/default/admin/settings/components/personalize/layout/layout.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/personalize/layout/layout.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/personalize/product']\" class=\"tablinks\">Product</button>\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/personalize/order']\" class=\"tablinks\">Order</button>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/personalize/layout/layout.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/personalize/layout/layout.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\n.tab {\n  overflow: hidden;\n  border-bottom: 1px solid #ccc;\n  background-color: #f1f1f1;\n  margin-left: 198px;\n  margin-top: 40px;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 17px 27px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #eaeaea;\n  color: #f2086d;\n}\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9hZG1pbi9zcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL3BlcnNvbmFsaXplL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL3BlcnNvbmFsaXplL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRElBLDREQUFBO0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7QURNQSxnREFBQTtBQUVBO0VBQ0ksc0JBQUE7QUNKSjtBRFFBLDJDQUFBO0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNOSjtBRFdBLDBCQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDVEoiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9wZXJzb25hbGl6ZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgdGhlIHRhYiAqL1xuXG4udGFiIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWFyZ2luLWxlZnQ6IDE5OHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xuXG4udGFiIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTdweCAyN3B4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cblxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xuXG4udGFiIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xuXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gICAgY29sb3I6ICNmMjA4NmQ7XG4gICAgLy9jb2xvcjogO1xufVxuXG5cbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuXG4udGFiY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59IiwiLyogU3R5bGUgdGhlIHRhYiAqL1xuLnRhYiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtYXJnaW4tbGVmdDogMTk4cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiB0aGUgdGFiIGNvbnRlbnQgKi9cbi50YWIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxN3B4IDI3cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cbi50YWIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cbi50YWIgYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIGNvbG9yOiAjZjIwODZkO1xufVxuXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cbi50YWJjb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/personalize/layout/layout.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/personalize/layout/layout.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PersonalizeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizeLayoutComponent", function() { return PersonalizeLayoutComponent; });
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


var PersonalizeLayoutComponent = /** @class */ (function () {
    function PersonalizeLayoutComponent(titleService) {
        this.titleService = titleService;
        this.isClassVisible = false;
    }
    PersonalizeLayoutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Settings');
    };
    PersonalizeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidesetting-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/theme/default/admin/settings/components/personalize/layout/layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/theme/default/admin/settings/components/personalize/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PersonalizeLayoutComponent);
    return PersonalizeLayoutComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/personalize/personalize.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/personalize/personalize.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PersonalizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizeModule", function() { return PersonalizeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/theme/default/admin/settings/components/personalize/layout/layout.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var Routers = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["PersonalizeLayoutComponent"],
        children: [
            {
                path: 'product',
                loadChildren: './product/personalize-product.module#PersonalizeProductModule'
            },
            {
                path: 'order',
                loadChildren: './order/personalize-order.module#PersonalizeOrderModule'
            }
        ]
    }
];
var PersonalizeModule = /** @class */ (function () {
    function PersonalizeModule() {
    }
    PersonalizeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["PersonalizeLayoutComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Routers)],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PersonalizeModule);
    return PersonalizeModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-personalize-personalize-module.js.map