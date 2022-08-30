(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emailtemplate-emailtemplate-module"],{

/***/ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-effect/emailtemp.effect.ts":
/*!**************************************************************************************************!*\
  !*** ./src/core/admin/settings/localizations/emailtemplate/emailtemp-effect/emailtemp.effect.ts ***!
  \**************************************************************************************************/
/*! exports provided: EmailTempEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempEffect", function() { return EmailTempEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../emailtemp-action/emailtemp.action */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-action/emailtemp.action.ts");
/* harmony import */ var _emailtemp_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../emailtemp.service */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.service.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var EmailTempEffect = /** @class */ (function () {
    function EmailTempEffect(action$, service) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        // NEW EMAIL_TEMP
        this.doAddEmailTemp$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_NEW_EMAIL_TEMP_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.addEmailtemp(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (role) { return [new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoNewEmailTempSuccessAction"](role)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoNewEmailTempFailAction"](error)); }));
        }));
        this.doUpdateEmailTemp$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_UPDATE_EMAIL_TEMP_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.updateEmailTemp(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                return [new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoUpdateEmailTempSuccessAction"](user)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoUpdateEmailTempFailAction"](error)); }));
        }));
        // EMAIL TEMP LIST
        this.doemailtemplists$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_EMAIL_TEMP_LIST_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.emailtemplist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoEmailTemplistSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoEmailTemplistFailAction"](error)); }));
        }));
        // PAGINATION EMAIL_TEMP
        this.doemailtemppagination$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_EMAIL_TEMP_COUNT_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.emailtempPagiantion(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [
                new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoEmailTempPaginationSuccessAction"](user)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoEmailTempPaginationFailAction"](error));
            }));
        }));
        // EMAIL_TEMP DELETE
        this.doEmailtempDelete$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_EMAIL_TEMP_DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var emailTemplateId = state.emailTemplateId;
            return _this.service.deleteEmailtemp(state, emailTemplateId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoEmailTempDeleteSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_6__["DoEmailTempDeleteFailAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTempEffect.prototype, "doAddEmailTemp$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTempEffect.prototype, "doUpdateEmailTemp$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTempEffect.prototype, "doemailtemplists$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTempEffect.prototype, "doemailtemppagination$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], EmailTempEffect.prototype, "doEmailtempDelete$", void 0);
    EmailTempEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _emailtemp_service__WEBPACK_IMPORTED_MODULE_7__["EmailTempService"]])
    ], EmailTempEffect);
    return EmailTempEffect;
}());



/***/ }),

/***/ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-model/emailtemp.model.ts":
/*!************************************************************************************************!*\
  !*** ./src/core/admin/settings/localizations/emailtemplate/emailtemp-model/emailtemp.model.ts ***!
  \************************************************************************************************/
/*! exports provided: EmailTempForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempForm", function() { return EmailTempForm; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var EmailTempForm = /** @class */ (function () {
    function EmailTempForm(emailtempForm) {
        this.title = emailtempForm.title || '';
        this.subject = emailtempForm.subject || '';
        this.content = emailtempForm.content || '';
        this.status = emailtempForm.status || 0;
        if (emailtempForm && emailtempForm.id) {
            this.Id = emailtempForm.id || 0;
        }
    }
    return EmailTempForm;
}());



/***/ }),

/***/ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-model/emailtemplist.model.ts":
/*!****************************************************************************************************!*\
  !*** ./src/core/admin/settings/localizations/emailtemplate/emailtemp-model/emailtemplist.model.ts ***!
  \****************************************************************************************************/
/*! exports provided: EmailTempListForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempListForm", function() { return EmailTempListForm; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var EmailTempListForm = /** @class */ (function () {
    function EmailTempListForm(emailtemplistForm) {
        this.limit = emailtemplistForm.limit || '';
        this.offset = emailtemplistForm.offset || '';
        this.keyword = emailtemplistForm.keyword || '';
        this.count = emailtemplistForm.count || '';
    }
    return EmailTempListForm;
}());



/***/ }),

/***/ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-reducer/emailtemp.selector.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/core/admin/settings/localizations/emailtemplate/emailtemp-reducer/emailtemp.selector.ts ***!
  \*****************************************************************************************************/
