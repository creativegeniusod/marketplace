(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-generalsettings-generalsettings-module"],{

/***/ "./src/core/admin/settings/generalsetting/generalsetting-effect/generalsetting.effect.ts":
/*!***********************************************************************************************!*\
  !*** ./src/core/admin/settings/generalsetting/generalsetting-effect/generalsetting.effect.ts ***!
  \***********************************************************************************************/
/*! exports provided: GeneralSettingEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingEffect", function() { return GeneralSettingEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generalsetting-action/generalsetting.action */ "./src/core/admin/settings/generalsetting/generalsetting-action/generalsetting.action.ts");
/* harmony import */ var _generalsetting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generalsetting.service */ "./src/core/admin/settings/generalsetting/generalsetting.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _layout_actions_layout_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layout/actions/layout.action */ "./src/core/admin/layout/actions/layout.action.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */









var GeneralSettingEffect = /** @class */ (function () {
    function GeneralSettingEffect(action$, appState$, service) {
        var _this = this;
        this.action$ = action$;
        this.appState$ = appState$;
        this.service = service;
        // NEW USER
        this.doAddUser$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_NEW_GENERAL_SETTINGS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.createGeneralSetting(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_6__["DoNewGeneralSettingSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (val) {
                _this.appState$.dispatch(new _layout_actions_layout_action__WEBPACK_IMPORTED_MODULE_9__["GetSettings"]());
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_6__["DoNewGeneralSettingFailAction"](error));
            }));
        }));
        // GET GENERAL SETTINGS
        this.dogetGeneralsetting$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_GET_GENERAL_SETTINGS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.service.getGeneralSetting().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                return [new _generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_6__["DoGetGeneralSettingSuccessAction"](user)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_6__["DoGetGeneralSettingFailAction"]()); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], GeneralSettingEffect.prototype, "doAddUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], GeneralSettingEffect.prototype, "dogetGeneralsetting$", void 0);
    GeneralSettingEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _generalsetting_service__WEBPACK_IMPORTED_MODULE_7__["GeneralSettingService"]])
    ], GeneralSettingEffect);
    return GeneralSettingEffect;
}());



/***/ }),

/***/ "./src/core/admin/settings/generalsetting/generalsetting-model/generalsetting.model.ts":
/*!*********************************************************************************************!*\
  !*** ./src/core/admin/settings/generalsetting/generalsetting-model/generalsetting.model.ts ***!
  \*********************************************************************************************/
/*! exports provided: GeneralSettingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingForm", function() { return GeneralSettingForm; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var GeneralSettingForm = /** @class */ (function () {
    function GeneralSettingForm(generalsettingForm) {
        this.storeName = generalsettingForm.storename || '';
        this.storeOwner = generalsettingForm.storeowner || '';
        this.storeAddress = generalsettingForm.address || '';
        this.storeEmail = generalsettingForm.email || '';
        this.storeTelephone = generalsettingForm.phonenumber || '';
        this.countryId = generalsettingForm.country || 0;
        this.zoneId = generalsettingForm.zone || 0;
        this.maintenanceMode = generalsettingForm.maintenanceMode || 0;
        if (generalsettingForm.image) {
            this.storeLogo = generalsettingForm.image || '';
        }
    }
    return GeneralSettingForm;
}());



/***/ }),

/***/ "./src/core/admin/settings/generalsetting/generalsetting-reducer/generalsetting.selector.ts":
/*!**************************************************************************************************!*\
  !*** ./src/core/admin/settings/generalsetting/generalsetting-reducer/generalsetting.selector.ts ***!
  \**************************************************************************************************/
/*! exports provided: getGeneralSettingState, getNewGeneralSettings, getGeneralSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeneralSettingState", function() { return getGeneralSettingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewGeneralSettings", function() { return getNewGeneralSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeneralSettings", function() { return getGeneralSettings; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _generalsetting_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalsetting.reducer */ "./src/core/admin/settings/generalsetting/generalsetting-reducer/generalsetting.reducer.ts");


var getGeneralSettingState = function (state) { return state.generalsetting; };
var getNewGeneralSettings = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGeneralSettingState, _generalsetting_reducer__WEBPACK_IMPORTED_MODULE_1__["getNewGeneralsettings"]);
var getGeneralSettings = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGeneralSettingState, _generalsetting_reducer__WEBPACK_IMPORTED_MODULE_1__["getGeneralsettings"]);


