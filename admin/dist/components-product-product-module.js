(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-product-product-module"],{

/***/ "./src/core/admin/catalog/media/effects/media.effect.ts":
/*!**************************************************************!*\
  !*** ./src/core/admin/catalog/media/effects/media.effect.ts ***!
  \**************************************************************/
/*! exports provided: MediaEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaEffects", function() { return MediaEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _action_media_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/media.action */ "./src/core/admin/catalog/media/action/media.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media.service */ "./src/core/admin/catalog/media/media.service.ts");
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// effects



// actions


// service

var MediaEffects = /** @class */ (function () {
    function MediaEffects(action$, apiCli) {
        var _this = this;
        this.action$ = action$;
        this.apiCli = apiCli;
        // MEDIA UPLOAD
        this.domediaupload$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_media_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_MEDIAUPLOAD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.document(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoMediaUploadSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoMediaUploadFailAction"](error)); }));
        }));
        // MEDIA CREATE FOLDER
        this.domediafolder$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_media_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_MEDIACREATEFOLDER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.CreateFolder(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoMediaCreatefolderSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoMediaCreatefolderFailAction"](error));
            }));
        }));
        this.dobuckdelfile$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_media_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_DELETEFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.deleteImage(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoDeletefileSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoDeletefileFailAction"](error)); }));
        }));
        // buck del folder
        this.dobuckdelfolder$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_media_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_DELETEFOLDER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.deleteFolder(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoDeletefolderSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoDeletefolderFailAction"](error)); }));
        }));
        // BUCKETLIST
        this.dobucklists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_media_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_BUCKETLIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.bucketLists(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoBucketlistSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoBucketlistFailAction"](error)); }));
        }));
        // SEARCH FOLDER
        this.dosearchFolder$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_media_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DO_SEARCHFOLDER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.apiCli.searchFolder(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoBucketlistSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_media_action__WEBPACK_IMPORTED_MODULE_5__["DoSearchfolderFailAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MediaEffects.prototype, "domediaupload$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MediaEffects.prototype, "domediafolder$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MediaEffects.prototype, "dobuckdelfile$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MediaEffects.prototype, "dobuckdelfolder$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MediaEffects.prototype, "dobucklists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MediaEffects.prototype, "dosearchFolder$", void 0);
    MediaEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _media_service__WEBPACK_IMPORTED_MODULE_7__["MediaService"]])
    ], MediaEffects);
    return MediaEffects;
}());



/***/ }),

/***/ "./src/core/admin/catalog/media/media.service.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/catalog/media/media.service.ts ***!
  \*******************************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
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




var MediaService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MediaService, _super);
    function MediaService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles 'CreateFolder' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from model.
     */
    MediaService.prototype.CreateFolder = function (param) {
        return this.http.post((this.url = this.getBaseUrl() + '/media/create-folder'), param);
    };
    /**
     * Handles 'document' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from model.
     */
    MediaService.prototype.document = function (param) {
        var formData = new FormData();
        formData.append('image', param);
        formData.append('path', param.path);
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'xss-loader': 'true' }),
            withCredentials: true,
            responseType: 'text'
        };
        return this.http.post((this.url = this.getBaseUrl() + '/media/upload-file'), param);
    };
    /**
     * Handles 'deleteFolder' function. Calls post method with specific api address
     * along its param.
     *
     * @param param from model.
     */
    MediaService.prototype.deleteFolder = function (param) {
        return this.http.post((this.url = this.getBaseUrl() + '/media/create-folder'), param);
    };
    /**
     * Handles 'bucketLists' function. Calls get method with specific api address
     * along its param.
     *
     * @param param from model.
     */
    MediaService.prototype.bucketLists = function (param) {
        return this.http.get((this.url = this.getBaseUrl() + '/media/bucket-object-list'), { params: param });
    };
    /**
     * Handles 'deleteImage' function. Calls get method with specific api address
     * along its param.
     *
     * @param param from model.
     */
    MediaService.prototype.deleteImage = function (param) {
        return this.http.get((this.url = this.getBaseUrl() + '/media/delete-file'), { params: param });
    };
    MediaService.prototype.searchFolder = function (param) {
        return this.http.get((this.url = this.getBaseUrl() + '/media/search-folder'), { params: param });
    };
    MediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MediaService);
    return MediaService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/core/admin/shared/pipes/category-search.pipe.module.ts":
/*!********************************************************************!*\
  !*** ./src/core/admin/shared/pipes/category-search.pipe.module.ts ***!
  \********************************************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-search.pipe */ "./src/core/admin/shared/pipes/category-search.pipe.ts");



