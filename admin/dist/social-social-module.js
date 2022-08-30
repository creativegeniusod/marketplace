(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-social-module"],{

/***/ "./src/core/admin/settings/siteSettings/social/social-effect/social.effect.ts":
/*!************************************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/social/social-effect/social.effect.ts ***!
  \************************************************************************************/
/*! exports provided: SocialEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialEffect", function() { return SocialEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _social_action_social_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social-action/social.action */ "./src/core/admin/settings/siteSettings/social/social-action/social.action.ts");
/* harmony import */ var _social_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../social.service */ "./src/core/admin/settings/siteSettings/social/social.service.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */







var SocialEffect = /** @class */ (function () {
    function SocialEffect(action$, service) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        // NEW SOCIAL EFFECT
        this.doAddsocial$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_social_action_social_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_NEW_SOCIAL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.createsocial(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _social_action_social_action__WEBPACK_IMPORTED_MODULE_6__["DoNewSocialSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _social_action_social_action__WEBPACK_IMPORTED_MODULE_6__["DoNewSocialFailAction"](error)); }));
        }));
        // GET SOCIAL EFFECT
        this.dogetsocial$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_social_action_social_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_GET_SOCIAL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.service.getSocial().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                return [new _social_action_social_action__WEBPACK_IMPORTED_MODULE_6__["DoGetSocialSuccessAction"](user)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _social_action_social_action__WEBPACK_IMPORTED_MODULE_6__["DoGetSocialFailAction"]()); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SocialEffect.prototype, "doAddsocial$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], SocialEffect.prototype, "dogetsocial$", void 0);
    SocialEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _social_service__WEBPACK_IMPORTED_MODULE_7__["SocialService"]])
    ], SocialEffect);
    return SocialEffect;
}());



/***/ }),

/***/ "./src/core/admin/settings/siteSettings/social/social-model/social.model.ts":
/*!**********************************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/social/social-model/social.model.ts ***!
  \**********************************************************************************/
/*! exports provided: SocialForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialForm", function() { return SocialForm; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var SocialForm = /** @class */ (function () {
    function SocialForm(socialForm) {
        this.facebook = socialForm.facebook || '';
        this.google = socialForm.google || '';
        this.twitter = socialForm.twitter || '';
        this.instagram = socialForm.instagram || '';
    }
    return SocialForm;
}());



/***/ }),

/***/ "./src/core/admin/settings/siteSettings/social/social-reducer/social.selector.ts":
/*!***************************************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/social/social-reducer/social.selector.ts ***!
  \***************************************************************************************/
/*! exports provided: getSocialState, getNewSocial, getSocial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocialState", function() { return getSocialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewSocial", function() { return getNewSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocial", function() { return getSocial; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _social_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.reducer */ "./src/core/admin/settings/siteSettings/social/social-reducer/social.reducer.ts");


var getSocialState = function (state) { return state.social; };
var getNewSocial = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSocialState, _social_reducer__WEBPACK_IMPORTED_MODULE_1__["getNewSocial"]);
var getSocial = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSocialState, _social_reducer__WEBPACK_IMPORTED_MODULE_1__["getSocial"]);


/***/ }),

/***/ "./src/core/admin/settings/siteSettings/social/social.sandbox.ts":
/*!***********************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/social/social.sandbox.ts ***!
  \***********************************************************************/
/*! exports provided: SocialSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSandbox", function() { return SocialSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _social_social_action_social_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social/social-action/social.action */ "./src/core/admin/settings/siteSettings/social/social-action/social.action.ts");
/* harmony import */ var _social_model_social_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-model/social.model */ "./src/core/admin/settings/siteSettings/social/social-model/social.model.ts");
/* harmony import */ var _social_reducer_social_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-reducer/social.selector */ "./src/core/admin/settings/siteSettings/social/social-reducer/social.selector.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */





var SocialSandbox = /** @class */ (function () {
    function SocialSandbox(appState) {
        this.appState = appState;
        this.getNewSocial$ = this.appState.select(_social_reducer_social_selector__WEBPACK_IMPORTED_MODULE_5__["getNewSocial"]);
        this.getSocial$ = this.appState.select(_social_reducer_social_selector__WEBPACK_IMPORTED_MODULE_5__["getSocial"]);
    }
    SocialSandbox.prototype.createSocial = function (value) {
        this.appState.dispatch(new _social_social_action_social_action__WEBPACK_IMPORTED_MODULE_3__["DoNewSocialAction"](new _social_model_social_model__WEBPACK_IMPORTED_MODULE_4__["SocialForm"](value)));
    };
    SocialSandbox.prototype.getSocial = function () {
        this.appState.dispatch(new _social_social_action_social_action__WEBPACK_IMPORTED_MODULE_3__["DoGetSocialAction"]());
    };
    SocialSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SocialSandbox);
    return SocialSandbox;
}());



/***/ }),

/***/ "./src/core/admin/settings/siteSettings/social/social.service.ts":
/*!***********************************************************************!*\
  !*** ./src/core/admin/settings/siteSettings/social/social.service.ts ***!
  \***********************************************************************/