/*! exports provided: getEmailTempState, getemailtemplst, getemailtemppagination, getaddemailtemp, getupdateemailtemp, getdeleteemailtemp, EmailTempListLoading, EmailTempListLoaded, EmailTempListFailed, EmailTempCountLoading, EmailTempCountLoaded, EmailTempCountFailed, EmailTempAddLoading, EmailTempAddLoaded, EmailTempAddFailed, EmailTempDeleteLoading, EmailTempDeleteLoaded, EmailTempDeleteFailed, EmailTempUpdateLoading, EmailTempUpdateLoaded, EmailTempUpdateFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmailTempState", function() { return getEmailTempState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getemailtemplst", function() { return getemailtemplst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getemailtemppagination", function() { return getemailtemppagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getaddemailtemp", function() { return getaddemailtemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getupdateemailtemp", function() { return getupdateemailtemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getdeleteemailtemp", function() { return getdeleteemailtemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempListLoading", function() { return EmailTempListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempListLoaded", function() { return EmailTempListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempListFailed", function() { return EmailTempListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempCountLoading", function() { return EmailTempCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempCountLoaded", function() { return EmailTempCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempCountFailed", function() { return EmailTempCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempAddLoading", function() { return EmailTempAddLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempAddLoaded", function() { return EmailTempAddLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempAddFailed", function() { return EmailTempAddFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempDeleteLoading", function() { return EmailTempDeleteLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempDeleteLoaded", function() { return EmailTempDeleteLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempDeleteFailed", function() { return EmailTempDeleteFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempUpdateLoading", function() { return EmailTempUpdateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempUpdateLoaded", function() { return EmailTempUpdateLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempUpdateFailed", function() { return EmailTempUpdateFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emailtemp-reducer/emailtemp.reducer */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-reducer/emailtemp.reducer.ts");


// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
var getEmailTempState = function (state) { return state.emailtemp; };
var getemailtemplst = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getemailtemplist"]);
var getemailtemppagination = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getemailtempagination"]);
var getaddemailtemp = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getAddEmailTemp"]);
var getupdateemailtemp = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getupdateemailtemp"]);
var getdeleteemailtemp = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getdeleteemailtemp"]);
var EmailTempListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempListLoading"]);
var EmailTempListLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempListLoaded"]);
var EmailTempListFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempListFailed"]);
var EmailTempCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempCountLoading"]);
var EmailTempCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempCountLoaded"]);
var EmailTempCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempCountFailed"]);
var EmailTempAddLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempAddLoading"]);
var EmailTempAddLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempAddLoaded"]);
var EmailTempAddFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempAddFailed"]);
var EmailTempDeleteLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempDeleteLoading"]);
var EmailTempDeleteLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempDeleteLoaded"]);
var EmailTempDeleteFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempDeleteFailed"]);
var EmailTempUpdateLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempUpdateLoading"]);
var EmailTempUpdateLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempUpdateLoaded"]);
var EmailTempUpdateFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEmailTempState, _emailtemp_reducer_emailtemp_reducer__WEBPACK_IMPORTED_MODULE_1__["getEmailTempUpdateFailed"]);


/***/ }),

/***/ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.sandbox.ts":
/*!**********************************************************************************!*\
  !*** ./src/core/admin/settings/localizations/emailtemplate/emailtemp.sandbox.ts ***!
  \**********************************************************************************/
/*! exports provided: EmailTempSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempSandbox", function() { return EmailTempSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _emailtemplate_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emailtemplate/emailtemp-action/emailtemp.action */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-action/emailtemp.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emailtemp-reducer/emailtemp.selector */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-reducer/emailtemp.selector.ts");
/* harmony import */ var _emailtemp_model_emailtemp_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emailtemp-model/emailtemp.model */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-model/emailtemp.model.ts");
/* harmony import */ var _emailtemp_model_emailtemplist_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emailtemp-model/emailtemplist.model */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-model/emailtemplist.model.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */








var EmailTempSandbox = /** @class */ (function () {
    function EmailTempSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.getemailtemplist$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["getemailtemplst"]);
        this.getemailtemppagelength$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["getemailtemppagination"]);
        this.getaddemailtemp$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["getaddemailtemp"]);
        this.getupdateemailtemp$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["getupdateemailtemp"]);
        this.getdeleteemailtemp$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["getdeleteemailtemp"]);
        this.emailTempListLoading$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempListLoading"]);
        this.emailTempListLoaded$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempListLoaded"]);
        this.emailTempListFailed$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempListFailed"]);
        this.emailTempDeleteLoading$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempDeleteLoading"]);
        this.emailTempDeleteLoaded$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempDeleteLoaded"]);
        this.emailTempDeleteFailed$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempDeleteFailed"]);
        this.emailTempCountLoading$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempCountLoading"]);
        this.emailTempCountLoaded$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempCountLoaded"]);
        this.emailTempCountFailed$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempCountFailed"]);
        this.emailTempAddLoading$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempAddLoading"]);
        this.emailTempAddLoaded$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempAddLoaded"]);
        this.emailTempAddFailed$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempAddFailed"]);
        this.emailTempUpdateLoading$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempUpdateLoading"]);
        this.emailTempUpdateLoaded$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempUpdateLoaded"]);
        this.emailTempUpdateFailed$ = this.appState.select(_emailtemp_reducer_emailtemp_selector__WEBPACK_IMPORTED_MODULE_6__["EmailTempUpdateFailed"]);
        this.subscriptions = [];
        this.subscribe();
    }
    EmailTempSandbox.prototype.addEmailtemp = function (value) {
        this.appState.dispatch(new _emailtemplate_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_4__["DoNewEmailTempAction"](new _emailtemp_model_emailtemp_model__WEBPACK_IMPORTED_MODULE_7__["EmailTempForm"](value)));
    };
    EmailTempSandbox.prototype.updateemailtemp = function (value) {
        this.appState.dispatch(new _emailtemplate_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_4__["DoUpdateEmailTempAction"](new _emailtemp_model_emailtemp_model__WEBPACK_IMPORTED_MODULE_7__["EmailTempForm"](value)));
    };
    EmailTempSandbox.prototype.getemailtemplist = function (value) {
        this.appState.dispatch(new _emailtemplate_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_4__["DoEmailTemplistAction"](new _emailtemp_model_emailtemplist_model__WEBPACK_IMPORTED_MODULE_8__["EmailTempListForm"](value)));
    };
    EmailTempSandbox.prototype.emailtempDelete = function (value) {
        this.appState.dispatch(new _emailtemplate_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_4__["DoEmailTempDeleteAction"](value));
    };
    EmailTempSandbox.prototype.emailtemppagination = function (value) {
        this.appState.dispatch(new _emailtemplate_emailtemp_action_emailtemp_action__WEBPACK_IMPORTED_MODULE_4__["DoEmailTempPaginationAction"](new _emailtemp_model_emailtemplist_model__WEBPACK_IMPORTED_MODULE_8__["EmailTempListForm"](value)));
    };
    EmailTempSandbox.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.getaddemailtemp$.subscribe(function (data) {
            if (data) {
                if (data.message) {
                    _this.router.navigate(['/settings/local/emailtemp']);
                }
            }
        }));
        // getupdateemailtemp$
        this.subscriptions.push(this.getupdateemailtemp$.subscribe(function (data) {
            if (data) {
                if (data.message && data.status === 1) {
                    _this.router.navigate(['/settings/local/emailtemp']);
                }
            }
        }));
    };
    EmailTempSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], EmailTempSandbox);
    return EmailTempSandbox;
}());



/***/ }),

/***/ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/core/admin/settings/localizations/emailtemplate/emailtemp.service.ts ***!
  \**********************************************************************************/
