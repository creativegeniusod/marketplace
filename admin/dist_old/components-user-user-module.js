(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-user-module"],{

/***/ "./src/core/admin/settings/user/user-effect/user.effect.ts":
/*!*****************************************************************!*\
  !*** ./src/core/admin/settings/user/user-effect/user.effect.ts ***!
  \*****************************************************************/
/*! exports provided: UserEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffect", function() { return UserEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-action/user.action */ "./src/core/admin/settings/user/user-action/user.action.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/core/admin/settings/user/user.service.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var UserEffect = /** @class */ (function () {
    function UserEffect(action$, service) {
        var _this = this;
        this.action$ = action$;
        this.service = service;
        // NEW USER
        this.doAddUser$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_NEW_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.addUser(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoNewUserSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoNewUserFailAction"](error)); }));
        }));
        // UPDATE USER
        this.doUpdateUser$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_UPDATE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var Id = state.id;
            return _this.service.updateUser(state, Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUpdateUserSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUpdateUserFailAction"](error)); }));
        }));
        this.doUserGroupList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_USER_GROUP_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.userGrouplist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (analysis) { return new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUserGroupListSuccessAction"](analysis); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUserGroupListFailAction"](error)); }));
        }));
        // LIST-USER GROUP
        // LIST-USERLIST
        this.doUserList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_USER_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.userlist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (analysis) { return new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUserListSuccessAction"](analysis); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUserListFailAction"](error)); }));
        }));
        // USER LIST PAGINATION
        this.douserpagination$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DO_USER_COUNT_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.userpagiantion(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUserPaginationSuccessAction"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["DoUserPaginationFailAction"](error)); }));
        }));
        // USER DELATE
        this.userDelate$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].DELETE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.service.userDelete(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return [new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["UserDeleteSuccess"](user)]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _user_action_user_action__WEBPACK_IMPORTED_MODULE_6__["UserDeleteFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], UserEffect.prototype, "doAddUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], UserEffect.prototype, "doUpdateUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], UserEffect.prototype, "doUserGroupList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], UserEffect.prototype, "doUserList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], UserEffect.prototype, "douserpagination$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], UserEffect.prototype, "userDelate$", void 0);
    UserEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], UserEffect);
    return UserEffect;
}());



/***/ }),

/***/ "./src/core/admin/settings/user/user-model/user.model.ts":
/*!***************************************************************!*\
  !*** ./src/core/admin/settings/user/user-model/user.model.ts ***!
  \***************************************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return UserForm; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var UserForm = /** @class */ (function () {
    function UserForm(userForm) {
        this.firstName = userForm.firstName || '';
        this.lastName = userForm.lastName || '';
        this.email = userForm.email || '';
        this.userGroupId = userForm.role || 0;
        this.username = userForm.username || '';
        this.password = userForm.password || '';
        if (userForm.userID) {
            this.id = userForm.userID || '';
        }
    }
    return UserForm;
}());



/***/ }),

/***/ "./src/core/admin/settings/user/user-model/userlist.model.ts":
/*!*******************************************************************!*\
  !*** ./src/core/admin/settings/user/user-model/userlist.model.ts ***!
  \*******************************************************************/
/*! exports provided: UserlistForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistForm", function() { return UserlistForm; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var UserlistForm = /** @class */ (function () {
    function UserlistForm(userlistForm) {
        this.limit = userlistForm.limit || '';
        this.offset = userlistForm.offset || '';
        this.keyword = userlistForm.keyword || '';
        this.count = userlistForm.count || '';
    }
    return UserlistForm;
}());



/***/ }),

/***/ "./src/core/admin/settings/user/user-reducer/user.selector.ts":
/*!********************************************************************!*\
  !*** ./src/core/admin/settings/user/user-reducer/user.selector.ts ***!
  \********************************************************************/
