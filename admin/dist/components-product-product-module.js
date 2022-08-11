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

module.exports = "<!--REACTIVE FORM-->\n<form novalidate [formGroup]=\"user\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row noborder\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a href=\"javascript:void(0)\" [routerLink]=\"['/catalog/product']\"> Products</a></li>\n                    <li> Add Product</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn ap-col-btn\">\n                <button class=\"btn btn-save\" (click)=\"onSubmit(user.value)\"><img src=\"assets/img/tick-round-white.png\">\n                    Save\n                </button>\n                <button class=\"btn btn-cancel\" [routerLink]=\"['/catalog/product']\"><img\n                        src=\"assets/img/close-white-ico.png\">\n                    Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n    <div class=\"flex addproduct-wrap\">\n        <div class=\"card ap-general\">\n            <div class=\"ap-header\">\n                <span> 1 </span>General\n            </div>\n            <div class=\"flex ap-body\">\n\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Products Name <sup>*</sup></label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Products Name\" formControlName=\"productName\" [ngClass]=\"{'validationcolor':user.get('productName').hasError('required') && user.get('productName').touched&&submittedValues==true}\">\n\n                        <div class=\"error\" *ngIf=\"user.get('productName').hasError('required') && user.get('productName').touched&&submittedValues==true\">\n                            Product Name is required\n                        </div>\n\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label> Sku<sup>*</sup></label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Sku Number\" formControlName=\"sku\" [ngClass]=\"{'validationcolor':user.get('sku').hasError('required') && user.get('sku').touched&&submittedValues==true}\">\n\n                        <div class=\"error\" *ngIf=\"user.get('sku').hasError('required') && user.get('sku').touched&&submittedValues==true\">\n                            sku is required\n                        </div>\n\n                    </div>\n                </div>\n                <!--Col-->\n                <div class=\"ap-body-col\">\n                    <div class=\"form-group\">\n                        <label>Meta Tag Title</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Meta Tag Title\" formControlName=\"metaTagTitle\">\n\n\n                    </div>\n                </div>\n                <!--Col-->\n\n\n                <div class=\"ap-body-col width100\">\n                    <div class=\"form-group\">\n                        <label>Product Description</label>\n                        <ckeditor formControlName=\"productDescription\">\n                        </ckeditor>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n        <!--General-->\n\n        <div class=\"card ap-general ap-info\">\n            <div class=\"ap-header\">\n                <span> 2 </span>More Information\n            </div>\n            <div class=\"flex ap-body\">\n                <ngb-tabset style=\"width:100%;\">\n                    <ngb-tab>\n                        <ng-template ngbTabTitle>Categories</ng-template>\n                        <ng-template ngbTabContent>\n                            <div class=\"flex categories-row\">\n                                <div class=\"categories-col\">\n                                    <h3>AvailablCategories</h3>\n                                    <div class=\"form-group search-categories\">\n\n                                        <form class=\"example-form\">\n                                            <mat-form-field class=\"example-full-width\" style=\"    width: 100%;\">\n                                                <input type=\"text\" placeholder=\"\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" matInput>\n                                            </mat-form-field>\n                                        </form>\n                                    </div>\n\n                                    <ul class=\"flex category-list over-flowx\">\n\n                                        <li *ngFor=\"let arr of (categoriessandbox.getCategoriesList$ | async)  | filter : searchText;let i=index\" (click)=\"selectCategory(arr,i)\" style=\"cursor: pointer\">\n                                            <a href=\"javascript:void(0)\"><img src=\"assets/img/add-green-ico.png\">\n                                            </a>\n                                            {{arr.name}}\n                                        </li>\n                                    </ul>\n                                </div>\n                                <!---->\n                                <div class=\"categories-col\">\n                                    <h3>Selected Categories</h3>\n                                    <div class=\"form-group search-categories\">\n\n                                        <form class=\"example-form\">\n                                            <mat-form-field class=\"example-full-width\" style=\"    width: 100%;\">\n                                                <input type=\"text\" placeholder=\"\" aria-label=\"Assignee\" matInput (keyup)=\"searchSelectedCategory($event.target.value)\">\n                                            </mat-form-field>\n                                        </form>\n\n\n                                        <ul class=\"flex category-list over-flowx\" *ngIf=\"editId\" style=\"cursor: pointer\">\n                                            <span>  <li *ngFor=\"let data of selectedCategories;let i=index\"\n                                                            (click)=\"removeCategory(data,i)\"><a\n                                                        href=\"javascript:void(0)\"> <img\n                                                        src=\"assets/img/minus-red-ico.png\"> </a> {{data.categoryName}}</li></span>\n\n                                        </ul>\n                                        <ul class=\"flex category-list \" *ngIf=\"!editId && show!=true\" style=\"cursor: pointer\">\n                                            <span> <li *ngFor=\"let selected of selectedCategories;let i=index\"\n                                                           (click)=\"removeCategory(selected,i)\"><a\n                                                        href=\"javascript:void(0)\"> <img\n                                                        src=\"assets/img/minus-red-ico.png\"> </a> {{selected.name}}</li></span>\n\n                                        </ul>\n                                        <ul class=\"flex category-list \" *ngIf=\"!editId && show==true\" style=\"cursor: pointer\">\n                                            <span><li *ngFor=\"let selected of filteredArray;let i=index\"\n                                                         (click)=\"removeCategory(selected,i)\"><a\n                                                       href=\"javascript:void(0)\"> <img\n                                                       src=\"assets/img/minus-red-ico.png\"> </a> {{selected.name}}</li></span>\n                                        </ul>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle> Data</ng-template>\n                        <ng-template ngbTabContent>\n                            <div class=\"flex data-row\">\n\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Brand <sup>*</sup></label>\n                                        <select class=\"custom-select col-12\" formControlName=\"model\" [ngClass]=\"{'validationcolor':user.get('model').hasError('required') && user.get('model').touched&&submittedValues==true}\">\n                                            <option value=''>- -Select Brand- -</option>\n                                            <option *ngFor=\"let arr of brandsandbox.getManufactureList$|async\"\n                                                    value={{arr.manufacturerId}}>{{arr.name}}\n                                            </option>\n                                        </select>\n\n                                        <div class=\"error\" *ngIf=\"user.get('model').hasError('required') && user.get('model').touched&&submittedValues==true\">\n                                            Model is required\n                                        </div>\n\n\n                                    </div>\n                                </div>\n                                <!--Col-->\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Upc\n\n                                        </label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Upc\" formControlName=\"upc\">\n\n\n                                    </div>\n                                </div>\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Location</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Location\" formControlName=\"location\">\n\n                                    </div>\n                                </div>\n                                <!--Col-->\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Price <sup>*</sup></label>\n                                        <input type=\"text\" class=\"form-control\" appOnlyNumber [isDot]=\"true\" placeholder=\"Price\" formControlName=\"price\" [ngClass]=\"{'validationcolor':user.get('price').hasError('required') && user.get('price').touched&&submittedValues==true}\">\n\n                                        <div class=\"error\" *ngIf=\"user.get('price').hasError('required') && user.get('price').touched&&submittedValues==true\">\n                                            Price is required\n                                        </div>\n\n\n                                    </div>\n                                </div>\n\n                                <!--Col-->\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Out of Stock Status\n                                            <sup>*</sup>\n                                        </label>\n                                        <select class=\"custom-select col-12\" formControlName=\"outOfStockStatus\" placeholder=\"Stock Status\" [ngClass]=\"{'validationcolor':user.get('outOfStockStatus').hasError('required') && user.get('outOfStockStatus').touched&&submittedValues==true}\">\n                                            <option value=''>- -Select Status- -</option>\n                                            <option *ngFor=\"let stocklist of stockStatusSandbox.getStockList$ | async\"\n                                                    value={{stocklist.stockStatusId}}>{{stocklist.name}}\n                                            </option>\n                                        </select>\n\n                                        <div class=\"error\" *ngIf=\"user.get('outOfStockStatus').hasError('required') && user.get('outOfStockStatus').touched&&submittedValues==true\">\n                                            Out of Stock Status is required\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!--Col-->\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Date Available</label>\n                                        <mat-form-field>\n                                            <input matInput [matDatepicker]=\"picker_dateAvailable\" formControlName=\"dateAvailable\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker_dateAvailable\"></mat-datepicker-toggle>\n                                            <mat-datepicker #picker_dateAvailable></mat-datepicker>\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Status<sup>*</sup> </label>\n\n\n                                        <select class=\"custom-select col-12\" formControlName=\"status\" [ngClass]=\"{'validationcolor':user.get('status').hasError('required') && user.get('status').touched&&submittedValues==true}\">\n                                            <option value=''>- -Select Status- -</option>\n                                            <option value=\"1\">Enabled</option>\n                                            <option value=\"0\">Disabled</option>\n                                        </select>\n\n\n                                        <div class=\"error\" *ngIf=\"user.get('status').hasError('required') && user.get('status').touched&&submittedValues==true\">\n                                            Status is required\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--Col-->\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Sort Order</label>\n                                        <input type=\"text\" class=\"form-control\" appOnlyNumber placeholder=\"Sort Order\" formControlName=\"sortOrder\">\n\n\n                                    </div>\n                                </div>\n\n                                <div class=\"data-col\">\n                                    <div class=\"form-group\">\n                                        <label>Condition<sup>*</sup></label>\n\n\n                                        <select class=\"custom-select col-12\" formControlName=\"condition\" [ngClass]=\"{'validationcolor':user.get('condition').hasError('required') && user.get('condition').touched&&submittedValues==true}\">\n                                            <option value=''>- -Select Condition- -</option>\n                                            <option value=\"1\">New</option>\n                                            <option value=\"2\">Used</option>\n                                        </select>\n\n                                        <div class=\"error\" *ngIf=\"user.get('condition').hasError('required') && user.get('condition').touched&&submittedValues==true\">\n                                            Condition is required\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <!--Col-->\n                                <div class=\"data-col\">\n                                    <!--<div class=\"form-group\">-->\n                                    <label class=\"control-label\" style=\"margin-left: 5px;padding: 1px 6px;\">Shipping is required</label>\n\n                                    <mat-radio-group formControlName=\"requiredShipping\">\n                                        <mat-radio-button value=\"1\">Free</mat-radio-button>\n                                        <mat-radio-button value=\"2\">Paid</mat-radio-button>\n                                    </mat-radio-group>\n                                    <div class=\"error\" *ngIf=\"user.get('requiredShipping').hasError('required') && user.get('requiredShipping').touched&&submittedValues==true\">\n                                        Shipping Mode is required\n                                    </div>\n                                </div>\n                                <!--Col-->\n                            </div>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle>Images</ng-template>\n                        <ng-template ngbTabContent>\n                            <div class=\"flex image-row\">\n                                <div class=\"image-col\" *ngFor=\"let data of uploadImage;let i=index\">\n                                    <div class=\"img-hdr flex\" *ngIf=\"!editId\">\n                                        <input type=\"radio\" name=\"'imageSelection'\" [checked]=\"length==i\" (change)=\"checkBox($event,i)\">\n                                        <a href=\"javascript:void(0)\" (click)=\"deleteImage(i)\"> <img src=\"assets/img/delete-ico.png\"> </a>\n                                    </div>\n                                    <div class=\"img-hdr flex\" *ngIf=\"editId\">\n                                        <input type=\"radio\" name=\"'imageSelection'\" [checked]=\"defaultImageValue==data.defaultImage\" (change)=\"checkBox($event,i)\">\n                                        <a href=\"javascript:void(0)\" (click)=\"deleteImage(i)\"> <img src=\"assets/img/delete-ico.png\"> </a>\n                                    </div>\n                                    <div class=\"img-bdy\">\n                                        <img [src]=\"imageUrls + '?path=' + data.containerName + '&name=' + data.image + '&width=60&height=60'\" style=\" width:100%; height:100%\">\n                                    </div>\n                                </div>\n                                <!--Col-->\n                                <div class=\"image-col\">\n                                    <div class=\"img-dflt\">\n                                        <input style=\"cursor: pointer\" (click)=\" uploadProductImages()\">\n                                        <img src=\"assets/img/add-photo-big.png\">\n                                        <p>Add Images</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/add/add.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/add/add.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* LOGIN VALIDATION*/\n.validationcolor {\n  border-color: red;\n}\n.toggle .tgl:checked + .tgl-btn:after {\n  top: 0px !important;\n}\n.toggle .tgl + .tgl-btn:after {\n  top: 0px !important;\n}\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: white !important;\n}\n.toggle .tgl + .tgl-btn:after {\n  background-color: white !important;\n}\n.toggle .tgl + .tgl-btn {\n  height: 1.7em !important;\n}\n.toggle .tgl-light:checked + .tgl-btn {\n  background: #008c00 !important;\n}\n.toggle .tgl-light + .tgl-btn {\n  background: #f00 !important;\n}\n.optionValidator {\n  background: #ed571f !important;\n}\n.error {\n  color: red;\n}\n/* Blue */\n.info {\n  border-color: blue;\n  color: white;\n  background: blue;\n}\n.info:hover {\n  background: green;\n  color: white;\n}\nmat-radio-button {\n  padding: 1px 3px !important;\n}\n.datePiker {\n  padding: 3px 0px !important;\n}\n.error-field {\n  border: 1px soild #ff1e1e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2FkZC9hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQUE7QUFFQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLG1CQUFBO0FDQUo7QURHQTtFQUNJLG1CQUFBO0FDQUo7QURHQTtFQUNJLGtDQUFBO0FDQUo7QURHQTtFQUNJLGtDQUFBO0FDQUo7QURHQTtFQUNJLHdCQUFBO0FDQUo7QURHQTtFQUNJLDhCQUFBO0FDQUo7QURHQTtFQUNJLDJCQUFBO0FDQUo7QURJQTtFQUNJLDhCQUFBO0FDREo7QURJQTtFQUNJLFVBQUE7QUNESjtBREtBLFNBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0hKO0FETUE7RUFDSSwyQkFBQTtBQ0hKO0FETUE7RUFDSSwyQkFBQTtBQ0hKO0FETUE7RUFDSSxvQ0FBQTtBQ0hKIiwiZmlsZSI6InNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMT0dJTiBWQUxJREFUSU9OKi9cblxuLnZhbGlkYXRpb25jb2xvciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi50b2dnbGUgLnRnbDpjaGVja2VkKy50Z2wtYnRuOmFmdGVyIHtcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wrLnRnbC1idG46YWZ0ZXIge1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUgLnRnbDpjaGVja2VkKy50Z2wtYnRuOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wrLnRnbC1idG46YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUgLnRnbCsudGdsLWJ0biB7XG4gICAgaGVpZ2h0OiAxLjdlbSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wtbGlnaHQ6Y2hlY2tlZCsudGdsLWJ0biB7XG4gICAgYmFja2dyb3VuZDogIzAwOGMwMCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wtbGlnaHQrLnRnbC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmMDAgIWltcG9ydGFudDtcbn1cblxuLy8gb3B0aW9uIHNlbGVjdGVkIHZhbGlkYXRvclxuLm9wdGlvblZhbGlkYXRvciB7XG4gICAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuLyogQmx1ZSAqL1xuXG4uaW5mbyB7XG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuXG4uaW5mbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxcHggM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlUGlrZXIge1xuICAgIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yLWZpZWxkIHtcbiAgICBib3JkZXI6IDFweCBzb2lsZCAjZmYxZTFlICFpbXBvcnRhbnQ7XG59IiwiLyogTE9HSU4gVkFMSURBVElPTiovXG4udmFsaWRhdGlvbmNvbG9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi50b2dnbGUgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wgKyAudGdsLWJ0bjphZnRlciB7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wgKyAudGdsLWJ0bjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUgLnRnbCArIC50Z2wtYnRuIHtcbiAgaGVpZ2h0OiAxLjdlbSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wtbGlnaHQ6Y2hlY2tlZCArIC50Z2wtYnRuIHtcbiAgYmFja2dyb3VuZDogIzAwOGMwMCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlIC50Z2wtbGlnaHQgKyAudGdsLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmMDAgIWltcG9ydGFudDtcbn1cblxuLm9wdGlvblZhbGlkYXRvciB7XG4gIGJhY2tncm91bmQ6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogQmx1ZSAqL1xuLmluZm8ge1xuICBib3JkZXItY29sb3I6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLmluZm86aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZzogMXB4IDNweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZVBpa2VyIHtcbiAgcGFkZGluZzogM3B4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItZmllbGQge1xuICBib3JkZXI6IDFweCBzb2lsZCAjZmYxZTFlICFpbXBvcnRhbnQ7XG59Il19 */"

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
        return false;
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
            console.log("******", user, 'params', this.param);
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

