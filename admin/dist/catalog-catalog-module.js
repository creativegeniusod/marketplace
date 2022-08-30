(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-catalog-module"],{

/***/ "./src/core/admin/catalog/brand/effects/brand.effect.ts":
/*!**************************************************************!*\
  !*** ./src/core/admin/catalog/brand/effects/brand.effect.ts ***!
  \**************************************************************/
/*! exports provided: BrandEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandEffects", function() { return BrandEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/brand.actions */ "./src/core/admin/catalog/brand/action/brand.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _brandApiClientservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../brandApiClientservice */ "./src/core/admin/catalog/brand/brandApiClientservice.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */






// service

var BrandEffects = /** @class */ (function () {
    function BrandEffects(action$, brandApi) {
        var _this = this;
        this.action$ = action$;
        this.brandApi = brandApi;
        // manufacture update
        this.doUpdateManufacturer$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].DO_MANUFACTURE_UPDATE_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            if (state.image === '') {
                delete state.image;
            }
            return _this.brandApi.updateManufacturer(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                return [new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DoManufacturerUpdataSuccess"](user)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DoManufacturerUpdateFail"]()); }));
        }));
        // manufacture add
        this.doManufactureAdd$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].DO_MANUFACTURE_ADD_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.brandApi.addManufactureData(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DoAddManufaeturerSuccess"](data); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DoAddManufaeturerFail"](error)); }));
        }));
        // manufacture count
        this.doManufacturerCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].DO_MANUFACTURER_COUNT_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.brandApi.manufacturerCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DoManufactCountSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DomanufactCountFail"](error)); }));
        }));
        // Manufacturer List
        this.doManufacturerlists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].DO_MANUFACTURER_LIST_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            delete state.count;
            return _this.brandApi.manufacturerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DoManufacturerListSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["DomanufacturerListFail"]()); }));
        }));
        // DELETE MANUFACTURE
        this.doManufacturerDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].DO_MANUFACTURER_DELETE_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.brandApi.deleteManufacturer(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["ManufacturerdeleteSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _action_brand_actions__WEBPACK_IMPORTED_MODULE_3__["ManufacturerDeleteFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], BrandEffects.prototype, "doUpdateManufacturer$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], BrandEffects.prototype, "doManufactureAdd$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], BrandEffects.prototype, "doManufacturerCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], BrandEffects.prototype, "doManufacturerlists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], BrandEffects.prototype, "doManufacturerDelete$", void 0);
    BrandEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _brandApiClientservice__WEBPACK_IMPORTED_MODULE_7__["BrandApiClient"]])
    ], BrandEffects);
    return BrandEffects;
}());



/***/ }),

/***/ "./src/core/admin/catalog/category/categories.service.ts":
/*!***************************************************************!*\
  !*** ./src/core/admin/catalog/category/categories.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/admin/providers/api/api.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var CategoriesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoriesService, _super);
    function CategoriesService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // url
        _this.url = _this.getBaseUrl();
        // for get method
        _this.params = {};
        return _this;
    }
    // passing data to category edit
    CategoriesService.prototype.setEditcategories = function (data) {
        this.setEditvariable = data;
    };
    CategoriesService.prototype.getEditcategories = function () {
        return this.setEditvariable;
    };
    /**
     * Handles 'categoryListPagination' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from CategorylistForm.
     */
    CategoriesService.prototype.categoryListPagination = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/categoryList', { params: reqOpts });
    };
    /**
     * Handles 'updateCategory' function. Calls put method with specific api address
     * along its param.
     *
     * @param params from model.
     */
    CategoriesService.prototype.updateCategory = function (params) {
        return this.http.put(this.url + '/update-category/' + params.categoryId, params);
    };
    /**
     * Handles 'delete' function. Calls delete method with specific api address
     * along its param.
     *
     * @param params from CategorydeleteForm
     */
    CategoriesService.prototype.delete = function (params) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: { categoryId: params.categoryId }
        };
        return this.http.delete(this.url + '/delete-category/' + params.categoryId, httpOptions);
    };
    /**
     * Handles 'categoryList' function. Calls get method with specific api address
     * along its param.
     *
     * @param params from CategorylistForm
     */
    CategoriesService.prototype.categoryList = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/categoryList', { params: reqOpts });
    };
    CategoriesService.prototype.subcategoryList = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/categoryList', { params: reqOpts });
    };
    /**
     * Handles 'addCategory' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from CategoryForm
     */
    CategoriesService.prototype.addCategory = function (param) {
        return this.http.post(this.url + '/add-category', param);
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CategoriesService);
    return CategoriesService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/core/admin/catalog/category/effects/categories.effect.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/catalog/category/effects/categories.effect.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesEffect", function() { return CategoriesEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _action_categories_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/categories.action */ "./src/core/admin/catalog/category/action/categories.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../categories.service */ "./src/core/admin/catalog/category/categories.service.ts");
