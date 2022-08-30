(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-coupen-coupen-module"],{

/***/ "./src/core/admin/adv/coupens/coupen-effect/coupen.effect.ts":
/*!*******************************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen-effect/coupen.effect.ts ***!
  \*******************************************************************/
/*! exports provided: CoupenEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenEffect", function() { return CoupenEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../coupen-action/coupen.action */ "./src/core/admin/adv/coupens/coupen-action/coupen.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _coupen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../coupen.service */ "./src/core/admin/adv/coupens/coupen.service.ts");
/* harmony import */ var _coupen_model_coupencount_response_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../coupen-model/coupencount.response.model */ "./src/core/admin/adv/coupens/coupen-model/coupencount.response.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */










var CoupenEffect = /** @class */ (function () {
    function CoupenEffect(action$, service, appState) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        this.appState = appState;
        // Coupen List
        this.doCoupenLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_COUPEN_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.coupenList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListFailAction"](error)); }));
        }));
        // Coupen Count List
        this.doCoupenCountLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_COUPEN_LIST_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.coupenList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListCountSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListCountFailAction"](error)); }));
        }));
        // Coupen Active List
        this.doCoupenActiveLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_COUPEN_LIST_ACTIVE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.coupenList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListActiveSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListActiveFailAction"](error)); }));
        }));
        // Coupen In-Active List
        this.doCoupenInActiveLists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_COUPEN_LIST_IN_ACTIVE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.coupenList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [
                new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListInActiveSuccessAction"](user)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListInActiveFailAction"](error));
            }));
        }));
        // Coupen LIST PAGINATION
        this.doCoupenPagination$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_COUPEN_PAGINATION_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.coupenPagiantion(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [
                new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenPaginationSuccessAction"](new _coupen_model_coupencount_response_model__WEBPACK_IMPORTED_MODULE_8__["CoupencountResponseModel"](user))
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenPaginationFailAction"](error)); }));
        }));
        // ADD COUPEN
        this.doAddCoupen$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_ADD_COUPEN_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            console.log('do coupen effect', state);
            return _this.service.addCoupen(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (salesPayments) { return [
                new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenAddSuccessAction"](salesPayments)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenAddFailAction"](error)); }));
        }));
        // Update
        this.doUpdateCoupen$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_UPDATE_COUPEN_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var Id = state.coupenId;
            if (state.image === '') {
                delete state.image;
            }
            return _this.service.updateCoupen(state, Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListActiveAction"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListInActiveAction"]({ count: 1, status: 0 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenUpdateSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenUpdateFailAction"](error)); }));
        }));
        // // Delete
        this.doDeleteCoupen$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_DELETE_COUPEN_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var coupenId = state.coupenId;
            return _this.service.deleteCoupen(state, coupenId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListActiveAction"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListInActiveAction"]({ count: 1, status: 0 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (update) { return new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenDeleteSuccessAction"](update); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenDeleteFailAction"](error)); }));
        }));
        // Product Bulk Delete
        this.doProductCoupenDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_COUPEN_BULK_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.coupenBulkDelete(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListActiveAction"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenListInActiveAction"]({ count: 1, status: 0 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenBulkDeleteSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_5__["DoCoupenBulkDeleteFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doCoupenLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doCoupenCountLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doCoupenActiveLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doCoupenInActiveLists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doCoupenPagination$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doAddCoupen$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doUpdateCoupen$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doDeleteCoupen$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CoupenEffect.prototype, "doProductCoupenDelete$", void 0);
    CoupenEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _coupen_service__WEBPACK_IMPORTED_MODULE_7__["CoupenService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]])
    ], CoupenEffect);
    return CoupenEffect;
}());



/***/ }),

/***/ "./src/core/admin/adv/coupens/coupen-model/coupencount.model.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen-model/coupencount.model.ts ***!
  \**********************************************************************/
/*! exports provided: CoupencountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupencountModel", function() { return CoupencountModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var CoupencountModel = /** @class */ (function () {
    function CoupencountModel(coupencountForm) {
        this.limit = coupencountForm.limit || 0;
        this.offset = coupencountForm.offset || 0;
        this.keyword = coupencountForm.keyword || '';
        this.count = coupencountForm.count || '';
    }
    return CoupencountModel;
}());



/***/ }),

/***/ "./src/core/admin/adv/coupens/coupen-model/coupencount.response.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen-model/coupencount.response.model.ts ***!
  \*******************************************************************************/
/*! exports provided: CoupencountResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupencountResponseModel", function() { return CoupencountResponseModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var CoupencountResponseModel = /** @class */ (function () {
    function CoupencountResponseModel(coupencount) {
        this.coupencount = {};
        this.coupencount = coupencount || '';
    }
    return CoupencountResponseModel;
}());



/***/ }),

/***/ "./src/core/admin/adv/coupens/coupen-model/coupendelete.model.ts":
/*!***********************************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen-model/coupendelete.model.ts ***!
  \***********************************************************************/
/*! exports provided: CoupendeleteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupendeleteModel", function() { return CoupendeleteModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var CoupendeleteModel = /** @class */ (function () {
    function CoupendeleteModel(deletecoupen) {
        this.coupenId = deletecoupen.coupenId || '';
    }
    return CoupendeleteModel;
}());



/***/ }),

/***/ "./src/core/admin/adv/coupens/coupen-model/coupenlist.model.ts":
/*!*********************************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen-model/coupenlist.model.ts ***!
  \*********************************************************************/
