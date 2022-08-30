(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~catalog-catalog-module~components-brand-brand-module~components-product-product-module"],{

/***/ "./src/core/admin/catalog/brand/brand.sandbox.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/catalog/brand/brand.sandbox.ts ***!
  \*******************************************************/
/*! exports provided: BrandSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandSandbox", function() { return BrandSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _brand_action_brand_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../brand/action/brand.actions */ "./src/core/admin/catalog/brand/action/brand.actions.ts");
/* harmony import */ var _models_manufacturer_count_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/manufacturer-count.model */ "./src/core/admin/catalog/brand/models/manufacturer-count.model.ts");
/* harmony import */ var _models_manufacturer_Update_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/manufacturer-Update.model */ "./src/core/admin/catalog/brand/models/manufacturer-Update.model.ts");
/* harmony import */ var _models_manufacture_Add_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/manufacture-Add.model */ "./src/core/admin/catalog/brand/models/manufacture-Add.model.ts");
/* harmony import */ var _models_manufacture_list_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/manufacture-list.model */ "./src/core/admin/catalog/brand/models/manufacture-list.model.ts");
/* harmony import */ var _reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducer/brand.selector */ "./src/core/admin/catalog/brand/reducer/brand.selector.ts");
/* harmony import */ var _models_manufacturer_delete_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/manufacturer-delete.model */ "./src/core/admin/catalog/brand/models/manufacturer-delete.model.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// routing

// store


// actions

// model






var BrandSandbox = /** @class */ (function () {
    function BrandSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.getManufactureList$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["getManufacturerList"]);
        this.manufacturerListLoading$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerListLoading"]);
        this.manufacturerListLoaded$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerListLoaded"]);
        this.manufacturerListFailed$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerListFailed"]);
        this.getManufacturercount$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["getManufacturerContdata"]);
        this.manufacturerCountLoading$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerCountLoading"]);
        this.manufacturerCountLoaded$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerCountLoaded"]);
        this.manufacturerCountFailed$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerCountFailed"]);
        this.getManufacturerAdd$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["getManufacturerAdd"]);
        this.manufacturerAddLoading$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerAddLoading"]);
        this.manufacturerAddLoaded$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerAddLoaded"]);
        this.manufacturerAddFailed$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerAddFailed"]);
        this.getManufacturerUpdate$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["getManufacturerUpdate"]);
        this.manufacturerUpdateLoading$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerUpdateLoading"]);
        this.manufacturerUpdateLoaded$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerUpdateLoaded"]);
        this.manufacturerUpdateFailed$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerUpdateFailed"]);
        this.getManufacturerDelete$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["getManufacturerDelete"]);
        this.manufacturerDeleteLoading$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerDeleteLoading"]);
        this.manufacturerDeleteLoaded$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerDeleteLoaded"]);
        this.manufacturerDeleteFailed$ = this.appState.select(_reducer_brand_selector__WEBPACK_IMPORTED_MODULE_10__["manufacturerDeleteFailed"]);
        this.subscriptions = [];
        this.subscribeData();
    }
    BrandSandbox.prototype.manufacturerCountList = function (value) {
        this.appState.dispatch(new _brand_action_brand_actions__WEBPACK_IMPORTED_MODULE_5__["DoManufactCountAction"](new _models_manufacturer_count_model__WEBPACK_IMPORTED_MODULE_6__["ManufacturerCountModel"](value)));
    };
    BrandSandbox.prototype.updateManufactuer = function (value) {
        this.appState.dispatch(new _brand_action_brand_actions__WEBPACK_IMPORTED_MODULE_5__["DoManufacturerUpdateAction"](new _models_manufacturer_Update_model__WEBPACK_IMPORTED_MODULE_7__["ManufacturerUpdateModel"](value)));
    };
    BrandSandbox.prototype.addManufacturer = function (value) {
        this.appState.dispatch(new _brand_action_brand_actions__WEBPACK_IMPORTED_MODULE_5__["DoAddManufacturerAction"](new _models_manufacture_Add_model__WEBPACK_IMPORTED_MODULE_8__["ManufactureAddModel"](value)));
    };
    BrandSandbox.prototype.manufacturerList = function (value) {
        this.appState.dispatch(new _brand_action_brand_actions__WEBPACK_IMPORTED_MODULE_5__["DOManufacturerListAction"](new _models_manufacture_list_model__WEBPACK_IMPORTED_MODULE_9__["ManufacturerListModel"](value)));
    };
    BrandSandbox.prototype.deleteManufacturer = function (value) {
        this.appState.dispatch(new _brand_action_brand_actions__WEBPACK_IMPORTED_MODULE_5__["ManufacturerDeleteAction"](new _models_manufacturer_delete_model__WEBPACK_IMPORTED_MODULE_11__["ManufacturerDeleteModel"](value)));
    };
    BrandSandbox.prototype.subscribeData = function () {
        var _this = this;
        this.subscriptions.push(this.getManufacturerAdd$.subscribe(function (data) {
            if (data) {
                if (data.name) {
                    _this.router.navigate(['/catalog/brand/list']);
                }
            }
        }));
        this.subscriptions.push(this.getManufacturerUpdate$.subscribe(function (data) {
            if (data) {
                if (data.message) {
                    _this.router.navigate(['/catalog/brand/list']);
                }
            }
        }));
    };
    BrandSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], BrandSandbox);
    return BrandSandbox;
}());



