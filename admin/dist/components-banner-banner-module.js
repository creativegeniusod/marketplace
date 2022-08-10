(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-banner-banner-module"],{

/***/ "./src/core/admin/demo/banners/banner-effect/banner.effect.ts":
/*!********************************************************************!*\
  !*** ./src/core/admin/demo/banners/banner-effect/banner.effect.ts ***!
  \********************************************************************/
/*! exports provided: BannerEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerEffect", function() { return BannerEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../banner-action/banner.action */ "./src/core/admin/demo/banners/banner-action/banner.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../banner.service */ "./src/core/admin/demo/banners/banner.service.ts");
/* harmony import */ var _banner_model_bannercount_response_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../banner-model/bannercount.response.model */ "./src/core/admin/demo/banners/banner-model/bannercount.response.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */










var BannerEffect = /** @class */ (function () {
    function BannerEffect(action$, service, appState) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        this.appState = appState;
        // Banner List
        this.doBannerLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_BANNER_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.bannerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListFailAction"](error)); }));
        }));
        // Banner Count List
        this.doBannerCountLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_BANNER_LIST_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.bannerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListCountSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListCountFailAction"](error)); }));
        }));
        // Banner Active List
        this.doBannerActiveLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_BANNER_LIST_ACTIVE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.bannerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListActiveSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListActiveFailAction"](error)); }));
        }));
        // Banner In-Active List
        this.doBannerInActiveLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_BANNER_LIST_IN_ACTIVE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.bannerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [
                new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListInActiveSuccessAction"](user)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListInActiveFailAction"](error));
            }));
        }));
        // Banner LIST PAGINATION
        this.doBannerPagination$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_BANNER_PAGINATION_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.bannerPagiantion(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [
                new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerPaginationSuccessAction"](new _banner_model_bannercount_response_model__WEBPACK_IMPORTED_MODULE_8__["BannercountResponseModel"](user))
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerPaginationFailAction"](error)); }));
        }));
        // ADD BANNER
        this.doAddBanner$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_ADD_BANNER_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            console.log('do banner effect', state);
            return _this.service.addBanner(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (salesPayments) { return [
                new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerAddSuccessAction"](salesPayments)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerAddFailAction"](error)); }));
        }));
        // Update
        this.doUpdateBanner$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_UPDATE_BANNER_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var Id = state.bannerId;
            if (state.image === '') {
                delete state.image;
            }
            return _this.service.updateBanner(state, Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListActiveAction"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListInActiveAction"]({ count: 1, status: 0 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerUpdateSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerUpdateFailAction"](error)); }));
        }));
        // // Delete
        this.doDeleteBanner$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_DELETE_BANNER_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var bannerId = state.bannerId;
            return _this.service.deleteBanner(state, bannerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListActiveAction"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListInActiveAction"]({ count: 1, status: 0 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (update) { return new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerDeleteSuccessAction"](update); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerDeleteFailAction"](error)); }));
        }));
        // Product Bulk Delete
        this.doProductBannerDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_BANNER_BULK_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.bannerBulkDelete(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListActiveAction"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerListInActiveAction"]({ count: 1, status: 0 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerBulkDeleteSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__["DoBannerBulkDeleteFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doBannerLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doBannerCountLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doBannerActiveLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doBannerInActiveLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doBannerPagination$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doAddBanner$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doUpdateBanner$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doDeleteBanner$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BannerEffect.prototype, "doProductBannerDelete$", void 0);
    BannerEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _banner_service__WEBPACK_IMPORTED_MODULE_7__["BannerService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], BannerEffect);
    return BannerEffect;
}());



/***/ }),

/***/ "./src/core/admin/demo/banners/banner-model/bannercount.model.ts":
/*!***********************************************************************!*\
  !*** ./src/core/admin/demo/banners/banner-model/bannercount.model.ts ***!
  \***********************************************************************/
/*! exports provided: BannercountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannercountModel", function() { return BannercountModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var BannercountModel = /** @class */ (function () {
    function BannercountModel(bannercountForm) {
        this.limit = bannercountForm.limit || 0;
        this.offset = bannercountForm.offset || 0;
        this.keyword = bannercountForm.keyword || '';
        this.count = bannercountForm.count || '';
    }
    return BannercountModel;
}());



/***/ }),

/***/ "./src/core/admin/demo/banners/banner-model/bannercount.response.model.ts":
/*!********************************************************************************!*\
  !*** ./src/core/admin/demo/banners/banner-model/bannercount.response.model.ts ***!
  \********************************************************************************/
/*! exports provided: BannercountResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannercountResponseModel", function() { return BannercountResponseModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var BannercountResponseModel = /** @class */ (function () {
    function BannercountResponseModel(bannercount) {
        this.bannercount = {};
        this.bannercount = bannercount || '';
    }
    return BannercountResponseModel;
}());



/***/ }),

/***/ "./src/core/admin/demo/banners/banner-model/bannerdelete.model.ts":
/*!************************************************************************!*\
  !*** ./src/core/admin/demo/banners/banner-model/bannerdelete.model.ts ***!
  \************************************************************************/