/*! exports provided: CoupenlistModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenlistModel", function() { return CoupenlistModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var CoupenlistModel = /** @class */ (function () {
    function CoupenlistModel(coupenlistForm) {
        this.limit = coupenlistForm.limit || 0;
        this.offset = coupenlistForm.offset || 0;
        if (coupenlistForm.count === 1 && coupenlistForm.status === 1) {
            this.count = coupenlistForm.count || 0;
            this.status = coupenlistForm.status || 0;
        }
        if (coupenlistForm.count === 1 && coupenlistForm.status === 0) {
            this.count = coupenlistForm.count || 0;
            this.status = coupenlistForm.status || 0;
        }
        if (coupenlistForm.count === 1 && !coupenlistForm.status) {
            this.count = coupenlistForm.count || 0;
        }
        this.keyword = coupenlistForm.keyword || '';
    }
    return CoupenlistModel;
}());



/***/ }),

/***/ "./src/core/admin/adv/coupens/coupen-reducer/coupen.selector.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen-reducer/coupen.selector.ts ***!
  \**********************************************************************/
/*! exports provided: getCoupenState, getCoupenlst, getcoupenpagination, getAddCoupens, getaddCoupen, getdeletecoupen, getcoupenaddloaded, getcoupenaddfailed, getcoupenaddloading, getUpdatecoupen, getcoupenupdateloading, getcoupenupdateloaded, getcoupenupdatefailed, getcoupendeleteloading, getcoupendeleteloaded, getcoupendeletefailed, getcoupencountloading, getcoupencountloaded, getcoupencountfailed, getcoupenlistloaded, getcoupenlistfailed, getcoupenlistloading, getcoupenListCount, getcoupenListCountLoaded, getcoupenListCountFailed, getcoupenListCountLoading, getcoupenListActive, getcoupenListActiveLoaded, getcoupenListACtiveFailed, getcoupenListActiveLoading, getcoupenListInActive, getcoupenListInActiveLoaded, getcoupenListInACtiveFailed, getcoupenListInActiveLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoupenState", function() { return getCoupenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoupenlst", function() { return getCoupenlst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenpagination", function() { return getcoupenpagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddCoupens", function() { return getAddCoupens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getaddCoupen", function() { return getaddCoupen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getdeletecoupen", function() { return getdeletecoupen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenaddloaded", function() { return getcoupenaddloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenaddfailed", function() { return getcoupenaddfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenaddloading", function() { return getcoupenaddloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatecoupen", function() { return getUpdatecoupen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenupdateloading", function() { return getcoupenupdateloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenupdateloaded", function() { return getcoupenupdateloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenupdatefailed", function() { return getcoupenupdatefailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupendeleteloading", function() { return getcoupendeleteloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupendeleteloaded", function() { return getcoupendeleteloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupendeletefailed", function() { return getcoupendeletefailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupencountloading", function() { return getcoupencountloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupencountloaded", function() { return getcoupencountloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupencountfailed", function() { return getcoupencountfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenlistloaded", function() { return getcoupenlistloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenlistfailed", function() { return getcoupenlistfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenlistloading", function() { return getcoupenlistloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListCount", function() { return getcoupenListCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListCountLoaded", function() { return getcoupenListCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListCountFailed", function() { return getcoupenListCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListCountLoading", function() { return getcoupenListCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListActive", function() { return getcoupenListActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListActiveLoaded", function() { return getcoupenListActiveLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListACtiveFailed", function() { return getcoupenListACtiveFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListActiveLoading", function() { return getcoupenListActiveLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListInActive", function() { return getcoupenListInActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListInActiveLoaded", function() { return getcoupenListInActiveLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListInACtiveFailed", function() { return getcoupenListInACtiveFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcoupenListInActiveLoading", function() { return getcoupenListInActiveLoading; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coupen-reducer/coupen.reducer */ "./src/core/admin/adv/coupens/coupen-reducer/coupen.reducer.ts");
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
var getCoupenState = function (state) { return state.coupen; };
var getCoupenlst = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getCoupenlist"]);
var getcoupenpagination = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenpagination"]);
var getAddCoupens = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getAddCoupen"]);
var getaddCoupen = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getaddCoupen"]);
var getdeletecoupen = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getdeletecoupen"]);
var getcoupenaddloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenaddloaded"]);
var getcoupenaddfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenaddfailed"]);
var getcoupenaddloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenaddloading"]);
var getUpdatecoupen = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getUpdatecoupen"]);
var getcoupenupdateloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenupdateloading"]);
var getcoupenupdateloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenupdateloaded"]);
var getcoupenupdatefailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenupdatefailed"]);
var getcoupendeleteloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupendeleteloading"]);
var getcoupendeleteloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupendeleteloaded"]);
var getcoupendeletefailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupendeletefailed"]);
var getcoupencountloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupencountloading"]);
var getcoupencountloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupencountloaded"]);
var getcoupencountfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupencountfailed"]);
var getcoupenlistloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenlistloaded"]);
var getcoupenlistfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenlistfailed"]);
var getcoupenlistloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenlistloading"]);
var getcoupenListCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListCount"]);
var getcoupenListCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListCountLoaded"]);
var getcoupenListCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListCountFailed"]);
var getcoupenListCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListCountLoading"]);
var getcoupenListActive = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListActive"]);
var getcoupenListActiveLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListActiveLoaded"]);
var getcoupenListACtiveFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListACtiveFailed"]);
var getcoupenListActiveLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListActiveLoading"]);
var getcoupenListInActive = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListInActive"]);
var getcoupenListInActiveLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListInActiveLoaded"]);
var getcoupenListInACtiveFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListInACtiveFailed"]);
var getcoupenListInActiveLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoupenState, _coupen_reducer_coupen_reducer__WEBPACK_IMPORTED_MODULE_1__["getcoupenListInActiveLoading"]);


/***/ }),

