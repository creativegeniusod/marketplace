(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stockstatus-stockstatus-module"],{

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\n    <h3 style=\"color:#FF006A\">{{editedStockValue ? 'Update Stock Status' : 'Add Stock Status'}}</h3>\n</div>\n<div class=\"settings-right-wrapper addnewuser\">\n\n    <div class=\"new-user\">\n        <form [formGroup]=\"stockStatusform\" class=\"form-horizontal m-t-20\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Stock Status Name<sup\n                                class=\"supvalidation\">*</sup></label>\n                        <input type=\"text\" formControlName=\"name\" placeholder=\"Stock Status Name\" class=\"form-control\" [ngClass]=\"{'validationcolor':stockStatusform.get('name').hasError('required') && stockStatusform.get('name').touched && submitted}\" />\n                        <div class=\"error\" *ngIf=\"stockStatusform.get('name').hasError('required') && stockStatusform.get('name').touched && submitted\">\n                            Name is required\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Status<sup\n                                class=\"supvalidation\">*</sup></label>\n                        <select class=\"form-control custom-select\" formControlName=\"status\" [ngClass]=\"{'validationcolor':!stockStatusform.get('status').valid && !stockStatusform.get('status').untouched && submitted}\" data-placeholder=\"Choose Role\" placeholder=\"status\">\n                            <option value=''>- -Select Status- -</option>\n                            <option value=1>Enabled</option>\n                            <option value=0>Disabled</option>\n                        </select>\n\n                    </div>\n                    <div class=\"error\" *ngIf=\"stockStatusform.get('status').hasError('required') && stockStatusform.get('status').touched && submitted\">\n                        Status is required\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"flex user-btn\">\n                        <button type=\"submit\" (click)='onSubmit()' class=\"btn btn-add\">Save\n                        </button>\n                        <button (click)=\"cancel()\" class=\"btn btn-cancel\">Cancel\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".validationcolor {\n  border-color: red;\n}\n\n.error {\n  color: red;\n}\n\n.settings-right-wrapper {\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9hZG1pbi9zcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvc3RvY2tzdGF0dXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9zdG9ja3N0YXR1cy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9sb2NhbGl6YXRpb25zL3N0b2Nrc3RhdHVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbmNvbG9yIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uc2V0dGluZ3MtcmlnaHQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59IiwiLnZhbGlkYXRpb25jb2xvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uc2V0dGluZ3MtcmlnaHQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"
=======
module.exports = ".validationcolor {\n  border-color: red;\n}\n\n.error {\n  color: red;\n}\n\n.settings-right-wrapper {\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAxL21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9zdG9ja3N0YXR1cy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9sb2NhbGl6YXRpb25zL3N0b2Nrc3RhdHVzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvc3RvY2tzdGF0dXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uY29sb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5zZXR0aW5ncy1yaWdodC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iLCIudmFsaWRhdGlvbmNvbG9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zZXR0aW5ncy1yaWdodC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"
>>>>>>> 85c5e2989e9bf20ec75f2c1837a5509a280d7faf

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: StockStatusAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusAddComponent", function() { return StockStatusAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.sandbox */ "./src/core/admin/settings/localizations/stockStatus/stock.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.service */ "./src/core/admin/settings/localizations/stockStatus/stock.service.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */





var StockStatusAddComponent = /** @class */ (function () {
    function StockStatusAddComponent(fb, router, sandbox, stockService) {
        this.fb = fb;
        this.router = router;
        this.sandbox = sandbox;
        this.stockService = stockService;
        // Varibale
        this.params = {};
        this.submitted = false;
    }
    StockStatusAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // initially calls loadForm,editStockStatus function
    StockStatusAddComponent.prototype.ngOnInit = function () {
        this.loadForm();
        this.editStockStatus();
    };
    // FormGroup
    StockStatusAddComponent.prototype.loadForm = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.stockStatusform = this.fb.group({
            name: this.name,
            status: this.status
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox StockStatus updateStock and addStock function .
     *
     * @param stockStatusform entire form value
     * @param params storing entire value
     */
    StockStatusAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.stockStatusform.valid) {
            this.validateAllFormFields(this.stockStatusform);
            return;
        }
        else {
            this.params.name = this.stockStatusform.value.name;
            this.params.status = this.stockStatusform.value.status;
            if (this.editedStockValue) {
                this.params.stockStatusId = this.editedStockValue.stockStatusId;
                this.sandbox.updateStock(this.params);
                this.sandbox.getstockUpdate$.subscribe(function (val) {
                    if (val) {
                        _this.router.navigate(['/settings/local/stock-status']);
                    }
                });
            }
            else {
                this.sandbox.addStock(this.params);
                this.sandbox.getNewStock$.subscribe(function (val) {
                    if (val) {
                        _this.router.navigate(['/settings/local/stock-status']);
                    }
                });
            }
        }
    };
    // Cancle Navigate to StockStatus List Page
    StockStatusAddComponent.prototype.cancel = function () {
        this.router.navigate(['/settings/local/stock-status']);
    };
    // validation for reactive form
    StockStatusAddComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    // Edit StockStatus Navigate to Add Form
    StockStatusAddComponent.prototype.editStockStatus = function () {
        this.editedStockValue = this.stockService.getStockEditedValue();
        if (this.editedStockValue) {
            this.name.setValue(this.editedStockValue.name);
            this.status.setValue(this.editedStockValue.isActive);
        }
    };
    StockStatusAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-stockstatus-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_4__["StockSandbox"],
            _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"]])
    ], StockStatusAddComponent);
    return StockStatusAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\n    <h3> Settings > Localization > Stock Status </h3>\n    <button class=\"btn\" (click)=\"addStockStatus()\"><img\n            src=\"assets/img/add-white-ico.png\"> Add Stock Status\n    </button>\n</div>\n<div class=\"settings-right-wrapper\">\n\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Stock Status Name</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let stocklist of (sandBox.getStockList$|async); let i=index\">\n                    <td>{{stocklist.name}}</td>\n                    <td>\n                        <div *ngIf=\"stocklist.isActive === 1\">Active</div>\n                        <div *ngIf=\"stocklist.isActive === 0\">In-Active</div>\n                    </td>\n\n                    <td><i (click)=\"editStockStatus(stocklist)\" class=\"fas fa-edit\"></i> <i [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: 15px;\" class=\"fas fa-trash\">\n                    <ng-template #deleteContent>\n                        <div class=\"style\">\n                            <div class=\"modal-header\">\n                                <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n                            </div>\n\n                            <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\"\n                                        data-dismiss=\"modal\">No\n                                </button>\n                                <button type=\"button\" class=\"btn btn-success\"\n                                        (click)=\"deleteStockStatus(stocklist.stockStatusId, deletePop)\"\n                                        data-dismiss=\"modal\">Yes\n                                </button>\n                            </div>\n                        </div>\n                    </ng-template>\n\n                </i></td>\n\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <mat-paginator [length]=\"(sandBox.getStockListCount$ | async)?.data\" [pageSize]=\"pagesize\" [pageSizeOptions]=\"[pagesize]\" (page)=\"onPageChange($event)\">\n    </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".settings-right-wrapper {\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93ZWJyb290L3B1YmxpY19odG1sL3dlYnNpdGVzL29kei9tYXJrZXRwbGFjZS9hZG1pbi9zcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvc3RvY2tzdGF0dXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9sb2NhbGl6YXRpb25zL3N0b2Nrc3RhdHVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL3RoZW1lL2RlZmF1bHQvYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9sb2NhbGl6YXRpb25zL3N0b2Nrc3RhdHVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncy1yaWdodC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iLCIuc2V0dGluZ3MtcmlnaHQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"
=======
module.exports = ".settings-right-wrapper {\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAxL21hcmtldHBsYWNlL2FkbWluL3NyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvbG9jYWxpemF0aW9ucy9zdG9ja3N0YXR1cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvc3RvY2tzdGF0dXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2xvY2FsaXphdGlvbnMvc3RvY2tzdGF0dXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLXJpZ2h0LXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSIsIi5zZXR0aW5ncy1yaWdodC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"
>>>>>>> 85c5e2989e9bf20ec75f2c1837a5509a280d7faf

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: StockStatusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusListComponent", function() { return StockStatusListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.sandbox */ "./src/core/admin/settings/localizations/stockStatus/stock.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/stockStatus/stock.service */ "./src/core/admin/settings/localizations/stockStatus/stock.service.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var StockStatusListComponent = /** @class */ (function () {
    function StockStatusListComponent(sandBox, stockApi, router) {
        this.sandBox = sandBox;
        this.stockApi = stockApi;
        this.router = router;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pagesize = '5';
        this.pagecount = 1;
        this.regSubscribeEvents();
    }
    // initially calls StockList function
    StockStatusListComponent.prototype.ngOnInit = function () {
        this.pagesize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pagesize;
        this.StockList(this.offset, this.pagesize);
    };
    // Add StockStatus navigate to Add Form
    StockStatusListComponent.prototype.addStockStatus = function () {
        this.stockApi.setStockEditedValue('');
        this.router.navigate(['settings/local/stock-status/add']);
    };
    /**
     * Handles form 'list' event. Calls sandbox Country stockStatusList and paginationStockStatusCount function if form is valid.
     *
     * @param params storing entire value
     */
    StockStatusListComponent.prototype.StockList = function (offset, pageSize) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = pageSize;
        params.offset = offset;
        params.keyword = '';
        this.sandBox.stockStatusList(params);
        if (this.pagecount) {
            params.count = 1;
            this.sandBox.paginationStockStatusCount(params);
        }
    };
    // Edit StockStatus Navigate to Add Form
    StockStatusListComponent.prototype.editStockStatus = function (value) {
        this.stockApi.setStockEditedValue(value);
        this.router.navigate(['settings/local/stock-status/add']);
    };
    // Pagination Count
    StockStatusListComponent.prototype.onPageChange = function (event) {
        this.pageoffset = event.pageSize * event.pageIndex;
        this.pagesize = event.pageSize;
        this.StockList(this.pageoffset, this.pagesize);
        this.stockApi.deletePagerefresh(this.pageoffset);
    };
    // Delete StockStatus Using StockStatusId
    StockStatusListComponent.prototype.deleteStockStatus = function (stockStatusId, deletePop) {
        event.stopPropagation();
        this.popoverContent = deletePop;
        this.sandBox.deleteStockStatus({ stockStatusId: stockStatusId });
    };
    // Delete After Subscribe result
    StockStatusListComponent.prototype.regSubscribeEvents = function () {
        var _this = this;
        this.sandBox.getStockDelete$.subscribe(function (_delete) {
            if (_delete && _delete.status === 1) {
                _this.StockList(_this.pageoffset, _this.pagesize);
            }
        });
    };
    StockStatusListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-settings-stockstatus-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_settings_localizations_stockStatus_stock_sandbox__WEBPACK_IMPORTED_MODULE_3__["StockSandbox"],
            _core_admin_settings_localizations_stockStatus_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StockStatusListComponent);
    return StockStatusListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StockStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusModule", function() { return StockStatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts");
/* harmony import */ var _stockstatus_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stockstatus.routing */ "./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../default.material.module */ "./src/theme/default/default.material.module.ts");

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

var StockStatusModule = /** @class */ (function () {
    function StockStatusModule() {
    }
    StockStatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["StockStatusAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["StockStatusListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _stockstatus_routing__WEBPACK_IMPORTED_MODULE_7__["StockStatusRoutingModule"]
            ],
            providers: [],
            bootstrap: [],
            entryComponents: []
        })
    ], StockStatusModule);
    return StockStatusModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.routing.ts":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/stockstatus/stockstatus.routing.ts ***!
  \******************************************************************************************************/
/*! exports provided: StockStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockStatusRoutingModule", function() { return StockStatusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/stockstatus/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var stockStatusRoutes = [
    // { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["StockStatusListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["StockStatusAddComponent"] },
    {
        path: 'edit/:id',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["StockStatusListComponent"]
    }
];
var StockStatusRoutingModule = /** @class */ (function () {
    function StockStatusRoutingModule() {
    }
    StockStatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(stockStatusRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StockStatusRoutingModule);
    return StockStatusRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=stockstatus-stockstatus-module.js.map