/*! exports provided: BannerdeleteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerdeleteModel", function() { return BannerdeleteModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var BannerdeleteModel = /** @class */ (function () {
    function BannerdeleteModel(deletebanner) {
        this.bannerId = deletebanner.bannerId || '';
    }
    return BannerdeleteModel;
}());



/***/ }),

/***/ "./src/core/admin/demo/banners/banner-model/bannerlist.model.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/demo/banners/banner-model/bannerlist.model.ts ***!
  \**********************************************************************/
/*! exports provided: BannerlistModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerlistModel", function() { return BannerlistModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var BannerlistModel = /** @class */ (function () {
    function BannerlistModel(bannerlistForm) {
        this.limit = bannerlistForm.limit || 0;
        this.offset = bannerlistForm.offset || 0;
        if (bannerlistForm.count === 1 && bannerlistForm.status === 1) {
            this.count = bannerlistForm.count || 0;
            this.status = bannerlistForm.status || 0;
        }
        if (bannerlistForm.count === 1 && bannerlistForm.status === 0) {
            this.count = bannerlistForm.count || 0;
            this.status = bannerlistForm.status || 0;
        }
        if (bannerlistForm.count === 1 && !bannerlistForm.status) {
            this.count = bannerlistForm.count || 0;
        }
        this.keyword = bannerlistForm.keyword || '';
    }
    return BannerlistModel;
}());



/***/ }),

/***/ "./src/core/admin/demo/banners/banner-reducer/banner.selector.ts":
/*!***********************************************************************!*\
  !*** ./src/core/admin/demo/banners/banner-reducer/banner.selector.ts ***!
  \***********************************************************************/
/*! exports provided: getBannerState, getBannerlst, getbannerpagination, getAddBanners, getaddBanner, getdeletebanner, getbanneraddloaded, getbanneraddfailed, getbanneraddloading, getUpdatebanner, getbannerupdateloading, getbannerupdateloaded, getbannerupdatefailed, getbannerdeleteloading, getbannerdeleteloaded, getbannerdeletefailed, getbannercountloading, getbannercountloaded, getbannercountfailed, getbannerlistloaded, getbannerlistfailed, getbannerlistloading, getbannerListCount, getbannerListCountLoaded, getbannerListCountFailed, getbannerListCountLoading, getbannerListActive, getbannerListActiveLoaded, getbannerListACtiveFailed, getbannerListActiveLoading, getbannerListInActive, getbannerListInActiveLoaded, getbannerListInACtiveFailed, getbannerListInActiveLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerState", function() { return getBannerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerlst", function() { return getBannerlst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerpagination", function() { return getbannerpagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddBanners", function() { return getAddBanners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getaddBanner", function() { return getaddBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getdeletebanner", function() { return getdeletebanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbanneraddloaded", function() { return getbanneraddloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbanneraddfailed", function() { return getbanneraddfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbanneraddloading", function() { return getbanneraddloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatebanner", function() { return getUpdatebanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerupdateloading", function() { return getbannerupdateloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerupdateloaded", function() { return getbannerupdateloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerupdatefailed", function() { return getbannerupdatefailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerdeleteloading", function() { return getbannerdeleteloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerdeleteloaded", function() { return getbannerdeleteloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerdeletefailed", function() { return getbannerdeletefailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannercountloading", function() { return getbannercountloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannercountloaded", function() { return getbannercountloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannercountfailed", function() { return getbannercountfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerlistloaded", function() { return getbannerlistloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerlistfailed", function() { return getbannerlistfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerlistloading", function() { return getbannerlistloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListCount", function() { return getbannerListCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListCountLoaded", function() { return getbannerListCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListCountFailed", function() { return getbannerListCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListCountLoading", function() { return getbannerListCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListActive", function() { return getbannerListActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListActiveLoaded", function() { return getbannerListActiveLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListACtiveFailed", function() { return getbannerListACtiveFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListActiveLoading", function() { return getbannerListActiveLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListInActive", function() { return getbannerListInActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListInActiveLoaded", function() { return getbannerListInActiveLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListInACtiveFailed", function() { return getbannerListInACtiveFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getbannerListInActiveLoading", function() { return getbannerListInActiveLoading; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner-reducer/banner.reducer */ "./src/core/admin/demo/banners/banner-reducer/banner.reducer.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
var getBannerState = function (state) { return state.banner; };
var getBannerlst = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getBannerlist"]);
var getbannerpagination = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerpagination"]);
var getAddBanners = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getAddBanner"]);
var getaddBanner = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getaddBanner"]);
var getdeletebanner = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getdeletebanner"]);
var getbanneraddloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbanneraddloaded"]);
var getbanneraddfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbanneraddfailed"]);
var getbanneraddloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbanneraddloading"]);
var getUpdatebanner = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getUpdatebanner"]);
var getbannerupdateloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerupdateloading"]);
var getbannerupdateloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerupdateloaded"]);
var getbannerupdatefailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerupdatefailed"]);
var getbannerdeleteloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerdeleteloading"]);
var getbannerdeleteloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerdeleteloaded"]);
var getbannerdeletefailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerdeletefailed"]);
var getbannercountloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannercountloading"]);
var getbannercountloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannercountloaded"]);
var getbannercountfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannercountfailed"]);
var getbannerlistloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerlistloaded"]);
var getbannerlistfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerlistfailed"]);
var getbannerlistloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerlistloading"]);
var getbannerListCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListCount"]);
var getbannerListCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListCountLoaded"]);
var getbannerListCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListCountFailed"]);
var getbannerListCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListCountLoading"]);
var getbannerListActive = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListActive"]);
var getbannerListActiveLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListActiveLoaded"]);
var getbannerListACtiveFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListACtiveFailed"]);
var getbannerListActiveLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListActiveLoading"]);
var getbannerListInActive = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListInActive"]);
var getbannerListInActiveLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListInActiveLoaded"]);
var getbannerListInACtiveFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListInACtiveFailed"]);
var getbannerListInActiveLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBannerState, _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__["getbannerListInActiveLoading"]);