module.exports = "<!--<div [formGroup]=\"prodfilter\" class=\"new-user\">-->\n\n<form [formGroup]=\"filterForm\">\n\n    <div class=\"form-group\">\n        <label for=\"keyword\">Product Name</label>\n        <input type=\"text\" formControlName=\"keyword\" class=\"form-control\" id=\"Keyword\" aria-describedby=\"emailHelp\" placeholder=\"Enter Product Name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"sku\">Sku</label>\n        <input type=\"text\" formControlName=\"sku\" class=\"form-control\" id=\"sku\" placeholder=\"Sku Number\">\n    </div>\n    <div class=\"form-group\">\n        <label>Price</label>\n\n        <div class=\"radio\">\n            <label class=\"prod_filter\">\n                <input type=\"radio\" name=\"price\" value=\"Min\" (click)=\"selectPrice('Min')\">\n               Min-price\n            </label>\n            <label class=\"prod_filter\">\n                <input type=\"radio\" name=\"price\" value=\"Max\" (click)=\"selectPrice('Max')\">\n                Max-price\n            </label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Status</label>\n        <select class=\"custom-select col-12\" id=\"inlineFormCustomSelect\" formControlName=\"status\">\n            <option value=\"\" selected>- -Select Status- -</option>\n            <option value=\"1\">Active</option>\n            <option value=\"0\">In-Active</option>\n        </select>\n    </div>\n    <div class=\"text-right filter-btns\">\n        <a (click)=\"resetFilter()\" style=\"cursor: pointer\">.Reset</a>\n\n        <button type=\"submit\" class=\"btn\" (click)=\"applyFilter()\">Apply Filters\n        </button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/filter/filter.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/filter/filter.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  background: #ed571f !important;\n}\n\n.prod_filter {\n  padding: 1px 5px !important;\n}\n\n.form-group {\n  margin-bottom: 2rem !important;\n  margin-left: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL2NhdGFsb2cvY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvcHJvZHVjdC9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsdGVyIGJ0biBiYWNrZ3JvdW5kXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogI2VkNTcxZiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZF9maWx0ZXIge1xuICBwYWRkaW5nOiAxcHggNXB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cbiIsIi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kX2ZpbHRlciB7XG4gIHBhZGRpbmc6IDFweCA1cHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59Il19 */"

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

