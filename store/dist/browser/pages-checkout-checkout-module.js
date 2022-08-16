(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./src/default/pages/checkout/checkout-success/checkout-success.component.html":
/*!*************************************************************************************!*\
  !*** ./src/default/pages/checkout/checkout-success/checkout-success.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-2 text-center\">\n    <button mat-fab color=\"primary\"><mat-icon>check</mat-icon></button>\n    <h2 class=\"py-2\">Congratulation! Your order {{orderId}} has been placed</h2>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mt-2 p-1\">\n    <a [routerLink]=\"['/']\" mat-raised-button color=\"primary\">Return to Shop</a>\n</div>"

/***/ }),

/***/ "./src/default/pages/checkout/checkout-success/checkout-success.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/default/pages/checkout/checkout-success/checkout-success.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9jaGVja291dC9jaGVja291dC1zdWNjZXNzL2NoZWNrb3V0LXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/default/pages/checkout/checkout-success/checkout-success.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/default/pages/checkout/checkout-success/checkout-success.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CheckoutSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutSuccessComponent", function() { return CheckoutSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var CheckoutSuccessComponent = /** @class */ (function () {
    function CheckoutSuccessComponent(activeRoute) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.activeRoute.params.subscribe(function (routes) {
            if (routes['id']) {
                _this.orderId = routes['id'];
            }
        });
    }
    CheckoutSuccessComponent.prototype.ngOnInit = function () {
    };
    CheckoutSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout-success',
            template: __webpack_require__(/*! ./checkout-success.component.html */ "./src/default/pages/checkout/checkout-success/checkout-success.component.html"),
            styles: [__webpack_require__(/*! ./checkout-success.component.scss */ "./src/default/pages/checkout/checkout-success/checkout-success.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CheckoutSuccessComponent);
    return CheckoutSuccessComponent;
}());



/***/ }),

