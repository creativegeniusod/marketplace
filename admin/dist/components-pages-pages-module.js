(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-pages-module"],{

/***/ "./src/core/admin/cms/pages/page-effects/page.effects.ts":
/*!***************************************************************!*\
  !*** ./src/core/admin/cms/pages/page-effects/page.effects.ts ***!
  \***************************************************************/
/*! exports provided: PageEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEffects", function() { return PageEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagesaction/page.action */ "./src/core/admin/cms/pages/pagesaction/page.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_ApiclientService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages.ApiclientService */ "./src/core/admin/cms/pages/pages.ApiclientService.ts");
/* harmony import */ var _pages_model_pagesupdate_response_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages-model/pagesupdate.response.model */ "./src/core/admin/cms/pages/pages-model/pagesupdate.response.model.ts");
/* harmony import */ var _pages_model_pagescount_response_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages-model/pagescount.response.model */ "./src/core/admin/cms/pages/pages-model/pagescount.response.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */











var PageEffects = /** @class */ (function () {
    function PageEffects(action$, apiCli, appState) {
        var _this = this;
        this.action$ = action$;
        this.apiCli = apiCli;
        this.appState = appState;
        // PAGES LIST EFFECT
        this.doPagesList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_PAGES_LIST_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.getpageslist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (pages) { return [new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagesSuccessAction"](pages)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagesFailAction"](error)); }));
        }));
        // PAGES  COUNT LIST EFFECT
        this.doPagesCountList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_PAGES_COUNT_LIST_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.getpageslist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (pagesCount) { return [
                new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagescountSuccessAction"](new _pages_model_pagescount_response_model__WEBPACK_IMPORTED_MODULE_9__["PagescountResponseModel"](pagesCount))
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagescountFailAction"](error)); }));
        }));
        // ACTIVE PAGES  COUNT  EFFECT
        this.activePageCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_ACTIVE_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.getpageslist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (pagesCount) { return [
                new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCountSuccess"](new _pages_model_pagescount_response_model__WEBPACK_IMPORTED_MODULE_9__["PagescountResponseModel"](pagesCount))
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCountFail"](error)); }));
        }));
        // IN-ACTIVE PAGES  COUNT  EFFECT
        this.in_activePageCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_IN_ACTIVE_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.getpageslist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (pagesCount) { return [
                new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetInactiveCountSuccess"](new _pages_model_pagescount_response_model__WEBPACK_IMPORTED_MODULE_9__["PagescountResponseModel"](pagesCount))
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetInactiveCountFail"](error)); }));
        }));
        // add - pages
        this.doAddPagesList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_ADD_PAGES_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.Addpages(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCount"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetInactiveCount"]({ count: 1, status: 1 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (analysis) { return new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoAddPagesSuccessAction"](analysis); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoAddPagesFailAction"](error)); }));
        }));
        // update - pages
        this.doUpdatePagesList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_UPDATE_PAGES_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var pageId = state.pageId;
            return _this.apiCli.updatepages(state, pageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCount"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetInactiveCount"]({ count: 1, status: 1 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (analysis) {
                return new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoUpdatepagesSuccessAction"](new _pages_model_pagesupdate_response_model__WEBPACK_IMPORTED_MODULE_8__["PagesupdateResponseModel"](analysis));
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoUpdatepagesFailAction"](error)); }));
        }));
        this.doPagesDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_PAGES_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var pageId = state.pageId;
            return _this.apiCli.deletepageslist(state, pageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCount"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetInactiveCount"]({ count: 1, status: 1 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagesDeleteSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagesDeleteFailAction"](error)); }));
        }));
        // Pages Bulk Delete
        this.doPagesBulkDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_PAGES_BULK_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.pagesBulkDelete(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveCount"]({ count: 1, status: 1 }));
                _this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["GetInactiveCount"]({ count: 1, status: 0 }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagesBulkDeleteSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_5__["DoPagesBulkDeleteFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "doPagesList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "doPagesCountList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "activePageCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "in_activePageCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "doAddPagesList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "doUpdatePagesList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "doPagesDelete$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PageEffects.prototype, "doPagesBulkDelete$", void 0);
    PageEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _pages_ApiclientService__WEBPACK_IMPORTED_MODULE_7__["PagesApiclientService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]])
    ], PageEffects);
    return PageEffects;
}());



/***/ }),

/***/ "./src/core/admin/cms/pages/pages-model/pagesadd.model.ts":
/*!****************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages-model/pagesadd.model.ts ***!
  \****************************************************************/