var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule_1 = PipeModule;
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    };
    var PipeModule_1;
    PipeModule = PipeModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            declarations: [_category_search_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]],
            exports: [_category_search_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]],
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/core/admin/shared/pipes/category-search.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/core/admin/shared/pipes/category-search.pipe.ts ***!
  \*************************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it.title) {
                return it.title.toLowerCase().includes(searchText);
            }
            if (it.name) {
                return it.name.toLowerCase().includes(searchText);
            }
            if (it.categoryName) {
                return it.categoryName.toLowerCase().includes(searchText);
            }
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/add/add.component.html":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/add/add.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--REACTIVE FORM-->\r\n<form novalidate [formGroup]=\"user\">\r\n    <div class=\"col-12\">\r\n        <div class=\"breadcrumbs-row noborder\">\r\n            <div class=\"bc-col\">\r\n                <ul>\r\n                    <li><a href=\"javascript:void(0)\" [routerLink]=\"['/catalog/product']\"> Products</a></li>\r\n                    <li> Add Product</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"bc-col-btn ap-col-btn\">\r\n                <button class=\"btn btn-save\" (click)=\"onSubmit(user.value)\"><img src=\"assets/img/tick-round-white.png\">\r\n                    Save\r\n                </button>\r\n                <button class=\"btn btn-cancel\" [routerLink]=\"['/catalog/product']\"><img\r\n                        src=\"assets/img/close-white-ico.png\">\r\n                    Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Breadcrumbs-->\r\n    <div class=\"flex addproduct-wrap\">\r\n        <div class=\"card ap-general\">\r\n            <div class=\"ap-header\">\r\n                <span> 1 </span>General\r\n            </div>\r\n            <div class=\"flex ap-body\">\r\n\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Products Name <sup>*</sup></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Products Name\" formControlName=\"productName\" [ngClass]=\"{'validationcolor':user.get('productName').hasError('required') && user.get('productName').touched&&submittedValues==true}\">\r\n\r\n                        <div class=\"error\" *ngIf=\"user.get('productName').hasError('required') && user.get('productName').touched&&submittedValues==true\">\r\n                            Product Name is required\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <!--Col-->\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label> Sku<sup>*</sup></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Sku Number\" formControlName=\"sku\" [ngClass]=\"{'validationcolor':user.get('sku').hasError('required') && user.get('sku').touched&&submittedValues==true}\">\r\n\r\n                        <div class=\"error\" *ngIf=\"user.get('sku').hasError('required') && user.get('sku').touched&&submittedValues==true\">\r\n                            sku is required\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <!--Col-->\r\n                <div class=\"ap-body-col\">\r\n                    <div class=\"form-group\">\r\n                        <label>Meta Tag Title</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Meta Tag Title\" formControlName=\"metaTagTitle\">\r\n\r\n\r\n                    </div>\r\n                </div>\r\n                <!--Col-->\r\n\r\n\r\n                <div class=\"ap-body-col width100\">\r\n                    <div class=\"form-group\">\r\n                        <label>Product Description</label>\r\n                        <ckeditor formControlName=\"productDescription\">\r\n                        </ckeditor>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <!--General-->\r\n\r\n        <div class=\"card ap-general ap-info\">\r\n            <div class=\"ap-header\">\r\n                <span> 2 </span>More Information\r\n            </div>\r\n            <div class=\"flex ap-body\">\r\n                <ngb-tabset style=\"width:100%;\">\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle>Categories</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"flex categories-row\">\r\n                                <div class=\"categories-col\">\r\n                                    <h3>AvailablCategories</h3>\r\n                                    <div class=\"form-group search-categories\">\r\n\r\n                                        <form class=\"example-form\">\r\n                                            <mat-form-field class=\"example-full-width\" style=\"    width: 100%;\">\r\n                                                <input type=\"text\" placeholder=\"\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" matInput>\r\n                                            </mat-form-field>\r\n                                        </form>\r\n                                    </div>\r\n\r\n                                    <ul class=\"flex category-list over-flowx\">\r\n\r\n                                        <li *ngFor=\"let arr of (categoriessandbox.getCategoriesList$ | async)  | filter : searchText;let i=index\" (click)=\"selectCategory(arr,i)\" style=\"cursor: pointer\">\r\n                                            <a href=\"javascript:void(0)\"><img src=\"assets/img/add-green-ico.png\">\r\n                                            </a>\r\n                                            {{arr.name}}\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!---->\r\n                                <div class=\"categories-col\">\r\n                                    <h3>Selected Categories</h3>\r\n                                    <div class=\"form-group search-categories\">\r\n\r\n                                        <form class=\"example-form\">\r\n                                            <mat-form-field class=\"example-full-width\" style=\"    width: 100%;\">\r\n                                                <input type=\"text\" placeholder=\"\" aria-label=\"Assignee\" matInput (keyup)=\"searchSelectedCategory($event.target.value)\">\r\n                                            </mat-form-field>\r\n                                        </form>\r\n\r\n\r\n                                        <ul class=\"flex category-list over-flowx\" *ngIf=\"editId\" style=\"cursor: pointer\">\r\n                                            <span>  <li *ngFor=\"let data of selectedCategories;let i=index\"\r\n                                                            (click)=\"removeCategory(data,i)\"><a\r\n                                                        href=\"javascript:void(0)\"> <img\r\n                                                        src=\"assets/img/minus-red-ico.png\"> </a> {{data.categoryName}}</li></span>\r\n\r\n                                        </ul>\r\n                                        <ul class=\"flex category-list \" *ngIf=\"!editId && show!=true\" style=\"cursor: pointer\">\r\n                                            <span> <li *ngFor=\"let selected of selectedCategories;let i=index\"\r\n                                                           (click)=\"removeCategory(selected,i)\"><a\r\n                                                        href=\"javascript:void(0)\"> <img\r\n                                                        src=\"assets/img/minus-red-ico.png\"> </a> {{selected.name}}</li></span>\r\n\r\n                                        </ul>\r\n                                        <ul class=\"flex category-list \" *ngIf=\"!editId && show==true\" style=\"cursor: pointer\">\r\n                                            <span><li *ngFor=\"let selected of filteredArray;let i=index\"\r\n                                                         (click)=\"removeCategory(selected,i)\"><a\r\n                                                       href=\"javascript:void(0)\"> <img\r\n                                                       src=\"assets/img/minus-red-ico.png\"> </a> {{selected.name}}</li></span>\r\n                                        </ul>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle> Data</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"flex data-row\">\r\n\r\n                                <div class=\"data-col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Brand <sup>*</sup></label>\r\n                                        <select class=\"custom-select col-12\" formControlName=\"model\" [ngClass]=\"{'validationcolor':user.get('model').hasError('required') && user.get('model').touched&&submittedValues==true}\">\r\n                                            <option value=''>- -Select Brand- -</option>\r\n                                            <option *ngFor=\"let arr of brandsandbox.getManufactureList$|async\"\r\n                                                    value={{arr.manufacturerId}}>{{arr.name}}\r\n                                            </option>\r\n                                        </select>\r\n\r\n                                        <div class=\"error\" *ngIf=\"user.get('model').hasError('required') && user.get('model').touched&&submittedValues==true\">\r\n                                            Model is required\r\n                                        </div>\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <!--Col-->\r\n                                <div class=\"data-col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Upc\r\n\r\n                                        </label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Upc\" formControlName=\"upc\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"data-col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Location</label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Location\" formControlName=\"location\">\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <!--Col-->\r\n                                <div class=\"data-col\" style=\"width:20%\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Price <sup>*</sup></label>\r\n                                        <input type=\"text\" class=\"form-control\" appOnlyNumber [isDot]=\"true\" placeholder=\"Price\" formControlName=\"price\" [ngClass]=\"{'validationcolor':user.get('price').hasError('required') && user.get('price').touched&&submittedValues==true}\">\r\n\r\n                                        <div class=\"error\" *ngIf=\"user.get('price').hasError('required') && user.get('price').touched&&submittedValues==true\">\r\n                                            Price is required\r\n                                        </div>\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"data-col\" style=\"width:20%\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Regular <del>Price</del>\r\n\r\n                                        </label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Regular\" formControlName=\"regular\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <!--Col-->\r\n                                <div class=\"data-col\" style=\"width:20%\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Out of Stock Status\r\n                                            <sup>*</sup>\r\n                                        </label>\r\n                                        <select class=\"custom-select col-12\" formControlName=\"outOfStockStatus\" placeholder=\"Stock Status\" [ngClass]=\"{'validationcolor':user.get('outOfStockStatus').hasError('required') && user.get('outOfStockStatus').touched&&submittedValues==true}\">\r\n                                            <option value=''>- -Select Status- -</option>\r\n                                            <option *ngFor=\"let stocklist of stockStatusSandbox.getStockList$ | async\"\r\n                                                    value={{stocklist.stockStatusId}}>{{stocklist.name}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <div class=\"error\" *ngIf=\"user.get('outOfStockStatus').hasError('required') && user.get('outOfStockStatus').touched&&submittedValues==true\">\r\n                                            Out of Stock Status is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!--Col-->\r\n                                <div class=\"data-col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"control-label\">Date Available</label>\r\n                                        <mat-form-field>\r\n                                            <input matInput [matDatepicker]=\"picker_dateAvailable\" formControlName=\"dateAvailable\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker_dateAvailable\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker_dateAvailable></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"data-col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Status<sup>*</sup> </label>\r\n\r\n\r\n                                        <select class=\"custom-select col-12\" formControlName=\"status\" [ngClass]=\"{'validationcolor':user.get('status').hasError('required') && user.get('status').touched&&submittedValues==true}\">\r\n                                            <option value=''>- -Select Status- -</option>\r\n                                            <option value=\"1\">Enabled</option>\r\n                                            <option value=\"0\">Disabled</option>\r\n                                        </select>\r\n\r\n\r\n                                        <div class=\"error\" *ngIf=\"user.get('status').hasError('required') && user.get('status').touched&&submittedValues==true\">\r\n                                            Status is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--Col-->\r\n                                <div class=\"data-col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Sort Order</label>\r\n                                        <input type=\"text\" class=\"form-control\" appOnlyNumber placeholder=\"Sort Order\" formControlName=\"sortOrder\">\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"data-col\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Condition<sup>*</sup></label>\r\n\r\n\r\n                                        <select class=\"custom-select col-12\" formControlName=\"condition\" [ngClass]=\"{'validationcolor':user.get('condition').hasError('required') && user.get('condition').touched&&submittedValues==true}\">\r\n                                            <option value=''>- -Select Condition- -</option>\r\n                                            <option value=\"1\">New</option>\r\n                                            <option value=\"2\">Used</option>\r\n                                        </select>\r\n\r\n                                        <div class=\"error\" *ngIf=\"user.get('condition').hasError('required') && user.get('condition').touched&&submittedValues==true\">\r\n                                            Condition is required\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <!--Col-->\r\n                                <div class=\"data-col\">\r\n                                    <!--<div class=\"form-group\">-->\r\n                                    <label class=\"control-label\" style=\"margin-left: 5px;padding: 1px 6px;\">Shipping is required</label>\r\n\r\n                                    <mat-radio-group formControlName=\"requiredShipping\">\r\n                                        <mat-radio-button value=\"1\">Free</mat-radio-button>\r\n                                        <mat-radio-button value=\"2\">Paid</mat-radio-button>\r\n                                    </mat-radio-group>\r\n                                    <div class=\"error\" *ngIf=\"user.get('requiredShipping').hasError('required') && user.get('requiredShipping').touched&&submittedValues==true\">\r\n                                        Shipping Mode is required\r\n                                    </div>\r\n                                </div>\r\n                                <!--Col-->\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle>Images</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"flex image-row\">\r\n                                <div class=\"image-col\" *ngFor=\"let data of uploadImage;let i=index\">\r\n                                    <div class=\"img-hdr flex\" *ngIf=\"!editId\">\r\n                                        <input type=\"radio\" name=\"'imageSelection'\" [checked]=\"length==i\" (change)=\"checkBox($event,i)\">\r\n                                        <a href=\"javascript:void(0)\" (click)=\"deleteImage(i)\"> <img src=\"assets/img/delete-ico.png\"> </a>\r\n                                    </div>\r\n                                    <div class=\"img-hdr flex\" *ngIf=\"editId\">\r\n                                        <input type=\"radio\" name=\"'imageSelection'\" [checked]=\"defaultImageValue==data.defaultImage\" (change)=\"checkBox($event,i)\">\r\n                                        <a href=\"javascript:void(0)\" (click)=\"deleteImage(i)\"> <img src=\"assets/img/delete-ico.png\"> </a>\r\n                                    </div>\r\n                                    <div class=\"img-bdy\">\r\n                                        <img [src]=\"imageUrls + '?path=' + data.containerName + '&name=' + data.image + '&width=60&height=60'\" style=\" width:100%; height:100%\">\r\n                                    </div>\r\n                                </div>\r\n                                <!--Col-->\r\n                                <div class=\"image-col\">\r\n                                    <div class=\"img-dflt\">\r\n                                        <input style=\"cursor: pointer\" (click)=\" uploadProductImages()\">\r\n                                        <img src=\"assets/img/add-photo-big.png\">\r\n                                        <p>Add Images</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/add/add.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/add/add.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.toggle .tgl:checked + .tgl-btn:after {\n  top: 0px !important;\n}\n.toggle .tgl + .tgl-btn:after {\n  top: 0px !important;\n}\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: white !important;\n}\n.toggle .tgl + .tgl-btn:after {\n  background-color: white !important;\n}\n.toggle .tgl + .tgl-btn {\n  height: 1.7em !important;\n}\n.toggle .tgl-light:checked + .tgl-btn {\n  background: #008c00 !important;\n}\n.toggle .tgl-light + .tgl-btn {\n  background: #f00 !important;\n}\n.optionValidator {\n  background: #ed571f !important;\n}\n.error {\n  color: red;\n}\n/* Blue */\n.info {\n  border-color: blue;\n  color: white;\n  background: blue;\n}\n.info:hover {\n  background: green;\n  color: white;\n}\nmat-radio-button {\n  padding: 1px 3px !important;\n}\n.datePiker {\n  padding: 3px 0px !important;\n}\n.error-field {\n  border: 1px soild #ff1e1e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvcHJvZHVjdC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBRUE7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxrQ0FBQTtBQ0FKO0FER0E7RUFDSSxrQ0FBQTtBQ0FKO0FER0E7RUFDSSx3QkFBQTtBQ0FKO0FER0E7RUFDSSw4QkFBQTtBQ0FKO0FER0E7RUFDSSwyQkFBQTtBQ0FKO0FESUE7RUFDSSw4QkFBQTtBQ0RKO0FESUE7RUFDSSxVQUFBO0FDREo7QURLQSxTQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNISjtBRE1BO0VBQ0ksMkJBQUE7QUNISjtBRE1BO0VBQ0ksMkJBQUE7QUNISjtBRE1BO0VBQ0ksb0NBQUE7QUNISiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvcHJvZHVjdC9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTE9HSU4gVkFMSURBVElPTiovXG5cbi52YWxpZGF0aW9uY29sb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCsudGdsLWJ0bjphZnRlciB7XG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsKy50Z2wtYnRuOmFmdGVyIHtcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCsudGdsLWJ0bjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsKy50Z2wtYnRuOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wrLnRnbC1idG4ge1xuICAgIGhlaWdodDogMS43ZW0gIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsLWxpZ2h0OmNoZWNrZWQrLnRnbC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwMDhjMDAgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsLWxpZ2h0Ky50Z2wtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjAwICFpbXBvcnRhbnQ7XG59XG5cbi8vIG9wdGlvbiBzZWxlY3RlZCB2YWxpZGF0b3Jcbi5vcHRpb25WYWxpZGF0b3Ige1xuICAgIGJhY2tncm91bmQ6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5cbi8qIEJsdWUgKi9cblxuLmluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLmluZm86aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMXB4IDNweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZVBpa2VyIHtcbiAgICBwYWRkaW5nOiAzcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1maWVsZCB7XG4gICAgYm9yZGVyOiAxcHggc29pbGQgI2ZmMWUxZSAhaW1wb3J0YW50O1xufSIsIi8qIExPR0lOIFZBTElEQVRJT04qL1xuLnZhbGlkYXRpb25jb2xvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsICsgLnRnbC1idG46YWZ0ZXIge1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsICsgLnRnbC1idG46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wgKyAudGdsLWJ0biB7XG4gIGhlaWdodDogMS43ZW0gIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsLWxpZ2h0OmNoZWNrZWQgKyAudGdsLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDhjMDAgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsLWxpZ2h0ICsgLnRnbC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZjAwICFpbXBvcnRhbnQ7XG59XG5cbi5vcHRpb25WYWxpZGF0b3Ige1xuICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIEJsdWUgKi9cbi5pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbi5pbmZvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAzcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGVQaWtlciB7XG4gIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yLWZpZWxkIHtcbiAgYm9yZGVyOiAxcHggc29pbGQgI2ZmMWUxZSAhaW1wb3J0YW50O1xufSJdfQ== */"
=======
module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.toggle .tgl:checked + .tgl-btn:after {\n  top: 0px !important;\n}\n.toggle .tgl + .tgl-btn:after {\n  top: 0px !important;\n}\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: white !important;\n}\n.toggle .tgl + .tgl-btn:after {\n  background-color: white !important;\n}\n.toggle .tgl + .tgl-btn {\n  height: 1.7em !important;\n}\n.toggle .tgl-light:checked + .tgl-btn {\n  background: #008c00 !important;\n}\n.toggle .tgl-light + .tgl-btn {\n  background: #f00 !important;\n}\n.optionValidator {\n  background: #ed571f !important;\n}\n.error {\n  color: red;\n}\n/* Blue */\n.info {\n  border-color: blue;\n  color: white;\n  background: blue;\n}\n.info:hover {\n  background: green;\n  color: white;\n}\nmat-radio-button {\n  padding: 1px 3px !important;\n}\n.datePiker {\n  padding: 3px 0px !important;\n}\n.error-field {\n  border: 1px soild #ff1e1e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2FkZC9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcYWRtaW4vc3JjXFx0aGVtZVxcZGVmYXVsdFxcYWRtaW5cXGNhdGFsb2dcXGNvbXBvbmVudHNcXHByb2R1Y3RcXGFkZFxcYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQUVBO0VBQ0ksaUJBQUE7QUNBSjtBREdBO0VBQ0ksbUJBQUE7QUNBSjtBREdBO0VBQ0ksbUJBQUE7QUNBSjtBREdBO0VBQ0ksa0NBQUE7QUNBSjtBREdBO0VBQ0ksa0NBQUE7QUNBSjtBREdBO0VBQ0ksd0JBQUE7QUNBSjtBREdBO0VBQ0ksOEJBQUE7QUNBSjtBREdBO0VBQ0ksMkJBQUE7QUNBSjtBRElBO0VBQ0ksOEJBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtBQ0RKO0FES0EsU0FBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDSEo7QURNQTtFQUNJLDJCQUFBO0FDSEo7QURNQTtFQUNJLDJCQUFBO0FDSEo7QURNQTtFQUNJLG9DQUFBO0FDSEoiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIExPR0lOIFZBTElEQVRJT04qL1xyXG5cclxuLnZhbGlkYXRpb25jb2xvciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnRvZ2dsZSAudGdsOmNoZWNrZWQrLnRnbC1idG46YWZ0ZXIge1xyXG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvZ2dsZSAudGdsKy50Z2wtYnRuOmFmdGVyIHtcclxuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b2dnbGUgLnRnbDpjaGVja2VkKy50Z2wtYnRuOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b2dnbGUgLnRnbCsudGdsLWJ0bjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9nZ2xlIC50Z2wrLnRnbC1idG4ge1xyXG4gICAgaGVpZ2h0OiAxLjdlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9nZ2xlIC50Z2wtbGlnaHQ6Y2hlY2tlZCsudGdsLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4YzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b2dnbGUgLnRnbC1saWdodCsudGdsLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG9wdGlvbiBzZWxlY3RlZCB2YWxpZGF0b3JcclxuLm9wdGlvblZhbGlkYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLyogQmx1ZSAqL1xyXG5cclxuLmluZm8ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG5cclxuLmluZm86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMXB4IDNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0ZVBpa2VyIHtcclxuICAgIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9yLWZpZWxkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvaWxkICNmZjFlMWUgIWltcG9ydGFudDtcclxufSIsIi8qIExPR0lOIFZBTElEQVRJT04qL1xuLnZhbGlkYXRpb25jb2xvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsICsgLnRnbC1idG46YWZ0ZXIge1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsICsgLnRnbC1idG46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wgKyAudGdsLWJ0biB7XG4gIGhlaWdodDogMS43ZW0gIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsLWxpZ2h0OmNoZWNrZWQgKyAudGdsLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDhjMDAgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsLWxpZ2h0ICsgLnRnbC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZjAwICFpbXBvcnRhbnQ7XG59XG5cbi5vcHRpb25WYWxpZGF0b3Ige1xuICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIEJsdWUgKi9cbi5pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbi5pbmZvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAzcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGVQaWtlciB7XG4gIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yLWZpZWxkIHtcbiAgYm9yZGVyOiAxcHggc29pbGQgI2ZmMWUxZSAhaW1wb3J0YW50O1xufSJdfQ== */"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/add/add.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/add/add.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_popup_ImageManagerPopup_imagemanagerpopup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/model-popup/ImageManagerPopup/imagemanagerpopup.component */ "./src/theme/default/admin/shared/model-popup/ImageManagerPopup/imagemanagerpopup.component.ts");
/* harmony import */ var _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/product/product.sandbox */ "./src/core/admin/catalog/product/product.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/brand/brand.sandbox */ "./src/core/admin/catalog/brand/brand.sandbox.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/localizations/stockStatus/stock.sandbox */ "./src/core/admin/settings/localizations/stockStatus/stock.sandbox.ts");