/***/ "./src/default/pages/checkout/checkout.component.html":
/*!************************************************************!*\
  !*** ./src/default/pages/checkout/checkout.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" [formGroup]=\"checkoutForm\" novalidate>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2 billing-address\">\n            <div class=\"flex custom-field mb-2\">\n                <input type=\"text\" formControlName=\"firstName\" placeholder=\"First Name\" [ngClass]=\"{'has-error': !checkoutForm.controls['firstName'].valid && submitted}\">\n                <mat-error *ngIf=\"checkoutForm.controls['firstName'].hasError('required')&&submitted\">\n                    First Name is required\n                </mat-error>\n\n            </div>\n            <div class=\"flex custom-field mb-2\">\n                <!--<div class=\"width-inline\">-->\n                <input type=\"text\" formControlName=\"lastName\" placeholder=\"Last Name\" [ngClass]=\"{'has-error': !checkoutForm.controls['lastName'].valid && submitted}\">\n                <mat-error *ngIf=\"checkoutForm.controls['lastName'].hasError('required')&&submitted\">\n                    Last Name is required\n                </mat-error>\n                <!--</div>-->\n            </div>\n            <div class=\"flex custom-field mb-2\">\n                <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" [ngClass]=\"{'has-error': !checkoutForm.controls['email'].valid && submitted  }\">\n                <mat-error *ngIf=\"checkoutForm.controls['email'].hasError('required')&&submitted\">\n                    Email is required\n                </mat-error>\n                <mat-error *ngIf=\"checkoutForm.controls['email'].hasError('invalidEmail')&&submitted\">\n                    Email must be valid\n                </mat-error>\n            </div>\n\n            <div class=\"flex custom-field mb-2\">\n                <input type=\"text\" maxlength=\"15\" appOnlyNumber formControlName=\"phone\" placeholder=\"Phone\" [ngClass]=\"{'has-error': !checkoutForm.controls['phone'].valid && submitted}\">\n                <mat-error *ngIf=\"(checkoutForm.controls['phone'].hasError('required')&&submitted)||(checkoutForm.controls['phone'].hasError('pattern')&&submitted)\">\n                    Phone number is required\n                </mat-error>\n            </div>\n\n            <div class=\"flex custom-field mb-2\">\n                <div class=\"width-inline\">\n                    <select formControlName=\"country\" [ngClass]=\"{'has-error': !checkoutForm.controls['country'].valid && submitted}\">\n                        <option value=''>--Select Country--</option>\n                        <option *ngFor=\"let list of listsSandbox.countryList$ | async\" [value]=\"list.countryId\">\n                            {{list.name}}\n                        </option>\n\n                    </select>\n                    <mat-error *ngIf=\"checkoutForm.controls['country'].hasError('required')&&submitted\">\n                        Country is required\n                    </mat-error>\n\n                </div>\n            </div>\n            <h2 class=\"text-dark\">Address</h2>\n\n            <mat-error *ngIf=\"checkoutForm.controls['address'].hasError('required')&&submitted&&newAddress\">\n                Address is required\n            </mat-error>\n\n            <ng-container>\n                <div class=\"newaddress\">\n                    <div class=\"flex custom-field mb-2\">\n                        <input type=\"text\" formControlName=\"address\" ng-pattern=\"/^[a-zA-Z. ]*[a-zA-Z]{1,60}$/\" placeholder=\"Address\" [ngClass]=\"{'has-error': !checkoutForm.controls['address'].valid && submitted }\">\n                        <mat-error *ngIf=\"checkoutForm.controls['address'].hasError('required')&&submitted\">\n                            Address is required\n                        </mat-error>\n                    </div>\n                    <div class=\"flex custom-field mb-2\">\n                        <input type=\"text\" formControlName=\"addressLine\" placeholder=\"Address 1\">\n                    </div>\n                    <div class=\"flex custom-field mb-2\">\n                        <div class=\"width-inline\">\n                            <input type=\"text\" formControlName=\"city\" placeholder=\"City\" [ngClass]=\"{'has-error': !checkoutForm.controls['city'].valid && submitted}\">\n                            <mat-error *ngIf=\"checkoutForm.controls['city'].hasError('required')&&submitted\">\n                                City is required\n                            </mat-error>\n                        </div>\n                        <div class=\"width-inline\">\n                            <input type=\"text\" formControlName=\"state\" placeholder=\"State/Province\" [ngClass]=\"{'has-error': !checkoutForm.controls['state'].valid && submitted}\">\n                            <mat-error *ngIf=\"checkoutForm.controls['state'].hasError('required')&&submitted\">\n                                State is required\n                            </mat-error>\n                        </div>\n                    </div>\n                    <div class=\"flex custom-field mb-2\">\n                        <div class=\"width-inline\">\n                            <input type=\"text\" maxlength=\"7\" appOnlyNumber formControlName=\"zip\" placeholder=\"Zipcode\" [ngClass]=\"{'has-error': !checkoutForm.controls['zip'].valid && submitted}\">\n                            <mat-error *ngIf=\"checkoutForm.controls['zip'].hasError('required')&&submitted\">\n                                Zip is required\n                            </mat-error>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n\n        </div>\n        <!---->\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\" ngClass=\"billing-address\">\n            <h2 class=\"text-dark\">Your Items ({{productControlSandbox.cartlistCount$ | async}}) <a href=\"javascript:void(0)\" [routerLink]=\"['/cart']\">View Cart</a></h2>\n            <div class=\"item-table\">\n                <table class=\"table\" cellspacing=\"0\" cellpadding=\"0\" *ngIf=\"(productControlSandbox.cartlistCount$ | async) > 0\">\n                    <tr *ngFor=\"let products of productControlSandbox.cartlist$ | async; let i = index\">\n                        <td>\n                            <img *ngIf=\"products.image\" [src]=\"imagePath + '?path=' + products.image.containerName + '&name=' + products.image.image + '&width=60&height=60'\" onError=\"this.src='/assets/images/load_products.png';\">\n                            <img *ngIf=\"products.Images\" [src]=\"imagePath + '?path=' + products['Images'].containerName + '&name='+ products['Images'].image + '&width=60&height=60'\" onError=\"this.src='/assets/images/load_products.png';\">\n                            <div *ngIf=\"products.productImage \">\n                                <div *ngFor='let prodectDetailsImage of products.productImage'>\n                                    <img *ngIf=\"prodectDetailsImage.defaultImage === 1\" [src]=\"imagePath + '?path=' + prodectDetailsImage.containerName + '&name=' + prodectDetailsImage.image + '&width=60&height=60'\" onError=\"this.src='/assets/images/load_products.png';\">\n                                </div>\n                            </div>\n                            <img [src]=\"imagePath + '?path=' + products.productImage.containerName + '&name=' + products.productImage.image + '&width=60&height=60'\" *ngIf=\"products.productImage && !products.productImage.length\" onError=\"this.src='/assets/images/load_products.png';\">\n                        </td>\n                        <td><a class=\"product-name \">{{products.name | truncate}}</a>\n\n                        </td>\n                        <td>\n                            <button mat-button (click)=\"changeCount(products, false)\">\n                            <mat-icon class=\"icon-remove\">remove</mat-icon>\n                        </button> {{products.productCount}}\n                            <button mat-button (click)=\"changeCount(products, true)\">\n                            <mat-icon class=\"icon-add\">add</mat-icon>\n                        </button>\n                        </td>\n                        <td class=\"text-right\">\n                            $ {{((products.price) * products.productCount).toFixed(2) }}\n                            <p>\n                                <a (click)=\"removeProduct(products)\"><img src=\"assets/images/others/bin.png\"></a>\n                            </p>\n                        </td>\n                    </tr>\n\n                    <tr class=\"total-main\">\n                        <td class=\"text-right\">Total</td>\n                        <td class=\"text-right\" colspan=\"3\" *ngIf=\"productControlSandbox.totalCartPrice$\">\n                            $ {{productControlSandbox.totalCartPrice$ | async}}\n                        </td>\n                    </tr>\n                </table>\n\n                <a *ngIf=\"productControlSandbox.cartlist$ | async as productDetails\" (click)=\"placeOrder(productDetails)\" mat-raised-button color=\"primary\" class=\"proceed-chk\">\n                    <i *ngIf=\"productControlSandbox.checkoutLoading$ | async\" class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\n                    <img *ngIf=\"!(productControlSandbox.checkoutLoading$ | async)\" src=\"assets/images/others/checkout.png\">Place Order\n                </a>\n            </div>\n        </div>\n    </form>\n\n</mat-card>"

/***/ }),