/* harmony import */ var _models_categorydelete_response_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/categorydelete.response.model */ "./src/core/admin/catalog/category/models/categorydelete.response.model.ts");
/* harmony import */ var _models_categoryupdate_response_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/categoryupdate.response.model */ "./src/core/admin/catalog/category/models/categoryupdate.response.model.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */







// service

// model


var CategoriesEffect = /** @class */ (function () {
    function CategoriesEffect(action$, categoriesService) {
        var _this = this;
        this.action$ = action$;
        this.categoriesService = categoriesService;
        // CATEGORY LIST
        this.docatlists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_categories_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_CATEGORIES_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.categoriesService.categoryList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (list) { return [new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoCategorieslistSuccessAction"](list)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoCategorieslistFailAction"](error)); }));
        }));
        this.dosubcatlists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_categories_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_SUB_CATEGORIES_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.categoriesService.subcategoryList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (list) { return [new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoSubCategorieslistSuccessAction"](list)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoCategorieslistFailAction"](error)); }));
        }));
        this.doDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_categories_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_DELETE_CATEGORIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.categoriesService.delete(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [
                new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoDeleteCategoriesSuccessAction"](new _models_categorydelete_response_model__WEBPACK_IMPORTED_MODULE_8__["CategorydeleteResponseModel"](user))
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoCatcountFailAction"](new _models_categorydelete_response_model__WEBPACK_IMPORTED_MODULE_8__["CategorydeleteResponseModel"](error)));
            }));
        }));
        this.doaddCategory$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_categories_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_ADDCATEGORIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.categoriesService.addCategory(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (add) {
                return [new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoAddCategoriesSuccessAction"](add)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoAddCategoriesFailAction"](error)); }));
        }));
        this.doupdateCategory$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_categories_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_UPDATECATEGORIES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.categoriesService.updateCategory(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                return [new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoUpdateCategoriesSuccessAction"](user)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoUpdateCategoriesFailAction"](new _models_categoryupdate_response_model__WEBPACK_IMPORTED_MODULE_9__["CategoryupdateResponseModel"](error)));
            }));
        }));
        // category pagination
        this.docount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_categories_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_CATEGORIESCOUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.categoriesService.categoryListPagination(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoCategoriescountSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_categories_action__WEBPACK_IMPORTED_MODULE_5__["DoCatcountFailAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CategoriesEffect.prototype, "docatlists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CategoriesEffect.prototype, "dosubcatlists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CategoriesEffect.prototype, "doDelete$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CategoriesEffect.prototype, "doaddCategory$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CategoriesEffect.prototype, "doupdateCategory$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CategoriesEffect.prototype, "docount$", void 0);
    CategoriesEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"]])
    ], CategoriesEffect);
    return CategoriesEffect;
}());



/***/ }),

/***/ "./src/core/admin/catalog/category/models/categorydelete.response.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/core/admin/catalog/category/models/categorydelete.response.model.ts ***!
  \*********************************************************************************/
/*! exports provided: CategorydeleteResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorydeleteResponseModel", function() { return CategorydeleteResponseModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var CategorydeleteResponseModel = /** @class */ (function () {
    function CategorydeleteResponseModel(CategorydeleteResponse) {
        this.user = {};
        this.user = CategorydeleteResponse || '';
    }
    return CategorydeleteResponseModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/category/models/categoryupdate.response.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/core/admin/catalog/category/models/categoryupdate.response.model.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryupdateResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryupdateResponseModel", function() { return CategoryupdateResponseModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var CategoryupdateResponseModel = /** @class */ (function () {
    function CategoryupdateResponseModel(categoryupdateFormResponse) {
        this.user = {};
        this.user = categoryupdateFormResponse || '';
    }
    return CategoryupdateResponseModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/layout/effects/layout.effect.ts":
/*!****************************************************************!*\
  !*** ./src/core/admin/catalog/layout/effects/layout.effect.ts ***!
  \****************************************************************/
/*! exports provided: LayoutEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutEffects", function() { return LayoutEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _action_layout_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/layout.action */ "./src/core/admin/catalog/layout/action/layout.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout.service */ "./src/core/admin/catalog/layout/layout.service.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */








var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(action$, layoutService) {
        var _this = this;
        this.action$ = action$;
        this.layoutService = layoutService;
        this.doTotalProductListCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_layout_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_TOTAL_PRODUCT_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.layoutService.getProductListCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetTotalProductCountSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetTotalProductCountFailAction"](error));
            }));
        }));
        this.doActiveProductListCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_layout_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_ACTIVE_PRODUCT_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.layoutService.getProductListCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveProductCountSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetActiveProductCountFailAction"](error));
            }));
        }));
        this.doInActiveProductListCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_layout_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_INACTIVE_PRODUCT_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.layoutService.getProductListCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetInActiveProductCountSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetInActiveProductCountFailAction"](error));
            }));
        }));
        this.doTotalCatagoryListCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_layout_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_TOTAL_CATAGORY_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.layoutService.getCatagoryListCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetTotalCatagoryCountSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_layout_action__WEBPACK_IMPORTED_MODULE_5__["GetTotalCatagoryCountFailAction"](error));
            }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LayoutEffects.prototype, "doTotalProductListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LayoutEffects.prototype, "doActiveProductListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LayoutEffects.prototype, "doInActiveProductListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], LayoutEffects.prototype, "doTotalCatagoryListCount$", void 0);
    LayoutEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]])
    ], LayoutEffects);
    return LayoutEffects;
}());