// Store Module







var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(fb, productSandbox, categoriessandbox, brandsandbox, popup, route, changeDetectRef, stockStatusSandbox, configService, datePipe) {
        var _this = this;
        this.fb = fb;
        this.productSandbox = productSandbox;
        this.categoriessandbox = categoriessandbox;
        this.brandsandbox = brandsandbox;
        this.popup = popup;
        this.route = route;
        this.changeDetectRef = changeDetectRef;
        this.stockStatusSandbox = stockStatusSandbox;
        this.configService = configService;
        this.datePipe = datePipe;
        this.dropDownnArray = [];
        // pagination
        this.catagory = '';
        // upload
        this.uploadImage = [];
        this.TotalCategories = [];
        // product add or update api params
        this.param = {};
        // validation
        this.submittedValues = false;
        this.defaultImageValue = 1;
        // add categories only when add button clicked
        this.addOneTime = false;
        // selected products in paroducts
        this.selectedProducts = [];
        this.addOneTimeData = false;
        this.onetimeEdit = false;
        this.CategoryValue = false;
        // search product
        this.subscriptions = [];
        this.updateproductdetails = [];
        // selected category list
        this.selectedCategories = [];
        this.searchText = '';
        this.productItem = {};
        // ck editor
        this.name = 'ng2-ckeditor';
        this.log = '';
        this.mycontent = "<p>My html content</p>";
        // this.initDropDownList();
        this.route.params.subscribe(function (data) {
            if (data) {
                _this.editId = data['id'];
            }
        });
    }
    ProductAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ProductAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        // clear product details Data
        this.getCategoryList();
        this.productSandbox.ClearProductDetails();
        // calling ProductDetail
        this.initProductForm();
        if (this.editId) {
            this.subscriptions.push(this.categoriessandbox.getCategoriesListRequestLoaded$.subscribe(function (data) {
                if (data === true) {
                    _this.productSandbox.getProductDetail({ Id: _this.editId });
                    _this.productSandbox.productDetails$.subscribe(function (data) {
                        _this.productItem = data;
                    });
                    _this.regDetailEvent();
                }
            }));
        }
        else {
            this.initDropDownList();
        }
        this.imageUrls = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
        // ck editor
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: 'divarea',
            // forcePasteAsPlainText: true,
            height: '100%'
        };
    };
    ProductAddComponent.prototype.initDropDownList = function () {
        // this.getCategoryList();
        this.getManufacturerList();
        this.getStockStausList();
    };
    // reactive form
    ProductAddComponent.prototype.initProductForm = function () {
        this.productName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.metaTagTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.productDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.upc = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.regular = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.sku = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.model = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.outOfStockStatus = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.requiredShipping = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.dateAvailable = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.sortOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.condition = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.textRequired = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.timeRequired = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.timeValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.dateTimeRequired = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.dateTimeValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.checkboxRequired = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.sizeBoxRequired = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.dataRequired = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.dateValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        (this.TextBoxRequired = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
        this.user = this.fb.group({
            productName: this.productName,
            metaTagTitle: this.metaTagTitle,
            productDescription: this.productDescription,
            upc: this.upc,
            sku: this.sku,
            model: this.model,
            location: this.location,
            price: this.price,
            regular: this.regular,
            outOfStockStatus: this.outOfStockStatus,
            requiredShipping: this.requiredShipping,
            dateAvailable: this.dateAvailable,
            status: this.status,
            sortOrder: this.sortOrder,
            condition: this.condition,
            textRequired: this.textRequired,
            timeRequired: this.timeRequired,
            timeValue: this.timeValue,
            dateTimeRequired: this.dateTimeRequired,
            dateTimeValue: this.dateTimeValue,
            dataRequired: this.dataRequired,
            dateValue: this.dateValue,
            sizeForm: this.fb.group({
                sizeBoxRequired: this.sizeBoxRequired,
                sizeFormArray: this.fb.array([])
            })
        });
    };
    /**
      * Handles  'searchCategory' event. Calls sandbox getCategoryList function.
 
      * @param catagory searchCategory input value
      */
    ProductAddComponent.prototype.searchCategory = function (event) {
        this.catagory = event.target.value;
        this.getCategoryList();
    };
    /**
     * Handles  'selectCategory' event. Calls categoriessandbox Productremove  if (this.editId)function.
     * else Calls categoriessandbox Productremove.And push  the datas to categories list using push() method.
     * @param categoryId searchCategory input value
     * @param name searchCategory input value
     */
    ProductAddComponent.prototype.selectCategory = function (data, i) {
        if (this.editId) {
            var param = {};
            param.categoryId = data.categoryId;
            param.categoryName = data.name;
            this.addOneTime = true;
            this.selectedCategories.push(param);
            this.categoriessandbox.Productremove(i);
        }
        else {
            this.selectedCategories.push(data);
            this.categoriessandbox.Productremove(i);
            this.show = false;
        }
        this.filteredArray = this.selectedCategories;
    };
    /**
     * Handles  'removeCategory' event. Calls categoriessandbox Productadd  if (this.editId)function.
     * else Calls categoriessandbox Productadd.And splice the datas with particular index as(i)
     * @param categoryId searchCategory input value.
     * @param name searchCategory input value.
     */
    ProductAddComponent.prototype.removeCategory = function (data, i) {
        if (this.editId) {
            var param = {};
            param.categoryId = data.categoryId;
            param.name = data.categoryName;
            this.addOneTime = true;
            this.categoriessandbox.Productadd(param);
            this.selectedCategories.splice(i, 1);
        }
        else {
            this.categoriessandbox.Productadd(data);
            this.selectedCategories.splice(i, 1);
        }
        this.filteredArray = this.selectedCategories;
    };
    ProductAddComponent.prototype.selecttCategory = function (event, categoryList) {
        console.log('categoryList', categoryList);
        console.log('event', event);
        this.TotalCategories = categoryList.filter(function (list) {
            if (list.categoryId === +event) {
                return true;
            }
            else {
                return false;
            }
        });
        console.log('cat', this.TotalCategories);
    };
    /**
     * Handles  'searchSelectedCategory' event. And show the searched result  in the form
     *
     * @param filter searchbox  value
     */
    ProductAddComponent.prototype.searchSelectedCategory = function (filter) {
        var _this = this;
        this.filteredArray = this.selectedCategories.filter(function (item) {
            if (item.name
                .toString()
                .toLowerCase()
                .indexOf(filter.toLowerCase()) !== -1) {
                if (_this.filteredArray != null) {
                    _this.show = true;
                }
                return true;
            }
            return false;
        });
    };
    Object.defineProperty(ProductAddComponent.prototype, "sizeArray", {
        // create control for FormArray of sizeFormArray
        get: function () {
            return this.user.controls['sizeForm'].get('sizeFormArray');
        },
        enumerable: true,
        configurable: true
    });
    // Stock Status List
    ProductAddComponent.prototype.getStockStausList = function () {
        var params = {};
        params.limit = 0;
        params.offset = 100;
        params.keyword = '';
        params.status = '1';
        this.stockStatusSandbox.stockStatusList(params);
    };
    /**
     * Handles  'onSubmit' event. Calls productSandbox doProductUpdate function if (this.editId) else
     * calls productSandbox doProductAdd function.
     * @param user entire form value
     */
    ProductAddComponent.prototype.onSubmit = function (user) {
        console.log('submit image', this.uploadImage);
        // calling
        this.submittedValues = true;
        this.addSelecctedCategories();
        if (!this.user.valid) {
            this.validateAllFormFields(this.user);
            return;
        }
        // console.log(localStorage.getItem('userdetails'),"*****&****")
        console.log(user, "user Id");
        // return false;
        this.onetimeEdit = true;
        this.param.productName = user.productName;
        this.param.metaTagTitle = user.metaTagTitle;
        this.param.productDescription = user.productDescription;
        this.param.upc = user.upc;
        this.param.sku = user.sku;
        this.param.image = this.uploadImage;
        this.param.categoryId = this.TotalCategories;
        this.param.model = user.model;
        this.param.location = user.location;
        this.param.price = user.price;
        this.param.regular = user.regular;
        this.param.outOfStockStatus = user.outOfStockStatus;
        this.param.requiredShipping = user.requiredShipping;
        this.param.dateAvailable = user.dateAvailable;
        var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US').transform(user.dateAvailable, 'yyyy-MM-dd');
        this.param.dateAvailable = dateSendingToServer;
        this.param.status = user.status;
        this.param.sortOrder = user.sortOrder;
        this.param.condition = user.condition;
        if (this.editId) {
            this.param.productId = this.editId;
            this.productSandbox.doProductUpdate(this.param);
        }
        else {
            // console.log("******",user,'params', this.param);
            this.productSandbox.doProductAdd(this.param);
        }
    };
    /**
     * Handles  'addSelecctedCategories' event.
     *
     * storing selectedCategories data in TotalCategories
     */
    ProductAddComponent.prototype.addSelecctedCategories = function () {
        if (this.show === true) {
            this.selectedCategories = this.filteredArray;
        }
        this.TotalCategories = this.selectedCategories;
    };
    /**
     * unsubscribe the subscriptions
     *
     * Handles  'regDetailEvent' event. Calls productSandbox productDetails$ to
     * subscribe the response data.,then calls editProductForm function with the response data.
     *
     */
    ProductAddComponent.prototype.regDetailEvent = function () {
        var _this = this;
        this.CategoryValue = true;
        this.subscriptions.push(this.productSandbox.productDetails$.subscribe(function (data) {
            if (data && Object.keys(data).length) {
                _this.selectedProducts = [];
                _this.editProductForm(data);
                _this.initDropDownList();
            }
        }));
    };
    // Handles form 'getManufacturerList' event. Calls sandbox manufacturerList function with empty value.
    ProductAddComponent.prototype.getManufacturerList = function () {
        var params = {};
        params.limit = '';
        params.offset = '';
        params.keyword = '';
        params.status = 1;
        params.count = '';
        this.brandsandbox.manufacturerList(params);
    };
    // calling category list api with pagination
    ProductAddComponent.prototype.getCategoryList = function () {
        var param = {};
        param.limit = '';
        param.offset = '';
        param.keyword = this.catagory;
        param.sortOrder = '';
        param.status = 1;
        this.categoriessandbox.categorylist(param);
    };
    // editing Product Form with product list values
    ProductAddComponent.prototype.editProductForm = function (productDetail) {
        this.selectedCategories = [];
        console.log('productDetail', productDetail);
        if (productDetail.Category && productDetail.Category.length > 0) {
            this.categoriessandbox.filterCategory(productDetail.Category);
        }
        this.selectedCategories = productDetail.Category;
        this.changeDetectRef.detectChanges();
        this.updateproductdetails.push(productDetail);
        this.uploadImage = productDetail.productImage;
        this.selectedProducts = productDetail.relatedProductDetail;
        this.productName.setValue(productDetail.name);
        this.sku.setValue(productDetail.sku);
        this.upc.setValue(productDetail.upc);
        this.price.setValue(productDetail.price);
        this.regular.setValue(productDetail.regular);
        this.location.setValue(productDetail.location);
        this.outOfStockStatus.setValue(productDetail.stockStatusId);
        this.status.setValue(productDetail.isActive);
        this.model.setValue(productDetail.manufacturerId);
        this.requiredShipping.setValue(productDetail.shipping);
        if (productDetail && productDetail.stockStatusId) {
            this.outOfStockStatus = productDetail.stockStatusId;
        }
        if (this.requiredShipping.value === 1) {
            this.user.patchValue({ requiredShipping: '1', tc: true });
        }
        else {
            this.user.patchValue({ requiredShipping: '2', tc: true });
        }
        this.dateAvailable.setValue(productDetail.dateAvailable);
        this.sortOrder.setValue(productDetail.sortOrder);
        this.productDescription.setValue(productDetail.description);
        this.metaTagTitle.setValue(productDetail.metaTagTitle);
        this.condition.setValue(productDetail.condition);
    };
    // getting values from media popup
    ProductAddComponent.prototype.uploadProductImages = function () {
        var _this = this;
        var modalRef = this.popup.open(_shared_model_popup_ImageManagerPopup_imagemanagerpopup_component__WEBPACK_IMPORTED_MODULE_5__["ImagemanagerpopupComponent"], {
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        });
        // Make the first image as default  selected.
        modalRef.result.then(function (result) {
            if (result !== '' && result !== undefined) {
                var lengthOfUploadImage = _this.uploadImage.length;
                _this.uploadImage.push(result);
                console.log('upload image', _this.uploadImage);
                _this.length = 0;
                // make non default value
                if (_this.uploadImage.length > 1 && !_this.editId) {
                    for (var i = 1; i < _this.uploadImage.length; i++) {
                        _this.uploadImage[i].defaultImage = 0;
                    }
                }
                else if (!_this.editId) {
                    _this.uploadImage[0].defaultImage = 1;
                }
                else if (_this.editId) {
                    // make  default value
                    if (_this.uploadImage[0]) {
                        _this.uploadImage[0].defaultImage = 1;
                    }
                    else {
                        for (var i = lengthOfUploadImage; i < _this.uploadImage.length; i++) {
                            _this.uploadImage[i].defaultImage = 0;
                        }
                    }
                }
                console.log('upload image', _this.uploadImage);
            }
            _this.changeDetectRef.detectChanges();
            _this.closeResult = "Closed with: " + 'result';
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // delete image
    ProductAddComponent.prototype.deleteImage = function (i) {
        this.uploadImage.splice(i, 1);
    };
    // validation for the formGroup
    ProductAddComponent.prototype.validateAllFormFields = function (formGroup) {
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
    // ck editor
    ProductAddComponent.prototype.checkBox = function (event, ii) {
        var index = ii;
        for (var i = 0; i < this.uploadImage.length; i++) {
            if (index === i && event.target.checked) {
                this.uploadImage[i].defaultImage = 1;
            }
            else {
                this.uploadImage[i].defaultImage = 0;
            }
        }
    };
    ProductAddComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myckeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductAddComponent.prototype, "ckeditor", void 0);
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-products',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/catalog/components/product/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/theme/default/admin/catalog/components/product/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_6__["ProductSandbox"],
            _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_7__["CategoriesSandbox"],
            _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_8__["BrandSandbox"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_11__["StockSandbox"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/filter/filter.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/filter/filter.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div [formGroup]=\"prodfilter\" class=\"new-user\">-->\r\n\r\n<form [formGroup]=\"filterForm\">\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"keyword\">Product Name</label>\r\n        <input type=\"text\" formControlName=\"keyword\" class=\"form-control\" id=\"Keyword\" aria-describedby=\"emailHelp\" placeholder=\"Enter Product Name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"sku\">Sku</label>\r\n        <input type=\"text\" formControlName=\"sku\" class=\"form-control\" id=\"sku\" placeholder=\"Sku Number\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Price</label>\r\n\r\n        <div class=\"radio\">\r\n            <label class=\"prod_filter\">\r\n                <input type=\"radio\" name=\"price\" value=\"Min\" (click)=\"selectPrice('Min')\">\r\n               Min-price\r\n            </label>\r\n            <label class=\"prod_filter\">\r\n                <input type=\"radio\" name=\"price\" value=\"Max\" (click)=\"selectPrice('Max')\">\r\n                Max-price\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Status</label>\r\n        <select class=\"custom-select col-12\" id=\"inlineFormCustomSelect\" formControlName=\"status\">\r\n            <option value=\"\" selected>- -Select Status- -</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">In-Active</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"text-right filter-btns\">\r\n        <a (click)=\"resetFilter()\" style=\"cursor: pointer\">.Reset</a>\r\n\r\n        <button type=\"submit\" class=\"btn\" (click)=\"applyFilter()\">Apply Filters\r\n        </button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/filter/filter.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/filter/filter.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".btn {\n  background: #ed571f !important;\n}\n\n.prod_filter {\n  padding: 1px 5px !important;\n}\n\n.form-group {\n  margin-bottom: 2rem !important;\n  margin-left: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvcHJvZHVjdC9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsOEJBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FERUE7RUFDSSw4QkFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbHRlciBidG4gYmFja2dyb3VuZFxuLmJ0biB7XG4gIGJhY2tncm91bmQ6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxuLnByb2RfZmlsdGVyIHtcbiAgcGFkZGluZzogMXB4IDVweCAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG4iLCIuYnRuIHtcbiAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZF9maWx0ZXIge1xuICBwYWRkaW5nOiAxcHggNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"
=======
module.exports = ".btn {\n  background: #ed571f !important;\n}\n\n.prod_filter {\n  padding: 1px 5px !important;\n}\n\n.form-group {\n  margin-bottom: 2rem !important;\n  margin-left: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcYWRtaW4vc3JjXFx0aGVtZVxcZGVmYXVsdFxcYWRtaW5cXGNhdGFsb2dcXGNvbXBvbmVudHNcXHByb2R1Y3RcXGZpbHRlclxcZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDhCQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREVBO0VBQ0ksOEJBQUE7RUFDQSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWx0ZXIgYnRuIGJhY2tncm91bmRcclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZF9maWx0ZXIge1xyXG4gIHBhZGRpbmc6IDFweCA1cHggIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmJ0biB7XG4gIGJhY2tncm91bmQ6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxuLnByb2RfZmlsdGVyIHtcbiAgcGFkZGluZzogMXB4IDVweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn0iXX0= */"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/filter/filter.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/filter/filter.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/product/product.sandbox */ "./src/core/admin/catalog/product/product.sandbox.ts");

/*
 * SpurtCommerce API
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Store Module

var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(fb, sandbox) {
        this.fb = fb;
        this.sandbox = sandbox;
        this.price = 0;
        this.selectedLink = 'Min';
        this.progressEmits = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // initially calling the reactive form by setting  pagination count
    ProductFilterComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage');
        this.pagenationCount = true;
        this.initFilterForm();
    };
    // reactive form
    ProductFilterComponent.prototype.initFilterForm = function () {
        this.filterForm = this.fb.group({
            keyword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sku: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    // selecting the price
    ProductFilterComponent.prototype.selectPrice = function (e) {
        this.selectedLink = e;
    };
    /**
     * Handles  'resetFilter' event. Calls  getProductList and reset().
     *
     * @param filterForm entire form value
     */
    ProductFilterComponent.prototype.resetFilter = function () {
        this.filterForm.reset();
        var param = {};
        param.limit = this.pageSize;
        param.offset = '';
        param.keyword = '';
        this.progressEmits.emit(param);
        this.sandbox.getProductList(param);
    };
    /**
     * Handles  'applyFilter' event. Calls  getProductList.
     * if (selectedLink == 'Min') assign price value 1 ,
     * else assign price value 1
     */
    ProductFilterComponent.prototype.applyFilter = function () {
        this.keyword = this.filterForm.value.keyword;
        this.sku = this.filterForm.value.sku;
        this.status = this.filterForm.value.status;
        if (this.selectedLink === 'Min') {
            this.price = 1;
        }
        if (this.selectedLink === 'Max') {
            this.price = 2;
        }
        this.getProductList();
    };
    /**
     * Handles  'getProductList' event. Calls sandbox getProductList function ,
     * if (pagenationCount) then calls sandbox getProductCount.
     * @param params with pagination values
     * @param form entire form value
     */
    ProductFilterComponent.prototype.getProductList = function () {
        var params = {};
        params.offset = '';
        params.limit = this.pageSize;
        params.keyword = this.keyword;
        params.sku = this.sku;
        params.status = this.status;
        params.price = this.price;
        this.progressEmits.emit(params);
        this.sandbox.getProductList(params);
        params.limit = '';
        params.count = true;
        this.sandbox.getProductCount(params);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductFilterComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductFilterComponent.prototype, "progressEmits", void 0);
    ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-product-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/theme/default/admin/catalog/components/product/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/theme/default/admin/catalog/components/product/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_3__["ProductSandbox"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/list/list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/list/list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row products-section products-sub-section\">\r\n    <div class=\"col-12\">\r\n        <div class=\"breadcrumbs-row\">\r\n            <div class=\"bc-col\">\r\n                <ul>\r\n                    <li><a> Catalog </a></li>\r\n                    <li> Products</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"bc-col-btn\">\r\n                <button class=\"btn\" [routerLink]=\"['/catalog/product/add']\"><img\r\n                        src=\"assets/img/add-white-ico.png\">Add Product\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Breadcrumbs-->\r\n    <div class=\"col-12\">\r\n        <div class=\"flex filter-row\">\r\n            <div class=\"filter-lft\">\r\n                <div class=\"toggle\">\r\n                    <p>Filters</p>\r\n                    <input class=\"tgl tgl-light\" id=\"cb1\" type=\"checkbox\" [checked]=\"true\" (change)=\"changeFilter($event)\" />\r\n                    <label class=\"tgl-btn\" for=\"cb1\"></label>\r\n                </div>\r\n                <div class=\"order-status\">\r\n                    <p>Status</p>\r\n                    <li style=\"list-style: none\">\r\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-right: 6px;vertical-align: middle;background-color: #32b643;\"></span>Active\r\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-left: 3px;margin-right: 7px;vertical-align: middle;background-color: #ea5738e6;\"></span>In Active\r\n\r\n                    </li>\r\n                </div>\r\n            </div>\r\n            <!--Lft-->\r\n            <div class=\"filter-nav-list\">\r\n                <ul class=\"flex\">\r\n                    <li *ngIf=\"checkedData.length==0\" style=\"margin-left: 15px;\">\r\n                        <a (click)=\"bulkDeleteEmpty()\"><img src=\"assets/img/delete-ico.png\">Delete</a>\r\n                    </li>\r\n                    <li *ngIf=\"checkedData.length>0\" style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent1\" placement=\"left\" #deletePop=\"ngbPopover\">\r\n                        <a><img src=\"assets/img/delete-ico.png\">Delete\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"checkedData.length==0\">\r\n                        <a (click)=\"bulkDeleteEmpty()\" placement=\"top-right\"> <img src=\"assets/img/export-ico.png\"> Export </a>\r\n                    </li>\r\n                    <li *ngIf=\"checkedData.length>0\">\r\n                        <a (click)=\"exportExcel()\" placement=\"top-right\"> <img src=\"assets/img/export-ico.png\"> Export </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!--Right-->\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"flex product-wrap example-full-width\">\r\n\r\n    <div *ngIf=\"buttoncheck == true\" class=\"filter-section\">\r\n\r\n        <div class=\"w3-container w3-animate-left\">\r\n            <!--FILTER-->\r\n            <app-catalog-product-filter (progressEmits)=\"receiveProgress($event)\" [pageSize]=\"pageSize\"></app-catalog-product-filter>\r\n        </div>\r\n    </div>\r\n    <!--LIST-->\r\n    <div class=\"product-table\" [ngClass]=\"{'changesize': buttoncheck == true }\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\" width=\"5%\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <th scope=\"col\">Image</th>\r\n                        <th scope=\"col\">Sku</th>\r\n                        <th scope=\"col\" width=\"20%\">Product Name</th>\r\n                        <th scope=\"col\">Price</th>\r\n                        <th scope=\"col\" width=\"100px\">Today Deals</th>\r\n                        <th scope=\"col\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let product of productSandbox.productList$ | async; let i=index\">\r\n                        <th scope=\"row\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectChkBox($event, product.productId)\" id={{product.productId}} [checked]=\"checkCondition[product.productId]\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"checkmodules[product.productId]\">\r\n                                    <label class=\"custom-control-label\" for={{product.productId}}></label>\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">\r\n                            <img *ngIf=\"product.productImage.image\" [src]=\"imageUrl + '?path=' +product.productImage.containerName +  '&name=' + product.productImage.image +'&width=60&height=60'\" onError=\"this.src='/assets/error-images/Load icon Products.png';\" (load)=\"productListImageLoading(product.productId)\"\r\n                                [hidden]=\"!productListImage[product.productId]\">\r\n                            <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"productListImage[product.productId]\">\r\n                        </td>\r\n                        <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">{{product.sku}}\r\n                            <div *ngIf=\"product.isActive === 1\">\r\n                                <span style=\"width: 41px;background: #32b643; color: white;display: inline-block;padding: 1px 4px;\"><b>Active</b></span>\r\n                            </div>\r\n                            <div *ngIf=\"product.isActive === 0\">\r\n                                <span style=\"background: #ea5738e6; color: white;width: 63px;display: inline-block;padding: 1px 4px;\"><b>In-Active</b></span>\r\n                            </div>\r\n                        </td>\r\n                        <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">{{product.name}}</td>\r\n\r\n                        <!-- <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">{{product.quantity}}</td> -->\r\n                        <td style=\"cursor: pointer;\" (click)=\"updateProduct(product.productId)\">\r\n                            $ {{product.price}}\r\n                        </td>\r\n                        <td>\r\n                            <div class=\"toggle\">\r\n                                <input class=\"tgl tgl-light\" id={{product.name}} [(ngModel)]=\"product.todaydeals\" (change)=\"todayDealsChange($event,product)\" type=\"checkbox\" />\r\n                                <label class=\"tgl-btn\" for={{product.name}}></label>\r\n                            </div>\r\n                        </td>\r\n\r\n                        <td>\r\n                            <i style=\"cursor: pointer; font-size: 15px\" class=\"fas fa-globe globe_icon\" (click)=\"product_Details(product.productId)\"></i>\r\n                            <a class=\"globe_icon\" style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\"> <img src=\"assets/img/edit-ico.png\"> </a>\r\n                            <i [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: -2px; cursor: pointer\" class=\"fas fa-trash globe_icon\">\r\n                            <ng-template #deleteContent>\r\n                                <div class=\"style\">\r\n                                    <div class=\"modal-header\">\r\n                                        <h6 class=\"modal-title\"\r\n                                            style=\"margin-left: 17%;\"> Do You Want to Delete ?</h6>\r\n                                    </div>\r\n\r\n                                    <div class=\"modal-footer\" style=\"margin-right: 23%;\">\r\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\"\r\n                                                data-dismiss=\"modal\">No\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-success\"\r\n                                                (click)=\"deleteProduct(product.productId)\"\r\n                                                data-dismiss=\"modal\">Yes\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </i>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"no_data\" *ngIf=\"(productSandbox.productList$ | async)?.length==0\">\r\n                <p>Items not found</p>\r\n            </div>\r\n        </div>\r\n        <mat-paginator [length]=\"productSandbox.productCount$ | async\" [pageSize]=\"pageSize\" [pageIndex]=\"index\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>\r\n<ng-template #deleteContent1>\r\n    <div class=\"style\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\r\n                </button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"bulkDelete()\" data-dismiss=\"modal\">\r\n                    Yes\r\n                </button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/list/list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/list/list.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ed571f !important;\n  border: #ed571f !important;\n}\n\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlZDU3MWYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiNlZDU3MWYgICFpbXBvcnRhbnQ7XG59XG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xufSIsIi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59Il19 */"
=======
module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ed571f !important;\n  border: #ed571f !important;\n}\n\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2xpc3QvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXGFkbWluL3NyY1xcdGhlbWVcXGRlZmF1bHRcXGFkbWluXFxjYXRhbG9nXFxjb21wb25lbnRzXFxwcm9kdWN0XFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREVBO0VBQ0Usb0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvcHJvZHVjdC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlZDU3MWYgIWltcG9ydGFudDtcclxuICBib3JkZXI6I2VkNTcxZiAgIWltcG9ydGFudDtcclxufVxyXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XHJcbn0iLCIuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogI2VkNTcxZiAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2w6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xufSJdfQ== */"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/list/list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/list/list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/product/product.sandbox */ "./src/core/admin/catalog/product/product.sandbox.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/admin/catalog/layout/layout.sandbox */ "./src/core/admin/catalog/layout/layout.sandbox.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _core_admin_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/admin/layout/layout.sandbox */ "./src/core/admin/layout/layout.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */









var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productSandbox, commonSandbox, router, toastr, modalService, layoutSandbox, configService) {
        this.productSandbox = productSandbox;
        this.commonSandbox = commonSandbox;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.layoutSandbox = layoutSandbox;
        this.configService = configService;
        this.keyword = '';
        this.index = 0;
        // toogle filter button
        this.isActive = [];
        // condition for table responsive
        this.buttoncheck = true;
        this.productListImage = {};
        this.checkCondition = [];
        this.checkmodules = [];
        this.checkedData = [];
        this.unCheckData = [];
        // pagination
        this.previousSort = {};
        this.selectedSortField = '';
        this.currentPage = 1;
    }
    /** initially calling RatingReviewSandbox
     * getProductlist with pagination data with pagination count
     * and assigning  configService url
     * */
    ProductListComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.isCount = true;
        this.ProductLists();
        // this.imageUrl = this.configService.get('resize').imageUrl;
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].imageUrl;
        this.productUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].productUrl;
        this.layoutCount();
    };
    /**
     * Handles  'layoutCount' event. Calls productSandbox getProductList,
     *  if (isCount) Calls listSandbox getLayoutCount.
     *
     * @param params with pagination value
     */
    ProductListComponent.prototype.layoutCount = function () {
        this.layoutSandbox.getProductListCount({ count: true });
        this.layoutSandbox.getActiveProductListCount({ status: '1', count: true });
        this.layoutSandbox.getInActiveProductListCount({
            status: '0',
            count: true
        });
    };
    /**
     * Handles  'getProductlist' event. Calls productSandbox getProductList,
     *  if (isCount) Calls productSandbox getProductCount.
     *
     * @param params with pagination value
     */
    ProductListComponent.prototype.ProductLists = function () {
        var params = {};
        params.offset = this.offset;
        params.limit = this.pageSize;
        params.keyword = this.keyword;
        params.sku = this.sku;
        params.status = this.status;
        params.price = this.price;
        this.productSandbox.getProductList(params);
        if (this.isCount) {
            params.limit = '';
            params.count = true;
            this.productSandbox.getProductCount(params);
        }
    };
    // open filter component
    ProductListComponent.prototype.changeFilter = function (event) {
        this.buttoncheck = event.target.checked;
    };
    // calls productSandbox getProductlist with pagination values
    ProductListComponent.prototype.onPageChange = function (event) {
        this.isCount = false;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        this.offset = event.pageSize * event.pageIndex;
        this.ProductLists();
    };
    /** calls productSandbox doProductDelete,
     * if (_delete) then calls getProductlist .
     *
     *@param params with productId from deleteProduct button .
     */
    ProductListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        // event.stopPropagation();
        var params = {};
        params.productId = id;
        this.productSandbox.doProductDelete(params);
        this.productSandbox.deletedProduct$.subscribe(function (_delete) {
            if (_delete) {
                if (_delete.status === 1) {
                    _this.ProductLists();
                }
            }
        });
    };
    // navigation to update product with productId
    ProductListComponent.prototype.updateProduct = function (productId) {
        this.router.navigate(['/catalog/product/edit', productId]);
    };
    // receive param from filter component .And calls paginations event
    ProductListComponent.prototype.receiveProgress = function (event) {
        this.index = 0;
        this.paginations();
        this.keyword = event.keyword;
        this.sku = event.sku;
        this.status = event.status;
        this.price = event.price;
    };
    // calls productSandbox getProductCount with params
    ProductListComponent.prototype.paginations = function () {
        var params = {};
        params.offset = this.offset;
        params.limit = this.pageSize;
        params.keyword = '';
        params.count = true;
        this.productSandbox.getProductCount(params);
    };
    // perticular product details will show
    ProductListComponent.prototype.product_Details = function (id) {
        window.open(this.productUrl + 'products/productdetails/' + id);
    };
    /**
     * Handles  'todayDealsChange' event. Calls productSandbox productTodayDeals function if FeatureValue is true,
     * else calls productSandbox productTodayDeals
     *
     * @param event and prodinfo form onFilterChange input.
     *
     */
    ProductListComponent.prototype.todayDealsChange = function (event, prodinfo) {
        var params = {};
        params.productId = prodinfo.productId;
        var FeatureValue = event.target.checked;
        if (FeatureValue === true) {
            params.todayDeals = 1;
            this.productSandbox.productTodayDeals(params);
        }
        else {
            params.todayDeals = 0;
            this.productSandbox.productTodayDeals(params);
        }
    };
    // Product List ImageLoader
    ProductListComponent.prototype.productListImageLoading = function (id) {
        this.productListImage[id] = true;
    };
    // bulkDelete
    ProductListComponent.prototype.bulkDelete = function () {
        var _this = this;
        var param = {};
        param.productId = this.checkedData;
        this.productSandbox.bulkDelete(param);
        this.checkedData = [];
        this.productSandbox.deletedProduct$.subscribe(function (_delete) {
            if (_delete) {
                if (_delete.status === 1) {
                    _this.ProductLists();
                }
            }
        });
    };
    ProductListComponent.prototype.selectChkBox = function (event, productId) {
        var _this = this;
        if (event.target.checked === true) {
            this.checkedData.push(productId);
        }
        if (event.target.checked === false) {
            this.unCheckData.push(productId);
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
    // export Excel
    ProductListComponent.prototype.exportExcel = function () {
        var param = {};
        param.productId = this.checkedData;
        this.productSandbox.productExcel(param);
    };
    // bulkDeleteEmpty
    ProductListComponent.prototype.bulkDeleteEmpty = function () {
        this.showNotificationError('Choose atleast one Product');
    };
    /**
     * Shows error notification with given title and message
     *
     * @params message
     */
    ProductListComponent.prototype.showNotificationError = function (message) {
        this.toastr.errorToastr(message);
    };
    /**
     * Handles form 'onPageChange' event. when page changes
     * @param event form event
     */
    ProductListComponent.prototype.pageChange = function (event) {
        this.selectedSortField = '';
        window.scroll(0, 0);
        this.currentPage = event;
        this.offset = this.pageSize * (event - 1);
        this.ProductLists();
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-product-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/catalog/components/product/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/catalog/components/product/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_4__["ProductSandbox"],
            _core_admin_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_9__["LayoutSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _core_admin_catalog_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_7__["LayoutsSandbox"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/product.module.ts":
/*!******************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/product.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/catalog/components/product/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/catalog/components/product/list/list.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter/filter.component */ "./src/theme/default/admin/catalog/components/product/filter/filter.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/category/categories.sandbox */ "./src/core/admin/catalog/category/categories.sandbox.ts");
/* harmony import */ var _core_admin_catalog_product_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/product/product.service */ "./src/core/admin/catalog/product/product.service.ts");
/* harmony import */ var _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/product/product.sandbox */ "./src/core/admin/catalog/product/product.sandbox.ts");
/* harmony import */ var _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/category/categories.service */ "./src/core/admin/catalog/category/categories.service.ts");
/* harmony import */ var _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/brand/brandApiClientservice */ "./src/core/admin/catalog/brand/brandApiClientservice.ts");
/* harmony import */ var _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/brand/brand.sandbox */ "./src/core/admin/catalog/brand/brand.sandbox.ts");
/* harmony import */ var _core_admin_catalog_media_effects_media_effect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/media/effects/media.effect */ "./src/core/admin/catalog/media/effects/media.effect.ts");
/* harmony import */ var _core_admin_catalog_media_media_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/media/media.service */ "./src/core/admin/catalog/media/media.service.ts");
/* harmony import */ var _core_admin_catalog_media_media_sandbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../core/admin/catalog/media/media.sandbox */ "./src/core/admin/catalog/media/media.sandbox.ts");
/* harmony import */ var _product_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product.routing */ "./src/theme/default/admin/catalog/components/product/product.routing.ts");
/* harmony import */ var _core_admin_shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../core/admin/shared/validation-directives/onlyNumber.module */ "./src/core/admin/shared/validation-directives/onlyNumber.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components */ "./src/theme/default/admin/shared/components/index.ts");
/* harmony import */ var _core_admin_shared_pipes_category_search_pipe_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../core/admin/shared/pipes/category-search.pipe.module */ "./src/core/admin/shared/pipes/category-search.pipe.module.ts");

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