/***/ }),

/***/ "./src/core/admin/demo/banners/banner.sandbox.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/demo/banners/banner.sandbox.ts ***!
  \*******************************************************/
/*! exports provided: BannerSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSandbox", function() { return BannerSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../banners/banner-action/banner.action */ "./src/core/admin/demo/banners/banner-action/banner.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner-reducer/banner.selector */ "./src/core/admin/demo/banners/banner-reducer/banner.selector.ts");
/* harmony import */ var _banner_model_bannerlist_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner-model/bannerlist.model */ "./src/core/admin/demo/banners/banner-model/bannerlist.model.ts");
/* harmony import */ var _banner_model_bannerdelete_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-model/bannerdelete.model */ "./src/core/admin/demo/banners/banner-model/bannerdelete.model.ts");
/* harmony import */ var _banner_model_bannercount_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner-model/bannercount.model */ "./src/core/admin/demo/banners/banner-model/bannercount.model.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */










var BannerSandbox = /** @class */ (function () {
    function BannerSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.getbannerlist$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getBannerlst"]);
        this.getbannerpagelength$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerpagination"]);
        this.getAddNewBanner$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getAddBanners"]);
        this.getaddBanner$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getaddBanner"]);
        this.getUpdatebanner$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getUpdatebanner"]);
        this.getdeletebanner$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getdeletebanner"]);
        this.getbanneraddloaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbanneraddloaded"]);
        this.getbanneraddfailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbanneraddfailed"]);
        this.getbanneraddloading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbanneraddloading"]);
        this.getbannerupdateloading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerupdateloading"]);
        this.getbannerupdateloaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerupdateloaded"]);
        this.getbannerupdatefailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerupdatefailed"]);
        this.getbannerdeleteloading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerdeleteloading"]);
        this.getbannerdeleteloaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerdeleteloaded"]);
        this.getbannerdeletefailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerdeletefailed"]);
        this.getbannercountloading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannercountloading"]);
        this.getbannercountloaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannercountloaded"]);
        this.getbannercountfailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannercountfailed"]);
        this.getbannerlistloaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerlistloaded"]);
        this.getbannerlistfailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerlistfailed"]);
        this.getbannerlistloading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerlistloading"]);
        this.getbannerListCount$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListCount"]);
        this.getbannerListCountLoaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListCountLoaded"]);
        this.getbannerListCountFailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListCountFailed"]);
        this.getbannerListCountLoading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListCountLoading"]);
        this.getbannerListActive$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListActive"]);
        this.getbannerListActiveLoaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListActiveLoaded"]);
        this.getbannerListACtiveFailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListACtiveFailed"]);
        this.getbannerListActiveLoading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListActiveLoading"]);
        this.getbannerListInActive$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListInActive"]);
        this.getbannerListInActiveLoaded$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListInActiveLoaded"]);
        this.getbannerListInACtiveFailed$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListInACtiveFailed"]);
        this.getbannerListInActiveLoading$ = this.appState.select(_banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__["getbannerListInActiveLoading"]);
        this.subscriptions = [];
        this.subscribe();
    }
    BannerSandbox.prototype.getBannerList = function (value) {
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerListAction"](new _banner_model_bannerlist_model__WEBPACK_IMPORTED_MODULE_7__["BannerlistModel"](value)));
    };
    BannerSandbox.prototype.getBannerListCount = function (value) {
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerListCountAction"](new _banner_model_bannerlist_model__WEBPACK_IMPORTED_MODULE_7__["BannerlistModel"](value)));
    };
    BannerSandbox.prototype.getBannerListActive = function (value) {
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerListActiveAction"](new _banner_model_bannerlist_model__WEBPACK_IMPORTED_MODULE_7__["BannerlistModel"](value)));
    };
    BannerSandbox.prototype.getBannerListInActive = function (value) {
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerListInActiveAction"](new _banner_model_bannerlist_model__WEBPACK_IMPORTED_MODULE_7__["BannerlistModel"](value)));
    };
    BannerSandbox.prototype.getBannerPagination = function (value) {
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerPaginationAction"](new _banner_model_bannercount_model__WEBPACK_IMPORTED_MODULE_9__["BannercountModel"](value)));
    };
    BannerSandbox.prototype.addBanner = function (data) {
        console.log('add banner sandbox', data);
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerAddAction"](data));
    };
    BannerSandbox.prototype.UpdateBanner = function (data) {
        console.log("Trigger Action");
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerUpdateAction"](data));
    };
    BannerSandbox.prototype.deletebanner = function (data) {
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerDeleteAction"](new _banner_model_bannerdelete_model__WEBPACK_IMPORTED_MODULE_8__["BannerdeleteModel"](data)));
    };
    // Do banner Bulk Delete
    BannerSandbox.prototype.bulkDelete = function (value) {
        this.appState.dispatch(new _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__["DoBannerBulkDelete"](value));
    };
    BannerSandbox.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.getAddNewBanner$.subscribe(function (data) {
            if (data && data.status === 1) {
                if (data.message) {
                    _this.router.navigate(['/demo/banners/list']);
                }
            }
        }));
        this.subscriptions.push(this.getUpdatebanner$.subscribe(function (data) {
            if (data && data.status === 1) {
                if (data.message) {
                    _this.router.navigate(['/demo/banners/list']);
                }
            }
        }));
    };
    BannerSandbox.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    BannerSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], BannerSandbox);
    return BannerSandbox;
}());