/***/ }),

/***/ "./src/core/admin/catalog/layout/layout.service.ts":
/*!*********************************************************!*\
  !*** ./src/core/admin/catalog/layout/layout.service.ts ***!
  \*********************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/admin/providers/api/api.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var LayoutService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayoutService, _super);
    function LayoutService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        // private URL = this.configService.get('api').baseUrl;
        _this.URL = _this.getBaseUrl();
        return _this;
    }
    /* get product list count api*/
    LayoutService.prototype.getProductListCount = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/product/productlist', reqOpts);
    };
    /* get order list count api*/
    LayoutService.prototype.getCatagoryListCount = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/categorylist', reqOpts);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LayoutService);
    return LayoutService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/core/admin/catalog/product/product-effect/product.effect.ts":
/*!*************************************************************************!*\
  !*** ./src/core/admin/catalog/product/product-effect/product.effect.ts ***!
  \*************************************************************************/
/*! exports provided: ProductEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEffect", function() { return ProductEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-action/product.action */ "./src/core/admin/catalog/product/product-action/product.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product.service */ "./src/core/admin/catalog/product/product.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// effects

// store



// actions


// service




var ProductEffect = /** @class */ (function () {
    function ProductEffect(action$, appState, service, toastr) {
        var _this = this;
        this.action$ = action$;
        this.appState = appState;
        this.service = service;
        this.toastr = toastr;
        // Product list
        this.doprodlists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_PRODUCT_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (product) { return [
                new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["GetProductlistSuccessAction"](product)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["GetProductlistFailAction"](error)); }));
        }));
        // Product list count
        this.doprodlistscount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_PRODUCT_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (count) { return new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["GetProductCountSuccessAction"](count); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["GetProductCountFailAction"](error)); }));
        }));
        // Product delete
        this.doProductDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_PRODUCT_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productDelete(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductDeleteSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductDeleteFailAction"](error)); }));
        }));
        // Product add
        this.doProductAdd$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_PRODUCT_ADD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productAdd(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductAddSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductAddFailAction"](error)); }));
        }));
        // Product update
        this.doProductUpdate$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_PRODUCT_UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productUpdate(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductUpdateSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductUpdateFailAction"](error)); }));
        }));
        // Product detail
        this.doDetail$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_PRODUCT_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productDetail(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["GetProductDetailSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["GetProductDetailFail"](error)); }));
        }));
        // Product Today Deals
        this.doProductTodayDeals$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_TODAY_DEALS_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productTodayDeals(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductTodayDealSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductTodayDealFail"](error)); }));
        }));
        // getting option value
        this.DoGettingOptionValue$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_GETTING_OPTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.gettingOptionApi(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoGettingOptionSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoGettingOptionFail"](error)); }));
        }));
        // Product Bulk Delete
        this.doProductBulkDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_PRODUCT_BULK_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productBulkDelete(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductBulkDeleteSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductBulkDeleteFail"](error)); }));
        }));
        // Product Excel
        this.doProductExcel$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_PRODUCT_EXCEL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (state) {
            return _this.service.productExcel(state).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (data) {
                var filename = 'ProductExcel_' + Date.now() + '.xlsx';
                var blob = new Blob([data], { type: 'text/xlsx' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(blob, filename);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) { return [new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductExcelSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_6__["DoProductExcelFail"](error)); }));
        }));
    }
    /**
     * Shows error notification with given title and message
     *
     * @params message
     */
    ProductEffect.prototype.showNotificationError = function (message) {
        this.toastr.errorToastr(message);
    };
    ProductEffect.prototype.showSuccess = function (message) {
        this.toastr.successToastr(message);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doprodlists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doprodlistscount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doProductDelete$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doProductAdd$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doProductUpdate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doDetail$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doProductTodayDeals$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "DoGettingOptionValue$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doProductBulkDelete$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProductEffect.prototype, "doProductExcel$", void 0);
    ProductEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]])
    ], ProductEffect);
    return ProductEffect;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/catalog.module.ts":