module.exports = "<div class=\"row products-section products-sub-section\">\n    <div class=\"col-12\">\n        <div class=\"breadcrumbs-row\">\n            <div class=\"bc-col\">\n                <ul>\n                    <li><a> Catalog </a></li>\n                    <li> Products</li>\n                </ul>\n            </div>\n            <div class=\"bc-col-btn\">\n                <button class=\"btn\" [routerLink]=\"['/catalog/product/add']\"><img\n                        src=\"assets/img/add-white-ico.png\">Add Product\n                </button>\n            </div>\n        </div>\n    </div>\n    <!--Breadcrumbs-->\n    <div class=\"col-12\">\n        <div class=\"flex filter-row\">\n            <div class=\"filter-lft\">\n                <div class=\"toggle\">\n                    <p>Filters</p>\n                    <input class=\"tgl tgl-light\" id=\"cb1\" type=\"checkbox\" [checked]=\"true\" (change)=\"changeFilter($event)\" />\n                    <label class=\"tgl-btn\" for=\"cb1\"></label>\n                </div>\n                <div class=\"order-status\">\n                    <p>Status</p>\n                    <li style=\"list-style: none\">\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-right: 6px;vertical-align: middle;background-color: #32b643;\"></span>Active\n                        <span style=\"display: inline-block;width: 14px;height: 16px;margin-left: 3px;margin-right: 7px;vertical-align: middle;background-color: #ea5738e6;\"></span>In Active\n\n                    </li>\n                </div>\n            </div>\n            <!--Lft-->\n            <div class=\"filter-nav-list\">\n                <ul class=\"flex\">\n                    <li *ngIf=\"checkedData.length==0\" style=\"margin-left: 15px;\">\n                        <a (click)=\"bulkDeleteEmpty()\"><img src=\"assets/img/delete-ico.png\">Delete</a>\n                    </li>\n                    <li *ngIf=\"checkedData.length>0\" style=\"margin-left: 15px;\" [ngbPopover]=\"deleteContent1\" placement=\"left\" #deletePop=\"ngbPopover\">\n                        <a><img src=\"assets/img/delete-ico.png\">Delete\n                        </a>\n                    </li>\n                    <li *ngIf=\"checkedData.length==0\">\n                        <a (click)=\"bulkDeleteEmpty()\" placement=\"top-right\"> <img src=\"assets/img/export-ico.png\"> Export </a>\n                    </li>\n                    <li *ngIf=\"checkedData.length>0\">\n                        <a (click)=\"exportExcel()\" placement=\"top-right\"> <img src=\"assets/img/export-ico.png\"> Export </a>\n                    </li>\n                </ul>\n            </div>\n            <!--Right-->\n        </div>\n    </div>\n</div>\n<div class=\"flex product-wrap example-full-width\">\n\n    <div *ngIf=\"buttoncheck == true\" class=\"filter-section\">\n\n        <div class=\"w3-container w3-animate-left\">\n            <!--FILTER-->\n            <app-catalog-product-filter (progressEmits)=\"receiveProgress($event)\" [pageSize]=\"pageSize\"></app-catalog-product-filter>\n        </div>\n    </div>\n    <!--LIST-->\n    <div class=\"product-table\" [ngClass]=\"{'changesize': buttoncheck == true }\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" width=\"5%\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                </div>\n                            </div>\n                        </th>\n                        <th scope=\"col\">Image</th>\n                        <th scope=\"col\">Sku</th>\n                        <th scope=\"col\" width=\"20%\">Product Name</th>\n                        <th scope=\"col\">Price</th>\n                        <th scope=\"col\" width=\"100px\">Today Deals</th>\n                        <th scope=\"col\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let product of productSandbox.productList$ | async; let i=index\">\n                        <th scope=\"row\">\n                            <div class=\"form-group\">\n                                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"selectChkBox($event, product.productId)\" id={{product.productId}} [checked]=\"checkCondition[product.productId]\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"checkmodules[product.productId]\">\n                                    <label class=\"custom-control-label\" for={{product.productId}}></label>\n                                </div>\n                            </div>\n                        </th>\n                        <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">\n                            <img *ngIf=\"product.productImage.image\" [src]=\"imageUrl + '?path=' +product.productImage.containerName +  '&name=' + product.productImage.image +'&width=60&height=60'\" onError=\"this.src='/assets/error-images/Load icon Products.png';\" (load)=\"productListImageLoading(product.productId)\"\n                                [hidden]=\"!productListImage[product.productId]\">\n                            <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"productListImage[product.productId]\">\n                        </td>\n                        <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">{{product.sku}}\n                            <div *ngIf=\"product.isActive === 1\">\n                                <span style=\"width: 41px;background: #32b643; color: white;display: inline-block;padding: 1px 4px;\"><b>Active</b></span>\n                            </div>\n                            <div *ngIf=\"product.isActive === 0\">\n                                <span style=\"background: #ea5738e6; color: white;width: 63px;display: inline-block;padding: 1px 4px;\"><b>In-Active</b></span>\n                            </div>\n                        </td>\n                        <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">{{product.name}}</td>\n\n                        <!-- <td style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\">{{product.quantity}}</td> -->\n                        <td style=\"cursor: pointer;\" (click)=\"updateProduct(product.productId)\">\n                            $ {{product.price}}\n                        </td>\n                        <td>\n                            <div class=\"toggle\">\n                                <input class=\"tgl tgl-light\" id={{product.name}} [(ngModel)]=\"product.todaydeals\" (change)=\"todayDealsChange($event,product)\" type=\"checkbox\" />\n                                <label class=\"tgl-btn\" for={{product.name}}></label>\n                            </div>\n                        </td>\n\n                        <td>\n                            <i style=\"cursor: pointer; font-size: 15px\" class=\"fas fa-globe globe_icon\" (click)=\"product_Details(product.productId)\"></i>\n                            <a class=\"globe_icon\" style=\"cursor: pointer\" (click)=\"updateProduct(product.productId)\"> <img src=\"assets/img/edit-ico.png\"> </a>\n                            <i [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: -2px; cursor: pointer\" class=\"fas fa-trash globe_icon\">\n                            <ng-template #deleteContent>\n                                <div class=\"style\">\n                                    <div class=\"modal-header\">\n                                        <h6 class=\"modal-title\"\n                                            style=\"margin-left: 17%;\"> Do You Want to Delete ?</h6>\n                                    </div>\n\n                                    <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\"\n                                                data-dismiss=\"modal\">No\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-success\"\n                                                (click)=\"deleteProduct(product.productId)\"\n                                                data-dismiss=\"modal\">Yes\n                                        </button>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </i>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"no_data\" *ngIf=\"(productSandbox.productList$ | async)?.length==0\">\n                <p>Items not found</p>\n            </div>\n        </div>\n        <mat-paginator [length]=\"productSandbox.productCount$ | async\" [pageSize]=\"pageSize\" [pageIndex]=\"index\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\n        </mat-paginator>\n    </div>\n</div>\n<ng-template #deleteContent1>\n    <div class=\"style\">\n        <div class=\"modal-header\">\n            <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n        </div>\n\n        <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\" data-dismiss=\"modal\">No\n                </button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"bulkDelete()\" data-dismiss=\"modal\">\n                    Yes\n                </button>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/theme/default/admin/catalog/components/product/list/list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/theme/default/admin/catalog/components/product/list/list.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ed571f !important;\n  border: #ed571f !important;\n}\n\n.toggle .tgl:checked + .tgl-btn:after {\n  background-color: #ed571f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2UvYWRtaW4vc3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vY2F0YWxvZy9jb21wb25lbnRzL3Byb2R1Y3QvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREVBO0VBQ0Usb0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9jYXRhbG9nL2NvbXBvbmVudHMvcHJvZHVjdC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6I2VkNTcxZiAhaW1wb3J0YW50O1xuICBib3JkZXI6I2VkNTcxZiAgIWltcG9ydGFudDtcbn1cbi50b2dnbGUgLnRnbDpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1NzFmICFpbXBvcnRhbnQ7XG59IiwiLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTcxZiAhaW1wb3J0YW50O1xuICBib3JkZXI6ICNlZDU3MWYgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZSAudGdsOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDU3MWYgIWltcG9ydGFudDtcbn0iXX0= */"

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