/***/ }),

/***/ "./src/core/admin/catalog/brand/brandApiClientservice.ts":
/*!***************************************************************!*\
  !*** ./src/core/admin/catalog/brand/brandApiClientservice.ts ***!
  \***************************************************************/
/*! exports provided: BrandApiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandApiClient", function() { return BrandApiClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/admin/providers/api/api.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var BrandApiClient = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrandApiClient, _super);
    function BrandApiClient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // url address
        _this.url = _this.getBaseUrl();
        _this.checkLength = [];
        return _this;
    }
    BrandApiClient.prototype.deletePagerefresh = function (pageoffset, pagesize) {
        this.pageoffset = pageoffset;
        this.pagesize = pagesize;
    };
    // delete data value
    BrandApiClient.prototype.setDelManufact = function (value, checked, checkLength) {
        this.delManufactvalue = value;
        this.ischecked = checked;
        this.checkLength = checkLength;
    };
    BrandApiClient.prototype.getDelManufact = function () {
        return this.delManufactvalue;
    };
    // passing manufacture editdata
    BrandApiClient.prototype.setManufactureEditValue = function (editdata) {
        this.editData = editdata;
    };
    BrandApiClient.prototype.getManufacturerEditeValue = function () {
        return this.editData;
    };
    /**
     * Handles 'manufacturerList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params form ManufacturerListModel
     */
    BrandApiClient.prototype.manufacturerList = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/manufacturer/manufacturerlist', {
            params: reqOpts
        });
    };
    /**
     * Handles 'manufacturerCount' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from model
     */
    BrandApiClient.prototype.manufacturerCount = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/manufacturer/manufacturerlist', {
            params: reqOpts
        });
    };
    /**
     * Handles 'updateManufacturer' function. Calls put method with specific api address
     * along its param.
     *
     * @param value from model
     */
    BrandApiClient.prototype.updateManufacturer = function (value) {
        return this.http.put(this.url + '/manufacturer/update-manufacturer/' + value.manufacturerId, value);
    };
    /**
     * Handles 'addManufactureData' function. Calls post method with specific api address
     * along its param.
     *
     * @param value from model
     */
    BrandApiClient.prototype.addManufactureData = function (value) {
        return this.http.post(this.url + '/manufacturer/create-manufacturer', value);
    };
    /**
     * Handles 'deleteManufacturer' function. Calls delete method with specific api address
     * along its param.
     *
     * @param value from model
     */
    BrandApiClient.prototype.deleteManufacturer = function (value) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: { manufacturerId: value.manufacturerId }
        };
        return this.http.delete(this.url + '/manufacturer/delete-manufacturer/' + value.manufacturerId, httpOptions);
    };
    BrandApiClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], BrandApiClient);
    return BrandApiClient;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/core/admin/catalog/brand/models/manufacture-Add.model.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/catalog/brand/models/manufacture-Add.model.ts ***!
  \**********************************************************************/