/***/ "./src/default/pages/checkout/checkout.component.scss":
/*!************************************************************!*\
  !*** ./src/default/pages/checkout/checkout.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".billing-address h2 {\n  font-weight: 500;\n  font-size: 16px;\n  margin-bottom: 20px; }\n  .billing-address h2 a {\n    float: right;\n    color: #000;\n    font-weight: 400; }\n  .billing-address .flex {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row; }\n  .billing-address .custom-field {\n  justify-content: space-between; }\n  .billing-address .custom-field input,\n  .billing-address .custom-field select {\n    width: 100%;\n    padding: 10px;\n    font-size: 14px;\n    border: solid thin #ddd;\n    background: white;\n    box-sizing: border-box; }\n  .billing-address .custom-field .has-error {\n    border-color: red; }\n  .billing-address .custom-field .width-inline {\n    width: 48%; }\n  .billing-address .mb-2 {\n  margin-bottom: 20px; }\n  .billing-address .item-table .table {\n  width: 100%; }\n  .billing-address .item-table .table tr td {\n    padding: 2px;\n    background: #f7f7f7;\n    font-size: 16px;\n    font-weight: 500;\n    color: #111;\n    vertical-align: top;\n    border-bottom: solid thin #efefef; }\n  .billing-address .item-table .table tr td img {\n      background: #fff;\n      border: solid thin #efefef; }\n  .billing-address .item-table .table tr td p {\n      margin-top: 10px; }\n  .billing-address .item-table .table tr td .icon-remove {\n      color: white;\n      border: 1px solid #7fb6cc;\n      border-radius: 200px;\n      box-shadow: 0 0px 1px 0.4px rgba(0, 0, 0, 0.25);\n      background-color: #FF0000; }\n  .billing-address .item-table .table tr td .icon-add {\n      color: white;\n      border: 1px solid #7fb6cc;\n      border-radius: 200px;\n      box-shadow: 0 0px 1px 0.4px rgba(0, 0, 0, 0.25);\n      background-color: #008000; }\n  .billing-address .item-table .table tr.total td {\n    background: white;\n    font-size: 14px;\n    font-weight: 400; }\n  .billing-address .item-table .table tr.total-main td {\n    background: white; }\n  .billing-address .item-table a.proceed-chk {\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n  padding: 5px; }\n  .availableData {\n  display: block; }\n  button.btn-new {\n  padding: 10px 20px;\n  border-radius: 4px;\n  color: #fff;\n  background: #000;\n  box-shadow: none;\n  border: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 6px auto;\n  width: 100%; }\n  button.btn-new i {\n    display: inline-block;\n    vertical-align: middle; }\n  .example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0; }\n  .example-radio-button {\n  margin: 5px; }\n  .payment {\n  margin-top: 30px; }\n  .mode-group {\n  padding-left: 10px; }\n  .invalide-group {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9zdG9yZS9zcmMvZGVmYXVsdC9wYWdlcy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLG9CQUFtQixFQU10QjtFQVZMO0lBTVksYUFBWTtJQUNaLFlBQVc7SUFDWCxpQkFBZ0IsRUFDbkI7RUFUVDtFQVlRLGNBQWE7RUFDYixnQkFBZTtFQUNmLG9CQUFtQixFQUN0QjtFQWZMO0VBaUJRLCtCQUE4QixFQWdCakM7RUFqQ0w7O0lBb0JZLFlBQVc7SUFDWCxjQUFhO0lBQ2IsZ0JBQWU7SUFDZix3QkFBdUI7SUFDdkIsa0JBQWlCO0lBQ2pCLHVCQUFzQixFQUN6QjtFQTFCVDtJQTRCWSxrQkFBaUIsRUFDcEI7RUE3QlQ7SUErQlksV0FBVSxFQUNiO0VBaENUO0VBbUNRLG9CQUFtQixFQUN0QjtFQXBDTDtFQXVDWSxZQUFXLEVBNkNkO0VBcEZUO0lBMENvQixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsa0NBQWlDLEVBc0JwQztFQXRFakI7TUFrRHdCLGlCQUFnQjtNQUNoQiwyQkFBMEIsRUFDN0I7RUFwRHJCO01Bc0R3QixpQkFBZ0IsRUFDbkI7RUF2RHJCO01BeUR3QixhQUFZO01BQ1osMEJBQW9DO01BQ3BDLHFCQUFvQjtNQUNwQixnREFBK0M7TUFDL0MsMEJBQXlCLEVBQzVCO0VBOURyQjtNQWdFd0IsYUFBWTtNQUNaLDBCQUFvQztNQUNwQyxxQkFBb0I7TUFDcEIsZ0RBQStDO01BQy9DLDBCQUF5QixFQUM1QjtFQXJFckI7SUF5RXdCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjtFQTVFckI7SUFnRndCLGtCQUFpQixFQUNwQjtFQWpGckI7RUFzRlksWUFBVztFQUNYLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsYUFBWSxFQUNmO0VBSVQ7RUFDSSxlQUFjLEVBQ2pCO0VBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUtkO0VBZkQ7SUFZUSxzQkFBcUI7SUFDckIsdUJBQXNCLEVBQ3pCO0VBR0w7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGVBQWMsRUFDakI7RUFFRDtFQUNJLFlBQVcsRUFDZDtFQUVEO0VBQ0ksaUJBQWdCLEVBQ25CO0VBRUQ7RUFDSSxtQkFBa0IsRUFDckI7RUFFRDtFQUNJLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLWFkZHJlc3Mge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZsZXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWZpZWxkIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB0aGluICNkZGQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGFzLWVycm9yIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aWR0aC1pbmxpbmUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYi0yIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tdGFibGUge1xyXG4gICAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICNlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB0aGluICNlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDE4MiwgMjA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDFweCAwLjRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1hZGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDE4MiwgMjA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDFweCAwLjRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudG90YWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRvdGFsLW1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEucHJvY2VlZC1jaGsge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdmFpbGFibGVEYXRhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5idXR0b24uYnRuLW5ldyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiA2cHggYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnBheW1lbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1vZGUtZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaW52YWxpZGUtZ3JvdXAge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/checkout/checkout.component.ts":
/*!**********************************************************!*\
  !*** ./src/default/pages/checkout/checkout.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/default/theme/utils/app-validators.ts");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _core_account_account_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/account/account.sandbox */ "./src/core/account/account.sandbox.ts");