/*! exports provided: getUserState, getGroupList, getUsersList, getAddUser, getAddUserData, getUpdateUser, getuserpagination, UserListLoading, UserListLoaded, UserListFailed, UserCountLoading, UserCountLoaded, UserCountFailed, UserAddLoading, UserAddLoaded, UserAddFailed, UserGroupLoading, UserGroupLoaded, UserGroupFailed, UserUpdateLoading, UserUpdateLoaded, UserUpdateFailed, UserDelate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupList", function() { return getGroupList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersList", function() { return getUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddUser", function() { return getAddUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddUserData", function() { return getAddUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateUser", function() { return getUpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getuserpagination", function() { return getuserpagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListLoading", function() { return UserListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListLoaded", function() { return UserListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListFailed", function() { return UserListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCountLoading", function() { return UserCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCountLoaded", function() { return UserCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCountFailed", function() { return UserCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddLoading", function() { return UserAddLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddLoaded", function() { return UserAddLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddFailed", function() { return UserAddFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupLoading", function() { return UserGroupLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupLoaded", function() { return UserGroupLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupFailed", function() { return UserGroupFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateLoading", function() { return UserUpdateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateLoaded", function() { return UserUpdateLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateFailed", function() { return UserUpdateFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDelate", function() { return UserDelate; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ "./src/core/admin/settings/user/user-reducer/user.reducer.ts");


var getUserState = function (state) { return state.user; };
var getGroupList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserGroupList"]);
var getUsersList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserList"]);
var getAddUser = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getNewUser"]);
var getAddUserData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getNewUserData"]);
var getUpdateUser = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUpdateUser"]);
var getuserpagination = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getuserspagination"]);
var UserListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserListLoading"]);
var UserListLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserListLoaded"]);
var UserListFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserListFailed"]);
var UserCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserCountLoading"]);
var UserCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserCountLoaded"]);
var UserCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserCountFailed"]);
var UserAddLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserAddLoading"]);
var UserAddLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserAddLoaded"]);
var UserAddFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserAddFailed"]);
var UserGroupLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserGroupLoading"]);
var UserGroupLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserGroupLoaded"]);
var UserGroupFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserGroupFailed"]);
var UserUpdateLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserUpdateLoading"]);
var UserUpdateLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserUpdateLoaded"]);
var UserUpdateFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserUpdateFailed"]);
var UserDelate = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserDelate"]);


/***/ }),

/***/ "./src/core/admin/settings/user/user.sandbox.ts":
/*!******************************************************!*\
  !*** ./src/core/admin/settings/user/user.sandbox.ts ***!
  \******************************************************/
/*! exports provided: UserSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSandbox", function() { return UserSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _user_user_action_user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-action/user.action */ "./src/core/admin/settings/user/user-action/user.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_model_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-model/user.model */ "./src/core/admin/settings/user/user-model/user.model.ts");
/* harmony import */ var _user_model_userlist_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-model/userlist.model */ "./src/core/admin/settings/user/user-model/userlist.model.ts");
/* harmony import */ var _user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-reducer/user.selector */ "./src/core/admin/settings/user/user-reducer/user.selector.ts");
/* harmony import */ var _role_role_models_role_list_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../role/role.models/role-list.model */ "./src/core/admin/settings/role/role.models/role-list.model.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */













var UserSandbox = /** @class */ (function () {
    function UserSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.getAddUser$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["getAddUser"]);
        this.getuserpagelength$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["getuserpagination"]);
        this.getupdateuser$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["getUpdateUser"]);
        this.getUsersList$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["getUsersList"]);
        this.getGroupRoleList$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["getGroupList"]);
        this.newUserData$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["getAddUserData"]);
        this.userListLoading$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserListLoading"]);
        this.userListLoaded$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserListLoaded"]);
        this.userListFailed$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserListFailed"]);
        this.userGroupLoading$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserGroupLoading"]);
        this.userGroupLoaded$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserGroupLoaded"]);
        this.userGroupFailed$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserGroupFailed"]);
        this.userCountLoading$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserCountLoading"]);
        this.userCountLoaded$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserCountLoaded"]);
        this.userCountFailed$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserCountFailed"]);
        this.userAddLoading$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserAddLoading"]);
        this.userAddLoaded$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserAddLoaded"]);
        this.userAddFailed$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserAddFailed"]);
        this.userUpdateLoading$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserUpdateLoading"]);
        this.userUpdateLoaded$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserUpdateLoaded"]);
        this.userUpdateFailed$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserUpdateFailed"]);
        this.userDelate$ = this.appState.select(_user_reducer_user_selector__WEBPACK_IMPORTED_MODULE_8__["UserDelate"]);
        this.subscriptions = [];
        this.subscribe();
    }
    UserSandbox.prototype.addUser = function (value) {
        this.appState.dispatch(new _user_user_action_user_action__WEBPACK_IMPORTED_MODULE_4__["DoNewUserAction"](new _user_model_user_model__WEBPACK_IMPORTED_MODULE_6__["UserForm"](value)));
    };
    UserSandbox.prototype.updateUser = function (value) {
        this.appState.dispatch(new _user_user_action_user_action__WEBPACK_IMPORTED_MODULE_4__["DoUpdateUserAction"](new _user_model_user_model__WEBPACK_IMPORTED_MODULE_6__["UserForm"](value)));
    };
    UserSandbox.prototype.getuserpagination = function (value) {
        this.appState.dispatch(new _user_user_action_user_action__WEBPACK_IMPORTED_MODULE_4__["DoUserPaginationAction"](new _user_model_userlist_model__WEBPACK_IMPORTED_MODULE_7__["UserlistForm"](value)));
    };
    UserSandbox.prototype.getUserlist = function (value) {
        this.appState.dispatch(new _user_user_action_user_action__WEBPACK_IMPORTED_MODULE_4__["DoUserListAction"](new _user_model_userlist_model__WEBPACK_IMPORTED_MODULE_7__["UserlistForm"](value)));
    };
    UserSandbox.prototype.getUserGrouplist = function (value) {
        this.appState.dispatch(new _user_user_action_user_action__WEBPACK_IMPORTED_MODULE_4__["DoUserGroupListAction"](new _role_role_models_role_list_model__WEBPACK_IMPORTED_MODULE_9__["RoleListModel"](value)));
    };
    UserSandbox.prototype.deleteUser = function (value) {
        this.appState.dispatch(new _user_user_action_user_action__WEBPACK_IMPORTED_MODULE_4__["UserDelete"](value));
    };
    UserSandbox.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.getAddUser$.subscribe(function (data) {
            if (data) {
                if (data && data.status === 1) {
                    _this.router.navigate(['/settings/user']);
                }
            }
        }));
        this.subscriptions.push(this.getupdateuser$.subscribe(function (data) {
            if (data) {
                if (data && data.status === 1) {
                    _this.router.navigate(['/settings/user']);
                }
            }
        }));
    };
    UserSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], UserSandbox);
    return UserSandbox;
}());



/***/ }),

