(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/core/admin/Customers/layout/layout.sandbox.ts":
/*!***********************************************************!*\
  !*** ./src/core/admin/Customers/layout/layout.sandbox.ts ***!
  \***********************************************************/
/*! exports provided: LayoutSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSandbox", function() { return LayoutSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_layout_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/layout.action */ "./src/core/admin/Customers/layout/action/layout.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models */ "./src/core/admin/Customers/layout/models/index.ts");
/* harmony import */ var _reducer_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducer/selectors */ "./src/core/admin/Customers/layout/reducer/selectors.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var LayoutSandbox = /** @class */ (function () {
    function LayoutSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.totalCustomerCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalCustomerCount"]);
        this.totalCustomerCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalCustomerCountLoading"]);
        this.totalCustomerCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalCustomerCountLoaded"]);
        this.activeCustomerCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getActiveCustomerCount"]);
        this.activeCustomerCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getActiveCustomerCountLoading"]);
        this.activeCustomerCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getActiveCustomerCountLoaded"]);
        this.inActiveCustomerCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getInActiveCustomerCount"]);
        this.inActiveCustomerCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getInActiveCustomerCountLoading"]);
        this.inActiveCustomerCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getInActiveCustomerCountLoaded"]);
        this.subscriptions = [];
        this.registerAuthEvents();
    }
    LayoutSandbox.prototype.getCustomerListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_layout_action__WEBPACK_IMPORTED_MODULE_3__["GetTotalCustomerCountAction"](new _models__WEBPACK_IMPORTED_MODULE_6__["CustomerModel"](params)));
    };
    LayoutSandbox.prototype.getActiveCustomerListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_layout_action__WEBPACK_IMPORTED_MODULE_3__["GetActiveCustomerCountAction"](new _models__WEBPACK_IMPORTED_MODULE_6__["CustomerModel"](params)));
    };
    LayoutSandbox.prototype.getInActiveCustomerListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_layout_action__WEBPACK_IMPORTED_MODULE_3__["GetInActiveCustomerCountAction"](new _models__WEBPACK_IMPORTED_MODULE_6__["CustomerModel"](params)));
    };
    /**
     * Registers events
     */
    LayoutSandbox.prototype.registerAuthEvents = function () {
        // ----
    };
    LayoutSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], LayoutSandbox);
    return LayoutSandbox;
}());



/***/ }),

/***/ "./src/core/admin/Customers/layout/models/customer.model.ts":
/*!******************************************************************!*\
  !*** ./src/core/admin/Customers/layout/models/customer.model.ts ***!
  \******************************************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var CustomerModel = /** @class */ (function () {
    function CustomerModel(customerlistform) {
        this.customerGroup = customerlistform.customerGroup || '';
        this.date = customerlistform.date || '';
        this.email = customerlistform.email || '';
        this.name = customerlistform.name || '';
        this.limit = customerlistform.limit || '';
        this.offset = customerlistform.offset || '';
        this.count = customerlistform.count || '';
        if (customerlistform.status === 0) {
            this.status = customerlistform.status;
        }
        else {
            this.status = customerlistform.status || '';
        }
    }
    return CustomerModel;
}());



/***/ }),

/***/ "./src/core/admin/Customers/layout/models/index.ts":
/*!*********************************************************!*\
  !*** ./src/core/admin/Customers/layout/models/index.ts ***!
  \*********************************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.model */ "./src/core/admin/Customers/layout/models/customer.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return _customer_model__WEBPACK_IMPORTED_MODULE_0__["CustomerModel"]; });

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



/***/ }),

/***/ "./src/core/admin/Customers/layout/reducer/selectors.ts":
/*!**************************************************************!*\
  !*** ./src/core/admin/Customers/layout/reducer/selectors.ts ***!
  \**************************************************************/
/*! exports provided: getCustomerLayoutState, getTotalCustomerCount, getTotalCustomerCountLoaded, getTotalCustomerCountLoading, getTotalCustomerCountFailed, getActiveCustomerCount, getActiveCustomerCountLoaded, getActiveCustomerCountLoading, getActiveCustomerCountFailed, getInActiveCustomerCount, getInActiveCustomerCountLoaded, getInActiveCustomerCountLoading, getInActiveCustomerCountFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerLayoutState", function() { return getCustomerLayoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCustomerCount", function() { return getTotalCustomerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCustomerCountLoaded", function() { return getTotalCustomerCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCustomerCountLoading", function() { return getTotalCustomerCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCustomerCountFailed", function() { return getTotalCustomerCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveCustomerCount", function() { return getActiveCustomerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveCustomerCountLoaded", function() { return getActiveCustomerCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveCustomerCountLoading", function() { return getActiveCustomerCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveCustomerCountFailed", function() { return getActiveCustomerCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveCustomerCount", function() { return getInActiveCustomerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveCustomerCountLoaded", function() { return getInActiveCustomerCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveCustomerCountLoading", function() { return getInActiveCustomerCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveCustomerCountFailed", function() { return getInActiveCustomerCountFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _layout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.reducer */ "./src/core/admin/Customers/layout/reducer/layout.reducer.ts");


// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
var getCustomerLayoutState = function (state) { return state.customerLayout; };
var getTotalCustomerCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCustomerCount"]);
var getTotalCustomerCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCustomerCountLoaded"]);
var getTotalCustomerCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCustomerCountLoading"]);
var getTotalCustomerCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCustomerCountFailed"]);
var getActiveCustomerCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveCustomerCount"]);
var getActiveCustomerCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveCustomerCountLoaded"]);
var getActiveCustomerCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveCustomerCountLoading"]);
var getActiveCustomerCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveCustomerCountFailed"]);
var getInActiveCustomerCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveCustomerCount"]);
var getInActiveCustomerCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveCustomerCountLoaded"]);
var getInActiveCustomerCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveCustomerCountLoading"]);
var getInActiveCustomerCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomerLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveCustomerCountFailed"]);


/***/ }),

/***/ "./src/core/admin/settings/localizations/country/country.service.ts":
/*!**************************************************************************!*\
  !*** ./src/core/admin/settings/localizations/country/country.service.ts ***!
  \**************************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


var CountryService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CountryService, _super);
    function CountryService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // setcountrylistdata
    CountryService.prototype.setcountrylistdata = function (data) {
        this.countrylistdata = data;
    };
    CountryService.prototype.getcountrylistdata = function () {
        return this.countrylistdata;
    };
    CountryService.prototype.addCountry = function (param) {
        delete param.countryId;
        return this.http.post(this.url + '/country/add-country', param);
    };
    CountryService.prototype.updateCountry = function (params) {
        return this.http.put(this.url + '/country/update-country/' + params.countryId, params);
    };
    // country list
    CountryService.prototype.countrylist = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/country/countrylist', {
            params: reqOpts
        });
    };
    // country pagination
    CountryService.prototype.countrypagiantion = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/country/countrylist', {
            params: reqOpts
        });
    };
    // delete country
    CountryService.prototype.deletecountry = function (param, Id) {
        return this.http.delete(this.url + '/country/delete-country/' + Id, param);
    };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CountryService);
    return CountryService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/core/admin/settings/localizations/zone/zone.service.ts":
/*!********************************************************************!*\
  !*** ./src/core/admin/settings/localizations/zone/zone.service.ts ***!
  \********************************************************************/
/*! exports provided: ZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneService", function() { return ZoneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var ZoneService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZoneService, _super);
    function ZoneService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = _this.getBaseUrl();
        return _this;
    }
    ZoneService.prototype.setzonelistdata = function (data) {
        this.zonelistdata = data;
    };
    ZoneService.prototype.getzonelistdata = function () {
        return this.zonelistdata;
    };
    // Zone list Pagination
    ZoneService.prototype.zonePagiantion = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/zone/zone-list', { params: reqOpts });
    };
    // ZOne list
    ZoneService.prototype.zoneList = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/zone/zone-list', { params: reqOpts });
    };
    // Zone delete
    ZoneService.prototype.deleteZone = function (param, Id) {
        return this.http.delete(this.url + '/zone/delete-zone/' + Id, param);
    };
    // new zone
    ZoneService.prototype.addZone = function (param) {
        return this.http.post(this.url + '/zone/add-zone', param);
    };
    // update zone
    ZoneService.prototype.updateZone = function (params) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: { zoneId: params.zoneId }
        };
        return this.http.put(this.url + '/zone/update-zone/' + params.zoneId, params);
    };
    ZoneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ZoneService);
    return ZoneService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/core/admin/settings/role/role.models/role-list.model.ts":
/*!*********************************************************************!*\
  !*** ./src/core/admin/settings/role/role.models/role-list.model.ts ***!
  \*********************************************************************/
/*! exports provided: RoleListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListModel", function() { return RoleListModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var RoleListModel = /** @class */ (function () {
    function RoleListModel(rolelistForm) {
        this.limit = rolelistForm.limit || 0;
        this.offset = rolelistForm.offset || 0;
        this.keyword = rolelistForm.keyword || '';
        this.count = rolelistForm.count || 0;
        this.status = rolelistForm.status || '';
    }
    return RoleListModel;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map