/*! exports provided: EmailTempService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempService", function() { return EmailTempService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var EmailTempService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmailTempService, _super);
    function EmailTempService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // setemailtemplistdata
    EmailTempService.prototype.setemailtemplistdata = function (data) {
        this.emailtemplistdata = data;
    };
    EmailTempService.prototype.getemailtemplistdata = function () {
        return this.emailtemplistdata;
    };
    // new emailtemp
    EmailTempService.prototype.addEmailtemp = function (param) {
        return this.http.post(this.url + '/email-template/add-email-template', param);
    };
    // Email temp update
    EmailTempService.prototype.updateEmailTemp = function (params) {
        return this.http.put(this.url + '/email-template/update-email-template/' + params.Id, params);
    };
    // emailtemp list
    EmailTempService.prototype.emailtemplist = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/email-template/email-templatelist', {
            params: reqOpts
        });
    };
    // emailtemp pagination
    EmailTempService.prototype.emailtempPagiantion = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/email-template/email-templatelist', {
            params: reqOpts
        });
    };
    // delete emptemp
    EmailTempService.prototype.deleteEmailtemp = function (param, Id) {
        return this.http.delete(this.url + '/email-template/delete-email-template/' + Id, param);
    };
    EmailTempService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EmailTempService);
    return EmailTempService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/emailtemplate/add/add.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/emailtemplate/add/add.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\n    <h3>{{updatetitle ? 'Update Email Template' : 'Add Email Template'}}</h3>\n</div>\n<div class=\"settings-right-wrapper addnewuser\">\n\n    <div class=\"new-user\">\n        <form (ngSubmit)=\"onSubmit(emailtempForm.value)\" [formGroup]=\"emailtempForm\" class=\"form-horizontal m-t-20\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Title<sup>*</sup></label>\n                        <input type=\"text\" formControlName=\"title\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" class=\"form-control\" />\n                        <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.title.errors.required\">Title is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Subject<sup>*</sup></label>\n                        <input type=\"text\" formControlName=\"subject\" [ngClass]=\"{ 'is-invalid': submitted && f.subject.errors }\" class=\"form-control\">\n                        <div *ngIf=\"submitted && f.subject.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.subject.errors.required\">Subject is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                    <div class=\"form-group\">\n                        <label>Content<sup>*</sup></label>\n                        <ckeditor formControlName=\"content\" [ngClass]=\"{ 'is-invalid': submitted && f.content.errors }\"></ckeditor>\n                        <div *ngIf=\"submitted && f.content.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.content.errors.required\">Content is required</div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Status\n                            <sup>*</sup></label>\n                        <select class=\"form-control custom-select\" formControlName=\"status\" data-placeholder=\"Choose Role\" [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\" placeholder=\"status\">\n                            <option value=\"1\">Enabled</option>\n                            <option value=\"0\">Disabled</option>\n                        </select>\n                        <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.status.errors.required\">Status is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-12\">\n                    <div class=\"flex user-btn\">\n                        <button type=\"submit\" class=\"btn btn-add\">Save</button>\n                        <button (click)=\"emailtempcancel()\" class=\"btn btn-cancel\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/emailtemplate/add/add.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/emailtemplate/add/add.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EmailTempAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempAddComponent", function() { return EmailTempAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_emailtemplate_emailtemp_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/emailtemplate/emailtemp.sandbox */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_emailtemplate_emailtemp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/emailtemplate/emailtemp.service */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.service.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */





var EmailTempAddComponent = /** @class */ (function () {
    function EmailTempAddComponent(fb, route, sandbox, router, service) {
        this.fb = fb;
        this.route = route;
        this.sandbox = sandbox;
        this.router = router;
        this.service = service;
        this.editemailtempinfo = [];
        this.submitted = false;
    }
    Object.defineProperty(EmailTempAddComponent.prototype, "f", {
        // VALIDATION
        get: function () {
            return this.emailtempForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    // initially calls initForm,setDefaultValues,editEmailtempList
    EmailTempAddComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.EditEmailTempId = this.route.snapshot.paramMap.get('id');
        this.setDefaultValues();
        this.editEmailtempList();
    };
    EmailTempAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    EmailTempAddComponent.prototype.setDefaultValues = function () {
        this.emailtempForm.patchValue({ postalcode: 'Yes', tc: true });
    };
    // FormGroup
    EmailTempAddComponent.prototype.initForm = function () {
        this.emailtempForm = this.fb.group({
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            subject: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            content: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    // Cancle Action
    EmailTempAddComponent.prototype.emailtempcancel = function () {
        this.router.navigate(['/settings/local/emailtemp']);
    };
    /**
     * Handles form 'submit' event. Calls sandbox EmailtempAdd  and EmailtempUpdate function if form is valid.
     *
     * @param emailtempForm entire form value
     * @param para storing entire value
     */
    EmailTempAddComponent.prototype.onSubmit = function (data) {
        this.submitted = true;
        if (this.emailtempForm.invalid) {
            return;
        }
        var para = {};
        para.title = this.emailtempForm.value.title;
        para.subject = this.emailtempForm.value.subject;
        para.content = this.emailtempForm.value.content;
        para.status = this.emailtempForm.value.status;
        if (this.editemailtempinfo && this.editemailtempinfo[0]) {
            para.id = this.editemailtempinfo[0].emailTemplateId;
            this.sandbox.updateemailtemp(para);
        }
        else {
            this.sandbox.addEmailtemp(para);
        }
    };
    // Edit EmailTemp Bind All FormControl
    EmailTempAddComponent.prototype.editEmailtempList = function () {
        this.editemailtempinfo.push(this.service.getemailtemplistdata());
        if (this.editemailtempinfo[0] !== null) {
            if (this.editemailtempinfo[0] && this.editemailtempinfo[0].title) {
                this.updatetitle = 1;
                this.emailtempForm.controls['title'].setValue(this.editemailtempinfo[0].title);
                this.emailtempForm.controls['subject'].setValue(this.editemailtempinfo[0].subject);
                this.emailtempForm.controls['content'].setValue(this.editemailtempinfo[0].content);
                this.emailtempForm.controls['status'].setValue(this.editemailtempinfo[0].isActive);
            }
        }
        else {
            this.emailtempForm = null;
        }
    };
    EmailTempAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-addemail',
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/settings/components/localizations/emailtemplate/add/add.component.html"),
            styles: ["\n  .settings-right-wrapper {\n    margin-top: 0px !important;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_admin_settings_localizations_emailtemplate_emailtemp_sandbox__WEBPACK_IMPORTED_MODULE_4__["EmailTempSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_admin_settings_localizations_emailtemplate_emailtemp_service__WEBPACK_IMPORTED_MODULE_5__["EmailTempService"]])
    ], EmailTempAddComponent);
    return EmailTempAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/emailtemplate/emailtemplate.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/emailtemplate/emailtemplate.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/emailtemplate/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/emailtemplate/list/list.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_settings_localizations_emailtemplate_emailtemp_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/localizations/emailtemplate/emailtemp.service */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.service.ts");
/* harmony import */ var _core_admin_settings_localizations_emailtemplate_emailtemp_sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/localizations/emailtemplate/emailtemp.sandbox */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_emailtemplate_emailtemp_effect_emailtemp_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/localizations/emailtemplate/emailtemp-effect/emailtemp.effect */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp-effect/emailtemp.effect.ts");
/* harmony import */ var _emailtemplate_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emailtemplate.routing */ "./src/theme/default/admin/settings/components/localizations/emailtemplate/emailtemplate.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__);

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */




// components


// Store Actions




// Routing Module

// Shared Module


var EmailTemplateModule = /** @class */ (function () {
    function EmailTemplateModule() {
    }
    EmailTemplateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["EmailTempAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["EmailTempListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _emailtemplate_routing__WEBPACK_IMPORTED_MODULE_11__["EmailTemplateRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_core_admin_settings_localizations_emailtemplate_emailtemp_effect_emailtemp_effect__WEBPACK_IMPORTED_MODULE_10__["EmailTempEffect"]]),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"]
            ],
            providers: [_core_admin_settings_localizations_emailtemplate_emailtemp_service__WEBPACK_IMPORTED_MODULE_8__["EmailTempService"], _core_admin_settings_localizations_emailtemplate_emailtemp_sandbox__WEBPACK_IMPORTED_MODULE_9__["EmailTempSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], EmailTemplateModule);
    return EmailTemplateModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/emailtemplate/emailtemplate.routing.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/emailtemplate/emailtemplate.routing.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EmailTemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateRoutingModule", function() { return EmailTemplateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/localizations/emailtemplate/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/localizations/emailtemplate/add/add.component.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */




// Component
var emailtempRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["EmailTempListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["EmailTempAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["EmailTempAddComponent"]
    }
];
var EmailTemplateRoutingModule = /** @class */ (function () {
    function EmailTemplateRoutingModule() {
    }
    EmailTemplateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(emailtempRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmailTemplateRoutingModule);
    return EmailTemplateRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/emailtemplate/list/list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/emailtemplate/list/list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting2-inner-header\">\n    <h3>Email Template</h3>\n</div>\n<div class=\"settings-right-wrapper\">\n\n\n\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th class=\"text-center\" scope=\"col\">Title</th>\n                    <th scope=\"col\">Subject</th>\n                    <th scope=\"col\">Content</th>\n                    <th scope=\"col\">Status</th>\n                    <th scope=\"col\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let emailtemp of sandbox.getemailtemplist$ | async; let i=index\">\n                    <td class=\"text-center\" scope=\"row\">{{emailtemp.title}}</td>\n                    <td>{{emailtemp.subject}}</td>\n                    <td [innerHtml]='emailtemp.content'></td>\n                    <td>\n\n                        <div *ngIf=\"emailtemp.isActive == 1\">Enabled</div>\n                        <div *ngIf=\"emailtemp.isActive == 0\">Disabled</div>\n                    </td>\n                    <td>\n                        <i (click)=\"editEmailtemp(emailtemp)\" class=\"fas fa-edit\"></i>\n\n                        <i [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: 15px;\" class=\"fas fa-trash\">\n                        <ng-template #deleteContent>\n                            <div class=\"style\">\n                                <div class=\"modal-header\">\n                                    <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n                                </div>\n\n                                <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\"\n                                            data-dismiss=\"modal\">No\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-success\"\n                                            (click)=\"deleteEmailtemp(emailtemp.emailTemplateId, deletePop)\"\n                                            data-dismiss=\"modal\">Yes\n                                    </button>\n                                </div>\n                            </div>\n                        </ng-template>\n\n                    </i>\n                        <!--<i (click)=\"deleteEmailtemp(emailtemp.emailTemplateId)\" style=\"margin-left: 15px;\" class=\"fas fa-trash\"></i>-->\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<mat-paginator [length]=\"sandbox.getemailtemppagelength$ | async\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[5, 10, 25, 100]\" (page)=\"onPageChange($event)\">\n</mat-paginator>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/localizations/emailtemplate/list/list.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/localizations/emailtemplate/list/list.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EmailTempListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTempListComponent", function() { return EmailTempListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_localizations_emailtemplate_emailtemp_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/emailtemplate/emailtemp.sandbox */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.sandbox.ts");
/* harmony import */ var _core_admin_settings_localizations_emailtemplate_emailtemp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/admin/settings/localizations/emailtemplate/emailtemp.service */ "./src/core/admin/settings/localizations/emailtemplate/emailtemp.service.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */




var EmailTempListComponent = /** @class */ (function () {
    function EmailTempListComponent(router, sandbox, service) {
        this.router = router;
        this.sandbox = sandbox;
        this.service = service;
        this.pageSize = 10;
        this.index = 0;
        this.keyword = '';
        this.pagenationcount = true;
        this.regSubscribeEvents();
    }
    // initially calls getemailtempList with argument (offset)
    EmailTempListComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage')
            ? localStorage.getItem('itemsPerPage')
            : this.pageSize;
        this.getemailtempList(this.offset, this.pageSize);
    };
    // STYLING PUROPOSE
    EmailTempListComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    /**
     * Handles form 'list' event. Calls sandbox EmailTemp list function .
     *
     * @param params storing entire value
     */
    EmailTempListComponent.prototype.getemailtempList = function (offset, pageSize) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        this.sandbox.getemailtemplist(params);
        if (this.pagenationcount) {
            params.count = 'true';
            this.sandbox.emailtemppagination(params);
        }
    };
    // Add Email Temp navigate to Add Form
    EmailTempListComponent.prototype.addNewEmailTemp = function () {
        this.service.setemailtemplistdata('');
        this.router.navigate(['/settings/local/emailtemp/add']);
    };
    // Edit EmailTemp navigate to Add Form
    EmailTempListComponent.prototype.editEmailtemp = function (list) {
        this.service.setemailtemplistdata(list);
        this.router.navigate([
            '/settings/local/emailtemp/edit',
            list.emailTemplateId
        ]);
    };
    // Delete EmailTemp using emailtempId
    EmailTempListComponent.prototype.deleteEmailtemp = function (emailTemplateId, deletePop) {
        event.stopPropagation();
        this.popoverContent = deletePop;
        this.sandbox.emailtempDelete({ emailTemplateId: emailTemplateId });
    };
    // Delete After subscribe the Result
    EmailTempListComponent.prototype.regSubscribeEvents = function () {
        var _this = this;
        this.sandbox.getdeleteemailtemp$.subscribe(function (_delete) {
            if (_delete && _delete.status === 1) {
                _this.getemailtempList(_this.offset, _this.pageSize);
            }
        });
    };
    // Pagination Count
    EmailTempListComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        this.offset = event.pageSize * event.pageIndex;
        this.getemailtempList(this.offset, this.pageSize);
    };
    EmailTempListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-listemailtemp',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/settings/components/localizations/emailtemplate/list/list.component.html"),
            styles: ["\n  .settings-right-wrapper {\n    margin-top: 0px !important;\n}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_admin_settings_localizations_emailtemplate_emailtemp_sandbox__WEBPACK_IMPORTED_MODULE_3__["EmailTempSandbox"],
            _core_admin_settings_localizations_emailtemplate_emailtemp_service__WEBPACK_IMPORTED_MODULE_4__["EmailTempService"]])
    ], EmailTempListComponent);
    return EmailTempListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=emailtemplate-emailtemplate-module.js.map