/*! exports provided: ManufactureAddModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufactureAddModel", function() { return ManufactureAddModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ManufactureAddModel = /** @class */ (function () {
    function ManufactureAddModel(manufactureAddForm) {
        this.name = manufactureAddForm.name || '';
        this.image = manufactureAddForm.image || '';
        this.sortOrder = manufactureAddForm.sortOrder || 0;
        this.status = manufactureAddForm.status || 0;
    }
    return ManufactureAddModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/brand/models/manufacture-list.model.ts":
/*!***********************************************************************!*\
  !*** ./src/core/admin/catalog/brand/models/manufacture-list.model.ts ***!
  \***********************************************************************/
/*! exports provided: ManufacturerListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerListModel", function() { return ManufacturerListModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ManufacturerListModel = /** @class */ (function () {
    function ManufacturerListModel(manufactuerListFrom) {
        this.limit = manufactuerListFrom.limit || 0;
        this.offset = manufactuerListFrom.offset || 0;
        this.keyword = manufactuerListFrom.keyword || '';
        this.count = manufactuerListFrom.count || false;
        this.status = manufactuerListFrom.status || '';
    }
    return ManufacturerListModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/brand/models/manufacturer-Update.model.ts":
/*!**************************************************************************!*\
  !*** ./src/core/admin/catalog/brand/models/manufacturer-Update.model.ts ***!
  \**************************************************************************/
/*! exports provided: ManufacturerUpdateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerUpdateModel", function() { return ManufacturerUpdateModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ManufacturerUpdateModel = /** @class */ (function () {
    function ManufacturerUpdateModel(manufacturerUpdate) {
        this.name = manufacturerUpdate.name || '';
        this.manufacturerId = manufacturerUpdate.manufacturerId || 0;
        this.image = manufacturerUpdate.image || '';
        this.sortOrder = manufacturerUpdate.sortOrder || 0;
        this.status = manufacturerUpdate.status || 0;
    }
    return ManufacturerUpdateModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/brand/models/manufacturer-count.model.ts":
/*!*************************************************************************!*\
  !*** ./src/core/admin/catalog/brand/models/manufacturer-count.model.ts ***!
  \*************************************************************************/
/*! exports provided: ManufacturerCountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerCountModel", function() { return ManufacturerCountModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ManufacturerCountModel = /** @class */ (function () {
    function ManufacturerCountModel(manufactuerCountFrom) {
        this.limit = manufactuerCountFrom.limit || 0;
        this.offset = manufactuerCountFrom.offset || 0;
        this.keyword = manufactuerCountFrom.keyword || '';
        this.count = manufactuerCountFrom.count || false;
    }
    return ManufacturerCountModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/brand/models/manufacturer-delete.model.ts":
/*!**************************************************************************!*\
  !*** ./src/core/admin/catalog/brand/models/manufacturer-delete.model.ts ***!
  \**************************************************************************/
/*! exports provided: ManufacturerDeleteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerDeleteModel", function() { return ManufacturerDeleteModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ManufacturerDeleteModel = /** @class */ (function () {
    function ManufacturerDeleteModel(manufacturerdeleteForm) {
        this.manufacturerId = manufacturerdeleteForm.manufacturerId || '';
    }
    return ManufacturerDeleteModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/brand/reducer/brand.selector.ts":
/*!****************************************************************!*\
  !*** ./src/core/admin/catalog/brand/reducer/brand.selector.ts ***!
  \****************************************************************/
/*! exports provided: getBrandState, getManufacturerList, manufacturerListLoading, manufacturerListLoaded, manufacturerListFailed, getManufacturerContdata, manufacturerCountLoading, manufacturerCountLoaded, manufacturerCountFailed, getManufacturerAdd, manufacturerAddLoading, manufacturerAddLoaded, manufacturerAddFailed, getManufacturerUpdate, manufacturerUpdateLoading, manufacturerUpdateLoaded, manufacturerUpdateFailed, getManufacturerDelete, manufacturerDeleteLoading, manufacturerDeleteLoaded, manufacturerDeleteFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrandState", function() { return getBrandState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerList", function() { return getManufacturerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerListLoading", function() { return manufacturerListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerListLoaded", function() { return manufacturerListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerListFailed", function() { return manufacturerListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerContdata", function() { return getManufacturerContdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerCountLoading", function() { return manufacturerCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerCountLoaded", function() { return manufacturerCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerCountFailed", function() { return manufacturerCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerAdd", function() { return getManufacturerAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerAddLoading", function() { return manufacturerAddLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerAddLoaded", function() { return manufacturerAddLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerAddFailed", function() { return manufacturerAddFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerUpdate", function() { return getManufacturerUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerUpdateLoading", function() { return manufacturerUpdateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerUpdateLoaded", function() { return manufacturerUpdateLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerUpdateFailed", function() { return manufacturerUpdateFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerDelete", function() { return getManufacturerDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerDeleteLoading", function() { return manufacturerDeleteLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerDeleteLoaded", function() { return manufacturerDeleteLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerDeleteFailed", function() { return manufacturerDeleteFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _brand_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand.reducer */ "./src/core/admin/catalog/brand/reducer/brand.reducer.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


var getBrandState = function (state) { return state.brand; };
// manufacturer list
var getManufacturerList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerList"]);
var manufacturerListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerListLoading"]);
var manufacturerListLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufactuerListLoaded"]);
var manufacturerListFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getmanufacturerListFailed"]);
// manufacturer count
var getManufacturerContdata = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerCount"]);
var manufacturerCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerCountLoading"]);
var manufacturerCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerCountLoaded"]);
var manufacturerCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerCountFailed"]);
// manufacturer add
var getManufacturerAdd = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerAdd"]);
var manufacturerAddLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerAddLoading"]);
var manufacturerAddLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerAddLoaded"]);
var manufacturerAddFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerAddFailed"]);
// manufacturer update
var getManufacturerUpdate = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerUpdate"]);
var manufacturerUpdateLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerUpdateLoading"]);
var manufacturerUpdateLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerUpdateLoaded"]);
var manufacturerUpdateFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerUpdateFailed"]);
// manufacturer delete
var getManufacturerDelete = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerDelete"]);
var manufacturerDeleteLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerDeleteLoading"]);
var manufacturerDeleteLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerDeleteLoaded"]);
var manufacturerDeleteFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBrandState, _brand_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerDeleteFailed"]);


/***/ })

}]);
//# sourceMappingURL=default~catalog-catalog-module~components-brand-brand-module~components-product-product-module.js.map