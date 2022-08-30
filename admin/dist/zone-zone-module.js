(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["zone-zone-module"],{

/***/ "./src/theme/default/admin/settings/components/localizations/zone/add/add.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/zone/add/add.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\r\n    <h3 style=\"color:#FF006A\">{{updatetitle ? 'Update Zone' : 'Add Zone'}}</h3>\r\n</div>\r\n<div class=\"settings-right-wrapper addnewuser\">\r\n\r\n    <div class=\"new-user\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"zoneForm\" class=\"form-horizontal m-t-20\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Zone Name<sup class=\"supvalidation\">*</sup></label>\r\n                        <input type=\"text\" formControlName=\"zonename\" placeholder=\"Zone Name\" [ngClass]=\"{ 'is-invalid': submitted && f.zonename.errors }\" class=\"form-control\" />\r\n                        <div *ngIf=\"submitted && f.zonename.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.zonename.errors.required\">Zone Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Zone Code<sup class=\"supvalidation\">*</sup></label>\r\n                        <input type=\"text\" formControlName=\"zonecode\" placeholder=\"Zone Code\" [ngClass]=\"{ 'is-invalid': submitted && f.zonecode.errors }\" class=\"form-control\" class=\"form-control\">\r\n                        <div *ngIf=\"submitted && f.zonecode.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.zonecode.errors.required\">Zone Code is required</div>\r\n                            <div *ngIf=\"f.zonecode.errors\">ZoneCode must be at max 30 characters</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">Country<sup class=\"supvalidation\">*</sup></label>\r\n                        <div class=\"dd-items-container\">\r\n                            <ngx-select-dropdown (change)=\"selectionChanged($event)\" formControlName=\"country\" (mouseover)=\"onHover($event) \" (mouseout)=\"onHover($event) \" [config]=\"config\" [options]=\"countrysandbox.getcountries$ | async\" [multiple]=\"false\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\"></ngx-select-dropdown>\r\n                        </div>\r\n                        <div style=\"color: #f62d51;font-size: 80%\" *ngIf=\"countryvalid\">Country is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">Status<sup class=\"supvalidation\">*</sup></label>\r\n                        <select class=\"form-control custom-select\" formControlName=\"status\" data-placeholder=\"Choose Role\" [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\" placeholder=\"status\">\r\n                            <option value=''>- -Select Status- -</option>\r\n                            <option value=1>Enabled</option>\r\n                            <option value=0>Disabled</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.status.errors.required\">Status is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\" style=\"margin-top: 90px;\">\r\n                    <div class=\"flex user-btn\">\r\n                        <button type=\"submit\" class=\"btn btn-add\">Save</button>\r\n                        <button (click)=\"zonecancel()\" class=\"btn btn-cancel\"> Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/zone/add/add.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/zone/add/add.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ZoneAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneAddComponent", function() { return ZoneAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_zone_zone_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/zone/zone.sandbox */ "./src/core/admin/settings/localizations/zone/zone.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_zone_zone_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/zone/zone.service */ "./src/core/admin/settings/localizations/zone/zone.service.ts");
/* harmony import */ var _core_admin_settings_localizations_country_country_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/country/country.sandbox */ "./src/core/admin/settings/localizations/country/country.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */






var CSS_CLASS_NAMES = {
    highLight: 'dd-highlight-item'
};
var ZoneAddComponent = /** @class */ (function () {
    function ZoneAddComponent(fb, route, sandbox, countrysandbox, router, service) {
        this.fb = fb;
        this.route = route;
        this.sandbox = sandbox;
        this.countrysandbox = countrysandbox;
        this.router = router;
        this.service = service;
        // Variable
        this.config = { displayKey: 'name', value: 'countryId', search: true };
        this.submitted = false;
        this.pageSize = 5;
        this.keyword = '';
        this.editzoneinfo = [];
        this.pagenationcount = 1;
        this.countryList = [];
    }
    Object.defineProperty(ZoneAddComponent.prototype, "f", {
        // VALIDATION
        get: function () {
            return this.zoneForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ZoneAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    /**initially calls  getCountryListwith arguments(offset,keyword)
     * initForm,editZoneList
     *
     * */
    ZoneAddComponent.prototype.ngOnInit = function () {
        this.country = null;
        this.getCountryList(this.offset, this.keyword);
        this.initForm();
        this.EditZoneId = this.route.snapshot.paramMap.get('id');
        this.editZoneList();
        this.subscribe();
    };
    // subscribe
    ZoneAddComponent.prototype.subscribe = function () {
        var _this = this;
        this.countrysandbox.getcountries$.subscribe(function (data) {
            _this.countryList = data;
        });
    };
    // reactive form
    ZoneAddComponent.prototype.initForm = function () {
        this.zoneForm = this.fb.group({
            zonename: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            zonecode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox Zone updateZone and addNewZone function if form is valid.
     *
     * @param countryForm entire form value
     * @param para storing entire value
     */
    ZoneAddComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.zoneForm.invalid) {
            if (this.countryId) {
                this.countryvalid = false;
            }
            else {
                this.countryvalid = true;
            }
            return;
        }
        if (this.zoneForm.value.zonename !== '' &&
            this.zoneForm.value.zonecode !== '') {
            var para = {};
            para.zonename = this.zoneForm.value.zonename;
            para.zonecode = this.zoneForm.value.zonecode;
            para.country = this.zoneForm.value.country.countryId;
            para.status = this.zoneForm.value.status;
            if (this.editzoneinfo && this.editzoneinfo[0].zoneId) {
                para.zoneId = this.editzoneinfo[0].zoneId;
                this.sandbox.updateZone(para);
            }
            else {
                this.sandbox.addNewZone(para);
            }
        }
        else {
            this.valid = true;
        }
    };
    // Cancle Navigate to  Zone List page
    ZoneAddComponent.prototype.zonecancel = function () {
        this.router.navigate(['/settings/local/zone']);
    };
    // EditZone Bind Formcontrols values
    ZoneAddComponent.prototype.editZoneList = function () {
        this.editzoneinfo.push(this.service.getzonelistdata());
        if (this.editzoneinfo[0] !== null) {
            if (this.editzoneinfo[0] && this.editzoneinfo[0].name) {
                this.updatetitle = 1;
                this.zoneForm.controls['zonename'].setValue(this.editzoneinfo[0].name);
                this.zoneForm.controls['zonecode'].setValue(this.editzoneinfo[0].code);
                this.zoneForm.controls['country'].setValue(this.editzoneinfo[0].country);
                this.zoneForm.controls['status'].setValue(this.editzoneinfo[0].isActive);
                //
            }
        }
        else {
            this.zoneForm = null;
        }
    };
    /**
     * Handles form 'dropdown list' event. Calls sandbox Country getcountrieslist and getCountryCount function if form is valid.
     *
     * @param params storing entire value
     */
    ZoneAddComponent.prototype.getCountryList = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = '';
        params.offset = offset;
        params.keyword = this.keyword;
        this.countrysandbox.getcountrieslist(params);
        if (this.pagenationcount) {
            params.count = 'true';
            this.countrysandbox.getCountryCount(params);
        }
    };
    // DropDown list  changes event
    ZoneAddComponent.prototype.selectionChanged = function (event) {
        this.countryId = event.value.countryId;
        if (this.countryId) {
            this.countryvalid = false;
        }
    };
    // mouseOver event
    ZoneAddComponent.prototype.onHover = function (event) {
        var target = event.target;
        if (event.type === 'mouseover') {
            target.classList.add(CSS_CLASS_NAMES.highLight);
        }
        else {
            target.classList.remove(CSS_CLASS_NAMES.highLight);
        }
    };
    ZoneAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-zone-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/settings/components/localizations/zone/add/add.component.html"),
            styles: ["\n  .settings-right-wrapper {\n    margin-top: 0px !important;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_admin_settings_localizations_zone_zone_sandbox__WEBPACK_IMPORTED_MODULE_4__["ZoneSandbox"],
            _core_admin_settings_localizations_country_country_sandbox__WEBPACK_IMPORTED_MODULE_6__["CountrySandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_admin_settings_localizations_zone_zone_service__WEBPACK_IMPORTED_MODULE_5__["ZoneService"]])
    ], ZoneAddComponent);
    return ZoneAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/zone/list/list.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/zone/list/list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\r\n    <h3>Zone List</h3>\r\n    <button (click)=\" AddeNewZone()\" class=\"btn\"><img\r\n            src=\"assets/img/add-white-ico.png\">Add Zone</button>\r\n</div>\r\n<div class=\"settings-right-wrapper\">\r\n\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"text-center\" scope=\"col\">Country</th>\r\n                    <th scope=\"col\">Zone Name</th>\r\n                    <th scope=\"col\">Zone Code</th>\r\n                    <th scope=\"col\">Status</th>\r\n                    <th scope=\"col\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let zonelist of zoneSandbox.getzoneslist$ | async; let i=index\">\r\n                    <td class=\"text-center\" scope=\"row\">{{zonelist.country.name}}</td>\r\n                    <td>{{zonelist.name}}</td>\r\n                    <td>{{zonelist.code}}</td>\r\n                    <td>\r\n                        <div *ngIf=\"zonelist.isActive === 1\">Active</div>\r\n                        <div *ngIf=\"zonelist.isActive === 0\">In-Active</div>\r\n                    </td>\r\n                    <td><i (click)=\"editzone(zonelist)\" class=\"fas fa-edit\"></i> <i [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: 15px;\" class=\"fas fa-trash\"></i>\r\n                        <ng-template #deleteContent>\r\n                            <div class=\"style\">\r\n                                <div class=\"modal-header\">\r\n                                    <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"modal-footer\" style=\"margin-right: 23%;\">\r\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close();\" data-dismiss=\"modal\">No\r\n                                </button>\r\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"deleteZone(zonelist.zoneId, deletePop)\" data-dismiss=\"modal\">Yes\r\n                                </button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n    <mat-paginator [length]=\"zoneSandbox.getzonepagelength$ | async\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\r\n    </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/zone/list/list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/zone/list/list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ZoneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneListComponent", function() { return ZoneListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_zone_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/zone/zone.service */ "./src/core/admin/settings/localizations/zone/zone.service.ts");
/* harmony import */ var _core_admin_settings_localizations_zone_zone_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/zone/zone.sandbox */ "./src/core/admin/settings/localizations/zone/zone.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var ZoneListComponent = /** @class */ (function () {
    function ZoneListComponent(router, zoneSandbox, service) {
        this.router = router;
        this.zoneSandbox = zoneSandbox;
        this.service = service;
        // STYLING PUROPOSE
        this.pageSize = '5';
        this.keyword = '';
        this.regSubscribeEvents();
    }
    // initially calls getZonesList with argument( offset)
    ZoneListComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.isCount = true;
        this.getZonesList(this.offset);
    };
    ZoneListComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    /**
     * Handles  'getZonesList' event. Calls sandbox getZoneList  and getzonepagination function .
     *
     * @param offset from material paginator
     * @param params storing pagination value
     */
    ZoneListComponent.prototype.getZonesList = function (offset) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        this.zoneSandbox.getZoneList(params);
        if (this.isCount) {
            params.count = true;
            this.zoneSandbox.getzonepagination(params);
        }
    };
    // navigate to add component
    ZoneListComponent.prototype.AddeNewZone = function () {
        this.service.setzonelistdata('');
        this.router.navigate(['/settings/local/zone/add']);
    };
    // calls service setzonelistdata with argument (list).And navigate to edit component.
    ZoneListComponent.prototype.editzone = function (list) {
        this.service.setzonelistdata(list);
        this.router.navigate(['/settings/local/zone/edit', list.zoneId]);
    };
    // calls getZonesList with argument(offset)for pagination
    ZoneListComponent.prototype.onPageChange = function (event) {
        this.currentPage = event.offset;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        this.offset = event.pageSize * event.pageIndex;
        this.getZonesList(this.offset);
    };
    /**  calls zoneSandbox zoneDelete with argument (zoneId)
     * calls stopPropagation function
     * */
    ZoneListComponent.prototype.deleteZone = function (zoneId, deletePop) {
        event.stopPropagation();
        this.popoverContent = deletePop;
        this.zoneSandbox.zoneDelete({ zoneId: zoneId });
    };
    /**  calls zoneSandbox  deleteZone$ if success reponse gotted then
     * calls getZonesList function with argument(offset).
     * */
    ZoneListComponent.prototype.regSubscribeEvents = function () {
        var _this = this;
        this.zoneSandbox.deleteZone$.subscribe(function (_delete) {
            if (_delete && _delete.status === 1) {
                _this.getZonesList(_this.offset);
            }
        });
    };
    ZoneListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-zone-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/settings/components/localizations/zone/list/list.component.html"),
            styles: ["\n  .settings-right-wrapper {\n    margin-top: 0px !important;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_admin_settings_localizations_zone_zone_sandbox__WEBPACK_IMPORTED_MODULE_4__["ZoneSandbox"],
            _core_admin_settings_localizations_zone_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"]])
    ], ZoneListComponent);
    return ZoneListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/zone/zone.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/zone/zone.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ZoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneModule", function() { return ZoneModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/zone/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/zone/list/list.component.ts");
/* harmony import */ var _zone_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zone.routing */ "./src/theme/default/admin/settings/components/localizations/zone/zone.routing.ts");
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

var ZoneModule = /** @class */ (function () {
    function ZoneModule() {
    }
    ZoneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["ZoneAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ZoneListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _zone_routing__WEBPACK_IMPORTED_MODULE_7__["ZoneRoutingModule"]
            ],
            providers: [],
            bootstrap: [],
            entryComponents: []
        })
    ], ZoneModule);
    return ZoneModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/zone/zone.routing.ts":
/*!****************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/zone/zone.routing.ts ***!
  \****************************************************************************************/
/*! exports provided: ZoneRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneRoutingModule", function() { return ZoneRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/zone/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/zone/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var zoneRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ZoneListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["ZoneAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["ZoneAddComponent"]
    },
];
var ZoneRoutingModule = /** @class */ (function () {
    function ZoneRoutingModule() {
    }
    ZoneRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(zoneRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ZoneRoutingModule);
    return ZoneRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=zone-zone-module.js.map