/***/ "./src/core/admin/settings/user/user.service.ts":
/*!******************************************************!*\
  !*** ./src/core/admin/settings/user/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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



var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        _this.url = _this.getBaseUrl();
        return _this;
    }
    // SET & GET SERVICE
    UserService.prototype.getdata = function () {
        return this.userdata;
    };
    UserService.prototype.setdata = function (data) {
        this.userdata = data;
    };
    // new user
    UserService.prototype.addUser = function (param) {
        return this.http.post(this.url + '/auth/create-user', param);
    };
    UserService.prototype.updateUser = function (param, Id) {
        return this.http.put(this.url + '/auth/update-user/' + Id, param);
    };
    // user group list
    UserService.prototype.userGrouplist = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/role/rolelist', { params: reqOpts });
    };
    // user list
    UserService.prototype.userlist = function (params) {
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.url + '/auth/userlist', { params: reqOpts });
    };
    UserService.prototype.userDelete = function (params) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            withCredentials: false,
            body: params
        };
        return this.http.delete(this.url + '/auth/delete-user/' + params.id, httpOptions);
    };
    UserService.prototype.userpagiantion = function (param) {
        var reqOpts = {};
        reqOpts = param;
        return this.http.get(this.url + '/auth/userlist', { params: reqOpts });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/theme/default/admin/settings/components/user/add/add.component.html":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/user/add/add.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting1-inner-header\" style=\"margin-bottom: 22px\">\n    <h3> {{updatetitle ? 'Update User' : 'Add User'}} </h3>\n</div>\n<div class=\"settings-right-wrapper\">\n\n    <!---->\n    <div class=\"new-user\">\n        <form (ngSubmit)=\"onSubmit(user.value)\" [formGroup]=\"user\" class=\"form-horizontal m-t-20\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>First Name<sup class=\"supvalidation\">*</sup></label>\n                        <input type=\"text\" [(ngModel)]=\"firstName\" formControlName=\"firstName\" class=\"form-control\" placeholder=\"First Name\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Last Name<sup class=\"supvalidation\">*</sup></label>\n                        <input type=\"text\" [(ngModel)]=\"lastName\" formControlName=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Email<sup class=\"supvalidation\">*</sup></label>\n                        <input type=\"email\" [(ngModel)]=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Email is required\n                            </div>\n                            <div *ngIf=\"f.email.errors\">Email must be a valid email address'\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Role<sup class=\"supvalidation\">*</sup></label>\n                        <select [(ngModel)]=\"role\" class=\"form-control custom-select\" data-placeholder=\"Choose Role\" [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\" formControlName=\"role\" placeholder=\"Role\">\n                            <option [ngValue]=\"undefined\" selected>- -Select- -</option>\n                            <option *ngFor=\"let rolelist of sandbox.getGroupRoleList$ | async\"\n                                    value={{rolelist.groupId}}>\n                                {{rolelist.name}}\n                            </option>\n                        </select>\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Role is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>User Name<sup class=\"supvalidation\">*</sup></label>\n                        <input type=\"email\" [(ngModel)]=\"username\" formControlName=\"username\" class=\"form-control\" placeholder=\"User Name\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.username.errors.required\">User Name Email is required\n                            </div>\n                            <div *ngIf=\"f.username.errors\">User Name Email must be a valid email address\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label>Password<sup class=\"supvalidation\">*</sup></label>\n                        <input type=\"password\" [(ngModel)]=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"flex user-btn\">\n                        <button type=\"submit\" class=\"btn btn-add\">{{updatetitle ? 'Update User' : 'Save' }}\n                        </button>\n                        <button (click)=\"UserCancle()\" class=\"btn btn-cancel\">Cancle\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/user/add/add.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/user/add/add.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_user_user_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/user/user.sandbox */ "./src/core/admin/settings/user/user.sandbox.ts");
/* harmony import */ var _core_admin_settings_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/user/user.service */ "./src/core/admin/settings/user/user.service.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */





var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(fb, route, sandbox, router, service) {
        this.fb = fb;
        this.route = route;
        this.sandbox = sandbox;
        this.router = router;
        this.service = service;
        this.submitted = false;
        this.pageSize = 5;
        this.keyword = '';
        this.id = '';
        this.UserInfo = [];
    }
    /**
     *initially  calls editUserList,getuserGrouplist with argument(this.offset, this.keyword),
     *  initForm
     * */
    UserAddComponent.prototype.ngOnInit = function () {
        this.UserInfo = [];
        this.update_UserId = false;
        this.edituserId = this.route.snapshot.paramMap.get('id');
        this.editUserList();
        if (this.UserInfo && this.UserInfo[0]) {
            this.update_UserId = true;
        }
        this.getuserGrouplist(this.offset, this.keyword);
        this.initForm();
    };
    UserAddComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // FORM GROUP
    UserAddComponent.prototype.initForm = function () {
        var _this = this;
        var emailRegex = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' +
            '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
        this.user = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailRegex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)
                ])
            ],
            username: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailRegex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)
                ])
            ],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [
                '',
                this.conditionalValidator(function () { return _this.update_UserId === false; }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            ]
        });
    };
    // Conditional Validator
    UserAddComponent.prototype.conditionalValidator = function (condition, validator) {
        return function (control) {
            if (!condition()) {
                return null;
            }
            return validator(control);
        };
    };
    /**
     * Handles form onSubmit .calls sandbox updateUser and addUser if valid.
     *
     * @param user from entire form.
     * */
    UserAddComponent.prototype.onSubmit = function (user) {
        this.submitted = true;
        if (this.user.invalid) {
            return;
        }
        var params = {};
        params.firstName = this.user.value.firstName;
        params.lastName = this.user.value.lastName;
        params.email = this.user.value.email;
        params.role = this.user.value.role;
        params.username = this.user.value.username;
        params.password = this.user.value.password;
        if (this.UserInfo && this.UserInfo[0] && this.UserInfo[0].userId) {
            params.userID = this.UserInfo[0].userId;
            this.sandbox.updateUser(params);
            this.service.setdata('');
        }
        else {
            this.sandbox.addUser(params);
        }
    };
    // DROP DOWN ROLE LIST
    UserAddComponent.prototype.getuserGrouplist = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        params.count = '';
        params.status = 1;
        this.sandbox.getUserGrouplist(params);
    };
    // CANCLE
    UserAddComponent.prototype.UserCancle = function () {
        this.UserInfo = ' ';
        this.service.setdata(this.UserInfo);
        this.router.navigate(['/settings/user']);
    };
    // UPDATE
    UserAddComponent.prototype.editUserList = function () {
        this.servicedata = this.service.getdata();
        if (this.servicedata) {
            this.UserInfo.push(this.servicedata);
            this.update_UserId = false;
        }
        if (this.UserInfo && this.UserInfo[0]) {
            this.update_UserId = false;
            if (this.edituserId) {
                for (var i = 0; i < this.UserInfo.length; i++) {
                    this.updatetitle = 1;
                    this.firstName = this.UserInfo[0].firstName;
                    this.lastName = this.UserInfo[0].lastName;
                    this.email = this.UserInfo[0].email;
                    this.username = this.UserInfo[0].username;
                    if (this.UserInfo[0] && this.UserInfo[0].usergroup) {
                        this.role = this.UserInfo[0].usergroup.groupId;
                    }
                }
            }
        }
    };
    Object.defineProperty(UserAddComponent.prototype, "f", {
        // VALIDATION
        get: function () {
            return this.user.controls;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserAddComponent.prototype, "userlist", void 0);
    UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-settings-user-add',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./add.component.html */ "./src/theme/default/admin/settings/components/user/add/add.component.html"),
            styles: ["\n      .settings-right-wrapper {\n        margin-top: 0px !important;\n      }\n\n      .setting1-inner-header {\n        margin-top: 40px !important;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_admin_settings_user_user_sandbox__WEBPACK_IMPORTED_MODULE_4__["UserSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_admin_settings_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/user/list/list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/user/list/list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex setting1-inner-header\">\n    <h3>User List</h3>\n    <button class=\"btn\" (click)=\" AddeNewUser()\"><img\n            src=\"assets/img/add-white-ico.png\">Add User</button>\n</div>\n<div class=\"settings-right-wrapper\">\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">User Name</th>\n                    <th scope=\"col\">Email Id</th>\n                    <th scope=\"col\">Role</th>\n                    <th scope=\"col\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let userlist of sandbox.getUsersList$ | async; let i=index\">\n                    <td>{{userlist.firstName}} {{userlist.lastName}}</td>\n                    <td>{{userlist.email}}</td>\n                    <td>{{userlist.usergroup.name}}</td>\n                    <td><i (click)=\"editUser(userlist)\" class=\"fas fa-edit\"></i>\n                        <i [ngbPopover]=\"deleteContent\" placement=\"bottom\" #deletePop=\"ngbPopover\" style=\"margin-left: 15px;\" class=\"fas fa-trash\">\n                        <ng-template #deleteContent>\n                            <div class=\"style\">\n                                <div class=\"modal-header\">\n                                    <h6 class=\"modal-title\" style=\"margin-left: 17%;\"> Do you want to delete ?</h6>\n\n                                </div>\n\n                                <div class=\"modal-footer\" style=\"margin-right: 23%;\">\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePop.close()\"\n                                            data-dismiss=\"modal\">No\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-success\"\n                                            (click)=\"deleteUser(userlist.userId, deletePop)\"\n                                            data-dismiss=\"modal\">Yes\n                                    </button>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </i>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<mat-paginator [length]=\"sandbox.getuserpagelength$ | async\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"[pageSize]\" (page)=\"onPageChange($event)\">\n</mat-paginator>"

/***/ }),

/***/ "./src/theme/default/admin/settings/components/user/list/list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/user/list/list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_settings_user_user_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/user/user.sandbox */ "./src/core/admin/settings/user/user.sandbox.ts");
/* harmony import */ var _core_admin_settings_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/admin/settings/user/user.service */ "./src/core/admin/settings/user/user.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */





var UserListComponent = /** @class */ (function () {
    function UserListComponent(router, sandbox, service, toastr) {
        this.router = router;
        this.sandbox = sandbox;
        this.service = service;
        this.toastr = toastr;
        this.userdetails = {};
        this.pageSize = '5';
        this.keyword = '';
        this.id = '';
        this.pagination = 1;
        this.addnewuser = false;
        this.subscriptions = [];
        this.regSubscribeEvents();
    }
    // initially getUserList with argument(offset,keyword)
    UserListComponent.prototype.ngOnInit = function () {
        this.pageSize = localStorage.getItem('itemsPerPage');
        this.getUserList(this.offset, this.keyword);
    };
    // STYLING PUROPOSE
    UserListComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    // ADD USER
    UserListComponent.prototype.AddeNewUser = function () {
        this.router.navigate(['/settings/user/add']);
    };
    // USER LIST
    UserListComponent.prototype.getUserList = function (offset, keyword) {
        if (offset === void 0) { offset = 0; }
        var params = {};
        params.limit = this.pageSize;
        params.offset = offset;
        params.keyword = this.keyword;
        this.sandbox.getUserlist(params);
        if (this.pagination) {
            params.count = 'true';
            this.sandbox.getuserpagination(params);
        }
    };
    // UPDATE USER
    UserListComponent.prototype.editUser = function (userinfo) {
        var userDetail = JSON.parse(localStorage.getItem('userdetail'))
            .userdetails;
        if (userDetail.userId === userinfo.userId) {
            this.toastr.errorToastr('You cannot edit current logged in user');
            return;
        }
        this.userdetails = userinfo;
        this.service.setdata(this.userdetails);
        this.router.navigate(['/settings/user/edit', this.userdetails.userId]);
    };
    /**calls getUserList for pagination
     *
     * @param event from material paginator
     * */
    UserListComponent.prototype.onPageChange = function (event) {
        this.currentPage = event.offset;
        this.pageSize = event.pageSize;
        this.index = event.pageIndex;
        var offset = event.pageSize * event.pageIndex;
        this.getUserList(offset, this.pageSize);
    };
    /**
     * Handles form 'delete' event. Calls sandbox delete the perticular country.
     *
     */
    UserListComponent.prototype.deleteUser = function (userId, deletePop) {
        this.popoverContent = deletePop;
        this.sandbox.deleteUser({ id: userId });
    };
    // delete event , subscripe status
    UserListComponent.prototype.regSubscribeEvents = function () {
        var _this = this;
        this.subscriptions.push(this.sandbox.userDelate$.subscribe(function (_delete) {
            if (_delete && _delete.status === 1) {
                _this.getUserList(_this.offset, '');
            }
        }));
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-user-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/theme/default/admin/settings/components/user/list/list.component.html"),
            styles: ["\n      .settings-right-wrapper {\n        margin-top: 0px !important;\n      }\n\n      .setting1-inner-header {\n        margin-top: 40px !important;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_admin_settings_user_user_sandbox__WEBPACK_IMPORTED_MODULE_3__["UserSandbox"],
            _core_admin_settings_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/user/user.module.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/user/user.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/user/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/user/list/list.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_settings_user_user_effect_user_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/admin/settings/user/user-effect/user.effect */ "./src/core/admin/settings/user/user-effect/user.effect.ts");
/* harmony import */ var _core_admin_settings_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/admin/settings/user/user.service */ "./src/core/admin/settings/user/user.service.ts");
/* harmony import */ var _core_admin_settings_user_user_sandbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/admin/settings/user/user.sandbox */ "./src/core/admin/settings/user/user.sandbox.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user.routing */ "./src/theme/default/admin/settings/components/user/user.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../default.material.module */ "./src/theme/default/default.material.module.ts");

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

var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_5__["UserAddComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _user_routing__WEBPACK_IMPORTED_MODULE_11__["UserRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_core_admin_settings_user_user_effect_user_effect__WEBPACK_IMPORTED_MODULE_8__["UserEffect"]])
            ],
            providers: [_core_admin_settings_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _core_admin_settings_user_user_sandbox__WEBPACK_IMPORTED_MODULE_10__["UserSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/settings/components/user/user.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/theme/default/admin/settings/components/user/user.routing.ts ***!
  \**************************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/theme/default/admin/settings/components/user/add/add.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/theme/default/admin/settings/components/user/list/list.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component


var userRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["UserAddComponent"] },
    {
        path: 'edit/:id',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["UserAddComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(userRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-user-user-module.js.map