// Shared Modules

// ENTRY COMPONENTS





var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_add_component__WEBPACK_IMPORTED_MODULE_5__["ProductAddComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["ProductFilterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_23__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _product_routing__WEBPACK_IMPORTED_MODULE_19__["ProductRoutingModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_core_admin_catalog_media_effects_media_effect__WEBPACK_IMPORTED_MODULE_16__["MediaEffects"]]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_21__["CKEditorModule"],
                _core_admin_shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_20__["NumberAcceptModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
                _core_admin_shared_pipes_category_search_pipe_module__WEBPACK_IMPORTED_MODULE_24__["PipeModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _core_admin_catalog_product_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
                _core_admin_catalog_product_product_sandbox__WEBPACK_IMPORTED_MODULE_12__["ProductSandbox"],
                _core_admin_catalog_category_categories_sandbox__WEBPACK_IMPORTED_MODULE_10__["CategoriesSandbox"],
                _core_admin_catalog_category_categories_service__WEBPACK_IMPORTED_MODULE_13__["CategoriesService"],
                _core_admin_catalog_brand_brandApiClientservice__WEBPACK_IMPORTED_MODULE_14__["BrandApiClient"],
                _core_admin_catalog_brand_brand_sandbox__WEBPACK_IMPORTED_MODULE_15__["BrandSandbox"],
                _core_admin_catalog_media_media_sandbox__WEBPACK_IMPORTED_MODULE_18__["MediaSandbox"],
                _core_admin_catalog_media_media_service__WEBPACK_IMPORTED_MODULE_17__["MediaService"]
            ],
            bootstrap: [],
            entryComponents: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/product.routing.ts":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/product.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/catalog/components/product/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/catalog/components/product/add/add.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var productRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["ProductAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["ProductAddComponent"]
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(productRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-product-product-module.js.map