/***/ }),

/***/ "./src/core/admin/demo/banners/banner.service.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/demo/banners/banner.service.ts ***!
  \*******************************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/admin/providers/api/api.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var BannerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BannerService, _super);
    function BannerService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // banner edit service
    BannerService.prototype.setBannerListData = function (data) {
        this.bannerEditdata = data;
    };
    BannerService.prototype.getbannerListdata = function () {
        return this.bannerEditdata;
    };
    // list
    BannerService.prototype.bannerList = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/banner/bannerList', { params: reqOpts });
    };
    //  Pagination
    BannerService.prototype.bannerPagiantion = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/banner/bannerlist', { params: reqOpts });
    };
    // Update
    BannerService.prototype.updateBanner = function (param, Id) {
        return this.http.put(this.url + '/banner/update-banner/' + Id, param);
    };
    // add
    BannerService.prototype.addBanner = function (param) {
        console.log('add banner', param);
        return this.http.post(this.url + '/banner/add-banner', param);
    };
    // delete
    BannerService.prototype.deleteBanner = function (param, Id) {
        return this.http.delete(this.url + '/banner/delete-banner/' + Id, param);
    };
    /**
     * Handles 'bannerBulkDelete' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from Model
     */
    BannerService.prototype.bannerBulkDelete = function (param) {
        return this.http.post(this.url + '/banner/delete-banner', param);
    };
    BannerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BannerService);
    return BannerService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/demo/components/banner/add/add.component.html":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/banner/add/add.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-layout></app-banner-layout>\n<div class=\"row products-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row noborder\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\"> DEMO </a></li>\n                    <li><a href=\"javascript:void(0)\" [routerLink]=\"['/demo/banners']\"> Banners </a></li>\n                    <li>Add Banners</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn ap-col-btn\">\n                <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-save\"><img\n                        src=\"assets/img/tick-round-white.png\">Save\n                </button>\n                <button (click)=\"bannerCancel()\" class=\"btn btn-cancel\"><img\n                        src=\"assets/img/close-white-ico.png\">Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n</div>\n\n<div class=\"flex addproduct-wrap addgroup-wrap\">\n\n    <div class=\"card ap-general\">\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"bannerForm\">\n            <div class=\"ap-header\">\n                General Information\n            </div>\n            <div class=\"flex ap-body cmsap-body\">\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Banner Title<sup>*</sup> </label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bannerTitle\" formControlName=\"bannerTitle\" placeholder=\"Banner Title\" [ngClass]=\"{ 'is-invalid': submitted && f.bannerTitle.errors }\">\n                        <div *ngIf=\"submitted && f.bannerTitle.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.bannerTitle.errors.required\">Banner Title is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col width100\">\n                    <div class=\"form-group\">\n                        <label>Banner Content</label>\n                        <ckeditor formControlName=\"bannerContent\" [ngClass]=\"{'Validationcolor':bannerForm.get('bannerContent').hasError('required') && bannerForm.get('bannerContent').touched&&submitted==true}\">\n                        </ckeditor>\n\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Link</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bannerLink\" formControlName=\"bannerLink\" placeholder=\"Enter Link\" [ngClass]=\"{ 'is-invalid': submitted && f.bannerLink.errors }\">\n                        <div *ngIf=\"submitted && f.bannerLink.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.bannerLink.errors.required\">Link is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Position</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"position\" formControlName=\"position\" placeholder=\"Enter Position \" [ngClass]=\"{ 'is-invalid': submitted && f.position.errors }\">\n                        <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.position.errors.required\">Position is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Active<sup>*</sup></label>\n                        <select class=\"custom-select col-12\" formControlName=\"active\" id=\"inlineFormCustomSelect\" [ngClass]=\"{ 'is-invalid': submitted && f.active.errors }\">\n                            <option value=\"\">- -Select Active- -</option>\n                            <option value=\"1\">Yes</option>\n                            <option value=\"0\">No</option>\n                        </select>\n                        <div *ngIf=\"submitted && f.active.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.active.errors.required\">Status is required</div>\n                        </div>\n\n                    </div>\n                </div>\n                <!--col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <div class=\"image-col\">\n                            <div class=\"img-dflt\">\n                                <input type=\"file\" name=\"userImg\" (change)=\"uploadChange($event)\" accept=\"image/*\" #filePath style=\"display: none\">\n                                <input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\"/> <!-- Validation Field -->\n                                <img [src]=\"postImageUrl\" width=\"13%\" height=\"13%\">\n                                <p></p>\n                                <button (click)=\"uploadButtonClick()\" type=\"button\">Upload Picture\n                                </button>\n                            </div>\n                        </div>\n                        <div style=\"color:#f62d51\" *ngIf=\"submitted && f.imageInput.errors\">\n                            <div *ngIf=\"f.imageInput.errors.required\">Image is required</div>\n                        </div>\n                    </div>\n                 \n\n                </div>\n                <!--col-->\n            </div>\n        </form>\n    </div>\n    <!--General-->\n\n\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/demo/components/banner/add/add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/banner/add/add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BannerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerAddComponent", function() { return BannerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/demo/banners/banner.sandbox */ "./src/core/admin/demo/banners/banner.sandbox.ts");
