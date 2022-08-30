(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sitesettings-sitesettings-module"],{

/***/ "./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\r\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/sidesettings/seo']\" class=\"tablinks\">SEO</button>\r\n    <button [routerLinkActive]=\"'active'\" [routerLink]=\"['/settings/sidesettings/social']\" class=\"tablinks\">Social</button>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\n.tab {\n  overflow: hidden;\n  border-bottom: 1px solid #ccc;\n  background-color: #f1f1f1;\n  margin-left: 198px;\n  margin-top: 40px;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 17px 27px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #ddd;\n}\n/* Create an active/current tablink class */\n.tab button.active {\n  background-color: #eaeaea;\n  color: #f2086d;\n}\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvc2l0ZXNldHRpbmdzL2xheW91dC9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcYWRtaW4vc3JjXFx0aGVtZVxcZGVmYXVsdFxcYWRtaW5cXHNldHRpbmdzXFxjb21wb25lbnRzXFxzaXRlc2V0dGluZ3NcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9zaXRlc2V0dGluZ3MvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FESUEsNERBQUE7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRE1BLGdEQUFBO0FBRUE7RUFDSSxzQkFBQTtBQ0pKO0FEUUEsMkNBQUE7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ05KO0FEV0EsMEJBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL3NpdGVzZXR0aW5ncy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgdGhlIHRhYiAqL1xyXG5cclxuLnRhYiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuXHJcbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiB0aGUgdGFiIGNvbnRlbnQgKi9cclxuXHJcbi50YWIgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDI3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG5cclxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xyXG5cclxuLnRhYiBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuXHJcbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXHJcblxyXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxuICAgIGNvbG9yOiAjZjIwODZkO1xyXG4gICAgLy9jb2xvcjogO1xyXG59XHJcblxyXG5cclxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXHJcblxyXG4udGFiY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufSIsIi8qIFN0eWxlIHRoZSB0YWIgKi9cbi50YWIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWFyZ2luLWxlZnQ6IDE5OHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXG4udGFiIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTdweCAyN3B4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXG4udGFiIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICBjb2xvcjogI2YyMDg2ZDtcbn1cblxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXG4udGFiY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItdG9wOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SideSettingLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideSettingLayoutComponent", function() { return SideSettingLayoutComponent; });
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


var SideSettingLayoutComponent = /** @class */ (function () {
    function SideSettingLayoutComponent(titleService) {
        this.titleService = titleService;
        this.isClassVisible = false;
    }
    SideSettingLayoutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Settings');
    };
    SideSettingLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidesetting-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SideSettingLayoutComponent);
    return SideSettingLayoutComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/sitesettings.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/sitesettings.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SiteSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteSettingsModule", function() { return SiteSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/theme/default/admin/settings/components/sitesettings/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var Routers = [
    { path: '', redirectTo: 'appearence', pathMatch: 'full' },
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["SideSettingLayoutComponent"],
        children: [
            {
                path: 'seo',
                loadChildren: './seo/seo.module#SeoModule'
            },
            {
                path: 'social',
                loadChildren: './social/social.module#SocialModule'
            },
            {
                path: '',
                redirectTo: 'seo',
                pathMatch: 'full'
            }
        ]
    }
];
var SiteSettingsModule = /** @class */ (function () {
    function SiteSettingsModule() {
    }
    SiteSettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["SideSettingLayoutComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Routers)
            ],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], SiteSettingsModule);
    return SiteSettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-sitesettings-sitesettings-module.js.map