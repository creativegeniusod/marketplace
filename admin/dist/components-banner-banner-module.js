(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-banner-banner-module"],{

/***/ "./src/core/admin/adv/banners/banner-effect/banner.effect.ts":
/*!*******************************************************************!*\
  !*** ./src/core/admin/adv/banners/banner-effect/banner.effect.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _banner_action_banner_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../banner-action/banner.action */ "./src/core/admin/adv/banners/banner-action/banner.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../banner.service */ "./src/core/admin/adv/banners/banner.service.ts");
/* harmony import */ var _banner_model_bannercount_response_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../banner-model/bannercount.response.model */ "./src/core/admin/adv/banners/banner-model/bannercount.response.model.ts");
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

/***/ "./src/core/admin/adv/banners/banner-model/bannercount.model.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/adv/banners/banner-model/bannercount.model.ts ***!
  \**********************************************************************/
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

/***/ "./src/core/admin/adv/banners/banner-model/bannercount.response.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/core/admin/adv/banners/banner-model/bannercount.response.model.ts ***!
  \*******************************************************************************/
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

/***/ "./src/core/admin/adv/banners/banner-model/bannerdelete.model.ts":
/*!***********************************************************************!*\
  !*** ./src/core/admin/adv/banners/banner-model/bannerdelete.model.ts ***!
  \***********************************************************************/
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

/***/ "./src/core/admin/adv/banners/banner-model/bannerlist.model.ts":
/*!*********************************************************************!*\
  !*** ./src/core/admin/adv/banners/banner-model/bannerlist.model.ts ***!
  \*********************************************************************/
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

/***/ "./src/core/admin/adv/banners/banner-reducer/banner.selector.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/adv/banners/banner-reducer/banner.selector.ts ***!
  \**********************************************************************/
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
/* harmony import */ var _banner_reducer_banner_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner-reducer/banner.reducer */ "./src/core/admin/adv/banners/banner-reducer/banner.reducer.ts");
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

/***/ "./src/core/admin/adv/banners/banner.sandbox.ts":
/*!******************************************************!*\
  !*** ./src/core/admin/adv/banners/banner.sandbox.ts ***!
  \******************************************************/