/*! exports provided: PagesaddModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesaddModel", function() { return PagesaddModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var PagesaddModel = /** @class */ (function () {
    function PagesaddModel(PagesAddForm) {
        this.title = PagesAddForm.title || '';
        this.content = PagesAddForm.content || '';
        this.metaTagTitle = PagesAddForm.metaTagTitle || '';
        this.metaTagContent = PagesAddForm.metaTagContent || '';
        this.metaTagKeyword = PagesAddForm.metaTagKeyword || '';
        this.active = PagesAddForm.active || 0;
        if (PagesAddForm.bannerId) {
            this.pageId = PagesAddForm.bannerId || 0;
        }
    }
    return PagesaddModel;
}());



/***/ }),

/***/ "./src/core/admin/cms/pages/pages-model/pagescount.model.ts":
/*!******************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages-model/pagescount.model.ts ***!
  \******************************************************************/
/*! exports provided: PagescountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagescountModel", function() { return PagescountModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var PagescountModel = /** @class */ (function () {
    function PagescountModel(PagesCountForm) {
        this.limit = PagesCountForm.limit || 0;
        this.offset = PagesCountForm.offset || 0;
        this.keyword = PagesCountForm.keyword || '';
        this.count = PagesCountForm.count || 0;
    }
    return PagescountModel;
}());



/***/ }),

/***/ "./src/core/admin/cms/pages/pages-model/pagescount.response.model.ts":
/*!***************************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages-model/pagescount.response.model.ts ***!
  \***************************************************************************/
/*! exports provided: PagescountResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagescountResponseModel", function() { return PagescountResponseModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var PagescountResponseModel = /** @class */ (function () {
    function PagescountResponseModel(listResponse) {
        this.pagescount = {};
        this.pagescount = listResponse || '';
    }
    return PagescountResponseModel;
}());



/***/ }),

/***/ "./src/core/admin/cms/pages/pages-model/pageslist.model.ts":
/*!*****************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages-model/pageslist.model.ts ***!
  \*****************************************************************/
/*! exports provided: PageslistModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageslistModel", function() { return PageslistModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var PageslistModel = /** @class */ (function () {
    function PageslistModel(PagesListForm) {
        this.limit = PagesListForm.limit || 0;
        this.offset = PagesListForm.offset || 0;
        this.keyword = PagesListForm.keyword || '';
    }
    return PageslistModel;
}());



/***/ }),

/***/ "./src/core/admin/cms/pages/pages-model/pagesupdate.model.ts":
/*!*******************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages-model/pagesupdate.model.ts ***!
  \*******************************************************************/
/*! exports provided: PagesupdateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesupdateModel", function() { return PagesupdateModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var PagesupdateModel = /** @class */ (function () {
    function PagesupdateModel(PagesUpdateForm) {
        this.title = PagesUpdateForm.title || '';
        this.content = PagesUpdateForm.content || '';
        this.active = PagesUpdateForm.active || 0;
        this.pageId = PagesUpdateForm.pageId || 0;
        this.metaTagTitle = PagesUpdateForm.metaTagTitle || '';
        this.metaTagContent = PagesUpdateForm.metaTagContent || '';
        this.metaTagKeyword = PagesUpdateForm.metaTagKeyword || '';
        if (PagesUpdateForm.bannerId) {
            this.pageId = PagesUpdateForm.pageId || 0;
        }
    }
    return PagesupdateModel;
}());



/***/ }),

/***/ "./src/core/admin/cms/pages/pages-model/pagesupdate.response.model.ts":
/*!****************************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages-model/pagesupdate.response.model.ts ***!
  \****************************************************************************/
/*! exports provided: PagesupdateResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesupdateResponseModel", function() { return PagesupdateResponseModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var PagesupdateResponseModel = /** @class */ (function () {
    function PagesupdateResponseModel(updateResponse) {
        this.pagesupdate = {};
        this.pagesupdate = updateResponse || '';
    }
    return PagesupdateResponseModel;
}());



/***/ }),

/***/ "./src/core/admin/cms/pages/pages-reducer/page.selector.ts":
/*!*****************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages-reducer/page.selector.ts ***!
  \*****************************************************************/
/*! exports provided: getpageState, getpageslist, getpageslistloading, getpageslistloaded, getpageslistfailed, getpageslistcount, getpagescountfailed, getpagescountloaded, getpagescountloading, getaddPages, getpagesaddloading, getpagesaddloaded, getpagesaddfailed, getpagesupdateloading, getpagesupdateloaded, getpagesupdatefailed, getpagesdeleteloading, getpagesdeleteloaded, getpagesdeletefailed, getaddpagesstatus, getupdatepages, getpagesdelete, getActivePageCount, getInactivePageCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpageState", function() { return getpageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpageslist", function() { return getpageslist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpageslistloading", function() { return getpageslistloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpageslistloaded", function() { return getpageslistloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpageslistfailed", function() { return getpageslistfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpageslistcount", function() { return getpageslistcount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagescountfailed", function() { return getpagescountfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagescountloaded", function() { return getpagescountloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagescountloading", function() { return getpagescountloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getaddPages", function() { return getaddPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesaddloading", function() { return getpagesaddloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesaddloaded", function() { return getpagesaddloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesaddfailed", function() { return getpagesaddfailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesupdateloading", function() { return getpagesupdateloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesupdateloaded", function() { return getpagesupdateloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesupdatefailed", function() { return getpagesupdatefailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesdeleteloading", function() { return getpagesdeleteloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesdeleteloaded", function() { return getpagesdeleteloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesdeletefailed", function() { return getpagesdeletefailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getaddpagesstatus", function() { return getaddpagesstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getupdatepages", function() { return getupdatepages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpagesdelete", function() { return getpagesdelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivePageCount", function() { return getActivePageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactivePageCount", function() { return getInactivePageCount; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _pages_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.reducer */ "./src/core/admin/cms/pages/pages-reducer/pages.reducer.ts");


// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
var getpageState = function (state) { return state.pages; };
var getpageslist = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpageslist"]);
var getpageslistloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpageslistloading"]);
var getpageslistloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpageslistloaded"]);
var getpageslistfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpageslistfailed"]);
var getpageslistcount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpageslistcount"]);
var getpagescountfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagescountfailed"]);
var getpagescountloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagescountloaded"]);
var getpagescountloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagescountloading"]);
var getaddPages = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getaddPages"]);
var getpagesaddloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesaddloading"]);
var getpagesaddloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesaddloaded"]);
var getpagesaddfailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesaddfailed"]);
var getpagesupdateloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesupdateloading"]);
var getpagesupdateloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesupdateloaded"]);
var getpagesupdatefailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesupdatefailed"]);
var getpagesdeleteloading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesdeleteloading"]);
var getpagesdeleteloaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesdeleteloaded"]);
var getpagesdeletefailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesdeletefailed"]);
var getaddpagesstatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getaddpagesstatus"]);
var getupdatepages = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getupdatepages"]);
var getpagesdelete = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getpagesdelete"]);
var getActivePageCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveCount"]);
var getInactivePageCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getpageState, _pages_reducer__WEBPACK_IMPORTED_MODULE_1__["getInactiveCount"]);


/***/ }),

/***/ "./src/core/admin/cms/pages/pages.ApiclientService.ts":
/*!************************************************************!*\
  !*** ./src/core/admin/cms/pages/pages.ApiclientService.ts ***!
  \************************************************************/
/*! exports provided: PagesApiclientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesApiclientService", function() { return PagesApiclientService; });
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


var PagesApiclientService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PagesApiclientService, _super);
    function PagesApiclientService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        _this.url = _this.getBaseUrl();
        return _this;
    }
    PagesApiclientService.prototype.pagesGetData = function () {
        return this.pagesData;
    };
    PagesApiclientService.prototype.pagesSetData = function (data) {
        this.pagesData = data;
    };
    // Pages List
    PagesApiclientService.prototype.getpageslist = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/page/pagelist', { params: reqOpts });
    };
    //  Add Pages
    PagesApiclientService.prototype.Addpages = function (param) {
        return this.http.post(this.url + '/page/add-page', param);
    };
    // update
    PagesApiclientService.prototype.updatepages = function (param, Id) {
        return this.http.put(this.url + '/page/update-page/' + Id, param);
    };
    // delete
    PagesApiclientService.prototype.deletepageslist = function (param, Id) {
        return this.http.delete(this.url + '/page/delete-page/' + Id, param);
    };
    /**
     * Handles 'pagesBulkDelete' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from Model
     */
    PagesApiclientService.prototype.pagesBulkDelete = function (param) {
        return this.http.post(this.url + '/page/delete-page', param);
    };
    PagesApiclientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PagesApiclientService);
    return PagesApiclientService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/core/admin/cms/pages/pages.sandbox.ts":
/*!***************************************************!*\
  !*** ./src/core/admin/cms/pages/pages.sandbox.ts ***!
  \***************************************************/
/*! exports provided: PagesSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesSandbox", function() { return PagesSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagesaction/page.action */ "./src/core/admin/cms/pages/pagesaction/page.action.ts");
/* harmony import */ var _pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages-reducer/page.selector */ "./src/core/admin/cms/pages/pages-reducer/page.selector.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _pages_model_pageslist_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages-model/pageslist.model */ "./src/core/admin/cms/pages/pages-model/pageslist.model.ts");
/* harmony import */ var _pages_model_pagesadd_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages-model/pagesadd.model */ "./src/core/admin/cms/pages/pages-model/pagesadd.model.ts");
/* harmony import */ var _pages_model_pagesupdate_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages-model/pagesupdate.model */ "./src/core/admin/cms/pages/pages-model/pagesupdate.model.ts");
/* harmony import */ var _pages_model_pagescount_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages-model/pagescount.model */ "./src/core/admin/cms/pages/pages-model/pagescount.model.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */










var PagesSandbox = /** @class */ (function () {
    function PagesSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.subscriptions = [];
        this.getpageslist$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpageslist"]);
        this.getpageslistloading$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpageslistloading"]);
        this.getpageslistloaded$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpageslistloaded"]);
        this.getpageslistfailed$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpageslistfailed"]);
        this.getpageslistcount$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpageslistcount"]);
        this.getaddPages$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getaddPages"]);
        this.getpagesaddloading$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesaddloading"]);
        this.getpagesaddloaded$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesaddloaded"]);
        this.getpagesaddfailed$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesaddfailed"]);
        this.getpagesupdateloading$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesupdateloading"]);
        this.getpagesupdateloaded$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesupdateloaded"]);
        this.getpagesupdatefailed$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesupdatefailed"]);
        this.getpagesdeleteloading$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesdeleteloading"]);
        this.getpagesdeleteloaded$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesdeleteloaded"]);
        this.getpagesdeletefailed$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesdeletefailed"]);
        this.getaddpagesstatus$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getaddpagesstatus"]);
        this.getupdatepages$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getupdatepages"]);
        this.getpagesdelete$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagesdelete"]);
        this.getpagescountfailed$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagescountfailed"]);
        this.getpagescountloaded$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagescountloaded"]);
        this.getpagescountloading$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getpagescountloading"]);
        this.activePageCount$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getActivePageCount"]);
        this.inactivePageCount$ = this.appState.select(_pages_reducer_page_selector__WEBPACK_IMPORTED_MODULE_5__["getInactivePageCount"]);
        this.subscribe();
    }
    PagesSandbox.prototype.getPagesList = function (value) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["DoPagesListAction"](new _pages_model_pageslist_model__WEBPACK_IMPORTED_MODULE_7__["PageslistModel"](value)));
    };
    //  update
    PagesSandbox.prototype.updatePagesList = function (value) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["DoUpdatepagesAction"](new _pages_model_pagesupdate_model__WEBPACK_IMPORTED_MODULE_9__["PagesupdateModel"](value)));
    };
    //  pagination
    PagesSandbox.prototype.getPagePagination = function (value) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["DoPagescountListAction"](new _pages_model_pagescount_model__WEBPACK_IMPORTED_MODULE_10__["PagescountModel"](value)));
    };
    //  active pages count
    PagesSandbox.prototype.getActivePageCount = function (value) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["GetActiveCount"](value));
    };
    //  inactive pages count
    PagesSandbox.prototype.getInactivePageCount = function (value) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["GetInactiveCount"](value));
    };
    //  add pages
    PagesSandbox.prototype.getAddpages = function (data) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["DoAddPagesAction"](new _pages_model_pagesadd_model__WEBPACK_IMPORTED_MODULE_8__["PagesaddModel"](data)));
    };
    //  delete  list  page
    PagesSandbox.prototype.deletePagesList = function (value) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["DoPagesDeleteAction"](value));
    };
    // Do Product Bulk Delete
    PagesSandbox.prototype.bulkDelete = function (value) {
        this.appState.dispatch(new _pagesaction_page_action__WEBPACK_IMPORTED_MODULE_4__["DoPagesBulkDelete"](value));
    };
    PagesSandbox.prototype.subscribe = function () {
        var _this = this;
        this.getpageslistcount$.subscribe(function (data) { });
        this.subscriptions.push(this.getaddpagesstatus$.subscribe(function (data) {
            if (data && data.message) {
                if (data.status === 1) {
                    _this.router.navigate(['/cms/pages/list']);
                }
            }
        }));
        this.subscriptions.push(this.getupdatepages$.subscribe(function (data) {
            if (data && data.message) {
                if (data.status === 1) {
                    _this.router.navigate(['/cms/pages/list']);
                }
            }
        }));
        this.subscriptions.push(this.getpagesdelete$.subscribe(function (data) {
            if (data && data.message) {
                if (data.status === 1) {
                    _this.router.navigate(['/cms/pages/list']);
                }
            }
        }));
    };
    PagesSandbox.prototype.ngOnDestroy = function () {
        {
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };
    PagesSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]])
    ], PagesSandbox);
    return PagesSandbox;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/components/pages/add/add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/pages/add/add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pages-layout></app-pages-layout>\n<div class=\"row products-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row noborder\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\">CMS</a></li>\n                    <li>\n                        <a href=\"javascript:void(0)\" [routerLink]=\"['/cms/pages']\"> Pages </a>\n                    </li>\n                    <li> Add Page</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn ap-col-btn\">\n                <button type=\"submit\" class=\"btn btn-save\" (click)=\"onSubmit()\"><img\n                        src=\"assets/img/tick-round-white.png\"> Save\n                </button>\n                <button (click)=\"pagesCancel()\" class=\"btn btn-cancel\"><img\n                        src=\"assets/img/close-white-ico.png\">Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n</div>\n\n<div class=\"flex addproduct-wrap addgroup-wrap\">\n\n    <div class=\"card ap-general\">\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"pagesForm\" class=\"form-horizontal m-t-20\">\n            <div class=\"ap-header\">\n                General Information\n            </div>\n            <div class=\"flex ap-body cmsap-body\">\n\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Page Title <sup>*</sup></label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pageTitle\" placeholder=\"Page Title\" [ngClass]=\"{ 'is-invalid': submitted && f.pageTitle.errors }\" />\n                        <div *ngIf=\"submitted && f.pageTitle.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.pageTitle.errors.required\">Page Title is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!--Col-->\n                <div class=\"ap-body-col width100\">\n                    <div class=\"form-group\">\n                        <label>Page Content<sup>*</sup></label>\n                        <ckeditor formControlName='pageContent' name='pageContent' class=\"cms_pages_validation\" [ngClass]=\"{'Validationcolor': !pagesForm.get('pageContent').valid && pagesForm.get('pageContent').touched&&submitted==true}\">\n                        </ckeditor>\n                        <div style=\"color:red\" *ngIf=\"pagesForm.get('pageContent').hasError('required') && pagesForm.get('pageContent').touched && submitted==true\">\n                            Page Content is required\n                        </div>\n\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Active<sup>*</sup></label>\n                        <select class=\"custom-select col-12\" formControlName=\"active\" id=\"inlineFormCustomSelect\" [ngClass]=\"{ 'is-invalid': submitted && f.active.errors }\">\n                            <option value=\"\">- -select Active- -</option>\n                            <option value=\"1\">Yes</option>\n                            <option value=\"0\">No</option>\n                        </select>\n                        <div *ngIf=\"submitted && f.active.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.active.errors.required\">Status is required</div>\n                        </div>\n\n                    </div>\n                </div>\n                <!--col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Meta Title</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"metaTitle\" placeholder=\"Meta Title\" [ngClass]=\"{ 'is-invalid': submitted && f.metaTitle.errors }\">\n                        <div *ngIf=\"submitted && f.metaTitle.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.metaTitle.errors.required\">Meta Title is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Meta Keyword</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"metaKeyword\" placeholder=\"Meta Keyword\" [ngClass]=\"{ 'is-invalid': submitted && f.metaKeyword.errors }\">\n                        <div *ngIf=\"submitted && f.metaKeyword.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.metaKeyword.errors.required\">Meta Keyword is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Meta Content</label>\n                        <textarea class=\"form-control\" rows=\"3\" formControlName=\"metaContent\" placeholder=\"Meta Content\" [ngClass]=\"{ 'is-invalid': submitted && f.metaContent.errors }\"></textarea>\n                        <div *ngIf=\"submitted && f.metaContent.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.metaContent.errors.required\">Meta Content is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--Col-->\n\n            </div>\n        </form>\n\n    </div>\n    <!--General-->\n\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/pages/add/add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/pages/add/add.component.ts ***!
  \***************************************************************************/
