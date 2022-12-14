(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wishlist-wishlist-module"],{

/***/ "./src/default/pages/wishlist/wishlist.component.html":
/*!************************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list *ngIf=\"((wishlistSandbox.wishlist$ | async)?.length == 0)&&(wishlistSandbox.wishlistLoaded$ | async)\">\r\n    <mat-chip color=\"warn\" style=\"width: 25%;\" selected=\"true\">YOU HAVE NO ITEM IN WISH LIST</mat-chip>\r\n</mat-chip-list>\r\n\r\n<mat-sidenav-container class=\"productsWrap trending-products wishlist-page\">\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\r\n        class=\"filter-row mat-elevation-z1 text-muted\">\r\n        <!-- <mat-card class=\"product-item text-center card-hover\"> -->\r\n\r\n            <div class=\"wrapper\" *ngIf=\"wishlistSandbox.wishlistLoading$ | async\">\r\n                <div class=\"overlay\">\r\n                    <div class=\"spinner-wrapper\">\r\n                        <app-spinner [isShow]=\"wishlistSandbox.wishlistLoading$ | async\"></app-spinner>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"mat-table wishlist-table\" *ngIf=\"(wishlistSandbox.wishlist$ | async)?.length > 0\"> -->\r\n            <!-- <div class=\"mat-header-row\">\r\n            <div class=\"mat-header-cell\">Product</div>\r\n            <div class=\"mat-header-cell\">Name</div>\r\n            <div class=\"mat-header-cell\" style=\"margin-left: 15px\">Price</div>\r\n            <div class=\"mat-header-cell\">Availabile Date</div>\r\n            <div class=\"mat-header-cell\">\r\n                <div class=\"px-1\">Action\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n            <div class=\"site-container \">\r\n                <div class=\"advertisement-heading\">\r\n                  <h4 class=\"titleWithIcon\"><img src='/assets/images/back-arrow.png'>My Wishlist</h4>\r\n                </div>\r\n                <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper w-100\">\r\n                    <div *ngFor=\"let product of wishlistSandbox.wishlist$ | async\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\r\n                        fxFlex.sm=\"50\" class=\"col wishListCol\">\r\n\r\n                        <mat-card class=\"product-item text-center card-hover productCol\">\r\n                        <button class=\"wishIcon\" mat-icon-button\r\n                            matTooltip=\"Add to cart\">\r\n                            <mat-icon><img src=\"../../../assets/images/Buy.png\" /></mat-icon>\r\n                        </button>\r\n                        <!-- <div class=\"product-img\">\r\n                            <a class=\"image-link\">\r\n                                <img *ngIf=\"product.productImage\"\r\n                                    [src]=\"imagePath+ '?path=' + product.productImage.containerName + '&name=' + product.productImage.image + '&width=260&height=260'\"\r\n                                    onError=\"this.src='/assets/images/default_image.png';\">\r\n                            </a>\r\n                            <div class=\"productRating\">\r\n                                <div>\r\n                                    <div class=\"halfstar1\">&#x2605; 4.3 | <span>234</span></div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"product-img\">\r\n                            <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\r\n                                <!-- *ngIf=\"product['Images'].defaultImage == 1\" -->\r\n                                <img  *ngIf=\"product.productImage\" [src]=\"imagePath+ '?path=' + product.productImage.containerName + '&name=' + product.productImage.image + '&width=260&height=260'\"\r\n                                    onError=\"this.src='/assets/images/default_image.png';\">\r\n                            </a>\r\n                            <div class=\"productRating\">\r\n                                <div>\r\n                                    <div class=\"halfstar1\">&#x2605; 4.3 | <span>234</span></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"mat-cell\"><a [routerLink]=\"['/products/productdetails', product.productId]\"\r\n                                class=\"title text-truncate\">{{product.product.name}}</a>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"priceAndIcons\">\r\n                              <p class=\"regularPrice\" *ngIf=\"product.regular\">${{product.regular}}</p>\r\n                              <p class=\"new-price\">\r\n                                $ {{product?.product?.price}}\r\n                              </p>\r\n                              <!--  <app-controls [product]=\"product\" [type]=\"'all'\" (OpenProductDialog)=\"openProductDialog(product)\">\r\n                              </app-controls> -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"mat-cell\">{{product.product.dateAvailable | date:'dd/MM/yyyy'}}</div> -->\r\n                        <!-- <div class=\"mat-cell\">\r\n                            <div class=\"p-1\">\r\n                                <button class=\"card-hover\" mat-mini-fab color=\"primary\" (click)=\"addToCart(product)\"\r\n                                    matTooltip=\"Add To Cart\">\r\n                                    <mat-icon>add_shopping_cart</mat-icon>\r\n                                </button>\r\n                                <button mat-mini-fab color=\"warn\" (click)=\"remove(product.productId)\" matTooltip=\"Clear\"\r\n                                    class=\"remove card-hover\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                                <span [hidden]=\"!(wishlistSandbox.wishlistLoading$ | async)\"\r\n                                    class=\"spinner-border spinner-border-sm pull-right\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                            </div>\r\n                        </div> -->\r\n                    </mat-card>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <!-- </div> -->\r\n        <!-- </mat-card> -->\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/default/pages/wishlist/wishlist.component.scss":
/*!************************************************************!*\
  !*** ./src/default/pages/wishlist/wishlist.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wishlist-table.mat-table {\n  display: block;\n  overflow-x: auto; }\n  .wishlist-table.mat-table .mat-row,\n  .wishlist-table.mat-table .mat-header-row {\n    display: flex;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    align-items: center;\n    min-height: 48px;\n    padding: 0 24px;\n    min-width: 870px; }\n  .wishlist-table.mat-table .mat-row {\n    min-height: 100px; }\n  .wishlist-table.mat-table .mat-cell,\n  .wishlist-table.mat-table .mat-header-cell {\n    flex: 1;\n    overflow: hidden;\n    word-wrap: break-word; }\n  .wishlist-table.mat-table .mat-header-cell {\n    font-size: 14px; }\n  .wishlist-table.mat-table .mat-cell img {\n    width: 50px;\n    height: 75px; }\n  .wishlist-table.mat-table .mat-cell .product-name {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 500; }\n  .wishlist-table.mat-table .mat-cell .remove {\n    margin-left: 8px; }\n  mat-chip-list {\n  margin-left: 29% !important; }\n  .wrapper {\n  width: 100%;\n  height: 100%; }\n  .overlay {\n  position: absolute;\n  z-index: 1002;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%; }\n  .spinner-wrapper {\n  display: flex;\n  justify-content: center;\n  justify-items: center; }\n  .card-hover {\n  transition: all .25s ease; }\n  .card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n  .availableData {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDA0L21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGlCQUFnQixFQXFDbkI7RUF2Q0Q7O0lBS1EsY0FBYTtJQUNiLHlCQUF3QjtJQUN4QiwyQkFBMEI7SUFDMUIsb0JBQW1CO0lBQ25CLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjtFQVpMO0lBY1Esa0JBQWlCLEVBQ3BCO0VBZkw7O0lBa0JRLFFBQU87SUFDUCxpQkFBZ0I7SUFDaEIsc0JBQXFCLEVBQ3hCO0VBckJMO0lBdUJRLGdCQUFlLEVBQ2xCO0VBeEJMO0lBMkJZLFlBQVc7SUFDWCxhQUFZLEVBQ2Y7RUE3QlQ7SUErQlksZUFBYztJQUNkLHNCQUFxQjtJQUNyQixpQkFBZ0IsRUFDbkI7RUFsQ1Q7SUFvQ1ksaUJBQWdCLEVBQ25CO0VBSVQ7RUFDSSw0QkFBMkIsRUFDOUI7RUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7RUFFRDtFQUNJLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsMkNBQTBDO0VBQzFDLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7RUFFRDtFQUNJLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsc0JBQXFCLEVBQ3hCO0VBRUQ7RUFJSSwwQkFBeUIsRUFVNUI7RUFkRDtJQVVRLHdDQUF1QztJQUV2QywrQ0FBNkMsRUFDaEQ7RUFHTDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lzaGxpc3QtdGFibGUubWF0LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIC5tYXQtcm93LFxyXG4gICAgLm1hdC1oZWFkZXItcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogODcwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LXJvdyB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNlbGwsXHJcbiAgICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jZWxsIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlbW92ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYXQtY2hpcC1saXN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNwaW5uZXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsIDU3LCAxMDcsIC4xKTtcclxuICAgIH1cclxufVxyXG5cclxuLmF2YWlsYWJsZURhdGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

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
        // card view
        this.viewType = 'grid';
        this.viewCol = 14.28;
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
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
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
    // changing the view type
    WishlistComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
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