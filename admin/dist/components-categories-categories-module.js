(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-categories-categories-module"],{

/***/ "./src/core/admin/catalog/layout/layout.sandbox.ts":
/*!*********************************************************!*\
  !*** ./src/core/admin/catalog/layout/layout.sandbox.ts ***!
  \*********************************************************/
/*! exports provided: LayoutsSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsSandbox", function() { return LayoutsSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_layout_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/layout.action */ "./src/core/admin/catalog/layout/action/layout.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models */ "./src/core/admin/catalog/layout/models/index.ts");
/* harmony import */ var _reducer_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducer/selectors */ "./src/core/admin/catalog/layout/reducer/selectors.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */








var LayoutsSandbox = /** @class */ (function () {
    function LayoutsSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.totalProductCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalProductCount"]);
        this.totalProductCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalProductCountLoading"]);
        this.totalProductCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalProductCountLoaded"]);
        this.activeProductCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getActiveProductCount"]);
        this.activeProductCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getActiveProductCountLoading"]);
        this.activeProductCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getActiveProductCountLoaded"]);
        this.inActiveProductCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getInActiveProductCount"]);
        this.inActiveProductCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getInActiveProductCountLoading"]);
        this.inActiveProductCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getInActiveProductCountLoaded"]);
        this.totalCatagoryCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalCategoryCount"]);
        this.totalCatagoryCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalCategoryCountLoading"]);
        this.totalCatagoryCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_7__["getTotalCategoryCountLoaded"]);
        this.subscriptions = [];
        this.registerAuthEvents();
    }
    LayoutsSandbox.prototype.getProductListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_layout_action__WEBPACK_IMPORTED_MODULE_3__["GetTotalProductCountAction"](new _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"](params)));
    };
    LayoutsSandbox.prototype.getActiveProductListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_layout_action__WEBPACK_IMPORTED_MODULE_3__["GetActiveProductCountAction"](new _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"](params)));
    };
    LayoutsSandbox.prototype.getInActiveProductListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_layout_action__WEBPACK_IMPORTED_MODULE_3__["GetInActiveProductCountAction"](new _models__WEBPACK_IMPORTED_MODULE_6__["ProductModel"](params)));
    };
    LayoutsSandbox.prototype.getCatagoryListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_layout_action__WEBPACK_IMPORTED_MODULE_3__["GetTotalCatagoryCountAction"](new _models__WEBPACK_IMPORTED_MODULE_6__["CategoryModel"](params)));
    };
    /**
     * Registers events
     */
    LayoutsSandbox.prototype.registerAuthEvents = function () { };
    LayoutsSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], LayoutsSandbox);
    return LayoutsSandbox;
}());



/***/ }),

/***/ "./src/core/admin/catalog/layout/models/category.model.ts":
/*!****************************************************************!*\
  !*** ./src/core/admin/catalog/layout/models/category.model.ts ***!
  \****************************************************************/
/*! exports provided: CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return CategoryModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var CategoryModel = /** @class */ (function () {
    function CategoryModel(categorylistForm) {
        this.limit = categorylistForm.limit || '';
        this.offset = categorylistForm.offset || '';
        this.keyword = categorylistForm.keyword || '';
        this.sortOrder = categorylistForm.sortOrder || '';
        this.count = categorylistForm.count || false;
    }
    return CategoryModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/layout/models/index.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/catalog/layout/models/index.ts ***!
  \*******************************************************/
/*! exports provided: ProductModel, CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/core/admin/catalog/layout/models/product.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return _product_model__WEBPACK_IMPORTED_MODULE_0__["ProductModel"]; });

/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.model */ "./src/core/admin/catalog/layout/models/category.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return _category_model__WEBPACK_IMPORTED_MODULE_1__["CategoryModel"]; });

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




/***/ }),

/***/ "./src/core/admin/catalog/layout/models/product.model.ts":
/*!***************************************************************!*\
  !*** ./src/core/admin/catalog/layout/models/product.model.ts ***!
  \***************************************************************/
/*! exports provided: ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var ProductModel = /** @class */ (function () {
    function ProductModel(params) {
        this.limit = params.limit || 0;
        this.offset = params.offset || 0;
        this.keyword = params.keyword || '';
        this.sku = params.sku || '';
        this.status = params.status || '';
        this.price = params.price || '';
        this.count = params.count || false;
    }
    return ProductModel;
}());