/* harmony import */ var _core_common_common_sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/common/common.sandbox */ "./src/core/common/common.sandbox.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */













var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(formBuilder, snackBar, productControlSandbox, listsSandbox, router, accountSandbox, commonSandbox, authSandbox, configService, platformId, changeDetectRef) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.productControlSandbox = productControlSandbox;
        this.listsSandbox = listsSandbox;
        this.router = router;
        this.accountSandbox = accountSandbox;
        this.commonSandbox = commonSandbox;
        this.authSandbox = authSandbox;
        this.configService = configService;
        this.platformId = platformId;
        this.changeDetectRef = changeDetectRef;
        // validation
        this.submitted = false;
        this.newAddress = true;
        // checkout list name
        this.semiColon = ':';
        this.seasons = ['a', 'b', 'c'];
        // subscriptions for unsuscribe the api respone
        this.subscriptions = [];
    }
    // Initially calls initCheckoutForm function
    CheckoutComponent.prototype.ngOnInit = function () {
        this.initCheckoutForm();
        this.getSessionData();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            if (localStorage.getItem('userToken')) {
                this.commonSandbox.doGetProfile();
                this.setProfileDetails();
            }
        }
        this.imagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].imageUrl;
    };
    CheckoutComponent.prototype.getSessionData = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var params = {};
            params.totalPrice = JSON.parse(sessionStorage.getItem('productTotal'));
            params.products = JSON.parse(sessionStorage.getItem('selectedProducts'));
            params.productTotal = JSON.parse(sessionStorage.getItem('selectedProductsCount'));
            this.productControlSandbox.HandleCart(params);
        }
    };
    // create form group for checkout
    CheckoutComponent.prototype.initCheckoutForm = function () {
        var mobileValidationPattern = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]]));
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(mobileValidationPattern)
        ]));
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.zip = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.addressLine = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.checkoutForm = this.formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company,
            email: this.email,
            phone: this.phone,
            setPassword: this.setPassword,
            country: this.country,
            city: this.city,
            state: this.state,
            zip: this.zip,
            address: this.address,
            addressLine: this.addressLine,
        });
    };
    // editing billing form
    CheckoutComponent.prototype.editAddressList = function (param) {
        this.checkoutForm.controls['company'].setValue(param.company);
        this.checkoutForm.controls['city'].setValue(param.city);
        this.checkoutForm.controls['state'].setValue(param.state);
        if (typeof param.postcode === 'number') {
            this.zipCodes = parseInt(param.postcode, 10);
            this.checkoutForm.controls['zip'].setValue(this.zipCodes);
        }
        else {
            this.checkoutForm.controls['zip'].setValue(param.postcode);
        }
        this.checkoutForm.controls['address'].setValue(param.address1);
        this.checkoutForm.controls['addressLine'].setValue(param.address2);
    };
    // editing billing form(from get profile api)
    CheckoutComponent.prototype.setProfileDetails = function () {
        var _this = this;
        this.subscriptions.push(this.commonSandbox.getProfile$.subscribe(function (profile) {
            if (profile) {
                _this.checkoutForm.controls['firstName'].setValue(profile.firstName);
                _this.checkoutForm.controls['lastName'].setValue(profile.lastName);
                _this.checkoutForm.controls['email'].setValue(profile.email);
                _this.checkoutForm.controls['phone'].setValue(profile.mobileNumber);
            }
        }));
    };
    /**
     * place order with product detail, if the form is valid
     *
     * remove checkout local storage.
     * @param productDetails detail of the product for checkout
     */
    CheckoutComponent.prototype.placeOrder = function (productDetails) {
        if (!localStorage.getItem('userToken')) {
            this.snackBar.open('Login or Create Account to continue', '×', {
                panelClass: 'error',
                verticalPosition: 'top',
                horizontalPosition: 'right',
                duration: 3000
            });
            this.router.navigate(['/auth']);
            return;
        }
        this.submitted = true;
        if (productDetails.length === 0) {
            this.snackBar.open('Add items to place order', '×', {
                panelClass: 'error',
                verticalPosition: 'top',
                horizontalPosition: 'right',
                duration: 3000
            });
            return;
        }
        if (!this.checkoutForm.valid) {
            return;
        }
        var params = this.checkoutForm.value;
        params.productDetail = productDetails;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            if (localStorage.getItem('userToken')) {
                localStorage.removeItem('checkout');
            }
        }
        this.productControlSandbox.PlaceOrder(params);
    };
    /**
     * increase or decrease product count
     *
     * @param product added product details
     * @param operation differentiate the operation is increament operation or decrement operation
     */
    CheckoutComponent.prototype.changeCount = function (product, operation) {
        this.productControlSandbox.ChangeCount(product, operation);
    };
    // remove product from the cart, calling removeItemFromCart function from sandbox
    CheckoutComponent.prototype.removeProduct = function (product) {
        this.productControlSandbox.removeItemFromCart(product);
    };
    // clear cart, for remove all products in the cart
    CheckoutComponent.prototype.clear = function () {
        this.productControlSandbox.clearCart();
    };
    // destroy the subscribed events while page destroy
    CheckoutComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('horizontalStepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], CheckoutComponent.prototype, "horizontalStepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('verticalStepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], CheckoutComponent.prototype, "verticalStepper", void 0);
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/default/pages/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/default/pages/checkout/checkout.component.scss")]
        }),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_5__["ProductControlSandbox"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_6__["ListsSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _core_account_account_sandbox__WEBPACK_IMPORTED_MODULE_8__["AccountSandbox"],
            _core_common_common_sandbox__WEBPACK_IMPORTED_MODULE_9__["CommonSandbox"],
            _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_11__["AuthSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
            Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/default/pages/checkout/checkout.module.ts":
/*!*******************************************************!*\
  !*** ./src/default/pages/checkout/checkout.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.component */ "./src/default/pages/checkout/checkout.component.ts");
/* harmony import */ var _checkout_success_checkout_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout-success/checkout-success.component */ "./src/default/pages/checkout/checkout-success/checkout-success.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_product_control_effects_product_control_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/product-control/effects/product-control.effect */ "./src/core/product-control/effects/product-control.effect.ts");
/* harmony import */ var _core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/product-control/product-control.service */ "./src/core/product-control/product-control.service.ts");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/validation-directives/onlyNumber.module */ "./src/default/shared/validation-directives/onlyNumber.module.ts");
/* harmony import */ var _core_account_account_sandbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/account/account.sandbox */ "./src/core/account/account.sandbox.ts");
/* harmony import */ var _core_account_effect_account_effect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/account/effect/account.effect */ "./src/core/account/effect/account.effect.ts");
/* harmony import */ var _core_account_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/account/account.service */ "./src/core/account/account.service.ts");
/* harmony import */ var _shared_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipe */ "./src/default/shared/pipe.ts");
/* harmony import */ var _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/auth/auth.sandbox */ "./src/core/auth/auth.sandbox.ts");
/* harmony import */ var _default_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../default/shared/pipes/pipes.module */ "./src/default/shared/pipes/pipes.module.ts");
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




