(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "./src/default/pages/wishlist/wishlist.component.html":
/*!************************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list *ngIf=\"((wishlistSandbox.wishlist$ | async)?.length == 0)&&(wishlistSandbox.wishlistLoaded$ | async)\">\r\n    <mat-chip color=\"warn\" style=\"width: 25%;\" selected=\"true\">YOU HAVE NO ITEM IN WISH LIST</mat-chip>\r\n</mat-chip-list>\r\n\r\n<mat-card class=\"p-0\">\r\n    <div class=\"wrapper\" *ngIf=\"wishlistSandbox.wishlistLoading$ | async\">\r\n        <div class=\"overlay\">\r\n            <div class=\"spinner-wrapper\">\r\n                <app-spinner [isShow]=\"wishlistSandbox.wishlistLoading$ | async\"></app-spinner>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mat-table wishlist-table\" *ngIf=\"(wishlistSandbox.wishlist$ | async)?.length > 0\">\r\n        <div class=\"mat-header-row\">\r\n            <div class=\"mat-header-cell\">Product</div>\r\n            <div class=\"mat-header-cell\">Name</div>\r\n            <div class=\"mat-header-cell\" style=\"margin-left: 15px\">Price</div>\r\n            <div class=\"mat-header-cell\">Availabile Date</div>\r\n            <div class=\"mat-header-cell\">\r\n                <div class=\"px-1\">Action\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngFor=\"let product of wishlistSandbox.wishlist$ | async\" class=\"mat-row\">\r\n            <div class=\"mat-cell\"><img *ngIf=\"product.productImage\" [src]=\"imagePath+ '?path=' + product.productImage.containerName + '&name=' + product.productImage.image + '&width=300&height=300'\" onError=\"this.src='/assets/images/default_image.png';\">\r\n            </div>\r\n            <div class=\"mat-cell\"><a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"product-name\">{{product.product.name}}</a>\r\n            </div>\r\n            <div class=\"mat-cell\" style=\"margin-left: 15px\">\r\n                <ng-container > $ {{product?.product?.price}}\r\n                </ng-container>    \r\n            </div>\r\n            <div class=\"mat-cell\">{{product.product.dateAvailable | date:'dd/MM/yyyy'}}</div>\r\n            <div class=\"mat-cell\">\r\n                <div class=\"p-1\">\r\n                    <button class=\"card-hover\" mat-mini-fab color=\"primary\" (click)=\"addToCart(product)\" matTooltip=\"Add To Cart\">\r\n                        <mat-icon>add_shopping_cart</mat-icon>\r\n                    </button>\r\n                    <button mat-mini-fab color=\"warn\" (click)=\"remove(product.productId)\" matTooltip=\"Clear\" class=\"remove card-hover\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                    <span [hidden]=\"!(wishlistSandbox.wishlistLoading$ | async)\" class=\"spinner-border spinner-border-sm pull-right\" role=\"status\" aria-hidden=\"true\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.component.scss":
/*!************************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wishlist-table.mat-table {\n  display: block;\n  overflow-x: auto; }\n  .wishlist-table.mat-table .mat-row,\n  .wishlist-table.mat-table .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n    min-width: 870px; }\n  .wishlist-table.mat-table .mat-row {\n    min-height: 100px; }\n  .wishlist-table.mat-table .mat-cell,\n  .wishlist-table.mat-table .mat-header-cell {\n    flex: 1;\n    overflow: hidden;\n    word-wrap: break-word; }\n  .wishlist-table.mat-table .mat-header-cell {\n    font-size: 14px; }\n  .wishlist-table.mat-table .mat-cell img {\n    width: 50px;\n    height: 75px; }\n  .wishlist-table.mat-table .mat-cell .product-name {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 500; }\n  .wishlist-table.mat-table .mat-cell .remove {\n    margin-left: 8px; }\n  mat-chip-list {\n  margin-left: 29% !important; }\n  .wrapper {\n  width: 100%;\n  height: 100%; }\n  .overlay {\n  position: absolute;\n  z-index: 1002;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%; }\n  .spinner-wrapper {\n  display: flex;\n  justify-content: center;\n  justify-items: center; }\n  .card-hover {\n  transition: all .25s ease; }\n  .card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n  .availableData {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFya2V0cGxhY2Uvc3RvcmUvc3JjL2RlZmF1bHQvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsaUJBQWdCLEVBcUNuQjtFQXZDRDs7SUFLUSxjQUFhO0lBQ2IseUJBQXdCO0lBQ3hCLDJCQUEwQjtJQUMxQixvQkFBbUI7SUFDbkIsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25CO0VBWkw7SUFjUSxrQkFBaUIsRUFDcEI7RUFmTDs7SUFrQlEsUUFBTztJQUNQLGlCQUFnQjtJQUNoQixzQkFBcUIsRUFDeEI7RUFyQkw7SUF1QlEsZ0JBQWUsRUFDbEI7RUF4Qkw7SUEyQlksWUFBVztJQUNYLGFBQVksRUFDZjtFQTdCVDtJQStCWSxlQUFjO0lBQ2Qsc0JBQXFCO0lBQ3JCLGlCQUFnQixFQUNuQjtFQWxDVDtJQW9DWSxpQkFBZ0IsRUFDbkI7RUFJVDtFQUNJLDRCQUEyQixFQUM5QjtFQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjtFQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiwyQ0FBMEM7RUFDMUMsWUFBVztFQUNYLGFBQVksRUFDZjtFQUVEO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixzQkFBcUIsRUFDeEI7RUFFRDtFQUlJLDBCQUF5QixFQVU1QjtFQWREO0lBVVEsd0NBQXVDO0lBRXZDLCtDQUE2QyxFQUNoRDtFQUdMO0VBQ0ksZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXNobGlzdC10YWJsZS5tYXQtdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLm1hdC1yb3csXHJcbiAgICAubWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4NzBweDtcclxuICAgIH1cclxuICAgIC5tYXQtcm93IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2VsbCxcclxuICAgIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGwge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVtb3ZlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1jaGlwLWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI5JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3Bpbm5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE0cHggMjRweCByZ2JhKDYyLCA1NywgMTA3LCAuMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXZhaWxhYmxlRGF0YSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.component.ts":
/*!**********************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.ts ***!
  \**********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/wishlist/wishlist.sandbox */ "./src/core/wishlist/wishlist.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(snackBar, wishlistSandbox, productControl, router, listSandbox, configService) {
        this.snackBar = snackBar;
        this.wishlistSandbox = wishlistSandbox;
        this.productControl = productControl;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        // items added
        this.quantity = 1;
        this.semiColon = ':';
        // add to cart
        this.productImage = [];
        // subscriptions
        this.subscriptions = [];
        this.currency = {};
    }
    // Initially calls wishlistSandbox getWishlist with default param
    WishlistComponent.prototype.ngOnInit = function () {
        this.currency = JSON.parse(localStorage.getItem('currency'));
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
        var params = {};
        params.limit = 10;
        params.offset = '';
        this.wishlistSandbox.getWishlist(params);
        //  this.wishlistSandbox.wishlist$ .subscribe((data) =>)
    };
    // remove product from wishlist
    WishlistComponent.prototype.remove = function (productId) {
        var params = {};
        params.wishlistProductId = productId;
        this.wishlistSandbox.deleteWishlist(params);
    };
    /** add product from wishlist to cart with options if mandatory.
     * @param products from wishlist.
     * @param param to ProductControlSandbox,to add items to cart.
     * **/
    WishlistComponent.prototype.addToCart = function (products) {
        console.log('products', products);
        this.router.navigate(['/products/productdetails', products.productId]);
        // this.productImage = [];
        // const params: any = {};
        // let subscribeOneTime = 1;
        // params.id = products.productId;
        // this.listSandbox.getProductDetails(params);
        // this.subscriptions.push(this.listSandbox.productDetails$.subscribe(detail => {
        //     if (detail && detail.productOption) {
        //         this.productOption = detail.productOption;
        //         // if (this.productOption.length > 0) {
        //         if (products.product.optionRequired === 1 && subscribeOneTime === 1) {
        //             const param: any = {};
        //             param.totalOptions = products.mandatoryOption;
        //             param._optionValueArray = products.mandatoryOptionValueName;
        //             products.product.productCount = 1;
        //             this.productImage.push(products.productImage);
        //             products.product.productImage = this.productImage;
        //             products.product.productOption = this.productOption;
        //             products.product._optionValueArray = products.mandatoryOptionValueName;
        //             this.productControl.selectedOptions(param);
        //             products.product._totalOptions = param.totalOptions;
        //             this.productControl.addItemsToCart(products.product, param);
        //             subscribeOneTime++;
        //         } else {
        //             if (subscribeOneTime === 1 && products.product.optionRequired !== 1) {
        //                 this.productImage = [];
        //                 const param: any = {};
        //                 param.totalOptions = products.mandatoryOption;
        //                 param._optionValueArray = products.mandatoryOptionValueName;
        //                 products.product.productCount = 1;
        //                 this.productImage.push(products.productImage);
        //                 products.product.productImage = this.productImage;
        //                 products.product.productOption = this.productOption;
        //                 products.product._optionValueArray = products.mandatoryOptionValueName;
        //                 this.productControl.selectedOptions(param);
        //                 products.product._totalOptions = param.totalOptions;
        //                 this.productControl.addItemsToCart(products.product, param);
        //                 subscribeOneTime++;
        //             }
        //         }
        //         // }
        //     }
        // }));
        // params.id = '';
    };
    // unsubscribe subscribed events while destroy the page
    WishlistComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/default/pages/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/default/pages/wishlist/wishlist.component.scss")],
            providers: [_core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__["ProductControlSandbox"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_3__["WishlistSandbox"],
            _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_2__["ProductControlSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__["ListsSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.module.ts":
/*!*******************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, WishlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModule", function() { return WishlistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist.component */ "./src/default/pages/wishlist/wishlist.component.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ "./src/default/shared/pipes/pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var routes = [
    { path: '', component: _wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"], pathMatch: 'full' }
];
var WishlistModule = /** @class */ (function () {
    function WishlistModule() {
    }
    WishlistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
            ],
            declarations: [
                _wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"]
            ],
            providers: []
        })
    ], WishlistModule);
    return WishlistModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-wishlist-wishlist-module.js.map