/***/ }),

/***/ "./src/core/admin/settings/generalsetting/generalsetting.sandbox.ts":
/*!**************************************************************************!*\
  !*** ./src/core/admin/settings/generalsetting/generalsetting.sandbox.ts ***!
  \**************************************************************************/
/*! exports provided: GeneralSettingSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingSandbox", function() { return GeneralSettingSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _generalsetting_generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalsetting/generalsetting-action/generalsetting.action */ "./src/core/admin/settings/generalsetting/generalsetting-action/generalsetting.action.ts");
/* harmony import */ var _generalsetting_reducer_generalsetting_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generalsetting-reducer/generalsetting.selector */ "./src/core/admin/settings/generalsetting/generalsetting-reducer/generalsetting.selector.ts");
/* harmony import */ var _generalsetting_model_generalsetting_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generalsetting-model/generalsetting.model */ "./src/core/admin/settings/generalsetting/generalsetting-model/generalsetting.model.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */





var GeneralSettingSandbox = /** @class */ (function () {
    function GeneralSettingSandbox(appState) {
        this.appState = appState;
        this.getNewGeneralSettings$ = this.appState.select(_generalsetting_reducer_generalsetting_selector__WEBPACK_IMPORTED_MODULE_4__["getNewGeneralSettings"]);
        this.getGeneralSettings$ = this.appState.select(_generalsetting_reducer_generalsetting_selector__WEBPACK_IMPORTED_MODULE_4__["getGeneralSettings"]);
        this.subscribedata();
    }
    // Create General Setting
    GeneralSettingSandbox.prototype.createGeneralSetting = function (value) {
        this.appState.dispatch(new _generalsetting_generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_3__["DoNewGeneralSettingAction"](new _generalsetting_model_generalsetting_model__WEBPACK_IMPORTED_MODULE_5__["GeneralSettingForm"](value)));
    };
    // Get General Setting
    GeneralSettingSandbox.prototype.getGeneralSetting = function () {
        this.appState.dispatch(new _generalsetting_generalsetting_action_generalsetting_action__WEBPACK_IMPORTED_MODULE_3__["DoGetGeneralSettingAction"]());
    };
    GeneralSettingSandbox.prototype.subscribedata = function () {
        var _this = this;
        this.getNewGeneralSettings$.subscribe(function (data) {
            if (data && data.status === 1) {
                _this.getGeneralSetting();
            }
        });
    };
    GeneralSettingSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], GeneralSettingSandbox);
    return GeneralSettingSandbox;
}());



/***/ }),

/***/ "./src/core/admin/settings/generalsetting/generalsetting.service.ts":
/*!**************************************************************************!*\
  !*** ./src/core/admin/settings/generalsetting/generalsetting.service.ts ***!
  \**************************************************************************/
/*! exports provided: GeneralSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingService", function() { return GeneralSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


var GeneralSettingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GeneralSettingService, _super);
    function GeneralSettingService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // Create General Setting
    GeneralSettingService.prototype.createGeneralSetting = function (param) {
        return this.http.post(this.url + '/settings/create-settings', param);
    };
    // Get General Setting
    GeneralSettingService.prototype.getGeneralSetting = function () {
        return this.http.get(this.url + '/settings/get-settings');
    };
    GeneralSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GeneralSettingService);
    return GeneralSettingService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/settings/components/generalsettings/generalsettings.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/generalsettings/generalsettings.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: GeneralSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsModule", function() { return GeneralSettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_settings_generalsetting_generalsetting_effect_generalsetting_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/admin/settings/generalsetting/generalsetting-effect/generalsetting.effect */ "./src/core/admin/settings/generalsetting/generalsetting-effect/generalsetting.effect.ts");