/***/ "./src/core/admin/adv/coupens/coupen.sandbox.ts":
/*!******************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen.sandbox.ts ***!
  \******************************************************/
/*! exports provided: CoupenSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenSandbox", function() { return CoupenSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../coupens/coupen-action/coupen.action */ "./src/core/admin/adv/coupens/coupen-action/coupen.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupen-reducer/coupen.selector */ "./src/core/admin/adv/coupens/coupen-reducer/coupen.selector.ts");
/* harmony import */ var _coupen_model_coupenlist_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coupen-model/coupenlist.model */ "./src/core/admin/adv/coupens/coupen-model/coupenlist.model.ts");
/* harmony import */ var _coupen_model_coupendelete_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coupen-model/coupendelete.model */ "./src/core/admin/adv/coupens/coupen-model/coupendelete.model.ts");
/* harmony import */ var _coupen_model_coupencount_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coupen-model/coupencount.model */ "./src/core/admin/adv/coupens/coupen-model/coupencount.model.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */










var CoupenSandbox = /** @class */ (function () {
    function CoupenSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.getcoupenlist$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getCoupenlst"]);
        this.getcoupenpagelength$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenpagination"]);
        this.getAddNewCoupen$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getAddCoupens"]);
        this.getaddCoupen$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getaddCoupen"]);
        this.getUpdatecoupen$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getUpdatecoupen"]);
        this.getdeletecoupen$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getdeletecoupen"]);
        this.getcoupenaddloaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenaddloaded"]);
        this.getcoupenaddfailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenaddfailed"]);
        this.getcoupenaddloading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenaddloading"]);
        this.getcoupenupdateloading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenupdateloading"]);
        this.getcoupenupdateloaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenupdateloaded"]);
        this.getcoupenupdatefailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenupdatefailed"]);
        this.getcoupendeleteloading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupendeleteloading"]);
        this.getcoupendeleteloaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupendeleteloaded"]);
        this.getcoupendeletefailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupendeletefailed"]);
        this.getcoupencountloading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupencountloading"]);
        this.getcoupencountloaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupencountloaded"]);
        this.getcoupencountfailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupencountfailed"]);
        this.getcoupenlistloaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenlistloaded"]);
        this.getcoupenlistfailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenlistfailed"]);
        this.getcoupenlistloading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenlistloading"]);
        this.getcoupenListCount$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListCount"]);
        this.getcoupenListCountLoaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListCountLoaded"]);
        this.getcoupenListCountFailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListCountFailed"]);
        this.getcoupenListCountLoading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListCountLoading"]);
        this.getcoupenListActive$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListActive"]);
        this.getcoupenListActiveLoaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListActiveLoaded"]);
        this.getcoupenListACtiveFailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListACtiveFailed"]);
        this.getcoupenListActiveLoading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListActiveLoading"]);
        this.getcoupenListInActive$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListInActive"]);
        this.getcoupenListInActiveLoaded$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListInActiveLoaded"]);
        this.getcoupenListInACtiveFailed$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListInACtiveFailed"]);
        this.getcoupenListInActiveLoading$ = this.appState.select(_coupen_reducer_coupen_selector__WEBPACK_IMPORTED_MODULE_6__["getcoupenListInActiveLoading"]);
        this.subscriptions = [];
        this.subscribe();
    }
    CoupenSandbox.prototype.getCoupenList = function (value) {
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenListAction"](new _coupen_model_coupenlist_model__WEBPACK_IMPORTED_MODULE_7__["CoupenlistModel"](value)));
    };
    CoupenSandbox.prototype.getCoupenListCount = function (value) {
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenListCountAction"](new _coupen_model_coupenlist_model__WEBPACK_IMPORTED_MODULE_7__["CoupenlistModel"](value)));
    };
    CoupenSandbox.prototype.getCoupenListActive = function (value) {
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenListActiveAction"](new _coupen_model_coupenlist_model__WEBPACK_IMPORTED_MODULE_7__["CoupenlistModel"](value)));
    };
    CoupenSandbox.prototype.getCoupenListInActive = function (value) {
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenListInActiveAction"](new _coupen_model_coupenlist_model__WEBPACK_IMPORTED_MODULE_7__["CoupenlistModel"](value)));
    };
    CoupenSandbox.prototype.getCoupenPagination = function (value) {
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenPaginationAction"](new _coupen_model_coupencount_model__WEBPACK_IMPORTED_MODULE_9__["CoupencountModel"](value)));
    };
    CoupenSandbox.prototype.addCoupen = function (data) {
        console.log('add coupen sandbox', data);
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenAddAction"](data));
    };
    CoupenSandbox.prototype.UpdateCoupen = function (data) {
        console.log("Trigger Action");
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenUpdateAction"](data));
    };
    CoupenSandbox.prototype.deletecoupen = function (data) {
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenDeleteAction"](new _coupen_model_coupendelete_model__WEBPACK_IMPORTED_MODULE_8__["CoupendeleteModel"](data)));
    };
    // Do coupen Bulk Delete
    CoupenSandbox.prototype.bulkDelete = function (value) {
        this.appState.dispatch(new _coupens_coupen_action_coupen_action__WEBPACK_IMPORTED_MODULE_4__["DoCoupenBulkDelete"](value));
    };
    CoupenSandbox.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.getAddNewCoupen$.subscribe(function (data) {
            if (data && data.status === 1) {
                if (data.message) {
                    _this.router.navigate(['/adv/coupens/list']);
                }
            }
        }));
        this.subscriptions.push(this.getUpdatecoupen$.subscribe(function (data) {
            if (data && data.status === 1) {
                if (data.message) {
                    _this.router.navigate(['/adv/coupens/list']);
                }
            }
        }));
    };
    CoupenSandbox.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    CoupenSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], CoupenSandbox);
    return CoupenSandbox;
}());



