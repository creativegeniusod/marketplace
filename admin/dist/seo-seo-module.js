(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seo-seo-module"],{

/***/ "./src/core/admin/settings/siteSettings/seo/seo-effects/seo-effect.ts":
/*!****************************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/seo/seo-effects/seo-effect.ts ***!
  \****************************************************************************/
/*! exports provided: SeoEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoEffect", function() { return SeoEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _seo_action_seo_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../seo-action/seo-action */ "./src/core/admin/settings/siteSettings/seo/seo-action/seo-action.ts");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../seo-service */ "./src/core/admin/settings/siteSettings/seo/seo-service.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */







var SeoEffect = /** @class */ (function () {
    function SeoEffect(action$, service) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        // NEW SEO SETTING
        this.doAddseo$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_seo_action_seo_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_NEW_SEO_SITE_SETTINGS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.createSeo(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _seo_action_seo_action__WEBPACK_IMPORTED_MODULE_6__["DoNewSeoSiteSettingSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _seo_action_seo_action__WEBPACK_IMPORTED_MODULE_6__["DoNewSeoSiteSettingFailAction"](error));
            }));
        }));
        // GET SEO SETTING
        this.dogetseosetting$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_seo_action_seo_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_SEO_SITE_SETTINGS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.service.getSeo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                return [new _seo_action_seo_action__WEBPACK_IMPORTED_MODULE_6__["DoGetSeoSiteSettingSuccessAction"](user)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _seo_action_seo_action__WEBPACK_IMPORTED_MODULE_6__["DoGetSeoSiteSettingFailAction"]()); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SeoEffect.prototype, "doAddseo$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SeoEffect.prototype, "dogetseosetting$", void 0);
    SeoEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _seo_service__WEBPACK_IMPORTED_MODULE_7__["SeoService"]])
    ], SeoEffect);
    return SeoEffect;
}());



/***/ }),

/***/ "./src/core/admin/settings/siteSettings/seo/seo-model/seo-model.ts":
/*!*************************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/seo/seo-model/seo-model.ts ***!
  \*************************************************************************/
/*! exports provided: SeoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoModel", function() { return SeoModel; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var SeoModel = /** @class */ (function () {
    function SeoModel(generalsettingForm) {
        this.metaTagTitle = generalsettingForm.metaTagTitle || '';
        this.metaTagDescription = generalsettingForm.metaTagDescription || '';
        this.metaTagKeywords = generalsettingForm.metaTagKeywords || '';
    }
    return SeoModel;
}());



/***/ }),

/***/ "./src/core/admin/settings/siteSettings/seo/seo-reducer/seo-selector.ts":
/*!******************************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/seo/seo-reducer/seo-selector.ts ***!
  \******************************************************************************/
/*! exports provided: getSeoState, getNewseo, getseo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeoState", function() { return getSeoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewseo", function() { return getNewseo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getseo", function() { return getseo; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _seo_reducer_seo_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../seo-reducer/seo-reducer */ "./src/core/admin/settings/siteSettings/seo/seo-reducer/seo-reducer.ts");


var getSeoState = function (state) { return state.seosetting; };
var getNewseo = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSeoState, _seo_reducer_seo_reducer__WEBPACK_IMPORTED_MODULE_1__["getnewseo"]);
var getseo = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSeoState, _seo_reducer_seo_reducer__WEBPACK_IMPORTED_MODULE_1__["getseo"]);


/***/ }),

/***/ "./src/core/admin/settings/siteSettings/seo/seo-sandbox.ts":
/*!*****************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/seo/seo-sandbox.ts ***!
  \*****************************************************************/
/*! exports provided: SeoSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoSandbox", function() { return SeoSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _seo_seo_action_seo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seo/seo-action/seo-action */ "./src/core/admin/settings/siteSettings/seo/seo-action/seo-action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seo_model_seo_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seo-model/seo-model */ "./src/core/admin/settings/siteSettings/seo/seo-model/seo-model.ts");
/* harmony import */ var _seo_reducer_seo_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seo-reducer/seo-selector */ "./src/core/admin/settings/siteSettings/seo/seo-reducer/seo-selector.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */






var SeoSandbox = /** @class */ (function () {
    function SeoSandbox(appState, router) {
        this.appState = appState;
        this.router = router;
        this.getNewseo$ = this.appState.select(_seo_reducer_seo_selector__WEBPACK_IMPORTED_MODULE_6__["getNewseo"]);
        this.getseo$ = this.appState.select(_seo_reducer_seo_selector__WEBPACK_IMPORTED_MODULE_6__["getseo"]);
    }
    SeoSandbox.prototype.createSeo = function (value) {
        this.appState.dispatch(new _seo_seo_action_seo_action__WEBPACK_IMPORTED_MODULE_3__["DoNewSeoSiteSettingAction"](new _seo_model_seo_model__WEBPACK_IMPORTED_MODULE_5__["SeoModel"](value)));
    };
    SeoSandbox.prototype.getSeo = function () {
        this.appState.dispatch(new _seo_seo_action_seo_action__WEBPACK_IMPORTED_MODULE_3__["DoGetSeoSiteSettingAction"]());
    };
    SeoSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SeoSandbox);
    return SeoSandbox;
}());



/***/ }),

