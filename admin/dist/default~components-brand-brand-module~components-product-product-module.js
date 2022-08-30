(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-brand-brand-module~components-product-product-module"],{

/***/ "./src/core/admin/catalog/product/product-model/Product-add.model.ts":
/*!***************************************************************************!*\
  !*** ./src/core/admin/catalog/product/product-model/Product-add.model.ts ***!
  \***************************************************************************/
/*! exports provided: ProductAddModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddModel", function() { return ProductAddModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ProductAddModel = /** @class */ (function () {
    function ProductAddModel(fromProductAdd) {
        this.productName = fromProductAdd.productName || '';
        this.productDescription = fromProductAdd.productDescription || '';
        this.upc = fromProductAdd.upc || '';
        this.sku = fromProductAdd.sku || '';
        this.image = fromProductAdd.image || '';
        this.metaTagTitle = fromProductAdd.metaTagTitle || '';
        this.categoryId = fromProductAdd.categoryId || '';
        this.model = fromProductAdd.model || '';
        this.location = fromProductAdd.location || '';
        this.price = fromProductAdd.price || '';
        this.regular = fromProductAdd.regular || '';
        this.outOfStockStatus = fromProductAdd.outOfStockStatus || '';
        this.requiredShipping = fromProductAdd.requiredShipping || '';
        this.dateAvailable = fromProductAdd.dateAvailable || '';
        this.status = fromProductAdd.status || 0;
        this.sortOrder = fromProductAdd.sortOrder || 0;
        this.condition = fromProductAdd.condition || '';
    }
    return ProductAddModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/product/product-model/Product-list.model.ts":
/*!****************************************************************************!*\
  !*** ./src/core/admin/catalog/product/product-model/Product-list.model.ts ***!
  \****************************************************************************/
/*! exports provided: ProductListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModel", function() { return ProductListModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ProductListModel = /** @class */ (function () {
    function ProductListModel(fromProductList) {
        this.limit = fromProductList.limit || 0;
        this.offset = fromProductList.offset || 0;
        this.keyword = fromProductList.keyword || '';
        this.sku = fromProductList.sku || '';
        this.status = fromProductList.status || '';
        this.price = fromProductList.price || '';
        this.regular = fromProductList.price || '';
        this.count = fromProductList.count || false;
    }
    return ProductListModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/product/product-model/Product-update.model.ts":
/*!******************************************************************************!*\
  !*** ./src/core/admin/catalog/product/product-model/Product-update.model.ts ***!
  \******************************************************************************/
/*! exports provided: ProductUpdateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateModel", function() { return ProductUpdateModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ProductUpdateModel = /** @class */ (function () {
    function ProductUpdateModel(ProdupdateForm) {
        this.productName = ProdupdateForm.productName || '';
        this.productDescription = ProdupdateForm.productDescription || '';
        this.upc = ProdupdateForm.upc || '';
        this.sku = ProdupdateForm.sku || '';
        this.image = ProdupdateForm.image || '';
        this.metaTagTitle = ProdupdateForm.metaTagTitle || '';
        this.categoryId = ProdupdateForm.categoryId || '';
        this.model = ProdupdateForm.model || 0;
        this.location = ProdupdateForm.location || '';
        this.price = ProdupdateForm.price || '';
        this.regular = ProdupdateForm.regular || '';
        this.outOfStockStatus = ProdupdateForm.outOfStockStatus || '';
        this.requiredShipping = ProdupdateForm.requiredShipping || '';
        this.dateAvailable = ProdupdateForm.dateAvailable || '';
        this.status = ProdupdateForm.status || 0;
        this.sortOrder = ProdupdateForm.sortOrder || 0;
        this.productId = ProdupdateForm.productId || 0;
        this.condition = ProdupdateForm.condition || '';
        this.productDiscount = ProdupdateForm.productDiscount || [];
    }
    return ProductUpdateModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/product/product-model/detail.model.ts":
/*!**********************************************************************!*\
  !*** ./src/core/admin/catalog/product/product-model/detail.model.ts ***!
  \**********************************************************************/
/*! exports provided: DetailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModel", function() { return DetailModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var DetailModel = /** @class */ (function () {
    function DetailModel(DetailForm) {
        this.Id = DetailForm.Id || '';
    }
    return DetailModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/product/product-model/product-delete.model.ts":
/*!******************************************************************************!*\
  !*** ./src/core/admin/catalog/product/product-model/product-delete.model.ts ***!
  \******************************************************************************/
/*! exports provided: ProductDeleteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteModel", function() { return ProductDeleteModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ProductDeleteModel = /** @class */ (function () {
    function ProductDeleteModel(productdeleteForm) {
        this.productId = productdeleteForm.productId || '';
    }
    return ProductDeleteModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/product/product-reducer/product.selector.ts":
/*!****************************************************************************!*\
  !*** ./src/core/admin/catalog/product/product-reducer/product.selector.ts ***!
  \****************************************************************************/
/*! exports provided: getProdState, getProductList, ProductListLoading, ProductListLoaded, ProductListFailed, getProductCount, ProductCountLoading, ProductCountLoaded, ProductCountFailed, getProductDelete, ProductDeleteLoading, ProductDeleteLoaded, ProductDeleteFailed, getProductAdd, ProductAddLoading, ProductAddLoaded, ProductAddFailed, getProductAddDetail, ProductDetailLoading, ProductDetailLoaded, ProductDetailFailed, getProductUpdate, getProductDetails, ProductUpdateLoading, ProductUpdateLoaded, ProductUpdateFailed, gettingOptionList, gettingOptionListLoading, gettingOptionListLoaded, gettingOptionListFailed, getProdBulkDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProdState", function() { return getProdState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductList", function() { return getProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListLoading", function() { return ProductListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListLoaded", function() { return ProductListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListFailed", function() { return ProductListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCount", function() { return getProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCountLoading", function() { return ProductCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCountLoaded", function() { return ProductCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCountFailed", function() { return ProductCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDelete", function() { return getProductDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteLoading", function() { return ProductDeleteLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteLoaded", function() { return ProductDeleteLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeleteFailed", function() { return ProductDeleteFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductAdd", function() { return getProductAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddLoading", function() { return ProductAddLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddLoaded", function() { return ProductAddLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddFailed", function() { return ProductAddFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductAddDetail", function() { return getProductAddDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailLoading", function() { return ProductDetailLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailLoaded", function() { return ProductDetailLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailFailed", function() { return ProductDetailFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductUpdate", function() { return getProductUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetails", function() { return getProductDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateLoading", function() { return ProductUpdateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateLoaded", function() { return ProductUpdateLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUpdateFailed", function() { return ProductUpdateFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingOptionList", function() { return gettingOptionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingOptionListLoading", function() { return gettingOptionListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingOptionListLoaded", function() { return gettingOptionListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingOptionListFailed", function() { return gettingOptionListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProdBulkDelete", function() { return getProdBulkDelete; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.reducer */ "./src/core/admin/catalog/product/product-reducer/product.reducer.ts");
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
var getProdState = function (state) { return state.product; };
// product list action
var getProductList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductList"]);
var ProductListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductListLoading"]);
var ProductListLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductListLoaded"]);
var ProductListFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductListFailed"]);
// product count action
var getProductCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCount"]);
var ProductCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCountLoading"]);
var ProductCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCountLoaded"]);
var ProductCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCountFailed"]);
// product delete action
var getProductDelete = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDelete"]);
var ProductDeleteLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDeleteLoading"]);
var ProductDeleteLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDeleteLoaded"]);
var ProductDeleteFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDeleteFailed"]);
// product add action
var getProductAdd = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductAdd"]);
var ProductAddLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductAddLoading"]);
var ProductAddLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductAddLoaded"]);
var ProductAddFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductAddFailed"]);
// product Detail action
var getProductAddDetail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductAddDetail"]);
var ProductDetailLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProducDetailLoading"]);
var ProductDetailLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDetailLoaded"]);
var ProductDetailFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDetailFailed"]);
// product update action
var getProductUpdate = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductUpdate"]);
var getProductDetails = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDetail"]);
var ProductUpdateLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductUpdateLoading"]);
var ProductUpdateLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductUpdateLoaded"]);
var ProductUpdateFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductUpdateFailed"]);
// getting option list
var gettingOptionList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["gettingOptionList"]);
var gettingOptionListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["gettingOptionListLoading"]);
var gettingOptionListLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["gettingOptionListLoaded"]);
var gettingOptionListFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["gettingOptionListFailed"]);
// product Bulk Delete
var getProdBulkDelete = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProdState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductBulkDelete"]);


/***/ }),

/***/ "./src/core/admin/catalog/product/product.sandbox.ts":
/*!***********************************************************!*\
  !*** ./src/core/admin/catalog/product/product.sandbox.ts ***!
  \***********************************************************/
/*! exports provided: ProductSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSandbox", function() { return ProductSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-action/product.action */ "./src/core/admin/catalog/product/product-action/product.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-reducer/product.selector */ "./src/core/admin/catalog/product/product-reducer/product.selector.ts");
/* harmony import */ var _product_model_Product_list_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-model/Product-list.model */ "./src/core/admin/catalog/product/product-model/Product-list.model.ts");
/* harmony import */ var _product_model_product_delete_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-model/product-delete.model */ "./src/core/admin/catalog/product/product-model/product-delete.model.ts");
/* harmony import */ var _product_model_Product_add_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-model/Product-add.model */ "./src/core/admin/catalog/product/product-model/Product-add.model.ts");
/* harmony import */ var _product_model_Product_update_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-model/Product-update.model */ "./src/core/admin/catalog/product/product-model/Product-update.model.ts");
/* harmony import */ var _product_model_detail_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-model/detail.model */ "./src/core/admin/catalog/product/product-model/detail.model.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// store