/***/ }),

/***/ "./src/core/admin/catalog/layout/reducer/selectors.ts":
/*!************************************************************!*\
  !*** ./src/core/admin/catalog/layout/reducer/selectors.ts ***!
  \************************************************************/
/*! exports provided: getCatalogLayoutState, getTotalProductCount, getTotalProductCountLoaded, getTotalProductCountLoading, getTotalProductCountFailed, getActiveProductCount, getActiveProductCountLoaded, getActiveProductCountLoading, getActiveProductCountFailed, getInActiveProductCount, getInActiveProductCountLoaded, getInActiveProductCountLoading, getInActiveProductCountFailed, getTotalCategoryCount, getTotalCategoryCountLoaded, getTotalCategoryCountLoading, getTotalCategoryCountFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCatalogLayoutState", function() { return getCatalogLayoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductCount", function() { return getTotalProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductCountLoaded", function() { return getTotalProductCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductCountLoading", function() { return getTotalProductCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductCountFailed", function() { return getTotalProductCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveProductCount", function() { return getActiveProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveProductCountLoaded", function() { return getActiveProductCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveProductCountLoading", function() { return getActiveProductCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveProductCountFailed", function() { return getActiveProductCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveProductCount", function() { return getInActiveProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveProductCountLoaded", function() { return getInActiveProductCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveProductCountLoading", function() { return getInActiveProductCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInActiveProductCountFailed", function() { return getInActiveProductCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCategoryCount", function() { return getTotalCategoryCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCategoryCountLoaded", function() { return getTotalCategoryCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCategoryCountLoading", function() { return getTotalCategoryCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCategoryCountFailed", function() { return getTotalCategoryCountFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _layout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.reducer */ "./src/core/admin/catalog/layout/reducer/layout.reducer.ts");
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
var getCatalogLayoutState = function (state) { return state.catalogLayout; };
var getTotalProductCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalProductCount"]);
var getTotalProductCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalProductCountLoaded"]);
var getTotalProductCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalProductCountLoading"]);
var getTotalProductCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalProductCountFailed"]);
var getActiveProductCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveProductCount"]);
var getActiveProductCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveProductCountLoaded"]);
var getActiveProductCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveProductCountLoading"]);
var getActiveProductCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveProductCountFailed"]);
var getInActiveProductCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveProductCount"]);
var getInActiveProductCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveProductCountLoaded"]);
var getInActiveProductCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveProductCountLoading"]);
var getInActiveProductCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getInActiveProductCountFailed"]);
var getTotalCategoryCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCategoryCount"]);
var getTotalCategoryCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCategoryCountLoaded"]);
var getTotalCategoryCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCategoryCountLoading"]);
var getTotalCategoryCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCatalogLayoutState, _layout_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCategoryCountFailed"]);