// shared modules


// components


// store











var routes = [
    { path: '', component: _checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"], pathMatch: 'full' },
    { path: 'success/:id', component: _checkout_success_checkout_success_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutSuccessComponent"], pathMatch: 'full', data: {
            urls: [{ title: 'Checkout', url: '' }]
        } }
];
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _default_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__["PipesModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_core_product_control_effects_product_control_effect__WEBPACK_IMPORTED_MODULE_9__["ProductControlEffect"], _core_account_effect_account_effect__WEBPACK_IMPORTED_MODULE_14__["AccountEffect"]]),
                _shared_validation_directives_onlyNumber_module__WEBPACK_IMPORTED_MODULE_12__["NumberAcceptModule"]
            ],
            declarations: [
                _checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"],
                _shared_pipe__WEBPACK_IMPORTED_MODULE_16__["TruncatePipe"],
                _checkout_success_checkout_success_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutSuccessComponent"]
            ],
            providers: [_core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_11__["ProductControlSandbox"], _core_account_account_sandbox__WEBPACK_IMPORTED_MODULE_13__["AccountSandbox"], _core_auth_auth_sandbox__WEBPACK_IMPORTED_MODULE_17__["AuthSandbox"], _core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_10__["ProductControlService"], _core_account_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"]]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ }),

/***/ "./src/default/shared/pipe.ts":
/*!************************************!*\
  !*** ./src/default/shared/pipe.ts ***!
  \************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, completeWords, ellipsis) {
        if (limit === void 0) { limit = 25; }
        if (completeWords === void 0) { completeWords = false; }
        if (ellipsis === void 0) { ellipsis = '....'; }
        if (completeWords) {
            limit = value.substr(0, 13).lastIndexOf(' ');
        }
        return value.substr(0, limit) + " " + ellipsis;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module.js.map