// actions

// router

// notifications







var ProductSandbox = /** @class */ (function () {
    function ProductSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        // console.log()
        this.productList$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["getProductList"]);
        this.productCount$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["getProductCount"]);
        this.deletedProduct$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["getProductDelete"]);
        this.productAdd$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["getProductAdd"]);
        this.productAddDetail$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["getProductAddDetail"]);
        this.productUpdate$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["getProductUpdate"]);
        this.productDetails$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["getProductDetails"]);
        this.gettingOptionList$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["gettingOptionList"]);
        this.productDetailLoading$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductDetailLoading"]);
        this.productDetailLoaded$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductDetailLoaded"]);
        this.productDetailFailed$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductDetailFailed"]);
        this.productListLoading$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductListLoading"]);
        this.productListLoaded$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductListLoaded"]);
        this.productListFailed$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductListFailed"]);
        this.productDeleteLoading$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductDeleteLoading"]);
        this.productDeleteLoaded$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductDeleteLoaded"]);
        this.productDeleteFailed$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductDeleteFailed"]);
        this.productCountLoading$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductCountLoading"]);
        this.productCountLoaded$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductCountLoaded"]);
        this.productCountFailed$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductCountFailed"]);
        this.productAddLoading$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductAddLoading"]);
        this.productAddLoaded$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductAddLoaded"]);
        this.productAddFailed$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductAddFailed"]);
        this.productUpdateLoading$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductUpdateLoading"]);
        this.productUpdateLoaded$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductUpdateLoaded"]);
        this.productUpdateFailed$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["ProductUpdateFailed"]);
        this.gettingOptionListLoading$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["gettingOptionListLoading"]);
        this.gettingOptionListLoaded$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["gettingOptionListLoaded"]);
        this.gettingOptionListFailed$ = this.appState.select(_product_reducer_product_selector__WEBPACK_IMPORTED_MODULE_6__["gettingOptionListFailed"]);
        this.subscriptions = [];
        this.subscribe();
    }
    ProductSandbox.prototype.getProductList = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["GetProductlistAction"](new _product_model_Product_list_model__WEBPACK_IMPORTED_MODULE_7__["ProductListModel"](value)));
    };
    ProductSandbox.prototype.getProductCount = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["GetProductCountAction"](new _product_model_Product_list_model__WEBPACK_IMPORTED_MODULE_7__["ProductListModel"](value)));
    };
    ProductSandbox.prototype.doProductDelete = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DoProductDeleteAction"](new _product_model_product_delete_model__WEBPACK_IMPORTED_MODULE_8__["ProductDeleteModel"](value)));
    };
    ProductSandbox.prototype.doProductAdd = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DoProductAddAction"](new _product_model_Product_add_model__WEBPACK_IMPORTED_MODULE_9__["ProductAddModel"](value)));
    };
    ProductSandbox.prototype.doProductUpdate = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DoProductUpdateAction"](new _product_model_Product_update_model__WEBPACK_IMPORTED_MODULE_10__["ProductUpdateModel"](value)));
    };
    ProductSandbox.prototype.getProductDetail = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["GetProductDetailAction"](new _product_model_detail_model__WEBPACK_IMPORTED_MODULE_11__["DetailModel"](value)));
    };
    ProductSandbox.prototype.productTodayDeals = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DoProductTodayDealAction"](value));
    };
    ProductSandbox.prototype.gettinOptionValue = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DoGettingOption"](value));
    };
    // clear product details
    ProductSandbox.prototype.ClearProductDetails = function () {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DOClearProductDetails"]());
    };
    // Do Product Bulk Delete
    ProductSandbox.prototype.bulkDelete = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DoProductBulkDelete"](value));
    };
    // Do Product Excel
    ProductSandbox.prototype.productExcel = function (value) {
        this.appState.dispatch(new _product_action_product_action__WEBPACK_IMPORTED_MODULE_3__["DoProductExcel"](value));
    };
    ProductSandbox.prototype.subscribe = function () {
        var _this = this;
        this.productAdd$.subscribe(function (data) {
            if (data && data.status === 1) {
                _this.router.navigate(['/catalog/product']);
            }
        });
        this.productUpdate$.subscribe(function (data) {
            if (data && data['status'] === 1) {
                _this.router.navigate(['/catalog/product']);
            }
        });
    };
    ProductSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], ProductSandbox);
    return ProductSandbox;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-brand-brand-module~components-product-product-module.js.map