/*! exports provided: BannerSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSandbox", function() { return BannerSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _banners_banner_action_banner_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../banners/banner-action/banner.action */ "./src/core/admin/adv/banners/banner-action/banner.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banner_reducer_banner_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner-reducer/banner.selector */ "./src/core/admin/adv/banners/banner-reducer/banner.selector.ts");
/* harmony import */ var _banner_model_bannerlist_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner-model/bannerlist.model */ "./src/core/admin/adv/banners/banner-model/bannerlist.model.ts");
/* harmony import */ var _banner_model_bannerdelete_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-model/bannerdelete.model */ "./src/core/admin/adv/banners/banner-model/bannerdelete.model.ts");
/* harmony import */ var _banner_model_bannercount_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner-model/bannercount.model */ "./src/core/admin/adv/banners/banner-model/bannercount.model.ts");

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
                    _this.router.navigate(['/adv/banners/list']);
                }
            }
        }));
        this.subscriptions.push(this.getUpdatebanner$.subscribe(function (data) {
            if (data && data.status === 1) {
                if (data.message) {
                    _this.router.navigate(['/adv/banners/list']);
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

/***/ "./src/core/admin/adv/banners/banner.service.ts":
/*!******************************************************!*\
  !*** ./src/core/admin/adv/banners/banner.service.ts ***!
  \******************************************************/
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

/***/ "./src/theme/default/admin/adv/components/banner/add/add.component.html":
/*!******************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/banner/add/add.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-layout></app-banner-layout>\r\n<div class=\"row products-section\">\r\n    <div class=\"col-12\">\r\n        <div class=\"breadcrumbs-row noborder\">\r\n            <div class=\"bc-col\">\r\n                <ul>\r\n                    <li><a href=\"javascript:void(0)\"> ADV </a></li>\r\n                    <li><a href=\"javascript:void(0)\" [routerLink]=\"['/adv/banners']\"> Banners </a></li>\r\n                    <li>Add Banners</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"bc-col-btn ap-col-btn\">\r\n                <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-save\"><img\r\n                        src=\"assets/img/tick-round-white.png\">Save\r\n                </button>\r\n                <button (click)=\"bannerCancel()\" class=\"btn btn-cancel\"><img\r\n                        src=\"assets/img/close-white-ico.png\">Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Breadcrumbs-->\r\n</div>\r\n\r\n<div class=\"flex addproduct-wrap addgroup-wrap\">\r\n\r\n    <div class=\"card ap-general\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"bannerForm\">\r\n            <div class=\"ap-header\">\r\n                General Information\r\n            </div>\r\n            <div class=\"flex ap-body cmsap-body\">\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">                       \r\n                        <label>Banner Title<sup>*</sup> </label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bannerTitle\" formControlName=\"bannerTitle\" placeholder=\"Banner Title\" [ngClass]=\"{ 'is-invalid': submitted && f.bannerTitle.errors }\">\r\n                        <div *ngIf=\"submitted && f.bannerTitle.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.bannerTitle.errors.required\">Banner Title is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--Col-->\r\n                <div class=\"ap-body-col width100\">\r\n                    <div class=\"form-group\">\r\n                        <label>Banner Content</label>\r\n                        <ckeditor formControlName=\"bannerContent\" [ngClass]=\"{'Validationcolor':bannerForm.get('bannerContent').hasError('required') && bannerForm.get('bannerContent').touched&&submitted==true}\">\r\n                        </ckeditor>\r\n\r\n                    </div>\r\n                </div>\r\n                <!--Col-->\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Link</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bannerLink\" formControlName=\"bannerLink\" placeholder=\"Enter Link\" [ngClass]=\"{ 'is-invalid': submitted && f.bannerLink.errors }\">\r\n                        <div *ngIf=\"submitted && f.bannerLink.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.bannerLink.errors.required\">Link is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--Col-->\r\n                 <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Position</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"position\" formControlName=\"position\" placeholder=\"Enter Position \" [ngClass]=\"{ 'is-invalid': submitted && f.position.errors }\">\r\n                        <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.position.errors.required\">Position is required\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Categories<sup>*</sup></label>\r\n                        <select class=\"custom-select col-12\" id=\"categoryComponent\" formControlName=\"category\" (change)=\"onSelectcategory($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\r\n                            <option value=''>- -Select- -</option>\r\n                            <option selected *ngFor=\"let arr of categoriessandbox.getCategoriesList$ | async\"\r\n                            value={{arr.categoryId}}>{{arr.name}}\r\n                            </option>\r\n                        </select>\r\n                        <!-- <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.position.errors.required\">Position is required\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Sub Categories</label>\r\n                        <select class=\"custom-select col-12\" id=\"subcategoryComponent\" formControlName=\"subcategory\" [ngClass]=\"{ 'is-invalid': submitted && f.subcategory.errors }\">\r\n                            <option value=''>- -Select- -</option>\r\n                            <option selected *ngFor=\"let arr of categoriessandbox.getSubCategoriesList$ | async\"\r\n                            value={{arr.categoryId}}>{{arr.name}}\r\n                            </option>\r\n                        </select>\r\n                        <!-- <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.position.errors.required\">Position is required\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Active<sup>*</sup></label>\r\n                        <select class=\"custom-select col-12\" formControlName=\"active\" id=\"inlineFormCustomSelect\" [ngClass]=\"{ 'is-invalid': submitted && f.active.errors }\">\r\n                            <option value=\"\">- -Select Active- -</option>\r\n                            <option value=\"1\">Yes</option>\r\n                            <option value=\"0\">No</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && f.active.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.active.errors.required\">Status is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Show on home page<sup>*</sup></label>\r\n                        <select class=\"custom-select col-12\" formControlName=\"homebanner\" id=\"homebanner\" [ngClass]=\"{ 'is-invalid': submitted && f.homebanner.errors }\">\r\n                            <option value=\"\">- -Select Active- -</option>\r\n                            <option value=\"1\">Yes</option>\r\n                            <option value=\"0\">No</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && f.homebanner.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.homebanner.errors.required\">Status is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--col-->\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"image-col\">\r\n                            <div class=\"img-dflt\">\r\n                                <input type=\"file\" name=\"userImg\" (change)=\"uploadChange($event)\" accept=\"image/*\" #filePath style=\"display: none\">\r\n                                <input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\"/> <!-- Validation Field -->\r\n                                <img [src]=\"postImageUrl\" width=\"13%\" height=\"13%\">\r\n                                <p></p>\r\n                                <button (click)=\"uploadButtonClick()\" type=\"button\">Upload Picture\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div style=\"color:#f62d51\" *ngIf=\"submitted && f.imageInput.errors\">\r\n                            <div *ngIf=\"f.imageInput.errors.required\">Image is required</div>\r\n                        </div>\r\n                    </div>\r\n                 \r\n\r\n                </div>\r\n                <!--col-->\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <!--General-->\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/banner/add/add.component.ts":
/*!****************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/banner/add/add.component.ts ***!
  \****************************************************************************/
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
/* harmony import */ var _core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/banners/banner.sandbox */ "./src/core/admin/adv/banners/banner.sandbox.ts");
/* harmony import */ var _core_admin_adv_banners_banner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/banners/banner.service */ "./src/core/admin/adv/banners/banner.service.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.service */ "./src/core/admin/catalog/category/categories.service.ts");

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
    function BannerAddComponent(modalService, modalService2, router, fb, route, changeDetectRef, categoriessandbox, categoryservice, configService, sandbox, service) {
        this.modalService = modalService;
        this.modalService2 = modalService2;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.changeDetectRef = changeDetectRef;
        this.categoriessandbox = categoriessandbox;
        this.categoryservice = categoryservice;
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
        this.getCategoryList();
        // alert("df")
        this.imageUrl = this.configService.getImageUrl();
        this.postImageUrl = './assets/upload-banner/upload.png';
        this.initForm();
        this.editBannerData();
        // alert(this.route.snapshot.paramMap.get('id'));
        this.editBannerId = this.route.snapshot.paramMap.get('id');
    };
    BannerAddComponent.prototype.getCategoryList = function () {
        // alert("hello");
        var param = {};
        param.limit = '';
        param.offset = '';
        param.keyword = undefined;
        param.sortOrder = '';
        param.adv = '1';
        param.parentInt = 0;
        param.status = 1;
        console.log(param, "make params");
        this.categoriessandbox.categorylist(param);
        /*this.categoriessandbox.getCategoriesList$.subscribe( data => {
          if(data != undefined){
            console.log(data,"data");
          }
        });   */
    };
    BannerAddComponent.prototype.getSubCategoryList = function (deviceValue) {
        // console.log(deviceValue,"*********&&&&&&&&********")
        // getSubCategorylist
        var param = {};
        param.limit = '';
        param.offset = '';
        param.keyword = undefined;
        param.sortOrder = '';
        param.parentInt = deviceValue;
        param.status = 1;
        console.log(param, "make params SubCategoryList");
        this.categoriessandbox.subcategorylist(param);
        /*this.categoriessandbox.getSubCategoriesList$.subscribe( data => {
          if(data){
            console.log(data,"data");
          }
        }); */
    };
    BannerAddComponent.prototype.onSelectcategory = function (deviceValue) {
        this.getSubCategoryList(deviceValue);
        // getSubCategoriesList  
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
        this.router.navigate(['/adv/banners/list']);
    };
    // Form  Initialization
    BannerAddComponent.prototype.initForm = function () {
        this.bannerForm = this.fb.group({
            bannerTitle: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bannerContent: [''],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            subcategory: [''],
            active: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            homebanner: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
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
            // console.log(this.bannerForm.value.subcategory,"**********")
            var subCateval = ((this.bannerForm.value.subcategory == null || this.bannerForm.value.subcategory == "") ? 0 : this.bannerForm.value.subcategory);
            var params = {};
            params.title = this.bannerForm.value.bannerTitle;
            params.category = parseInt(this.bannerForm.value.category);
            params.subcategory = parseInt(subCateval);
            params.homebanner = parseInt(this.bannerForm.value.homebanner);
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
                // console.log(this.serviceData,this.bannerInfo[0].categoryChildId,"*******");
                this.bannerForm.controls['imageInput'].setValue(this.serviceData.image); // <-- Set Value for Validation
                this.bannerLink = this.bannerInfo[0].link;
                this.position = this.bannerInfo[0].position;
                this.bannerForm.controls['active'].setValue(this.serviceData.active);
                this.bannerForm.controls['category'].setValue(this.serviceData.categoryId);
                console.log("**&&&&&&&&&***", this.serviceData, "**&&&&&&&&&**");
                this.bannerForm.controls['homebanner'].setValue(this.serviceData.homebanner);
                if (this.serviceData.categoryId) {
                    this.getSubCategoryList(this.serviceData.categoryId);
                    this.bannerForm.controls['subcategory'].setValue(this.serviceData.categoryChildId);
                }
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
            selector: 'app-adv-banner-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/adv/components/banner/add/add.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n\n      .dark-modal .close {\n        color: white;\n      }\n\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n\n      .image-manager .modal-dialog {\n        max-width: 70%;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_8__["CategoriesSandbox"],
            _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
            _core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_5__["BannerSandbox"],
            _core_admin_adv_banners_banner_service__WEBPACK_IMPORTED_MODULE_6__["BannerService"]])
    ], BannerAddComponent);
    return BannerAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/adv/components/banner/banner.module.ts":
/*!************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/banner/banner.module.ts ***!
  \************************************************************************/
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
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/adv/components/banner/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/adv/components/banner/list/list.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/admin/adv/banners/banner.sandbox */ "./src/core/admin/adv/banners/banner.sandbox.ts");
/* harmony import */ var _core_admin_adv_banners_banner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/admin/adv/banners/banner.service */ "./src/core/admin/adv/banners/banner.service.ts");
/* harmony import */ var _core_admin_adv_banners_banner_effect_banner_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/admin/adv/banners/banner-effect/banner.effect */ "./src/core/admin/adv/banners/banner-effect/banner.effect.ts");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/category/categories.service */ "./src/core/admin/catalog/category/categories.service.ts");
/* harmony import */ var _banner_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./banner.routing */ "./src/theme/default/admin/adv/components/banner/banner.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_banner_layout_banner_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/banner-layout/banner-layout.component */ "./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.ts");

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