/***/ }),

/***/ "./src/core/admin/adv/coupens/coupen.service.ts":
/*!******************************************************!*\
  !*** ./src/core/admin/adv/coupens/coupen.service.ts ***!
  \******************************************************/
/*! exports provided: CoupenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenService", function() { return CoupenService; });
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



var CoupenService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CoupenService, _super);
    function CoupenService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // coupen edit service
    CoupenService.prototype.setCoupenListData = function (data) {
        this.coupenEditdata = data;
    };
    CoupenService.prototype.getcoupenListdata = function () {
        return this.coupenEditdata;
    };
    // list
    CoupenService.prototype.coupenList = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/coupen/coupenList', { params: reqOpts });
    };
    //  Pagination
    CoupenService.prototype.coupenPagiantion = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/coupen/coupenlist', { params: reqOpts });
    };
    // Update
    CoupenService.prototype.updateCoupen = function (param, Id) {
        return this.http.put(this.url + '/coupen/update-coupen/' + Id, param);
    };
    // add
    CoupenService.prototype.addCoupen = function (param) {
        console.log('add coupen', param);
        return this.http.post(this.url + '/coupen/add-coupen', param);
    };
    // delete
    CoupenService.prototype.deleteCoupen = function (param, Id) {
        return this.http.delete(this.url + '/coupen/delete-coupen/' + Id, param);
    };
    /**
     * Handles 'coupenBulkDelete' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from Model
     */
    CoupenService.prototype.coupenBulkDelete = function (param) {
        return this.http.post(this.url + '/coupen/delete-coupen', param);
    };
    CoupenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CoupenService);
    return CoupenService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/adv/components/coupen/add/add.component.html":
/*!******************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/coupen/add/add.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-coupen-layout></app-coupen-layout>\n<div class=\"row products-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row noborder\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\"> ADV </a></li>\n                    <li><a href=\"javascript:void(0)\" [routerLink]=\"['/adv/banners']\"> Banners </a></li>\n                    <li>Add Banners</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn ap-col-btn\">\n                <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-save\"><img\n                        src=\"assets/img/tick-round-white.png\">Save\n                </button>\n                <button (click)=\"bannerCancel()\" class=\"btn btn-cancel\"><img\n                        src=\"assets/img/close-white-ico.png\">Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n</div>\n\n<div class=\"flex addproduct-wrap addgroup-wrap\">\n\n    <div class=\"card ap-general\">\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"bannerForm\">\n            <div class=\"ap-header\">\n                General Information\n            </div>\n            <div class=\"flex ap-body cmsap-body\">\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">                       \n                        <label>Banner Title<sup>*</sup> </label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bannerTitle\" formControlName=\"bannerTitle\" placeholder=\"Banner Title\" [ngClass]=\"{ 'is-invalid': submitted && f.bannerTitle.errors }\">\n                        <div *ngIf=\"submitted && f.bannerTitle.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.bannerTitle.errors.required\">Banner Title is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col width100\">\n                    <div class=\"form-group\">\n                        <label>Banner Content</label>\n                        <ckeditor formControlName=\"bannerContent\" [ngClass]=\"{'Validationcolor':bannerForm.get('bannerContent').hasError('required') && bannerForm.get('bannerContent').touched&&submitted==true}\">\n                        </ckeditor>\n\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Link</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bannerLink\" formControlName=\"bannerLink\" placeholder=\"Enter Link\" [ngClass]=\"{ 'is-invalid': submitted && f.bannerLink.errors }\">\n                        <div *ngIf=\"submitted && f.bannerLink.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.bannerLink.errors.required\">Link is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--Col-->\n                 <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Position</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"position\" formControlName=\"position\" placeholder=\"Enter Position \" [ngClass]=\"{ 'is-invalid': submitted && f.position.errors }\">\n                        <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.position.errors.required\">Position is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Categories<sup>*</sup></label>\n                        <select class=\"custom-select col-12\" id=\"categoryComponent\" formControlName=\"category\" (change)=\"onSelectcategory($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\n                            <option value=''>- -Select- -</option>\n                            <option selected *ngFor=\"let arr of categoriessandbox.getCategoriesList$ | async\"\n                            value={{arr.categoryId}}>{{arr.name}}\n                            </option>\n                        </select>\n                        <!-- <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.position.errors.required\">Position is required\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Sub Categories</label>\n                        <select class=\"custom-select col-12\" id=\"subcategoryComponent\" formControlName=\"subcategory\" [ngClass]=\"{ 'is-invalid': submitted && f.subcategory.errors }\">\n                            <option value=''>- -Select- -</option>\n                            <option selected *ngFor=\"let arr of categoriessandbox.getSubCategoriesList$ | async\"\n                            value={{arr.categoryId}}>{{arr.name}}\n                            </option>\n                        </select>\n                        <!-- <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.position.errors.required\">Position is required\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Active<sup>*</sup></label>\n                        <select class=\"custom-select col-12\" formControlName=\"active\" id=\"inlineFormCustomSelect\" [ngClass]=\"{ 'is-invalid': submitted && f.active.errors }\">\n                            <option value=\"\">- -Select Active- -</option>\n                            <option value=\"1\">Yes</option>\n                            <option value=\"0\">No</option>\n                        </select>\n                        <div *ngIf=\"submitted && f.active.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.active.errors.required\">Status is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Show on home page<sup>*</sup></label>\n                        <select class=\"custom-select col-12\" formControlName=\"homebanner\" id=\"homebanner\" [ngClass]=\"{ 'is-invalid': submitted && f.homebanner.errors }\">\n                            <option value=\"\">- -Select Active- -</option>\n                            <option value=\"1\">Yes</option>\n                            <option value=\"0\">No</option>\n                        </select>\n                        <div *ngIf=\"submitted && f.homebanner.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.homebanner.errors.required\">Status is required</div>\n                        </div>\n                    </div>\n                </div>\n                <!--col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <div class=\"image-col\">\n                            <div class=\"img-dflt\">\n                                <input type=\"file\" name=\"userImg\" (change)=\"uploadChange($event)\" accept=\"image/*\" #filePath style=\"display: none\">\n                                <input type=\"hidden\" name=\"fileHidden\" formControlName=\"imageInput\"/> <!-- Validation Field -->\n                                <img [src]=\"postImageUrl\" width=\"13%\" height=\"13%\">\n                                <p></p>\n                                <button (click)=\"uploadButtonClick()\" type=\"button\">Upload Picture\n                                </button>\n                            </div>\n                        </div>\n                        <div style=\"color:#f62d51\" *ngIf=\"submitted && f.imageInput.errors\">\n                            <div *ngIf=\"f.imageInput.errors.required\">Image is required</div>\n                        </div>\n                    </div>\n                 \n\n                </div>\n                <!--col-->\n            </div>\n        </form>\n    </div>\n    <!--General-->\n\n\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/coupen/add/add.component.ts":
/*!****************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/coupen/add/add.component.ts ***!
  \****************************************************************************/