/*! exports provided: SocialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialService", function() { return SocialService; });
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


var SocialService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SocialService, _super);
    function SocialService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // new social setting
    SocialService.prototype.createsocial = function (param) {
        return this.http.post(this.url + '/settings/create-settings', param);
    };
    // get social setting
    SocialService.prototype.getSocial = function () {
        return this.http.get(this.url + '/settings/get-settings');
    };
    SocialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SocialService);
    return SocialService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/social/social.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/social/social.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\r\n    <h3> Settings > Site Settings > Social </h3>\r\n\r\n</div>\r\n<div class=\"settings-right-wrapper addnewuser\">\r\n\r\n    <div class=\"new-user\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"socialForm\" class=\"form-horizontal m-t-20\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Facebook</label>\r\n                        <input type=\"text\" placeholder=\"Facebook Link'\" formControlName=\"Facebook\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Google</label>\r\n                        <input type=\"text\" formControlName=\"Google\" class=\"form-control\" placeholder=\"Google Link\">\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Twitter\r\n                \r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"Twitter\" placeholder=\"Twitter Link\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label>Instagram</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"Instagram\" placeholder=\"Instagram Link\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"flex user-btn\">`\r\n                        <button type=\"submit\" class=\"btn btn-add\">Save</button>\r\n                        <button (click)=\"socialcancel()\" class=\"btn btn-cancel\">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/social/social.components.ts":
/*!**********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/social/social.components.ts ***!
  \**********************************************************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_settings_siteSettings_social_social_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/social/social.sandbox */ "./src/core/admin/settings/siteSettings/social/social.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




var SocialComponent = /** @class */ (function () {
    function SocialComponent(socialsandbox, fb, router) {
        this.socialsandbox = socialsandbox;
        this.fb = fb;
        this.router = router;
        this.subscriptions = [];
        this.submitted = false;
    }
    // initially calls initForm,subscripe,getsocialinfo
    SocialComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.subscripe();
        this.getsocialinfo();
    };
    // Init FormGroup
    SocialComponent.prototype.initForm = function () {
        this.Facebook = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.Google = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.Twitter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.Instagram = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.socialForm = this.fb.group({
            Facebook: this.Facebook,
            Google: this.Google,
            Twitter: this.Twitter,
            Instagram: this.Instagram
        });
    };
    /**
     * Handles form 'submit' event. Calls sandbox Social  createSocial function if form is valid.
     *
     * @param socialForm entire form value
     * @param params storing entire value
     */
    SocialComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.socialForm.invalid) {
            return;
        }
        var params = {};
        params.facebook = this.socialForm.value.Facebook;
        params.google = this.socialForm.value.Google;
        params.twitter = this.socialForm.value.Twitter;
        params.instagram = this.socialForm.value.Instagram;
        this.socialsandbox.createSocial(params);
    };
    /**
     * Handles form 'list' event. Calls sandbox Social  getSocial function.
     *
     */
    SocialComponent.prototype.getsocialinfo = function () {
        this.socialsandbox.getSocial();
    };
    // Subscribe Social Data bind from control
    SocialComponent.prototype.subscripe = function () {
        var _this = this;
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
        this.subscriptions.push(this.socialsandbox.getSocial$.subscribe(function (data) {
            if (data && data[0]) {
                _this.socialForm.controls['Facebook'].setValue(data[0].facebook);
                _this.socialForm.controls['Google'].setValue(data[0].google);
                _this.socialForm.controls['Twitter'].setValue(data[0].twitter);
                _this.socialForm.controls['Instagram'].setValue(data[0].instagram);
            }
        }));
    };
    // Social Cancle navigate to Dashboard
    SocialComponent.prototype.socialcancel = function () {
        this.router.navigate(['/dashboard']);
    };
    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-sitesettings-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/theme/default/admin/settings/components/sitesettings/social/social.component.html"),
            styles: ["\n  .settings-right-wrapper {\n    margin-top: 0px !important;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_settings_siteSettings_social_social_sandbox__WEBPACK_IMPORTED_MODULE_3__["SocialSandbox"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/social/social.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/social/social.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _social_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social.routing */ "./src/theme/default/admin/settings/components/sitesettings/social/social.routing.ts");
/* harmony import */ var _core_admin_settings_siteSettings_social_social_effect_social_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/social/social-effect/social.effect */ "./src/core/admin/settings/siteSettings/social/social-effect/social.effect.ts");
/* harmony import */ var _core_admin_settings_siteSettings_social_social_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/social/social.service */ "./src/core/admin/settings/siteSettings/social/social.service.ts");
/* harmony import */ var _core_admin_settings_siteSettings_social_social_sandbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/siteSettings/social/social.sandbox */ "./src/core/admin/settings/siteSettings/social/social.sandbox.ts");
/* harmony import */ var _social_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./social.components */ "./src/theme/default/admin/settings/components/sitesettings/social/social.components.ts");

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







var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_social_components__WEBPACK_IMPORTED_MODULE_11__["SocialComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_6__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _social_routing__WEBPACK_IMPORTED_MODULE_7__["SocialRouting"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_core_admin_settings_siteSettings_social_social_effect_social_effect__WEBPACK_IMPORTED_MODULE_8__["SocialEffect"]])
            ],
            providers: [_core_admin_settings_siteSettings_social_social_sandbox__WEBPACK_IMPORTED_MODULE_10__["SocialSandbox"], _core_admin_settings_siteSettings_social_social_service__WEBPACK_IMPORTED_MODULE_9__["SocialService"]],
            bootstrap: [],
            entryComponents: []
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/sitesettings/social/social.routing.ts":
/*!*******************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/sitesettings/social/social.routing.ts ***!
  \*******************************************************************************************/
/*! exports provided: SocialRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRouting", function() { return SocialRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social.components */ "./src/theme/default/admin/settings/components/sitesettings/social/social.components.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



// Component
var socialRoutes = [{ path: '', component: _social_components__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"] }];
var SocialRouting = /** @class */ (function () {
    function SocialRouting() {
    }
    SocialRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(socialRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SocialRouting);
    return SocialRouting;
}());



/***/ })

}]);
//# sourceMappingURL=social-social-module.js.map