/* harmony import */ var _core_admin_demo_banners_banner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/demo/banners/banner.service */ "./src/core/admin/demo/banners/banner.service.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



// Routing Module

// Store Module



var BannerAddComponent = /** @class */ (function () {
    function BannerAddComponent(modalService, modalService2, router, fb, route, changeDetectRef, configService, sandbox, service) {
        this.modalService = modalService;
        this.modalService2 = modalService2;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.changeDetectRef = changeDetectRef;
        this.configService = configService;
        this.sandbox = sandbox;
        this.service = service;
        this.ImageUrl = '';
        this.submitted = false;
        this.id = '';
    }
    BannerAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    BannerAddComponent.prototype.ngOnInit = function () {
        this.imageUrl = this.configService.getImageUrl();
        this.postImageUrl = './assets/upload-banner/upload.png';
        this.initForm();
        this.editBannerData();
        this.editBannerId = this.route.snapshot.paramMap.get('id');
    };
    BannerAddComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService
            .open(content, { windowClass: 'image-manager' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BannerAddComponent.prototype.open = function (content) {
        this.modalService2.open(content, {
            windowClass: 'dark-modal,image-manager'
        });
    };
    BannerAddComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //  cancel it  navigate  to - add page to  list page
    BannerAddComponent.prototype.bannerCancel = function () {
        this.service.setBannerListData('');
        this.router.navigate(['/demo/banners/list']);
    };
    // Form  Initialization
    BannerAddComponent.prototype.initForm = function () {
        this.bannerForm = this.fb.group({
            bannerTitle: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bannerContent: [''],
            active: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bannerLink: [null],
            position: [null],
            imageInput: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox banner  function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    BannerAddComponent.prototype.onSubmit = function () {
        console.log('forms', this.bannerForm.value);
        this.submitted = true;
        if (!this.bannerForm.valid) {
            this.validateAllFormFields(this.bannerForm);
            return;
        }
        else {
            var params = {};
            params.title = this.bannerForm.value.bannerTitle;
            params.content = this.bannerForm.value.bannerContent;
            params.position = +this.bannerForm.value.position;
            params.link = this.bannerForm.value.bannerLink;
            params.image = this.ImageUrl;
            // tslint:disable-next-line: radix
            var tempActive = parseInt(this.bannerForm.value.active);
            params.status = tempActive;
            if (this.bannerInfo[0] && this.bannerInfo[0].bannerId) {
                params.bannerId = this.bannerInfo[0].bannerId;
                console.log(params, "*****");
                this.sandbox.UpdateBanner(params);
            }
            else {
                console.log('params', params);
                this.sandbox.addBanner(params);
            }
        }
    };
    // editBanner Data
    BannerAddComponent.prototype.editBannerData = function () {
        this.bannerInfo = [];
        this.serviceData = this.service.getbannerListdata();
        if (this.serviceData) {
            this.bannerInfo.push(this.serviceData);
        }
        if (this.bannerInfo && this.bannerInfo[0]) {
            for (var i = 0; i < this.bannerInfo.length; i++) {
                this.bannerTitle = this.bannerInfo[0].title;
                this.bannerForm.controls['bannerContent'].setValue(this.serviceData.content);
                this.bannerForm.controls['imageInput'].setValue(this.serviceData.image); // <-- Set Value for Validation
                this.bannerLink = this.bannerInfo[0].link;
                this.position = this.bannerInfo[0].position;
                this.bannerForm.controls['active'].setValue(this.serviceData.active);
                this.postImageUrl =
                    this.imageUrl + '?path=' +
                        ("" + this.bannerInfo[0].imagePath) + '&name=' +
                        ("" + this.bannerInfo[0].image) +
                        '&width=160&height=150';
                this.changeDetectRef.detectChanges();
            }
        }
        else {
            this.bannerInfo = ' ';
        }
    };
    // Upload Image
    BannerAddComponent.prototype.uploadButtonClick = function () {
        var el = this.filePath.nativeElement;
        el.click();
    };
    BannerAddComponent.prototype.uploadChange = function ($event) {
        this.submitted = false;
        this.convertBase64($event.target);
    };
    BannerAddComponent.prototype.convertBase64 = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        this.bannerForm.controls['imageInput'].setValue(file ? file.name : ''); // <-- Set Value for Validation
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.postImageUrl = myReader.result;
            _this.ImageUrl = myReader.result;
            console.log('select image', _this.ImageUrl);
            _this.changeDetectRef.detectChanges();
        };
        myReader.readAsDataURL(file);
    };
    Object.defineProperty(BannerAddComponent.prototype, "f", {
        //  validation controls  -  function (f) is using in banner add html
        get: function () {
            return this.bannerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // show all validation at when invalid form
    BannerAddComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filePath'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BannerAddComponent.prototype, "filePath", void 0);
    BannerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cms-banner-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/demo/components/banner/add/add.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n\n      .dark-modal .close {\n        color: white;\n      }\n\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n\n      .image-manager .modal-dialog {\n        max-width: 70%;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
            _core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_5__["BannerSandbox"],
            _core_admin_demo_banners_banner_service__WEBPACK_IMPORTED_MODULE_6__["BannerService"]])
    ], BannerAddComponent);
    return BannerAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/demo/components/banner/banner.module.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/banner/banner.module.ts ***!
  \*************************************************************************/
/*! exports provided: BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/demo/components/banner/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/demo/components/banner/list/list.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/admin/demo/banners/banner.sandbox */ "./src/core/admin/demo/banners/banner.sandbox.ts");
/* harmony import */ var _core_admin_demo_banners_banner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/admin/demo/banners/banner.service */ "./src/core/admin/demo/banners/banner.service.ts");
/* harmony import */ var _core_admin_demo_banners_banner_effect_banner_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/admin/demo/banners/banner-effect/banner.effect */ "./src/core/admin/demo/banners/banner-effect/banner.effect.ts");
/* harmony import */ var _banner_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner.routing */ "./src/theme/default/admin/demo/components/banner/banner.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_banner_layout_banner_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/banner-layout/banner-layout.component */ "./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




// components


// Store Actions




// Routing Module

// Shared Module



var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_add_component__WEBPACK_IMPORTED_MODULE_5__["BannerAddComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["BannerListComponent"],
                _shared_banner_layout_banner_layout_component__WEBPACK_IMPORTED_MODULE_14__["BannerLayoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _banner_routing__WEBPACK_IMPORTED_MODULE_11__["BannerRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_core_admin_demo_banners_banner_effect_banner_effect__WEBPACK_IMPORTED_MODULE_10__["BannerEffect"]]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ],
            providers: [_core_admin_demo_banners_banner_service__WEBPACK_IMPORTED_MODULE_9__["BannerService"], _core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_8__["BannerSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], BannerModule);
    return BannerModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/demo/components/banner/banner.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/banner/banner.routing.ts ***!
  \**************************************************************************/
/*! exports provided: BannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerRoutingModule", function() { return BannerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/demo/components/banner/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/demo/components/banner/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var bannerRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["BannerListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["BannerAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["BannerAddComponent"]
    }
];
var BannerRoutingModule = /** @class */ (function () {
    function BannerRoutingModule() {
    }
    BannerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(bannerRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BannerRoutingModule);
    return BannerRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/demo/components/banner/list/list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/banner/list/list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-layout></app-banner-layout>\n<div class=\"row products-section products-sub-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\"> DEMO </a></li>\n                    <li>Banners</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn\">\n                <button class=\"btn cms-btn\" (click)=\"AddBanner()\"><img\n                        src=\"assets/img/add-white-ico.png\">Add Banner new\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n    <div class=\"col-12\">\n        <div class=\"flex filter-row\">\n            <div class=\"filter-lft\">\n            </div>\n            <!--Lft-->\n            <div class=\"filter-nav-list\">\n                <ul class=\"flex\">\n                    <li *ngIf=\"checkedData.length==0\" style=\"margin-left: 15px;\">\n                        <a (click)=\"bulkDeleteEmpty()\"><img src=\"assets/img/delete-ico-pink.png\"> Delete\n                        </a>\n                    </li>\n                    <li *ngIf=\"checkedData.length>0\" style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent1\" placement=\"left\" #deletePop=\"ngbPopover\">\n                        <a><img src=\"assets/img/delete-ico-pink.png\"> Delete\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <!--Right-->\n        </div>\n    </div>\n</div>\n\n<div class=\"flex product-wrap\">\n    <!--Filter-->\n    <div class=\"product-table\" style=\"width: 100%\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" width=\"5%\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                </div>\n                            </div>\n                        </th>\n                        <th scope=\"col\">Title</th>\n                        <th scope=\"col\">Image</th>\n                        <th scope=\"col\">Link</th>\n                        <th scope=\"col\">Position</th>\n                        <th scope=\"col\" width=\"100\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let bannerInfo of sandbox.getbannerlist$ | async; let i=index\">\n                        <th scope=\"row\" class=\"text-center\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectChkBox($event, bannerInfo.bannerId)\" id={{bannerInfo.bannerId}} [checked]=\"checkCondition[bannerInfo.bannerId]\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"checkmodules[bannerInfo.bannerId]\">\n                                    <label class=\"custom-control-label\" for={{bannerInfo.bannerId}}></label>\n                                </div>\n                            </div>\n                        </th>\n                        <td> {{bannerInfo.title}}</td>\n                        <td>\n                            <img *ngIf=\"bannerInfo.image\" [src]=\"imageUrl + '?path=' + bannerInfo.imagePath + '&name=' + bannerInfo.image + '&width=60&height=60'\" onError=\"this.src='/assets/error-images/Load icon Products.png';\" (load)=\"BannerListImageLoading(bannerInfo.bannerId)\"\n                                [hidden]=\"!bannerListImage[bannerInfo.bannerId]\">\n                            <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"bannerListImage[bannerInfo.bannerId]\">\n                        </td>\n                        <td>{{bannerInfo.link}}\n                        </td>\n                        <td>{{bannerInfo.position}}</td>\n                        <!--<td>{{bannerInfo.position}}</td>-->\n                        <td>\n                            <a (click)=\"editBanner(bannerInfo)\" href=\"javascript:void(0)\"> <img src=\"assets/img/edit-ico.png\"> </a>\n\n                            <i style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent\" placement=\"left\" #deletePop=\"ngbPopover\" class=\"fas fa-trash\"></i>\n                            <ng-template #deleteContent>\n                                <div class=\"style\">\n                                    <div class=\"modal-header\">\n                                        <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n                                    </div>\n\n                                    <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                                    </button>\n                                        <button type=\"button\" class=\"btn btn-success\" (click)=\"deleteBanner(bannerInfo.bannerId, deletePop)\" data-dismiss=\"modal\">\n                                        Yes\n                                    </button>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"no_data\" *ngIf=\"(sandbox.getbannerlist$ |async)?.length==0\">\n                <p>Items not found</p>\n            </div>\n            <div class=\"flex table-footer\">\n                <div class=\"view-rec\">\n                </div>\n                <!--mat pagination-->\n                <mat-paginator [length]=\"sandbox.getbannerpagelength$ | async\" [pageSize]=\"pageSize\" [pageIndex]=\"index\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\n                </mat-paginator>\n                <!-- pagination end here-->\n            </div>\n        </div>\n    </div>\n    <!--Table-->\n\n</div>\n<ng-template #deleteContent1>\n    <div class=\"style\">\n        <div class=\"modal-header\">\n            <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n        </div>\n\n        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                </button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"bulkDelete()\" data-dismiss=\"modal\">\n                    Yes\n                </button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/theme/default/admin/demo/components/banner/list/list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/banner/list/list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #f2086d !important;\n  border: #f2086d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vZGVtby9jb21wb25lbnRzL2Jhbm5lci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9kZW1vL2NvbXBvbmVudHMvYmFubmVyL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9kZW1vL2NvbXBvbmVudHMvYmFubmVyL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjA4NmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjZjIwODZkICFpbXBvcnRhbnQ7XG59IiwiLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyMDg2ZCAhaW1wb3J0YW50O1xuICBib3JkZXI6ICNmMjA4NmQgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/theme/default/admin/demo/components/banner/list/list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/banner/list/list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListComponent", function() { return BannerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_demo_banners_banner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/demo/banners/banner.service */ "./src/core/admin/demo/banners/banner.service.ts");
/* harmony import */ var _core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/demo/banners/banner.sandbox */ "./src/core/admin/demo/banners/banner.sandbox.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Store Module




var BannerListComponent = /** @class */ (function () {
    function BannerListComponent(sandbox, service, toastr, router, configService) {
        this.sandbox = sandbox;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.configService = configService;
        this.pageSize = '10';
        this.keyword = '';
        this.checkCondition = [];
        this.checkmodules = [];
        this.checkedData = [];
        this.unCheckData = [];
        this.bannerListImage = {};
    }
    BannerListComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // initially calls regSubscriptionEvents,bannerList
    BannerListComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.imageUrl = this.configService.getImageUrl();
        this.pagenationCount = true;
        this.regSubscriptionEvents();
        this.index = 0;
        this.bannerList(this.offset, this.keyword);
    };
    // this function navigate  to  create page banner
    BannerListComponent.prototype.AddBanner = function () {
        this.service.setBannerListData('');
        this.router.navigate(['/demo/banners/add']);
    };
    /**
     * Handles form 'submit' event. Calls sandbox getBannerList . function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    BannerListComponent.prototype.bannerList = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.offset = offset;
        params.limit = this.pageSize;
        params.keyword = this.keyword;
        this.sandbox.getBannerList(params);
        if (this.pagenationCount) {
            params.count = 'true';
            this.sandbox.getBannerPagination(params);
        }
        this.bannerListCount(0, keyword);
    };
    // to get total count
    BannerListComponent.prototype.bannerListCount = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.offset = offset;
        params.limit = this.pageSize;
        params.keyword = this.keyword;
        params.count = 1;
        // params.status = 1;
        this.sandbox.getBannerListCount(params);
    };
    // mat pagination function
    BannerListComponent.prototype.onPageChange = function (event) {
        this.currentPage = event.offset;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        var offset = event.pageSize * event.pageIndex;
        this.bannerList(offset, this.pageSize);
    };
    //  edit
    BannerListComponent.prototype.editBanner = function (bannerData) {
        this.service.setBannerListData(bannerData);
        this.router.navigate(['/demo/banners/edit', bannerData.bannerId]);
    };
    //  function deleteBanner to delete particular id in banner list
    BannerListComponent.prototype.deleteBanner = function (bannerId, deletePop) {
        this.popoverContent = deletePop;
        event.stopPropagation();
        this.sandbox.deletebanner({ bannerId: bannerId });
    };
    // popup  regSubscriptionEvents
    BannerListComponent.prototype.regSubscriptionEvents = function () {
        var _this = this;
        this.sandbox.getdeletebanner$.subscribe(function (_delete) {
            if (_delete && _delete.status && _delete.status === 1) {
                _this.bannerList(_this.offset, _this.keyword);
            }
        });
    };
    // bulkDelete
    BannerListComponent.prototype.bulkDelete = function () {
        var _this = this;
        this.unCheckData = [];
        var param = {};
        param.bannerId = this.checkedData;
        this.sandbox.bulkDelete(param);
        this.checkedData = [];
        this.sandbox.getdeletebanner$.subscribe(function (_delete) {
            if (_delete) {
                if (_delete.status === 1) {
                    _this.checkedData = [];
                    _this.bannerList(_this.offset, _this.keyword);
                }
            }
        });
    };
    BannerListComponent.prototype.selectChkBox = function (event, pageId) {
        var _this = this;
        if (event.target.checked === true) {
            this.checkedData.push(pageId);
        }
        if (event.target.checked === false) {
            this.unCheckData.push(pageId);
            this.unCheckData.forEach(function (value, index) {
                _this.checkedData = _this.checkedData.filter(function (_value) {
                    if (value === _value) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            });
        }
        this.unCheckData = [];
    };
    // bulkDeleteEmpty
    BannerListComponent.prototype.bulkDeleteEmpty = function () {
        this.showNotificationError('Choose atleast one Banner');
    };
    /**
     * Shows error notification with given title and message
     *
     * @params message
     */
    BannerListComponent.prototype.showNotificationError = function (message) {
        this.toastr.errorToastr(message);
    };
    // BannerList Image Loader
    BannerListComponent.prototype.BannerListImageLoading = function (id) {
        this.bannerListImage[id] = true;
    };
    BannerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-cms-banner-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/demo/components/banner/list/list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n\n      .dark-modal .close {\n        color: white;\n      }\n\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n\n      .image-manager .modal-dialog {\n        max-width: 70%;\n      }\n    ", __webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/demo/components/banner/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_4__["BannerSandbox"],
            _core_admin_demo_banners_banner_service__WEBPACK_IMPORTED_MODULE_3__["BannerService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], BannerListComponent);
    return BannerListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row products-section\">\n    <div class=\"col-12 layout-mar\">\n        <div class=\"card\">\n            <div class=\"product-ts-left\">\n                <ul>\n                    <li>\n                        <p>Total Banners</p>\n                        <h3>{{(sandbox.getbannerListCount$ | async)?.data}}\n\n                        </h3>\n                    </li>\n                    <li>\n                        <p>Active Banners</p>\n                        <h3>{{(sandbox.getbannerListActive$ | async)?.data}}\n                        </h3>\n                    </li>\n                    <li>\n                        <p>In-Active Banners</p>\n                        <h3>{{(sandbox.getbannerListInActive$ | async)?.data}}\n\n                        </h3>\n                    </li>\n                </ul>\n            </div>\n            <!--Left-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9kZW1vL2NvbXBvbmVudHMvc2hhcmVkL2Jhbm5lci1sYXlvdXQvYmFubmVyLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BannerLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerLayoutComponent", function() { return BannerLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/admin/demo/banners/banner.sandbox */ "./src/core/admin/demo/banners/banner.sandbox.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var BannerLayoutComponent = /** @class */ (function () {
    function BannerLayoutComponent(sandbox) {
        this.sandbox = sandbox;
    }
    BannerLayoutComponent.prototype.ngOnInit = function () {
        this.getBannerLists();
    };
    // to get total count
    BannerLayoutComponent.prototype.getBannerLists = function () {
        this.sandbox.getBannerListCount({ count: 1 });
        this.sandbox.getBannerListActive({ count: 1, status: 1 });
        this.sandbox.getBannerListInActive({ count: 1, status: 0 });
    };
    BannerLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-layout',
            template: __webpack_require__(/*! ./banner-layout.component.html */ "./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./banner-layout.component.scss */ "./src/theme/default/admin/demo/components/shared/banner-layout/banner-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_demo_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_2__["BannerSandbox"]])
    ], BannerLayoutComponent);
    return BannerLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-banner-banner-module.js.map