/* harmony import */ var _generalsettings_generalsettings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generalsettings/generalsettings.component */ "./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.ts");
/* harmony import */ var _generalsettings_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generalsettings.routing */ "./src/theme/default/admin/settings/components/generalsettings/generalsettings.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _core_admin_settings_generalsetting_generalsetting_sandbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/admin/settings/generalsetting/generalsetting.sandbox */ "./src/core/admin/settings/generalsetting/generalsetting.sandbox.ts");
/* harmony import */ var _core_admin_settings_generalsetting_generalsetting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../core/admin/settings/generalsetting/generalsetting.service */ "./src/core/admin/settings/generalsetting/generalsetting.service.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_12__);

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */




// Store Actions


// Component

// Routing Module

// Shared Module

// Service And Sandbox



var GeneralSettingsModule = /** @class */ (function () {
    function GeneralSettingsModule() {
    }
    GeneralSettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_generalsettings_generalsettings_component__WEBPACK_IMPORTED_MODULE_7__["GeneralSettingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _generalsettings_routing__WEBPACK_IMPORTED_MODULE_8__["GenaeralSettingsRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_core_admin_settings_generalsetting_generalsetting_effect_generalsetting_effect__WEBPACK_IMPORTED_MODULE_6__["GeneralSettingEffect"]]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"]
            ],
            providers: [_core_admin_settings_generalsetting_generalsetting_sandbox__WEBPACK_IMPORTED_MODULE_10__["GeneralSettingSandbox"], _core_admin_settings_generalsetting_generalsetting_service__WEBPACK_IMPORTED_MODULE_11__["GeneralSettingService"]],
            bootstrap: [],
            entryComponents: []
        })
    ], GeneralSettingsModule);
    return GeneralSettingsModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/generalsettings/generalsettings.routing.ts":
/*!************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/generalsettings/generalsettings.routing.ts ***!
  \************************************************************************************************/
/*! exports provided: GenaeralSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenaeralSettingsRoutingModule", function() { return GenaeralSettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generalsettings_generalsettings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalsettings/generalsettings.component */ "./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component