/*! exports provided: PagesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesAddComponent", function() { return PagesAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_cms_pages_pages_ApiclientService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/cms/pages/pages.ApiclientService */ "./src/core/admin/cms/pages/pages.ApiclientService.ts");
/* harmony import */ var _core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/cms/pages/pages.sandbox */ "./src/core/admin/cms/pages/pages.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */






var PagesAddComponent = /** @class */ (function () {
    function PagesAddComponent(modalService, appSandbox, service, fb, route, modalService2, router) {
        this.modalService = modalService;
        this.appSandbox = appSandbox;
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.modalService2 = modalService2;
        this.router = router;
        this.submitted = false;
        this.pagesInfo = [];
        this.id = '';
    }
    // initially calls initForm,editPages
    PagesAddComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.editPages();
        this.editPagesId = this.route.snapshot.paramMap.get('id');
    };
    PagesAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    PagesAddComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService
            .open(content, { windowClass: 'image-manager' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PagesAddComponent.prototype.open = function (content) {
        this.modalService2.open(content, {
            windowClass: 'dark-modal,image-manager'
        });
    };
    PagesAddComponent.prototype.getDismissReason = function (reason) {
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
    // Cancel It Navigate  to add page to List page
    PagesAddComponent.prototype.pagesCancel = function () {
        this.router.navigate(['/cms/pages']);
    };
    // Form  Initialization
    PagesAddComponent.prototype.initForm = function () {
        this.pageTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.pageContent = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.active = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.metaTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.metaKeyword = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.metaContent = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.pagesForm = this.fb.group({
            pageTitle: this.pageTitle,
            pageContent: this.pageContent,
            active: this.active,
            metaTitle: this.metaTitle,
            metaKeyword: this.metaKeyword,
            metaContent: this.metaContent
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox pages  function if form is valid.
     *
     * @param event form event
     * @param form entire form value
     */
    PagesAddComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.pagesForm.valid) {
            this.validateAllFormFields(this.pagesForm);
            return;
        }
        if (this.pagesForm.value.pageTitle !== '' &&
            this.pagesForm.value.pageContent !== '') {
            var params = {};
            params.title = this.pagesForm.value.pageTitle;
            params.content = this.pagesForm.value.pageContent;
            params.active = this.pagesForm.value.active;
            params.metaTagTitle = this.pagesForm.value.metaTitle;
            params.metaTagKeyword = this.pagesForm.value.metaKeyword;
            params.metaTagContent = this.pagesForm.value.metaContent;
            if (this.pagesInfo[0]) {
                if (this.pagesInfo[0].pageId) {
                    params.pageId = this.pagesInfo[0].pageId;
                    this.appSandbox.updatePagesList(params);
                }
            }
            else {
                this.appSandbox.getAddpages(params);
            }
        }
    };
    // edit function for pages
    PagesAddComponent.prototype.editPages = function () {
        this.pagesInfo.push(this.service.pagesGetData());
        if (this.pagesInfo[0] !== null) {
            if (this.pagesInfo[0] && this.pagesInfo[0].title) {
                this.pageTitle = this.pagesInfo[0].title;
                this.pageContent = this.pagesInfo[0].content;
                this.active = this.pagesInfo[0].isActive;
                this.metaTitle = this.pagesInfo[0].metaTagTitle;
                this.metaContent = this.pagesInfo[0].metaTagContent;
                this.metaKeyword = this.pagesInfo[0].metaTagKeyword;
                this.pagesForm.controls['pageTitle'].setValue(this.pagesInfo[0].title);
                this.pagesForm.controls['pageContent'].setValue(this.pagesInfo[0].content);
                this.pagesForm.controls['active'].setValue(this.pagesInfo[0].isActive);
                this.pagesForm.controls['metaTitle'].setValue(this.pagesInfo[0].metaTagTitle);
                this.pagesForm.controls['metaContent'].setValue(this.pagesInfo[0].metaTagContent);
                this.pagesForm.controls['metaKeyword'].setValue(this.pagesInfo[0].metaTagKeyword);
            }
        }
        else {
            this.pagesInfo = null;
        }
    };
    Object.defineProperty(PagesAddComponent.prototype, "f", {
        // Form  Controls Using  in Add Pages  html
        get: function () {
            return this.pagesForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // show all validation at when invalid form
    PagesAddComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    PagesAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cms-pages-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/cms/components/pages/add/add.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n\n      .dark-modal .close {\n        color: white;\n      }\n\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n\n      .image-manager .modal-dialog {\n        max-width: 70%;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_6__["PagesSandbox"],
            _core_admin_cms_pages_pages_ApiclientService__WEBPACK_IMPORTED_MODULE_5__["PagesApiclientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PagesAddComponent);
    return PagesAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/components/pages/list/list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/pages/list/list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pages-layout></app-pages-layout>\n<div class=\"row products-section products-sub-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\"> CMS</a></li>\n                    <li> Pages</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn\">\n                <button class=\"btn cms-btn\" (click)=\"addpage()\"><img\n                        src=\"assets/img/add-white-ico.png\">New Page</button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n    <div class=\"col-12\">\n        <div class=\"flex filter-row\">\n            <div class=\"filter-lft\">\n            </div>\n            <!--Lft-->\n            <div class=\"filter-nav-list\">\n                <ul class=\"flex\">\n                    <li *ngIf=\"checkedData.length==0\" style=\"margin-left: 15px;\">\n                        <a (click)=\"bulkDeleteEmpty()\"><img src=\"assets/img/delete-ico-pink.png\"> Delete\n                        </a>\n                    </li>\n                    <li *ngIf=\"checkedData.length>0\" style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent1\" placement=\"left\" #deletePop=\"ngbPopover\">\n                        <a><img src=\"assets/img/delete-ico-pink.png\"> Delete\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <!--Right-->\n        </div>\n    </div>\n</div>\n\n<div class=\"flex product-wrap\">\n\n    <div class=\"product-table\" style=\"width:100%\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" width=\"5%\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                </div>\n                            </div>\n                        </th>\n                        <th scope=\"col\">Title</th>\n                        <th scope=\"col\" width=\"100\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let pagesList of appSandbox.getpageslist$ | async; let i=index\">\n                        <th scope=\"row\" class=\"text-center\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectChkBox($event, pagesList.pageId)\" id={{pagesList.pageId}} [checked]=\"checkCondition[pagesList.pageId]\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"checkmodules[pagesList.pageId]\">\n                                    <!--<input type=\"checkbox\" class=\"custom-control-input\" id={{pagesList.pageId}}  value=\"check\" >-->\n                                    <label class=\"custom-control-label\" for={{pagesList.pageId}}></label>\n                                </div>\n                            </div>\n                        </th>\n                        <td>{{pagesList.title}}</td>\n                        <td>\n                            <a href=\"javascript:void(0)\"> <img src=\"assets/img/edit-ico.png\" (click)=\"editpagessList(pagesList)\"> </a>\n                            <i style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent\" placement=\"left\" #deletePop=\"ngbPopover\" class=\"fas fa-trash\"></i>\n                            <ng-template #deleteContent>\n                                <div class=\"style\">\n                                    <div class=\"modal-header\">\n                                        <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n                                    </div>\n                                    <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                                    </button>\n                                        <button type=\"button\" class=\"btn btn-success\" (click)=\"deletePages(pagesList.pageId, deletePop)\" data-dismiss=\"modal\">Yes\n                                    </button>\n                                    </div>\n                                </div>\n                            </ng-template>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"no_data\" *ngIf=\"(appSandbox.getpageslist$ | async)?.length==0\">\n                <p>Items not found</p>\n            </div>\n        </div>\n        <mat-paginator [length]=\"appSandbox.getpageslistcount$ | async\" [pageSizeOptions]=\"[pageSize]\" [pageSize]=\"pageSize\" [pageIndex]=\"index\" (page)=\"onPageChange($event)\">\n        </mat-paginator>\n    </div>\n</div>\n<ng-template #deleteContent1>\n    <div class=\"style\">\n        <div class=\"modal-header\">\n            <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n        </div>\n\n        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                </button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"bulkDelete()\" data-dismiss=\"modal\">\n                    Yes\n                </button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/pages/list/list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/pages/list/list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #f2086d !important;\n  border: #f2086d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY21zL2NvbXBvbmVudHMvcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY21zL2NvbXBvbmVudHMvcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2Ntcy9jb21wb25lbnRzL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjA4NmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjZjIwODZkICFpbXBvcnRhbnQ7XG59IiwiLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyMDg2ZCAhaW1wb3J0YW50O1xuICBib3JkZXI6ICNmMjA4NmQgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/pages/list/list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/pages/list/list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/cms/pages/pages.sandbox */ "./src/core/admin/cms/pages/pages.sandbox.ts");
/* harmony import */ var _core_admin_cms_pages_pages_ApiclientService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/cms/pages/pages.ApiclientService */ "./src/core/admin/cms/pages/pages.ApiclientService.ts");
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



var PageListComponent = /** @class */ (function () {
    function PageListComponent(modalService, toastr, service, appSandbox, router) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.service = service;
        this.appSandbox = appSandbox;
        this.router = router;
        // Variable
        this.pageSize = 5;
        this.keyword = '';
        this.checkarray = [];
        this.checkCondition = [];
        this.checkmodules = [];
        this.checkedData = [];
        this.unCheckData = [];
    }
    // initially calls getPagesList,getPagesPagination,regSubscriptionEvents
    PageListComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.getPagesList(this.offset, this.keyword);
        this.getPagesPagination(this.offset, this.keyword);
        this.regSubscriptionEvents();
        this.index = 0;
    };
    PageListComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService
            .open(content, { windowClass: 'view-address' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PageListComponent.prototype.getDismissReason = function (reason) {
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
    PageListComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // calls getPagesList,getPagesPagination
    PageListComponent.prototype.regSubscriptionEvents = function () {
        var _this = this;
        this.appSandbox.getpagesdelete$.subscribe(function (_delete) {
            if (_delete && _delete.status && _delete.status === 1) {
                _this.getPagesList(_this.offset, _this.keyword);
                _this.getPagesPagination(_this.offset, _this.keyword);
            }
        });
    };
    //  pages list
    PageListComponent.prototype.getPagesList = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        this.appSandbox.getPagesList(params);
    };
    // pagination
    PageListComponent.prototype.getPagesPagination = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        params.count = true;
        this.appSandbox.getPagePagination(params);
    };
    // mat pagination
    PageListComponent.prototype.onPageChange = function (event) {
        this.currentPage = event.offset;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        var offset = event.pageSize * event.pageIndex;
        this.getPagesList(offset, this.pageSize);
    };
    // # edit
    PageListComponent.prototype.editpagessList = function (pagesList) {
        this.service.pagesSetData(pagesList);
        this.router.navigate(['/cms/pages/edit', pagesList.pageId]);
    };
    // navigate- list page to add page
    PageListComponent.prototype.addpage = function () {
        this.service.pagesSetData('');
        this.router.navigate(['/cms/pages/add']);
    };
    // delete  by using  id
    PageListComponent.prototype.deletePages = function (pageId, deletePop) {
        this.popoverContent = deletePop;
        event.stopPropagation();
        this.appSandbox.deletePagesList({ pageId: pageId });
        this.getPagesList(this.offset, this.keyword);
        this.getPagesPagination(this.offset, this.keyword);
    };
    // bulkDelete
    PageListComponent.prototype.bulkDelete = function () {
        var _this = this;
        var param = {};
        param.pageId = this.checkedData;
        this.appSandbox.bulkDelete(param);
        this.checkedData = [];
        this.appSandbox.getpagesdelete$.subscribe(function (_delete) {
            if (_delete) {
                if (_delete.status === 1) {
                    _this.getPagesList(_this.offset, _this.keyword);
                }
            }
        });
    };
    PageListComponent.prototype.selectChkBox = function (event, pageId) {
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
    PageListComponent.prototype.bulkDeleteEmpty = function () {
        this.showNotificationError('Choose atleast one Page');
    };
    /**
     * Shows error notification with given title and message
     *
     * @params message
     */
    PageListComponent.prototype.showNotificationError = function (message) {
        this.toastr.errorToastr(message);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-cms-page-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/cms/components/pages/list/list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n\n      .dark-modal .close {\n        color: white;\n      }\n\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n\n      .image-manager .modal-dialog {\n        max-width: 70%;\n      }\n    ", __webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/cms/components/pages/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"],
            _core_admin_cms_pages_pages_ApiclientService__WEBPACK_IMPORTED_MODULE_5__["PagesApiclientService"],
            _core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_4__["PagesSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/components/pages/pages.module.ts":
/*!**********************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/pages/pages.module.ts ***!
  \**********************************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/cms/components/pages/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/cms/components/pages/list/list.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_cms_pages_page_effects_page_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/admin/cms/pages/page-effects/page.effects */ "./src/core/admin/cms/pages/page-effects/page.effects.ts");
/* harmony import */ var _core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/admin/cms/pages/pages.sandbox */ "./src/core/admin/cms/pages/pages.sandbox.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages.routing */ "./src/theme/default/admin/cms/components/pages/pages.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _core_admin_cms_pages_pages_ApiclientService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../core/admin/cms/pages/pages.ApiclientService */ "./src/core/admin/cms/pages/pages.ApiclientService.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_pages_layout_pages_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/pages-layout/pages-layout.component */ "./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.ts");

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




var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["PagesAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"], _shared_pages_layout_pages_layout_component__WEBPACK_IMPORTED_MODULE_14__["PagesLayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _pages_routing__WEBPACK_IMPORTED_MODULE_10__["PagesRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_core_admin_cms_pages_page_effects_page_effects__WEBPACK_IMPORTED_MODULE_8__["PageEffects"]]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ],
            providers: [_core_admin_cms_pages_pages_ApiclientService__WEBPACK_IMPORTED_MODULE_12__["PagesApiclientService"], _core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_9__["PagesSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/components/pages/pages.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/pages/pages.routing.ts ***!
  \***********************************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/cms/components/pages/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/cms/components/pages/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var pagesRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["PageListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["PagesAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["PagesAddComponent"]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(pagesRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.html":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row products-section\">\n    <div class=\"col-12 layout-mar\">\n        <div class=\"card\">\n            <div class=\"product-ts-left\">\n                <ul>\n                    <li>\n                        <p>Total Pages</p>\n                        <h3>{{pageSandbox.getpageslistcount$ | async}}\n\n                        </h3>\n                    </li>\n                    <li>\n                        <p>Active Pages</p>\n                        <h3>{{pageSandbox.activePageCount$ | async}}\n\n                        </h3>\n                    </li>\n                    <li>\n                        <p>In-Active Pages</p>\n                        <h3>{{pageSandbox.inactivePageCount$ | async}}\n\n                        </h3>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jbXMvY29tcG9uZW50cy9zaGFyZWQvcGFnZXMtbGF5b3V0L3BhZ2VzLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PagesLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesLayoutComponent", function() { return PagesLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/admin/cms/pages/pages.sandbox */ "./src/core/admin/cms/pages/pages.sandbox.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var PagesLayoutComponent = /** @class */ (function () {
    function PagesLayoutComponent(pageSandbox) {
        this.pageSandbox = pageSandbox;
    }
    PagesLayoutComponent.prototype.ngOnInit = function () {
        this.getPagesLists();
    };
    PagesLayoutComponent.prototype.getPagesLists = function () {
        this.pageSandbox.getPagePagination({ count: 1 });
        this.pageSandbox.getActivePageCount({ count: 1, status: 1 });
        this.pageSandbox.getInactivePageCount({ count: 1, status: 0 });
    };
    PagesLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages-layout',
            template: __webpack_require__(/*! ./pages-layout.component.html */ "./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./pages-layout.component.scss */ "./src/theme/default/admin/cms/components/shared/pages-layout/pages-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_cms_pages_pages_sandbox__WEBPACK_IMPORTED_MODULE_2__["PagesSandbox"]])
    ], PagesLayoutComponent);
    return PagesLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-pages-pages-module.js.map