/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/add/add.component.html":
/*!**************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/add/add.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--REACTIVE FORM-->\n<form novalidate (ngSubmits)=\"onSubmits(user.value)\" [formGroup]=\"user\">\n\n    <div class=\"row products-section\">\n        <div class=\"col-12\">\n            <div class=\"breadcrumbs-row noborder\">\n                <div class=\"bc-col\">\n                    <ul>\n                        <li><a href=\"javascript:void(0)\" [routerLink]=\"['/catalog/categories']\">Categories </a></li>\n                        <li>Add Category</li>\n                    </ul>\n                </div>\n                <div class=\"bc-col-btn ap-col-btn\">\n                    <button class=\"btn btn-save\" (click)=\"onSubmits(user)\"><img\n                            src=\"assets/img/tick-round-white.png\"> Save\n                    </button>\n                    <button class=\"btn btn-cancel\" [routerLink]=\"['/catalog/categories']\"><img\n                            src=\"assets/img/close-white-ico.png\">Cancel\n                    </button>\n                </div>\n            </div>\n        </div>\n        <!--Breadcrumbs-->\n    </div>\n\n    <div class=\"flex addproduct-wrap\">\n\n        <div class=\"card ap-general\">\n            <div class=\"ap-header\">\n                <span> 1 </span> General\n            </div>\n            <div class=\"flex ap-body\">\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Category Name <sup>*</sup></label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" formControlName=\"categoryName\" [ngClass]=\"{'validationcolor':user.get('categoryName').hasError('required') && user.get('categoryName').touched&&submittedValues==true}\">\n\n                        <div class=\"error\" *ngIf=\"(user.get('categoryName').hasError('required') && user.get('categoryName').touched&&submittedValues==true)\">\n                            Category Name is required\n                        </div>\n\n\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Meta Tag Title</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Meta Tag Title\" formControlName=\"categoryTitle\">\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>.Meta Tag Description </label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Meta Tag Description\" formControlName=\"categoryDescription\">\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label> Meta Tag Keyword </label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Meta Tag Keyword\" formControlName=\"categoryKeyword\">\n                    </div>\n                </div>\n\n                <!--Col-->\n            </div>\n        </div>\n        <!--General-->\n\n        <div class=\"card ap-general ap-info\">\n            <div class=\"ap-header\">\n                <span> 2 </span> More Information\n            </div>\n            <div class=\"flex ap-body\">\n                <ngb-tabset style=\"width:100%;\">\n                    <ngb-tab>\n                        <!--<ng-template ngbTabTitle>Data</ng-template>-->\n                        <ng-template ngbTabContent>\n                            <div class=\"flex data-row\">\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Parent</label>\n                                        <select class=\"custom-select col-12\" id=\"categoryComponent\" formControlName=\"categoryComponent\">\n                                                    <option value=''>- -Select- -</option>\n                                                    <option selected *ngFor=\"let arr of sandbox.getCategoriesList$ | async\"\n                                                            value={{arr.categoryId}}>{{arr.name}}\n                                                    </option>\n                                                </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"data-col\" style=\"margin-left: 3%\">\n                                    <div class=\"form-group\">\n                                        <label>Sort Order<sup>*</sup></label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Sort Order\" formControlName=\"categorySortOrder\" appOnlyNumber [ngClass]=\"{'validationcolor':user.get('categorySortOrder').hasError('required') && user.get('categorySortOrder').touched&&submittedValues==true}\">\n                                        <div class=\"error\" *ngIf=\"(user.get('categorySortOrder').hasError('required') && user.get('categorySortOrder').touched&&submittedValues==true)\">\n                                            Sort Order is required\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"ap-body-col\">\n                                    <div class=\"form-group\">\n                                        <label> Status<sup>*</sup></label>\n                                        <select class=\"form-control custom-select\" formControlName=\"status\" placeholder=\"status\" [ngClass]=\"{'validationcolor':user.get('status').hasError('required') && user.get('status').touched&&submittedValues==true}\">\n                                            <option value=''>- -Select Status- -</option>\n                                            <option value=\"1\">Enabled</option>\n                                            <option value=\"0\">Disabled</option>\n                                        </select>\n                                        <div class=\"error\" *ngIf=\"(user.get('status').hasError('required') && user.get('status').touched&&submittedValues==true)\">\n                                            Status is required\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n            </div>\n        </div>\n        <!--More Information-->\n    </div>\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/add/add.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/add/add.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n.dark-modal .modal-content {\n  background-color: #009efb;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #5cb3fd;\n}\n.image-manager .modal-dialog {\n  max-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBRUE7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0FDQUo7QURHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURHQTtFQUNJLHlCQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTE9HSU4gVkFMSURBVElPTiovXG5cbi52YWxpZGF0aW9uY29sb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhcmstbW9kYWwgLmNsb3NlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5saWdodC1ibHVlLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuXG4uaW1hZ2UtbWFuYWdlciAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn0iLCIvKiBMT0dJTiBWQUxJREFUSU9OKi9cbi52YWxpZGF0aW9uY29sb3Ige1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLW1vZGFsIC5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuXG4uaW1hZ2UtbWFuYWdlciAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG59Il19 */"
=======
<<<<<<< HEAD
module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n.dark-modal .modal-content {\n  background-color: #009efb;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #5cb3fd;\n}\n.image-manager .modal-dialog {\n  max-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBRUE7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0FDQUo7QURHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURHQTtFQUNJLHlCQUFBO0FDQUo7QURHQTtFQUNJLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTE9HSU4gVkFMSURBVElPTiovXG5cbi52YWxpZGF0aW9uY29sb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhcmstbW9kYWwgLmNsb3NlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5saWdodC1ibHVlLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuXG4uaW1hZ2UtbWFuYWdlciAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn0iLCIvKiBMT0dJTiBWQUxJREFUSU9OKi9cbi52YWxpZGF0aW9uY29sb3Ige1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLW1vZGFsIC5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuXG4uaW1hZ2UtbWFuYWdlciAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG59Il19 */"
=======
module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.error {\n  color: red;\n}\n.dark-modal .modal-content {\n  background-color: #009efb;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #5cb3fd;\n}\n.image-manager .modal-dialog {\n  max-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2FkZC9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcYWRtaW4vc3JjXFx0aGVtZVxcZGVmYXVsdFxcYWRtaW5cXGNhdGFsb2dcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXNcXGFkZFxcYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2NhdGVnb3JpZXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQUVBO0VBQ0ksaUJBQUE7QUNBSjtBREdBO0VBQ0ksVUFBQTtBQ0FKO0FER0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtBQ0FKO0FER0E7RUFDSSx5QkFBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2NhdGVnb3JpZXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExPR0lOIFZBTElEQVRJT04qL1xyXG5cclxuLnZhbGlkYXRpb25jb2xvciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDllZmI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXJrLW1vZGFsIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saWdodC1ibHVlLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2IzZmQ7XHJcbn1cclxuXHJcbi5pbWFnZS1tYW5hZ2VyIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbn0iLCIvKiBMT0dJTiBWQUxJREFUSU9OKi9cbi52YWxpZGF0aW9uY29sb3Ige1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZWZiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLW1vZGFsIC5jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiM2ZkO1xufVxuXG4uaW1hZ2UtbWFuYWdlciAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG59Il19 */"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68
>>>>>>> bddc8b8e85612d19f5f54b6fb37d1d37f08d4905

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/add/add.component.ts":
/*!************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/add/add.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.service */ "./src/core/admin/catalog/category/categories.service.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");

/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



// Store



var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(modalService, fb, configService, sandbox, categoryservice) {
        this.modalService = modalService;
        this.fb = fb;
        this.configService = configService;
        this.sandbox = sandbox;
        this.categoryservice = categoryservice;
        // Addcategories
        this.param = {};
        // validation condition
        this.submittedValues = false;
        this.valids = false;
    }
    // STYLE PURPOSE
    CategoryAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    CategoryAddComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService
            .open(content, { windowClass: 'image-manager' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CategoryAddComponent.prototype.open = function (content) {
        this.modalService.open(content, {
            windowClass: 'dark-modal,image-manager'
        });
    };
    CategoryAddComponent.prototype.getDismissReason = function (reason) {
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
    // Reactive form
    CategoryAddComponent.prototype.ngOnInit = function () {
        this.apiFordropDownlist();
        this.categoryName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.categoryTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.categoryDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.categoryKeyword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.categoryComponent = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.categorySortOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.user = this.fb.group({
            categoryName: this.categoryName,
            categoryTitle: this.categoryTitle,
            categoryDescription: this.categoryDescription,
            categoryKeyword: this.categoryKeyword,
            categoryComponent: this.categoryComponent,
            categorySortOrder: this.categorySortOrder,
            status: this.status
        });
        this.CategoryEditdata = this.categoryservice.getEditcategories();
        if (this.CategoryEditdata && this.CategoryEditdata !== ' ') {
            this.editCategoryList();
        }
    };
    // calling sandbox categorylist for dropdown list with empty param values
    CategoryAddComponent.prototype.apiFordropDownlist = function () {
        var param = {};
        param.limit = '';
        param.offset = '';
        param.keyword = '';
        param.sortOrder = '';
        this.sandbox.categorylist(param);
    };
    /**
     * Handles  'onSubmits' event. Calls sandbox  updatecategories if ((this.CategoryEditdata!=undefined)&&(this.CategoryEditdata!=' ')),
     * else calls sandbox addcategories function,if the form is valid.
     *
     * @param user entire form value
     * @param param storing entire form value
     *
     */
    CategoryAddComponent.prototype.onSubmits = function (user) {
        this.submittedValues = true;
        if (!this.user.valid) {
            this.validateAllFormFields(this.user);
            return;
        }
        this.param.name = user.value.categoryName;
        if (user.value.categoryComponent) {
            this.param.parentInt = user.value.categoryComponent;
        }
        else {
            this.param.parentInt = 0;
        }
        this.param.sortOrder = user.value.categorySortOrder;
        this.param.metaTagTitle = user.value.categoryTitle;
        this.param.metaTagDescription = user.value.categoryDescription;
        this.param.metaTagKeyword = user.value.categoryKeyword;
        this.param.status = user.value.status;
        if (this.CategoryEditdata !== undefined && this.CategoryEditdata !== ' ') {
            this.param.categoryId = this.CategoryEditdata.categoryId;
            this.sandbox.updatecategories(this.param);
        }
        else {
            this.sandbox.addcategories(this.param);
        }
    };
    // editing categories list in the reactive form
    CategoryAddComponent.prototype.editCategoryList = function () {
        this.user.controls['categoryName'].setValue(this.CategoryEditdata.name);
        this.user.controls['categoryTitle'].setValue(this.CategoryEditdata.metaTagTitle);
        this.user.controls['categoryDescription'].setValue(this.CategoryEditdata.metaTagDescription);
        this.user.controls['categoryKeyword'].setValue(this.CategoryEditdata.metaTagKeyword);
        this.user.controls['categorySortOrder'].setValue(this.CategoryEditdata.sortOrder);
        this.user.controls['categoryComponent'].setValue(this.CategoryEditdata.parentInt);
        this.status.setValue(this.CategoryEditdata.isActive);
    };
    // validation for formGroup
    CategoryAddComponent.prototype.validateAllFormFields = function (formGroup) {
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
    Object.defineProperty(CategoryAddComponent.prototype, "f", {
        // validation for reactive form
        get: function () {
            return this.user.controls;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filePath'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoryAddComponent.prototype, "filePath", void 0);
    CategoryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-catalog-category-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/catalog/components/categories/add/add.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/theme/default/admin/catalog/components/categories/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_4__["CategoriesSandbox"],
            _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/categories.module.ts":
/*!************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/categories.module.ts ***!
  \************************************************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/catalog/components/categories/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/catalog/components/categories/list/list.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter/filter.component */ "./src/theme/default/admin/catalog/components/categories/filter/filter.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _categories_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories.routing */ "./src/theme/default/admin/catalog/components/categories/categories.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _core_admin_shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../core/admin/shared/validation-directives/onlyNumber.module */ "./src/core/admin/shared/validation-directives/onlyNumber.module.ts");

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


var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_add_component__WEBPACK_IMPORTED_MODULE_5__["CategoryAddComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesListComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesFilterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _categories_routing__WEBPACK_IMPORTED_MODULE_10__["CategoriesRoutingModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
                _core_admin_shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_12__["NumberAcceptModule"]
            ],
            providers: [_core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_9__["CategoriesSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/categories.routing.ts":
/*!*************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/categories.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/catalog/components/categories/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/catalog/components/categories/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var categoriesRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["CategoryAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["CategoryAddComponent"]
    }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(categoriesRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/filter/filter.component.html":
/*!********************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/filter/filter.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"filterForm\">\n    <div class=\"form-group\">\n        <label> Category Name</label>\n        <select class=\"custom-select col-12\" id=\"inlineFormCustomSelect\" formControlName=\"categoryNameList\">\n            <option selected>Select</option>\n            <option *ngFor=\"let val of categoryListArray\">{{val.name}}</option>\n\n        </select>\n    </div>\n    <div class=\"form-group get\">\n        <label>Sort Order</label>\n        <select class=\"custom-select col-12\" id=\"\" formControlName=\"sortOrder\">\n            <option value=''>--Select--</option>\n            <option value=\"1\">Ascending</option>\n            <option value=\"2\">Descending</option>\n        </select>\n\n    </div>\n    <div class=\"text-right filter-btns\">\n        <a style=\"cursor: pointer\" (click)=\"reset()\">Reset</a>\n        <button type=\"submit\" (click)=\"filter()\" class=\"btn\">Apply Filters</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/filter/filter.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/filter/filter.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".btn {\n  background: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7QUNBRiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsdGVyIGJ0biBiYWNrZ3JvdW5kIGNvbG9yXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xufSIsIi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59Il19 */"
=======
<<<<<<< HEAD
module.exports = ".btn {\n  background: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7QUNBRiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsdGVyIGJ0biBiYWNrZ3JvdW5kIGNvbG9yXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xufSIsIi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59Il19 */"
=======
module.exports = ".btn {\n  background: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2ZpbHRlci9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcYWRtaW4vc3JjXFx0aGVtZVxcZGVmYXVsdFxcYWRtaW5cXGNhdGFsb2dcXGNvbXBvbmVudHNcXGNhdGVnb3JpZXNcXGZpbHRlclxcZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2NhdGVnb3JpZXMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFBO0FDQUYiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2NhdGVnb3JpZXMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZpbHRlciBidG4gYmFja2dyb3VuZCBjb2xvclxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XHJcbn0iLCIuYnRuIHtcbiAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xufSJdfQ== */"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68
>>>>>>> bddc8b8e85612d19f5f54b6fb37d1d37f08d4905

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/filter/filter.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/filter/filter.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CategoriesFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesFilterComponent", function() { return CategoriesFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var CategoriesFilterComponent = /** @class */ (function () {
    function CategoriesFilterComponent(categorySandbox, fb) {
        this.categorySandbox = categorySandbox;
        this.fb = fb;
        // categorylist purpose
        this.progressEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSize = 500;
        this.categoryListArray = [];
    }
    CategoriesFilterComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage');
        this.categoryList();
        this.initFilterForm();
    };
    // Formgroup
    CategoriesFilterComponent.prototype.initFilterForm = function () {
        this.filterForm = this.fb.group({
            categoryNameList: [''],
            sortOrder: ['']
        });
    };
    /**
     * Handles filter  . Calls categorySandbox categorylist function .
     *
     * @param param with value which is already assigned
     */
    CategoriesFilterComponent.prototype.filter = function () {
        var param = {};
        param.limit = this.pageSize;
        param.offset = '';
        param.keyword = this.filterForm.value.categoryNameList;
        param.sortOrder = this.filterForm.value.sortOrder;
        this.progressEmit.emit(param);
        this.categorySandbox.categorylist(param);
        param.limit = '';
        param.count = true;
        this.categorySandbox.categorycountdata(param);
    };
    // reset category list
    /**
     * Handles reset function  . Calls categorySandbox categorylist function .
     *
     * @param param with only one limit value .
     */
    CategoriesFilterComponent.prototype.reset = function () {
        this.filterForm.reset();
        var param = {};
        param.limit = this.pageSize;
        param.offset = '';
        param.keyword = '';
        this.progressEmit.emit(param);
        this.categorySandbox.categorylist(param);
    };
    CategoriesFilterComponent.prototype.categoryList = function () {
        var _this = this;
        this.categorySandbox.getCategoriesFilterList$.subscribe(function (data) {
            if (data && data[0]) {
                _this.categoryListArray = data;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesFilterComponent.prototype, "progressEmit", void 0);
    CategoriesFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-catalog-categories-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/theme/default/admin/catalog/components/categories/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/theme/default/admin/catalog/components/categories/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_2__["CategoriesSandbox"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CategoriesFilterComponent);
    return CategoriesFilterComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/list/list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/list/list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row products-section products-sub-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\"> Catalog </a></li>\n                    <li> Categories</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn\">\n                <button class=\"btn\" (click)=\"addCategories()\"><img\n                        src=\"assets/img/add-white-ico.png\">Add Category\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n    <div class=\"col-12\">\n        <div class=\"flex filter-row\">\n            <div class=\"filter-lft\">\n                <div class=\"toggle\">\n                    <p>Filters</p>\n                    <input class=\"tgl tgl-light\" id=\"cb1\" type=\"checkbox\" [checked]=\"true\" (change)=\"changeFilter($event)\" />\n                    <label class=\"tgl-btn\" for=\"cb1\"></label>\n                </div>\n                <div class=\"order-status\">\n                    <p>Status</p>\n                    <li style=\"list-style: none\">\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-right: 6px;vertical-align: middle;background-color: #32b643;\"></span>Active\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-left: 3px;margin-right: 7px;vertical-align: middle;background-color: #ea5738e6;\"></span>In Active\n\n                    </li>\n                </div>\n            </div>\n            <!--Lft-->\n        </div>\n    </div>\n</div>\n\n<div class=\"flex product-wrap example-full-width\">\n    <div *ngIf=\"buttonCheck == true\" class=\"filter-section\">\n        <div class=\"w3-container w3-animate-left\">\n            <app-spurt-catalog-categories-filter (progressEmit)=\"receiveProgress($event)\">\n            </app-spurt-catalog-categories-filter>\n        </div>\n    </div>\n    <!--Filter-->\n    <div class=\"product-table\" [ngClass]=\"{'changesize': buttonCheck == true }\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" width=\"5%\">\n                        </th>\n                        <th scope=\"col\" width=\"20%\">Category Name</th>\n                        <th scope=\"col\" width=\"37%\">Levels</th>\n                        <th scope=\"col\">Sort Order</th>\n                        <th scope=\"col\">Action</th>\n                        <th class=\"text-center\" scope=\"col\" width=\"100px\" class=\"text-center\">Status\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let data of categorySandbox.getCategoriesList$ | async;let i=index\">\n                        <th scope=\"row\">\n                        </th>\n                        <td>{{data.name}}</td>\n                        <td>{{data.level}}</td>\n                        <td>{{data.sortOrder}}</td>\n                        <td>\n                            <a href=\"javascript:void(0)\" (click)=\"editCategory(data)\"> <img src=\"assets/img/edit-ico.png\">\n                            </a>\n                            <i [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: 15px;\" class=\"fas fa-trash\">\n                            <ng-template #deleteContent>\n                                <div class=\"style\">\n                                    <div class=\"modal-header\">\n                                        <h6 class=\"modal-title\"\n                                            style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n                                    </div>\n\n                                    <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\"\n                                                data-dismiss=\"modal\">No\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-success\"\n                                                (click)=\"deleteCategory(data.categoryId)\"\n                                                data-dismiss=\"modal\">Yes\n                                        </button>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </i>\n                        </td>\n                        <td class=\"text-center\">\n                            <div *ngIf=\"data.isActive == 1\">\n                                <span style=\"width: 41px;background: #32b643; color: white;display: inline-block;padding: 1px 4px;\"><b>Active</b></span>\n\n                            </div>\n                            <div *ngIf=\"data.isActive == 0\">\n                                <span style=\"background: #ea5738e6; color: white;width: 63px;display: inline-block;padding: 1px 4px;\"><b>In-Active</b></span>\n\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"no_data\" *ngIf=\"(categorySandbox.getCategoriesList$ | async)?.length==0\">\n                <p>Items not found</p>\n            </div>\n            <mat-paginator [length]=\"categorySandbox.getCategoriesListCount$ | async\" [pageSize]=\"pageSize\" [pageIndex]=\"index\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\n            </mat-paginator>\n        </div>\n    </div>\n    <!--Table-->\n</div>\n<ng-template #deleteContent>\n    <div class=\"style\">\n        <div class=\"modal-header\">\n            <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n        </div>\n        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"deleteProduct($event)\" data-dismiss=\"modal\">Yes\n            </button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/list/list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/list/list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ed571f !important;\n  border: #ed571f !important;\n}\n\nth,\ntd {\n  height: 45px;\n}\n\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTs7RUFFSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbiAgICBib3JkZXI6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxudGgsXG50ZCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuLnRvZ2dsZSAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xuICB9IiwiLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xuICBib3JkZXI6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxudGgsXG50ZCB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnRvZ2dsZSAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbn0iXX0= */"
=======
<<<<<<< HEAD
module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ed571f !important;\n  border: #ed571f !important;\n}\n\nth,\ntd {\n  height: 45px;\n}\n\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTs7RUFFSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbiAgICBib3JkZXI6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxudGgsXG50ZCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuLnRvZ2dsZSAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xuICB9IiwiLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xuICBib3JkZXI6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxudGgsXG50ZCB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnRvZ2dsZSAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbn0iXX0= */"
=======
module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ed571f !important;\n  border: #ed571f !important;\n}\n\nth,\ntd {\n  height: 45px;\n}\n\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9jYXRlZ29yaWVzL2xpc3QvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXGFkbWluL3NyY1xcdGhlbWVcXGRlZmF1bHRcXGFkbWluXFxjYXRhbG9nXFxjb21wb25lbnRzXFxjYXRlZ29yaWVzXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2NhdGVnb3JpZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBOztFQUVJLFlBQUE7QUNDSjs7QURDQTtFQUNJLG9DQUFBO0FDRUoiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL2NhdGVnb3JpZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICNlZDU3MWYgIWltcG9ydGFudDtcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcclxuICB9IiwiLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xuICBib3JkZXI6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxudGgsXG50ZCB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnRvZ2dsZSAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbn0iXX0= */"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68
>>>>>>> bddc8b8e85612d19f5f54b6fb37d1d37f08d4905

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/categories/list/list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/categories/list/list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.service */ "./src/core/admin/catalog/category/categories.service.ts");
/* harmony import */ var _core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/layout/layout.sandbox */ "./src/core/admin/catalog/layout/layout.sandbox.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");

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




var CategoriesListComponent = /** @class */ (function () {
    function CategoriesListComponent(categoryService, categorySandbox, layoutSandbox, route) {
        this.categoryService = categoryService;
        this.categorySandbox = categorySandbox;
        this.layoutSandbox = layoutSandbox;
        this.route = route;
        // pagination
        this.categoryImage = [];
        this.offset = 0;
        this.pageSize = '10';
        this.keyword = '';
        // condition for filter component
        this.buttonCheck = true;
        // initially calling sandbox categorylist with empty data
    }
    // initially calling categories pagination
    CategoriesListComponent.prototype.ngOnInit = function () {
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].imageUrl;
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.categoryList(0, this.keyword);
        this.index = 0;
        this.categoriesPagination();
    };
    /**
     * Handles  'categorylist' event. Calls sandbox categorylist function .
     *
     * @param pageSize form pagination
     *  @param offset form offset
     */
    CategoriesListComponent.prototype.categoryList = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var param = {};
        param.limit = this.pageSize;
        param.offset = this.offset;
        param.keyword = this.keyword;
        param.sortOrder = this.sortOrder;
        this.categorySandbox.categorylist(param);
        this.layoutSandbox.getCatagoryListCount({ count: true });
    };
    /**
     * Handles  'categorycountdata' event. Calls categorySandbox categorycountdata function .
     *
     * @param pageSize form pagination
     *  @param offset form offset
     */
    CategoriesListComponent.prototype.categoriesPagination = function () {
        var param = {};
        param.limit = this.pageSize;
        param.offset = 0;
        param.keyword = '';
        param.count = 1;
        this.categorySandbox.categorycountdata(param);
    };
    /**
     * Handles  'editCategory' event. Calls categoryService setEditcategories function .
     *  @param data  form value
     */
    CategoriesListComponent.prototype.editCategory = function (data) {
        this.edit = data;
        this.categoryService.setEditcategories(this.edit);
        this.route.navigate(['/catalog/categories/add']);
    };
    /**
     * Handles  'addCategories' event. Calls categoryService setEditcategories function .
     *  @param edit  with empty value
     */
    CategoriesListComponent.prototype.addCategories = function () {
        this.edit = ' ';
        this.categoryService.setEditcategories(this.edit);
        this.route.navigate(['/catalog/categories/add']);
    };
    // shows the filter component
    CategoriesListComponent.prototype.changeFilter = function (event) {
        this.buttonCheck = event.target.checked;
    };
    /**
     * Handles  'onPageChange' event. Calls categorylist function .
     *  @param event  from material paginator value
     */
    CategoriesListComponent.prototype.onPageChange = function (event) {
        this.currentPage = event.offset;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        this.offset = event.pageSize * event.pageIndex;
        this.categoryList(this.offset, this.pageSize);
    };
    /**
     * Handles  'deleteCategory' event. Calls categorySandbox categorydelete function,
     * (Calls  categorylist function if (_delete)).
     *  @param id  from material paginator value.
     */
    CategoriesListComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        var params = {};
        params.categoryId = id;
        this.categorySandbox.categorydelete(params);
        this.categorySandbox.getCategoriesDelete$.subscribe(function (_delete) {
            if (_delete) {
                if (_delete.user.status === 1) {
                    _this.categoryList(_this.offset, _this.pageSize);
                    _this.categoriesPagination();
                }
            }
        });
    };
    // receive param from filter component .And calls categoriesPagination event
    CategoriesListComponent.prototype.receiveProgress = function (event) {
        this.index = 0;
        this.categoriesPagination();
        this.keyword = event.keyword;
        this.sortOrder = event.sortOrder;
    };
    CategoriesListComponent.prototype.categoryImageLoading = function (id) {
        this.categoryImage[id] = true;
    };
    CategoriesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-catalog-categories-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/catalog/components/categories/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/catalog/components/categories/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_3__["CategoriesSandbox"],
            _core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_5__["LayoutsSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoriesListComponent);
    return CategoriesListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-categories-categories-module.js.map