var roleRoutes = [{ path: '', component: _generalsettings_generalsettings_component__WEBPACK_IMPORTED_MODULE_3__["GeneralSettingComponent"] }];
var GenaeralSettingsRoutingModule = /** @class */ (function () {
    function GenaeralSettingsRoutingModule() {
    }
    GenaeralSettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(roleRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GenaeralSettingsRoutingModule);
    return GenaeralSettingsRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-radio-button {\n    padding: 1px 3px;\n}\n\n.settings-right-wrapper {\n    margin-top: 0px !important;\n}\n\n.setting1-inner-header {\n    margin-top: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9kZWZhdWx0L2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvZ2VuZXJhbHNldHRpbmdzL2dlbmVyYWxzZXR0aW5ncy9nZW5lcmFsc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvdGhlbWUvZGVmYXVsdC9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL2dlbmVyYWxzZXR0aW5ncy9nZW5lcmFsc2V0dGluZ3MvZ2VuZXJhbHNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxcHggM3B4O1xufVxuXG4uc2V0dGluZ3MtcmlnaHQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZXR0aW5nMS1pbm5lci1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting1-inner-header\">\n    <h3>Settings > General Settings</h3>\n\n</div>\n<div class=\"settings-right-wrapper addnewuser\">\n\n    <div class=\"new-user\">\n        <h3>Store</h3>\n\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"generalSettings\" class=\"form-horizontal m-t-20\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Store Name </label>\n                        <input type=\"text\" formControlName=\"storeName\" class=\"form-control\" />\n\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Store Owner </label>\n                        <input type=\"text\" formControlName=\"storeOwner\" class=\"form-control\" />\n\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Address</label>\n                        <textarea class=\"form-control\" formControlName=\"address\" placeholder=\"Address\"></textarea>\n\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" />\n\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Phone Number </label>\n                        <input type=\"text\" formControlName=\"phonenumber\" class=\"form-control\" />\n\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-xs-12\">\n\n                    <div class=\"form-group\">\n                        <div class=\"image-col\">\n                            <div class=\"img-dflt\">\n                                <input type=\"file\" name=\"userImg\" (change)=\"uploadChange($event)\" accept=\"image/*\" #filePath style=\"display: none\">\n                                <img [src]=\"postImageUrl\" width=\"13%\" height=\"13%\">\n                                <p></p>\n                                <button (click)=\"uploadButtonClick()\" type=\"button\">\n                                    Upload Picture\n                                </button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Country</label>\n                        <select class=\"form-control custom-select\" data-placeholder=\"Choose Country\" formControlName=\"country\" placeholder=\"Country\">\n                            <option *ngFor=\"let country of countrysandbox.getcountries$ | async\"\n                                    value={{country.countryId}}>\n                                {{country.name}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Region / State</label>\n                        <select class=\"form-control custom-select\" data-placeholder=\"Choose Region\" formControlName=\"zone\" placeholder=\"Region\">\n                            <option *ngFor=\"let zone of zonesandbox.getzoneslist$ | async\"\n                                    value={{zone.zoneId}}>\n                                {{zone.name}}\n                            </option>\n                        </select>\n                    </div>\n\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Maintenance Mode</label>\n                        <div class=\"radio\">\n                            <mat-radio-group formControlName=\"maintenanceMode\" fxLayout=\"column\" fxLayoutGap=\".25rem\">\n                                <mat-radio-button [value]=\"'Yes'\">Yes</mat-radio-button>\n                                <mat-radio-button [value]=\"'No'\">No</mat-radio-button>\n                            </mat-radio-group>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"flex user-btn\">`\n                        <button type=\"submit\" class=\"btn btn-add\">Save</button>\n                        <button (click)=\"generalsettingcancel()\" class=\"btn btn-cancel\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GeneralSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingComponent", function() { return GeneralSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_settings_localizations_country_country_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/localizations/country/country.sandbox */ "./src/core/admin/settings/localizations/country/country.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_zone_zone_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/localizations/zone/zone.sandbox */ "./src/core/admin/settings/localizations/zone/zone.sandbox.ts");
/* harmony import */ var _core_admin_settings_generalsetting_generalsetting_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/generalsetting/generalsetting.sandbox */ "./src/core/admin/settings/generalsetting/generalsetting.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */







var GeneralSettingComponent = /** @class */ (function () {
    // Language
    function GeneralSettingComponent(changeDetectRef, router, fb, countrysandbox, zonesandbox, generalsettingsandbox, configService) {
        this.changeDetectRef = changeDetectRef;
        this.router = router;
        this.fb = fb;
        this.countrysandbox = countrysandbox;
        this.zonesandbox = zonesandbox;
        this.generalsettingsandbox = generalsettingsandbox;
        this.configService = configService;
        this.keyword = '';
        this.pageSize = '10';
        this.offset = 0;
        this.subscriptions = [];
    }
    // initially calls initForm,dropdownlist,getGeneralSetting
    GeneralSettingComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.defaultImageUrl = '';
        this.imageUrl = this.configService.getImageUrl();
        this.postImageUrl = './assets/upload-banner/upload.png';
        this.initForm();
        this.dropdownlist();
        this.getGeneralSetting();
    };
    /**
     * Handles form 'list' event. Calls sandbox GeneralSetting  generalsetting get data function .
     */
    GeneralSettingComponent.prototype.getGeneralSetting = function () {
        this.generalsettingsandbox.getGeneralSetting();
    };
    GeneralSettingComponent.prototype.dropdownlist = function () {
        this.countrylist(this.offset, this.keyword);
        this.zonesList(this.offset);
        this.subscribe();
    };
    /**
     * Handles form 'submit' event. Calls sandbox GeneralSetting createGeneralSetting  function if form is valid.
     *
     * @param params storing entire value
     */
    GeneralSettingComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.generalSettings.invalid) {
            return;
        }
        var params = {};
        params.storename = this.generalSettings.value.storeName;
        params.storeowner = this.generalSettings.value.storeOwner;
        params.address = this.generalSettings.value.address;
        params.email = this.generalSettings.value.email;
        params.phonenumber = this.generalSettings.value.phonenumber;
        params.country = this.generalSettings.value.country;
        params.zone = this.generalSettings.value.zone;
        if (this.generalSettings.value.maintenanceMode === 'Yes') {
            params.maintenanceMode = 1;
        }
        else {
            params.maintenanceMode = 0;
        }
        if (this.defaultImageUrl) {
            params.image = this.postImageUrl;
        }
        this.generalsettingsandbox.createGeneralSetting(params);
    };
    Object.defineProperty(GeneralSettingComponent.prototype, "f", {
        // VALIDATION
        get: function () {
            return this.generalSettings.controls;
        },
        enumerable: true,
        configurable: true
    });
    // Form Group
    GeneralSettingComponent.prototype.initForm = function () {
        this.generalSettings = this.fb.group({
            storeName: [null],
            storeOwner: [null],
            address: [null],
            email: [null],
            phonenumber: [null],
            country: [null],
            zone: [null],
            maintenanceMode: [null]
        });
    };
    /**
     * Handles form 'list' event. Calls sandbox country countrylist function .
     *
     * @param params storing entire value
     */
    GeneralSettingComponent.prototype.countrylist = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        this.countrysandbox.getcountrieslist(params);
    };
    /**
     * Handles form 'list' event. Calls sandbox Zone getZoneList function .
     *
     * @param params storing entire value
     */
    GeneralSettingComponent.prototype.zonesList = function (offset) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        this.zonesandbox.getZoneList(params);
    };
    // Image Upload
    GeneralSettingComponent.prototype.uploadButtonClick = function () {
        var el = this.filePath.nativeElement;
        el.click();
    };
    /**
     * Handles  'uploadChange' event. calls convertBase64 function
     *
     * @param $event .
     */
    GeneralSettingComponent.prototype.uploadChange = function ($event) {
        this.convertBase64($event.target);
    };
    /**
     * Handles  'convertBase64' event. finally store the data in postImageUrl
     *
     * @param inputValue .
     */
    GeneralSettingComponent.prototype.convertBase64 = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.postImageUrl = myReader.result;
            _this.defaultImageUrl = myReader.result;
            _this.changeDetectRef.detectChanges();
        };
        myReader.readAsDataURL(file);
    };
    // Subscribe general settings data bind form control values
    GeneralSettingComponent.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.generalsettingsandbox.getGeneralSettings$.subscribe(function (data) {
            if (data && data[0]) {
                _this.generalSettings.controls['storeName'].setValue(data[0].storeName);
                _this.generalSettings.controls['storeOwner'].setValue(data[0].storeOwner);
                _this.generalSettings.controls['address'].setValue(data[0].storeAddress);
                _this.generalSettings.controls['country'].setValue(data[0].countryId);
                _this.generalSettings.controls['zone'].setValue(data[0].zoneId);
                _this.generalSettings.controls['email'].setValue(data[0].storeEmail);
                _this.generalSettings.controls['phonenumber'].setValue(data[0].storeTelephone);
                if (data[0].maintenanceMode === 1) {
                    _this.generalSettings.patchValue({
                        maintenanceMode: 'Yes',
                        tc: true
                    });
                }
                else if (data[0].maintenanceMode === 0) {
                    _this.generalSettings.patchValue({
                        maintenanceMode: 'No',
                        tc: true
                    });
                }
                if (data[0].storeLogoPath && data[0].storeLogo) {
                    _this.postImageUrl =
                        _this.imageUrl + '?path=' +
                            ("" + data[0].storeLogoPath) + '&name=' +
                            ("" + data[0].storeLogo) +
                            '&width=160&height=150';
                    _this.changeDetectRef.detectChanges();
                }
            }
        }));
    };
    // Cancle Navigate to Dashboard
    GeneralSettingComponent.prototype.generalsettingcancel = function () {
        this.router.navigate(['/dashboard']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filePath'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GeneralSettingComponent.prototype, "filePath", void 0);
    GeneralSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-genearlsettingsadd',
            template: __webpack_require__(/*! ./generalsettings.component.html */ "./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.html"),
            styles: [__webpack_require__(/*! ./generalsettings.component.css */ "./src/theme/default/admin/settings/components/generalsettings/generalsettings/generalsettings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_admin_settings_localizations_country_country_sandbox__WEBPACK_IMPORTED_MODULE_3__["CountrySandbox"],
            _core_admin_settings_localizations_zone_zone_sandbox__WEBPACK_IMPORTED_MODULE_4__["ZoneSandbox"],
            _core_admin_settings_generalsetting_generalsetting_sandbox__WEBPACK_IMPORTED_MODULE_5__["GeneralSettingSandbox"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]])
    ], GeneralSettingComponent);
    return GeneralSettingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-generalsettings-generalsettings-module.js.map