/***/ "./src/core/admin/settings/siteSettings/seo/seo-service.ts":
/*!*****************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/seo/seo-service.ts ***!
  \*****************************************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


var SeoService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SeoService, _super);
    function SeoService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // new user
    SeoService.prototype.createSeo = function (param) {
        return this.http.post(this.url + '/settings/create-settings', param);
    };
    SeoService.prototype.getSeo = function () {
        return this.http.get(this.url + '/settings/get-settings');
    };
    SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SeoService);
    return SeoService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/seo/seo.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\r\n    <h3> Settings > Site Settings > SEO</h3>\r\n\r\n</div>\r\n<div class=\"settings-right-wrapper addnewuser\">\r\n\r\n    <div class=\"new-user\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"seoForm\" class=\"form-horizontal m-t-20\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Meta Title\r\n                            </label>\r\n                        <input type=\"text\" formControlName=\"MetaTitle\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Meta Tag Description\r\n                                </label>\r\n                        <input type=\"text\" formControlName=\"MetaTagDescription\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Meta Tag Keyword</label>\r\n                        <input type=\"text\" formControlName=\"MetatagKeyword\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"flex user-btn\">`\r\n                        <button type=\"submit\" class=\"btn btn-add\">Save</button>\r\n                        <button (click)=\"seoCancel()\" class=\"btn btn-cancel\">Cancel\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/seo/seo.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoComponent", function() { return SeoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_settings_siteSettings_seo_seo_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/seo/seo-sandbox */ "./src/core/admin/settings/siteSettings/seo/seo-sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var SeoComponent = /** @class */ (function () {
    function SeoComponent(fb, seosandbox, router) {
        this.fb = fb;
        this.seosandbox = seosandbox;
        this.router = router;
        this.subscriptions = [];
        this.submitted = false;
    }
    // initially calls initForm,getseoinfo,subscribe
    SeoComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getseoinfo();
        this.subscribe();
    };
    // Subscribe getSeoinfo Bind formcontrol
    SeoComponent.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.seosandbox.getNewseo$.subscribe(function (data) { }));
        this.subscriptions.push(this.seosandbox.getseo$.subscribe(function (data) {
            if (data && data[0]) {
                _this.seoForm.controls['MetaTagDescription'].setValue(data[0].metaTagDescription);
                _this.seoForm.controls['MetatagKeyword'].setValue(data[0].metaTagKeywords);
                _this.seoForm.controls['MetaTitle'].setValue(data[0].metaTagTitle);
            }
        }));
    };
    /**
     * Handles form 'list' event. Calls sandbox Seo getSeo  function .
     *
     */
    SeoComponent.prototype.getseoinfo = function () {
        this.seosandbox.getSeo();
    };
    // Init Form Group
    SeoComponent.prototype.initForm = function () {
        this.MetaTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.MetaTagDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.MetatagKeyword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.seoForm = this.fb.group({
            MetaTitle: this.MetaTitle,
            MetaTagDescription: this.MetaTagDescription,
            MetatagKeyword: this.MetatagKeyword
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox Seo createSeo function if form is valid.
     *
     * @param seoForm entire form value
     * @param params storing entire value
     */
    SeoComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.seoForm.invalid) {
            return;
        }
        var params = {};
        params.metaTagTitle = this.seoForm.value.MetaTitle;
        params.metaTagDescription = this.seoForm.value.MetaTagDescription;
        params.metaTagKeywords = this.seoForm.value.MetatagKeyword;
        this.seosandbox.createSeo(params);
    };
    // Cancle navigate to dashboard
    SeoComponent.prototype.seoCancel = function () {
        this.router.navigate(['/dashboard']);
    };
    SeoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-sitesettings-seo',
            template: __webpack_require__(/*! ./seo.component.html */ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.component.html"),
            styles: ["\n  .settings-right-wrapper {\n    margin-top: 0px !important;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_admin_settings_siteSettings_seo_seo_sandbox__WEBPACK_IMPORTED_MODULE_3__["SeoSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SeoComponent);
    return SeoComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.module.ts":
/*!************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/seo/seo.module.ts ***!
  \************************************************************************************/
/*! exports provided: SeoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoModule", function() { return SeoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _seo_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seo.routing */ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.routing.ts");
/* harmony import */ var _seo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seo.component */ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.component.ts");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _core_admin_settings_siteSettings_seo_seo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/seo/seo-service */ "./src/core/admin/settings/siteSettings/seo/seo-service.ts");
/* harmony import */ var _core_admin_settings_siteSettings_seo_seo_sandbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/seo/seo-sandbox */ "./src/core/admin/settings/siteSettings/seo/seo-sandbox.ts");
/* harmony import */ var _core_admin_settings_siteSettings_seo_seo_effects_seo_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/seo/seo-effects/seo-effect */ "./src/core/admin/settings/siteSettings/seo/seo-effects/seo-effect.ts");

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







var SeoModule = /** @class */ (function () {
    function SeoModule() {
    }
    SeoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_seo_component__WEBPACK_IMPORTED_MODULE_7__["SeoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_8__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _seo_routing__WEBPACK_IMPORTED_MODULE_6__["SeoRouting"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_core_admin_settings_siteSettings_seo_seo_effects_seo_effect__WEBPACK_IMPORTED_MODULE_11__["SeoEffect"]])
            ],
            providers: [_core_admin_settings_siteSettings_seo_seo_sandbox__WEBPACK_IMPORTED_MODULE_10__["SeoSandbox"], _core_admin_settings_siteSettings_seo_seo_service__WEBPACK_IMPORTED_MODULE_9__["SeoService"]],
            bootstrap: [],
            entryComponents: []
        })
    ], SeoModule);
    return SeoModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.routing.ts":
/*!*************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/seo/seo.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: SeoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoRouting", function() { return SeoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seo.component */ "./src/theme/default/admin/settings/components/sitesettings/seo/seo.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component

var seoRoutes = [{ path: '', component: _seo_component__WEBPACK_IMPORTED_MODULE_3__["SeoComponent"] }];
var SeoRouting = /** @class */ (function () {
    function SeoRouting() {
    }
    SeoRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(seoRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SeoRouting);
    return SeoRouting;
}());



/***/ })

}]);
//# sourceMappingURL=seo-seo-module.js.map