/*!***********************************************************!*\
  !*** ./src/theme/default/admin/catalog/catalog.module.ts ***!
  \***********************************************************/
/*! exports provided: CatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogModule", function() { return CatalogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/theme/default/admin/catalog/components/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/theme/default/admin/catalog/components/header/header.component.ts");
/* harmony import */ var _catalog_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalog.routing */ "./src/theme/default/admin/catalog/catalog.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/admin/catalog/brand/brandApiClientservice */ "./src/core/admin/catalog/brand/brandApiClientservice.ts");
/* harmony import */ var _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/admin/catalog/brand/brand.sandbox */ "./src/core/admin/catalog/brand/brand.sandbox.ts");
/* harmony import */ var _core_admin_catalog_brand_effects_brand_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/admin/catalog/brand/effects/brand.effect */ "./src/core/admin/catalog/brand/effects/brand.effect.ts");
/* harmony import */ var _core_admin_catalog_layout_layout_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../core/admin/catalog/layout/layout.service */ "./src/core/admin/catalog/layout/layout.service.ts");
/* harmony import */ var _core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/admin/catalog/layout/layout.sandbox */ "./src/core/admin/catalog/layout/layout.sandbox.ts");
/* harmony import */ var _core_admin_catalog_layout_effects_layout_effect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../core/admin/catalog/layout/effects/layout.effect */ "./src/core/admin/catalog/layout/effects/layout.effect.ts");
/* harmony import */ var _core_admin_catalog_category_effects_categories_effect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../core/admin/catalog/category/effects/categories.effect */ "./src/core/admin/catalog/category/effects/categories.effect.ts");
/* harmony import */ var _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../core/admin/catalog/category/categories.service */ "./src/core/admin/catalog/category/categories.service.ts");
/* harmony import */ var _core_admin_catalog_product_product_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../core/admin/catalog/product/product.service */ "./src/core/admin/catalog/product/product.service.ts");
/* harmony import */ var _core_admin_catalog_product_product_effect_product_effect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../core/admin/catalog/product/product-effect/product.effect */ "./src/core/admin/catalog/product/product-effect/product.effect.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




// components


// Routing Module

// Shared Module


// Store Actions











var CatalogModule = /** @class */ (function () {
    function CatalogModule() {
    }
    CatalogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["CatalogLayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["CatalogHeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _catalog_routing__WEBPACK_IMPORTED_MODULE_7__["CatalogRoutingModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([
                    _core_admin_catalog_layout_effects_layout_effect__WEBPACK_IMPORTED_MODULE_16__["LayoutEffects"],
                    _core_admin_catalog_category_effects_categories_effect__WEBPACK_IMPORTED_MODULE_17__["CategoriesEffect"],
                    _core_admin_catalog_brand_effects_brand_effect__WEBPACK_IMPORTED_MODULE_13__["BrandEffects"],
                    _core_admin_catalog_product_product_effect_product_effect__WEBPACK_IMPORTED_MODULE_20__["ProductEffect"]
                ]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
            ],
            providers: [
                _core_admin_catalog_layout_layout_service__WEBPACK_IMPORTED_MODULE_14__["LayoutService"],
                _core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_15__["LayoutsSandbox"],
                _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_11__["BrandApiClient"],
                _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_12__["BrandSandbox"],
                _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_18__["CategoriesService"],
                _core_admin_catalog_product_product_service__WEBPACK_IMPORTED_MODULE_19__["ProductService"]
            ],
            bootstrap: [],
            entryComponents: []
        })
    ], CatalogModule);
    return CatalogModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/catalog.routing.ts":
/*!************************************************************!*\
  !*** ./src/theme/default/admin/catalog/catalog.routing.ts ***!
  \************************************************************/