// Imported action to Inhance functionality


// Imported action to Inhance functionality
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
                _shared_banner_layout_banner_layout_component__WEBPACK_IMPORTED_MODULE_16__["BannerLayoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _banner_routing__WEBPACK_IMPORTED_MODULE_13__["BannerRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_core_admin_adv_banners_banner_effect_banner_effect__WEBPACK_IMPORTED_MODULE_10__["BannerEffect"]]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"]
            ],
            providers: [_core_admin_adv_banners_banner_service__WEBPACK_IMPORTED_MODULE_9__["BannerService"], _core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_8__["BannerSandbox"], _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_12__["CategoriesService"], _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_11__["CategoriesSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], BannerModule);
    return BannerModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/adv/components/banner/banner.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/banner/banner.routing.ts ***!
  \*************************************************************************/
/*! exports provided: BannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerRoutingModule", function() { return BannerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/adv/components/banner/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/adv/components/banner/list/list.component.ts");

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

/***/ "./src/theme/default/admin/adv/components/banner/list/list.component.html":
/*!********************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/banner/list/list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-layout></app-banner-layout>\r\n<div class=\"row products-section products-sub-section\">\r\n    <div class=\"col-12\">\r\n        <div class=\"breadcrumbs-row\">\r\n            <div class=\"bc-col\">\r\n                <ul>\r\n                    <li><a href=\"javascript:void(0)\"> ADV </a></li>\r\n                    <li>Banners</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"bc-col-btn\">\r\n                <button class=\"btn cms-btn\" (click)=\"AddBanner()\"><img\r\n                        src=\"assets/img/add-white-ico.png\">Add Banner\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Breadcrumbs-->\r\n    <div class=\"col-12\">\r\n        <div class=\"flex filter-row\">\r\n            <div class=\"filter-lft\">\r\n            </div>\r\n            <!--Lft-->\r\n            <div class=\"filter-nav-list\">\r\n                <ul class=\"flex\">\r\n                    <li *ngIf=\"checkedData.length==0\" style=\"margin-left: 15px;\">\r\n                        <a (click)=\"bulkDeleteEmpty()\"><img src=\"assets/img/delete-ico-pink.png\"> Delete\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"checkedData.length>0\" style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent1\" placement=\"left\" #deletePop=\"ngbPopover\">\r\n                        <a><img src=\"assets/img/delete-ico-pink.png\"> Delete\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!--Right-->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"flex product-wrap\">\r\n    <!--Filter-->\r\n    <div class=\"product-table\" style=\"width: 100%\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\" width=\"5%\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <th scope=\"col\">Title</th>\r\n                        <th scope=\"col\">Image</th>\r\n                        <th scope=\"col\">Link</th>\r\n                        <th scope=\"col\">Position</th>\r\n                        <th scope=\"col\" width=\"100\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let bannerInfo of sandbox.getbannerlist$ | async; let i=index\">\r\n                        <th scope=\"row\" class=\"text-center\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectChkBox($event, bannerInfo.bannerId)\" id={{bannerInfo.bannerId}} [checked]=\"checkCondition[bannerInfo.bannerId]\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"checkmodules[bannerInfo.bannerId]\">\r\n                                    <label class=\"custom-control-label\" for={{bannerInfo.bannerId}}></label>\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <td> {{bannerInfo.title}}</td>\r\n                        <td>\r\n                            <img *ngIf=\"bannerInfo.image\" [src]=\"imageUrl + '?path=' + bannerInfo.imagePath + '&name=' + bannerInfo.image + '&width=60&height=60'\" onError=\"this.src='/assets/error-images/Load icon Products.png';\" (load)=\"BannerListImageLoading(bannerInfo.bannerId)\"\r\n                                [hidden]=\"!bannerListImage[bannerInfo.bannerId]\">\r\n                            <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"bannerListImage[bannerInfo.bannerId]\">\r\n                        </td>\r\n                        <td>{{bannerInfo.link}}\r\n                        </td>\r\n                        <td>{{bannerInfo.position}}</td>                        \r\n                        <!--<td>{{bannerInfo.position}}</td>-->\r\n                        <td>\r\n                            <!-- {{bannerInfo | json }} -->\r\n                            <a (click)=\"editBanner(bannerInfo)\" href=\"javascript:void(0)\"> <img src=\"assets/img/edit-ico.png\"> </a>\r\n\r\n                            <i style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent\" placement=\"left\" #deletePop=\"ngbPopover\" class=\"fas fa-trash\"></i>\r\n                            <ng-template #deleteContent>\r\n                                <div class=\"style\">\r\n                                    <div class=\"modal-header\">\r\n                                        <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"modal-footer\" style=\"margin-right: 23%;\">\r\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\r\n                                    </button>\r\n                                        <button type=\"button\" class=\"btn btn-success\" (click)=\"deleteBanner(bannerInfo.bannerId, deletePop)\" data-dismiss=\"modal\">\r\n                                        Yes\r\n                                    </button>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"no_data\" *ngIf=\"(sandbox.getbannerlist$ |async)?.length==0\">\r\n                <p>Items not found</p>\r\n            </div>\r\n            <div class=\"flex table-footer\">\r\n                <div class=\"view-rec\">\r\n                </div>\r\n                <!--mat pagination-->\r\n                <mat-paginator [length]=\"sandbox.getbannerpagelength$ | async\" [pageSize]=\"pageSize\" [pageIndex]=\"index\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\r\n                </mat-paginator>\r\n                <!-- pagination end here-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Table-->\r\n\r\n</div>\r\n<ng-template #deleteContent1>\r\n    <div class=\"style\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\r\n                </button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"bulkDelete()\" data-dismiss=\"modal\">\r\n                    Yes\r\n                </button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/banner/list/list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/banner/list/list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #f2086d !important;\n  border: #f2086d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2Fkdi9jb21wb25lbnRzL2Jhbm5lci9saXN0L0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxhZG1pbi9zcmNcXHRoZW1lXFxkZWZhdWx0XFxhZG1pblxcYWR2XFxjb21wb25lbnRzXFxiYW5uZXJcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9hZHYvY29tcG9uZW50cy9iYW5uZXIvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2Fkdi9jb21wb25lbnRzL2Jhbm5lci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjA4NmQgIWltcG9ydGFudDtcclxuICBib3JkZXI6ICNmMjA4NmQgIWltcG9ydGFudDtcclxufSIsIi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjA4NmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjZjIwODZkICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/banner/list/list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/banner/list/list.component.ts ***!
  \******************************************************************************/
/*! exports provided: BannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListComponent", function() { return BannerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_adv_banners_banner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/banners/banner.service */ "./src/core/admin/adv/banners/banner.service.ts");
/* harmony import */ var _core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/banners/banner.sandbox */ "./src/core/admin/adv/banners/banner.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");

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
    function BannerListComponent(sandbox, categoriessandbox, service, toastr, router, configService) {
        this.sandbox = sandbox;
        this.categoriessandbox = categoriessandbox;
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
        // this.getCategoryList();  commented for the time
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.imageUrl = this.configService.getImageUrl();
        this.pagenationCount = true;
        this.regSubscriptionEvents();
        this.index = 0;
        this.bannerList(this.offset, this.keyword);
    };
    // calling category list api with pagination
    BannerListComponent.prototype.getCategoryList = function () {
        var param = {};
        param.limit = '';
        param.offset = '';
        param.keyword = undefined;
        param.sortOrder = '';
        param.status = 1;
        this.categoriessandbox.categorylist(param);
    };
    // this function navigate  to  create page banner
    BannerListComponent.prototype.AddBanner = function () {
        this.service.setBannerListData('');
        this.router.navigate(['/adv/banners/add']);
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
        console.log("Get banne action");
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
        // alert("ADV component");
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
        this.router.navigate(['/adv/banners/edit', bannerData.bannerId]);
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
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/adv/components/banner/list/list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n\n      .dark-modal .close {\n        color: white;\n      }\n\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n\n      .image-manager .modal-dialog {\n        max-width: 70%;\n      }\n    ", __webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/adv/components/banner/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_4__["BannerSandbox"],
            _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_5__["CategoriesSandbox"],
            _core_admin_adv_banners_banner_service__WEBPACK_IMPORTED_MODULE_3__["BannerService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], BannerListComponent);
    return BannerListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row products-section\">\r\n    <div class=\"col-12 layout-mar\">\r\n        <div class=\"card\">\r\n            <div class=\"product-ts-left\">\r\n                <ul>\r\n                    <li>\r\n                        <p>Total Banners</p>\r\n                        <h3>{{(sandbox.getbannerListCount$ | async)?.data}}\r\n\r\n                        </h3>\r\n                    </li>\r\n                    <li>\r\n                        <p>Active Banners</p>\r\n                        <h3>{{(sandbox.getbannerListActive$ | async)?.data}}\r\n                        </h3>\r\n                    </li>\r\n                    <li>\r\n                        <p>In-Active Banners</p>\r\n                        <h3>{{(sandbox.getbannerListInActive$ | async)?.data}}\r\n\r\n                        </h3>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!--Left-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9hZHYvY29tcG9uZW50cy9zaGFyZWQvYmFubmVyLWxheW91dC9iYW5uZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BannerLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerLayoutComponent", function() { return BannerLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/banners/banner.sandbox */ "./src/core/admin/adv/banners/banner.sandbox.ts");

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
            template: __webpack_require__(/*! ./banner-layout.component.html */ "./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./banner-layout.component.scss */ "./src/theme/default/admin/adv/components/shared/banner-layout/banner-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_adv_banners_banner_sandbox__WEBPACK_IMPORTED_MODULE_2__["BannerSandbox"]])
    ], BannerLayoutComponent);
    return BannerLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-banner-banner-module.js.map