/*! exports provided: CoupenAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenAddComponent", function() { return CoupenAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/coupens/coupen.sandbox */ "./src/core/admin/adv/coupens/coupen.sandbox.ts");
/* harmony import */ var _core_admin_adv_coupens_coupen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/coupens/coupen.service */ "./src/core/admin/adv/coupens/coupen.service.ts");
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





var CoupenAddComponent = /** @class */ (function () {
    function CoupenAddComponent(modalService, modalService2, router, fb, route, changeDetectRef, categoriessandbox, categoryservice, configService, sandbox, service) {
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
    CoupenAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    CoupenAddComponent.prototype.ngOnInit = function () {
        this.getCategoryList();
        // alert("df")
        this.imageUrl = this.configService.getImageUrl();
        this.postImageUrl = './assets/upload-coupen/upload.png';
        this.initForm();
        this.editCoupenData();
        // alert(this.route.snapshot.paramMap.get('id'));
        this.editCoupenId = this.route.snapshot.paramMap.get('id');
    };
    CoupenAddComponent.prototype.getCategoryList = function () {
        // alert("hello");
        var param = {};
        param.limit = '';
        param.offset = '';
        param.keyword = undefined;
        param.sortOrder = '';
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
    CoupenAddComponent.prototype.getSubCategoryList = function (deviceValue) {
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
    CoupenAddComponent.prototype.onSelectcategory = function (deviceValue) {
        this.getSubCategoryList(deviceValue);
        // getSubCategoriesList  
    };
    CoupenAddComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService
            .open(content, { windowClass: 'image-manager' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CoupenAddComponent.prototype.open = function (content) {
        this.modalService2.open(content, {
            windowClass: 'dark-modal,image-manager'
        });
    };
    CoupenAddComponent.prototype.getDismissReason = function (reason) {
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
    CoupenAddComponent.prototype.coupenCancel = function () {
        this.service.setCoupenListData('');
        this.router.navigate(['/adv/coupens/list']);
    };
    // Form  Initialization
    CoupenAddComponent.prototype.initForm = function () {
        this.coupenForm = this.fb.group({
            coupenTitle: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            coupenContent: [''],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            subcategory: [''],
            active: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            homecoupen: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            coupenLink: [null],
            position: [null],
            imageInput: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox coupen  function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    CoupenAddComponent.prototype.onSubmit = function () {
        console.log('forms', this.coupenForm.value);
        this.submitted = true;
        if (!this.coupenForm.valid) {
            this.validateAllFormFields(this.coupenForm);
            return;
        }
        else {
            // console.log(this.coupenForm.value.subcategory,"**********")
            var subCateval = ((this.coupenForm.value.subcategory == null || this.coupenForm.value.subcategory == "") ? 0 : this.coupenForm.value.subcategory);
            var params = {};
            params.title = this.coupenForm.value.coupenTitle;
            params.category = parseInt(this.coupenForm.value.category);
            params.subcategory = parseInt(subCateval);
            params.homecoupen = parseInt(this.coupenForm.value.homecoupen);
            params.content = this.coupenForm.value.coupenContent;
            params.position = +this.coupenForm.value.position;
            params.link = this.coupenForm.value.coupenLink;
            params.image = this.ImageUrl;
            // tslint:disable-next-line: radix
            var tempActive = parseInt(this.coupenForm.value.active);
            params.status = tempActive;
            if (this.coupenInfo[0] && this.coupenInfo[0].coupenId) {
                params.coupenId = this.coupenInfo[0].coupenId;
                console.log(params, "*****");
                this.sandbox.UpdateCoupen(params);
            }
            else {
                console.log('params', params);
                this.sandbox.addCoupen(params);
            }
        }
    };
    // editCoupen Data
    CoupenAddComponent.prototype.editCoupenData = function () {
        this.coupenInfo = [];
        this.serviceData = this.service.getcoupenListdata();
        if (this.serviceData) {
            this.coupenInfo.push(this.serviceData);
        }
        if (this.coupenInfo && this.coupenInfo[0]) {
            for (var i = 0; i < this.coupenInfo.length; i++) {
                this.coupenTitle = this.coupenInfo[0].title;
                this.coupenForm.controls['coupenContent'].setValue(this.serviceData.content);
                // console.log(this.serviceData,this.coupenInfo[0].categoryChildId,"*******");
                this.coupenForm.controls['imageInput'].setValue(this.serviceData.image); // <-- Set Value for Validation
                this.coupenLink = this.coupenInfo[0].link;
                this.position = this.coupenInfo[0].position;
                this.coupenForm.controls['active'].setValue(this.serviceData.active);
                this.coupenForm.controls['category'].setValue(this.serviceData.categoryId);
                console.log("**&&&&&&&&&***", this.serviceData, "**&&&&&&&&&**");
                this.coupenForm.controls['homecoupen'].setValue(this.serviceData.homecoupen);
                if (this.serviceData.categoryId) {
                    this.getSubCategoryList(this.serviceData.categoryId);
                    this.coupenForm.controls['subcategory'].setValue(this.serviceData.categoryChildId);
                }
                this.postImageUrl =
                    this.imageUrl + '?path=' +
                        ("" + this.coupenInfo[0].imagePath) + '&name=' +
                        ("" + this.coupenInfo[0].image) +
                        '&width=160&height=150';
                this.changeDetectRef.detectChanges();
            }
        }
        else {
            this.coupenInfo = ' ';
        }
    };
    // Upload Image
    CoupenAddComponent.prototype.uploadButtonClick = function () {
        var el = this.filePath.nativeElement;
        el.click();
    };
    CoupenAddComponent.prototype.uploadChange = function ($event) {
        this.submitted = false;
        this.convertBase64($event.target);
    };
    CoupenAddComponent.prototype.convertBase64 = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        this.coupenForm.controls['imageInput'].setValue(file ? file.name : ''); // <-- Set Value for Validation
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.postImageUrl = myReader.result;
            _this.ImageUrl = myReader.result;
            console.log('select image', _this.ImageUrl);
            _this.changeDetectRef.detectChanges();
        };
        myReader.readAsDataURL(file);
    };
    Object.defineProperty(CoupenAddComponent.prototype, "f", {
        //  validation controls  -  function (f) is using in coupen add html
        get: function () {
            return this.coupenForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // show all validation at when invalid form
    CoupenAddComponent.prototype.validateAllFormFields = function (formGroup) {
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
    ], CoupenAddComponent.prototype, "filePath", void 0);
    CoupenAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adv-coupen-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/adv/components/coupen/add/add.component.html"),
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
            _core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_5__["CoupenSandbox"],
            _core_admin_adv_coupens_coupen_service__WEBPACK_IMPORTED_MODULE_6__["CoupenService"]])
    ], CoupenAddComponent);
    return CoupenAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/adv/components/coupen/coupen.module.ts":
/*!************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/coupen/coupen.module.ts ***!
  \************************************************************************/
/*! exports provided: CoupenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenModule", function() { return CoupenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/adv/components/coupen/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/adv/components/coupen/list/list.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/admin/adv/coupens/coupen.sandbox */ "./src/core/admin/adv/coupens/coupen.sandbox.ts");
/* harmony import */ var _core_admin_adv_coupens_coupen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/admin/adv/coupens/coupen.service */ "./src/core/admin/adv/coupens/coupen.service.ts");
/* harmony import */ var _core_admin_adv_coupens_coupen_effect_coupen_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/admin/adv/coupens/coupen-effect/coupen.effect */ "./src/core/admin/adv/coupens/coupen-effect/coupen.effect.ts");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/category/categories.service */ "./src/core/admin/catalog/category/categories.service.ts");
/* harmony import */ var _coupen_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coupen.routing */ "./src/theme/default/admin/adv/components/coupen/coupen.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_coupen_layout_coupen_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/coupen-layout/coupen-layout.component */ "./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.ts");

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



var CoupenModule = /** @class */ (function () {
    function CoupenModule() {
    }
    CoupenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_add_component__WEBPACK_IMPORTED_MODULE_5__["CoupenAddComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["CoupenListComponent"],
                _shared_coupen_layout_coupen_layout_component__WEBPACK_IMPORTED_MODULE_16__["CoupenLayoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _coupen_routing__WEBPACK_IMPORTED_MODULE_13__["CoupenRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_core_admin_adv_coupens_coupen_effect_coupen_effect__WEBPACK_IMPORTED_MODULE_10__["CoupenEffect"]]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"]
            ],
            providers: [_core_admin_adv_coupens_coupen_service__WEBPACK_IMPORTED_MODULE_9__["CoupenService"], _core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_8__["CoupenSandbox"], _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_12__["CategoriesService"], _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_11__["CategoriesSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], CoupenModule);
    return CoupenModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/adv/components/coupen/coupen.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/coupen/coupen.routing.ts ***!
  \*************************************************************************/
/*! exports provided: CoupenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenRoutingModule", function() { return CoupenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/adv/components/coupen/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/adv/components/coupen/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var coupenRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["CoupenListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["CoupenAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["CoupenAddComponent"]
    }
];
/*const coupenRoutes: Routes = [
    { path: '', component: CoupenListComponent }
];*/
// console.log("dddd")
var CoupenRoutingModule = /** @class */ (function () {
    function CoupenRoutingModule() {
    }
    CoupenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(coupenRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoupenRoutingModule);
    return CoupenRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/adv/components/coupen/list/list.component.html":
/*!********************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/coupen/list/list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-coupen-layout></app-coupen-layout>\n<div class=\"row products-section products-sub-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\"> ADV </a></li>\n                    <li>Coupen</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn\">\n                <button class=\"btn cms-btn\" (click)=\"AddCoupen()\"><img\n                        src=\"assets/img/add-white-ico.png\">Add Coupen\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n    <div class=\"col-12\">\n        <div class=\"flex filter-row\">\n            <div class=\"filter-lft\">\n            </div>\n            <!--Lft-->\n            <div class=\"filter-nav-list\">\n                <ul class=\"flex\">\n                    <li *ngIf=\"checkedData.length==0\" style=\"margin-left: 15px;\">\n                        <a (click)=\"bulkDeleteEmpty()\"><img src=\"assets/img/delete-ico-pink.png\"> Delete\n                        </a>\n                    </li>\n                    <li *ngIf=\"checkedData.length>0\" style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent1\" placement=\"left\" #deletePop=\"ngbPopover\">\n                        <a><img src=\"assets/img/delete-ico-pink.png\"> Delete\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <!--Right-->\n        </div>\n    </div>\n</div>\n\n<div class=\"flex product-wrap\">\n    <!--Filter-->\n    <div class=\"product-table\" style=\"width: 100%\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" width=\"5%\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                </div>\n                            </div>\n                        </th>\n                        <th scope=\"col\">Title</th>\n                        <th scope=\"col\">Image</th>\n                        <th scope=\"col\">Link</th>\n                        <th scope=\"col\">Position</th>\n                        <th scope=\"col\" width=\"100\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let coupenInfo of sandbox.getcoupenlist$ | async; let i=index\">\n                        <th scope=\"row\" class=\"text-center\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectChkBox($event, coupenInfo.coupenId)\" id={{coupenInfo.coupenId}} [checked]=\"checkCondition[coupenInfo.coupenId]\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"checkmodules[coupenInfo.coupenId]\">\n                                    <label class=\"custom-control-label\" for={{coupenInfo.coupenId}}></label>\n                                </div>\n                            </div>\n                        </th>\n                        <td> {{coupenInfo.title}}</td>\n                        <td>\n                            <img *ngIf=\"coupenInfo.image\" [src]=\"imageUrl + '?path=' + coupenInfo.imagePath + '&name=' + coupenInfo.image + '&width=60&height=60'\" onError=\"this.src='/assets/error-images/Load icon Products.png';\" (load)=\"coupenListImageLoading(coupenInfo.coupenId)\"\n                                [hidden]=\"!coupenListImage[coupenInfo.coupenId]\">\n                            <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"coupenListImage[coupenInfo.coupenId]\">\n                        </td>\n                        <td>{{coupenInfo.link}}\n                        </td>\n                        <td>{{coupenInfo.position}}</td>                        \n                        <!--<td>{{bannerInfo.position}}</td>-->\n                        <td>\n                            <!-- {{bannerInfo | json }} -->\n                            <a (click)=\"editCoupen(coupenInfo)\" href=\"javascript:void(0)\"> <img src=\"assets/img/edit-ico.png\"> </a>\n\n                            <i style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent\" placement=\"left\" #deletePop=\"ngbPopover\" class=\"fas fa-trash\"></i>\n                            <ng-template #deleteContent>\n                                <div class=\"style\">\n                                    <div class=\"modal-header\">\n                                        <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n                                    </div>\n\n                                    <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                                    </button>\n                                        <button type=\"button\" class=\"btn btn-success\" (click)=\"deleteBanner(coupenInfo.coupenId, deletePop)\" data-dismiss=\"modal\">\n                                        Yes\n                                    </button>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"no_data\" *ngIf=\"(sandbox.getcoupenlist$ |async)?.length==0\">\n                <p>Items not found</p>\n            </div>\n            <div class=\"flex table-footer\">\n                <div class=\"view-rec\">\n                </div>\n                <!--mat pagination-->\n                <mat-paginator [length]=\"sandbox.getcoupenpagelength$ | async\" [pageSize]=\"pageSize\" [pageIndex]=\"index\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\n                </mat-paginator>\n                <!-- pagination end here-->\n            </div>\n        </div>\n    </div>\n    <!--Table-->\n\n</div>\n<ng-template #deleteContent1>\n    <div class=\"style\">\n        <div class=\"modal-header\">\n            <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n        </div>\n\n        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                </button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"bulkDelete()\" data-dismiss=\"modal\">\n                    Yes\n                </button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/coupen/list/list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/coupen/list/list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #f2086d !important;\n  border: #f2086d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2Fkdi9jb21wb25lbnRzL2NvdXBlbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9hZHYvY29tcG9uZW50cy9jb3VwZW4vbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2Fkdi9jb21wb25lbnRzL2NvdXBlbi9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjIwODZkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogI2YyMDg2ZCAhaW1wb3J0YW50O1xufSIsIi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjA4NmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjZjIwODZkICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/coupen/list/list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/coupen/list/list.component.ts ***!
  \******************************************************************************/
/*! exports provided: CoupenListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenListComponent", function() { return CoupenListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_adv_coupens_coupen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/coupens/coupen.service */ "./src/core/admin/adv/coupens/coupen.service.ts");
/* harmony import */ var _core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/coupens/coupen.sandbox */ "./src/core/admin/adv/coupens/coupen.sandbox.ts");
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





var CoupenListComponent = /** @class */ (function () {
    function CoupenListComponent(sandbox, categoriessandbox, service, toastr, router, configService) {
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
        this.coupenListImage = {};
    }
    CoupenListComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // initially calls regSubscriptionEvents,coupenList
    CoupenListComponent.prototype.ngOnInit = function () {
        // this.getCategoryList();  commented for the time
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.imageUrl = this.configService.getImageUrl();
        this.pagenationCount = true;
        this.regSubscriptionEvents();
        this.index = 0;
        this.coupenList(this.offset, this.keyword);
    };
    // calling category list api with pagination
    CoupenListComponent.prototype.getCategoryList = function () {
        var param = {};
        param.limit = '';
        param.offset = '';
        param.keyword = undefined;
        param.sortOrder = '';
        param.status = 1;
        this.categoriessandbox.categorylist(param);
    };
    // this function navigate  to  create page coupen
    CoupenListComponent.prototype.AddCoupen = function () {
        this.service.setCoupenListData('');
        this.router.navigate(['/adv/Coupens/add']);
    };
    /**
     * Handles form 'submit' event. Calls sandbox getCoupenList . function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    CoupenListComponent.prototype.coupenList = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.offset = offset;
        params.limit = this.pageSize;
        params.keyword = this.keyword;
        this.sandbox.getCoupenList(params);
        if (this.pagenationCount) {
            params.count = 'true';
            this.sandbox.getCoupenPagination(params);
        }
        console.log("Get banne action");
        this.coupenListCount(0, keyword);
    };
    // to get total count
    CoupenListComponent.prototype.coupenListCount = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.offset = offset;
        params.limit = this.pageSize;
        params.keyword = this.keyword;
        params.count = 1;
        // params.status = 1;
        // alert("ADV component");
        this.sandbox.getCoupenListCount(params);
    };
    // mat pagination function
    CoupenListComponent.prototype.onPageChange = function (event) {
        this.currentPage = event.offset;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        var offset = event.pageSize * event.pageIndex;
        this.coupenList(offset, this.pageSize);
    };
    //  edit
    CoupenListComponent.prototype.editCoupen = function (coupenData) {
        this.service.setCoupenListData(coupenData);
        this.router.navigate(['/adv/coupens/edit', coupenData.coupenId]);
    };
    //  function deleteCoupen to delete particular id in coupen list
    CoupenListComponent.prototype.deleteCoupen = function (coupenId, deletePop) {
        this.popoverContent = deletePop;
        event.stopPropagation();
        this.sandbox.deletecoupen({ coupenId: coupenId });
    };
    // popup  regSubscriptionEvents
    CoupenListComponent.prototype.regSubscriptionEvents = function () {
        var _this = this;
        this.sandbox.getdeletecoupen$.subscribe(function (_delete) {
            if (_delete && _delete.status && _delete.status === 1) {
                _this.coupenList(_this.offset, _this.keyword);
            }
        });
    };
    // bulkDelete
    CoupenListComponent.prototype.bulkDelete = function () {
        var _this = this;
        this.unCheckData = [];
        var param = {};
        param.coupenId = this.checkedData;
        this.sandbox.bulkDelete(param);
        this.checkedData = [];
        this.sandbox.getdeletecoupen$.subscribe(function (_delete) {
            if (_delete) {
                if (_delete.status === 1) {
                    _this.checkedData = [];
                    _this.coupenList(_this.offset, _this.keyword);
                }
            }
        });
    };
    CoupenListComponent.prototype.selectChkBox = function (event, pageId) {
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
    CoupenListComponent.prototype.bulkDeleteEmpty = function () {
        this.showNotificationError('Choose atleast one Coupen');
    };
    /**
     * Shows error notification with given title and message
     *
     * @params message
     */
    CoupenListComponent.prototype.showNotificationError = function (message) {
        this.toastr.errorToastr(message);
    };
    // CoupenList Image Loader
    CoupenListComponent.prototype.CoupenListImageLoading = function (id) {
        this.coupenListImage[id] = true;
    };
    CoupenListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-cms-coupen-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/adv/components/coupen/list/list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n\n      .dark-modal .close {\n        color: white;\n      }\n\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n\n      .image-manager .modal-dialog {\n        max-width: 70%;\n      }\n    ", __webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/adv/components/coupen/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_4__["CoupenSandbox"],
            _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_5__["CategoriesSandbox"],
            _core_admin_adv_coupens_coupen_service__WEBPACK_IMPORTED_MODULE_3__["CoupenService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], CoupenListComponent);
    return CoupenListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row products-section\">\n    <div class=\"col-12 layout-mar\">\n        <div class=\"card\">\n            <div class=\"product-ts-left\">\n                <ul>\n                    <li>\n                        <p>Total Banners</p>\n                        <h3>{{(sandbox.getcoupenListCount$ | async)?.data}}\n\n                        </h3>\n                    </li>\n                    <li>\n                        <p>Active Banners</p>\n                        <h3>{{(sandbox.getcoupenListActive$ | async)?.data}}\n                        </h3>\n                    </li>\n                    <li>\n                        <p>In-Active Banners</p>\n                        <h3>{{(sandbox.getcoupenListInActive$ | async)?.data}}\n\n                        </h3>\n                    </li>\n                </ul>\n            </div>\n            <!--Left-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9hZHYvY29tcG9uZW50cy9zaGFyZWQvY291cGVuLWxheW91dC9jb3VwZW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CoupenLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupenLayoutComponent", function() { return CoupenLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/admin/adv/coupens/coupen.sandbox */ "./src/core/admin/adv/coupens/coupen.sandbox.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var CoupenLayoutComponent = /** @class */ (function () {
    function CoupenLayoutComponent(sandbox) {
        this.sandbox = sandbox;
    }
    CoupenLayoutComponent.prototype.ngOnInit = function () {
        this.getCoupenLists();
    };
    // to get total count
    CoupenLayoutComponent.prototype.getCoupenLists = function () {
        this.sandbox.getCoupenListCount({ count: 1 });
        this.sandbox.getCoupenListActive({ count: 1, status: 1 });
        this.sandbox.getCoupenListInActive({ count: 1, status: 0 });
    };
    CoupenLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupen-layout',
            template: __webpack_require__(/*! ./coupen-layout.component.html */ "./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./coupen-layout.component.scss */ "./src/theme/default/admin/adv/components/shared/coupen-layout/coupen-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_adv_coupens_coupen_sandbox__WEBPACK_IMPORTED_MODULE_2__["CoupenSandbox"]])
    ], CoupenLayoutComponent);
    return CoupenLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-coupen-coupen-module.js.map