/*! exports provided: CatalogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogRoutingModule", function() { return CatalogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/theme/default/admin/catalog/components/layout/layout.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component

var catalogRoutes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["CatalogLayoutComponent"],
        children: [
            {
                path: 'product',
                loadChildren: './components/product/product.module#ProductModule'
            },
            {
                path: 'categories',
                loadChildren: './components/categories/categories.module#CategoriesModule'
            },
            {
                path: 'brand',
                loadChildren: './components/brand/brand.module#BrandModule'
            }
        ]
    }
];
var CatalogRoutingModule = /** @class */ (function () {
    function CatalogRoutingModule() {
    }
    CatalogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(catalogRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CatalogRoutingModule);
    return CatalogRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/header/header.component.html":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/header/header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subtoolbar catalogtoolbar\">\r\n    <div class=\"sub-nav-menu\">\r\n        <a href=\"javascript:void(0)\" [routerLink]=\"['/catalog/product']\" [routerLinkActive]=\"'active'\">\r\n            <img src=\"assets/img/products-ico.png\"> Products\r\n        </a>\r\n        <a href=\"javascript:void(0)\" [routerLink]=\"['/catalog/categories']\" [routerLinkActive]=\"'active'\">\r\n            <img src=\"assets/img/categories-ico.png\"> Categories\r\n        </a>\r\n        <a href=\"javascript:void(0)\" [routerLink]=\"['/catalog/brand']\" [routerLinkActive]=\"'active'\">\r\n            <img src=\"assets/img/brand-ico.png\"> Brands\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/header/header.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/header/header.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/header/header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/header/header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CatalogHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogHeaderComponent", function() { return CatalogHeaderComponent; });
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


var CatalogHeaderComponent = /** @class */ (function () {
    function CatalogHeaderComponent(titleService) {
        this.titleService = titleService;
    }
    CatalogHeaderComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Catalog');
    };
    CatalogHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/theme/default/admin/catalog/components/header/header.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/theme/default/admin/catalog/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], CatalogHeaderComponent);
    return CatalogHeaderComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/layout/layout.component.html":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/layout/layout.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-catalog-header></app-catalog-header>\r\n<div class=\"row products-section\">\r\n    <div class=\"col-12 layout-mar\">\r\n        <div class=\"card\">\r\n            <div class=\"product-ts-left\">\r\n                <ul>\r\n                    <li>\r\n                        <p>Total Products</p>\r\n                        <h3>{{layoutSandbox.totalProductCount$ | async}}\r\n                        </h3>\r\n                    </li>\r\n                    <li>\r\n                        <p>Active Products</p>\r\n                        <h3>{{layoutSandbox.activeProductCount$ | async}}\r\n                        </h3>\r\n                    </li>\r\n                    <li>\r\n                        <p>In-Active Products</p>\r\n                        <h3>{{layoutSandbox.inActiveProductCount$ | async}}\r\n                        </h3>\r\n                    </li>\r\n                    <li>\r\n                        <p>Total Categories</p>\r\n                        <h3>{{layoutSandbox.totalCatagoryCount$ | async}}\r\n                        </h3>\r\n                    </li>\r\n                    <li>\r\n                        <p>Total Brands</p>\r\n                        <h3>{{brandSandbox.getManufacturercount$|async}}\r\n                        </h3>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!--Left-->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/layout/layout.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/layout/layout.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/layout/layout.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/layout/layout.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CatalogLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogLayoutComponent", function() { return CatalogLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/layout/layout.sandbox */ "./src/core/admin/catalog/layout/layout.sandbox.ts");
/* harmony import */ var _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/brand/brand.sandbox */ "./src/core/admin/catalog/brand/brand.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var CatalogLayoutComponent = /** @class */ (function () {
    function CatalogLayoutComponent(layoutSandbox, brandSandbox) {
        this.layoutSandbox = layoutSandbox;
        this.brandSandbox = brandSandbox;
    }
    /**
     * Handles form 'ngOnInit' event. calls layoutSandbox(getProductListCount,getActiveProductListCount
     *getInActiveProductListCount,getCatagoryListCount,getFeaturedProductListCount).
     *
     * @param count default value.
     * @param status default value.
     */
    CatalogLayoutComponent.prototype.ngOnInit = function () {
        this.layoutSandbox.getProductListCount({ count: true });
        this.layoutSandbox.getActiveProductListCount({ status: '1', count: true });
        this.layoutSandbox.getInActiveProductListCount({
            status: '0',
            count: true
        });
        this.layoutSandbox.getCatagoryListCount({ count: true });
        this.brandSandbox.manufacturerCountList({ count: true });
    };
    CatalogLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/theme/default/admin/catalog/components/layout/layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/theme/default/admin/catalog/components/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_2__["LayoutsSandbox"],
            _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_3__["BrandSandbox"]])
    ], CatalogLayoutComponent);
    return CatalogLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=catalog-catalog-module.js.map