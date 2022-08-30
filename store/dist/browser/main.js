(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/Authentication/authentication.module": [
		"./src/default/pages/Authentication/authentication.module.ts",
		"common",
		"pages-Authentication-authentication-module"
	],
	"./pages/account/account.module": [
		"./src/default/pages/account/account.module.ts",
		"default~pages-account-account-module~pages-checkout-checkout-module",
		"common",
		"pages-account-account-module"
	],
	"./pages/cart/cart.module": [
		"./src/default/pages/cart/cart.module.ts",
		"pages-cart-cart-module"
	],
	"./pages/checkout/checkout.module": [
		"./src/default/pages/checkout/checkout.module.ts",
		"default~pages-account-account-module~pages-checkout-checkout-module",
		"common",
		"pages-checkout-checkout-module"
	],
	"./pages/contact/contact.module": [
		"./src/default/pages/contact/contact.module.ts",
		"common",
		"pages-contact-contact-module"
	],
	"./pages/home-menu/home-menu.module": [
		"./src/default/pages/home-menu/home-menu.module.ts",
		"pages-home-menu-home-menu-module"
	],
	"./pages/home/home.module": [
		"./src/default/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/products/products.module": [
		"./src/default/pages/products/products.module.ts",
		"pages-products-products-module"
	],
	"./pages/wishlist/wishlist.module": [
		"./src/default/pages/wishlist/wishlist.module.ts",
		"pages-wishlist-wishlist-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/core/account/action/account.action.ts":
/*!***************************************************!*\
  !*** ./src/core/account/action/account.action.ts ***!
  \***************************************************/
/*! exports provided: ActionTypes, ChangePassword, ChangePasswordSuccess, ChangePasswordFail, EditProfile, EditProfileSuccess, EditProfileFail, GetOrderHistory, GetOrderHistorySuccess, GetOrderHistoryFail, GetOrderHistoryCount, GetOrderHistoryCountSuccess, GetOrderHistoryCountFail, GetOrderDetail, ClearOrderDetail, GetOrderDetailSuccess, GetOrderDetailFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordSuccess", function() { return ChangePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFail", function() { return ChangePasswordFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfile", function() { return EditProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileSuccess", function() { return EditProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileFail", function() { return EditProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderHistory", function() { return GetOrderHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderHistorySuccess", function() { return GetOrderHistorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderHistoryFail", function() { return GetOrderHistoryFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderHistoryCount", function() { return GetOrderHistoryCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderHistoryCountSuccess", function() { return GetOrderHistoryCountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderHistoryCountFail", function() { return GetOrderHistoryCountFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderDetail", function() { return GetOrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearOrderDetail", function() { return ClearOrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderDetailSuccess", function() { return GetOrderDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrderDetailFail", function() { return GetOrderDetailFail; });
/* harmony import */ var _shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utility/utilityHelpers */ "./src/core/shared/utility/utilityHelpers.ts");

var ActionTypes = {
    // change password actions
    DO_CHANGE_PASSWORD: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do change password'),
    CHANGE_PASSWORD_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do change password success'),
    CHANGE_PASSWORD_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do  change password fail'),
    // Edit profile actions
    EDIT_PROFILE: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] edit profile'),
    EDIT_PROFILE_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] edit profile success'),
    EDIT_PROFILE_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] edit profile fail'),
    // get order history actions
    GET_ORDER_HISTORY: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[history] edit profile'),
    GET_ORDER_HISTORY_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[history] edit profile success'),
    GET_ORDER_HISTORY_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[history] edit profile fail'),
    // get order history count actions
    GET_ORDER_HISTORY_COUNT: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[history] history count'),
    GET_ORDER_HISTORY_SUCCESS_COUNT: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[history] history count success'),
    GET_ORDER_HISTORY_COUNT_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[history] history count fail'),
    // get order detail actions
    GET_ORDER_DETAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[order_detail] order detail'),
    CLEAR_ORDER_DETAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[order_detail] clear order detail'),
    GET_ORDER_DETAIL_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[order_detail] order detail success'),
    GET_ORDER_DETAIL_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[order_detail] order detail fail'),
};
/*  Change Password Actions */
var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_CHANGE_PASSWORD;
    }
    return ChangePassword;
}());

/*  Change Password success Actions */
var ChangePasswordSuccess = /** @class */ (function () {
    function ChangePasswordSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CHANGE_PASSWORD_SUCCESS;
    }
    return ChangePasswordSuccess;
}());

/*  Change Password fail Actions */
var ChangePasswordFail = /** @class */ (function () {
    function ChangePasswordFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.CHANGE_PASSWORD_FAIL;
    }
    return ChangePasswordFail;
}());

/*  Edit Profile Actions */
var EditProfile = /** @class */ (function () {
    function EditProfile(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_PROFILE;
    }
    return EditProfile;
}());

/*  Edit Profile success Actions */
var EditProfileSuccess = /** @class */ (function () {
    function EditProfileSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_PROFILE_SUCCESS;
    }
    return EditProfileSuccess;
}());

/*  Edit Profile fail Actions */
var EditProfileFail = /** @class */ (function () {
    function EditProfileFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_PROFILE_FAIL;
    }
    return EditProfileFail;
}());

/* Get Order History  Actions */
var GetOrderHistory = /** @class */ (function () {
    function GetOrderHistory(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_HISTORY;
    }
    return GetOrderHistory;
}());

/* Get Order History success Actions */
var GetOrderHistorySuccess = /** @class */ (function () {
    function GetOrderHistorySuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_HISTORY_SUCCESS;
    }
    return GetOrderHistorySuccess;
}());

/* Get Order History fail Actions */
var GetOrderHistoryFail = /** @class */ (function () {
    function GetOrderHistoryFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_HISTORY_FAIL;
    }
    return GetOrderHistoryFail;
}());

/* Get Order History count Actions */
var GetOrderHistoryCount = /** @class */ (function () {
    function GetOrderHistoryCount(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_HISTORY_COUNT;
    }
    return GetOrderHistoryCount;
}());

/* Get Order History count success Actions */
var GetOrderHistoryCountSuccess = /** @class */ (function () {
    function GetOrderHistoryCountSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_HISTORY_SUCCESS_COUNT;
    }
    return GetOrderHistoryCountSuccess;
}());

/* Get Order History count fail Actions */
var GetOrderHistoryCountFail = /** @class */ (function () {
    function GetOrderHistoryCountFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_HISTORY_COUNT_FAIL;
    }
    return GetOrderHistoryCountFail;
}());

/* Get Order detail Actions */
var GetOrderDetail = /** @class */ (function () {
    function GetOrderDetail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_DETAIL;
    }
    return GetOrderDetail;
}());

/* Clear Order detail Actions */
var ClearOrderDetail = /** @class */ (function () {
    function ClearOrderDetail(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = ActionTypes.CLEAR_ORDER_DETAIL;
    }
    return ClearOrderDetail;
}());

/* Get Order detail success Actions */
var GetOrderDetailSuccess = /** @class */ (function () {
    function GetOrderDetailSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_DETAIL_SUCCESS;
    }
    return GetOrderDetailSuccess;
}());

/* Get Order detail fail Actions */
var GetOrderDetailFail = /** @class */ (function () {
    function GetOrderDetailFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ORDER_DETAIL_FAIL;
    }
    return GetOrderDetailFail;
}());



/***/ }),

/***/ "./src/core/account/models/order-history-response.model.ts":
/*!*****************************************************************!*\
  !*** ./src/core/account/models/order-history-response.model.ts ***!
  \*****************************************************************/
/*! exports provided: OrderHistoryResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryResponseModel", function() { return OrderHistoryResponseModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var OrderHistoryResponseModel = /** @class */ (function () {
    function OrderHistoryResponseModel(historyResponse) {
        this.orderStatus = {};
        this.createdDate = historyResponse.createdDate || '';
        this.orderId = historyResponse.orderId || '';
        this.orderPrefixId = historyResponse.orderPrefixId || '';
        this.invoiceNo = historyResponse.invoiceNo || '';
        this.orderStatusId = historyResponse.orderStatusId || '';
        this.total = historyResponse.total || 0;
        this.orderStatus = historyResponse.orderStatus || '';
        this.currencyCode = historyResponse.currencyCode || '';
    }
    return OrderHistoryResponseModel;
}());



/***/ }),

/***/ "./src/core/account/reducer/account.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/core/account/reducer/account.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialState, reducer, getNewPassword, getorderHistoryList, getorderHistoryCount, getorderHistoryDetail, getOrderHistoryDetailLoading, getOrderHistoryDetailLoaded, getOrderHistoryDetailFailed, getHistoryListLoading, getHistoryListLoaded, getHistoryListFailed, getChangepasswordLoading, getChangepasswordLoaded, getChangepasswordFailed, getEdittedStatus, getEditProfileLoading, getEditProfileLoaded, getEditProfileFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPassword", function() { return getNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getorderHistoryList", function() { return getorderHistoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getorderHistoryCount", function() { return getorderHistoryCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getorderHistoryDetail", function() { return getorderHistoryDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderHistoryDetailLoading", function() { return getOrderHistoryDetailLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderHistoryDetailLoaded", function() { return getOrderHistoryDetailLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderHistoryDetailFailed", function() { return getOrderHistoryDetailFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryListLoading", function() { return getHistoryListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryListLoaded", function() { return getHistoryListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryListFailed", function() { return getHistoryListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangepasswordLoading", function() { return getChangepasswordLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangepasswordLoaded", function() { return getChangepasswordLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChangepasswordFailed", function() { return getChangepasswordFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEdittedStatus", function() { return getEdittedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditProfileLoading", function() { return getEditProfileLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditProfileLoaded", function() { return getEditProfileLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditProfileFailed", function() { return getEditProfileFailed; });
/* harmony import */ var _action_account_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/account.action */ "./src/core/account/action/account.action.ts");
/* harmony import */ var _account_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.state */ "./src/core/account/reducer/account.state.ts");
/* harmony import */ var _models_order_history_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/order-history-response.model */ "./src/core/account/models/order-history-response.model.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var initialState = new _account_state__WEBPACK_IMPORTED_MODULE_1__["accountrecord"]();
function reducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    if (!type) {
        return state;
    }
    switch (type) {
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_CHANGE_PASSWORD:
            {
                return Object.assign({}, state, {
                    changepasswordLoading: true,
                    changepasswordLoaded: false,
                    changepasswordFailed: false,
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CHANGE_PASSWORD_SUCCESS: {
            return Object.assign({}, state, {
                newPassword: payload,
                changepasswordLoading: false,
                changepasswordLoaded: true,
                changepasswordFailed: false,
            });
        }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CHANGE_PASSWORD_FAIL:
            {
                return Object.assign({}, state, {
                    changepasswordLoading: false,
                    changepasswordLoaded: true,
                    changepasswordFailed: true,
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].EDIT_PROFILE:
            {
                return Object.assign({}, state, {
                    editProfileLoading: true,
                    editProfileLoaded: false,
                    editProfileFailed: false,
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].EDIT_PROFILE_SUCCESS: {
            return Object.assign({}, state, {
                edited: payload,
                editProfileLoading: false,
                editProfileLoaded: true,
                editProfileFailed: false,
            });
        }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].EDIT_PROFILE_FAIL:
            {
                return Object.assign({}, state, {
                    editProfileLoading: false,
                    editProfileLoaded: true,
                    editProfileFailed: true,
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ORDER_HISTORY:
            {
                return Object.assign({}, state, {
                    historyListLoading: true,
                    historyListLoaded: false,
                    historyListFailed: false,
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ORDER_HISTORY_SUCCESS: {
            var tempHistory = payload.data.map(function (history) {
                var historyModel = new _models_order_history_response_model__WEBPACK_IMPORTED_MODULE_2__["OrderHistoryResponseModel"](history);
                return historyModel;
            });
            return Object.assign({}, state, {
                orderHistory: tempHistory,
                historyListLoading: false,
                historyListLoaded: true,
                historyListFailed: false,
            });
        }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ORDER_HISTORY_SUCCESS_COUNT: {
            return Object.assign({}, state, {
                orderHistoryCount: payload.data,
                historyListLoading: false,
                historyListLoaded: true,
                historyListFailed: false,
            });
        }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ORDER_HISTORY_FAIL:
            {
                return Object.assign({}, state, {
                    historyListLoading: false,
                    historyListLoaded: true,
                    historyListFailed: true,
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ORDER_DETAIL:
            {
                return Object.assign({}, state, {
                    orderHistoryDetail: {},
                    orderHistoryDetailLoading: true,
                    orderHistoryDetailLoaded: false,
                    orderHistoryDetailFailed: false,
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CLEAR_ORDER_DETAIL:
            {
                return Object.assign({}, state, {
                    orderHistoryDetail: {},
                });
            }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ORDER_DETAIL_SUCCESS: {
            return Object.assign({}, state, {
                orderHistoryDetail: payload.data,
                orderHistoryDetailLoading: false,
                orderHistoryDetailLoaded: true,
                orderHistoryDetailFailed: false,
            });
        }
        case _action_account_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CHANGE_PASSWORD_FAIL:
            {
                return Object.assign({}, state, {
                    ratingLoading: false,
                    ratingLoaded: false,
                    ratingFailed: true,
                });
            }
        default: {
            return state;
        }
    }
}
var getNewPassword = function (state) { return state.newPassword; };
var getorderHistoryList = function (state) { return state.orderHistory; };
var getorderHistoryCount = function (state) { return state.orderHistoryCount; };
var getorderHistoryDetail = function (state) { return state.orderHistoryDetail; };
var getOrderHistoryDetailLoading = function (state) { return state.orderHistoryDetailLoading; };
var getOrderHistoryDetailLoaded = function (state) { return state.orderHistoryDetailLoaded; };
var getOrderHistoryDetailFailed = function (state) { return state.orderHistoryDetailFailed; };
var getHistoryListLoading = function (state) { return state.historyListLoading; };
var getHistoryListLoaded = function (state) { return state.historyListLoaded; };
var getHistoryListFailed = function (state) { return state.historyListFailed; };
var getChangepasswordLoading = function (state) { return state.changepasswordLoading; };
var getChangepasswordLoaded = function (state) { return state.changepasswordLoaded; };
var getChangepasswordFailed = function (state) { return state.changepasswordFailed; };
var getEdittedStatus = function (state) { return state.edited; };
var getEditProfileLoading = function (state) { return state.editProfileLoading; };
var getEditProfileLoaded = function (state) { return state.editProfileLoaded; };
var getEditProfileFailed = function (state) { return state.editProfileFailed; };


/***/ }),

/***/ "./src/core/account/reducer/account.state.ts":
/*!***************************************************!*\
  !*** ./src/core/account/reducer/account.state.ts ***!
  \***************************************************/
/*! exports provided: accountrecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountrecord", function() { return accountrecord; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var accountrecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
    newPassword: {},
    orderHistory: [],
    orderHistoryCount: 0,
    orderHistoryDetail: {},
    addresslist: {},
    updateCustomerAddress: {},
    deleteCustomerAddress: {},
    orderHistoryDetailLoading: false,
    orderHistoryDetailLoaded: false,
    orderHistoryDetailFailed: false,
    historyListLoading: false,
    historyListLoaded: false,
    historyListFailed: false,
    changepasswordLoading: false,
    changepasswordLoaded: false,
    changepasswordFailed: false,
    editProfileLoading: false,
    editProfileLoaded: false,
    editProfileFailed: false,
});


/***/ }),

/***/ "./src/core/auth/action/auth.action.ts":
/*!*********************************************!*\
  !*** ./src/core/auth/action/auth.action.ts ***!
  \*********************************************/
/*! exports provided: ActionTypes, DoLogin, DoLoginSuccess, DoLoginFail, DoOauthLogin, DoRegister, DoRegisterSuccess, DoRegisterFail, RecoverAccount, RecoverAccountSuccess, RecoverAccountFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoLogin", function() { return DoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoLoginSuccess", function() { return DoLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoLoginFail", function() { return DoLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoOauthLogin", function() { return DoOauthLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoRegister", function() { return DoRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoRegisterSuccess", function() { return DoRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoRegisterFail", function() { return DoRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverAccount", function() { return RecoverAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverAccountSuccess", function() { return RecoverAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverAccountFail", function() { return RecoverAccountFail; });
/* harmony import */ var _shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utility/utilityHelpers */ "./src/core/shared/utility/utilityHelpers.ts");

var ActionTypes = {
    // login actions
    DO_LOGIN: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do login'),
    DO_LOGIN_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do login success'),
    DO_LOGIN_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do login fail'),
    // login actions
    DO_OAUTH_LOGIN: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do oauth login'),
    // register actions
    DO_REGISTER: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do register'),
    DO_REGISTER_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do register success'),
    DO_REGISTER_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do register fail'),
    // recover account action
    DO_RECOVER: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do recover'),
    RECOVER_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do recover success'),
    RECOVER_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] do recover fail'),
};
// login actions
var DoLogin = /** @class */ (function () {
    function DoLogin(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_LOGIN;
    }
    return DoLogin;
}());

var DoLoginSuccess = /** @class */ (function () {
    function DoLoginSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_LOGIN_SUCCESS;
    }
    return DoLoginSuccess;
}());

var DoLoginFail = /** @class */ (function () {
    function DoLoginFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_LOGIN_FAIL;
    }
    return DoLoginFail;
}());

// oauth login actions
var DoOauthLogin = /** @class */ (function () {
    function DoOauthLogin(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_OAUTH_LOGIN;
    }
    return DoOauthLogin;
}());

// export class DoOauthLoginSuccess implements Action {
//     type = ActionTypes.DO_OAUTH_LOGIN_SUCCESS;
//     constructor(public payload: LoginResponseModel) {
//     }
// }
// export class DoOauthLoginFail implements Action {
//     type = ActionTypes.DO_OAUTH_LOGIN_FAIL;
//     constructor(public payload: any) {
//     }
// }
// register actions
var DoRegister = /** @class */ (function () {
    function DoRegister(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_REGISTER;
    }
    return DoRegister;
}());

var DoRegisterSuccess = /** @class */ (function () {
    function DoRegisterSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_REGISTER_SUCCESS;
    }
    return DoRegisterSuccess;
}());

var DoRegisterFail = /** @class */ (function () {
    function DoRegisterFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_REGISTER_FAIL;
    }
    return DoRegisterFail;
}());

// recover account action
var RecoverAccount = /** @class */ (function () {
    function RecoverAccount(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_RECOVER;
    }
    return RecoverAccount;
}());

var RecoverAccountSuccess = /** @class */ (function () {
    function RecoverAccountSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.RECOVER_SUCCESS;
    }
    return RecoverAccountSuccess;
}());

var RecoverAccountFail = /** @class */ (function () {
    function RecoverAccountFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.RECOVER_FAIL;
    }
    return RecoverAccountFail;
}());



/***/ }),

/***/ "./src/core/auth/reducer/auth.reducer.ts":
/*!***********************************************!*\
  !*** ./src/core/auth/reducer/auth.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, reducer, getToken, getTokenValid, getLoginLoading, getLoginLoaded, getLoginFailed, getRegisterLoading, getRegisterLoaded, getRegisterFailed, getRecoverLoading, getRecoverLoaded, getRecoverFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenValid", function() { return getTokenValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginLoading", function() { return getLoginLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginLoaded", function() { return getLoginLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginFailed", function() { return getLoginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisterLoading", function() { return getRegisterLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisterLoaded", function() { return getRegisterLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisterFailed", function() { return getRegisterFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecoverLoading", function() { return getRecoverLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecoverLoaded", function() { return getRecoverLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecoverFailed", function() { return getRecoverFailed; });
/* harmony import */ var _action_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/auth.action */ "./src/core/auth/action/auth.action.ts");
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.state */ "./src/core/auth/reducer/auth.state.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var initialState = new _auth_state__WEBPACK_IMPORTED_MODULE_1__["authrecord"]();
function reducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    if (!type) {
        return state;
    }
    switch (type) {
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_LOGIN: {
            return Object.assign({}, state, {
                loginLoading: true,
                loginLoaded: false,
                loginFailed: false
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_LOGIN_SUCCESS: {
            var validUser = false;
            if (payload.user_token) {
                validUser = true;
            }
            else {
                validUser = false;
            }
            return Object.assign({}, state, {
                token: payload.user_token,
                tokenValid: validUser,
                loginLoading: false,
                loginLoaded: true,
                loginFailed: false
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_LOGIN_FAIL: {
            return Object.assign({}, state, {
                loginLoading: false,
                loginLoaded: true,
                loginFailed: true
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_REGISTER: {
            return Object.assign({}, state, {
                registerLoading: true,
                registerLoaded: false,
                registerFailed: false
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_REGISTER_SUCCESS: {
            return Object.assign({}, state, {
                token: payload.user_token,
                registerLoading: false,
                registerLoaded: true,
                registerFailed: false
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_REGISTER_FAIL: {
            return Object.assign({}, state, {
                registerLoading: false,
                registerLoaded: true,
                registerFailed: true
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_RECOVER: {
            return Object.assign({}, state, {
                recoverLoading: true,
                recoverLoaded: false,
                recoverFailed: false
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].RECOVER_SUCCESS: {
            return Object.assign({}, state, {
                token: payload.user_token,
                recoverLoading: false,
                recoverLoaded: true,
                recoverFailed: false
            });
        }
        case _action_auth_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].RECOVER_FAIL: {
            return Object.assign({}, state, {
                recoverLoading: false,
                recoverLoaded: true,
                recoverFailed: true
            });
        }
        default: {
            return state;
        }
    }
}
var getToken = function (state) { return state.token; };
var getTokenValid = function (state) { return state.tokenValid; };
var getLoginLoading = function (state) { return state.loginLoading; };
var getLoginLoaded = function (state) { return state.loginLoaded; };
var getLoginFailed = function (state) { return state.loginFailed; };
var getRegisterLoading = function (state) { return state.registerLoading; };
var getRegisterLoaded = function (state) { return state.registerLoaded; };
var getRegisterFailed = function (state) { return state.registerFailed; };
var getRecoverLoading = function (state) { return state.recoverLoading; };
var getRecoverLoaded = function (state) { return state.recoverLoaded; };
var getRecoverFailed = function (state) { return state.recoverFailed; };


/***/ }),

/***/ "./src/core/auth/reducer/auth.state.ts":
/*!*********************************************!*\
  !*** ./src/core/auth/reducer/auth.state.ts ***!
  \*********************************************/
/*! exports provided: authrecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authrecord", function() { return authrecord; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var authrecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
    token: '',
    tokenValid: false,
    loginLoading: false,
    loginLoaded: false,
    loginFailed: false,
    registerLoading: false,
    registerLoaded: false,
    registerFailed: false,
    recoverLoading: false,
    recoverLoaded: false,
    recoverFailed: false,
});


/***/ }),

/***/ "./src/core/common/action/common.action.ts":
/*!*************************************************!*\
  !*** ./src/core/common/action/common.action.ts ***!
  \*************************************************/
/*! exports provided: ActionTypes, GetWishlistCount, GetWishlistCountSuccess, GetWishlistCountFail, GetProfile, GetProfileSuccess, GetProfileFail, DoSignOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWishlistCount", function() { return GetWishlistCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWishlistCountSuccess", function() { return GetWishlistCountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWishlistCountFail", function() { return GetWishlistCountFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfile", function() { return GetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfileSuccess", function() { return GetProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfileFail", function() { return GetProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoSignOut", function() { return DoSignOut; });
/* harmony import */ var _shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utility/utilityHelpers */ "./src/core/shared/utility/utilityHelpers.ts");

var ActionTypes = {
    GET_PROFILE: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] get profile'),
    GET_PROFILE_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] get profile success'),
    GET_PROFILE_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[login] get profile fail'),
    DO_SIGN_OUT: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[signout] sign out'),
    GET_WISHLIST_COUNT: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[count] get wishlist count'),
    GET_WISHLIST_COUNT_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[count] wishlist count success'),
    GET_WISHLIST_COUNT_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[count] wishlist count fail'),
};
/* get wishlist count action*/
var GetWishlistCount = /** @class */ (function () {
    function GetWishlistCount(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_WISHLIST_COUNT;
    }
    return GetWishlistCount;
}());

/* get Wishlist action*/
var GetWishlistCountSuccess = /** @class */ (function () {
    function GetWishlistCountSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_WISHLIST_COUNT_SUCCESS;
    }
    return GetWishlistCountSuccess;
}());

var GetWishlistCountFail = /** @class */ (function () {
    function GetWishlistCountFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_WISHLIST_COUNT_FAIL;
    }
    return GetWishlistCountFail;
}());

/* get profile action*/
var GetProfile = /** @class */ (function () {
    function GetProfile(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = ActionTypes.GET_PROFILE;
    }
    return GetProfile;
}());

var GetProfileSuccess = /** @class */ (function () {
    function GetProfileSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PROFILE_SUCCESS;
    }
    return GetProfileSuccess;
}());

var GetProfileFail = /** @class */ (function () {
    function GetProfileFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PROFILE_FAIL;
    }
    return GetProfileFail;
}());

/* do sign out action*/
var DoSignOut = /** @class */ (function () {
    function DoSignOut(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = ActionTypes.DO_SIGN_OUT;
    }
    return DoSignOut;
}());



/***/ }),

/***/ "./src/core/common/common.sandbox.ts":
/*!*******************************************!*\
  !*** ./src/core/common/common.sandbox.ts ***!
  \*******************************************/
/*! exports provided: CommonSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSandbox", function() { return CommonSandbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_common_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/common.action */ "./src/core/common/action/common.action.ts");
/* harmony import */ var _reducer_common_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/common.selector */ "./src/core/common/reducer/common.selector.ts");
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





var CommonSandbox = /** @class */ (function () {
    function CommonSandbox(router, appState$) {
        this.router = router;
        this.appState$ = appState$;
        /* get profile status*/
        this.getProfile$ = this.appState$.select(_reducer_common_selector__WEBPACK_IMPORTED_MODULE_4__["getProfile"]);
        this.getProfileValid$ = this.appState$.select(_reducer_common_selector__WEBPACK_IMPORTED_MODULE_4__["getProfileValid"]);
        this.profileLoading$ = this.appState$.select(_reducer_common_selector__WEBPACK_IMPORTED_MODULE_4__["profileLoading"]);
        this.profileLoaded$ = this.appState$.select(_reducer_common_selector__WEBPACK_IMPORTED_MODULE_4__["profileLoaded"]);
        this.profileFailed$ = this.appState$.select(_reducer_common_selector__WEBPACK_IMPORTED_MODULE_4__["profileFailed"]);
        this.wishlistCount$ = this.appState$.select(_reducer_common_selector__WEBPACK_IMPORTED_MODULE_4__["wishlistCount"]);
        this.subscriptions = [];
        this.registerEvents();
    }
    CommonSandbox.prototype.doGetProfile = function () {
        this.appState$.dispatch(new _action_common_action__WEBPACK_IMPORTED_MODULE_3__["GetProfile"]());
    };
    CommonSandbox.prototype.doSignout = function () {
        this.appState$.dispatch(new _action_common_action__WEBPACK_IMPORTED_MODULE_3__["DoSignOut"]());
    };
    CommonSandbox.prototype.registerEvents = function () { };
    CommonSandbox.prototype.getWishlistCounts = function (params) {
        this.appState$.dispatch(new _action_common_action__WEBPACK_IMPORTED_MODULE_3__["GetWishlistCount"](params));
    };
    CommonSandbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CommonSandbox);
    return CommonSandbox;
}());



/***/ }),

/***/ "./src/core/common/common.service.ts":
/*!*******************************************!*\
  !*** ./src/core/common/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/providers/api/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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


var CommonService = /** @class */ (function (_super) {
    __extends(CommonService, _super);
    function CommonService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* get profile api*/
    CommonService.prototype.doGetProfile = function (params) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'customer/get-profile');
    };
    /* get wishlist count api*/
    CommonService.prototype.getWishlistCount = function (params) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'customer/wishlist-product-list', {
            params: params
        });
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CommonService);
    return CommonService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_1__["Api"]));



/***/ }),

/***/ "./src/core/common/effects/common.effect.ts":
/*!**************************************************!*\
  !*** ./src/core/common/effects/common.effect.ts ***!
  \**************************************************/
/*! exports provided: CommonEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonEffect", function() { return CommonEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _action_common_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../action/common.action */ "./src/core/common/action/common.action.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common.service */ "./src/core/common/common.service.ts");
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








var CommonEffect = /** @class */ (function () {
    function CommonEffect(actions$, platformId, authApi) {
        var _this = this;
        this.actions$ = actions$;
        this.platformId = platformId;
        this.authApi = authApi;
        this.getProfile$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_common_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.doGetProfile(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (val) {
                if (val) {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this.platformId)) {
                        localStorage.setItem('user', JSON.stringify(val.data));
                    }
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profile) { return new _action_common_action__WEBPACK_IMPORTED_MODULE_6__["GetProfileSuccess"](profile); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_common_action__WEBPACK_IMPORTED_MODULE_6__["GetProfileFail"](error)); }));
        }));
        this.getWishlistCount$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_common_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].GET_WISHLIST_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getWishlistCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (wishlish) { return new _action_common_action__WEBPACK_IMPORTED_MODULE_6__["GetWishlistCountSuccess"](wishlish); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_common_action__WEBPACK_IMPORTED_MODULE_6__["GetWishlistCountFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CommonEffect.prototype, "getProfile$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], CommonEffect.prototype, "getWishlistCount$", void 0);
    CommonEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            Object,
            _common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], CommonEffect);
    return CommonEffect;
}());



/***/ }),

/***/ "./src/core/common/models/profile.model.ts":
/*!*************************************************!*\
  !*** ./src/core/common/models/profile.model.ts ***!
  \*************************************************/
/*! exports provided: ProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModel", function() { return ProfileModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ProfileModel = /** @class */ (function () {
    function ProfileModel(bannerRequest) {
        this.address = bannerRequest.address || '';
        this.avatar = bannerRequest.avatar || '';
        this.avatarPath = bannerRequest.avatarPath || '';
        this.zoneId = bannerRequest.zoneId || '';
        this.countryId = bannerRequest.countryId || '';
        this.createdDate = bannerRequest.createdDate || '';
        this.email = bannerRequest.email || '';
        this.firstName = bannerRequest.firstName || '';
        this.lastName = bannerRequest.lastName || '';
        this.pincode = bannerRequest.pincode || '';
        this.mobileNumber = bannerRequest.mobileNumber || '';
        this.id = bannerRequest.id || '';
        this.lastLogin = bannerRequest.lastLogin || '';
        this.username = bannerRequest.username || '';
        this.bio = bannerRequest.bio || '';
        this.iam = bannerRequest.iam || '';
        this.interest = bannerRequest.interest || '';
        this.orderNotificationFirst = bannerRequest.orderNotificationFirst == 1 ? true : false;
        this.primaryAddess = bannerRequest.primaryAddess || '';
        this.orderNotificationsecond = bannerRequest.orderNotificationsecond == 1 ? true : false;
        this.recoveryEmail = bannerRequest.recoveryEmail || '';
        this.birthday = bannerRequest.birthday || '';
        this.gender = bannerRequest.gender || '';
    }
    return ProfileModel;
}());



/***/ }),

/***/ "./src/core/common/reducer/common.reducer.ts":
/*!***************************************************!*\
  !*** ./src/core/common/reducer/common.reducer.ts ***!
  \***************************************************/
/*! exports provided: initialState, reducer, getProfile, getProfileValid, getProfileLoading, getProfileLoaded, getProfileFailed, getWishlistCount, getWishlistCountLoading, getWishlistCountLoaded, getWishlistCountFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileValid", function() { return getProfileValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileLoading", function() { return getProfileLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileLoaded", function() { return getProfileLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileFailed", function() { return getProfileFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistCount", function() { return getWishlistCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistCountLoading", function() { return getWishlistCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistCountLoaded", function() { return getWishlistCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistCountFailed", function() { return getWishlistCountFailed; });
/* harmony import */ var _action_common_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/common.action */ "./src/core/common/action/common.action.ts");
/* harmony import */ var _common_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.state */ "./src/core/common/reducer/common.state.ts");
/* harmony import */ var _models_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/profile.model */ "./src/core/common/models/profile.model.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var initialState = new _common_state__WEBPACK_IMPORTED_MODULE_1__["CommonRecord"]();
function reducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    if (!type) {
        return state;
    }
    switch (type) {
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PROFILE: {
            return Object.assign({}, state, {
                getProfileLoading: true,
                getProfileLoaded: false,
                getProfileFailed: false
            });
        }
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PROFILE_SUCCESS: {
            var validUser = false;
            var tempProfile = new _models_profile_model__WEBPACK_IMPORTED_MODULE_2__["ProfileModel"](payload.data);
            if (tempProfile.id) {
                validUser = true;
            }
            else {
                validUser = false;
            }
            return Object.assign({}, state, {
                profile: tempProfile,
                profileValid: validUser,
                getProfileLoading: false,
                getProfileLoaded: true,
                getProfileFailed: false
            });
        }
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PROFILE_FAIL: {
            return Object.assign({}, state, {
                getProfileLoading: false,
                getProfileLoaded: true,
                getProfileFailed: true
            });
        }
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_SIGN_OUT: {
            var validUser = false;
            return Object.assign({}, state, {
                profileValid: validUser,
                profile: {}
            });
        }
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_WISHLIST_COUNT: {
            return Object.assign({}, state, {
                wishlistCountLoading: true,
                wishlistCountLoaded: false,
                wishlistCountFailed: false
            });
        }
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_WISHLIST_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                wishlistCount: payload.data,
                wishlistCountLoading: false,
                wishlistCountLoaded: true,
                wishlistCountFailed: false
            });
        }
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_WISHLIST_COUNT_FAIL: {
            return Object.assign({}, state, {
                wishlistCount: 0,
                wishlistCountLoading: false,
                wishlistCountLoaded: true,
                wishlistCountFailed: true
            });
        }
        case _action_common_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PROFILE: {
            return Object.assign({}, state, {
                getProfileLoading: true,
                getProfileLoaded: false,
                getProfileFailed: false
            });
        }
        default: {
            return state;
        }
    }
}
var getProfile = function (state) { return state.profile; };
var getProfileValid = function (state) { return state.profileValid; };
var getProfileLoading = function (state) {
    return state.getProfileLoading;
};
var getProfileLoaded = function (state) { return state.getProfileLoaded; };
var getProfileFailed = function (state) { return state.getProfileFailed; };
var getWishlistCount = function (state) { return state.wishlistCount; };
var getWishlistCountLoading = function (state) {
    return state.wishlistCountLoading;
};
var getWishlistCountLoaded = function (state) {
    return state.wishlistCountLoaded;
};
var getWishlistCountFailed = function (state) {
    return state.wishlistCountFailed;
};


/***/ }),

/***/ "./src/core/common/reducer/common.selector.ts":
/*!****************************************************!*\
  !*** ./src/core/common/reducer/common.selector.ts ***!
  \****************************************************/
/*! exports provided: getState, getProfile, getProfileValid, profileLoading, profileLoaded, profileFailed, wishlistCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileValid", function() { return getProfileValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileLoading", function() { return profileLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileLoaded", function() { return profileLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileFailed", function() { return profileFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistCount", function() { return wishlistCount; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _common_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.reducer */ "./src/core/common/reducer/common.reducer.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var getState = function (State) { return State.common; };
var getProfile = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _common_reducer__WEBPACK_IMPORTED_MODULE_1__["getProfile"]);
var getProfileValid = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _common_reducer__WEBPACK_IMPORTED_MODULE_1__["getProfileValid"]);
var profileLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _common_reducer__WEBPACK_IMPORTED_MODULE_1__["getProfileLoading"]);
var profileLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _common_reducer__WEBPACK_IMPORTED_MODULE_1__["getProfileLoaded"]);
var profileFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _common_reducer__WEBPACK_IMPORTED_MODULE_1__["getProfileFailed"]);
var wishlistCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _common_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlistCount"]);


/***/ }),

/***/ "./src/core/common/reducer/common.state.ts":
/*!*************************************************!*\
  !*** ./src/core/common/reducer/common.state.ts ***!
  \*************************************************/
/*! exports provided: CommonRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonRecord", function() { return CommonRecord; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var CommonRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
    profile: null,
    profileValid: false,
    getProfileLoading: false,
    getProfileLoaded: false,
    getProfileFailed: false,
    wishlistCount: 0,
    wishlistCountLoading: false,
    wishlistCountLoaded: false,
    wishlistCountFailed: false,
});


/***/ }),

/***/ "./src/core/lists/action/lists.action.ts":
/*!***********************************************!*\
  !*** ./src/core/lists/action/lists.action.ts ***!
  \***********************************************/
/*! exports provided: ActionTypes, GetProductList, GetProductListSuccess, GetProductListFail, GetActiveCategory, GetActiveCategorySuccess, GetActiveCategoryFail, RemoveActiveCategoryId, GetProductCount, GetProductCountSuccess, GetProductCountFail, GetProductDetail, GetProductDetailSuccess, GetProductDetailFail, GetProductDetailMandatory, GetProductDetailMandatorySuccess, GetProductDetailMandatoryFail, GetCategoryList, GetCategoryListSuccess, GetCategoryListFail, GetManufacturerList, ManufacturerListSuccess, ManufacturerListtFail, GetBannerList, GetBannerListSuccess, GetBannaerListFail, GetBannerListCount, GetBannerListCountSuccess, GetBannaerListCountFail, GetChildBannerList, GetChildBannerListSuccess, GetChildBannaerListFail, GetPageList, GetPageListSuccess, GetPageListFail, GetSettings, GetSettingsSuccess, GetSettingsFail, DoContactUsAction, DoContactUsActionSuccess, DoContactUsActionFail, GetPageDetails, GetPageDetailsSuccess, GetPageDetailsFail, GetAvailableValue, GetCountryList, GetCountryListSuccess, GetCountryListFail, GetZoneList, GetZoneListSuccess, GetZoneListFail, GetTodayDealsList, GetTodayDealsListSuccess, GetTodayDealsListFail, GetServiceCategory, GetServiceCategorySuccess, GetServiceCategoryFail, GetServiceList, GetServiceListSuccess, GetServiceListFail, CreateEnquiry, CreateEnquirySuccess, CreateEnquiryFail, GetSubCategoryList, GetSubCategoryListSuccess, GetSubCategoryListFail, GetTrendingProductList, GetTrendingProductSuccess, GetTrendingProductFail, GetAdvertisementProductList, GetAdvertisementProductListSuccess, GetAdvertisementProductListFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductList", function() { return GetProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductListSuccess", function() { return GetProductListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductListFail", function() { return GetProductListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetActiveCategory", function() { return GetActiveCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetActiveCategorySuccess", function() { return GetActiveCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetActiveCategoryFail", function() { return GetActiveCategoryFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveActiveCategoryId", function() { return RemoveActiveCategoryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductCount", function() { return GetProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductCountSuccess", function() { return GetProductCountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductCountFail", function() { return GetProductCountFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductDetail", function() { return GetProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductDetailSuccess", function() { return GetProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductDetailFail", function() { return GetProductDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductDetailMandatory", function() { return GetProductDetailMandatory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductDetailMandatorySuccess", function() { return GetProductDetailMandatorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductDetailMandatoryFail", function() { return GetProductDetailMandatoryFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategoryList", function() { return GetCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategoryListSuccess", function() { return GetCategoryListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategoryListFail", function() { return GetCategoryListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetManufacturerList", function() { return GetManufacturerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerListSuccess", function() { return ManufacturerListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerListtFail", function() { return ManufacturerListtFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBannerList", function() { return GetBannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBannerListSuccess", function() { return GetBannerListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBannaerListFail", function() { return GetBannaerListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBannerListCount", function() { return GetBannerListCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBannerListCountSuccess", function() { return GetBannerListCountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBannaerListCountFail", function() { return GetBannaerListCountFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetChildBannerList", function() { return GetChildBannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetChildBannerListSuccess", function() { return GetChildBannerListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetChildBannaerListFail", function() { return GetChildBannaerListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPageList", function() { return GetPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPageListSuccess", function() { return GetPageListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPageListFail", function() { return GetPageListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettings", function() { return GetSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettingsSuccess", function() { return GetSettingsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettingsFail", function() { return GetSettingsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoContactUsAction", function() { return DoContactUsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoContactUsActionSuccess", function() { return DoContactUsActionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoContactUsActionFail", function() { return DoContactUsActionFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPageDetails", function() { return GetPageDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPageDetailsSuccess", function() { return GetPageDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPageDetailsFail", function() { return GetPageDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAvailableValue", function() { return GetAvailableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountryList", function() { return GetCountryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountryListSuccess", function() { return GetCountryListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountryListFail", function() { return GetCountryListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetZoneList", function() { return GetZoneList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetZoneListSuccess", function() { return GetZoneListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetZoneListFail", function() { return GetZoneListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodayDealsList", function() { return GetTodayDealsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodayDealsListSuccess", function() { return GetTodayDealsListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodayDealsListFail", function() { return GetTodayDealsListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetServiceCategory", function() { return GetServiceCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetServiceCategorySuccess", function() { return GetServiceCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetServiceCategoryFail", function() { return GetServiceCategoryFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetServiceList", function() { return GetServiceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetServiceListSuccess", function() { return GetServiceListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetServiceListFail", function() { return GetServiceListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnquiry", function() { return CreateEnquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnquirySuccess", function() { return CreateEnquirySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnquiryFail", function() { return CreateEnquiryFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryList", function() { return GetSubCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryListSuccess", function() { return GetSubCategoryListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubCategoryListFail", function() { return GetSubCategoryListFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrendingProductList", function() { return GetTrendingProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrendingProductSuccess", function() { return GetTrendingProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrendingProductFail", function() { return GetTrendingProductFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAdvertisementProductList", function() { return GetAdvertisementProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAdvertisementProductListSuccess", function() { return GetAdvertisementProductListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAdvertisementProductListFail", function() { return GetAdvertisementProductListFail; });
/* harmony import */ var _shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utility/utilityHelpers */ "./src/core/shared/utility/utilityHelpers.ts");

var ActionTypes = {
    GET_PRODUCT_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product] get product list'),
    PRODUCT_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product] get product list success'),
    PRODUCT_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product] get product list fail'),
    GET_ACTIVE_CATEGORY: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[active_category] get active_category list'),
    GET_ACTIVE_CATEGORY_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[active_category] get active_category list success'),
    GET_ACTIVE_CATEGORY_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[active_category] get active_category list fail'),
    GET_AVAILABLE_VALUE: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[available_data] get availabe  options'),
    GET_VIEW_ALL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[view] get view all'),
    GET_ZONE_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[zone_list] zone list'),
    GET_ZONE_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[zone_list] zone list success'),
    GET_ZONE_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[zone_list] zone list fail'),
    GET_COUNTRY_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[country_list] country list'),
    GET_COUNTRY_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[country_list] country list success'),
    GET_COUNTRY_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[country_list] country list fail'),
    GET_PRODUCT_COUNT: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product_count] get product count'),
    PRODUCT_COUNT_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product_count] get product count success'),
    PRODUCT_COUNT_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product_count] get product count fail'),
    GET_CATEGORY_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[category] get category list'),
    CATEGORY_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[category] get category list success'),
    CATEGORY_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[category] get category list fail'),
    GET_MANUFACTURER_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[manufacturer] get manufacturer list'),
    MANUFACTURER_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[manufacturer] get manufacturer list success'),
    MANUFACTURER_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[manufacturer] get manufacturer list fail'),
    GET_PRODUCT_DETAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product detail] get product detail'),
    PRODUCT_DETAIL_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product detail] get product detail success'),
    PRODUCT_DETAIL_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product detail] get product detail fail'),
    GET_PRODUCT_DETAIL_MANDATORY: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product detail mandatory] get product detail mandatory'),
    PRODUCT_DETAIL_MANDATORY_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product detail mandatory] get product detail mandatory success'),
    PRODUCT_DETAIL_MANDATORY_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[product detail mandatory] get product detail mandatory fail'),
    GET_BANNER_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner] get banner list'),
    GET_BANNER_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner] get banner list success'),
    GET_BANNER_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner] get banner list fail'),
    GET_BANNER_LIST_COUNT: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner_count] get banner list count'),
    GET_BANNER_LIST_COUNT_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner_count] get banner list count success'),
    GET_BANNER_LIST_COUNT_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner_count] get banner list count fail'),
    GET_CHILD_BANNER_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner] get child banner list'),
    GET_CHILD_BANNER_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner] get  child  banner list success'),
    GET_CHILD_BANNER_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[banner] get  child  banner list fail'),
    GET_PAGE_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[page_list] get page list '),
    GET_PAGE_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[page_list] get page list success'),
    GET_PAGE_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[page_list] get page list fail'),
    GET_SETTINGS_ACTION: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[setting] get settings '),
    GET_SETTINGS_SUCCESS_ACTION: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[setting] get settings succeess'),
    GET_SETTINGS_FAIL_ACTION: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[setting] get settings fail'),
    DO_CONTACT_US_ACTION: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[contact_us] contact us '),
    DO_CONTACT_US_SUCCESS_ACTION: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[contact_us] contact us succeess'),
    DO_CONTACT_US_FAIL_ACTION: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[contact_us] contact us fail'),
    GET_PAGE_DETAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[page_detail] page detail '),
    GET_PAGE_DETAIL_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[page_detail] page detail succeess'),
    GET_PAGE_DETAIL_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[page_detail] page detail fail'),
    GET_TODAY_DEALS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[top_deals] top deals'),
    GET_TODAY_DEALS_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[top_deals] top deals success'),
    GET_TODAY_DEALS_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[top_deals]top deals fail'),
    GET_SERVICE_CATEGORY: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service category] category list'),
    GET_SERVICE_CATEGORY_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service category] category list success'),
    GET_SERVICE_CATEGORY_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service category] category list fail'),
    GET_SERVICE_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service list]  list'),
    GET_SERVICE_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service list]  list success'),
    GET_SERVICE_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service list]  list fail'),
    CREATE_ENQUIRY: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service enquiry] create'),
    CREATE_ENQUIRY_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service enquiry] success'),
    CREATE_ENQUIRY_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[service enquiry] fail'),
    REMOVE_ACTIVE_CATEGORYID: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[remove active category]'),
    GET_SubCATEGORY_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[SUB_CATEGORY] SUB CATEGORY'),
    GET_SubCATEGORY_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[SUB_CATEGORY] SUB CATEGORY SUCCESS'),
    GET_SubCATEGORY_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[SUB_CATEGORY] SUB CATEGORY FAIL'),
    GET_TRENDING_PRODUCT_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[TRENDING_PRODUCT] TRENDING PRODUCT'),
    GET_TRENDING_PRODUCT_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[TRENDING_PRODUCT] TRENDING PRODUCT SUCCESS'),
    GET_TRENDING_PRODUCT_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[TRENDING_PRODUCT] TRENDING PRODUCT FAIL'),
    GET_ADVERTISEMENT_PRODUCT_LIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[ADVERTISEMENT] ADVERTISEMENT PRODUCT'),
    GET_ADVERTISEMENT_PRODUCT_LIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[ADVERTISEMENT] ADVERTISEMENT PRODUCT SUCCESS'),
    GET_ADVERTISEMENT_PRODUCT_LIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[ADVERTISEMENT] ADVERTISEMENT PRODUCT FAIL'),
};
/* get product action*/
var GetProductList = /** @class */ (function () {
    function GetProductList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PRODUCT_LIST;
    }
    return GetProductList;
}());

var GetProductListSuccess = /** @class */ (function () {
    function GetProductListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_LIST_SUCCESS;
    }
    return GetProductListSuccess;
}());

var GetProductListFail = /** @class */ (function () {
    function GetProductListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_LIST_FAIL;
    }
    return GetProductListFail;
}());

/* get Sub category action*/
var GetActiveCategory = /** @class */ (function () {
    function GetActiveCategory(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ACTIVE_CATEGORY;
    }
    return GetActiveCategory;
}());

var GetActiveCategorySuccess = /** @class */ (function () {
    function GetActiveCategorySuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ACTIVE_CATEGORY_SUCCESS;
    }
    return GetActiveCategorySuccess;
}());

var GetActiveCategoryFail = /** @class */ (function () {
    function GetActiveCategoryFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ACTIVE_CATEGORY_FAIL;
    }
    return GetActiveCategoryFail;
}());

var RemoveActiveCategoryId = /** @class */ (function () {
    function RemoveActiveCategoryId(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = ActionTypes.REMOVE_ACTIVE_CATEGORYID;
    }
    return RemoveActiveCategoryId;
}());

var GetProductCount = /** @class */ (function () {
    function GetProductCount(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PRODUCT_COUNT;
    }
    return GetProductCount;
}());

var GetProductCountSuccess = /** @class */ (function () {
    function GetProductCountSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_COUNT_SUCCESS;
    }
    return GetProductCountSuccess;
}());

var GetProductCountFail = /** @class */ (function () {
    function GetProductCountFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_COUNT_FAIL;
    }
    return GetProductCountFail;
}());

/* get product detail action*/
var GetProductDetail = /** @class */ (function () {
    function GetProductDetail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PRODUCT_DETAIL;
    }
    return GetProductDetail;
}());

var GetProductDetailSuccess = /** @class */ (function () {
    function GetProductDetailSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_DETAIL_SUCCESS;
    }
    return GetProductDetailSuccess;
}());

var GetProductDetailFail = /** @class */ (function () {
    function GetProductDetailFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_DETAIL_FAIL;
    }
    return GetProductDetailFail;
}());

/* get product detail mandatory option action*/
var GetProductDetailMandatory = /** @class */ (function () {
    function GetProductDetailMandatory(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PRODUCT_DETAIL_MANDATORY;
    }
    return GetProductDetailMandatory;
}());

var GetProductDetailMandatorySuccess = /** @class */ (function () {
    function GetProductDetailMandatorySuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_DETAIL_MANDATORY_SUCCESS;
    }
    return GetProductDetailMandatorySuccess;
}());

var GetProductDetailMandatoryFail = /** @class */ (function () {
    function GetProductDetailMandatoryFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCT_DETAIL_MANDATORY_FAIL;
    }
    return GetProductDetailMandatoryFail;
}());

/* get category action*/
var GetCategoryList = /** @class */ (function () {
    function GetCategoryList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CATEGORY_LIST;
    }
    return GetCategoryList;
}());

var GetCategoryListSuccess = /** @class */ (function () {
    function GetCategoryListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CATEGORY_LIST_SUCCESS;
    }
    return GetCategoryListSuccess;
}());

var GetCategoryListFail = /** @class */ (function () {
    function GetCategoryListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.CATEGORY_LIST_FAIL;
    }
    return GetCategoryListFail;
}());

/* get brand action*/
var GetManufacturerList = /** @class */ (function () {
    function GetManufacturerList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_MANUFACTURER_LIST;
    }
    return GetManufacturerList;
}());

var ManufacturerListSuccess = /** @class */ (function () {
    function ManufacturerListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.MANUFACTURER_LIST_SUCCESS;
    }
    return ManufacturerListSuccess;
}());

var ManufacturerListtFail = /** @class */ (function () {
    function ManufacturerListtFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.MANUFACTURER_LIST_FAIL;
    }
    return ManufacturerListtFail;
}());

/* get banner action*/
var GetBannerList = /** @class */ (function () {
    function GetBannerList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_BANNER_LIST;
    }
    return GetBannerList;
}());

var GetBannerListSuccess = /** @class */ (function () {
    function GetBannerListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_BANNER_LIST_SUCCESS;
    }
    return GetBannerListSuccess;
}());

var GetBannaerListFail = /** @class */ (function () {
    function GetBannaerListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_BANNER_LIST_FAIL;
    }
    return GetBannaerListFail;
}());

var GetBannerListCount = /** @class */ (function () {
    function GetBannerListCount(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_BANNER_LIST_COUNT;
    }
    return GetBannerListCount;
}());

var GetBannerListCountSuccess = /** @class */ (function () {
    function GetBannerListCountSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_BANNER_LIST_SUCCESS;
    }
    return GetBannerListCountSuccess;
}());

var GetBannaerListCountFail = /** @class */ (function () {
    function GetBannaerListCountFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_BANNER_LIST_FAIL;
    }
    return GetBannaerListCountFail;
}());

/* get child banner action*/
var GetChildBannerList = /** @class */ (function () {
    function GetChildBannerList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CHILD_BANNER_LIST;
    }
    return GetChildBannerList;
}());

var GetChildBannerListSuccess = /** @class */ (function () {
    function GetChildBannerListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CHILD_BANNER_LIST_SUCCESS;
    }
    return GetChildBannerListSuccess;
}());

var GetChildBannaerListFail = /** @class */ (function () {
    function GetChildBannaerListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_CHILD_BANNER_LIST_FAIL;
    }
    return GetChildBannaerListFail;
}());

/* get page list action*/
var GetPageList = /** @class */ (function () {
    function GetPageList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PAGE_LIST;
    }
    return GetPageList;
}());

var GetPageListSuccess = /** @class */ (function () {
    function GetPageListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PAGE_LIST_SUCCESS;
    }
    return GetPageListSuccess;
}());

var GetPageListFail = /** @class */ (function () {
    function GetPageListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PAGE_LIST_FAIL;
    }
    return GetPageListFail;
}());

/* get settings action*/
var GetSettings = /** @class */ (function () {
    function GetSettings(payload) {
        if (payload === void 0) { payload = null; }
        this.payload = payload;
        this.type = ActionTypes.GET_SETTINGS_ACTION;
    }
    return GetSettings;
}());

var GetSettingsSuccess = /** @class */ (function () {
    function GetSettingsSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SETTINGS_SUCCESS_ACTION;
    }
    return GetSettingsSuccess;
}());

var GetSettingsFail = /** @class */ (function () {
    function GetSettingsFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SETTINGS_FAIL_ACTION;
    }
    return GetSettingsFail;
}());

/* do contact us action*/
var DoContactUsAction = /** @class */ (function () {
    function DoContactUsAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_CONTACT_US_ACTION;
    }
    return DoContactUsAction;
}());

var DoContactUsActionSuccess = /** @class */ (function () {
    function DoContactUsActionSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_CONTACT_US_SUCCESS_ACTION;
    }
    return DoContactUsActionSuccess;
}());

var DoContactUsActionFail = /** @class */ (function () {
    function DoContactUsActionFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_CONTACT_US_FAIL_ACTION;
    }
    return DoContactUsActionFail;
}());

/* get page detail action*/
var GetPageDetails = /** @class */ (function () {
    function GetPageDetails(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PAGE_DETAIL;
    }
    return GetPageDetails;
}());

var GetPageDetailsSuccess = /** @class */ (function () {
    function GetPageDetailsSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PAGE_DETAIL_SUCCESS;
    }
    return GetPageDetailsSuccess;
}());

var GetPageDetailsFail = /** @class */ (function () {
    function GetPageDetailsFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_PAGE_DETAIL_FAIL;
    }
    return GetPageDetailsFail;
}());

/* available options */
var GetAvailableValue = /** @class */ (function () {
    function GetAvailableValue(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_AVAILABLE_VALUE;
    }
    return GetAvailableValue;
}());

/* get country list action*/
var GetCountryList = /** @class */ (function () {
    function GetCountryList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_COUNTRY_LIST;
    }
    return GetCountryList;
}());

var GetCountryListSuccess = /** @class */ (function () {
    function GetCountryListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_COUNTRY_LIST_SUCCESS;
    }
    return GetCountryListSuccess;
}());

var GetCountryListFail = /** @class */ (function () {
    function GetCountryListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_COUNTRY_LIST_FAIL;
    }
    return GetCountryListFail;
}());

/* get Zone list action*/
var GetZoneList = /** @class */ (function () {
    function GetZoneList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ZONE_LIST;
    }
    return GetZoneList;
}());

var GetZoneListSuccess = /** @class */ (function () {
    function GetZoneListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ZONE_LIST_SUCCESS;
    }
    return GetZoneListSuccess;
}());

var GetZoneListFail = /** @class */ (function () {
    function GetZoneListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ZONE_LIST_FAIL;
    }
    return GetZoneListFail;
}());

/* get Top deals list action*/
var GetTodayDealsList = /** @class */ (function () {
    function GetTodayDealsList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_TODAY_DEALS;
    }
    return GetTodayDealsList;
}());

var GetTodayDealsListSuccess = /** @class */ (function () {
    function GetTodayDealsListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_TODAY_DEALS_SUCCESS;
    }
    return GetTodayDealsListSuccess;
}());

var GetTodayDealsListFail = /** @class */ (function () {
    function GetTodayDealsListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_TODAY_DEALS_FAIL;
    }
    return GetTodayDealsListFail;
}());

// service category list
var GetServiceCategory = /** @class */ (function () {
    function GetServiceCategory(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SERVICE_CATEGORY;
    }
    return GetServiceCategory;
}());

var GetServiceCategorySuccess = /** @class */ (function () {
    function GetServiceCategorySuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SERVICE_CATEGORY_SUCCESS;
    }
    return GetServiceCategorySuccess;
}());

var GetServiceCategoryFail = /** @class */ (function () {
    function GetServiceCategoryFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SERVICE_CATEGORY_FAIL;
    }
    return GetServiceCategoryFail;
}());

// service list
var GetServiceList = /** @class */ (function () {
    function GetServiceList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SERVICE_LIST;
    }
    return GetServiceList;
}());

var GetServiceListSuccess = /** @class */ (function () {
    function GetServiceListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SERVICE_LIST_SUCCESS;
    }
    return GetServiceListSuccess;
}());

var GetServiceListFail = /** @class */ (function () {
    function GetServiceListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SERVICE_LIST_FAIL;
    }
    return GetServiceListFail;
}());

// service enquiry
var CreateEnquiry = /** @class */ (function () {
    function CreateEnquiry(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_ENQUIRY;
    }
    return CreateEnquiry;
}());

var CreateEnquirySuccess = /** @class */ (function () {
    function CreateEnquirySuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_ENQUIRY_SUCCESS;
    }
    return CreateEnquirySuccess;
}());

var CreateEnquiryFail = /** @class */ (function () {
    function CreateEnquiryFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_ENQUIRY_FAIL;
    }
    return CreateEnquiryFail;
}());

// sub category
var GetSubCategoryList = /** @class */ (function () {
    function GetSubCategoryList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SubCATEGORY_LIST;
    }
    return GetSubCategoryList;
}());

var GetSubCategoryListSuccess = /** @class */ (function () {
    function GetSubCategoryListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SubCATEGORY_LIST_SUCCESS;
    }
    return GetSubCategoryListSuccess;
}());

var GetSubCategoryListFail = /** @class */ (function () {
    function GetSubCategoryListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SubCATEGORY_LIST_FAIL;
    }
    return GetSubCategoryListFail;
}());

// Most trending
var GetTrendingProductList = /** @class */ (function () {
    function GetTrendingProductList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_TRENDING_PRODUCT_LIST;
    }
    return GetTrendingProductList;
}());

var GetTrendingProductSuccess = /** @class */ (function () {
    function GetTrendingProductSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_TRENDING_PRODUCT_LIST_SUCCESS;
    }
    return GetTrendingProductSuccess;
}());

var GetTrendingProductFail = /** @class */ (function () {
    function GetTrendingProductFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_TRENDING_PRODUCT_LIST_FAIL;
    }
    return GetTrendingProductFail;
}());

// get advertisement list
var GetAdvertisementProductList = /** @class */ (function () {
    function GetAdvertisementProductList(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ADVERTISEMENT_PRODUCT_LIST;
    }
    return GetAdvertisementProductList;
}());

var GetAdvertisementProductListSuccess = /** @class */ (function () {
    function GetAdvertisementProductListSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ADVERTISEMENT_PRODUCT_LIST_SUCCESS;
    }
    return GetAdvertisementProductListSuccess;
}());

var GetAdvertisementProductListFail = /** @class */ (function () {
    function GetAdvertisementProductListFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ADVERTISEMENT_PRODUCT_LIST_FAIL;
    }
    return GetAdvertisementProductListFail;
}());



/***/ }),

/***/ "./src/core/lists/effects/lists.effect.ts":
/*!************************************************!*\
  !*** ./src/core/lists/effects/lists.effect.ts ***!
  \************************************************/
/*! exports provided: ListsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsEffect", function() { return ListsEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _action_lists_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../action/lists.action */ "./src/core/lists/action/lists.action.ts");
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lists.service */ "./src/core/lists/lists.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
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











var ListsEffect = /** @class */ (function () {
    function ListsEffect(actions$, authApi, appState$, snackBar, title, meta, platformId) {
        var _this = this;
        this.actions$ = actions$;
        this.authApi = authApi;
        this.appState$ = appState$;
        this.snackBar = snackBar;
        this.title = title;
        this.meta = meta;
        this.platformId = platformId;
        this.getProducts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_PRODUCT_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getProductList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (register) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductListSuccess"](register); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductListFail"](error)); }));
        }));
        this.getProductCount$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_PRODUCT_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getProductCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (register) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductCountSuccess"](register); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductCountFail"](error)); }));
        }));
        this.getCategory$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_CATEGORY_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getCategoryList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (category) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetCategoryListSuccess"](category); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetCategoryListFail"](error)); }));
        }));
        this.getManufacturer$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_MANUFACTURER_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getManufacturer(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (manufacturer) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ManufacturerListSuccess"](manufacturer); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ManufacturerListtFail"](error)); }));
        }));
        // call product detail api
        this.getProductDetail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_PRODUCT_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getProductDetail(state).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
                if (res) {
                    _this.title.setTitle(res.data.metaTagTitle);
                    _this.meta.addTags([
                        { name: 'description', content: res.data.metaTagDescription }
                    ]);
                    var description = _this.meta.getTags('name=description');
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (manufacturer) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductDetailSuccess"](manufacturer); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductDetailFail"](error)); }));
        }));
        this.getProductDetailMandatory$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_PRODUCT_DETAIL_MANDATORY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getProductDetailMandatory(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (manufacturer) {
                return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductDetailMandatorySuccess"](manufacturer);
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetProductDetailMandatoryFail"](error));
            }));
        }));
        this.bannerList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_BANNER_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getBannerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (banner) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetBannerListSuccess"](banner); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetBannaerListFail"](error)); }));
        }));
        this.childBannerList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_CHILD_BANNER_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getBannerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (banner) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetChildBannerListSuccess"](banner); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetChildBannaerListFail"](error)); }));
        }));
        this.bannerCount$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_BANNER_LIST_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getBannerList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (count) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetBannerListCountSuccess"](count); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetBannaerListCountFail"](error)); }));
        }));
        this.pageList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_PAGE_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getPageList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (featured) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetPageListSuccess"](featured); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetPageListFail"](error)); }));
        }));
        this.getSettings$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_SETTINGS_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getsettings().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
                if (res) {
                    _this.title.setTitle(res.data[0].metaTagTitle);
                    _this.meta.addTags([
                        { name: 'description', content: res.data[0].metaTagDescription }
                    ]);
                    var description = _this.meta.getTags('name=description');
                    if (res.data[0].symbolLeft !== null) {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this.platformId)) {
                            localStorage.setItem('currency', JSON.stringify({
                                position: 'left',
                                symbol: res.data[0].symbolLeft
                            }));
                        }
                    }
                    else if (res.data[0].symbolRight !== null) {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this.platformId)) {
                            localStorage.setItem('currency', JSON.stringify({
                                position: 'right',
                                symbol: res.data[0].symbolRight
                            }));
                        }
                    }
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (featured) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetSettingsSuccess"](featured); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetSettingsFail"](error)); }));
        }));
        this.contactUs$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].DO_CONTACT_US_ACTION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.contacUs(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contact) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["DoContactUsActionSuccess"](contact); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["DoContactUsActionFail"](error)); }));
        }));
        this.pageDetail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_PAGE_DETAIL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.pageDetails(state).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
                if (res) {
                    _this.title.setTitle(res.data.metaTagTitle);
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (contact) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetPageDetailsSuccess"](contact); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetPageDetailsSuccess"](error)); }));
        }));
        this.country$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_COUNTRY_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getCountryList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (orders) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetCountryListSuccess"](orders); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetCountryListFail"](error)); }));
        }));
        this.zone$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_ZONE_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getZoneList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (orders) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetZoneListSuccess"](orders); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetZoneListFail"](error)); }));
        }));
        this.todayDeals$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_TODAY_DEALS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getTodayDealsList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (orders) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetTodayDealsListSuccess"](orders); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetTodayDealsListFail"](error)); }));
        }));
        this.getSubCategory$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_SubCATEGORY_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getSubCategoryList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetSubCategoryListSuccess"](data); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetSubCategoryListFail"](error)); }));
        }));
        this.advertisementProductList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_lists_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].GET_ADVERTISEMENT_PRODUCT_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.getAdvertisementList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (banner) { return new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetAdvertisementProductListSuccess"](banner); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_lists_action__WEBPACK_IMPORTED_MODULE_7__["GetAdvertisementProductListFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getProducts$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getProductCount$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getCategory$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getManufacturer$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getProductDetail$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getProductDetailMandatory$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "bannerList$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "childBannerList$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "bannerCount$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "pageList$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getSettings$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "contactUs$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "pageDetail$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "country$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "zone$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "todayDeals$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "getSubCategory$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ListsEffect.prototype, "advertisementProductList$", void 0);
    ListsEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _lists_service__WEBPACK_IMPORTED_MODULE_8__["ListsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"],
            Object])
    ], ListsEffect);
    return ListsEffect;
}());



/***/ }),

/***/ "./src/core/lists/lists.sandbox.ts":
/*!*****************************************!*\
  !*** ./src/core/lists/lists.sandbox.ts ***!
  \*****************************************/
/*! exports provided: ListsSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsSandbox", function() { return ListsSandbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _action_lists_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/lists.action */ "./src/core/lists/action/lists.action.ts");
/* harmony import */ var _reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/lists.selector */ "./src/core/lists/reducer/lists.selector.ts");
/* harmony import */ var _models_contact_us_request_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/contact-us-request.model */ "./src/core/lists/models/contact-us-request.model.ts");
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
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var ListsSandbox = /** @class */ (function () {
    function ListsSandbox(router, appState$) {
        this.router = router;
        this.appState$ = appState$;
        this.categoryList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getCategoryList"]);
        this.manufacturer$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getManufacturer"]);
        this.productDetails$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getProductDetail"]);
        this.productDetailMandatory$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getproductDetailMandatory"]);
        /* product status*/
        this.productlist$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getProductList"]);
        this.priceLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["priceLoading"]);
        this.maxProductPrice$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getMaxProductPrice"]);
        this.productcount$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getProductCount"]);
        this.productLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getProductLoading"]);
        this.productLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getProductLoaded"]);
        this.productFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getProductFailed"]);
        /* banner status*/
        this.bannerList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["bannerList"]);
        this.bannerListLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["bannerLoadingStatus"]);
        this.bannerListLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["bannerLoadedStatus"]);
        this.bannerListFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["bannerFailedStatus"]);
        this.bannerCount$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["bannerCount"]);
        this.bannerCountLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["countLoadingStatus"]);
        this.bannerCountLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["countLoadedStatus"]);
        this.bannerCountFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["countFailedStatus"]);
        /* Child banner list */
        this.childBannerList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["childBannerList"]);
        this.childBannerListLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["childBannerLoadingStatus"]);
        this.childBannerListLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["childBannerLoadedStatus"]);
        this.childBannerListFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["childBannerFailedStatus"]);
        /* page list status*/
        this.pageList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getPageList"]);
        this.pageListLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["pageListLoadingStatus"]);
        this.pageListLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["pageListLoadedStatus"]);
        this.pageListFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["pageListFailedStatus"]);
        this.settingDetail$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["settingDetail"]);
        /* contact us status*/
        this.contactUsLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["contactUsLoadingStatus"]);
        this.contactUsLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["contactUsLoadedStatus"]);
        this.contactUsFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["contactUsFailedStatus"]);
        this.contactUs$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getContactDetail"]);
        /* page detail status*/
        this.pageDetailLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["pageDetailLoadingStatus"]);
        this.pageDetailLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["pageDetailLoadedStatus"]);
        this.pageDetailFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["pageDetailFailedStatus"]);
        this.pageDetail$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["pageDetail"]);
        /* brand status*/
        this.manufacturerLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["manufacturerLoadingStatus"]);
        this.manufacturerLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["manufacturerLoadedStatus"]);
        this.manufacturerFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["manufacturerFailedStatus"]);
        /* product detail status*/
        this.productDetailLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["productDetailLoadingStatus"]);
        this.productDetailLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["productDetailLoadedStatus"]);
        this.productDetailFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["productDetailFailedStatus"]);
        /* country list status*/
        this.countryList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["countryList"]);
        this.countryLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["countryLoading"]);
        this.countryLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["countryLoaded"]);
        this.countryFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["countryFailed"]);
        /* zone list status*/
        this.zoneList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["zoneList"]);
        this.zoneLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["zoneLoading"]);
        this.zoneLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["zoneLoaded"]);
        this.zoneFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["zoneFailed"]);
        /* today deal list status*/
        this.todayDealList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["todayDealList"]);
        this.todayDealLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["todayDealLoading"]);
        this.todayDealLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["todayDealLoaded"]);
        this.todayDealFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["todayDealFailed"]);
        /* available options seleted */
        this.availableOptionsArray$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getAvailableOptionsArray"]);
        this.selectedCategoryList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["subCategoryID"]);
        this.subCategoryList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["subCategoryList"]);
        this.subCategoryLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["subCategoryLoading"]);
        this.subCategoryLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["subCategoryLoaded"]);
        // active category
        this.getactiveCategoryID$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["getactiveCategoryID"]);
        this.symbolSetting$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["symbolSetting"]);
        /* get advertisementlist */
        this.advertisementProductList$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["advertisementProductList"]);
        this.advertisementProductListLoading$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["advertisementProductListLoading"]);
        this.advertisementProductListLoaded$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["advertisementProductListLoadedStatus"]);
        this.advertisementProductListFailed$ = this.appState$.select(_reducer_lists_selector__WEBPACK_IMPORTED_MODULE_5__["advertisementProductListFailedStatus"]);
        this.subscriptions = [];
        /** create a subject send the value from menucomponent and recieve value to productFilterComponent*/
        this.productFilterData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.registerEvents();
        this.getSettings();
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        this.getCountryList(params);
        params.limit = '';
        params.offset = '';
        params.count = '';
        this.getZoneList(params);
    }
    ListsSandbox.prototype.getProductList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetProductList"](params));
    };
    ListsSandbox.prototype.getActiveCategory = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetActiveCategory"](params));
    };
    ListsSandbox.prototype.getProductCount = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetProductCount"](params));
    };
    ListsSandbox.prototype.getCategoryList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetCategoryList"](params));
    };
    ListsSandbox.prototype.getBannerList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetBannerList"](params));
    };
    ListsSandbox.prototype.getChildBannerList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetChildBannerList"](params));
    };
    ListsSandbox.prototype.getManufacturerList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetManufacturerList"](params));
    };
    ListsSandbox.prototype.getProductDetails = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetProductDetail"](params));
    };
    ListsSandbox.prototype.getProductDetailsMandatory = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetProductDetailMandatory"](params));
    };
    ListsSandbox.prototype.getPageList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetPageList"](params));
    };
    ListsSandbox.prototype.getSettings = function () {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetSettings"]());
    };
    ListsSandbox.prototype.contactUs = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["DoContactUsAction"](new _models_contact_us_request_model__WEBPACK_IMPORTED_MODULE_6__["ContactUsRequestModel"](params)));
    };
    ListsSandbox.prototype.getPageDetail = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetPageDetails"](params));
    };
    ListsSandbox.prototype.getAvailableValue = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetAvailableValue"](params));
    };
    ListsSandbox.prototype.getCountryList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetCountryList"](params));
    };
    ListsSandbox.prototype.getZoneList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetZoneList"](params));
    };
    ListsSandbox.prototype.getTodayDealList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetTodayDealsList"](params));
    };
    ListsSandbox.prototype.removeActiveCategory = function () {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["RemoveActiveCategoryId"]());
    };
    // start get advertisement list 
    ListsSandbox.prototype.getAdvertisementList = function (params) {
        this.appState$.dispatch(new _action_lists_action__WEBPACK_IMPORTED_MODULE_4__["GetAdvertisementProductList"](params));
    };
    // end get advertisement list
    /** subscribe   value **/
    ListsSandbox.prototype.registerEvents = function () {
        var _this = this;
        this.subscriptions.push(this.contactUs$.subscribe(function (contact) {
            if (contact && contact['status'] === 1) {
                _this.router.navigate(['/']);
            }
        }));
    };
    ListsSandbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ListsSandbox);
    return ListsSandbox;
}());



/***/ }),

/***/ "./src/core/lists/lists.service.ts":
/*!*****************************************!*\
  !*** ./src/core/lists/lists.service.ts ***!
  \*****************************************/
/*! exports provided: ListsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsService", function() { return ListsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/providers/api/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var ListsService = /** @class */ (function (_super) {
    __extends(ListsService, _super);
    function ListsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListsService.prototype.getBrand = function (param) {
        this.tempBrand = param;
    };
    ListsService.prototype.setBrand = function () {
        return this.tempBrand;
    };
    ListsService.prototype.getCountryList = function (params) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'list/country-list', { params: params });
    };
    /* get product list api*/
    ListsService.prototype.getProductList = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (k) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        return this.http.get(this.base + 'list/custom-product-list', reqOpts);
    };
    /* get product count api*/
    ListsService.prototype.getProductCount = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (k) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        return this.http.get(this.base + 'list/product-count', reqOpts);
    };
    /* get category list api*/
    ListsService.prototype.getCategoryList = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (k) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        return this.http.get(this.base + 'list/category-list', reqOpts);
    };
    /* get banner list api*/
    ListsService.prototype.getBannerList = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (k) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        return this.http.get(this.base + 'list/banner-list', reqOpts);
    };
    /* get brand list api*/
    ListsService.prototype.getManufacturer = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (k) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        return this.http.get(this.base + 'manufacturers/manufacturerlist', reqOpts);
    };
    /* get  product detail api*/
    ListsService.prototype.getProductDetail = function (params) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'product-store/productdetail/' + params.id);
    };
    /* get  product detail mandatory api*/
    ListsService.prototype.getProductDetailMandatory = function (params) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'product-store/productdetail/' + params.id);
    };
    /* get  page list api*/
    ListsService.prototype.getPageList = function (params) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'pages/pagelist', { params: params });
    };
    /* get  settings api*/
    ListsService.prototype.getsettings = function () {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'settings/get-settings');
    };
    /* contact us detail api*/
    ListsService.prototype.contacUs = function (params) {
        this.base = this.getBaseUrl();
        return this.http.post(this.base + 'list/contact-us', params);
    };
    /* page detail api*/
    ListsService.prototype.pageDetails = function (orderId) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'pages/get_pagedetails/' + orderId);
    };
    /* zone list api*/
    ListsService.prototype.getZoneList = function (params) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'list/zone-list', { params: params });
    };
    /* today deals list api*/
    ListsService.prototype.getTodayDealsList = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        reqOpts = params;
        return this.http.get(this.base + 'product-store/todayDeals-list', {
            params: reqOpts
        });
    };
    /* subcategory list api*/
    ListsService.prototype.getSubCategoryList = function (param) {
        this.base = this.getBaseUrl();
        return this.http.get(this.base + 'list/specific-category-list', {
            params: param
        });
    };
    /* get Advertisement List list api*/
    ListsService.prototype.getAdvertisementList = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (k) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        return this.http.get(this.base + 'list/banner-list', reqOpts);
    };
    ListsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ListsService);
    return ListsService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/core/lists/models/banner-list-response.model.ts":
/*!*************************************************************!*\
  !*** ./src/core/lists/models/banner-list-response.model.ts ***!
  \*************************************************************/
/*! exports provided: BannerListResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListResponseModel", function() { return BannerListResponseModel; });
/*
 * spurtcommerce
* www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var BannerListResponseModel = /** @class */ (function () {
    function BannerListResponseModel(bannerResponse) {
        this.bannerId = bannerResponse.bannerId || '';
        this.title = bannerResponse.title || '';
        this.url = bannerResponse.url || '';
        this.link = bannerResponse.link || '';
        this.content = bannerResponse.content || '';
        this.position = bannerResponse.position || '';
        this.image = bannerResponse.image || '';
        this.imagePath = bannerResponse.imagePath || '';
        this.containerName = bannerResponse.containerName || '';
        this.viewPageCount = bannerResponse.viewPageCount || 0;
        this.isActive = bannerResponse.isActive || 0;
        this.homebanner = bannerResponse.homebanner || 0;
        this.categoryId = bannerResponse.categoryId || 0;
    }
    return BannerListResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/category-response.model.ts":
/*!**********************************************************!*\
  !*** ./src/core/lists/models/category-response.model.ts ***!
  \**********************************************************/
/*! exports provided: CategoryResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResponseModel", function() { return CategoryResponseModel; });
/* harmony import */ var _categorychildren_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorychildren-response.model */ "./src/core/lists/models/categorychildren-response.model.ts");
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var CategoryResponseModel = /** @class */ (function () {
    function CategoryResponseModel(listResponse) {
        this.categoryId = listResponse.categoryId || '';
        this.image = listResponse.image || '';
        this.imagePath = listResponse.imagePath || '';
        this.isActive = listResponse.isActive || '';
        this.metaTagDescription = listResponse.metaTagDescription || '';
        this.metaTagKeyword = listResponse.metaTagKeyword || '';
        this.metaTagTitle = listResponse.metaTagTitle || '';
        this.name = listResponse.name || '';
        this.parentInt = listResponse.parentInt || '';
        this.sortOrder = listResponse.sortOrder || '';
        this.children = listResponse.children
            ? listResponse.children.map(function (children) {
                return new _categorychildren_response_model__WEBPACK_IMPORTED_MODULE_0__["CategorychildrenResponseModel"](children);
            })
            : [];
    }
    return CategoryResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/categorychildren-response.model.ts":
/*!******************************************************************!*\
  !*** ./src/core/lists/models/categorychildren-response.model.ts ***!
  \******************************************************************/
/*! exports provided: CategorychildrenResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorychildrenResponseModel", function() { return CategorychildrenResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var CategorychildrenResponseModel = /** @class */ (function () {
    function CategorychildrenResponseModel(listResponse) {
        this.categoryId = listResponse.categoryId || '';
        this.image = listResponse.image || '';
        this.imagePath = listResponse.imagePath || '';
        this.isActive = listResponse.isActive || '';
        this.metaTagDescription = listResponse.metaTagDescription || '';
        this.metaTagKeyword = listResponse.metaTagKeyword || '';
        this.metaTagTitle = listResponse.metaTagTitle || '';
        this.name = listResponse.name || '';
        this.parentInt = listResponse.parentInt || '';
        this.sortOrder = listResponse.sortOrder || '';
        this.children = listResponse.children
            ? listResponse.children.map(function (children) {
                return new CategorychildrenResponseModel(children);
            })
            : [];
    }
    return CategorychildrenResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/contact-us-request.model.ts":
/*!***********************************************************!*\
  !*** ./src/core/lists/models/contact-us-request.model.ts ***!
  \***********************************************************/
/*! exports provided: ContactUsRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRequestModel", function() { return ContactUsRequestModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ContactUsRequestModel = /** @class */ (function () {
    function ContactUsRequestModel(contactRequest) {
        this.name = contactRequest.name || '';
        this.email = contactRequest.email || '';
        this.phoneNumber = contactRequest.phone || '';
        this.message = contactRequest.message || '';
    }
    return ContactUsRequestModel;
}());



/***/ }),

/***/ "./src/core/lists/models/country-response.model.ts":
/*!*********************************************************!*\
  !*** ./src/core/lists/models/country-response.model.ts ***!
  \*********************************************************/
/*! exports provided: CountryResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryResponseModel", function() { return CountryResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var CountryResponseModel = /** @class */ (function () {
    function CountryResponseModel(contactRequest) {
        this.countryId = contactRequest.countryId || '';
        this.isActive = contactRequest.isActive || '';
        this.isoCode2 = contactRequest.isoCode2 || '';
        this.isoCode3 = contactRequest.isoCode3 || '';
        this.name = contactRequest.name || '';
        this.postcodeRequired = contactRequest.postcodeRequired || '';
    }
    return CountryResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/manufacturer-response.model.ts":
/*!**************************************************************!*\
  !*** ./src/core/lists/models/manufacturer-response.model.ts ***!
  \**************************************************************/
/*! exports provided: ManufacturerResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerResponseModel", function() { return ManufacturerResponseModel; });
/*
 * spurtcommerce
* www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ManufacturerResponseModel = /** @class */ (function () {
    function ManufacturerResponseModel(listResponse) {
        this.manufacturerId = listResponse.manufacturerId || '';
        this.image = listResponse.image || '';
        this.imagePath = listResponse.imagePath || '';
        this.isActive = listResponse.isActive || '';
        this.name = listResponse.name || '';
        this.sortOrder = listResponse.sortOrder || '';
    }
    return ManufacturerResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/page-detail-response.ts":
/*!*******************************************************!*\
  !*** ./src/core/lists/models/page-detail-response.ts ***!
  \*******************************************************/
/*! exports provided: PageDetailResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDetailResponse", function() { return PageDetailResponse; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var PageDetailResponse = /** @class */ (function () {
    function PageDetailResponse(detailResponse) {
        this.content = detailResponse.content || '';
        this.createdBy = detailResponse.createdBy || '';
        this.createdDate = detailResponse.createdDate || '';
        this.intro = detailResponse.intro || '';
        this.isActive = detailResponse.isActive || '';
        this.metaTagContent = detailResponse.metaTagContent || '';
        this.metaTagKeyword = detailResponse.metaTagKeyword || '';
        this.metaTagTitle = detailResponse.metaTagTitle || '';
        this.modifiedBy = detailResponse.modifiedBy || '';
        this.modifiedDate = detailResponse.modifiedDate || '';
        this.pageGroupId = detailResponse.pageGroupId || '';
        this.pageId = detailResponse.pageId || '';
        this.sortOrder = detailResponse.sortOrder || '';
        this.title = detailResponse.title || '';
        this.viewPageCount = detailResponse.viewPageCount || '';
    }
    return PageDetailResponse;
}());



/***/ }),

/***/ "./src/core/lists/models/pagelist-response.model.ts":
/*!**********************************************************!*\
  !*** ./src/core/lists/models/pagelist-response.model.ts ***!
  \**********************************************************/
/*! exports provided: PagelistResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagelistResponseModel", function() { return PagelistResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var PagelistResponseModel = /** @class */ (function () {
    function PagelistResponseModel(detailResponse) {
        this.content = detailResponse.content || '';
        this.isActive = detailResponse.isActive || '';
        this.metaTagContent = detailResponse.metaTagContent || '';
        this.metaTagKeyword = detailResponse.metaTagKeyword || '';
        this.metaTagTitle = detailResponse.metaTagTitle || '';
        this.pageId = detailResponse.pageId || '';
        this.title = detailResponse.title || '';
        this.wishListStatus = detailResponse.wishListStatus || '';
    }
    return PagelistResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/product-detail-mandatory-response.model.ts":
/*!**************************************************************************!*\
  !*** ./src/core/lists/models/product-detail-mandatory-response.model.ts ***!
  \**************************************************************************/
/*! exports provided: ProductDetailMandatoryResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailMandatoryResponseModel", function() { return ProductDetailMandatoryResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ProductDetailMandatoryResponseModel = /** @class */ (function () {
    function ProductDetailMandatoryResponseModel(listResponse) {
        this.description = listResponse.description || '';
        this.Category = listResponse.Category || [];
        this.location = listResponse.location || '';
        this.dateAvailable = listResponse.dateAvailable || '';
        this.manufacturerId = listResponse.manufacturerId || '';
        this.metaTagTitle = listResponse.metaTagTitle || '';
        this.minimumQuantity = listResponse.minimumQuantity || '';
        this.name = listResponse.name || '';
        this.price = listResponse.price || '';
        this.productId = listResponse.productId || '';
        this.productImage = listResponse.productImage || [];
        this.quantity = listResponse.quantity || '';
        this.shipping = listResponse.shipping || '';
        this.sku = listResponse.sku || '';
        this.sortOrder = listResponse.sortOrder || '';
        this.stockStatusId = listResponse.stockStatusId || '';
        this.subtractStock = listResponse.subtractStock || '';
        this.upc = listResponse.upc || '';
    }
    return ProductDetailMandatoryResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/product-detail-response.model.ts":
/*!****************************************************************!*\
  !*** ./src/core/lists/models/product-detail-response.model.ts ***!
  \****************************************************************/
/*! exports provided: ProductDetailResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailResponseModel", function() { return ProductDetailResponseModel; });
/*
 * spurtcommerce
* www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ProductDetailResponseModel = /** @class */ (function () {
    function ProductDetailResponseModel(listResponse) {
        this.description = listResponse.description || '';
        this.Category = listResponse.Category || [];
        this.location = listResponse.location || '';
        this.dateAvailable = listResponse.dateAvailable || '';
        this.manufacturerId = listResponse.manufacturerId || '';
        this.metaTagTitle = listResponse.metaTagTitle || '';
        this.minimumQuantity = listResponse.minimumQuantity || '';
        this.name = listResponse.name || '';
        this.price = listResponse.price || '';
        this.productId = listResponse.productId || '';
        this.productImage = listResponse.productImage || [];
        this.quantity = listResponse.quantity || '';
        this.shipping = listResponse.shipping || '';
        this.sku = listResponse.sku || '';
        this.sortOrder = listResponse.sortOrder || '';
        this.stockStatusId = listResponse.stockStatusId || '';
        this.subtractStock = listResponse.subtractStock || '';
        this.upc = listResponse.upc || '';
        this.wishListStatus = listResponse.wishListStatus || 0;
    }
    return ProductDetailResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/products-response.model.ts":
/*!**********************************************************!*\
  !*** ./src/core/lists/models/products-response.model.ts ***!
  \**********************************************************/
/*! exports provided: ProductsResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsResponseModel", function() { return ProductsResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ProductsResponseModel = /** @class */ (function () {
    function ProductsResponseModel(listResponse) {
        this.condition = listResponse.condition || '';
        this.description = listResponse.description || '';
        this.dateAvailable = listResponse.dateAvailable || '';
        this.metaTagDescription = listResponse.metaTagDescription || '';
        this.metaTagKeyword = listResponse.metaTagKeyword || '';
        this.metaTagTitle = listResponse.metaTagTitle || '';
        this.name = listResponse.name || '';
        this.price = listResponse.price || '';
        this.regular = listResponse.regular || '';
        this.productId = listResponse.productId || '';
        this.Images = listResponse.Images || [];
        this.quantity = listResponse.quantity || '';
        this.shipping = listResponse.shipping || 0;
        this.sku = listResponse.sku || '';
        this.sortOrder = listResponse.sortOrder || '';
        this.stockStatusId = listResponse.stockStatusId || 0;
        this.subtractStock = listResponse.subtractStock || 0;
        this.wishListStatus = listResponse.wishListStatus || 0;
    }
    return ProductsResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/setting-response.model.ts":
/*!*********************************************************!*\
  !*** ./src/core/lists/models/setting-response.model.ts ***!
  \*********************************************************/
/*! exports provided: SettingResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingResponseModel", function() { return SettingResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var SettingResponseModel = /** @class */ (function () {
    function SettingResponseModel(detailResponse) {
        this.instagram = detailResponse.instagram || '';
        this.isActive = detailResponse.isActive || '';
        this.maintenanceMode = detailResponse.maintenanceMode || 0;
        this.metaTagDescription = detailResponse.metaTagDescription || '';
        this.metaTagKeyword = detailResponse.metaTagKeyword || '';
        this.metaTagTitle = detailResponse.metaTagTitle || '';
        this.modifiedBy = detailResponse.modifiedBy || '';
        this.modifiedDate = detailResponse.modifiedDate || '';
        this.orderStatus = detailResponse.orderStatus || '';
        this.settingsId = detailResponse.settingsId || '';
        this.storeAddress = detailResponse.storeAddress || '';
        this.storeEmail = detailResponse.storeEmail || '';
        this.storeFax = detailResponse.storeFax || '';
        this.storeImage = detailResponse.storeImage || '';
        this.storeImagePath = detailResponse.storeImagePath || '';
        this.storeLogo = detailResponse.storeLogo || '';
        this.storeLogoPath = detailResponse.storeLogoPath || '';
        this.storeName = detailResponse.storeName || '';
        this.storeOwner = detailResponse.storeOwner || '';
        this.storeTelephone = detailResponse.storeTelephone || '';
        this.twitter = detailResponse.twitter || '';
        this.url = detailResponse.url || '';
        this.zoneId = detailResponse.zoneId || '';
        this.countryId = detailResponse.countryId || '';
        this.createdBy = detailResponse.createdBy || '';
        this.createdDate = detailResponse.createdDate || '';
        this.metaTagKeyword = detailResponse.metaTagKeyword || '';
        this.metaTagTitle = detailResponse.metaTagTitle || '';
        this.facebook = detailResponse.facebook || '';
        this.google = detailResponse.google || '';
    }
    return SettingResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/subcategory.response.ts":
/*!*******************************************************!*\
  !*** ./src/core/lists/models/subcategory.response.ts ***!
  \*******************************************************/
/*! exports provided: SubcategoryResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryResponseModel", function() { return SubcategoryResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var SubcategoryResponseModel = /** @class */ (function () {
    function SubcategoryResponseModel(subcategoryresponse) {
        this.categoryId = subcategoryresponse.categoryId || '';
        this.parentInt = subcategoryresponse.parentInt || '';
        this.sortOrder = subcategoryresponse.sortOrder || '';
        this.levels = subcategoryresponse.levels || [];
        this.children = subcategoryresponse.children || [];
        this.image = subcategoryresponse.image || '';
        this.imagePath = subcategoryresponse.imagePath || '';
        this.metaTagDescription = subcategoryresponse.metaTagDescription || '';
        this.metaTagKeyword = subcategoryresponse.metaTagKeyword || '';
        this.name = subcategoryresponse.name || '';
    }
    return SubcategoryResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/today-deals-response.model.ts":
/*!*************************************************************!*\
  !*** ./src/core/lists/models/today-deals-response.model.ts ***!
  \*************************************************************/
/*! exports provided: TodayDealsResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayDealsResponseModel", function() { return TodayDealsResponseModel; });
var TodayDealsResponseModel = /** @class */ (function () {
    function TodayDealsResponseModel(todayDealsResponse) {
        this.productId = todayDealsResponse.productId || '';
        this.sku = todayDealsResponse.sku || '';
        this.upc = todayDealsResponse.name || '';
        this.location = todayDealsResponse.location || '';
        this.quantity = todayDealsResponse.quantity || '';
        this.minimumQuantity = todayDealsResponse.minimumQuantity || 0;
        this.subtractStock = todayDealsResponse.subtractStock || 0;
        this.stockStatusId = todayDealsResponse.stockStatusId || 0;
        this.manufacturerId = todayDealsResponse.manufacturerId || 0;
        this.shipping = todayDealsResponse.shipping || 0;
        this.todayDeals = todayDealsResponse.todayDeals || 0;
        this.price = todayDealsResponse.price || 0;
        this.dateAvailable = todayDealsResponse.dateAvailable || '';
        this.sortOrder = todayDealsResponse.sortOrder || 0;
        this.name = todayDealsResponse.name || '';
        this.description = todayDealsResponse.description || '';
        this.metaTagTitle = todayDealsResponse.metaTagTitle || '';
        this.isFeatured = todayDealsResponse.isFeatured || 0;
        this.isActive = todayDealsResponse.isActive || 0;
        this.image = todayDealsResponse.productImage;
        // this.Images = todayDealsResponse.Images ? new TodayDealImageModel(todayDealsResponse.Images) : null;
    }
    return TodayDealsResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/zone-response.model.ts":
/*!******************************************************!*\
  !*** ./src/core/lists/models/zone-response.model.ts ***!
  \******************************************************/
/*! exports provided: ZoneResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneResponseModel", function() { return ZoneResponseModel; });
/* harmony import */ var _zonecountry_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zonecountry-response.model */ "./src/core/lists/models/zonecountry-response.model.ts");
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var ZoneResponseModel = /** @class */ (function () {
    function ZoneResponseModel(state) {
        this.code = state.code || '';
        this.isActive = state.isActive || 0;
        this.name = state.name || '';
        this.country = new _zonecountry_response_model__WEBPACK_IMPORTED_MODULE_0__["ZoneCountryResponseModel"](state.country);
        this.zoneId = state.zoneId || '';
    }
    return ZoneResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/models/zonecountry-response.model.ts":
/*!*************************************************************!*\
  !*** ./src/core/lists/models/zonecountry-response.model.ts ***!
  \*************************************************************/
/*! exports provided: ZoneCountryResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneCountryResponseModel", function() { return ZoneCountryResponseModel; });
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ZoneCountryResponseModel = /** @class */ (function () {
    function ZoneCountryResponseModel(state) {
        this.addressFormat = state.addressFormat || '';
        this.countryId = state.countryId || '';
        this.createdDate = state.createdDate || '';
        this.isActive = state.isActive || 0;
        this.isoCode2 = state.isoCode2 || '';
        this.isoCode3 = state.isoCode3 || '';
        this.name = state.name || '';
        this.postcodeRequired = state.postcodeRequired || '';
    }
    return ZoneCountryResponseModel;
}());



/***/ }),

/***/ "./src/core/lists/reducer/lists.reducer.ts":
/*!*************************************************!*\
  !*** ./src/core/lists/reducer/lists.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, reducer, productList, activeCategoryID, maxProductPrice, getProductCount, productLoading, productLoaded, productFailed, categoryList, manufacturer, productDetail, productDetailMandatory, getAvailableOptionsArray, getBannerList, getListLoading, getListLoaded, getListFailed, getBannerCount, getCountLoading, getCountLoaded, getCountFailed, getChildBannerList, getChildListLoading, getChildListLoaded, getChildListFailed, getPageList, getPageListLoading, getPageListLoaded, getPageListFailed, getSettingDetail, getContactUsLoading, getContactUsLoaded, getContactUsFailed, getContactDetail, getPageDetailLoading, getPageDetailLoaded, getPageDetailFailed, getPageDetail, getManufacturerLoading, getManufacturerLoaded, getManufacturerFailed, getProductDetailLoading, getProductDetailLoaded, getProductDetailFailed, getCountryList, getCountryLoading, getCountryLoaded, getCountryFailed, getZoneList, getZoneLoading, getZoneLoaded, getZoneFailed, getTodayDealList, getTodayDealLoading, getTodayDealLoaded, getTodayDealFailed, getPriceLoading, subCategoryList, subCategoryLoading, subCategoryLoaded, selectedCategoryId, getSymbolSetting, getAdvertisementProductList, getAdvertisementProductListLoading, getAdvertisementProductListLoaded, getAdvertisementProductListFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productList", function() { return productList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeCategoryID", function() { return activeCategoryID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxProductPrice", function() { return maxProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCount", function() { return getProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productLoading", function() { return productLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productLoaded", function() { return productLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFailed", function() { return productFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryList", function() { return categoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturer", function() { return manufacturer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetail", function() { return productDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetailMandatory", function() { return productDetailMandatory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableOptionsArray", function() { return getAvailableOptionsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerList", function() { return getBannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListLoading", function() { return getListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListLoaded", function() { return getListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFailed", function() { return getListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannerCount", function() { return getBannerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountLoading", function() { return getCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountLoaded", function() { return getCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountFailed", function() { return getCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildBannerList", function() { return getChildBannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildListLoading", function() { return getChildListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildListLoaded", function() { return getChildListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildListFailed", function() { return getChildListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageList", function() { return getPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageListLoading", function() { return getPageListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageListLoaded", function() { return getPageListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageListFailed", function() { return getPageListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingDetail", function() { return getSettingDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactUsLoading", function() { return getContactUsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactUsLoaded", function() { return getContactUsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactUsFailed", function() { return getContactUsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactDetail", function() { return getContactDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageDetailLoading", function() { return getPageDetailLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageDetailLoaded", function() { return getPageDetailLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageDetailFailed", function() { return getPageDetailFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageDetail", function() { return getPageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerLoading", function() { return getManufacturerLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerLoaded", function() { return getManufacturerLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturerFailed", function() { return getManufacturerFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailLoading", function() { return getProductDetailLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailLoaded", function() { return getProductDetailLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailFailed", function() { return getProductDetailFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryList", function() { return getCountryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryLoading", function() { return getCountryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryLoaded", function() { return getCountryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryFailed", function() { return getCountryFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneList", function() { return getZoneList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneLoading", function() { return getZoneLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneLoaded", function() { return getZoneLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneFailed", function() { return getZoneFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayDealList", function() { return getTodayDealList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayDealLoading", function() { return getTodayDealLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayDealLoaded", function() { return getTodayDealLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayDealFailed", function() { return getTodayDealFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriceLoading", function() { return getPriceLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryList", function() { return subCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryLoading", function() { return subCategoryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryLoaded", function() { return subCategoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedCategoryId", function() { return selectedCategoryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolSetting", function() { return getSymbolSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdvertisementProductList", function() { return getAdvertisementProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdvertisementProductListLoading", function() { return getAdvertisementProductListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdvertisementProductListLoaded", function() { return getAdvertisementProductListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdvertisementProductListFailed", function() { return getAdvertisementProductListFailed; });
/* harmony import */ var _action_lists_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/lists.action */ "./src/core/lists/action/lists.action.ts");
/* harmony import */ var _lists_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists.state */ "./src/core/lists/reducer/lists.state.ts");
/* harmony import */ var _models_banner_list_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/banner-list-response.model */ "./src/core/lists/models/banner-list-response.model.ts");
/* harmony import */ var _models_page_detail_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/page-detail-response */ "./src/core/lists/models/page-detail-response.ts");
/* harmony import */ var _models_products_response_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/products-response.model */ "./src/core/lists/models/products-response.model.ts");
/* harmony import */ var _models_category_response_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/category-response.model */ "./src/core/lists/models/category-response.model.ts");
/* harmony import */ var _models_manufacturer_response_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/manufacturer-response.model */ "./src/core/lists/models/manufacturer-response.model.ts");
/* harmony import */ var _models_product_detail_response_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/product-detail-response.model */ "./src/core/lists/models/product-detail-response.model.ts");
/* harmony import */ var _models_pagelist_response_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/pagelist-response.model */ "./src/core/lists/models/pagelist-response.model.ts");
/* harmony import */ var _models_setting_response_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/setting-response.model */ "./src/core/lists/models/setting-response.model.ts");
/* harmony import */ var _models_country_response_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/country-response.model */ "./src/core/lists/models/country-response.model.ts");
/* harmony import */ var _models_zone_response_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/zone-response.model */ "./src/core/lists/models/zone-response.model.ts");
/* harmony import */ var _models_today_deals_response_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/today-deals-response.model */ "./src/core/lists/models/today-deals-response.model.ts");
/* harmony import */ var _models_product_detail_mandatory_response_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/product-detail-mandatory-response.model */ "./src/core/lists/models/product-detail-mandatory-response.model.ts");
/* harmony import */ var _models_subcategory_response__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/subcategory.response */ "./src/core/lists/models/subcategory.response.ts");
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */















var initialState = new _lists_state__WEBPACK_IMPORTED_MODULE_1__["listsRecord"]();
function reducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    if (!type) {
        return state;
    }
    switch (type) {
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PRODUCT_LIST: {
            if (payload.refresh === false) {
                return Object.assign({}, state, {
                    priceLoading: true,
                    productLoading: false,
                    productLoaded: false,
                    productFailed: false
                });
            }
            else {
                return Object.assign({}, state, {
                    productLoading: true,
                    productLoaded: false,
                    productFailed: false,
                    products: []
                });
            }
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_LIST_SUCCESS: {
            var tempProduct = payload.data.map(function (product) {
                var productLists = new _models_products_response_model__WEBPACK_IMPORTED_MODULE_4__["ProductsResponseModel"](product);
                return productLists;
            });
            for (var i = 0; i < tempProduct.length; i++) {
                if (tempProduct[i].pricerefer) {
                    var tempPrice = tempProduct[i].pricerefer.split('.');
                    var subractPrice = tempPrice[0] - tempProduct[i].price;
                    if (subractPrice < 0) {
                        subractPrice = subractPrice / -1;
                    }
                    var dividePrice = tempProduct[i].price / 100;
                    var sumPrice = subractPrice / dividePrice;
                    var sumPriceInString = sumPrice.toString();
                    var percentage = sumPriceInString.split('.');
                    tempProduct[i].discount = percentage[0];
                }
            }
            return Object.assign({}, state, {
                priceLoading: false,
                productLoading: false,
                productLoaded: true,
                productFailed: false,
                products: tempProduct
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_LIST_FAIL: {
            return Object.assign({}, state, {
                priceLoading: false,
                productLoading: false,
                productLoaded: true,
                productFailed: true
            });
        }
        /**Active category  make selected category active and expanded
         * **/
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ACTIVE_CATEGORY: {
            var tempsubCategoryID = void 0;
            var childrenArray = void 0;
            var selectedCategoryID = parseInt(payload, 10);
            if (state.category && payload) {
                for (var i = 0; i < state.category.length; i++) {
                    childrenArray = state.category[i].children;
                    if (childrenArray[0]) {
                        for (var j = 0; j < childrenArray.length; j++) {
                            for (var k = 0; k < childrenArray[j].children.length; k++) {
                                if (childrenArray[j].children[k].categoryId === selectedCategoryID) {
                                    tempsubCategoryID = childrenArray[j].categoryId;
                                }
                            }
                        }
                    }
                }
            }
            else {
                tempsubCategoryID = {};
            }
            return Object.assign({}, state, {
                activeCategoryLoading: true,
                activeCategoryLoaded: false,
                activeCategoryFailed: false,
                activeCategoryID: tempsubCategoryID
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].REMOVE_ACTIVE_CATEGORYID: {
            return Object.assign({}, state, {
                activeCategoryID: ''
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PRODUCT_COUNT: {
            return Object.assign({}, state, {});
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                productCount: payload.data.productCount,
                maxProductPrice: payload.data.maximumProductPrice
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_COUNT_FAIL: {
            return Object.assign({}, state, {});
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CATEGORY_LIST: {
            return Object.assign({}, state, {
                categoryLoading: true,
                categoryLoaded: false,
                categoryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CATEGORY_LIST_SUCCESS: {
            var tempCategory = payload.data.map(function (category) {
                var categoryLists = new _models_category_response_model__WEBPACK_IMPORTED_MODULE_5__["CategoryResponseModel"](category);
                return categoryLists;
            });
            return Object.assign({}, state, {
                category: tempCategory,
                categoryLoading: false,
                categoryLoaded: true,
                categoryFailed: false,
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CATEGORY_LIST_FAIL: {
            return Object.assign({}, state, {
                categoryLoading: false,
                categoryLoaded: true,
                categoryFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_MANUFACTURER_LIST: {
            return Object.assign({}, state, {
                manufacturerLoading: true,
                manufacturerLoaded: false,
                manufacturerFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].MANUFACTURER_LIST_SUCCESS: {
            var tempBrand = payload.data.map(function (brand) {
                var tempList = new _models_manufacturer_response_model__WEBPACK_IMPORTED_MODULE_6__["ManufacturerResponseModel"](brand);
                return tempList;
            });
            return Object.assign({}, state, {
                manufacturer: tempBrand,
                manufacturerLoading: false,
                manufacturerLoaded: true,
                manufacturerFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].MANUFACTURER_LIST_FAIL: {
            return Object.assign({}, state, {
                manufacturerLoading: false,
                manufacturerLoaded: true,
                manufacturerFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PRODUCT_DETAIL: {
            var productdetail = new _models_product_detail_response_model__WEBPACK_IMPORTED_MODULE_7__["ProductDetailResponseModel"]({});
            return Object.assign({}, state, {
                productDetail: null,
                productDetailLoading: true,
                productDetailLoaded: false,
                productDetailFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_DETAIL_SUCCESS: {
            var productdetail = new _models_product_detail_response_model__WEBPACK_IMPORTED_MODULE_7__["ProductDetailResponseModel"](payload.data);
            return Object.assign({}, state, {
                productDetail: productdetail,
                productDetailLoading: false,
                productDetailLoaded: true,
                productDetailFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_DETAIL_FAIL: {
            return Object.assign({}, state, {
                productDetailLoading: false,
                productDetailLoaded: true,
                productDetailFailed: true
            });
        }
        // product detail mandatory details
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PRODUCT_DETAIL_MANDATORY: {
            var productdetail = new _models_product_detail_response_model__WEBPACK_IMPORTED_MODULE_7__["ProductDetailResponseModel"]({});
            return Object.assign({}, state, {
                productDetailMandatory: productdetail,
                productDetailMandatoryLoading: true,
                productDetailMandatoryLoaded: false,
                productDetailMandatoryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_DETAIL_MANDATORY_SUCCESS: {
            var productdetailMandatory = new _models_product_detail_mandatory_response_model__WEBPACK_IMPORTED_MODULE_13__["ProductDetailMandatoryResponseModel"](payload.data[0]);
            return Object.assign({}, state, {
                productDetailMandatory: productdetailMandatory,
                productDetailMandatoryLoading: false,
                productDetailMandatoryLoaded: true,
                productDetailMandatoryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].PRODUCT_DETAIL_MANDATORY_FAIL: {
            return Object.assign({}, state, {
                productDetailMandatoryLoading: false,
                productDetailMandatoryLoaded: true,
                productDetailMandatoryFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_AVAILABLE_VALUE: {
            var tempArray = [];
            return Object.assign({}, state, {
                availableOptionsArray: tempArray,
                availableValueLoading: true,
                availableValueLoaded: false,
                availableValueFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_BANNER_LIST: {
            return Object.assign({}, state, {
                bannerLoading: true,
                bannerLoaded: false,
                bannerFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_BANNER_LIST_SUCCESS: {
            var bannerModel = payload.data.map(function (_list) {
                var tempModel = new _models_banner_list_response_model__WEBPACK_IMPORTED_MODULE_2__["BannerListResponseModel"](_list);
                return tempModel;
            });
            return Object.assign({}, state, {
                bannerList: bannerModel,
                bannerLoading: false,
                bannerLoaded: true,
                bannerFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_BANNER_LIST_FAIL: {
            return Object.assign({}, state, {
                bannerLoading: false,
                bannerLoaded: true,
                bannerFailed: true
            });
        }
        // child banner
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CHILD_BANNER_LIST: {
            return Object.assign({}, state, {
                childBannerLoading: true,
                childBannerLoaded: false,
                childBannerFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CHILD_BANNER_LIST_SUCCESS: {
            var bannerModel = payload.data.map(function (_list) {
                var tempModel = new _models_banner_list_response_model__WEBPACK_IMPORTED_MODULE_2__["BannerListResponseModel"](_list);
                return tempModel;
            });
            return Object.assign({}, state, {
                childBannerList: bannerModel,
                childBannerLoading: false,
                childBannerLoaded: true,
                childBannerFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_CHILD_BANNER_LIST_FAIL: {
            return Object.assign({}, state, {
                childBannerLoading: false,
                childBannerLoaded: true,
                childBannerFailed: true
            });
        }
        // ************
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_BANNER_LIST_COUNT: {
            return Object.assign({}, state, {
                countLoading: true,
                countLoaded: false,
                countFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_BANNER_LIST_COUNT_SUCCESS: {
            return Object.assign({}, state, {
                bannerCount: payload.data,
                countLoading: false,
                countLoaded: true,
                countFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_BANNER_LIST_COUNT_FAIL: {
            return Object.assign({}, state, {
                countLoading: false,
                countLoaded: true,
                countFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PAGE_LIST: {
            return Object.assign({}, state, {
                pageListLoading: true,
                pageListLoaded: false,
                pageListFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PAGE_LIST_SUCCESS: {
            var tempList = payload.data.map(function (list) {
                var tempObject = new _models_pagelist_response_model__WEBPACK_IMPORTED_MODULE_8__["PagelistResponseModel"](list);
                return tempObject;
            });
            return Object.assign({}, state, {
                pageList: tempList,
                pageListLoading: false,
                pageListLoaded: true,
                pageListFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PAGE_LIST_FAIL: {
            return Object.assign({}, state, {
                pageListLoading: false,
                pageListLoaded: true,
                pageListFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_CONTACT_US_ACTION: {
            return Object.assign({}, state, {
                contactUsLoading: true,
                contactusLoaded: false,
                contactusFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_CONTACT_US_SUCCESS_ACTION: {
            return Object.assign({}, state, {
                contactDetail: payload,
                contactUsLoading: false,
                contactusLoaded: true,
                contactusFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_CONTACT_US_FAIL_ACTION: {
            return Object.assign({}, state, {
                contactUsLoading: false,
                contactusLoaded: true,
                contactusFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PAGE_DETAIL: {
            return Object.assign({}, state, {
                pageDetailLoading: true,
                pageDetailLoaded: false,
                pageDetailFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PAGE_DETAIL_SUCCESS: {
            var tempModel = new _models_page_detail_response__WEBPACK_IMPORTED_MODULE_3__["PageDetailResponse"](payload.data);
            return Object.assign({}, state, {
                pageDetail: tempModel,
                pageDetailLoading: false,
                pageDetailLoaded: true,
                pageDetailFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_PAGE_DETAIL_FAIL: {
            return Object.assign({}, state, {
                pageDetailLoading: false,
                pageDetailLoaded: true,
                pageDetailFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_SETTINGS_ACTION: {
            return Object.assign({}, state, {});
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_SETTINGS_SUCCESS_ACTION: {
            var tempSetting = new _models_setting_response_model__WEBPACK_IMPORTED_MODULE_9__["SettingResponseModel"](payload.data[0]);
            var setting = payload.data[0];
            var symbolsettings = {};
            if (setting.symbolLeft !== null) {
                symbolsettings = { position: 'left', symbol: setting.symbolLeft };
            }
            else if (setting.symbolRight !== null) {
                symbolsettings = { position: 'right', symbol: setting.symbolRight };
            }
            else {
                symbolsettings = { position: 'left', symbol: setting.symbolLeft };
            }
            return Object.assign({}, state, {
                settingDetail: tempSetting,
                symbolSetting: symbolsettings
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_SETTINGS_FAIL_ACTION: {
            return Object.assign({}, state, {});
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_COUNTRY_LIST: {
            return Object.assign({}, state, {
                countryLoading: true,
                countryLoaded: false,
                countryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_COUNTRY_LIST_SUCCESS: {
            var tempList = payload.data.map(function (list) {
                var tempObject = new _models_country_response_model__WEBPACK_IMPORTED_MODULE_10__["CountryResponseModel"](list);
                return tempObject;
            });
            return Object.assign({}, state, {
                countryList: tempList,
                countryLoading: false,
                countryLoaded: true,
                countryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_COUNTRY_LIST_FAIL: {
            return Object.assign({}, state, {
                countryLoading: false,
                countryLoaded: true,
                countryFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ZONE_LIST_SUCCESS: {
            var tempList = payload.data.map(function (list) {
                var tempObject = new _models_zone_response_model__WEBPACK_IMPORTED_MODULE_11__["ZoneResponseModel"](list);
                return tempObject;
            });
            return Object.assign({}, state, {
                zoneList: tempList,
                zoneLoading: false,
                zoneLoaded: true,
                zoneFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ZONE_LIST_FAIL: {
            return Object.assign({}, state, {
                zoneLoading: false,
                zoneLoaded: true,
                zoneFailed: true
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_TODAY_DEALS: {
            return Object.assign({}, state, {
                todayDealLoading: true,
                todayDealLoaded: false,
                todayDealFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_TODAY_DEALS_SUCCESS: {
            var tempList = payload.data.map(function (list) {
                var tempObject = new _models_today_deals_response_model__WEBPACK_IMPORTED_MODULE_12__["TodayDealsResponseModel"](list);
                return tempObject;
            });
            for (var i = 0; i < tempList.length; i++) {
                if (tempList[i].pricerefer) {
                    var tempPrice = tempList[i].pricerefer.split('.');
                    var subractPrice = tempPrice[0] - tempList[i].price;
                    if (subractPrice < 0) {
                        subractPrice = subractPrice / -1;
                    }
                    var dividePrice = tempList[i].price / 100;
                    var sumPrice = subractPrice / dividePrice;
                    var sumPriceInString = sumPrice.toString();
                    var percentage = sumPriceInString.split('.');
                    tempList[i].discount = percentage[0];
                }
            }
            return Object.assign({}, state, {
                todayDeal: tempList,
                todayDealLoading: false,
                todayDealLoaded: true,
                todayDealFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_TODAY_DEALS_FAIL: {
            return Object.assign({}, state, {
                todayDealLoading: false,
                todayDealLoaded: true,
                todayDealFailed: true
            });
        }
        // subcategory
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_SubCATEGORY_LIST: {
            return Object.assign({}, state, {
                SelectedcategoryId: payload.CategoryId,
                subcategoryLoading: true,
                subcategoryLoaded: false,
                subcategoryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_SubCATEGORY_LIST_SUCCESS: {
            var tempList = payload.data.children.map(function (list) {
                var tempObject = new _models_subcategory_response__WEBPACK_IMPORTED_MODULE_14__["SubcategoryResponseModel"](list);
                return tempObject;
            });
            return Object.assign({}, state, {
                subcategory: tempList,
                subcategoryLoading: false,
                subcategoryLoaded: true,
                subcategoryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_SubCATEGORY_LIST_FAIL: {
            return Object.assign({}, state, {
                subcategoryLoading: false,
                subcategoryLoaded: true,
                subcategoryFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ADVERTISEMENT_PRODUCT_LIST: {
            return Object.assign({}, state, {
                advertisementProductList: state,
                advertisementProductListLoading: false,
                advertisementProductListLoaded: true,
                advertisementProductListFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ADVERTISEMENT_PRODUCT_LIST_SUCCESS: {
            var bannerModel = payload.data.map(function (_list) {
                var tempModel = new _models_banner_list_response_model__WEBPACK_IMPORTED_MODULE_2__["BannerListResponseModel"](_list);
                return tempModel;
            });
            return Object.assign({}, state, {
                advertisementProductList: bannerModel,
                advertisementProductListLoading: false,
                advertisementProductListLoaded: true,
                advertisementProductListFailed: false
            });
        }
        case _action_lists_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].GET_ADVERTISEMENT_PRODUCT_LIST_FAIL: {
            return Object.assign({}, state, {
                advertisementProductListLoading: false,
                advertisementProductListLoaded: true,
                advertisementProductListFailed: true
            });
        }
        default: {
            return state;
        }
    }
}
var productList = function (state) { return state.products; };
var activeCategoryID = function (state) { return state.activeCategoryID; };
var maxProductPrice = function (state) { return state.maxProductPrice; };
var getProductCount = function (state) { return state.productCount; };
var productLoading = function (state) { return state.productLoading; };
var productLoaded = function (state) { return state.productLoaded; };
var productFailed = function (state) { return state.productFailed; };
var categoryList = function (state) { return state.category; };
var manufacturer = function (state) { return state.manufacturer; };
var productDetail = function (state) { return state.productDetail; };
var productDetailMandatory = function (state) {
    return state.productDetailMandatory;
};
var getAvailableOptionsArray = function (state) {
    return state.availableOptionsArray;
};
var getBannerList = function (state) { return state.bannerList; };
var getListLoading = function (state) { return state.bannerLoading; };
var getListLoaded = function (state) { return state.bannerLoaded; };
var getListFailed = function (state) { return state.bannerFailed; };
var getBannerCount = function (state) { return state.bannerCount; };
var getCountLoading = function (state) { return state.countLoading; };
var getCountLoaded = function (state) { return state.countLoaded; };
var getCountFailed = function (state) { return state.countFailed; };
// Child banner
var getChildBannerList = function (state) { return state.childBannerList; };
var getChildListLoading = function (state) { return state.childBannerLoading; };
var getChildListLoaded = function (state) { return state.childBannerLoaded; };
var getChildListFailed = function (state) { return state.childBannerFailed; };
// -------------
var getPageList = function (state) { return state.pageList; };
var getPageListLoading = function (state) { return state.pageListLoading; };
var getPageListLoaded = function (state) { return state.pageListLoaded; };
var getPageListFailed = function (state) { return state.pageListFailed; };
var getSettingDetail = function (state) { return state.settingDetail; };
var getContactUsLoading = function (state) { return state.contactUsLoading; };
var getContactUsLoaded = function (state) { return state.contactusLoaded; };
var getContactUsFailed = function (state) { return state.contactusFailed; };
var getContactDetail = function (state) { return state.contactDetail; };
var getPageDetailLoading = function (state) {
    return state.pageDetailLoading;
};
var getPageDetailLoaded = function (state) {
    return state.pageDetailLoaded;
};
var getPageDetailFailed = function (state) {
    return state.pageDetailFailed;
};
var getPageDetail = function (state) { return state.pageDetail; };
var getManufacturerLoading = function (state) {
    return state.manufacturerLoading;
};
var getManufacturerLoaded = function (state) {
    return state.manufacturerLoaded;
};
var getManufacturerFailed = function (state) {
    return state.manufacturerFailed;
};
var getProductDetailLoading = function (state) {
    return state.productDetailLoading;
};
var getProductDetailLoaded = function (state) {
    return state.productDetailLoaded;
};
var getProductDetailFailed = function (state) {
    return state.productDetailFailed;
};
var getCountryList = function (state) { return state.countryList; };
var getCountryLoading = function (state) { return state.countryLoading; };
var getCountryLoaded = function (state) { return state.countryLoaded; };
var getCountryFailed = function (state) { return state.countryFailed; };
var getZoneList = function (state) { return state.zoneList; };
var getZoneLoading = function (state) { return state.zoneLoading; };
var getZoneLoaded = function (state) { return state.zoneLoaded; };
var getZoneFailed = function (state) { return state.zoneFailed; };
var getTodayDealList = function (state) { return state.todayDeal; };
var getTodayDealLoading = function (state) {
    return state.todayDealLoading;
};
var getTodayDealLoaded = function (state) { return state.todayDealLoaded; };
var getTodayDealFailed = function (state) { return state.todayDealFailed; };
var getPriceLoading = function (state) { return state.priceLoading; };
var subCategoryList = function (state) { return state.subcategory; };
var subCategoryLoading = function (state) {
    return state.subcategoryLoading;
};
var subCategoryLoaded = function (state) { return state.subcategoryLoaded; };
var selectedCategoryId = function (state) {
    return state.SelectedcategoryId;
};
var getSymbolSetting = function (state) { return state.symbolSetting; };
var getAdvertisementProductList = function (state) { return state.advertisementProductList; };
var getAdvertisementProductListLoading = function (state) { return state.advertisementProductListLoading; };
var getAdvertisementProductListLoaded = function (state) { return state.advertisementProductListLoaded; };
var getAdvertisementProductListFailed = function (state) { return state.advertisementProductListFailed; };


/***/ }),

/***/ "./src/core/lists/reducer/lists.selector.ts":
/*!**************************************************!*\
  !*** ./src/core/lists/reducer/lists.selector.ts ***!
  \**************************************************/
/*! exports provided: getState, getProductList, getactiveCategoryID, getMaxProductPrice, getProductCount, getCategoryList, getManufacturer, getProductDetail, getproductDetailMandatory, getProductLoading, getProductLoaded, getProductFailed, getAvailableOptionsArray, bannerList, bannerLoadingStatus, bannerLoadedStatus, bannerFailedStatus, bannerCount, childBannerList, childBannerLoadingStatus, childBannerLoadedStatus, childBannerFailedStatus, advertisementProductList, advertisementProductListLoading, advertisementProductListLoadedStatus, advertisementProductListFailedStatus, countLoadingStatus, countLoadedStatus, countFailedStatus, getPageList, pageListLoadingStatus, pageListLoadedStatus, pageListFailedStatus, settingDetail, contactUsLoadingStatus, contactUsLoadedStatus, contactUsFailedStatus, getContactDetail, pageDetailLoadingStatus, pageDetailLoadedStatus, pageDetailFailedStatus, pageDetail, manufacturerLoadingStatus, manufacturerLoadedStatus, manufacturerFailedStatus, productDetailLoadingStatus, productDetailLoadedStatus, productDetailFailedStatus, countryList, countryLoading, countryLoaded, countryFailed, zoneList, zoneLoading, zoneLoaded, zoneFailed, todayDealList, todayDealLoading, todayDealLoaded, todayDealFailed, priceLoading, subCategoryList, subCategoryLoading, subCategoryLoaded, subCategoryID, symbolSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductList", function() { return getProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getactiveCategoryID", function() { return getactiveCategoryID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxProductPrice", function() { return getMaxProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCount", function() { return getProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryList", function() { return getCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManufacturer", function() { return getManufacturer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getproductDetailMandatory", function() { return getproductDetailMandatory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductLoading", function() { return getProductLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductLoaded", function() { return getProductLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFailed", function() { return getProductFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableOptionsArray", function() { return getAvailableOptionsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerList", function() { return bannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerLoadingStatus", function() { return bannerLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerLoadedStatus", function() { return bannerLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerFailedStatus", function() { return bannerFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerCount", function() { return bannerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childBannerList", function() { return childBannerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childBannerLoadingStatus", function() { return childBannerLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childBannerLoadedStatus", function() { return childBannerLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childBannerFailedStatus", function() { return childBannerFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advertisementProductList", function() { return advertisementProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advertisementProductListLoading", function() { return advertisementProductListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advertisementProductListLoadedStatus", function() { return advertisementProductListLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advertisementProductListFailedStatus", function() { return advertisementProductListFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countLoadingStatus", function() { return countLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countLoadedStatus", function() { return countLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countFailedStatus", function() { return countFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageList", function() { return getPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageListLoadingStatus", function() { return pageListLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageListLoadedStatus", function() { return pageListLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageListFailedStatus", function() { return pageListFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingDetail", function() { return settingDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactUsLoadingStatus", function() { return contactUsLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactUsLoadedStatus", function() { return contactUsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactUsFailedStatus", function() { return contactUsFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactDetail", function() { return getContactDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDetailLoadingStatus", function() { return pageDetailLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDetailLoadedStatus", function() { return pageDetailLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDetailFailedStatus", function() { return pageDetailFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDetail", function() { return pageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerLoadingStatus", function() { return manufacturerLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerLoadedStatus", function() { return manufacturerLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacturerFailedStatus", function() { return manufacturerFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetailLoadingStatus", function() { return productDetailLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetailLoadedStatus", function() { return productDetailLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDetailFailedStatus", function() { return productDetailFailedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryLoading", function() { return countryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryLoaded", function() { return countryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryFailed", function() { return countryFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneLoading", function() { return zoneLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneLoaded", function() { return zoneLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneFailed", function() { return zoneFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayDealList", function() { return todayDealList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayDealLoading", function() { return todayDealLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayDealLoaded", function() { return todayDealLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayDealFailed", function() { return todayDealFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceLoading", function() { return priceLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryList", function() { return subCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryLoading", function() { return subCategoryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryLoaded", function() { return subCategoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subCategoryID", function() { return subCategoryID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolSetting", function() { return symbolSetting; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _lists_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists.reducer */ "./src/core/lists/reducer/lists.reducer.ts");
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var getState = function (State) { return State.list; };
var getProductList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["productList"]);
var getactiveCategoryID = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["activeCategoryID"]);
var getMaxProductPrice = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["maxProductPrice"]);
var getProductCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCount"]);
var getCategoryList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["categoryList"]);
var getManufacturer = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["manufacturer"]);
var getProductDetail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["productDetail"]);
var getproductDetailMandatory = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["productDetailMandatory"]);
var getProductLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["productLoading"]);
var getProductLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["productLoaded"]);
var getProductFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["productFailed"]);
var getAvailableOptionsArray = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getAvailableOptionsArray"]);
var bannerList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getBannerList"]);
var bannerLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getListLoading"]);
var bannerLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getListLoaded"]);
var bannerFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getListFailed"]);
var bannerCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getBannerCount"]);
// Child banner
var childBannerList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getChildBannerList"]);
var childBannerLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getChildListLoading"]);
var childBannerLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getChildListLoaded"]);
var childBannerFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getChildListFailed"]);
// start get advertisement product list
var advertisementProductList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getAdvertisementProductList"]);
var advertisementProductListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getAdvertisementProductListLoading"]);
var advertisementProductListLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getAdvertisementProductListLoaded"]);
var advertisementProductListFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getAdvertisementProductListFailed"]);
// end
var countLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getCountLoading"]);
var countLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getCountLoaded"]);
var countFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getCountFailed"]);
var getPageList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageList"]);
var pageListLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageListLoading"]);
var pageListLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageListLoaded"]);
var pageListFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageListFailed"]);
var settingDetail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getSettingDetail"]);
var contactUsLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getContactUsLoading"]);
var contactUsLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getContactUsLoaded"]);
var contactUsFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getContactUsFailed"]);
var getContactDetail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getContactDetail"]);
var pageDetailLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageDetailLoading"]);
var pageDetailLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageDetailLoaded"]);
var pageDetailFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageDetailFailed"]);
var pageDetail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPageDetail"]);
var manufacturerLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerLoading"]);
var manufacturerLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerLoaded"]);
var manufacturerFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getManufacturerFailed"]);
var productDetailLoadingStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDetailLoading"]);
var productDetailLoadedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDetailLoaded"]);
var productDetailFailedStatus = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductDetailFailed"]);
var countryList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getCountryList"]);
var countryLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getCountryLoading"]);
var countryLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getCountryLoaded"]);
var countryFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getCountryFailed"]);
var zoneList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getZoneList"]);
var zoneLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getZoneLoading"]);
var zoneLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getZoneLoaded"]);
var zoneFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getZoneFailed"]);
var todayDealList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getTodayDealList"]);
var todayDealLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getTodayDealLoading"]);
var todayDealLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getTodayDealLoaded"]);
var todayDealFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getTodayDealFailed"]);
var priceLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getPriceLoading"]);
var subCategoryList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["subCategoryList"]);
var subCategoryLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["subCategoryLoading"]);
var subCategoryLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["subCategoryLoaded"]);
var subCategoryID = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["selectedCategoryId"]);
var symbolSetting = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _lists_reducer__WEBPACK_IMPORTED_MODULE_1__["getSymbolSetting"]);


/***/ }),

/***/ "./src/core/lists/reducer/lists.state.ts":
/*!***********************************************!*\
  !*** ./src/core/lists/reducer/lists.state.ts ***!
  \***********************************************/
/*! exports provided: listsRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listsRecord", function() { return listsRecord; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/*
 * spurtcommerce
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var listsRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
    products: [],
    maxProductPrice: {},
    productCount: 0,
    category: [],
    manufacturer: [],
    productDetail: {},
    productDetailMandatory: {},
    productLoading: false,
    productLoaded: false,
    productFailed: false,
    availableOptionsArray: [],
    bannerList: [],
    bannerLoading: false,
    bannerLoaded: false,
    bannerFailed: false,
    bannerCount: 0,
    countLoading: false,
    countLoaded: false,
    countFailed: false,
    pageList: [],
    pageListLoading: false,
    pageListLoaded: false,
    pageListFailed: false,
    settingDetail: [],
    contactUsLoading: false,
    contactusLoaded: false,
    contactusFailed: false,
    contactDetail: {},
    pageDetailLoading: false,
    pageDetailLoaded: false,
    pageDetailFailed: false,
    pageDetail: {},
    manufacturerLoading: false,
    manufacturerLoaded: false,
    manufacturerFailed: false,
    productDetailLoading: false,
    productDetailLoaded: false,
    productDetailFailed: false,
    countryList: [],
    countryLoading: false,
    countryLoaded: false,
    countryFailed: false,
    zoneList: [],
    zoneLoading: false,
    zoneLoaded: false,
    zoneFailed: false,
    todayDeal: [],
    todayDealLoading: false,
    todayDealLoaded: false,
    todayDealFailed: false,
    priceLoading: false,
    serviceCategory: [],
    serviceListLoading: false,
    serviceListLoaded: false,
    serviceListFailed: false,
    serviceList: [],
    enquiryLoading: false,
    enquiryLoaded: false,
    enquiryFailed: false,
    enquirySuccess: {},
    activeCategoryID: '',
    subcategory: {},
    subcategoryLoading: false,
    subcategoryLoaded: false,
    subcategoryFailed: false,
    SelectedcategoryId: '',
    symbolSetting: {},
    advertisementProductList: [],
    advertisementProductListLoading: false,
    advertisementProductListLoaded: false,
    advertisementProductListFailed: false,
});


/***/ }),

/***/ "./src/core/product-control/action/product-control.action.ts":
/*!*******************************************************************!*\
  !*** ./src/core/product-control/action/product-control.action.ts ***!
  \*******************************************************************/
/*! exports provided: ActionTypes, AddtoWishlist, AddtoWishlistSuccess, AddtoWishlistFail, CartHandleAction, DoCheckoutAction, CheckoutActionSuccess, CheckoutActionFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtoWishlist", function() { return AddtoWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtoWishlistSuccess", function() { return AddtoWishlistSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtoWishlistFail", function() { return AddtoWishlistFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartHandleAction", function() { return CartHandleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoCheckoutAction", function() { return DoCheckoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutActionSuccess", function() { return CheckoutActionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutActionFail", function() { return CheckoutActionFail; });
/* harmony import */ var _shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utility/utilityHelpers */ "./src/core/shared/utility/utilityHelpers.ts");

var ActionTypes = {
    ADD_TO_WISHLIST: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] add to wishlist'),
    ADD_TO_WISHLIST_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] add to wishlist success'),
    ADD_TO_WISHLIST_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] add to wishlist fail'),
    GET_PAYMENT_SETTINGS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[payment] get payment type'),
    GET_PAYMENT_SETTINGS_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[payment] get payment type success'),
    GET_PAYMENT_SETTINGS_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[payment] get payment type fail'),
    CART_HANDLE_ACTION: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[cart] cart handle'),
    DO_CHECKOUT: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[checkout] do checkout '),
    DO_CHECKOUT_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[checkout] do checkout success'),
    DO_CHECKOUT_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[checkout] do checkout fail')
};
/* add to wishlist action*/
var AddtoWishlist = /** @class */ (function () {
    function AddtoWishlist(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_TO_WISHLIST;
    }
    return AddtoWishlist;
}());

var AddtoWishlistSuccess = /** @class */ (function () {
    function AddtoWishlistSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_TO_WISHLIST_SUCCESS;
    }
    return AddtoWishlistSuccess;
}());

var AddtoWishlistFail = /** @class */ (function () {
    function AddtoWishlistFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_TO_WISHLIST_FAIL;
    }
    return AddtoWishlistFail;
}());

/* cart handle action*/
var CartHandleAction = /** @class */ (function () {
    function CartHandleAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.CART_HANDLE_ACTION;
    }
    return CartHandleAction;
}());

/* product checkout action*/
var DoCheckoutAction = /** @class */ (function () {
    function DoCheckoutAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_CHECKOUT;
    }
    return DoCheckoutAction;
}());

var CheckoutActionSuccess = /** @class */ (function () {
    function CheckoutActionSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_CHECKOUT_SUCCESS;
    }
    return CheckoutActionSuccess;
}());

var CheckoutActionFail = /** @class */ (function () {
    function CheckoutActionFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DO_CHECKOUT_FAIL;
    }
    return CheckoutActionFail;
}());



/***/ }),

/***/ "./src/core/product-control/effects/product-control.effect.ts":
/*!********************************************************************!*\
  !*** ./src/core/product-control/effects/product-control.effect.ts ***!
  \********************************************************************/
/*! exports provided: ProductControlEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductControlEffect", function() { return ProductControlEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _action_product_control_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../action/product-control.action */ "./src/core/product-control/action/product-control.action.ts");
/* harmony import */ var _product_control_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-control.service */ "./src/core/product-control/product-control.service.ts");
/* harmony import */ var _wishlist_action_wishlist_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../wishlist/action/wishlist.action */ "./src/core/wishlist/action/wishlist.action.ts");
/* harmony import */ var _common_action_common_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/action/common.action */ "./src/core/common/action/common.action.ts");
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











var ProductControlEffect = /** @class */ (function () {
    function ProductControlEffect(platformId, actions$, authApi, appState$) {
        var _this = this;
        this.platformId = platformId;
        this.actions$ = actions$;
        this.authApi = authApi;
        this.appState$ = appState$;
        this.parameter = { limit: '', offser: 0 };
        this.countParameter = { limit: '', offser: 0, count: true };
        this.addToWishlist$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_product_control_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].ADD_TO_WISHLIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.authApi.addToWishlist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (register) { return [
                new _action_product_control_action__WEBPACK_IMPORTED_MODULE_7__["AddtoWishlistSuccess"](register),
                new _wishlist_action_wishlist_action__WEBPACK_IMPORTED_MODULE_9__["GetWishlist"](_this.parameter),
                new _common_action_common_action__WEBPACK_IMPORTED_MODULE_10__["GetWishlistCount"](_this.countParameter)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_product_control_action__WEBPACK_IMPORTED_MODULE_7__["AddtoWishlistFail"](error)); }));
        }));
        this.checkout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_product_control_action__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].DO_CHECKOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            var cartList = state.productDetails.product;
            state.productDetails = cartList;
            return _this.authApi.CheckoutProduct(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                if (res.status === 3) {
                    var cartParams = {};
                    cartParams.products = [];
                    cartParams.productTotal = 0;
                    cartParams.totalPrice = 0;
                    cartParams.changeCountTotalPrice = 0;
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this.platformId)) {
                        sessionStorage.setItem('productTotal', JSON.stringify(cartParams.totalPrice));
                        sessionStorage.setItem('selectedProducts', JSON.stringify(cartParams.products));
                        sessionStorage.setItem('selectedProductsCount', JSON.stringify(cartParams.productTotal));
                    }
                    _this.appState$.dispatch(new _action_product_control_action__WEBPACK_IMPORTED_MODULE_7__["CartHandleAction"](cartParams));
                    window.open('http://' + res.data, '_self');
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (checkout) { return new _action_product_control_action__WEBPACK_IMPORTED_MODULE_7__["CheckoutActionSuccess"](checkout); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_product_control_action__WEBPACK_IMPORTED_MODULE_7__["CheckoutActionFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ProductControlEffect.prototype, "addToWishlist$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ProductControlEffect.prototype, "checkout$", void 0);
    ProductControlEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object,
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _product_control_service__WEBPACK_IMPORTED_MODULE_8__["ProductControlService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], ProductControlEffect);
    return ProductControlEffect;
}());



/***/ }),

/***/ "./src/core/product-control/models/checkout.model.ts":
/*!***********************************************************!*\
  !*** ./src/core/product-control/models/checkout.model.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutProductModel, CheckoutModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutProductModel", function() { return CheckoutProductModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModel", function() { return CheckoutModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var CheckoutProductModel = /** @class */ (function () {
    function CheckoutProductModel(productRequest) {
        this.product = [];
        for (var i = 0; i < productRequest.length; i++) {
            var details = {};
            details.productId = productRequest[i].productId || '';
            details.quantity = productRequest[i].productCount || '';
            var tempPrice = void 0;
            tempPrice = productRequest[i]._totalOptions + (+productRequest[i].price);
            details.price = tempPrice || '';
            details.model = productRequest[i].metaTagTitle || '';
            details.name = productRequest[i].name || '';
            this.product.push(details);
        }
    }
    return CheckoutProductModel;
}());

var CheckoutModel = /** @class */ (function () {
    function CheckoutModel(checkoutRequest) {
        this.shippingFirstName = checkoutRequest.firstName || '';
        this.shippingLastName = checkoutRequest.lastName || '';
        this.shippingCompany = checkoutRequest.company || '';
        this.shippingAddress_1 = checkoutRequest.address || '';
        this.shippingAddress_2 = checkoutRequest.addressLine || '';
        this.shippingCity = checkoutRequest.city || '';
        this.shippingPostCode = checkoutRequest.zip || '';
        this.shippingCountry = checkoutRequest.country || '';
        this.shippingZone = checkoutRequest.state || '';
        this.phoneNumber = checkoutRequest.phone || '';
        this.shippingAddressFormat = '';
        this.emailId = checkoutRequest.email || '';
        this.productDetails = new CheckoutProductModel(checkoutRequest.productDetail);
    }
    return CheckoutModel;
}());



/***/ }),

/***/ "./src/core/product-control/product-control.sandbox.ts":
/*!*************************************************************!*\
  !*** ./src/core/product-control/product-control.sandbox.ts ***!
  \*************************************************************/
/*! exports provided: ProductControlSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductControlSandbox", function() { return ProductControlSandbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_product_control_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/product-control.action */ "./src/core/product-control/action/product-control.action.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer/product-control.selector */ "./src/core/product-control/reducer/product-control.selector.ts");
/* harmony import */ var _models_checkout_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/checkout.model */ "./src/core/product-control/models/checkout.model.ts");
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








var ProductControlSandbox = /** @class */ (function () {
    function ProductControlSandbox(router, appState$, snackBar, platformId) {
        this.router = router;
        this.appState$ = appState$;
        this.snackBar = snackBar;
        this.platformId = platformId;
        this.cartlist$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["getCartList"]);
        this.cartlistCount$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["getCartListCount"]);
        this.totalCartPrice$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["getTotalCartPrice"]);
        this.checkedOutData$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["getCheckedOutData"]);
        this.checkoutLoading$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["getCheckoutLoading"]);
        this.checkoutLoaded$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["getCheckoutLoaded"]);
        this.checkoutFailed$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["getCheckoutFailed"]);
        this.wishlistLoading$ = this.appState$.select(_reducer_product_control_selector__WEBPACK_IMPORTED_MODULE_6__["wishListLoading"]);
        this.selectedProducts = [];
        this.cartTotal = 0;
        this.changeCountTotalPrice = 0;
        this.subscriptions = [];
        this.productTotal = 0;
        this.completeOrder();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var cartParams = {};
            cartParams.products = sessionStorage.getItem('selectedProducts')
                ? JSON.parse(sessionStorage.getItem('selectedProducts'))
                : [];
            cartParams.productTotal = sessionStorage.getItem('selectedProductsCount')
                ? +JSON.parse(sessionStorage.getItem('selectedProductsCount'))
                : 0;
            cartParams.totalPrice = sessionStorage.getItem('productTotal')
                ? +JSON.parse(sessionStorage.getItem('productTotal'))
                : 0;
            this.HandleCart(cartParams);
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
        }
    }
    /**
     * add selected item to cart
     *
     * @param item product detail to be added to cart
     */
    ProductControlSandbox.prototype.addItemsToCart = function (item, param) {
        var _this = this;
        var id = item.productId;
        var id_totalOptions = param.totalOptions;
        this.productTotal = 0;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            if (this.selectedProducts[i].productId === id &&
                this.selectedProducts[i]._totalOptions !== id_totalOptions) {
                if (this.selectedProducts[i].productCount === 1) {
                    var tempPrice = +this.selectedProducts[i].price;
                    this.productTotal = (this.productTotal + tempPrice).toFixed(2);
                }
            }
        }
        var exists = false;
        this.getSessionData();
        this.selectedProducts = this.selectedProducts.map(function (_items) {
            if (_items.productId === item.productId &&
                _items._totalOptions === id_totalOptions) {
                exists = true;
                if (item.productCount) {
                    _items.productCount += item.productCount;
                    _this.cartTotal += item.productCount;
                }
                else {
                    _items.productCount += 1;
                    _this.cartTotal += 1;
                }
            }
            return _items;
        });
        if (!exists) {
            this.selectedProducts.push(item);
            if (!item.productCount) {
                item.productCount = 1;
            }
            this.cartTotal += item.productCount;
        }
        this.selectedProducts.forEach(function (_price) {
            if (_price.productId === item.productId &&
                _price._totalOptions === id_totalOptions) {
                var numberPrice = +(_price.price);
                var tempPrice = numberPrice + _price._totalOptions;
                tempPrice = tempPrice;
                _this.productTotal = (tempPrice * item.productCount) + _this.productTotal;
                _this.productTotal = +_this.productTotal.toFixed(2);
            }
        });
        var cartParams = {};
        cartParams.products = this.selectedProducts;
        cartParams.productTotal = this.cartTotal;
        var availableData = {};
        availableData.options = param.totalOptions;
        cartParams.totalPrice = this.productTotal;
        this.snackBar.open('Product ' + item.name + ' is successfully added to cart', '×', {
            panelClass: 'success',
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 3000
        });
        this.changeCountTotalPrice = cartParams.totalPrice;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            sessionStorage.setItem('changeCountTotalPrice', JSON.stringify(this.changeCountTotalPrice));
        }
        this.HandleCart(cartParams);
    };
    /**
     * remove selected item to cart
     *
     * @param item product detail to be remove to cart
     */
    ProductControlSandbox.prototype.removeItemFromCart = function (item) {
        var _this = this;
        this.getSessionData();
        var deletedCount = 0;
        this.selectedProducts = this.selectedProducts.filter(function (_items) {
            if (_items.productId === item.productId) {
                deletedCount = _items.productCount;
                return false;
            }
            return true;
        });
        this.cartTotal -= deletedCount;
        this.productTotal = 0;
        this.selectedProducts.forEach(function (_price) {
            var tempPrice = Number(_price.price);
            _this.productTotal += tempPrice * _price.productCount;
        });
        var cartParams = {};
        cartParams.products = this.selectedProducts;
        cartParams.productTotal = this.cartTotal;
        cartParams.totalPrice = this.productTotal;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            sessionStorage.setItem('changeCountTotalPrice', JSON.stringify(this.productTotal));
        }
        this.HandleCart(cartParams);
    };
    /**
     * increase or decrease product count from cart
     *
     * @param product product detail to be remove to cart
     * @param operation increase or decrease
     */
    ProductControlSandbox.prototype.ChangeCount = function (product, operation) {
        var _this = this;
        this.getSessionData();
        if (operation) {
            this.selectedProducts = this.selectedProducts.map(function (_items) {
                if (_items.productId === product.productId &&
                    _items._totalOptions === product._totalOptions) {
                    _items.productCount += 1;
                    _this.cartTotal += 1;
                }
                return _items;
            });
            this.addItems(product);
        }
        else if (!operation) {
            if (product.productCount > 1) {
                this.selectedProducts = this.selectedProducts.map(function (_items) {
                    if (_items.productId === product.productId &&
                        _items._totalOptions === product._totalOptions) {
                        _items.productCount -= 1;
                        _this.cartTotal -= 1;
                    }
                    return _items;
                });
                var totalValue = product._totalOptions + product.price;
                var halfValue = totalValue;
                this.productTotal -= halfValue;
                this.productTotal = +this.productTotal.toFixed(2);
            }
            else if (product.productCount === 1) {
                this.cartTotal -= 1;
                this.selectedProducts = this.selectedProducts.filter(function (_items) {
                    if (_items.productId === product.productId &&
                        _items._totalOptions === product._totalOptions) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
                var totalValue = +(product._totalOptions + product.price).toFixed(2);
                var halfValue = totalValue;
                this.productTotal -= halfValue;
                this.productTotal = +this.productTotal.toFixed(2);
            }
        }
        var cartParams = {};
        cartParams.products = this.selectedProducts;
        cartParams.productTotal = this.cartTotal;
        cartParams.totalPrice = this.productTotal;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            sessionStorage.setItem('changeCountTotalPrice', JSON.stringify(cartParams.totalPrice));
            this.HandleCart(cartParams);
        }
    };
    // increase product count from cart
    ProductControlSandbox.prototype.addItems = function (product) {
        this.productTotal = 0;
        var numberPrice = +(parseFloat(product.price)).toFixed(2);
        var calculation = numberPrice + product._totalOptions;
        if (calculation < 0) {
            calculation = calculation / -1;
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var _changeTotalPrice = sessionStorage.getItem('changeCountTotalPrice')
                ? +JSON.parse(sessionStorage.getItem('changeCountTotalPrice'))
                : 0;
            this.productTotal = +(_changeTotalPrice + calculation).toFixed(2);
        }
    };
    /**
     * clear all products from cart
     */
    ProductControlSandbox.prototype.clearCart = function () {
        var cartParams = {};
        cartParams.products = [];
        cartParams.productTotal = 0;
        cartParams.totalPrice = 0;
        cartParams.changeCountTotalPrice = 0;
        this.HandleCart(cartParams);
    };
    /**
     * handle cart cart
     * @param params product detail
     */
    ProductControlSandbox.prototype.HandleCart = function (params) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            sessionStorage.setItem('productTotal', JSON.stringify(params.totalPrice));
            sessionStorage.setItem('selectedProducts', JSON.stringify(params.products));
            sessionStorage.setItem('selectedProductsCount', JSON.stringify(params.productTotal));
        }
        this.appState$.dispatch(new _action_product_control_action__WEBPACK_IMPORTED_MODULE_4__["CartHandleAction"](params));
    };
    /**
     * do checkout products
     */
    ProductControlSandbox.prototype.PlaceOrder = function (params) {
        this.appState$.dispatch(new _action_product_control_action__WEBPACK_IMPORTED_MODULE_4__["DoCheckoutAction"](new _models_checkout_model__WEBPACK_IMPORTED_MODULE_7__["CheckoutModel"](params)));
    };
    /*  addToWishlist  */
    ProductControlSandbox.prototype.addToWishlist = function (params) {
        this.appState$.dispatch(new _action_product_control_action__WEBPACK_IMPORTED_MODULE_4__["AddtoWishlist"](params));
    };
    /**
     * get session data from session storage
     */
    ProductControlSandbox.prototype.getSessionData = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.selectedProducts = sessionStorage.getItem('selectedProducts')
                ? JSON.parse(sessionStorage.getItem('selectedProducts'))
                : [];
            var cartTotal = sessionStorage.getItem('selectedProducts')
                ? +(sessionStorage.getItem('selectedProductsCount'))
                : 0;
            this.cartTotal = cartTotal;
            var productTotal = sessionStorage.getItem('productTotal')
                ? +parseFloat(sessionStorage.getItem('productTotal')).toFixed(2)
                : 0;
            this.productTotal = productTotal;
        }
    };
    /**
     * subscribe checkout status events
     */
    ProductControlSandbox.prototype.completeOrder = function () {
        var _this = this;
        this.checkedOutData$.subscribe(function (data) {
            if (data) {
                if (data.orderId) {
                    _this.router.navigate(['/checkout/success', data.orderPrefixId]);
                    var params = {};
                    params.products = [];
                    params.productTotal = 0;
                    params.totalPrice = 0;
                    _this.HandleCart(params);
                }
            }
        });
    };
    ProductControlSandbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            Object])
    ], ProductControlSandbox);
    return ProductControlSandbox;
}());



/***/ }),

/***/ "./src/core/product-control/product-control.service.ts":
/*!*************************************************************!*\
  !*** ./src/core/product-control/product-control.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductControlService", function() { return ProductControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/providers/api/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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


var ProductControlService = /** @class */ (function (_super) {
    __extends(ProductControlService, _super);
    function ProductControlService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* add item to wish list api*/
    ProductControlService.prototype.addToWishlist = function (params) {
        this.base = this.getBaseUrl();
        return this.http.post(this.base + 'customer/add-product-to-wishlist', params);
    };
    /* call checkout api*/
    ProductControlService.prototype.CheckoutProduct = function (params) {
        this.base = this.getBaseUrl();
        return this.http.post(this.base + 'orders/customer-checkout', params);
    };
    ProductControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ProductControlService);
    return ProductControlService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_1__["Api"]));



/***/ }),

/***/ "./src/core/product-control/reducer/product-control.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/core/product-control/reducer/product-control.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, reducer, getCartList, getCartListCount, getTotalCartPrice, getCheckedOut, getCheckoutLoading, getCheckoutLoaded, getCheckoutFailed, getWhislistLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartList", function() { return getCartList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartListCount", function() { return getCartListCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCartPrice", function() { return getTotalCartPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckedOut", function() { return getCheckedOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutLoading", function() { return getCheckoutLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutLoaded", function() { return getCheckoutLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutFailed", function() { return getCheckoutFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWhislistLoading", function() { return getWhislistLoading; });
/* harmony import */ var _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/product-control.action */ "./src/core/product-control/action/product-control.action.ts");
/* harmony import */ var _product_control_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-control.state */ "./src/core/product-control/reducer/product-control.state.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var initialState = new _product_control_state__WEBPACK_IMPORTED_MODULE_1__["productControlRecord"]();
function reducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    if (!type) {
        return state;
    }
    switch (type) {
        case _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CART_HANDLE_ACTION: {
            return Object.assign({}, state, {
                cartList: payload.products,
                cartCount: payload.productTotal,
                totalCartPrice: payload.totalPrice,
                checkedOut: {}
            });
        }
        // productOptions (filter the selected available option from total available options)optionsSelected
        case _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_CHECKOUT: {
            return Object.assign({}, state, {
                checkedOut: {},
                checkoutLoading: true,
                checkoutLoaded: false,
                checkoutFailed: false
            });
        }
        case _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_CHECKOUT_SUCCESS: {
            return Object.assign({}, state, {
                checkedOut: payload.data,
                checkoutLoading: false,
                checkoutLoaded: true,
                checkoutFailed: false
            });
        }
        case _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DO_CHECKOUT_FAIL: {
            return Object.assign({}, state, {
                checkedOut: {},
                checkoutLoading: false,
                checkoutLoaded: true,
                checkoutFailed: true
            });
        }
        case _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ADD_TO_WISHLIST: {
            return Object.assign({}, state, {
                whislistLoading: true,
                checkedOut: {}
            });
        }
        case _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ADD_TO_WISHLIST_SUCCESS: {
            return Object.assign({}, state, {
                whislistLoading: false,
                checkedOut: {}
            });
        }
        case _action_product_control_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ADD_TO_WISHLIST_FAIL: {
            return Object.assign({}, state, {
                whislistLoading: false,
                checkedOut: {}
            });
        }
        default: {
            return state;
        }
    }
}
var getCartList = function (state) { return state.cartList; };
var getCartListCount = function (state) { return state.cartCount; };
var getTotalCartPrice = function (state) {
    return state.totalCartPrice;
};
var getCheckedOut = function (state) { return state.checkedOut; };
var getCheckoutLoading = function (state) {
    return state.checkoutLoading;
};
var getCheckoutLoaded = function (state) {
    return state.checkoutLoaded;
};
var getCheckoutFailed = function (state) {
    return state.checkoutFailed;
};
var getWhislistLoading = function (state) {
    return state.whislistLoading;
};


/***/ }),

/***/ "./src/core/product-control/reducer/product-control.selector.ts":
/*!**********************************************************************!*\
  !*** ./src/core/product-control/reducer/product-control.selector.ts ***!
  \**********************************************************************/
/*! exports provided: getState, getCartList, getCartListCount, getTotalCartPrice, getCheckedOutData, getCheckoutLoading, getCheckoutLoaded, getCheckoutFailed, wishListLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartList", function() { return getCartList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartListCount", function() { return getCartListCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCartPrice", function() { return getTotalCartPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckedOutData", function() { return getCheckedOutData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutLoading", function() { return getCheckoutLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutLoaded", function() { return getCheckoutLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutFailed", function() { return getCheckoutFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishListLoading", function() { return wishListLoading; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-control.reducer */ "./src/core/product-control/reducer/product-control.reducer.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var getState = function (State) { return State.productControl; };
var getCartList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getCartList"]);
var getCartListCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getCartListCount"]);
var getTotalCartPrice = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalCartPrice"]);
var getCheckedOutData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getCheckedOut"]);
var getCheckoutLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getCheckoutLoading"]);
var getCheckoutLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getCheckoutLoaded"]);
var getCheckoutFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getCheckoutFailed"]);
var wishListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _product_control_reducer__WEBPACK_IMPORTED_MODULE_1__["getWhislistLoading"]);


/***/ }),

/***/ "./src/core/product-control/reducer/product-control.state.ts":
/*!*******************************************************************!*\
  !*** ./src/core/product-control/reducer/product-control.state.ts ***!
  \*******************************************************************/
/*! exports provided: productControlRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productControlRecord", function() { return productControlRecord; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var productControlRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
    wishlist: [],
    cartList: [],
    cartCount: [],
    totalCartPrice: [],
    checkedOut: [],
    checkoutLoading: false,
    checkoutLoaded: false,
    checkoutFailed: false,
    whislistLoading: false
});


/***/ }),

/***/ "./src/core/providers/api/api.ts":
/*!***************************************!*\
  !*** ./src/core/providers/api/api.ts ***!
  \***************************************/
/*! exports provided: httpOptions, Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/config.service */ "./src/core/service/config.service.ts");
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





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Api = /** @class */ (function () {
    function Api(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    Api.prototype.getBaseUrl = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].storeUrl;
    };
    Api.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            // TODO: better job of transforming error for user consumption
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    Api = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], Api);
    return Api;
}());



/***/ }),

/***/ "./src/core/reducer.interface.ts":
/*!***************************************!*\
  !*** ./src/core/reducer.interface.ts ***!
  \***************************************/
/*! exports provided: reducers, logger, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _core_auth_reducer_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/auth/reducer/auth.reducer */ "./src/core/auth/reducer/auth.reducer.ts");
/* harmony import */ var _core_account_reducer_account_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/account/reducer/account.reducer */ "./src/core/account/reducer/account.reducer.ts");
/* harmony import */ var _core_product_control_reducer_product_control_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/product-control/reducer/product-control.reducer */ "./src/core/product-control/reducer/product-control.reducer.ts");
/* harmony import */ var _core_common_reducer_common_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/common/reducer/common.reducer */ "./src/core/common/reducer/common.reducer.ts");
/* harmony import */ var _core_lists_reducer_lists_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/lists/reducer/lists.reducer */ "./src/core/lists/reducer/lists.reducer.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_wishlist_reducer_wishlist_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/wishlist/reducer/wishlist.reducer */ "./src/core/wishlist/reducer/wishlist.reducer.ts");







var reducers = {
    auth: _core_auth_reducer_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    account: _core_account_reducer_account_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    productControl: _core_product_control_reducer_product_control_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    common: _core_common_reducer_common_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    list: _core_lists_reducer_lists_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    wishlist: _core_wishlist_reducer_wishlist_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
};
function logger(reducer) {
    return function (state, action) {
        return reducer(state, action);
    };
}
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
    ? [logger]
    : [];


/***/ }),

/***/ "./src/core/service/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/core/service/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, platformId) {
        this.router = router;
        this.platformId = platformId;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var underMaintenance;
        var currentUser;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            currentUser = JSON.parse(localStorage.getItem('user'));
            underMaintenance = JSON.parse(sessionStorage.getItem('maintenanceMode'));
        }
        if (underMaintenance === true) {
            if (url === '/underdeveloping') {
                return true;
            }
            else {
                this.router.navigate(['/underdeveloping']);
                return false;
            }
            return true;
        }
        else {
            if (currentUser) {
                if (url === '/auth') {
                    // Navigate to the login page with extras (once login again pass the ./auth url it redirect to home page)
                    this.router.navigate(['/']);
                    return false;
                }
                return true;
            }
            else {
                // at login time
                if (url === '/auth') {
                    return true;
                }
            }
        }
        // Navigate to the login page with extras
        this.router.navigate(['/auth']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            Object])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/core/service/config.service.ts":
/*!********************************************!*\
  !*** ./src/core/service/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
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



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        DataType: 'application/json'
    })
};
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    /**
     * Returns configuration value based on given key
     *
     * @params key
     */
    ConfigService.prototype.get = function (key) {
        return this.config[key];
    };
    ConfigService.prototype.getImageUrl = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageUrl;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/core/service/layout_auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/core/service/layout_auth.guard.ts ***!
  \***********************************************/
/*! exports provided: LayoutAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAuthGuard", function() { return LayoutAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */



var LayoutAuthGuard = /** @class */ (function () {
    function LayoutAuthGuard(router, platformId) {
        this.router = router;
        this.platformId = platformId;
    }
    LayoutAuthGuard.prototype.canActivate = function (route, state) {
        return this.checkMaintenance(state.url);
    };
    LayoutAuthGuard.prototype.checkMaintenance = function (url) {
        var underMaintenance;
        var currentUser;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            underMaintenance = JSON.parse(sessionStorage.getItem('maintenanceMode'));
            currentUser = JSON.parse(localStorage.getItem('user'));
        }
        if (underMaintenance === true) {
            if (url === '/underdeveloping') {
                return true;
            }
            else {
                this.router.navigate(['/underdeveloping']);
                return false;
            }
            return true;
        }
        else {
            return true;
        }
        // Navigate to the login page with extras
    };
    LayoutAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            Object])
    ], LayoutAuthGuard);
    return LayoutAuthGuard;
}());



/***/ }),

/***/ "./src/core/service/request.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/core/service/request.interceptor.ts ***!
  \*************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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









var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(router, snackBar, spinner, configService, platformId) {
        this.router = router;
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.configService = configService;
        this.platformId = platformId;
        this.userTokenDetail = {};
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // this.spinner.show();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["isPlatformBrowser"])(this.platformId)) {
            this.userTokenDetail = localStorage.getItem('userToken');
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["isPlatformServer"])(this.platformId)) {
        }
        if (this.userTokenDetail) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.userTokenDetail
                }
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (user instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                var response = user.body;
                if (response.message &&
                    response.message !== '' &&
                    req.method !== 'GET' &&
                    response.message !== 'Redirect to this url.') {
                    _this.showSuccess(user.body.message);
                }
            }
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (response) {
            _this.spinner.hide();
            if (response.status === 200 || response.status === 201) {
                return response;
            }
            switch (response.status) {
                case 400:
                    _this.handleBadRequest(response);
                    break;
                case 401:
                    _this.handleUnAuthorized();
                    break;
                case 403:
                    _this.handleUnAuthorized();
                    break;
                case 500:
                    _this.handleServerError();
                    break;
                default:
                    break;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response);
        }));
    };
    /**
     * Shows notification errors when server response status is 401
     *
     * @params error
     */
    RequestInterceptor.prototype.handleBadRequest = function (responseBody) {
        if (responseBody.error) {
            try {
                var bodyParsed = responseBody.error;
                this.handleErrorMessages(bodyParsed);
            }
            catch (error) { }
        }
        // else this.handleServerError();
    };
    RequestInterceptor.prototype.handleErrorMessages = function (response) {
        if (!response) {
            return;
        }
        else {
            this.showNotificationError(response.message);
        }
    };
    /**
     * redirect to login if un authorized
     *
     */
    RequestInterceptor.prototype.handleUnAuthorized = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["isPlatformBrowser"])(this.platformId)) {
            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['/']);
        }
    };
    RequestInterceptor.prototype.handleServerError = function () {
        this.showNotificationError('Server Error');
    };
    /**
     * Shows error notification with given title and message
     *
     * @params title
     * @params message
     */
    RequestInterceptor.prototype.showNotificationError = function (message) {
        this.snackBar.open(message, '×', {
            panelClass: 'error',
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 3000
        });
    };
    RequestInterceptor.prototype.showSuccess = function (message) {
        this.snackBar.open(message, '×', {
            panelClass: 'success',
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 3000
        });
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"])(),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_7__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            Object])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/core/shared/utility/utility.service.ts":
/*!****************************************************!*\
  !*** ./src/core/shared/utility/utility.service.ts ***!
  \****************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api/api */ "./src/core/providers/api/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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



var UtilService = /** @class */ (function (_super) {
    __extends(UtilService, _super);
    function UtilService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor() { }
    /**
     * Translates given message code and title code and displays corresponding notification
     *
     * @param messageTranslationCode
     * @param type
     * @param titleTranslationCode
     */
    // public displayNotification(messageTranslationCode: string, type: string = 'info', titleTranslationCode?: string) {
    //   const message: string = this.translateService.instant(messageTranslationCode);
    //   let title: string = titleTranslationCode ? this.translateService.instant(titleTranslationCode) : null;
    //
    //   switch (type) {
    //     case 'error':
    //       title = this.translateService.instant('ErrorNotificationTitle');
    //       break;
    //
    //     case 'success':
    //       title = this.translateService.instant('SuccessNotificationTitle');
    //       break;
    //
    //     case 'alert':
    //       title = this.translateService.instant('WarningNotificationTitle');
    //       break;
    //
    //     default:
    //       title = this.translateService.instant('InfoNotificationTitle');
    //       break;
    //   }
    //
    //   this.notificationService[type](title,this.configService.get('notifications').options);
    // }
    //
    // /**
    //  * Translates lookup names by looking into lookup code
    //  *
    //  * @param data
    //  */
    // public translateLookupData(data: Array<any>): Array<any> {
    //   // Translate quantity stock adjustment reasons
    //   return data.map(lookup => {
    //     lookup.name = lookup.code ? this.translateService.instant('Lookups')[lookup.code] : lookup.name;
    //     return lookup;
    //   });
    // }
    /* get Advertisement List list api*/
    UtilService.prototype.getFAQdata = function (params) {
        this.base = this.getBaseUrl();
        var reqOpts = {};
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                if (k) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }
        return this.http.get(this.base + 'list/getPage', reqOpts);
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], UtilService);
    return UtilService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/core/shared/utility/utilityHelpers.ts":
/*!***************************************************!*\
  !*** ./src/core/shared/utility/utilityHelpers.ts ***!
  \***************************************************/
/*! exports provided: type, distinctChanges, isObject, capitalize, uncapitalize, flattenObject, localeDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctChanges", function() { return distinctChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncapitalize", function() { return uncapitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenObject", function() { return flattenObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeDateString", function() { return localeDateString; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var typeCache = {};
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels are unique.
 *
 * @params label
 */
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[label] = true;
    return label;
}
/**
 * Runs through every condition, compares new and old values and returns true/false depends on condition state.
 * This is used to distinct if two observable values have changed.
 *
 * @params oldValues
 * @params newValues
 * @params conditions
 */
function distinctChanges(oldValues, newValues, conditions) {
    if (conditions.every(function (cond) { return cond(oldValues, newValues); })) {
        return false;
    }
    else {
        return true;
    }
}
/**
 * Returns true if the given value is type of Object
 *
 * @params val
 */
function isObject(val) {
    if (val === null) {
        return false;
    }
    else {
        return ((typeof val === 'function') || (typeof val === 'object'));
    }
}
/**
 * Capitalizes the first character in given string
 *
 * @params s
 */
function capitalize(s) {
    if (!s || typeof s !== 'string') {
        return s;
    }
    else {
        return s && s[0].toUpperCase() + s.slice(1);
    }
}
/**
 * Uncapitalizes the first character in given string
 *
 * @params s
 */
function uncapitalize(s) {
    if (!s || typeof s !== 'string') {
        return s;
    }
    else {
        return s && s[0].toLowerCase() + s.slice(1);
    }
}
/**
 * Flattens multi dimensional object into one level deep
 *
 * @params obj
 * @params preservePath
 */
function flattenObject(ob, preservePath) {
    if (preservePath === void 0) { preservePath = false; }
    var toReturn = {};
    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) {
            continue;
        }
        if ((typeof ob[i]) === 'object') {
            var flatObject = flattenObject(ob[i], preservePath);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {
                    continue;
                }
                var path = preservePath ? (i + '.' + x) : x;
                toReturn[path] = flatObject[x];
            }
        }
        else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}
/**
 * Returns formated date based on given culture
 *
 * @params dateString
 * @params culture
 */
function localeDateString(dateString, culture) {
    if (culture === void 0) { culture = 'en-EN'; }
    var date = new Date(dateString);
    return date.toLocaleDateString(culture);
}


/***/ }),

/***/ "./src/core/wishlist/action/wishlist.action.ts":
/*!*****************************************************!*\
  !*** ./src/core/wishlist/action/wishlist.action.ts ***!
  \*****************************************************/
/*! exports provided: ActionTypes, GetWishlist, GetWishlistSuccess, GetWishlistFail, DeleteProduct, DeleteProductSuccess, DeleteProductFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWishlist", function() { return GetWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWishlistSuccess", function() { return GetWishlistSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWishlistFail", function() { return GetWishlistFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProduct", function() { return DeleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductSuccess", function() { return DeleteProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductFail", function() { return DeleteProductFail; });
/* harmony import */ var _shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utility/utilityHelpers */ "./src/core/shared/utility/utilityHelpers.ts");

var ActionTypes = {
    get_wishlist: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] get wishlist'),
    get_wishlist_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] get wishlist success'),
    get_wishlist_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] get wishlist fail'),
    delete_product: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] delete product'),
    delete_product_SUCCESS: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] delete product success'),
    delete_product_FAIL: Object(_shared_utility_utilityHelpers__WEBPACK_IMPORTED_MODULE_0__["type"])('[wishlist] delete product fail')
};
/* get wish list action*/
var GetWishlist = /** @class */ (function () {
    function GetWishlist(payload) {
        this.payload = payload;
        this.type = ActionTypes.get_wishlist;
    }
    return GetWishlist;
}());

var GetWishlistSuccess = /** @class */ (function () {
    function GetWishlistSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.get_wishlist_SUCCESS;
    }
    return GetWishlistSuccess;
}());

var GetWishlistFail = /** @class */ (function () {
    function GetWishlistFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.get_wishlist_FAIL;
    }
    return GetWishlistFail;
}());

/* delete product from wish list action*/
var DeleteProduct = /** @class */ (function () {
    function DeleteProduct(payload) {
        this.payload = payload;
        this.type = ActionTypes.delete_product;
    }
    return DeleteProduct;
}());

var DeleteProductSuccess = /** @class */ (function () {
    function DeleteProductSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.delete_product_SUCCESS;
    }
    return DeleteProductSuccess;
}());

var DeleteProductFail = /** @class */ (function () {
    function DeleteProductFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.delete_product_FAIL;
    }
    return DeleteProductFail;
}());



/***/ }),

/***/ "./src/core/wishlist/effects/wishlist.effect.ts":
/*!******************************************************!*\
  !*** ./src/core/wishlist/effects/wishlist.effect.ts ***!
  \******************************************************/
/*! exports provided: WishlistEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistEffect", function() { return WishlistEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../action/wishlist.action */ "./src/core/wishlist/action/wishlist.action.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wishlist.service */ "./src/core/wishlist/wishlist.service.ts");
/* harmony import */ var _common_action_common_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/action/common.action */ "./src/core/common/action/common.action.ts");
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









var WishlistEffect = /** @class */ (function () {
    function WishlistEffect(actions$, authApi, appState$) {
        var _this = this;
        this.actions$ = actions$;
        this.authApi = authApi;
        this.appState$ = appState$;
        this.parameter = { limit: '', offser: 0 };
        this.countParameter = { limit: '', offser: 0, count: true };
        this.getWishlist$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].get_wishlist), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.getWishlist(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (wishlish) { return new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["GetWishlistSuccess"](wishlish); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["GetWishlistFail"](error)); }));
        }));
        this.deleteProduct$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["ActionTypes"].delete_product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (state) {
            return _this.authApi.deleteProduct(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (product) { return [
                new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["DeleteProductSuccess"](product),
                new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["GetWishlist"](_this.parameter),
                new _common_action_common_action__WEBPACK_IMPORTED_MODULE_8__["GetWishlistCount"](_this.countParameter)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_6__["DeleteProductFail"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], WishlistEffect.prototype, "getWishlist$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], WishlistEffect.prototype, "deleteProduct$", void 0);
    WishlistEffect = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_7__["WishlistService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], WishlistEffect);
    return WishlistEffect;
}());



/***/ }),

/***/ "./src/core/wishlist/reducer/wishlist.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/core/wishlist/reducer/wishlist.reducer.ts ***!
  \*******************************************************/
/*! exports provided: initialState, reducer, getWishlist, getWishlistLoading, getWishlistLoaded, getWishlistFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlist", function() { return getWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistLoading", function() { return getWishlistLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistLoaded", function() { return getWishlistLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistFailed", function() { return getWishlistFailed; });
/* harmony import */ var _action_wishlist_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/wishlist.action */ "./src/core/wishlist/action/wishlist.action.ts");
/* harmony import */ var _wishlist_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.state */ "./src/core/wishlist/reducer/wishlist.state.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var initialState = new _wishlist_state__WEBPACK_IMPORTED_MODULE_1__["wishlistRecord"]();
function reducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    if (!type) {
        return state;
    }
    switch (type) {
        case _action_wishlist_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get_wishlist: {
            return Object.assign({}, state, {
                wishlist: state.wishlist,
                wishlistLoading: true,
                wishlistLoaded: false,
                wishlistFailed: false
            });
        }
        // set mandatory option if required for product in whishlist items
        case _action_wishlist_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get_wishlist_SUCCESS: {
            return Object.assign({}, state, {
                wishlist: payload.data,
                wishlistLoading: false,
                wishlistLoaded: true,
                wishlistFailed: false
            });
        }
        case _action_wishlist_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].get_wishlist_FAIL: {
            return Object.assign({}, state, {
                wishlist: [],
                wishlistLoading: false,
                wishlistLoaded: true,
                wishlistFailed: true
            });
        }
        default: {
            return state;
        }
    }
}
var getWishlist = function (state) { return state.wishlist; };
var getWishlistLoading = function (state) {
    return state.wishlistLoading;
};
var getWishlistLoaded = function (state) { return state.wishlistLoaded; };
var getWishlistFailed = function (state) { return state.wishlistFailed; };


/***/ }),

/***/ "./src/core/wishlist/reducer/wishlist.selector.ts":
/*!********************************************************!*\
  !*** ./src/core/wishlist/reducer/wishlist.selector.ts ***!
  \********************************************************/
/*! exports provided: getState, getWishlist, wishlistLoading, wishlistLoaded, wishlistFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlist", function() { return getWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistLoading", function() { return wishlistLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistLoaded", function() { return wishlistLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistFailed", function() { return wishlistFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.reducer */ "./src/core/wishlist/reducer/wishlist.reducer.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */


var getState = function (State) { return State.wishlist; };
var getWishlist = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlist"]);
var wishlistLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlistLoading"]);
var wishlistLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlistLoaded"]);
var wishlistFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getState, _wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["getWishlistFailed"]);


/***/ }),

/***/ "./src/core/wishlist/reducer/wishlist.state.ts":
/*!*****************************************************!*\
  !*** ./src/core/wishlist/reducer/wishlist.state.ts ***!
  \*****************************************************/
/*! exports provided: wishlistRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistRecord", function() { return wishlistRecord; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var wishlistRecord = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])({
    newPassword: {},
    wishlist: [],
    wishlistLoading: false,
    wishlistLoaded: false,
    wishlistFailed: false
});


/***/ }),

/***/ "./src/core/wishlist/wishlist.sandbox.ts":
/*!***********************************************!*\
  !*** ./src/core/wishlist/wishlist.sandbox.ts ***!
  \***********************************************/
/*! exports provided: WishlistSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistSandbox", function() { return WishlistSandbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_wishlist_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/wishlist.action */ "./src/core/wishlist/action/wishlist.action.ts");
/* harmony import */ var _reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/wishlist.selector */ "./src/core/wishlist/reducer/wishlist.selector.ts");
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





var WishlistSandbox = /** @class */ (function () {
    function WishlistSandbox(router, appState$) {
        this.router = router;
        this.appState$ = appState$;
        this.wishlist$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["getWishlist"]);
        this.wishlistLoading$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["wishlistLoading"]);
        this.wishlistLoaded$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["wishlistLoaded"]);
        this.wishlistFailed$ = this.appState$.select(_reducer_wishlist_selector__WEBPACK_IMPORTED_MODULE_4__["wishlistFailed"]);
        this.subscriptions = [];
    }
    /* trigger get wish list action*/
    WishlistSandbox.prototype.getWishlist = function (params) {
        this.appState$.dispatch(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_3__["GetWishlist"](params));
    };
    /* trigger delete item from wish list action*/
    WishlistSandbox.prototype.deleteWishlist = function (params) {
        this.appState$.dispatch(new _action_wishlist_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProduct"](params));
    };
    WishlistSandbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WishlistSandbox);
    return WishlistSandbox;
}());



/***/ }),

/***/ "./src/core/wishlist/wishlist.service.ts":
/*!***********************************************!*\
  !*** ./src/core/wishlist/wishlist.service.ts ***!
  \***********************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/providers/api/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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



var WishlistService = /** @class */ (function (_super) {
    __extends(WishlistService, _super);
    function WishlistService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = _this.getBaseUrl();
        return _this;
    }
    /* get wish list api*/
    WishlistService.prototype.getWishlist = function (params) {
        return this.http.get(this.base + 'customer/wishlist-product-list');
    };
    /* delete product from wish list api*/
    WishlistService.prototype.deleteProduct = function (params) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: { wishlistProductId: params.wishlistProductId }
        };
        return this.http.delete(this.base +
            'customer/wishlist-product-delete/' +
            params.wishlistProductId, httpOptions);
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WishlistService);
    return WishlistService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"]));



/***/ }),

/***/ "./src/default/app.settings.ts":
/*!*************************************!*\
  !*** ./src/default/app.settings.ts ***!
  \*************************************/
/*! exports provided: Settings, AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
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

var Settings = /** @class */ (function () {
    function Settings(name, theme) {
        this.name = name;
        this.theme = theme;
    }
    return Settings;
}());

var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.settings = new Settings('Spurt Commerce', // theme name
        'green' // green, blue, red, pink, purple, grey
        );
    }
    AppSettings = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "./src/default/common/index.ts":
/*!*************************************!*\
  !*** ./src/default/common/index.ts ***!
  \*************************************/
/*! exports provided: CONTAINERS, ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINERS", function() { return CONTAINERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.container */ "./src/default/common/layout/layout.container.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/default/shared/shared.module.ts");
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





var CONTAINERS = {
    LayoutContainerComponent: _layout_layout_container__WEBPACK_IMPORTED_MODULE_2__["LayoutContainerComponent"]
};
var ContainerModule = /** @class */ (function () {
    function ContainerModule() {
    }
    ContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [],
            providers: []
        })
    ], ContainerModule);
    return ContainerModule;
}());



/***/ }),

/***/ "./src/default/common/layout/layout.container.html":
/*!*********************************************************!*\
  !*** ./src/default/common/layout/layout.container.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n    <mat-sidenav [opened]=\"false\" mode=\"over\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <app-spurt-side-bar></app-spurt-side-bar>\r\n    </mat-sidenav>\r\n\r\n    <!-- <mat-toolbar class=\"head-toolbar\">\r\n        <app-spurt-header class=\"head\"></app-spurt-header>\r\n    </mat-toolbar> -->\r\n    <!-- <mat-toolbar>\r\n        <app-spurt-header-menu [categories]=\"listSandBox.categoryList$ | async\" class=\"head\"></app-spurt-header-menu>\r\n    </mat-toolbar> -->\r\n    <app-menu [categories]=\"listSandBox.categoryList$ | async\"></app-menu>\r\n\r\n    <div class=\"theme-container-full main\">\r\n        <!-- <app-breadcrumb></app-breadcrumb> -->\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <app-options></app-options>\r\n<!-- footer -->\r\n    <!-- <app-menu [categories]=\"listSandBox.categoryList$ | async\"></app-menu> -->\r\n    <app-footer></app-footer>\r\n    <!--  -->\r\n\r\n    <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top transition\"\r\n         (click)=\"scrollToTop()\">\r\n        <mat-icon>arrow_upward</mat-icon>\r\n    </div>\r\n\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/default/common/layout/layout.container.scss":
/*!*********************************************************!*\
  !*** ./src/default/common/layout/layout.container.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  min-height: 400px;\n  min-height: calc(100vh - 288px);\n  padding: 16px; }\n\n.head-toolbar {\n  height: 35px !important; }\n\n.sidenav {\n  width: 250px;\n  padding: 8px 16px;\n  position: fixed; }\n\n.sidenav .close {\n    margin-left: 178px; }\n\n.sidenav .divider {\n    margin: 8px 0; }\n\n.head {\n  width: 100%; }\n\n.mat-toolbar {\n  background-color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L2NvbW1vbi9sYXlvdXQvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcY29tbW9uXFxsYXlvdXRcXGxheW91dC5jb250YWluZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFpQjtFQUNqQixnQ0FBK0I7RUFDL0IsY0FBYSxFQUNkOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixnQkFBZSxFQU9oQjs7QUFWRDtJQUtJLG1CQUFrQixFQUNuQjs7QUFOSDtJQVFJLGNBQWEsRUFDZDs7QUFHSDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLG1DQUFrQyxFQUNuQyIsImZpbGUiOiJzcmMvZGVmYXVsdC9jb21tb24vbGF5b3V0L2xheW91dC5jb250YWluZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyODhweCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG4uaGVhZC10b29sYmFye1xyXG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlbmF2e1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLmNsb3Nle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3OHB4O1xyXG4gIH1cclxuICAuZGl2aWRlcntcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC10b29sYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/common/layout/layout.container.ts":
/*!*******************************************************!*\
  !*** ./src/default/common/layout/layout.container.ts ***!
  \*******************************************************/
/*! exports provided: LayoutContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContainerComponent", function() { return LayoutContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "./src/default/app.settings.ts");
/* harmony import */ var _shared_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/sidenav-menu/sidenav-menu.service */ "./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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






var LayoutContainerComponent = /** @class */ (function () {
    function LayoutContainerComponent(appSettings, sidenavMenuService, router, listSandBox, platformId) {
        this.appSettings = appSettings;
        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        this.listSandBox = listSandBox;
        this.platformId = platformId;
        // go back event
        this.showBackToTop = false;
        this.subscriptions = [];
        this.settings = this.appSettings.settings;
    }
    LayoutContainerComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getSettings();
    };
    LayoutContainerComponent.prototype.onWindowScroll = function ($event) {
        ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    };
    LayoutContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.sidenav.close();
            }
        });
        this.sidenavMenuService.expandActiveSubMenu(this.sidenavMenuService.getSidenavMenuItems());
    };
    /**
     * fetch cahegory list from the ListsSandbox. Calls sandbox getCategoryList.
     *
     * @param limit number of records should load
     * @param offset start key for the record
     * @param keyword keyword search from the category list
     * @param sortOrder filter based on sort order
     */
    LayoutContainerComponent.prototype.getCategories = function () {
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sortOrder = '';
        params.parent = 'home';
        this.listSandBox.getCategoryList(params);
    };
    // scroll the window to the top
    LayoutContainerComponent.prototype.scrollToTop = function () {
        var scrollDuration = 200;
        var scrollStep = -window.pageYOffset / (scrollDuration / 20);
        var scrollInterval = setInterval(function () {
            if (window.pageYOffset !== 0) {
                window.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(function () {
                window.scrollTo(0, 0);
            });
        }
    };
    // to change the theme. select the theme from settings service
    LayoutContainerComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    // getSetting
    /**
     * fetch getSetting  from the ListsSandbox. Calls sandbox getSetting.
     * after subscribe the getSetting info
     */
    LayoutContainerComponent.prototype.getSettings = function () {
        var _this = this;
        this.listSandBox.getSettings();
        this.subscriptions.push(this.listSandBox.settingDetail$.subscribe(function (data) {
            if (data) {
                if (data.maintenanceMode === 1) {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this.platformId)) {
                        sessionStorage.setItem('maintenanceMode', 'true');
                    }
                    _this.router.navigate(['/underdeveloping']);
                }
            }
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], LayoutContainerComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LayoutContainerComponent.prototype, "onWindowScroll", null);
    LayoutContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.container.html */ "./src/default/common/layout/layout.container.html"),
            styles: [__webpack_require__(/*! ./layout.container.scss */ "./src/default/common/layout/layout.container.scss")],
            providers: [_shared_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"]]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _shared_components_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidenavMenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__["ListsSandbox"], Object])
    ], LayoutContainerComponent);
    return LayoutContainerComponent;
}());



/***/ }),

/***/ "./src/default/default.component.html":
/*!********************************************!*\
  !*** ./src/default/default.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"h-100 app\" [ngClass]=\"settings.theme\">\r\n    <router-outlet></router-outlet>\r\n    <ngx-spinner bdColor=\"rgba(51,51,51,0.7)\" size=\"large\" color= \"#fff\" type=\"ball-clip-rotate\"></ngx-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/default/default.component.scss":
/*!********************************************!*\
  !*** ./src/default/default.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/default/default.component.ts":
/*!******************************************!*\
  !*** ./src/default/default.component.ts ***!
  \******************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.settings */ "./src/default/app.settings.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
// component



// service


var DefaultComponent = /** @class */ (function () {
    function DefaultComponent(appSettings, router, platformId) {
        this.appSettings = appSettings;
        this.router = router;
        this.platformId = platformId;
        this.loading = false;
        this.settings = this.appSettings.settings;
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                    window.scrollTo(0, 0);
                }
            }
        });
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./default.component.html */ "./src/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/default/default.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            Object])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/default/default.module.ts":
/*!***************************************!*\
  !*** ./src/default/default.module.ts ***!
  \***************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./src/default/theme/utils/custom-overlay-container.ts");
/* harmony import */ var _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/utils/scroll-strategy */ "./src/default/theme/utils/scroll-strategy.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.settings */ "./src/default/app.settings.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _core_service_request_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/service/request.interceptor */ "./src/core/service/request.interceptor.ts");
/* harmony import */ var _core_service_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/service/auth.guard */ "./src/core/service/auth.guard.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _default_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default.routing */ "./src/default/default.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/index */ "./src/default/common/index.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/default/pages/not-found/not-found.component.ts");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./default.component */ "./src/default/default.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_reducer_interface__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/reducer.interface */ "./src/core/reducer.interface.ts");
/* harmony import */ var _core_lists_effects_lists_effect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/lists/effects/lists.effect */ "./src/core/lists/effects/lists.effect.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_lists_lists_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/lists/lists.service */ "./src/core/lists/lists.service.ts");
/* harmony import */ var _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/detail-page/detail-page.component */ "./src/default/pages/detail-page/detail-page.component.ts");
/* harmony import */ var _core_service_layout_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../core/service/layout_auth.guard */ "./src/core/service/layout_auth.guard.ts");
/* harmony import */ var _pages_layout_under_developing_under_developing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/layout/under-developing/under-developing.component */ "./src/default/pages/layout/under-developing/under-developing.component.ts");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm5/ngx-share-button.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../core/wishlist/wishlist.sandbox */ "./src/core/wishlist/wishlist.sandbox.ts");
/* harmony import */ var _core_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../core/wishlist/wishlist.service */ "./src/core/wishlist/wishlist.service.ts");
/* harmony import */ var _core_wishlist_effects_wishlist_effect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../core/wishlist/effects/wishlist.effect */ "./src/core/wishlist/effects/wishlist.effect.ts");
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













// modules



// components



// store actions






// component









var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_core_lists_effects_lists_effect__WEBPACK_IMPORTED_MODULE_22__["ListsEffect"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot(_core_reducer_interface__WEBPACK_IMPORTED_MODULE_21__["reducers"], { metaReducers: _core_reducer_interface__WEBPACK_IMPORTED_MODULE_21__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_core_lists_effects_lists_effect__WEBPACK_IMPORTED_MODULE_22__["ListsEffect"], _core_wishlist_effects_wishlist_effect__WEBPACK_IMPORTED_MODULE_33__["WishlistEffect"]]),
                _ngx_share_button__WEBPACK_IMPORTED_MODULE_28__["ShareButtonModule"].withConfig({
                    debug: true
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_29__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCfuTV5tYInC-Mj6YJ9LzRocVOdn3yCUGM'
                }),
                _default_routing__WEBPACK_IMPORTED_MODULE_14__["DefaultRoutingModule"]
            ],
            declarations: [
                _default_component__WEBPACK_IMPORTED_MODULE_18__["DefaultComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
                _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_25__["DetailPageComponent"],
                _common_index__WEBPACK_IMPORTED_MODULE_16__["CONTAINERS"].LayoutContainerComponent,
                _pages_layout_under_developing_under_developing_component__WEBPACK_IMPORTED_MODULE_27__["UnderDevelopingComponent"]
            ],
            providers: [
                _app_settings__WEBPACK_IMPORTED_MODULE_9__["AppSettings"],
                _core_service_layout_auth_guard__WEBPACK_IMPORTED_MODULE_26__["LayoutAuthGuard"],
                _core_service_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _core_service_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"],
                { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_7__["CustomOverlayContainer"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_MENU_SCROLL_STRATEGY"], useFactory: _theme_utils_scroll_strategy__WEBPACK_IMPORTED_MODULE_8__["menuScrollStrategy"], deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]] },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _core_service_request_interceptor__WEBPACK_IMPORTED_MODULE_11__["RequestInterceptor"],
                    multi: true
                },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_30__["APP_BASE_HREF"], useValue: '' },
                _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_23__["ListsSandbox"],
                _core_lists_lists_service__WEBPACK_IMPORTED_MODULE_24__["ListsService"],
                _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_31__["WishlistSandbox"],
                _core_wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_32__["WishlistService"]
            ],
            bootstrap: [_default_component__WEBPACK_IMPORTED_MODULE_18__["DefaultComponent"]]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "./src/default/default.routing.ts":
/*!****************************************!*\
  !*** ./src/default/default.routing.ts ***!
  \****************************************/
/*! exports provided: routes, DefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function() { return DefaultRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/default/pages/not-found/not-found.component.ts");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/index */ "./src/default/common/index.ts");
/* harmony import */ var _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/detail-page/detail-page.component */ "./src/default/pages/detail-page/detail-page.component.ts");
/* harmony import */ var _core_service_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/service/auth.guard */ "./src/core/service/auth.guard.ts");
/* harmony import */ var _core_service_layout_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/service/layout_auth.guard */ "./src/core/service/layout_auth.guard.ts");
/* harmony import */ var _pages_layout_under_developing_under_developing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/layout/under-developing/under-developing.component */ "./src/default/pages/layout/under-developing/under-developing.component.ts");
/* harmony import */ var _shared_get_directions_get_directions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/get-directions/get-directions.component */ "./src/default/shared/get-directions/get-directions.component.ts");
/* harmony import */ var _shared_components_help_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/help/help.component */ "./src/default/shared/components/help/help.component.ts");
/* harmony import */ var _shared_components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/contactus/contactus.component */ "./src/default/shared/components/contactus/contactus.component.ts");
/* harmony import */ var _shared_components_footer_pages_footer_pages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/footer-pages/footer-pages.component */ "./src/default/shared/components/footer-pages/footer-pages.component.ts");
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


// components










var routes = [
    {
        path: '',
        component: _common_index__WEBPACK_IMPORTED_MODULE_3__["CONTAINERS"].LayoutContainerComponent,
        canActivate: [_core_service_layout_auth_guard__WEBPACK_IMPORTED_MODULE_6__["LayoutAuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: './pages/home/home.module#HomeModule'
            },
            {
                path: 'home',
                loadChildren: './pages/home/home.module#HomeModule'
            },
            {
                path: 'shop/:name/:id',
                loadChildren: './pages/home-menu/home-menu.module#HomeMenuModule'
            },
            {
                path: 'underdeveloping',
                component: _pages_layout_under_developing_under_developing_component__WEBPACK_IMPORTED_MODULE_7__["UnderDevelopingComponent"],
                data: {
                    urls: [{ title: 'UNDER DEVELOPING', url: '' }]
                }
            },
            {
                path: 'getdirections',
                component: _shared_get_directions_get_directions_component__WEBPACK_IMPORTED_MODULE_8__["GetDirectionsComponent"],
                data: {
                    urls: [{ title: 'Get Directions', url: '' }]
                }
            },
            {
                path: 'account',
                canActivate: [_core_service_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: './pages/account/account.module#AccountModule',
                data: {
                    urls: [{ title: 'Account Settings', url: '' }]
                }
            },
            {
                path: 'cart',
                loadChildren: './pages/cart/cart.module#CartModule',
                data: {
                    urls: [{ title: 'Cart', url: '' }]
                }
            },
            {
                path: 'checkout',
                // canActivate: [AuthGuard],
                loadChildren: './pages/checkout/checkout.module#CheckoutModule',
                data: {
                    urls: [{ title: 'Checkout', url: '' }]
                }
            },
            {
                path: 'contact',
                loadChildren: './pages/contact/contact.module#ContactModule',
                // canActivate: [AuthGuard],
                data: {
                    urls: [{ title: 'Contact', url: '' }]
                }
            },
            {
                path: 'auth',
                // canActivate: [AuthGuard],
                loadChildren: './pages/Authentication/authentication.module#AuthenticationModule',
                data: {
                    urls: [{ title: 'Sign In', url: '' }]
                }
            },
            {
                path: 'page-detail/:id',
                component: _pages_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailPageComponent"]
            },
            {
                path: 'products',
                loadChildren: './pages/products/products.module#ProductsModule'
            },
            {
                path: 'products/:id',
                loadChildren: './pages/products/products.module#ProductsModule',
                data: {
                    urls: [{ title: 'Product Detail ', url: '' }]
                }
            },
            {
                path: 'wishlist',
                canActivate: [_core_service_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: './pages/wishlist/wishlist.module#WishlistModule',
                data: {
                    urls: [{ title: 'Wishlist', url: '' }]
                }
            },
            { path: 'help', component: _shared_components_help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"] },
            { path: 'contactus', component: _shared_components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"] },
            { path: 'faq', component: _shared_components_footer_pages_footer_pages_component__WEBPACK_IMPORTED_MODULE_11__["FooterPagesComponent"], pathMatch: 'full' },
            { path: 'privacy-policy', component: _shared_components_footer_pages_footer_pages_component__WEBPACK_IMPORTED_MODULE_11__["FooterPagesComponent"], pathMatch: 'full' },
            { path: 'term-and-condition', component: _shared_components_footer_pages_footer_pages_component__WEBPACK_IMPORTED_MODULE_11__["FooterPagesComponent"], pathMatch: 'full' },
            { path: 'Return', component: _shared_components_footer_pages_footer_pages_component__WEBPACK_IMPORTED_MODULE_11__["FooterPagesComponent"], pathMatch: 'full' },
        ]
    },
    {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];
var DefaultRoutingModule = /** @class */ (function () {
    function DefaultRoutingModule() {
    }
    DefaultRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], DefaultRoutingModule);
    return DefaultRoutingModule;
}());



/***/ }),

/***/ "./src/default/pages/detail-page/detail-page.component.html":
/*!******************************************************************!*\
  !*** ./src/default/pages/detail-page/detail-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>{{(listSandbox.pageDetail$ | async)?.title}}</h1>\r\n    <p [innerHtml] ='(listSandbox.pageDetail$ | async)?.content'></p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/default/pages/detail-page/detail-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/default/pages/detail-page/detail-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9kZXRhaWwtcGFnZS9kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/default/pages/detail-page/detail-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/default/pages/detail-page/detail-page.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponent", function() { return DetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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



var DetailPageComponent = /** @class */ (function () {
    function DetailPageComponent(router, activatedRoute, listSandbox) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.listSandbox = listSandbox;
        // subscribe route params and assign id to pageId (from footer component)
        this.activatedRoute.params.subscribe(function (param) {
            _this.pageId = param['id'];
            _this.getPageDetails(_this.pageId);
        });
    }
    DetailPageComponent.prototype.ngOnInit = function () {
    };
    // calls listSandbox getPageDetail for detail page
    DetailPageComponent.prototype.getPageDetails = function (id) {
        this.listSandbox.getPageDetail(id);
    };
    DetailPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-detail',
            template: __webpack_require__(/*! ./detail-page.component.html */ "./src/default/pages/detail-page/detail-page.component.html"),
            styles: [__webpack_require__(/*! ./detail-page.component.scss */ "./src/default/pages/detail-page/detail-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__["ListsSandbox"]])
    ], DetailPageComponent);
    return DetailPageComponent;
}());



/***/ }),

/***/ "./src/default/pages/layout/under-developing/under-developing.component.html":
/*!***********************************************************************************!*\
  !*** ./src/default/pages/layout/under-developing/under-developing.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"under-dev\">\r\n\r\n  <img src=\"assets/images/webdevelopment.png\">\r\n  <p>Under Developing</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/default/pages/layout/under-developing/under-developing.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/default/pages/layout/under-developing/under-developing.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".under-dev {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  padding-top: 120px; }\n  .under-dev p {\n    font-size: 25px;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #000;\n    margin: 15px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3BhZ2VzL2xheW91dC91bmRlci1kZXZlbG9waW5nL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHBhZ2VzXFxsYXlvdXRcXHVuZGVyLWRldmVsb3BpbmdcXHVuZGVyLWRldmVsb3BpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG1CQUFrQixFQVFuQjtFQWREO0lBUUksZ0JBQWU7SUFDZiwwQkFBeUI7SUFDekIsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2RlZmF1bHQvcGFnZXMvbGF5b3V0L3VuZGVyLWRldmVsb3BpbmcvdW5kZXItZGV2ZWxvcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bmRlci1kZXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/default/pages/layout/under-developing/under-developing.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/default/pages/layout/under-developing/under-developing.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UnderDevelopingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderDevelopingComponent", function() { return UnderDevelopingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var UnderDevelopingComponent = /** @class */ (function () {
    function UnderDevelopingComponent() {
    }
    UnderDevelopingComponent.prototype.ngOnInit = function () {
    };
    UnderDevelopingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-under-developing',
            template: __webpack_require__(/*! ./under-developing.component.html */ "./src/default/pages/layout/under-developing/under-developing.component.html"),
            styles: [__webpack_require__(/*! ./under-developing.component.scss */ "./src/default/pages/layout/under-developing/under-developing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnderDevelopingComponent);
    return UnderDevelopingComponent;
}());



/***/ }),

/***/ "./src/default/pages/not-found/not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/default/pages/not-found/not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n    <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n        <mat-card class=\"p-0 mat-elevation-z6 box\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                <mat-icon class=\"mat-icon-xlg\">error</mat-icon>\r\n                <h1 class=\"error\">404</h1>\r\n            </div>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z8 box-content-inner\">\r\n                    <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                    <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Enter search keyword...\">\r\n                    </mat-form-field>\r\n                </mat-card>\r\n                <div class=\"box-footer\">\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>home</mat-icon>\r\n                    </button>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>          \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/pages/not-found/not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/default/pages/not-found/not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border-radius: 0; }\n  .box .box-header {\n    height: 180px; }\n  .box .box-header .error {\n      font-size: 48px;\n      margin-bottom: 12px; }\n  .box .box-content {\n    position: relative;\n    height: 180px; }\n  .box .box-content .box-content-inner {\n      position: absolute;\n      top: -34px;\n      left: 34px;\n      right: 34px;\n      height: 180px; }\n  .box .box-content .box-content-header {\n      font-size: 16px;\n      text-transform: uppercase;\n      font-weight: 500; }\n  .box .box-content .box-content-header.server-error {\n        margin-bottom: 36px; }\n  .box .box-content .box-text {\n      margin-bottom: 10px;\n      text-align: center; }\n  .box .box-content .box-text::last-child {\n        margin-bottom: 15px; }\n  .box .box-content .box-footer {\n      position: relative;\n      bottom: 16px; }\n  .box .box-content .box-footer button {\n        min-width: 70px;\n        margin: 0 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3BhZ2VzL25vdC1mb3VuZC9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcc3RvcmUvc3JjXFxkZWZhdWx0XFxwYWdlc1xcbm90LWZvdW5kXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUEwQ25CO0VBM0NEO0lBR1EsY0FBYSxFQUtoQjtFQVJMO01BS1ksZ0JBQWU7TUFDZixvQkFBbUIsRUFDdEI7RUFQVDtJQVVRLG1CQUFrQjtJQUNsQixjQUFhLEVBK0JoQjtFQTFDTDtNQWFZLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsV0FBVTtNQUNWLFlBQVc7TUFDWCxjQUFhLEVBQ2hCO0VBbEJUO01Bb0JZLGdCQUFlO01BQ2YsMEJBQXlCO01BQ3pCLGlCQUFlLEVBSWxCO0VBMUJUO1FBd0JnQixvQkFBbUIsRUFDdEI7RUF6QmI7TUE0Qlksb0JBQW1CO01BQ25CLG1CQUFrQixFQUlyQjtFQWpDVDtRQStCZ0Isb0JBQW1CLEVBQ3RCO0VBaENiO01BbUNZLG1CQUFrQjtNQUNsQixhQUFZLEVBS2Y7RUF6Q1Q7UUFzQ2dCLGdCQUFlO1FBQ2YsY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAuYm94LWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIC5lcnJvcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3gtY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDsgICAgIFxyXG4gICAgICAgIC5ib3gtY29udGVudC1pbm5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0zNHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAzNHB4O1xyXG4gICAgICAgICAgICByaWdodDogMzRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC1jb250ZW50LWhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAmLnNlcnZlci1lcnJvcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC10ZXh0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICY6Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gtZm9vdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/pages/not-found/not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/default/pages/not-found/not-found.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    // navigate to home page
    NotFoundComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/default/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/default/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/account-buttons/account-buttons.component.html":
/*!**************************************************************************************!*\
  !*** ./src/default/shared/components/account-buttons/account-buttons.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"formActions\">\r\n    <div class=\"text-center mt-2\">\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/profile\">Public\r\n          profile\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/information\">Personal\r\n          information\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/address\">Address\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" (click)=\"navigateOnHelp()\">Need help with\r\n          my\r\n          profile</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
=======
<<<<<<< HEAD
module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"formActions\">\r\n    <div class=\"text-center mt-2\">\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/profile\">Public\r\n          profile\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/information\">Personal\r\n          information\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/address\">Address\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" (click)=\"navigateOnHelp()\">Need help with\r\n          my\r\n          profile</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
=======
module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n    <div class=\"text-center mt-2\">\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/profile\">Public\r\n          profile\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/information\">Personal\r\n          information\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" routerLink=\"/account/address\">Address\r\n          setting</button>\r\n      </div>\r\n      <div class=\"text-center mt-1\">\r\n        <button mat-button color=\"primary\" class=\"createAccountBtn actionBtn\" (click)=\"navigateOnHelp()\">Need help with\r\n          my\r\n          profile</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
>>>>>>> 57ed29bc45aa338488d3c7690a5be7b639c8be68
>>>>>>> 1e1854ea92d99e04dc535354f9c2173dca5ef944

/***/ }),

/***/ "./src/default/shared/components/account-buttons/account-buttons.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/default/shared/components/account-buttons/account-buttons.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy9hY2NvdW50LWJ1dHRvbnMvYWNjb3VudC1idXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/default/shared/components/account-buttons/account-buttons.component.ts":
/*!************************************************************************************!*\
  !*** ./src/default/shared/components/account-buttons/account-buttons.component.ts ***!
  \************************************************************************************/
/*! exports provided: AccountButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountButtonsComponent", function() { return AccountButtonsComponent; });
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


var AccountButtonsComponent = /** @class */ (function () {
    function AccountButtonsComponent(router) {
        this.router = router;
    }
    AccountButtonsComponent.prototype.ngOnInit = function () {
    };
    AccountButtonsComponent.prototype.navigateOnHelp = function () {
        this.router.navigate(['../help']);
    };
    AccountButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-buttons',
            template: __webpack_require__(/*! ./account-buttons.component.html */ "./src/default/shared/components/account-buttons/account-buttons.component.html"),
            styles: [__webpack_require__(/*! ./account-buttons.component.scss */ "./src/default/shared/components/account-buttons/account-buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccountButtonsComponent);
    return AccountButtonsComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/advertisment-product/advertisment-product.component.html":
/*!************************************************************************************************!*\
  !*** ./src/default/shared/components/advertisment-product/advertisment-product.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"productsWrap\">\r\n  <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n    <!-- <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\r\n      class=\"filter-row mat-elevation-z1 text-muted\">\r\n      <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <div>\r\n\r\n        <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n          <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n              <span>{{sort.order}}</span>\r\n            </button>\r\n          </span>\r\n        </mat-menu>\r\n      </div>\r\n    </div> -->\r\n    <!-- *ngIf=\"listSandbox.productLoading$ | async\" -->\r\n    <div class=\"wrapper\">\r\n      <div class=\"overlay\">\r\n        <div class=\"spinner-wrapper\">\r\n          <app-spinner [isShow]=\"listSandbox.productLoading$ | async\"></app-spinner>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngFor=\"let item of [1,2,3,4,5]\">\r\n      <div class=\"advertisement-heading\" *ngIf=\"((listSandbox.bannerList$ | async) | keyvalue)?.length\">\r\n        <h4>Dynamic Text Area</h4>\r\n      </div>\r\n      <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n\r\n        <!-- <div *ngFor=\"let product of (listSandbox.productlist$ | async)\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\r\n        fxFlex.sm=\"50\" class=\"col\">\r\n        <mat-card class=\"product-item text-center card-hover\">\r\n          <img *ngIf=\"product['Images'].defaultImage == 1\" style=\"height:200px\"\r\n            [src]=\"imagePath+ '?path=' + product['Images'].containerName + '&name=' + product['Images'].image + '&width=260&height=260'\"\r\n            onError=\"this.src='/assets/images/default_image.png';\">\r\n        </mat-card>\r\n      </div> -->\r\n        <!-- <div *ngFor=\"let product of listSandbox.bannerList$ | async; let  i= index\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\r\n        fxFlex.sm=\"50\" class=\"col\">\r\n        <a [routerLink]=\"['/products', product.categoryId]\" class=\"title text-truncate\">\r\n          <mat-card class=\"product-item text-center card-hover\">\r\n            <img src=\"/assets/images/mi{{i +1}}.jpg\" onError=\"this.src='/assets/images/default_image.png';\">\r\n          </mat-card>\r\n        </a>\r\n      </div> -->\r\n        <div *ngFor=\"let product of listSandbox.bannerList$ | async\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\r\n          fxFlex.sm=\"50\" class=\"col\">\r\n          <a [routerLink]=\"['/products', product.categoryId]\" class=\"title text-truncate\">\r\n            <mat-card class=\"product-item text-center card-hover\">\r\n              <img\r\n                [src]=\"imagePath + '?path=' + product.imagePath + '&name=' + product.image + '&width=260&height=260'\"  onError=\"this.src='/assets/images/default_image.png';\">\r\n            </mat-card>\r\n          </a>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/default/shared/components/advertisment-product/advertisment-product.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/default/shared/components/advertisment-product/advertisment-product.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del {\n  color: grey; }\n\n.mediaIcons {\n  max-height: 65px; }\n\n.shareAlign {\n  margin-left: 60%; }\n\n::ng-deep.app.green .mat-checkbox-checkmark-path {\n  stroke: green !important; }\n\n.bannercursor {\n  cursor: pointer; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.supvalidation {\n  color: red; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        cursor: pointer;\n        max-width: 100%;\n        height: 6vh; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n.fix-image {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-wrapper {\n  text-align: center; }\n\n.no-review {\n  text-align: center; }\n\n.big-carousel {\n  margin-top: 8px;\n  height: 300px; }\n\n.big-carousel .swiper-container {\n    padding: 2px;\n    height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper {\n      height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide {\n        height: 300px;\n        text-align: center; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide img {\n          cursor: pointer; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide .changeColor {\n          box-shadow: 1px -1px 0px 3px #0000FF; }\n\n.big-carousel .swiper-button-next.swiper-button-disabled,\n  .big-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.big-carousel .swiper-button-prev {\n    left: -10px; }\n\n.big-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2FkdmVydGlzbWVudC1wcm9kdWN0L0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcY29tcG9uZW50c1xcYWR2ZXJ0aXNtZW50LXByb2R1Y3RcXGFkdmVydGlzbWVudC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0kseUJBQXdCLEVBQzNCOztBQVFEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBVXJCOztBQVpEO0lBSVEsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsWUFBVyxFQUNkOztBQVJMO0lBVVEsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxnQkFBZSxFQTBCbEI7O0FBM0JEO0lBR1EsYUFBWSxFQWFmOztBQWhCTDtNQUtZLG1CQUFrQixFQVVyQjs7QUFmVDtRQU9nQixnQkFBZTtRQUNmLGdCQUFlO1FBQ2YsWUFBVyxFQUNkOztBQVZiOztJQW1CUSxXQUFVLEVBQ2I7O0FBcEJMO0lBc0JRLFlBQVcsRUFDZDs7QUF2Qkw7SUF5QlEsYUFBWSxFQUNmOztBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiw2QkFBNEI7RUFDNUIsYUFBWTtFQUNaLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUVRLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBSkw7RUFNUSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7O0FBR0w7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSTtJQUNJLGdCQUFlO0lBQ2YsdUNBQXVFLEVBQzFFLEVBQUE7O0FBR0w7RUFJSSwwQkFBeUIsRUFVNUI7O0FBZEQ7SUFVUSx3Q0FBdUM7SUFFdkMsK0NBQTZDLEVBQ2hEOztBQUdMO0VBQ0kscUJBQWlCO0tBQWpCLGtCQUFpQixFQUdwQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsY0FBYSxFQStCaEI7O0FBakNEO0lBSVEsYUFBWTtJQUNaLGNBQWEsRUFpQmhCOztBQXRCTDtNQU9ZLGNBQWEsRUFjaEI7O0FBckJUO1FBU2dCLGNBQWE7UUFDYixtQkFBa0IsRUFVckI7O0FBcEJiO1VBWW9CLGdCQUFlLEVBR2xCOztBQWZqQjtVQWlCb0IscUNBQW9DLEVBRXZDOztBQW5CakI7O0lBeUJRLFdBQVUsRUFDYjs7QUExQkw7SUE0QlEsWUFBVyxFQUNkOztBQTdCTDtJQStCUSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvYWR2ZXJ0aXNtZW50LXByb2R1Y3QvYWR2ZXJ0aXNtZW50LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ubWVkaWFJY29ucyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uc2hhcmVBbGlnbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAuYXBwLmdyZWVuIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xyXG4gICAgc3Ryb2tlOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAuYXBwLmdyZWVuIC5tYXQtbWVudS1wYW5lbCB7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICAvL21pbi13aWR0aDogOTFweCAhaW1wb3J0YW50O1xyXG4gICAgLy9tYXgtd2lkdGg6IDI0NnB4O1xyXG59XHJcblxyXG4uYmFubmVyY3Vyc29yIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdXB2YWxpZGF0aW9uIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zbWFsbC1jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIC5zd2lwZXItc2xpZGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZ2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2hhbmdlQ29sb3Ige1xyXG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMXB4IC0xcHggMHB4IDNweCAjMDAwMEZGO1xyXG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogNXB4IDdweCA4cHggIzAwMDBGRjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQuem9vbS12aWV3ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLm10LTE2IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLm1hdC1saXN0LnJldmlld3Mge1xyXG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWF2YXRhci5yZXZpZXctYXV0aG9yIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUudGV4dCB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZ1bGwtZGVzYyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiB6b29tLWluO1xyXG4gICAgICAgIGN1cnNvcjogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL290aGVycy96b29tLnN2ZycpIDEwIDEwLCB6b29tLWluO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1ob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjA1KTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsIDU3LCAxMDcsIC4xKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjRweCByZ2JhKDYyLCA1NywgMTA3LCAuMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maXgtaW1hZ2Uge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAvL3dpZHRoOiA0NDJweDtcclxuICAgIC8vaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLnNwaW5uZXItd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uby1yZXZpZXcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlnLWNhcm91c2VsIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgLnN3aXBlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGFuZ2VDb2xvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMHB4IDNweCAjMDAwMEZGO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDVweCA3cHggOHB4ICMwMDAwRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/advertisment-product/advertisment-product.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/default/shared/components/advertisment-product/advertisment-product.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdvertismentProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertismentProductComponent", function() { return AdvertismentProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/default/shared/components/products-carousel/product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
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







var AdvertismentProductComponent = /** @class */ (function () {
    function AdvertismentProductComponent(activatedRoute, dialog, snackBar, router, listSandbox, configService, changeDetectRef, platformId) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        this.changeDetectRef = changeDetectRef;
        this.platformId = platformId;
        // side nav
        this.sidenavOpen = true;
        // card view
        this.viewType = 'grid';
        this.viewCol = 14.28;
        this.sortData = 'Price Low To High';
        // parameters for product list
        this.startKey = 0;
        this.viewOrder = 'ASC';
        this.keyword = '';
        this.categoryId = '';
        this.brand = '';
        this.priceFrom = '';
        this.priceTo = '';
        // pagination
        this.pagesize = 100;
        this.index = 0;
        // product list
        this.isClicked = [];
        // discount price
        this.discountPrice = 20;
        this.fiftyPercent = 50;
        this.subscription = [];
        // subscribe route params
        this.subscription.push(this.activatedRoute.queryParams.subscribe(function (query) {
            if (query['keyword']) {
                _this.keyword = query['keyword'];
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                    localStorage.setItem('keywordData', query['keyword']);
                    _this.keyword = localStorage.getItem('keywordData');
                }
                // this.getProductList(this.startKey, this.viewOrder, this.categoryId);
            }
            if (query['brand']) {
                _this.brand = query['brand'];
                // this.getProductList(this.startKey, this.viewOrder, this.categoryId);
            }
        }));
        this.subscription.push(this.activatedRoute.params.subscribe(function (param) {
            _this.queryParams = param;
            // if route params contains id assign id to the parameter categoryId
            if (_this.queryParams.id) {
                if (_this.queryParams.id === 'All' && !_this.brand) {
                    _this.isClicked = [];
                    _this.brand = '';
                    _this.keyword = '';
                    _this.categoryId = '';
                    // this.getProductList(this.startKey, this.viewOrder, this.categoryId);
                }
                else {
                    _this.isClicked = [];
                    _this.isClicked[_this.queryParams.id] = true;
                    _this.categoryId = _this.queryParams.id;
                    // this.getProductList(this.startKey, this.viewOrder, this.categoryId);
                }
            }
        }));
    }
    // initially remove local storage and calls listSandbox getSettings
    AdvertismentProductComponent.prototype.ngOnInit = function () {
        this.getAdvertisementProductList();
        if (!this.queryParams.id && this.keyword === '') {
            // this.getProductList(this.startKey, this.viewOrder, this.categoryId);
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('fromPrice');
            localStorage.removeItem('priceTo');
        }
        // this.listSandbox.getSettings();
        this.sortings = [
            { order: 'Price Low To High', value: 'ASC' },
            { order: 'Price High To Low', value: 'DESC' }
        ];
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
    };
    /**
     * fetch product list from service. calling getProductList function from sandbox
     *
     * @param limit number of records to be load
     * @param offset startkey of the records to be load
     * @param manufacturerId brand id to be filtered
     * @param categoryId category id to be filtered
     * @param price price to be filtered
     * @param priceFrom filter (from price)
     * @param keyword filter (to price)
     */
    AdvertismentProductComponent.prototype.getProductList = function (offset, price, category) {
        var params = {};
        params.limit = this.pagesize;
        params.offset = offset;
        if (this.brand == null) {
            this.brand = '';
        }
        params.manufacturerId = this.brand;
        params.categoryId = this.categoryId;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('categoryIdDataKey', this.categoryId);
        }
        params.keyword = this.keyword;
        params.price = price;
        if (this.priceFrom) {
            params.priceFrom = this.priceFrom;
        }
        else {
            params.priceFrom = 0;
        }
        if (this.condition) {
            params.condition = this.condition;
        }
        params.priceTo = this.priceTo;
        this.listSandbox.getProductList(params);
        params.price = '';
        params.count = true;
        this.listSandbox.getProductCount(params);
    };
    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    AdvertismentProductComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProductDialogComponent"], {
            panelClass: 'product-dialog',
            data: product
        });
        dialogRef.afterClosed().subscribe(function (products) {
            if (products) {
                _this.router.navigate(['/products/productdetails', products.productId]);
            }
        });
    };
    // sidebar open close based on the window size
    AdvertismentProductComponent.prototype.onWindowResize = function () {
        window.innerWidth < 960
            ? (this.sidenavOpen = false)
            : (this.sidenavOpen = true);
        window.innerWidth < 1280 ? (this.viewCol = 33.3) : (this.viewCol = 14.28);
    };
    // changing the view type
    AdvertismentProductComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    // calls getProductList for sorting list
    AdvertismentProductComponent.prototype.changeSorting = function (sort) {
        this.sortData = sort.order;
        this.viewOrder = sort.value;
        // this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    // calls getProductList for pagination
    AdvertismentProductComponent.prototype.onPageChange = function (event) {
        this.startKey = event.pageSize * event.pageIndex;
        this.pagesize = event.pageSize;
        this.index = event.pageIndex;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.priceFrom = localStorage.getItem('fromPrice');
            this.priceTo = localStorage.getItem('priceTo');
        }
        if (this.priceTo == null) {
            this.priceTo = '';
        }
        // this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    /**
     *  receive data which is emitted from the child component through event emitter,
     * set's local storage value(brandKey). And calls getProductList.
     *
     *  @param event from event  emitter.
     *
     *  **/
    AdvertismentProductComponent.prototype.receiveProgress = function (event) {
        this.priceFrom = '';
        this.brand = event.manufacturerId;
        // this.categoryId = event.categoryId;
        this.priceFrom = event.priceFrom;
        this.priceTo = event.priceTo;
        this.condition = event.condition;
        var defaultCallValue = this.viewOrder;
        this.categoryId = event.categoryId;
        // this.getProductList(0, defaultCallValue, event.categoryId);
    };
    AdvertismentProductComponent.prototype.getAdvertisementProductList = function () {
        var params = {};
        params.limit = 10;
        params.offset = 0;
        // params.parent = this.categoryId
        this.listSandbox.getAdvertisementList(params);
    };
    AdvertismentProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], AdvertismentProductComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AdvertismentProductComponent.prototype, "onWindowResize", null);
    AdvertismentProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisment-product',
            template: __webpack_require__(/*! ./advertisment-product.component.html */ "./src/default/shared/components/advertisment-product/advertisment-product.component.html"),
            styles: [__webpack_require__(/*! ./advertisment-product.component.scss */ "./src/default/shared/components/advertisment-product/advertisment-product.component.scss")]
        })
        // implements OnInit, OnDestroy, AfterViewInit
        ,
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__["ListsSandbox"],
            src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            Object])
    ], AdvertismentProductComponent);
    return AdvertismentProductComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/banners/banners.component.html":
/*!**********************************************************************!*\
  !*** ./src/default/shared/components/banners/banners.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banners-container offer-products\">\r\n\r\n    <h3>Offer Products</h3>\r\n\r\n    <div class=\"\"  fxLayout=\"column\" fxLayout.gt-sm=\"row\" >\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"40\">\r\n\r\n            <mat-card class=\"product-item product-item-l\">\r\n                <span class=\"discount\"> 20% </span>\r\n                <a  class=\"image-link\">\r\n                    <img src=\"assets/images/products-img.png\" class=\"swiper-lazy\"/>\r\n                </a>\r\n                <!--<h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     -->\r\n                <a class=\"title text-truncate\">\r\n                    Multicolour Puma Jacket for Men's sports wear\r\n                </a>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                        <p class=\"new-price\"><span class=\"old-price\">$200.00</span> $150.00 </p>\r\n                    </div>\r\n                    <div class=\"ratings-r\">\r\n                        <ul>\r\n                            <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                            <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                            <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                            <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                            <li><img src=\"assets/images/star-grey.png\"> </li>\r\n                        </ul>\r\n                        <p>6 ratings</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"divider mt-2\"></div>\r\n                <div class=\"icons\">\r\n                    <!--<app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>-->\r\n                    <div class=\"flex prod-icon\">\r\n                        <div class=\"flex picons picons-lg\">\r\n                            <a href=\"javascript:void(0)\"> <img src=\"assets/images/heart-bg.png\"> </a>\r\n                            <a href=\"javascript:void(0)\"> <img src=\"assets/images/view-bg.png\"> </a>\r\n                        </div>\r\n                        <div class=\"cart-lk bc-lk\">\r\n                            <a href=\"javascript:void(0)\"> Add to Cart </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-card>\r\n\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\r\n\r\n            <div class=\"flex op-r\">\r\n\r\n                <div class=\"opr-col\">\r\n                    <mat-card class=\"product-item product-item-l product-item-r\">\r\n                        <span class=\"discount d50\"> 50% </span>\r\n                        <a  class=\"image-link\">\r\n                            <img src=\"assets/images/products-img-sm.png\" class=\"swiper-lazy\"/>\r\n                        </a>\r\n                        <!--<h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     -->\r\n                        <a class=\"title text-truncate\">\r\n                            Multicolour Puma Jacket for Men's sports wear\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                <p class=\"new-price\"><span class=\"old-price\">$200.00</span> $150.00 </p>\r\n                            </div>\r\n                            <div class=\"ratings-r\">\r\n                                <ul>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-grey.png\"> </li>\r\n                                </ul>\r\n                                <p>6 ratings</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                            <!--<app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>-->\r\n                            <div class=\"flex prod-icon\">\r\n                                <div class=\"flex picons\">\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/heart.png\"> </a>\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/view.png\"> </a>\r\n                                </div>\r\n                                <div class=\"cart-lk\">\r\n                                    <a href=\"javascript:void(0)\"> Add to Cart </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n\r\n                <div class=\"opr-col\">\r\n                    <mat-card class=\"product-item product-item-l product-item-r\">\r\n                        <span class=\"discount d50\"> 50% </span>\r\n                        <a  class=\"image-link\">\r\n                            <img src=\"assets/images/products-img-sm.png\" class=\"swiper-lazy\"/>\r\n                        </a>\r\n                        <!--<h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     -->\r\n                        <a class=\"title text-truncate\">\r\n                            Multicolour Puma Jacket for Men's sports wear\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                <p class=\"new-price\"><span class=\"old-price\">$200.00</span> $150.00 </p>\r\n                            </div>\r\n                            <div class=\"ratings-r\">\r\n                                <ul>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-grey.png\"> </li>\r\n                                </ul>\r\n                                <p>6 ratings</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                            <!--<app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>-->\r\n                            <div class=\"flex prod-icon\">\r\n                                <div class=\"flex picons\">\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/heart.png\"> </a>\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/view.png\"> </a>\r\n                                </div>\r\n                                <div class=\"cart-lk\">\r\n                                    <a href=\"javascript:void(0)\"> Add to Cart </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n\r\n                <div class=\"opr-col\">\r\n                    <mat-card class=\"product-item product-item-l product-item-r\">\r\n                        <span class=\"discount d50\"> 50% </span>\r\n                        <a  class=\"image-link\">\r\n                            <img src=\"assets/images/products-img-sm.png\" class=\"swiper-lazy\"/>\r\n                        </a>\r\n                        <!--<h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     -->\r\n                        <a class=\"title text-truncate\">\r\n                            Multicolour Puma Jacket for Men's sports wear\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                <p class=\"new-price\"><span class=\"old-price\">$200.00</span> $150.00 </p>\r\n                            </div>\r\n                            <div class=\"ratings-r\">\r\n                                <ul>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-grey.png\"> </li>\r\n                                </ul>\r\n                                <p>6 ratings</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                            <!--<app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>-->\r\n                            <div class=\"flex prod-icon\">\r\n                                <div class=\"flex picons\">\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/heart.png\"> </a>\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/view.png\"> </a>\r\n                                </div>\r\n                                <div class=\"cart-lk\">\r\n                                    <a href=\"javascript:void(0)\"> Add to Cart </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n\r\n                <div class=\"opr-col\">\r\n                    <mat-card class=\"product-item product-item-l product-item-r\">\r\n                        <span class=\"discount d50\"> 50% </span>\r\n                        <a  class=\"image-link\">\r\n                            <img src=\"assets/images/products-img-sm.png\" class=\"swiper-lazy\"/>\r\n                        </a>\r\n                        <!--<h4 class=\"category text-muted\">{{ ( appService.Data.categories | filterById : product.categoryId )?.name }}</h4>                                                                     -->\r\n                        <a class=\"title text-truncate\">\r\n                            Multicolour Puma Jacket for Men's sports wear\r\n                        </a>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                <p class=\"new-price\"><span class=\"old-price\">$200.00</span> $150.00 </p>\r\n                            </div>\r\n                            <div class=\"ratings-r\">\r\n                                <ul>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-clr.png\"> </li>\r\n                                    <li><img src=\"assets/images/star-grey.png\"> </li>\r\n                                </ul>\r\n                                <p>6 ratings</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"divider mt-2\"></div>\r\n                        <div class=\"icons\">\r\n                            <!--<app-controls [product]=\"product\" (onOpenProductDialog)=\"openProductDialog(product)\"></app-controls>-->\r\n                            <div class=\"flex prod-icon\">\r\n                                <div class=\"flex picons\">\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/heart.png\"> </a>\r\n                                    <a href=\"javascript:void(0)\"> <img src=\"assets/images/view.png\"> </a>\r\n                                </div>\r\n                                <div class=\"cart-lk\">\r\n                                    <a href=\"javascript:void(0)\"> Add to Cart </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/banners/banners.component.scss":
/*!**********************************************************************!*\
  !*** ./src/default/shared/components/banners/banners.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banners-container {\n  margin: 22px 0px; }\n  .banners-container .banner {\n    position: relative;\n    margin: 8px;\n    padding: 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    overflow: hidden;\n    transition: 0.15s ease-in; }\n  .banners-container.offer-products h3 {\n    font-size: 20px;\n    color: black;\n    font-weight: 600;\n    padding: 20px 0;\n    width: 100%; }\n  .banners-container.offer-products .product-item-l {\n    height: 100%;\n    padding: 10px 16px; }\n  .banners-container.offer-products .product-item-l span.discount {\n      position: absolute;\n      width: 70px;\n      height: 70px;\n      top: 20px;\n      right: 20px;\n      border-radius: 50%;\n      background: #027600;\n      text-align: center;\n      padding: 15px 0;\n      font-size: 24px;\n      color: white;\n      font-weight: 500;\n      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25); }\n  .banners-container.offer-products .product-item-l a.image-link {\n      display: block;\n      margin: 0 auto;\n      width: 100%;\n      text-align: center; }\n  .banners-container.offer-products .product-item-l a.image-link img {\n        margin-bottom: 0; }\n  .banners-container.offer-products .product-item-l .icons {\n      margin-top: 8px; }\n  .banners-container.offer-products .product-item-l a.title {\n      font-size: 22px;\n      font-weight: 500;\n      color: black !important; }\n  .banners-container.offer-products .product-item-l .new-price {\n      font-size: 22px; }\n  .banners-container.offer-products .product-item-l .new-price span.old-price {\n        font-size: 14px;\n        font-weight: 400;\n        color: #999; }\n  .banners-container.offer-products .product-item-l .prices {\n      margin: 0; }\n  .banners-container.offer-products .product-item-l .ratings-r ul {\n      list-style: none; }\n  .banners-container.offer-products .product-item-l .ratings-r ul li {\n        display: inline-block;\n        margin-left: 5px; }\n  .banners-container.offer-products .product-item-l .ratings-r ul li img {\n          margin-bottom: 0; }\n  .banners-container.offer-products .product-item-l .ratings-r p {\n      text-align: right;\n      font-size: 14px;\n      font-weight: 500;\n      color: #999; }\n  .banners-container.offer-products .product-item-l.product-item-r span.discount {\n      width: 37px;\n      height: 37px;\n      padding: 8px 0;\n      font-size: 14px; }\n  .banners-container.offer-products .product-item-l.product-item-r span.discount.d50 {\n        background: #e1ae09; }\n  .banners-container.offer-products .product-item-l.product-item-r a.title {\n      font-size: 16px; }\n  .banners-container.offer-products .product-item-l.product-item-r .new-price {\n      font-size: 14px; }\n  .banners-container.offer-products .product-item-l.product-item-r .new-price.old-price {\n        font-size: 12px; }\n  .banners-container.offer-products .product-item-l.product-item-r .ratings-r ul li img {\n      width: 11px; }\n  .banners-container.offer-products .product-item-l.product-item-r .ratings-r p {\n      font-size: 12px; }\n  .banners-container.offer-products .op-r {\n    justify-content: space-between;\n    padding-left: 20px;\n    height: 100%; }\n  .banners-container.offer-products .op-r .opr-col {\n      height: 48.6%;\n      width: 49%;\n      margin-bottom: 15px; }\n  @media (max-width: 959px) {\n  .banners-container .banner .info {\n    padding: 30px 0px; }\n    .banners-container .banner .info h1 {\n      font-size: 24px; }\n    .banners-container .banner .info h2 {\n      font-size: 16px; }\n    .banners-container .banner .info h3 {\n      font-size: 14px; } }\n  * {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2Jhbm5lcnMvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFxiYW5uZXJzXFxiYW5uZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQWdCLEVBb0luQjtFQXJJRDtJQUdRLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsV0FBVTtJQUNWLDZCQUE0QjtJQUM1Qix1QkFBc0I7SUFDdEIsNEJBQTJCO0lBQzNCLGlCQUFnQjtJQUNoQiwwQkFBeUIsRUFFNUI7RUFaTDtJQWVZLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLFlBQVcsRUFDZDtFQXBCVDtJQXNCWSxhQUFZO0lBQ1osbUJBQWtCLEVBa0dyQjtFQXpIVDtNQXlCZ0IsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxhQUFZO01BQ1osVUFBUztNQUNULFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsb0JBQW1CO01BQ25CLG1CQUFrQjtNQUNsQixnQkFBZTtNQUNmLGdCQUFlO01BQ2YsYUFBWTtNQUNaLGlCQUFnQjtNQUdoQixnREFBNEMsRUFDL0M7RUF4Q2I7TUEwQ2dCLGVBQWM7TUFDZCxlQUFjO01BQ2QsWUFBVztNQUNYLG1CQUFrQixFQUlyQjtFQWpEYjtRQStDb0IsaUJBQWdCLEVBQ25CO0VBaERqQjtNQW1EZ0IsZ0JBQWUsRUFDbEI7RUFwRGI7TUFzRGdCLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLHdCQUFzQixFQUN6QjtFQXpEYjtNQTJEZ0IsZ0JBQWUsRUFNbEI7RUFqRWI7UUE2RG9CLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLFlBQVcsRUFDZDtFQWhFakI7TUFtRWdCLFVBQVMsRUFDWjtFQXBFYjtNQXVFb0IsaUJBQWdCLEVBUW5CO0VBL0VqQjtRQXlFd0Isc0JBQXFCO1FBQ3JCLGlCQUFnQixFQUluQjtFQTlFckI7VUE0RTRCLGlCQUFnQixFQUNuQjtFQTdFekI7TUFpRm9CLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixZQUFXLEVBQ2Q7RUFyRmpCO01BMEZvQixZQUFXO01BQ1gsYUFBWTtNQUNaLGVBQWM7TUFDZCxnQkFBZSxFQUlsQjtFQWpHakI7UUErRndCLG9CQUFtQixFQUN0QjtFQWhHckI7TUFtR29CLGdCQUFlLEVBQ2xCO0VBcEdqQjtNQXNHb0IsZ0JBQWUsRUFJbEI7RUExR2pCO1FBd0d3QixnQkFBZSxFQUNsQjtFQXpHckI7TUErR2dDLFlBQVcsRUFDZDtFQWhIN0I7TUFvSHdCLGdCQUFlLEVBQ2xCO0VBckhyQjtJQTJIWSwrQkFBOEI7SUFDOUIsbUJBQWtCO0lBQ2xCLGFBQVksRUFNZjtFQW5JVDtNQStIZ0IsY0FBYTtNQUNiLFdBQVU7TUFDVixvQkFBbUIsRUFDdEI7RUFNYjtFQUNJO0lBR1ksa0JBQWlCLEVBVXBCO0lBYlQ7TUFLZ0IsZ0JBQWUsRUFDbEI7SUFOYjtNQVFnQixnQkFBZSxFQUNsQjtJQVRiO01BV2dCLGdCQUFlLEVBQ2xCLEVBQUE7RUFLakI7RUFDSSx1QkFBc0IsRUFDekIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvYmFubmVycy9iYW5uZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYW5uZXJzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMjJweCAwcHg7XHJcbiAgICAuYmFubmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgICAgICBcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW47XHJcblxyXG4gICAgfVxyXG4gICAgJi5vZmZlci1wcm9kdWN0cyB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtaXRlbS1sIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIHNwYW4uZGlzY291bnQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMjc2MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjI1KTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjI1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmltYWdlLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYS50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmV3LXByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIHNwYW4ub2xkLXByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2VzIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmF0aW5ncy1yIHtcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnByb2R1Y3QtaXRlbS1yIHtcclxuICAgICAgICAgICAgICAgIHNwYW4uZGlzY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5kNTAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTFhZTA5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uZXctcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAmLm9sZC1wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmF0aW5ncy1yIHtcclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaWNvbnMge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3AtciB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC5vcHItY29sIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDguNiU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkgeyBcclxuICAgIC5iYW5uZXJzLWNvbnRhaW5lcntcclxuICAgICAgICAuYmFubmVye1xyXG4gICAgICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59Il19 */"

/***/ }),

/***/ "./src/default/shared/components/banners/banners.component.ts":
/*!********************************************************************!*\
  !*** ./src/default/shared/components/banners/banners.component.ts ***!
  \********************************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var BannersComponent = /** @class */ (function () {
    function BannersComponent() {
        this.banners = [];
    }
    BannersComponent.prototype.ngOnInit = function () { };
    BannersComponent.prototype.getBgImage = function (index) {
        var bgImage = {
            'background-image': index != null
                ? 'url(" + this.banners[index].image + ")'
                : 'url(https://via.placeholder.com/600x400/ff0000/fff/)'
        };
        return bgImage;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BannersComponent.prototype, "banners", void 0);
    BannersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banners',
            template: __webpack_require__(/*! ./banners.component.html */ "./src/default/shared/components/banners/banners.component.html"),
            styles: [__webpack_require__(/*! ./banners.component.scss */ "./src/default/shared/components/banners/banners.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannersComponent);
    return BannersComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/brands-carousel/brands-carousel.component.html":
/*!**************************************************************************************!*\
  !*** ./src/default/shared/components/brands-carousel/brands-carousel.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"brands-carousel\">\r\n    <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n        <div class=\"swiper-wrapper h-100\">\r\n            <div *ngFor=\"let brand of brands\" class=\"swiper-slide\">\r\n                <div class=\"p-0\">\r\n                    <a class=\"brand-item\">\r\n                        <img (click)=\"selectBrand(brand.manufacturerId)\" [src]=\"imagePath + '?path=' + brand.imagePath + '&name=' + brand.image +'&width=260&height=150'\" onError=\"this.src='/assets/images/default_image.png';\" class=\"swiper-lazy\">\r\n                    </a>\r\n                    <!-- <div class=\"swiper-lazy-preloader\"></div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/brands-carousel/brands-carousel.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/default/shared/components/brands-carousel/brands-carousel.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brands-carousel {\n  _background: white;\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px; }\n  .brands-carousel h3 {\n    font-size: 20px;\n    color: black;\n    font-weight: 600;\n    padding: 20px 0;\n    width: 100%; }\n  .brands-carousel .swiper-container {\n    padding: 8px 2px;\n    margin: 0 14px;\n    background: white;\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35); }\n  .brands-carousel .swiper-container .brand-item {\n      cursor: pointer;\n      height: 80px;\n      padding: 16px;\n      display: flex;\n      align-items: center; }\n  .brands-carousel .swiper-container .brand-item img {\n        max-width: 100%;\n        max-height: 100%;\n        margin: 0 auto; }\n  .brands-carousel .swiper-button-prev {\n    left: -10px;\n    border-radius: 4px;\n    background: #cfcfcf; }\n  .brands-carousel .swiper-button-next {\n    right: -10px;\n    border-radius: 4px;\n    background: #cfcfcf; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2JyYW5kcy1jYXJvdXNlbC9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcc3RvcmUvc3JjXFxkZWZhdWx0XFxzaGFyZWRcXGNvbXBvbmVudHNcXGJyYW5kcy1jYXJvdXNlbFxcYnJhbmRzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQXVDdEI7RUE1Q0Q7SUFPUSxnQkFBZTtJQUNmLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixZQUFXLEVBQ2Q7RUFaTDtJQWNRLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUdsQixnREFBK0MsRUFhbEQ7RUFqQ0w7TUFzQlksZ0JBQWU7TUFDZixhQUFZO01BQ1osY0FBYTtNQUNiLGNBQWE7TUFDYixvQkFBbUIsRUFNdEI7RUFoQ1Q7UUE0QmdCLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLGVBQWMsRUFDakI7RUEvQmI7SUFtQ1EsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixvQkFBbUIsRUFDdEI7RUF0Q0w7SUF3Q1EsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvYnJhbmRzLWNhcm91c2VsL2JyYW5kcy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZHMtY2Fyb3VzZWwge1xyXG4gICAgX2JhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAgICAgICAuYnJhbmQtaXRlbSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjZmNmY2Y7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjZmNmY2Y7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/shared/components/brands-carousel/brands-carousel.component.ts":
/*!************************************************************************************!*\
  !*** ./src/default/shared/components/brands-carousel/brands-carousel.component.ts ***!
  \************************************************************************************/
/*! exports provided: BrandsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsCarouselComponent", function() { return BrandsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/lists/lists.service */ "./src/core/lists/lists.service.ts");
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




var BrandsCarouselComponent = /** @class */ (function () {
    function BrandsCarouselComponent(configService, router, listService) {
        this.configService = configService;
        this.router = router;
        this.listService = listService;
        // decorator
        this.brands = [];
        // configuration
        this.config = {};
        // brands
        this.brandId = '';
        // public priceFrom = '0';
        // public priceTo: any = 1000;
        this.priceFrom = '';
        this.priceTo = '';
    }
    // intially get data from configService
    BrandsCarouselComponent.prototype.ngOnInit = function () {
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
    };
    /**
     *  selecting brand in the brand list.
     *  Then calls getProducts to refresh the product list,
     *  set ,get,remove local storage for brandId.
     *  remove brandSelectionKey local storage.
     *  **/
    BrandsCarouselComponent.prototype.selectBrand = function (brandId) {
        this.brandId = brandId;
        this.router.navigate(['/products'], { queryParams: { brand: brandId } });
    };
    /**
     * Emit param to product component
     * @param manufacturerId to product component
     * */
    BrandsCarouselComponent.prototype.getProduct = function () {
        var params = {};
        params.manufacturerId = this.brandId;
        params.priceFrom = this.priceFrom;
        params.priceTo = this.priceTo;
        this.listService.getBrand(params);
        this.router.navigate(['/products']);
    };
    // function calls at finally
    BrandsCarouselComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: 'slide',
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3
                },
                960: {
                    slidesPerView: 4
                },
                1280: {
                    slidesPerView: 5
                },
                1500: {
                    slidesPerView: 6
                }
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BrandsCarouselComponent.prototype, "brands", void 0);
    BrandsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brands-carousel',
            template: __webpack_require__(/*! ./brands-carousel.component.html */ "./src/default/shared/components/brands-carousel/brands-carousel.component.html"),
            styles: [__webpack_require__(/*! ./brands-carousel.component.scss */ "./src/default/shared/components/brands-carousel/brands-carousel.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_service_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_lists_lists_service__WEBPACK_IMPORTED_MODULE_3__["ListsService"]])
    ], BrandsCarouselComponent);
    return BrandsCarouselComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/breadcrumb/breadcrumb.component.html":
/*!****************************************************************************!*\
  !*** ./src/default/shared/components/breadcrumb/breadcrumb.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb light-block\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">{{pageInfo?.title}}</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of pageInfo?.urls; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <a [hidden]=\"i == (pageInfo.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.title}}</a>\r\n                <span [hidden]=\"i != (pageInfo.length - 1)\" class=\"breadcrumb-title active\"><b>{{breadcrumb.title}}</b></span>\r\n            </div>\r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/default/shared/components/breadcrumb/breadcrumb.component.scss":
/*!****************************************************************************!*\
  !*** ./src/default/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.breadcrumb {\n  padding: 8px 0;\n  box-shadow: none;\n  margin-bottom: 16px; }\n.breadcrumb a, .breadcrumb span {\n    font-size: 13px;\n    text-decoration: none;\n    color: inherit; }\n.breadcrumb .mat-icon {\n    font-size: 20px;\n    height: 20px;\n    width: 20px;\n    padding: 0 6px;\n    opacity: 0.7; }\n.breadcrumb .breadcrumb-title.active {\n    text-transform: uppercase; }\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n    display: inline-block;\n    padding-right: .5rem;\n    padding-left: .5rem;\n    content: \"»\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFxicmVhZGNydW1iXFxicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQjtFQUNJLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBc0J0QjtBQXpCRDtJQUtRLGdCQUFlO0lBQ2Ysc0JBQXFCO0lBQ3JCLGVBQWMsRUFDakI7QUFSTDtJQVVRLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLFlBQVc7SUFDWCxlQUFjO0lBQ2QsYUFBWSxFQUNmO0FBZkw7SUFpQlEsMEJBQXlCLEVBQzVCO0FBbEJMO0lBb0JRLHNCQUFxQjtJQUNyQixxQkFBb0I7SUFDcEIsb0JBQW1CO0lBQ25CLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4gIC5icmVhZGNydW1iIGEsIC5icmVhZGNydW1iIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7IH1cbiAgLmJyZWFkY3J1bWIgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgIG9wYWNpdHk6IDAuNzsgfVxuICAuYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICBjb250ZW50OiBcIsK7XCI7IH1cbiIsIi5icmVhZGNydW1ie1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGEsIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItaXRlbSsuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgICAgICBjb250ZW50OiBcIsK7XCI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**************************************************************************!*\
  !*** ./src/default/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav-menu/sidenav-menu.service */ "./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, title, sidenavMenuService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.sidenavMenuService = sidenavMenuService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.activatedRoute; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (route) { return route.outlet === 'primary'; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            // this.title.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    // close subMenus
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/default/shared/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/default/shared/components/breadcrumb/breadcrumb.component.scss")],
            providers: [_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_2__["SidenavMenuService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_2__["SidenavMenuService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/cart/cart.component.html":
/*!****************************************************************!*\
  !*** ./src/default/shared/components/cart/cart.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\" class='navcart'>\r\n    <app-top-menu></app-top-menu>\r\n    <button mat-button [matMenuTriggerFor]=\"cartMenu\" #cartMenuTrigger=\"matMenuTrigger\" class=\"flex-row-button headerCartIcon\">\r\n        <mat-icon class=\"mat-icon-lg\"><img src=\"../../../assets/images/Buy.png\" /></mat-icon>\r\n        <span fxShow=\"false\" fxShow.gt-sm class=\"blackStyle\">Cart</span>\r\n        <span *ngIf=\"(cartSandbox.cartlistCount$ | async) > 0\" class=\"cart-items-count\">{{cartSandbox.cartlistCount$ |\r\n            async}}</span>\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxShow=\"false\" fxShow.gt-xs class=\"top-cart\">\r\n            <span *ngIf=\"(cartSandbox.cartlistCount$ | async) > 0\">{{cartSandbox.cartlistCount$ | async}} item<span\r\n                    *ngIf=\"(cartSandbox.cartlistCount$ | async) > 1\">s</span> :\r\n                <span>$ {{cartSandbox.totalCartPrice$ | async}}</span>\r\n            </span>\r\n        </div>\r\n        <!-- <mat-icon class=\"mat-icon-sm\">arrow_drop_down</mat-icon> -->\r\n    </button>\r\n    <mat-menu #cartMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\"\r\n        class=\"top-menu-dropdown cart-pane cart-dropdown\">\r\n        <span (mouseleave)=\"cartMenuTrigger.closeMenu()\" class=\"d-block\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n                <b><span>{{cartSandbox.cartlistCount$ | async}} ITEM<span\r\n                            *ngIf=\"(cartSandbox.cartlistCount$ | async) > 1\">S</span></span>\r\n                </b>\r\n                <b><a [routerLink]=\"['/cart']\" class=\"text-muted\">VIEW CART</a></b>\r\n            </div>\r\n            <div class=\"divider mt-1\"></div>\r\n            <div *ngIf=\"(cartSandbox.cartlistCount$ | async) == 0\" class=\"py-1 text-muted text-center\">You have no items\r\n                in your shopping cart.</div>\r\n            <mat-list (click)=\"$event.stopPropagation()\">\r\n                <mat-list-item *ngFor=\"let product of cartSandbox.cartlist$ | async\">\r\n                    <h3 matLine class=\"text-muted\">{{product.name}} </h3>\r\n                    <p matLine class=\"text-muted\">\r\n                        <span>$ {{product.productCount}} x {{product.price}}\r\n                        </span>\r\n                    </p>\r\n                    <button mat-icon-button color=\"warn\" class=\"remove\" (click)=\"remove(product)\" matTooltip=\"Remove\"\r\n                        matTooltipPosition=\"before\">\r\n                        <mat-icon class=\"mat-icon-sm\">close</mat-icon>\r\n                    </button>\r\n                </mat-list-item>\r\n            </mat-list>\r\n            <div *ngIf=\"(cartSandbox.cartlistCount$ | async) > 0\" class=\"cart-dropdown-footer\">\r\n                <div class=\"divider mt-1\"></div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted mt-1\">\r\n                    <b>TOTAL:</b>\r\n                    <b class=\"new-price\">$ {{cartSandbox.totalCartPrice$ | async}}</b>\r\n                </div>\r\n                <div class=\"divider mt-1\"></div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-1\">\r\n                    <button mat-mini-fab color=\"warn\" (click)=\"clear()\" matTooltip=\"Clear All\"\r\n                        matTooltipPosition=\"after\">\r\n                        <mat-icon>remove_shopping_cart</mat-icon>\r\n                    </button>\r\n                    <a (click)=\"checkoutPage()\" href=\"javascript:void(0)\" mat-mini-fab color=\"primary\"\r\n                        matTooltip=\"Checkout\" matTooltipPosition=\"before\">\r\n                        <mat-icon>check</mat-icon>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </span>\r\n    </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/cart/cart.component.scss":
/*!****************************************************************!*\
  !*** ./src/default/shared/components/cart/cart.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart-items-count {\n  position: absolute;\n  top: -3px;\n  left: 26px;\n  background: #f44336;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n  border-radius: 50%;\n  font-size: 11px;\n  color: #fff; }\n\n.flex-row-button {\n  margin-left: 6%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2NhcnQvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1Ysb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFJRDtFQUNFLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWl0ZW1zLWNvdW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgbGVmdDogMjZweDtcclxuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogMThweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5uYXZjYXJ0IHtcclxuICAvLyBtYXJnaW4tbGVmdDogLTExM3B4O1xyXG59XHJcbi5mbGV4LXJvdy1idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDYlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/default/shared/components/cart/cart.component.ts":
/*!**************************************************************!*\
  !*** ./src/default/shared/components/cart/cart.component.ts ***!
  \**************************************************************/
/*! exports provided: CartNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartNavComponent", function() { return CartNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav-menu/sidenav-menu.service */ "./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/product-control/product-control.service */ "./src/core/product-control/product-control.service.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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








var CartNavComponent = /** @class */ (function () {
    function CartNavComponent(sidenavMenuService, cartSandbox, router, listSandbox, platformId, configService) {
        this.sidenavMenuService = sidenavMenuService;
        this.cartSandbox = cartSandbox;
        this.router = router;
        this.listSandbox = listSandbox;
        this.platformId = platformId;
        this.configService = configService;
        // product flag value
        this.flagValue = '0';
    }
    // data from configService
    CartNavComponent.prototype.ngOnInit = function () {
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
    };
    // remove product from cart
    CartNavComponent.prototype.remove = function (product) {
        this.cartSandbox.removeItemFromCart(product);
    };
    // clear cart
    CartNavComponent.prototype.clear = function () {
        this.cartSandbox.clearCart();
    };
    // navigation to checkout component.And set local storage
    CartNavComponent.prototype.checkoutPage = function () {
        var checkoutToken = '1';
        this.router.navigate(['/checkout']);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('checkout', checkoutToken);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartNavComponent.prototype, "ngSwitch", void 0);
    CartNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spurt-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/default/shared/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/default/shared/components/cart/cart.component.scss")],
            providers: [_core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_4__["ProductControlService"], _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_3__["ProductControlSandbox"]]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_2__["SidenavMenuService"],
            _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_3__["ProductControlSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_7__["ListsSandbox"],
            Object,
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], CartNavComponent);
    return CartNavComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/category-list/category-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/default/shared/components/category-list/category-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel *ngFor=\"let category of subCategory; let i = index\" [expanded]=\"(isClicked[category.categoryId]) || ((listSandBox.getactiveCategoryID$|async) ==category.categoryId) || (activecategory==category.categoryId)\">\r\n    <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n            <h4 [ngClass]=\"{'horizontal-active-link':(isClicked[category.categoryId]) || ((listSandBox.getactiveCategoryID$|async) ==category.categoryId) || (activecategory==category.categoryId) }\">\r\n                {{category.name}}</h4>\r\n        </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div *ngIf=\"category.children && category.children.length>0\" class=\"sub-category\">\r\n        <div class=\"category\" *ngFor=\"let subCategories of category.children; let i = index\">\r\n\r\n            <button mat-menu-item [ngClass]=\"{'active':isClicked[subCategories.categoryId]}\" (click)=\"changeCategory(subCategories.categoryId,category.categoryId, subCategories.name )\">\r\n                <span>{{subCategories.name}}</span>\r\n            </button>\r\n            <div *ngIf=\"subCategories.children && subCategories.children.length>0\" class=\"sub-category\">\r\n                <div class=\"category\" *ngFor=\"let grandCategories of subCategories.children; let i = index\">\r\n                    <button mat-menu-item [ngClass]=\"{'active':isClicked[grandCategories.categoryId]}\" (click)=\"changeCategory(grandCategories.categoryId,category.categoryId, grandCategories.name)\">\r\n                        <span>{{grandCategories.name}}</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</mat-expansion-panel>\r\n\r\n\r\n<!--needed-->\r\n\r\n<!--<div class=\"category\" *ngFor=\"let category of subCategory; let i = index\">-->\r\n<!--<button mat-menu-item  [ngClass]=\"{'active':isClicked[category.categoryId]}\" (click)=\"changeCategory(category.categoryId, category.name);isClicked = [];isClicked[category.categoryId] = (isClicked[category.categoryId]? false :true )\">-->\r\n<!--<span>{{category.name}}</span>-->\r\n<!--</button>-->\r\n<!--<div *ngIf=\"category.children && category.children.length>0\" class=\"sub-category\">-->\r\n<!--<div class=\"category\" *ngFor=\"let caty of category.children; let i = index\">-->\r\n\r\n<!--<button mat-menu-item  [ngClass]=\"{'active':isClicked[caty.categoryId]}\" (click)=\"changeCategory(caty.categoryId, caty.name);isClicked = [];isClicked[caty.categoryId] = (isClicked[caty.categoryId]? false :true )\">-->\r\n<!--<span>{{caty.name}}</span>-->\r\n<!--</button>-->\r\n<!--<div *ngIf=\"caty.children && caty.children.length>0\" class=\"sub-category\">-->\r\n<!--<div class=\"category\" *ngFor=\"let sub of caty.children; let i = index\">-->\r\n<!--<button mat-menu-item  [ngClass]=\"{'active':isClicked[sub.categoryId]}\" (click)=\"changeCategory(sub.categoryId, sub.name);isClicked = [];isClicked[sub.categoryId] = (isClicked[sub.categoryId]? false :true )\">-->\r\n<!--<span>{{sub.name}}</span>-->\r\n<!--</button>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash;        <app-category-list [categories]=\"category.children\" [categoryParentId]=\"category.categoryId\" (change)=\"changeCategory($event)\"></app-category-list>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash;        <app-category-list [categories]=\"category.children\" [categoryParentId]=\"category.categoryId\" (change)=\"changeCategory($event)\"></app-category-list>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--</div>-->"

/***/ }),

/***/ "./src/default/shared/components/category-list/category-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/default/shared/components/category-list/category-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category .active {\n  background: #dbdbe2;\n  color: black; }\n\n.mat-expansion-panel {\n  display: unset; }\n\n.activeColor {\n  color: #689f38; }\n\n.main-cat {\n  margin-left: 10px; }\n\n.main-cat h4 {\n    text-transform: uppercase;\n    cursor: pointer;\n    color: #616161;\n    margin: 14px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2NhdGVnb3J5LWxpc3QvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFxjYXRlZ29yeS1saXN0XFxjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFHTDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksa0JBQWlCLEVBT3BCOztBQVJEO0lBR1EsMEJBQXlCO0lBQ3pCLGdCQUFlO0lBQ2YsZUFBYztJQUNkLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5IHtcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkYmRiZTI7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuLmFjdGl2ZUNvbG9yIHtcclxuICAgIGNvbG9yOiAjNjg5ZjM4O1xyXG59XHJcblxyXG4ubWFpbi1jYXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoNCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICAgICAgbWFyZ2luOiAxNHB4IDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/shared/components/category-list/category-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/default/shared/components/category-list/category-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/common/common.service */ "./src/core/common/common.service.ts");
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
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(listSandBox, commonService, changeDetectRef) {
        this.listSandBox = listSandBox;
        this.commonService = commonService;
        this.changeDetectRef = changeDetectRef;
        this.isClicked = [];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subCategory = [];
        // subscriptions
        this.subscriptions = [];
        this.subscribe();
    }
    CategoryListComponent.prototype.ngOnChanges = function () {
        this.currentCategory = this.categoryId;
        this.isClicked = [];
        this.isClicked[this.categoryId] = true;
        this.listSandBox.getActiveCategory(this.currentCategory);
    };
    // initially calls subscribe method
    CategoryListComponent.prototype.ngOnInit = function () {
        this.subCategory = this.categories;
    };
    CategoryListComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.categories && !this.mainCategories) {
            this.subCategory = this.categories;
            this.mainCategories = this.categories.filter(function (category) { return category.parentId === _this.categoryParentId; });
        }
    };
    // emit the category id
    CategoryListComponent.prototype.changeCategory = function (id, activeId, name) {
        this.isClicked = [];
        if (id === +this.currentCategory) {
            this.activecategory = '';
            this.listSandBox.removeActiveCategory();
            this.change.emit('');
        }
        else {
            this.isClicked[id] = true;
            this.currentCategory = id;
            this.activecategory = activeId;
            this.change.emit(id);
        }
    };
    CategoryListComponent.prototype.subscribe = function () {
        var _this = this;
        this.subscriptions.push(this.listSandBox.subCategoryList$.subscribe(function (data) {
            if (data && data.length > 0) {
                _this.subCategory = data;
                console.log('sub category', _this.subCategory);
            }
            else {
                _this.subCategory = _this.categories;
            }
        }));
    };
    // OnDestroy Unsubscribe the old subscribed values
    CategoryListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    CategoryListComponent.prototype.ngAfterContentChecked = function () {
        this.changeDetectRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "categoryId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "changeCategories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "isClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CategoryListComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "categoryParentId", void 0);
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/default/shared/components/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/default/shared/components/category-list/category-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__["ListsSandbox"], _core_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/contactus/contactus.component.html":
/*!**************************************************************************!*\
  !*** ./src/default/shared/components/contactus/contactus.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n    <h3>Contact us</h3>\r\n    <form [formGroup]=\"contactUsForm\" (ngSubmit)=\"onContactUsFormSubmit()\">\r\n      <mat-form-field class=\"w-100 mt-2\">\r\n        <input matInput placeholder=\"Subject\" formControlName=\"subject\">\r\n        <mat-error *ngIf=\"((contactUsForm.controls['subject'].errors?.required)&&(ifSubmitted==true))\">\r\n          Subject is required </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"w-100 mt-2\">\r\n        <mat-label>Department</mat-label>\r\n        <select matNativeControl formControlName=\"department\">\r\n          <option value=\"customer\">CUSTOMER</option>\r\n          <option value=\"vendor\">VENDOR</option>\r\n          <option value=\"corporate\">CORPORATE</option>\r\n        </select>\r\n        <mat-error *ngIf=\"((contactUsForm.controls['department'].errors?.required)&&(ifSubmitted==true))\">\r\n          Department is required </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"w-100 mt-2\">\r\n        <input matInput placeholder=\"Description\" formControlName=\"description\">\r\n        <mat-error *ngIf=\"((contactUsForm.controls['description'].errors?.required)&&(ifSubmitted==true))\">\r\n          Description is required </mat-error>\r\n      </mat-form-field>\r\n      <div class=\"text-center mt-2\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/contactus/contactus.component.scss":
/*!**************************************************************************!*\
  !*** ./src/default/shared/components/contactus/contactus.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/default/shared/components/contactus/contactus.component.ts":
/*!************************************************************************!*\
  !*** ./src/default/shared/components/contactus/contactus.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.ifSubmitted = false;
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.initContactUsForm();
    };
    // build a form for info  by gouping the form control
    ContactusComponent.prototype.initContactUsForm = function () {
        this.contactUsForm = this.formBuilder.group({
            'subject': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'department': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
    };
    ContactusComponent.prototype.onContactUsFormSubmit = function () {
        if (this.contactUsForm.valid) {
            var params = this.contactUsForm.value;
            this.ifSubmitted = false;
            this.contactUsForm.reset();
            this.contactUsForm.clearValidators();
        }
        else {
            this.ifSubmitted = true;
        }
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/default/shared/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.scss */ "./src/default/shared/components/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/controls-product-detail/controls-product-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/default/shared/components/controls-product-detail/controls-product-detail.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" [fxLayoutAlign]=\"align\" class=\"text-muted\">\r\n    <div *ngIf=\"type==='detail'\">\r\n        <span>Quantity:</span>\r\n        <button mat-icon-button matTooltip=\"Remove\" (click)=\"changeCount('remove')\"><mat-icon>remove</mat-icon></button>\r\n        <span> {{quantity}} </span>\r\n        <button mat-icon-button matTooltip=\"Add\" (click)=\"changeCount('add')\"><mat-icon>add</mat-icon></button>\r\n    </div>\r\n    <div class='prod-icon'>\r\n            <button mat-icon-button matTooltip=\"{{product.wishListStatus === 1 ? 'Added to wishlist': 'Add to wishlist'}}\" (click)=\"addToWishList(product)\">\r\n                    <mat-icon [color]=\"isWish[product]\" *ngIf=\"isWish[product] === 'warn'\">favorite</mat-icon>\r\n                    <mat-icon  *ngIf=\"isWish[product] !== 'warn'\">favorite</mat-icon>\r\n            </button>\r\n        <button mat-flat-button color=\"primary\" class=\"cart-add\" (click)=\"addToCart(product)\">ADD TO CART</button>\r\n\r\n    </div>\r\n</div>\r\n<div *ngIf=\"product?.availibilityCount == 0 && type=='all'\" class=\"bg-warn p-1 mt-2\">\r\n    Sorry, this item is unavailable. Please choose a different one.\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/controls-product-detail/controls-product-detail.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/default/shared/components/controls-product-detail/controls-product-detail.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prod-icon {\n  display: inline-block; }\n  .prod-icon .cart-lk {\n    position: absolute;\n    right: 0;\n    margin-right: 14px; }\n  .prod-icon .cart-lk a {\n      border-radius: 5px;\n      border: solid 2px #027600;\n      padding: 5px 10px;\n      font-size: 12px;\n      font-weight: 500;\n      color: #027600;\n      text-decoration: none;\n      display: inline-block; }\n  .prod-icon .cart-lk a:hover {\n        background: #027600;\n        color: white; }\n  .prod-icon .cart-lk.bc-lk a {\n      font-size: 20px;\n      padding: 10px 20px; }\n  .cart-add {\n  cursor: pointer !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2NvbnRyb2xzLXByb2R1Y3QtZGV0YWlsL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcY29tcG9uZW50c1xcY29udHJvbHMtcHJvZHVjdC1kZXRhaWxcXGNvbnRyb2xzLXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCLEVBMEJ4QjtFQTNCRDtJQUdRLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsbUJBQWtCLEVBcUJyQjtFQTFCTDtNQU9ZLG1CQUFrQjtNQUNsQiwwQkFBeUI7TUFDekIsa0JBQWlCO01BQ2pCLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLGVBQWM7TUFDZCxzQkFBcUI7TUFDckIsc0JBQXFCLEVBS3hCO0VBbkJUO1FBZ0JnQixvQkFBbUI7UUFDbkIsYUFBWSxFQUNmO0VBbEJiO01Bc0JnQixnQkFBZTtNQUNmLG1CQUFrQixFQUNyQjtFQUtiO0VBQ0ksMkJBQTBCLEVBQzdCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2NvbnRyb2xzLXByb2R1Y3QtZGV0YWlsL2NvbnRyb2xzLXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2QtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAuY2FydC1sayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjMDI3NjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAyNzYwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAyNzYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJjLWxrIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJ0LWFkZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/controls-product-detail/controls-product-detail.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/default/shared/components/controls-product-detail/controls-product-detail.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ControlsProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsProductDetailComponent", function() { return ControlsProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/wishlist/wishlist.sandbox */ "./src/core/wishlist/wishlist.sandbox.ts");
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







var ControlsProductDetailComponent = /** @class */ (function () {
    function ControlsProductDetailComponent(snackBar, platformId, controlSandbox, listSandbox, router, wishlistSandbox) {
        this.snackBar = snackBar;
        this.platformId = platformId;
        this.controlSandbox = controlSandbox;
        this.listSandbox = listSandbox;
        this.router = router;
        this.wishlistSandbox = wishlistSandbox;
        this.totalPrice = 0;
        this.OpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.QuantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // pagination count
        this.count = 1;
        this.align = 'center center';
        // whislist
        this.quantity = 1;
        this.isWish = [];
    }
    // intially get the cart data and calls layoutAlign
    ControlsProductDetailComponent.prototype.ngOnInit = function () {
        if (this.product) {
            if (this.product.wishListStatus && this.product.wishListStatus === 1) {
                this.isWish[this.product] = 'warn';
            }
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        this.layoutAlign();
    };
    // align layout based on condition type
    ControlsProductDetailComponent.prototype.layoutAlign = function () {
        if (this.type === 'all') {
            this.align = 'space-between center';
        }
        else if (this.type === 'wish') {
            this.align = 'start center';
        }
        else if (this.type === 'detail') {
            this.align = 'start center';
        }
        else if (this.type === 'home') {
            this.align = 'start center';
        }
        else {
            this.align = 'center center';
        }
    };
    // change quantity of the product
    ControlsProductDetailComponent.prototype.changeCount = function (operation) {
        var product = {};
        if (operation === 'remove' && this.quantity > 1) {
            this.quantity -= 1;
        }
        else if (operation === 'add') {
            this.quantity += 1;
        }
    };
    // add product to cart
    ControlsProductDetailComponent.prototype.addToCart = function (product) {
        this.products = product;
        var param = {};
        param.totalOptions = this.totalPrice;
        product.productCount = this.quantity;
        product._totalOptions = param.totalOptions;
        this.controlSandbox.addItemsToCart(product, param);
    };
    // emit the data from open product dialoug component
    ControlsProductDetailComponent.prototype.openProductDialog = function (event) {
        this.OpenProductDialog.emit(event);
    };
    // emit quantity while changing
    ControlsProductDetailComponent.prototype.changeQuantity = function (value) {
        this.QuantityChange.emit(value);
    };
    ControlsProductDetailComponent.prototype.addToWishList = function (product) {
        if (this.isWish[this.product] && this.isWish[this.product] === 'warn') {
            this.isWish[product] = '';
            var params = {};
            params.wishlistProductId = product.productId;
            this.wishlistSandbox.deleteWishlist(params);
        }
        else {
            this.isWish[product] = 'warn';
            var currentUser = void 0;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                currentUser = JSON.parse(localStorage.getItem('user'));
            }
            if (currentUser) {
                var params = {};
                params.productId = product.productId;
                params.productOptionValueId = '';
                this.controlSandbox.addToWishlist(params);
            }
            else {
                this.router.navigate(['/auth']);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ControlsProductDetailComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControlsProductDetailComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ControlsProductDetailComponent.prototype, "optionNameSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ControlsProductDetailComponent.prototype, "totalPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlsProductDetailComponent.prototype, "OpenProductDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlsProductDetailComponent.prototype, "QuantityChange", void 0);
    ControlsProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controls-product-detail',
            template: __webpack_require__(/*! ./controls-product-detail.component.html */ "./src/default/shared/components/controls-product-detail/controls-product-detail.component.html"),
            styles: [__webpack_require__(/*! ./controls-product-detail.component.scss */ "./src/default/shared/components/controls-product-detail/controls-product-detail.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            Object,
            _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_3__["ProductControlSandbox"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__["ListsSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_6__["WishlistSandbox"]])
    ], ControlsProductDetailComponent);
    return ControlsProductDetailComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/controls/controls.component.html":
/*!************************************************************************!*\
  !*** ./src/default/shared/components/controls/controls.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" [fxLayoutAlign]=\"align\" class=\"text-muted\">\r\n    <div *ngIf=\"type === 'detail'\">\r\n        <span>Quantity:</span>\r\n        <button mat-icon-button matTooltip=\"Remove\" (click)=\"changeCount('remove')\"><mat-icon>remove</mat-icon></button>\r\n        <span> {{quantity}} </span>\r\n        <button mat-icon-button matTooltip=\"Add\" (click)=\"changeCount('add')\"><mat-icon>add</mat-icon></button>\r\n    </div>\r\n    <div class='prod-icon'>\r\n        <!-- <button mat-icon-button matTooltip=\"{{product.wishListStatus === 1 ? 'Added to wishlist': 'Add to wishlist'}}\" (click)=\"addToWishList(product)\">\r\n                    <mat-icon [color]=\"isWish[product]\" *ngIf=\"isWish[product] === 'warn'\">favorite</mat-icon>\r\n                    <mat-icon  *ngIf=\"isWish[product] !== 'warn'\">favorite</mat-icon>\r\n        </button> -->\r\n        <!-- <button *ngIf=\"type==='home'||type==='all'\" mat-icon-button matTooltip=\"Quick view\" (click)=\"openProductDialog(product)\"><mat-icon>remove_red_eye</mat-icon></button> -->\r\n        <button *ngIf=\"type==='all'||type==='detail'||type==='popup'\" mat-icon-button matTooltip=\"Add to cart\" (click)=\"addToCart(product)\"><mat-icon>shopping_cart</mat-icon></button>\r\n        <span *ngIf=\"type==='home'\" class=\"cart-lk\">\r\n            <a  (click)=\"addToCart(product)\"> Add to Cart </a>\r\n        </span>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"product?.availibilityCount == 0 && type=='all'\" class=\"bg-warn p-1 mt-2\">\r\n    Sorry, this item is unavailable. Please choose a different one.\r\n</div>\r\n<!-- *ngIf=\"type==='all'\" -->"

/***/ }),

/***/ "./src/default/shared/components/controls/controls.component.scss":
/*!************************************************************************!*\
  !*** ./src/default/shared/components/controls/controls.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prod-icon {\n  display: inline-block; }\n  .prod-icon .cart-lk {\n    position: absolute;\n    right: 0;\n    margin-right: 14px;\n    cursor: pointer !important; }\n  .prod-icon .cart-lk a {\n      border-radius: 5px;\n      border: solid 2px #027600;\n      padding: 5px 10px;\n      font-size: 12px;\n      font-weight: 500;\n      color: #027600;\n      text-decoration: none;\n      display: inline-block; }\n  .prod-icon .cart-lk a:hover {\n        background: #027600;\n        color: white; }\n  .prod-icon .cart-lk.bc-lk a {\n      font-size: 20px;\n      padding: 10px 20px; }\n  .prod-icon .compare-lk {\n    position: absolute;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2NvbnRyb2xzL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcY29tcG9uZW50c1xcY29udHJvbHNcXGNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCLEVBK0J4QjtFQWhDRDtJQUdRLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsbUJBQWtCO0lBQ2xCLDJCQUEwQixFQXFCN0I7RUEzQkw7TUFRWSxtQkFBa0I7TUFDbEIsMEJBQXlCO01BQ3pCLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixlQUFjO01BQ2Qsc0JBQXFCO01BQ3JCLHNCQUFxQixFQUt4QjtFQXBCVDtRQWlCZ0Isb0JBQW1CO1FBQ25CLGFBQVksRUFDZjtFQW5CYjtNQXVCZ0IsZ0JBQWU7TUFDZixtQkFBa0IsRUFDckI7RUF6QmI7SUE2QlEsbUJBQWtCO0lBQ2xCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2NvbnRyb2xzL2NvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2QtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAuY2FydC1sayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjMDI3NjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAyNzYwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAyNzYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJjLWxrIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tcGFyZS1sayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/controls/controls.component.ts":
/*!**********************************************************************!*\
  !*** ./src/default/shared/components/controls/controls.component.ts ***!
  \**********************************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/wishlist/wishlist.sandbox */ "./src/core/wishlist/wishlist.sandbox.ts");
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







var ControlsComponent = /** @class */ (function () {
    function ControlsComponent(snackBar, controlSandbox, listSandbox, router, wishlistSandbox, platformId) {
        this.snackBar = snackBar;
        this.controlSandbox = controlSandbox;
        this.listSandbox = listSandbox;
        this.router = router;
        this.wishlistSandbox = wishlistSandbox;
        this.platformId = platformId;
        this.optionValueArray = [];
        this.totalPrice = 0;
        this.OpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.QuantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // pagination count
        this.count = 1;
        this.align = 'center center';
        // whislist
        this.quantity = 1;
        this.isWish = {};
        this.isAdd = [];
        // subscriptions
        this.subscriptions = [];
    }
    // intially get the cart data and calls layoutAlign
    ControlsComponent.prototype.ngOnInit = function () {
        if (this.product) {
            if (this.product.wishListStatus && this.product.wishListStatus === 1) {
                this.isWish[this.product] = 'warn';
            }
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        this.layoutAlign();
    };
    // align layout based on condition type
    ControlsComponent.prototype.layoutAlign = function () {
        if (this.type === 'all') {
            this.align = 'space-between center';
        }
        else if (this.type === 'wish') {
            this.align = 'start center';
        }
        else if (this.type === 'detail') {
            this.align = 'start center';
        }
        else if (this.type === 'home') {
            this.align = 'start center';
        }
        else {
            this.align = 'center center';
        }
    };
    // change quantity of the product
    ControlsComponent.prototype.changeCount = function (operation) {
        var product = {};
        if (operation === 'remove' && this.quantity > 1) {
            this.quantity -= 1;
        }
        else if (operation === 'add') {
            this.quantity += 1;
        }
    };
    // add product to cart
    ControlsComponent.prototype.addToCart = function (product) {
        if (this.type === 'popup') {
            this.closePopup.emit('close');
        }
        this.router.navigate(['/products/productdetails/', product.productId]);
    };
    // emit the data from open product dialoug component
    ControlsComponent.prototype.openProductDialog = function (event) {
        this.OpenProductDialog.emit(event);
    };
    // emit quantity while changing
    ControlsComponent.prototype.changeQuantity = function (value) {
        this.QuantityChange.emit(value);
    };
    // add product to wishlist
    ControlsComponent.prototype.addToWishList = function (product) {
        if (this.isWish[this.product] && this.isWish[this.product] === 'warn') {
            this.isWish[product] = '';
            var params = {};
            params.wishlistProductId = product.productId;
            this.wishlistSandbox.deleteWishlist(params);
        }
        else {
            this.isWish[product] = 'warn';
            this.isAdd = [];
            this.isAdd[product.productId] = true;
            var currentUser = void 0;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                currentUser = JSON.parse(localStorage.getItem('user'));
            }
            if (currentUser) {
                var params = {};
                params.productId = product.productId;
                params.productOptionValueId = '';
                this.controlSandbox.addToWishlist(params);
            }
            else {
                if (this.type === 'popup') {
                    this.closePopup.emit('close');
                }
                this.router.navigate(['/auth']);
            }
        }
    };
    // unsubscribe subscribed events while destroy the page
    ControlsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ControlsComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControlsComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ControlsComponent.prototype, "cartOptionValueArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlsComponent.prototype, "OpenProductDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlsComponent.prototype, "QuantityChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ControlsComponent.prototype, "closePopup", void 0);
    ControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controls',
            template: __webpack_require__(/*! ./controls.component.html */ "./src/default/shared/components/controls/controls.component.html"),
            styles: [__webpack_require__(/*! ./controls.component.scss */ "./src/default/shared/components/controls/controls.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_3__["ProductControlSandbox"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__["ListsSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_6__["WishlistSandbox"],
            Object])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/footer-pages/footer-pages.component.html":
/*!********************************************************************************!*\
  !*** ./src/default/shared/components/footer-pages/footer-pages.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"faqData\"></div>"

/***/ }),

/***/ "./src/default/shared/components/footer-pages/footer-pages.component.scss":
/*!********************************************************************************!*\
  !*** ./src/default/shared/components/footer-pages/footer-pages.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXItcGFnZXMvZm9vdGVyLXBhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/default/shared/components/footer-pages/footer-pages.component.ts":
/*!******************************************************************************!*\
  !*** ./src/default/shared/components/footer-pages/footer-pages.component.ts ***!
  \******************************************************************************/
/*! exports provided: FooterPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPagesComponent", function() { return FooterPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_core_shared_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/shared/utility/utility.service */ "./src/core/shared/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterPagesComponent = /** @class */ (function () {
    function FooterPagesComponent(utilityServce, activatedRoute, router) {
        this.utilityServce = utilityServce;
        this.activatedRoute = activatedRoute;
        this.pageName = this.activatedRoute.snapshot.url[0].path;
    }
    FooterPagesComponent.prototype.ngOnInit = function () {
        if (this.pageName) {
            this.getFAQdata();
        }
    };
    FooterPagesComponent.prototype.getFAQdata = function () {
        var _this = this;
        var params = {};
        params.slug = this.pageName;
        this.utilityServce.getFAQdata(params).subscribe(function (res) {
            _this.faqData = res ? res.data.content : null;
        });
    };
    FooterPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-pages',
            template: __webpack_require__(/*! ./footer-pages.component.html */ "./src/default/shared/components/footer-pages/footer-pages.component.html"),
            styles: [__webpack_require__(/*! ./footer-pages.component.scss */ "./src/default/shared/components/footer-pages/footer-pages.component.scss")]
        }),
        __metadata("design:paramtypes", [src_core_shared_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterPagesComponent);
    return FooterPagesComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/footer/footer.component.html":
/*!********************************************************************!*\
  !*** ./src/default/shared/components/footer/footer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"py-3 theme-container\">\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"25\" class=\"useful-links\">\r\n            <h3 class=\"col-title\">USEFUL LINKS FOR CUSTOMER</h3>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/contactus\">Contact us</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/faq\">FAQs</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/term-and-condition\">T&C</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button>Shiping</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/Return\">Returns</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/privacy-policy\">Pricavy policy</a></div>\r\n\r\n            <h3 class=\"col-title mt-3\">JOIN OUR COMMUNITY</h3>\r\n            <div class=\"footer-menu-item\"><a mat-button>Blog</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button>Instagram</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button>Facebook</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button>Tiktok</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button>Twitter</a></div>\r\n\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"25\" ngClass.xs=\"mt-2\">\r\n\r\n\r\n            <h3 class=\"col-title\">USEFUL LINKS FOR VENDOR</h3>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/contactus\">Contact us</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/faq\">FAQs</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/term-and-condition\">T&C</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button>Shiping</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/Return\">Returns</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/privacy-policy\">Pricavy policy</a></div>\r\n\r\n            <h3 class=\"mt-3 col-title\">CORPORATE</h3>\r\n            <div class=\"footer-menu-item\"><a mat-button routerLink=\"/contactus\">Contact us</a></div>\r\n            <div class=\"footer-menu-item\"><a mat-button>Careers</a></div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <!-- *ngIf=\"(listSandbox.settingDetail$ | async) as contact\" -->\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.sm=\"50\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <h3 class=\"col-title\">ABOUT US</h3>\r\n            <p fxLayout=\"row\">\r\n                iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw\r\n                qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd\r\n                iuwdiu ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid\r\n                uoiwd w oiwoeu oiew wudoiw udoiw ud uwdiouoie u u oiwueoid uwe w oiwuoiw uoi ueoiwudoiw euoi w\r\n                oiweudoiwe u wue oiwufoiew uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif uewoiufoiew uweoif uweoi fewo\r\n                owuf oiwfuoiew f eoifuweoif oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw iuwh dwdeiw kwehdoiweo\r\n                wedihwiue hwedq owi qoiw qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw qwjdqwdiqdq wdyuq idqiwd\r\n                qk qw do q qhwdu q iqpwdi p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu ywdh yiud owdow hd\r\n                owdowd w doi uwdow udo wdoiw udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w oiwoeu oiew wudoiw\r\n                udoiw ud uwdiouoie u u oiwueoid uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue oiwufoiew\r\n                uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f eoifuweoif\r\n                oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw qwhdqw\r\n                jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi p2qdp\r\n                oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw\r\n                udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w oiwoeu oiew wudoiw udoiw ud uwdiouoie u u\r\n                oiwueoid uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue oiwufoiew uwoiefuweoif uwoie uwoifeuewoi\r\n                ufoiew uewoif uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f eoifuweoif oiuo uweoioiew f we foiwe ufoiw\r\n                uoiewufoiewfuw\r\n\r\n\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"theme-container\">\r\n        <h3 class=\"col-title\">ABOUT US</h3>\r\n        <p fxLayout=\"row\">\r\n            iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw\r\n            qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu\r\n            ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w\r\n            oiwoeu oiew wudoiw udoiw ud uwdiouoie u u oiwueoid uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue\r\n            oiwufoiew uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f\r\n            eoifuweoif oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw\r\n            qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi\r\n            p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw\r\n            udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w oiwoeu oiew wudoiw udoiw ud uwdiouoie u u oiwueoid\r\n            uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue oiwufoiew uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif\r\n            uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f eoifuweoif oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw\r\n            iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw\r\n            qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu\r\n            ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w\r\n            oiwoeu oiew wudoiw udoiw ud uwdiouoie u u oiwueoid uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue\r\n            oiwufoiew uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f\r\n            eoifuweoif oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw\r\n            qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi\r\n            p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw\r\n            udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w oiwoeu oiew wudoiw udoiw ud uwdiouoie u u oiwueoid\r\n            uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue oiwufoiew uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif\r\n            uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f eoifuweoif oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw\r\n            iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw\r\n            qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu\r\n            ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w\r\n            oiwoeu oiew wudoiw udoiw ud uwdiouoie u u oiwueoid uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue\r\n            oiwufoiew uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f\r\n            eoifuweoif oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw iuwh dwdeiw kwehdoiweo wedihwiue hwedq owi qoiw\r\n            qwhdqw jgdyu uhdiuwd u wdyu gw huw ydiqw dq qw idqiw qwjdqwdiqdq wdyuq idqiwd qk qw do q qhwdu q iqpwdi\r\n            p2qdp oidw ur2dqwd jwiudyut 32y 2dwe wedw giiwd hd iuwdiu ywdh yiud owdow hd owdowd w doi uwdow udo wdoiw\r\n            udoiw udo wd oiw uoiwudoi odoiw dwoi eiod woid uoiwd w oiwoeu oiew wudoiw udoiw ud uwdiouoie u u oiwueoid\r\n            uwe w oiwuoiw uoi ueoiwudoiw euoi w oiweudoiwe u wue oiwufoiew uwoiefuweoif uwoie uwoifeuewoi ufoiew uewoif\r\n            uewoiufoiew uweoif uweoi fewo owuf oiwfuoiew f eoifuweoif oiuo uweoioiew f we foiwe ufoiw uoiewufoiewfuw\r\n        </p>\r\n    </div>\r\n    <!-- <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"py-2 copyright theme-container\">\r\n        <p ngClass.xs=\"mt-1\" class=\"copyright\">Copyright © 2022, Beaver ecommerce</p>\r\n    </div> -->\r\n</footer>\r\n\r\n<!-- <footer class=\"bg-primary footer\">\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"py-3 theme-container\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"60\" fxFlex.sm=\"50\" class=\"useful-links\">\r\n            <h3 class=\"col-title\">USEFUL LINKS</h3>\r\n            <p class=\"mt-2\" *ngFor=\"let links of listSandbox.pageList$ | async\">\r\n                <a [routerLink]=\"['/page-detail', links.pageId]\" class=\"white-color\">{{links.title}}</a></p>\r\n        </div>\r\n        60iv fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"20\" ngClass.xs=\"mt-2\" *ngIf=\"(listSandbox.settingDetail$ | async) as contact\">\r\n            <h3 class=\"col-title\">CONTACT INFORMATION</h3>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2 \">\r\n                <mat-icon class=\"mr-1\">location_on</mat-icon>\r\n                <span>{{contact.storeAddress}}</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 \">\r\n                <mat-icon class=\"mr-1\">call</mat-icon>\r\n                <span>{{contact.storeTelephone}}</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 \">\r\n                <mat-icon class=\"mr-1\">mail_outline</mat-icon>\r\n                <span>{{contact.storeEmail}}</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1 \">\r\n                <mat-icon class=\"mr-1\">schedule</mat-icon>\r\n                <span>Mon - Sun / 9:00AM - 8:00PM</span>\r\n            </p>\r\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\r\n                <mat-icon class=\"mr-1\">directions</mat-icon>\r\n                <a class=\" white-color\" [routerLink]=\"['/getdirections']\">Get directions</a>\r\n            </p>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\" *ngIf=\"(listSandbox.settingDetail$ | async) as contact\">\r\n            <h3 class=\"col-title\">SOCIAL MEDIA</h3>\r\n            <p class=\"mt-2\">\r\n                <a (click)=\"openLink(contact.facebook)\" class=\"link\"> <img src=\"assets/images/others/facebook.png\"> </a>\r\n            </p>\r\n            <p class=\"mt-2\">\r\n                <a (click)=\"openLink(contact.google)\" class=\"link\"> <img src=\"assets/images/others/google+.png\"> </a>\r\n            </p>\r\n            <p class=\"mt-2\">\r\n                <a (click)=\"openLink(contact.twitter)\" class=\"link\"> <img src=\"assets/images/others/twitter.png\"> </a>\r\n            </p>\r\n        </div>\r\n        <div class=\"android-div\">\r\n            <img class=\"android-img\" src=\"assets/images/others/android.png\" (click)=\"downloadApp()\"></div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"copyright theme-container\">\r\n        <p ngClass.xs=\"mt-1\" class=\"copyright\">Copyright © 2022,Piccosoft Software labs India Private Limited</p>\r\n    </div>\r\n</footer> -->"

/***/ }),

/***/ "./src/default/shared/components/footer/footer.component.scss":
/*!********************************************************************!*\
  !*** ./src/default/shared/components/footer/footer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  min-height: 100px;\n  padding: 16px 16px 0;\n  background: #211f1f !important; }\n  .footer .subscribe-block {\n    padding: 16px 0 32px 0;\n    text-align: center; }\n  .footer .subscribe-block h1, .footer .subscribe-block h3 {\n      line-height: 1; }\n  .footer .subscribe-block h1 {\n      margin-bottom: 6px; }\n  .footer .subscribe-block .subscribe-search-form {\n      height: 50px;\n      padding: 0 16px; }\n  .footer .subscribe-block .subscribe-search-form input[type=text] {\n        border: 0;\n        outline: none;\n        padding: 0 25px;\n        font-size: 16px; }\n  .footer .subscribe-block .subscribe-search-form button {\n        font-size: 16px;\n        padding: 0 24px;\n        border-radius: 0; }\n  .footer .col-title {\n    font-weight: 600; }\n  .footer .mat-icon {\n    height: 21px;\n    line-height: 21px; }\n  .footer .link {\n    cursor: pointer;\n    text-decoration: none; }\n  .footer .link:hover {\n      text-decoration: underline; }\n  .footer .copyright {\n    font-size: 13px;\n    font-weight: 300; }\n  .footer .useful-links p {\n    display: inline-block;\n    width: 20%;\n    margin-right: -4px; }\n  .footer .copyright {\n    padding: 5px;\n    text-align: center;\n    width: 100%; }\n  @media (max-width: 575px) {\n  .footer .subscribe-block .subscribe-search-form {\n    height: 40px;\n    margin-top: 16px; }\n    .footer .subscribe-block .subscribe-search-form input[type=text] {\n      padding: 0 8px;\n      font-size: 14px; }\n    .footer .subscribe-block .subscribe-search-form button {\n      font-size: 14px;\n      padding: 0 16px; } }\n  @media (min-width: 576px) and (max-width: 767px) {\n  .footer .subscribe-block .subscribe-search-form {\n    margin-top: 16px; } }\n  .sebm-google-map-container {\n  height: 220px; }\n  .android-img {\n  max-height: 85%;\n  max-width: 11%;\n  cursor: pointer; }\n  .android-div {\n  width: 100%;\n  text-align: center; }\n  .white-color {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcc3RvcmUvc3JjXFxkZWZhdWx0XFxzaGFyZWRcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCO0VBQ2pCLHFCQUFvQjtFQUNwQiwrQkFBOEIsRUF3RC9CO0VBM0REO0lBS0ksdUJBQXNCO0lBQ3RCLG1CQUFrQixFQXNCbkI7RUE1Qkg7TUFRTSxlQUFjLEVBQ2Y7RUFUTDtNQVdNLG1CQUFrQixFQUNuQjtFQVpMO01BY00sYUFBWTtNQUNaLGdCQUFlLEVBWWhCO0VBM0JMO1FBaUJRLFVBQVM7UUFDVCxjQUFhO1FBQ2IsZ0JBQWU7UUFDZixnQkFBZSxFQUNoQjtFQXJCUDtRQXVCUSxnQkFBZTtRQUNmLGdCQUFlO1FBQ2YsaUJBQWdCLEVBQ2pCO0VBMUJQO0lBOEJJLGlCQUFnQixFQUNqQjtFQS9CSDtJQWlDSSxhQUFZO0lBQ1osa0JBQWlCLEVBQ2xCO0VBbkNIO0lBcUNJLGdCQUFlO0lBQ2Ysc0JBQXFCLEVBSXRCO0VBMUNIO01Bd0NNLDJCQUEwQixFQUMzQjtFQXpDTDtJQTRDSSxnQkFBZTtJQUNmLGlCQUFnQixFQUNqQjtFQTlDSDtJQWlETSxzQkFBcUI7SUFDckIsV0FBVTtJQUNWLG1CQUFrQixFQUNuQjtFQXBETDtJQXVESSxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLFlBQVcsRUFDWjtFQUdIO0VBQ0U7SUFFSSxhQUFZO0lBQ1osaUJBQWdCLEVBU2pCO0lBWkg7TUFLTSxlQUFjO01BQ2QsZ0JBQWUsRUFDaEI7SUFQTDtNQVNNLGdCQUFlO01BQ2YsZ0JBQWUsRUFDaEIsRUFBQTtFQUtQO0VBQ0U7SUFFSSxpQkFBZ0IsRUFDakIsRUFBQTtFQUlMO0VBQ0UsY0FBYSxFQUNkO0VBRUQ7RUFDRSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxnQkFBZSxFQUNoQjtFQUVEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQixFQUNuQjtFQUVEO0VBQ0UsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcclxuICBiYWNrZ3JvdW5kOiAjMjExZjFmICFpbXBvcnRhbnQ7XHJcbiAgLnN1YnNjcmliZS1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDAgMzJweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDEsIGgzIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0ge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29sLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcbiAgLmxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29weXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC51c2VmdWwtbGlua3Mge1xyXG4gICAgcCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29weXJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIHtcclxuICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0ge1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvb3RlciAuc3Vic2NyaWJlLWJsb2NrIHtcclxuICAgIC5zdWJzY3JpYmUtc2VhcmNoLWZvcm0ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbn1cclxuXHJcbi5hbmRyb2lkLWltZyB7XHJcbiAgbWF4LWhlaWdodDogODUlO1xyXG4gIG1heC13aWR0aDogMTElO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFuZHJvaWQtZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53aGl0ZS1jb2xvciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/default/shared/components/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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


var FooterComponent = /** @class */ (function () {
    function FooterComponent(listSandbox) {
        this.listSandbox = listSandbox;
    }
    // initially calls listSandbox getPageList
    FooterComponent.prototype.ngOnInit = function () {
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getPageList(params);
    };
    // dowload link for mobile app
    FooterComponent.prototype.downloadApp = function () {
        window.open('https://play.google.com/store/apps/details?id=com.piccosoft.spurtcommerce');
    };
    FooterComponent.prototype.openLink = function (link) {
        window.open(link);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/default/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/default/shared/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_1__["ListsSandbox"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/header-menu/header-menu.component.html":
/*!******************************************************************************!*\
  !*** ./src/default/shared/components/header-menu/header-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar-row fxLayoutAlign=\"space-between center\" class=\"logo-toolbar theme-container\">\r\n    <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\"><img src=\"assets/images/storelogo.png\" style=\"width: 192px; height: 43px\"></a>\r\n    <div class=\"search-algin\" fxFlex fxFlexOffset.gt-sm=\"10\" fxShow=\"false\" fxShow.gt-sm>\r\n        <form method=\"get\" class=\"search-form\" fxLayout=\"row\">\r\n            <mat-menu #categoriesMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n            </mat-menu>\r\n            <input type=\"text\" placeholder=\"What are you looking for ?\" fxFlex (keyup)=\"searchData($event.target.value)\">\r\n            <button mat-mini-fab (click)=\"search()\" type=\"button\" class=\"search-btn mat-elevation-z0 mat-mini-fab mat-accent\">\r\n               Search\r\n            </button>\r\n        </form>\r\n    </div>\r\n\r\n    <!-- <div fxFlexOffset=\"10\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <app-spurt-cart></app-spurt-cart>\r\n    </div> -->\r\n\r\n</mat-toolbar-row>"

/***/ }),

/***/ "./src/default/shared/components/header-menu/header-menu.component.scss":
/*!******************************************************************************!*\
  !*** ./src/default/shared/components/header-menu/header-menu.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .search-algin {\n  margin-left: 4% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci1tZW51L0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyLW1lbnVcXGhlYWRlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTBCLEVBQzNCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci1tZW51L2hlYWRlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5zZWFyY2gtYWxnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0JSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/default/shared/components/header-menu/header-menu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/default/shared/components/header-menu/header-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuComponent", function() { return HeaderMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidenav-menu/sidenav-menu.service */ "./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent(sidenavMenuService, router, formBuilder) {
        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.category = { name: 'Select Category' };
        this.searchValue = '';
    }
    HeaderMenuComponent.prototype.ngOnInit = function () { };
    // seacrh the data in the product list
    HeaderMenuComponent.prototype.search = function () {
        this.router.navigate(['/products'], {
            queryParams: { keyword: this.searchValue }
        });
    };
    // send the search value to product through navigation.If no value send 1 as default value.
    HeaderMenuComponent.prototype.searchData = function (value) {
        console.log('search', value);
        this.searchValue = value;
        if (!value) {
            this.router.navigate(['/products'], {
                queryParams: { keyword: this.searchValue }
            });
        }
        else {
            this.router.navigate(['/products'], {
                queryParams: { keyword: this.searchValue }
            });
        }
    };
    // select the product from product list
    HeaderMenuComponent.prototype.changeCategory = function (event) {
        if (event) {
            this.router.navigate(['/products/', event]);
        }
        if (window.innerWidth < 960) {
            this.stopClickPropagate(event);
        }
    };
    // style purpose
    HeaderMenuComponent.prototype.stopClickPropagate = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    // style purpose
    HeaderMenuComponent.prototype.closeSubMenus = function () {
        if (window.innerWidth < 960) {
            this.sidenavMenuService.closeAllSubMenus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderMenuComponent.prototype, "categories", void 0);
    HeaderMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spurt-header-menu',
            template: __webpack_require__(/*! ./header-menu.component.html */ "./src/default/shared/components/header-menu/header-menu.component.html"),
            styles: [__webpack_require__(/*! ./header-menu.component.scss */ "./src/default/shared/components/header-menu/header-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/header/header.component.html":
/*!********************************************************************!*\
  !*** ./src/default/shared/components/header/header.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\r\n    <a class=\"app\" (click)=\"downloadApp()\" style=\"cursor: pointer\"> Download App\r\n        <img src=\"assets/images/app-android.png\">\r\n    </a>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/header/header.component.scss":
/*!********************************************************************!*\
  !*** ./src/default/shared/components/header/header.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-menu {\n  float: right;\n  margin-bottom: 6px; }\n\n.top-menu a {\n  color: #616161;\n  text-transform: capitalize;\n  /* font-weight: 500; */\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 31px;\n  padding: 0 10px;\n  min-width: 70px;\n  border-radius: 0;\n  border-right: solid thin rgba(112, 112, 112, 0.5); }\n\n.app {\n  border: none !important; }\n\n.app img {\n    margin-right: 1.5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcc3RvcmUvc3JjXFxkZWZhdWx0XFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCwyQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrREFBaUQsRUFDcEQ7O0FBQ0Q7RUFDSSx3QkFBdUIsRUFJMUI7O0FBTEQ7SUFHUSxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuLnRvcC1tZW51IGEge1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB0aGluIHJnYmEoMTEyLCAxMTIsIDExMiwgMC41KTtcclxufVxyXG4uYXBwe1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/header/header.component.ts":
/*!******************************************************************!*\
  !*** ./src/default/shared/components/header/header.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    // dowload link for mobile app
    HeaderComponent.prototype.downloadApp = function () {
        window.open('https://play.google.com/store/apps/details?id=com.piccosoft.spurtcommerce');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spurt-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/default/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/default/shared/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/help/help.component.html":
/*!****************************************************************!*\
  !*** ./src/default/shared/components/help/help.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n    <h3>Need Help</h3>\r\n    <h3>Dynamic Text Area</h3>\r\n    <p>Contact chat support</p>\r\n    <h4><span>or submit request and we will get back to you</span></h4>\r\n    <form [formGroup]=\"helpForm\" (ngSubmit)=\"onhelpFormFormSubmit()\">\r\n\r\n      <mat-form-field class=\"w-100 mt-2\">\r\n        <mat-label>Category</mat-label>\r\n        <select matNativeControl formControlName=\"category\">\r\n          <option value=\"men\">Men</option>\r\n          <option value=\"women\">Women</option>\r\n          <option value=\"kids\">Kids</option>\r\n        </select>\r\n        <mat-error *ngIf=\"((helpForm.controls['category'].errors?.required)&&(ifSubmitted==true))\">\r\n          Category is required </mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"w-100 mt-2\">\r\n        <input matInput placeholder=\"Subject\" formControlName=\"subject\">\r\n        <mat-error *ngIf=\"((helpForm.controls['subject'].errors?.required)&&(ifSubmitted==true))\">\r\n          Subject is required </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"w-100 mt-2\">\r\n        <input matInput placeholder=\"Description\" formControlName=\"description\">\r\n        <mat-error *ngIf=\"((helpForm.controls['description'].errors?.required)&&(ifSubmitted==true))\">\r\n          Description is required </mat-error>\r\n      </mat-form-field>\r\n      <div class=\"text-center mt-2\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/help/help.component.scss":
/*!****************************************************************!*\
  !*** ./src/default/shared/components/help/help.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/default/shared/components/help/help.component.ts":
/*!**************************************************************!*\
  !*** ./src/default/shared/components/help/help.component.ts ***!
  \**************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = /** @class */ (function () {
    function HelpComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.ifSubmitted = false;
    }
    HelpComponent.prototype.ngOnInit = function () {
        this.initHelpForm();
    };
    // build a form for info  by gouping the form control
    HelpComponent.prototype.initHelpForm = function () {
        this.helpForm = this.formBuilder.group({
            'category': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'subject': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
    };
    HelpComponent.prototype.onhelpFormFormSubmit = function () {
        if (this.helpForm.valid) {
            var params = this.helpForm.value;
            this.ifSubmitted = false;
            this.helpForm.reset();
            this.helpForm.clearValidators();
        }
        else {
            this.ifSubmitted = true;
        }
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/default/shared/components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/default/shared/components/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/index.ts":
/*!************************************************!*\
  !*** ./src/default/shared/components/index.ts ***!
  \************************************************/
/*! exports provided: COMPONENTS, ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-carousel/main-carousel.component */ "./src/default/shared/components/main-carousel/main-carousel.component.ts");
/* harmony import */ var _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brands-carousel/brands-carousel.component */ "./src/default/shared/components/brands-carousel/brands-carousel.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/default/shared/components/category-list/category-list.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/default/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/default/shared/components/footer/footer.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options/options.component */ "./src/default/shared/components/options/options.component.ts");
/* harmony import */ var _sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidenav-menu/sidenav-menu.component */ "./src/default/shared/components/sidenav-menu/sidenav-menu.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/default/shared/components/menu/menu.component.ts");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/default/shared/components/top-menu/top-menu.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/default/shared/components/header/header.component.ts");
/* harmony import */ var _header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header-menu/header-menu.component */ "./src/default/shared/components/header-menu/header-menu.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/default/shared/components/side-bar/side-bar.component.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controls/controls.component */ "./src/default/shared/components/controls/controls.component.ts");
/* harmony import */ var _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products-carousel/products-carousel.component */ "./src/default/shared/components/products-carousel/products-carousel.component.ts");
/* harmony import */ var _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./products-carousel/product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart/cart.component */ "./src/default/shared/components/cart/cart.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/default/shared/pipes/pipes.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_product_control_effects_product_control_effect__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../core/product-control/effects/product-control.effect */ "./src/core/product-control/effects/product-control.effect.ts");
/* harmony import */ var _core_common_effects_common_effect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../core/common/effects/common.effect */ "./src/core/common/effects/common.effect.ts");
/* harmony import */ var _core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../core/product-control/product-control.service */ "./src/core/product-control/product-control.service.ts");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _core_common_common_sandbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../core/common/common.sandbox */ "./src/core/common/common.sandbox.ts");
/* harmony import */ var _core_common_common_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../core/common/common.service */ "./src/core/common/common.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _controls_product_detail_controls_product_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./controls-product-detail/controls-product-detail.component */ "./src/default/shared/components/controls-product-detail/controls-product-detail.component.ts");
/* harmony import */ var _get_directions_get_directions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../get-directions/get-directions.component */ "./src/default/shared/get-directions/get-directions.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _main_submenu_carousel_main_submenu_carouselcomponent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./main-submenu-carousel/main-submenu-carouselcomponent */ "./src/default/shared/components/main-submenu-carousel/main-submenu-carouselcomponent.ts");
/* harmony import */ var _trending_product_trending_product_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./trending-product/trending-product.component */ "./src/default/shared/components/trending-product/trending-product.component.ts");
/* harmony import */ var _advertisment_product_advertisment_product_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./advertisment-product/advertisment-product.component */ "./src/default/shared/components/advertisment-product/advertisment-product.component.ts");
/* harmony import */ var _product_not_found_product_not_found_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./product-not-found/product-not-found.component */ "./src/default/shared/components/product-not-found/product-not-found.component.ts");
/* harmony import */ var _account_buttons_account_buttons_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./account-buttons/account-buttons.component */ "./src/default/shared/components/account-buttons/account-buttons.component.ts");
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




// components
















// modules




// store
















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
var COMPONENTS = [
    _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_4__["MainCarouselComponent"],
    _main_submenu_carousel_main_submenu_carouselcomponent__WEBPACK_IMPORTED_MODULE_34__["MainSubmenuCarouselComponent"],
    _brands_carousel_brands_carousel_component__WEBPACK_IMPORTED_MODULE_5__["BrandsCarouselComponent"],
    _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoryListComponent"],
    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
    _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_12__["TopMenuComponent"],
    _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
    _sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_10__["SidenavMenuComponent"],
    _options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
    _header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_14__["HeaderMenuComponent"],
    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_15__["SideBarComponent"],
    _controls_controls_component__WEBPACK_IMPORTED_MODULE_16__["ControlsComponent"],
    _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_17__["ProductsCarouselComponent"],
    _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ProductDialogComponent"],
    _controls_product_detail_controls_product_detail_component__WEBPACK_IMPORTED_MODULE_31__["ControlsProductDetailComponent"],
    _get_directions_get_directions_component__WEBPACK_IMPORTED_MODULE_32__["GetDirectionsComponent"],
    _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartNavComponent"],
    _trending_product_trending_product_component__WEBPACK_IMPORTED_MODULE_35__["TrendingProductComponent"],
    _advertisment_product_advertisment_product_component__WEBPACK_IMPORTED_MODULE_36__["AdvertismentProductComponent"],
    _product_not_found_product_not_found_component__WEBPACK_IMPORTED_MODULE_37__["ProductNotFoundComponent"],
    _account_buttons_account_buttons_component__WEBPACK_IMPORTED_MODULE_38__["AccountButtonsComponent"]
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__["EffectsModule"].forFeature([_core_product_control_effects_product_control_effect__WEBPACK_IMPORTED_MODULE_24__["ProductControlEffect"], _core_common_effects_common_effect__WEBPACK_IMPORTED_MODULE_25__["CommonEffect"]]),
                _agm_core__WEBPACK_IMPORTED_MODULE_33__["AgmCoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbModule"]
            ],
            declarations: [COMPONENTS],
            exports: [COMPONENTS,
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"]],
            entryComponents: [
                _products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ProductDialogComponent"]
            ],
            providers: [
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                _core_product_control_product_control_service__WEBPACK_IMPORTED_MODULE_26__["ProductControlService"], _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_27__["ProductControlSandbox"], _core_common_common_sandbox__WEBPACK_IMPORTED_MODULE_28__["CommonSandbox"], _core_common_common_service__WEBPACK_IMPORTED_MODULE_29__["CommonService"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/default/shared/components/main-carousel/main-carousel.component.html":
/*!**********************************************************************************!*\
  !*** ./src/default/shared/components/main-carousel/main-carousel.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrapper\" *ngIf=\"(listSandbox.bannerList$ | async)?.length > 0\">\r\n    <div class=\"main-slider\">\r\n        <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n            <div class=\"swiper-wrapper h-100\">\r\n                <div *ngFor=\"let slide of listSandbox.bannerList$ | async\" class=\"swiper-slide\">\r\n                    <div [attr.data-background]=\"imagePath + '?path=' + slide.imagePath + '&name=' + slide.image + '&width=1860&height=1860'\" class=\"slide-item swiper-lazy\">\r\n                        <!--<div [attr.data-background]=\"imagePath + slide.imagePath + slide.image\" class=\"slide-item swiper-lazy\">-->\r\n                        <div class=\"mask\"></div>\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"content\">\r\n                            <h1>{{slide.title}}</h1>\r\n                            <h3 [innerHtml]='slide.content'></h3>\r\n                            <button mat-raised-button color=\"primary\" [routerLink]=\"['/products', slide.categoryId]\">Shop now</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"swiper-pagination white\"></div>\r\n            <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n            <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"main-slider-right\">\r\n        <div class=\"msr-col\" style=\"background-image: url(assets/images/slider-right-img1.png)\">\r\n            <div class=\"msr-col-content\">\r\n                <h3>Summer Collection</h3>\r\n                <p>New Arrivals On Sale</p>\r\n                <button mat-raised-button color=\"primary\" (click)=\"allProducts()\">Shop now</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"msr-col-btm\" style=\"background-image: url(assets/images/slider-right-img2.png)\">\r\n            <div class=\"msr-col-content\">\r\n                <h3>Shoes for you</h3>\r\n                <p>Now starting at $89</p>\r\n                <button mat-raised-button color=\"primary\" (click)=\"allProducts()\">Shop now</button>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n\r\n<div class=\"slider-wrapper\" *ngIf=\"(listSandbox.bannerList$ | async)?.length == 0\">\r\n    <div class=\"main-slider\">\r\n        <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n            <div class=\"swiper-wrapper h-100\">\r\n                <div class=\"swiper-slide\">\r\n                    <div [attr.data-background]=\"'../../../../assets/images/default-image.jpg' + '&width=1860&height=1860'\" class=\"slide-item swiper-lazy\">\r\n                        <div class=\"mask\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/default/shared/components/main-carousel/main-carousel.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/default/shared/components/main-carousel/main-carousel.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.main-slider-right {\n  width: calc(280px - 20px);\n  margin-left: 20px;\n  box-sizing: border-box;\n  margin-top: 14px;\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25); }\n\n.main-slider-right .msr-col {\n    width: 100%;\n    height: 250px;\n    border-radius: 4px 4px 0 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative; }\n\n.main-slider-right .msr-col:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.69);\n      border-radius: 4px 4px 0 0; }\n\n.main-slider-right .msr-col-btm {\n    width: 100%;\n    height: 250px;\n    border-radius: 0 0 4px 4px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative; }\n\n.main-slider-right .msr-col-btm:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.69);\n      border-radius: 0 0 4px 4px; }\n\n.main-slider-right .msr-col-content {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 2;\n    text-align: center;\n    height: 100px; }\n\n.main-slider-right .msr-col-content h3 {\n      color: white;\n      font-size: 16px;\n      font-weight: 500;\n      margin-bottom: 10px; }\n\n.main-slider-right .msr-col-content p {\n      color: white;\n      font-size: 12px;\n      font-weight: 500;\n      font-style: italic;\n      margin-bottom: 10px; }\n\n.main-slider-right .msr-col-content a {\n      background: #02ad00;\n      padding: 5px 10px;\n      color: white;\n      font-weight: 500;\n      font-size: 12px;\n      text-align: center;\n      text-decoration: none; }\n\n.main-slider {\n  height: 500px;\n  margin-top: 14px;\n  width: 100%; }\n\n.main-slider .slide-item {\n    height: 100%;\n    background-size: cover;\n    background-position: center; }\n\n.main-slider .slide-item .content {\n      height: 100%;\n      position: relative;\n      z-index: 9; }\n\n.main-slider .slide-item .content h1 {\n        font-size: 48px;\n        text-align: center;\n        color: #fff;\n        text-transform: uppercase;\n        letter-spacing: 3px; }\n\n.main-slider .slide-item .content h3 {\n        font-size: 36px;\n        text-align: center;\n        color: #fff;\n        margin-bottom: 30px;\n        font-weight: 300;\n        letter-spacing: 2px; }\n\n.main-slider .slide-item .mask {\n      opacity: 0.6;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      z-index: 0;\n      background-color: rgba(0, 0, 0, 0.8); }\n\n.main-slider .swiper-lazy-preloader {\n    top: 18%; }\n\n@media (max-width: 575px) {\n  .main-slider {\n    height: 280px; }\n    .main-slider .slide-item .content h1 {\n      font-size: 24px;\n      letter-spacing: 3px; }\n    .main-slider .slide-item .content h3 {\n      font-size: 18px;\n      margin-bottom: 10px;\n      letter-spacing: 2px; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .main-slider {\n    height: 320px; }\n    .main-slider .slide-item .content h1 {\n      font-size: 36px;\n      letter-spacing: 3px; }\n    .main-slider .slide-item .content h3 {\n      font-size: 24px;\n      margin-bottom: 20px;\n      letter-spacing: 2px; } }\n\n.swiper-container {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL21haW4tY2Fyb3VzZWwvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFxtYWluLWNhcm91c2VsXFxtYWluLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUdoQixnREFBK0MsRUF3RWhEOztBQS9FRDtJQVNJLFlBQVc7SUFDWCxjQUFhO0lBQ2IsMkJBQTBCO0lBQzFCLDRCQUEyQjtJQUMzQiw2QkFBNEI7SUFDNUIsdUJBQXNCO0lBQ3RCLG1CQUFrQixFQVduQjs7QUExQkg7TUFpQk0sWUFBVztNQUNYLG1CQUFrQjtNQUNsQixPQUFNO01BQ04sUUFBTztNQUNQLFlBQVc7TUFDWCxhQUFZO01BQ1osZ0NBQStCO01BQy9CLDJCQUEwQixFQUMzQjs7QUF6Qkw7SUE0QkksWUFBVztJQUNYLGNBQWE7SUFDYiwyQkFBMEI7SUFDMUIsNEJBQTJCO0lBQzNCLDZCQUE0QjtJQUM1Qix1QkFBc0I7SUFDdEIsbUJBQWtCLEVBV25COztBQTdDSDtNQW9DTSxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLE9BQU07TUFDTixRQUFPO01BQ1AsWUFBVztNQUNYLGFBQVk7TUFDWixnQ0FBK0I7TUFDL0IsMkJBQTBCLEVBQzNCOztBQTVDTDtJQStDSSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLFFBQU87SUFDUCxTQUFRO0lBQ1IsT0FBTTtJQUNOLFVBQVM7SUFDVCxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLGNBQWEsRUF1QmQ7O0FBOUVIO01BeURNLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixvQkFBbUIsRUFDcEI7O0FBN0RMO01BK0RNLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsb0JBQW1CLEVBQ3BCOztBQXBFTDtNQXNFTSxvQkFBbUI7TUFDbkIsa0JBQWlCO01BQ2pCLGFBQVk7TUFDWixpQkFBZ0I7TUFDaEIsZ0JBQWU7TUFDZixtQkFBa0I7TUFDbEIsc0JBQXFCLEVBQ3RCOztBQUlMO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUVoQixZQUFXLEVBdUNaOztBQTNDRDtJQU9JLGFBQVk7SUFDWix1QkFBc0I7SUFDdEIsNEJBQTJCLEVBOEI1Qjs7QUF2Q0g7TUFXTSxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLFdBQVUsRUFnQlg7O0FBN0JMO1FBZVEsZ0JBQWU7UUFDZixtQkFBa0I7UUFDbEIsWUFBVztRQUNYLDBCQUF5QjtRQUN6QixvQkFBbUIsRUFDcEI7O0FBcEJQO1FBc0JRLGdCQUFlO1FBQ2YsbUJBQWtCO1FBQ2xCLFlBQVc7UUFDWCxvQkFBbUI7UUFDbkIsaUJBQWdCO1FBQ2hCLG9CQUFtQixFQUNwQjs7QUE1QlA7TUErQk0sYUFBWTtNQUNaLFlBQVc7TUFDWCxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLGlCQUFnQjtNQUNoQixXQUFVO01BQ1YscUNBQW9DLEVBQ3JDOztBQXRDTDtJQXlDSSxTQUFRLEVBQ1Q7O0FBR0g7RUFDRTtJQUNFLGNBQWEsRUFZZDtJQWJEO01BSU0sZ0JBQWU7TUFDZixvQkFBbUIsRUFDcEI7SUFOTDtNQVFNLGdCQUFlO01BQ2Ysb0JBQW1CO01BQ25CLG9CQUFtQixFQUNwQixFQUFBOztBQUtQO0VBQ0U7SUFDRSxjQUFhLEVBWWQ7SUFiRDtNQUlNLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3BCO0lBTkw7TUFRTSxnQkFBZTtNQUNmLG9CQUFtQjtNQUNuQixvQkFBbUIsRUFDcEIsRUFBQTs7QUFLUDtFQUdFLGdEQUErQztFQUMvQyxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1jYXJvdXNlbC9tYWluLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zbGlkZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tYWluLXNsaWRlci1yaWdodCB7XHJcbiAgd2lkdGg6IGNhbGMoMjgwcHggLSAyMHB4KTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIC5tc3ItY29sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tc3ItY29sLWJ0bSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubXNyLWNvbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMmFkMDA7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1zbGlkZXIge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuc2xpZGUtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogOTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFzayB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zd2lwZXItbGF6eS1wcmVsb2FkZXIge1xyXG4gICAgdG9wOiAxOCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAubWFpbi1zbGlkZXIge1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIC5zbGlkZS1pdGVtIC5jb250ZW50IHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5tYWluLXNsaWRlciB7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgLnNsaWRlLWl0ZW0gLmNvbnRlbnQge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgIH1cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/default/shared/components/main-carousel/main-carousel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/default/shared/components/main-carousel/main-carousel.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCarouselComponent", function() { return MainCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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




var MainCarouselComponent = /** @class */ (function () {
    function MainCarouselComponent(configService, router, listSandbox) {
        this.configService = configService;
        this.router = router;
        this.listSandbox = listSandbox;
        this.config = {};
        // pagination purpose
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    // initially get data from config service
    MainCarouselComponent.prototype.ngOnInit = function () {
        this.imagePath = this.configService.getImageUrl();
    };
    // swipper for banners
    MainCarouselComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            slidesPerView: 'auto',
            pagination: this.pagination,
            autoplay: true,
            observer: true,
            navigation: true,
            grabCursor: true,
            lazy: {
                loadPrevNext: true
                // loadOnTransitionStart: true,
            },
            speed: 700,
            effect: 'slide'
        };
    };
    // navigate to all products
    MainCarouselComponent.prototype.allProducts = function () {
        this.router.navigate(['/products/', 'All']);
    };
    MainCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-carousel',
            template: __webpack_require__(/*! ./main-carousel.component.html */ "./src/default/shared/components/main-carousel/main-carousel.component.html"),
            styles: [__webpack_require__(/*! ./main-carousel.component.scss */ "./src/default/shared/components/main-carousel/main-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_service_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__["ListsSandbox"]])
    ], MainCarouselComponent);
    return MainCarouselComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/main-submenu-carousel/main-submenu-carousel.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/default/shared/components/main-submenu-carousel/main-submenu-carousel.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrapper\">\r\n    <div class=\"main-slider\">\r\n        <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n            <div class=\"swiper-wrapper h-100\">\r\n                <div *ngFor=\"let slide of listSandbox.childBannerList$ | async\" class=\"swiper-slide\">\r\n                    <div [attr.data-background]=\"imagePath + '?path=' + slide.imagePath + '&name=' + slide.image + '&width=1860&height=1860'\"\r\n                        class=\"slide-item swiper-lazy\">\r\n                        <div class=\"mask\"></div>\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"content\">\r\n                            <h1>{{slide.title}}</h1>\r\n                            <h3 [innerHtml]='slide.content'></h3>\r\n                            <!-- <button mat-raised-button color=\"primary\" [routerLink]=\"['/products', categoryId]\">Shop\r\n                                now</button> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"swiper-pagination white\"></div>\r\n            <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\">\r\n                <mat-icon>keyboard_arrow_left</mat-icon>\r\n            </button>\r\n            <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\">\r\n                <mat-icon>keyboard_arrow_right</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/main-submenu-carousel/main-submenu-carousel.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/default/shared/components/main-submenu-carousel/main-submenu-carousel.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.main-slider-right {\n  width: calc(280px - 20px);\n  margin-left: 20px;\n  box-sizing: border-box;\n  margin-top: 14px;\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25); }\n\n.main-slider-right .msr-col {\n    width: 100%;\n    height: 250px;\n    border-radius: 4px 4px 0 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative; }\n\n.main-slider-right .msr-col:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.69);\n      border-radius: 4px 4px 0 0; }\n\n.main-slider-right .msr-col-btm {\n    width: 100%;\n    height: 250px;\n    border-radius: 0 0 4px 4px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative; }\n\n.main-slider-right .msr-col-btm:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.69);\n      border-radius: 0 0 4px 4px; }\n\n.main-slider-right .msr-col-content {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 2;\n    text-align: center;\n    height: 100px; }\n\n.main-slider-right .msr-col-content h3 {\n      color: white;\n      font-size: 16px;\n      font-weight: 500;\n      margin-bottom: 10px; }\n\n.main-slider-right .msr-col-content p {\n      color: white;\n      font-size: 12px;\n      font-weight: 500;\n      font-style: italic;\n      margin-bottom: 10px; }\n\n.main-slider-right .msr-col-content a {\n      background: #02ad00;\n      padding: 5px 10px;\n      color: white;\n      font-weight: 500;\n      font-size: 12px;\n      text-align: center;\n      text-decoration: none; }\n\n.main-slider {\n  height: 500px;\n  margin-top: 14px;\n  width: 100%; }\n\n.main-slider .slide-item {\n    height: 100%;\n    background-size: cover;\n    background-position: center; }\n\n.main-slider .slide-item .content {\n      height: 100%;\n      position: relative;\n      z-index: 9; }\n\n.main-slider .slide-item .content h1 {\n        font-size: 48px;\n        text-align: center;\n        color: #fff;\n        text-transform: uppercase;\n        letter-spacing: 3px; }\n\n.main-slider .slide-item .content h3 {\n        font-size: 36px;\n        text-align: center;\n        color: #fff;\n        margin-bottom: 30px;\n        font-weight: 300;\n        letter-spacing: 2px; }\n\n.main-slider .slide-item .mask {\n      opacity: 0.6;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      overflow: hidden;\n      z-index: 0;\n      background-color: rgba(0, 0, 0, 0.8); }\n\n.main-slider .swiper-lazy-preloader {\n    top: 18%; }\n\n@media (max-width: 575px) {\n  .main-slider {\n    height: 280px; }\n    .main-slider .slide-item .content h1 {\n      font-size: 24px;\n      letter-spacing: 3px; }\n    .main-slider .slide-item .content h3 {\n      font-size: 18px;\n      margin-bottom: 10px;\n      letter-spacing: 2px; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .main-slider {\n    height: 320px; }\n    .main-slider .slide-item .content h1 {\n      font-size: 36px;\n      letter-spacing: 3px; }\n    .main-slider .slide-item .content h3 {\n      font-size: 24px;\n      margin-bottom: 20px;\n      letter-spacing: 2px; } }\n\n.swiper-container {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL21haW4tc3VibWVudS1jYXJvdXNlbC9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcc3RvcmUvc3JjXFxkZWZhdWx0XFxzaGFyZWRcXGNvbXBvbmVudHNcXG1haW4tc3VibWVudS1jYXJvdXNlbFxcbWFpbi1zdWJtZW51LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUdoQixnREFBK0MsRUF3RWhEOztBQS9FRDtJQVNJLFlBQVc7SUFDWCxjQUFhO0lBQ2IsMkJBQTBCO0lBQzFCLDRCQUEyQjtJQUMzQiw2QkFBNEI7SUFDNUIsdUJBQXNCO0lBQ3RCLG1CQUFrQixFQVduQjs7QUExQkg7TUFpQk0sWUFBVztNQUNYLG1CQUFrQjtNQUNsQixPQUFNO01BQ04sUUFBTztNQUNQLFlBQVc7TUFDWCxhQUFZO01BQ1osZ0NBQStCO01BQy9CLDJCQUEwQixFQUMzQjs7QUF6Qkw7SUE0QkksWUFBVztJQUNYLGNBQWE7SUFDYiwyQkFBMEI7SUFDMUIsNEJBQTJCO0lBQzNCLDZCQUE0QjtJQUM1Qix1QkFBc0I7SUFDdEIsbUJBQWtCLEVBV25COztBQTdDSDtNQW9DTSxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLE9BQU07TUFDTixRQUFPO01BQ1AsWUFBVztNQUNYLGFBQVk7TUFDWixnQ0FBK0I7TUFDL0IsMkJBQTBCLEVBQzNCOztBQTVDTDtJQStDSSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLFFBQU87SUFDUCxTQUFRO0lBQ1IsT0FBTTtJQUNOLFVBQVM7SUFDVCxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLGNBQWEsRUF1QmQ7O0FBOUVIO01BeURNLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixvQkFBbUIsRUFDcEI7O0FBN0RMO01BK0RNLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsb0JBQW1CLEVBQ3BCOztBQXBFTDtNQXNFTSxvQkFBbUI7TUFDbkIsa0JBQWlCO01BQ2pCLGFBQVk7TUFDWixpQkFBZ0I7TUFDaEIsZ0JBQWU7TUFDZixtQkFBa0I7TUFDbEIsc0JBQXFCLEVBQ3RCOztBQUlMO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUVoQixZQUFXLEVBdUNaOztBQTNDRDtJQU9JLGFBQVk7SUFDWix1QkFBc0I7SUFDdEIsNEJBQTJCLEVBOEI1Qjs7QUF2Q0g7TUFXTSxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLFdBQVUsRUFnQlg7O0FBN0JMO1FBZVEsZ0JBQWU7UUFDZixtQkFBa0I7UUFDbEIsWUFBVztRQUNYLDBCQUF5QjtRQUN6QixvQkFBbUIsRUFDcEI7O0FBcEJQO1FBc0JRLGdCQUFlO1FBQ2YsbUJBQWtCO1FBQ2xCLFlBQVc7UUFDWCxvQkFBbUI7UUFDbkIsaUJBQWdCO1FBQ2hCLG9CQUFtQixFQUNwQjs7QUE1QlA7TUErQk0sYUFBWTtNQUNaLFlBQVc7TUFDWCxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLGlCQUFnQjtNQUNoQixXQUFVO01BQ1YscUNBQW9DLEVBQ3JDOztBQXRDTDtJQXlDSSxTQUFRLEVBQ1Q7O0FBR0g7RUFDRTtJQUNFLGNBQWEsRUFZZDtJQWJEO01BSU0sZ0JBQWU7TUFDZixvQkFBbUIsRUFDcEI7SUFOTDtNQVFNLGdCQUFlO01BQ2Ysb0JBQW1CO01BQ25CLG9CQUFtQixFQUNwQixFQUFBOztBQUtQO0VBQ0U7SUFDRSxjQUFhLEVBWWQ7SUFiRDtNQUlNLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3BCO0lBTkw7TUFRTSxnQkFBZTtNQUNmLG9CQUFtQjtNQUNuQixvQkFBbUIsRUFDcEIsRUFBQTs7QUFLUDtFQUdFLGdEQUErQztFQUMvQyxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1zdWJtZW51LWNhcm91c2VsL21haW4tc3VibWVudS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2xpZGVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWFpbi1zbGlkZXItcmlnaHQge1xyXG4gIHdpZHRoOiBjYWxjKDI4MHB4IC0gMjBweCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAubXNyLWNvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42OSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAubXNyLWNvbC1idG0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1zci1jb2wtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDJhZDAwO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1haW4tc2xpZGVyIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnNsaWRlLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hc2sge1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcclxuICAgIHRvcDogMTglO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLm1haW4tc2xpZGVyIHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAuc2xpZGUtaXRlbSAuY29udGVudCB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubWFpbi1zbGlkZXIge1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIC5zbGlkZS1pdGVtIC5jb250ZW50IHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/main-submenu-carousel/main-submenu-carouselcomponent.ts":
/*!***********************************************************************************************!*\
  !*** ./src/default/shared/components/main-submenu-carousel/main-submenu-carouselcomponent.ts ***!
  \***********************************************************************************************/
/*! exports provided: MainSubmenuCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSubmenuCarouselComponent", function() { return MainSubmenuCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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




var MainSubmenuCarouselComponent = /** @class */ (function () {
    function MainSubmenuCarouselComponent(configService, router, listSandbox) {
        this.configService = configService;
        this.router = router;
        this.listSandbox = listSandbox;
        this.config = {};
        // pagination purpose
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    // initially get data from config service
    MainSubmenuCarouselComponent.prototype.ngOnInit = function () {
        this.imagePath = this.configService.getImageUrl();
    };
    // swipper for banners
    MainSubmenuCarouselComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            slidesPerView: 'auto',
            pagination: this.pagination,
            autoplay: true,
            observer: true,
            navigation: true,
            grabCursor: true,
            lazy: {
                loadPrevNext: true
                // loadOnTransitionStart: true,
            },
            speed: 700,
            effect: 'slide'
        };
    };
    // navigate to all products
    MainSubmenuCarouselComponent.prototype.allProducts = function () {
        this.router.navigate(['/products/', 'All']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainSubmenuCarouselComponent.prototype, "categoryId", void 0);
    MainSubmenuCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-submenu-carousel',
            template: __webpack_require__(/*! ./main-submenu-carousel.component.html */ "./src/default/shared/components/main-submenu-carousel/main-submenu-carousel.component.html"),
            styles: [__webpack_require__(/*! ./main-submenu-carousel.component.scss */ "./src/default/shared/components/main-submenu-carousel/main-submenu-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_service_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_3__["ListsSandbox"]])
    ], MainSubmenuCarouselComponent);
    return MainSubmenuCarouselComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/menu/menu.component.html":
/*!****************************************************************!*\
  !*** ./src/default/shared/components/menu/menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-navbar mat-elevation-z2\" fxLayoutAlign=\"\" color=\"primary\">\r\n    <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\r\n        <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\"><img src=\"assets/images/logo1.png\"></a>\r\n    <!-- <a mat-button [routerLink]=\"['/']\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\"> <img src=\"assets/images/home.png\"> </a> -->\r\n    <!-- <a mat-button (click)=\"sendUniqueId('productFilter')\" [routerLink]=\"['/products/', 'All']\" class=\"colorMenu\"\r\n        routerLinkActive=\"colorMenu\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        AllProducts\r\n    </a> -->\r\n    <div class=\"menuWrap\" fxShow=\"true\" fxHide.lt-md>\r\n        <!-- (click)=\"indexData(i,category.categoryId)\" -->\r\n        <a mat-button class=\"colorMenu\" routerLinkActive=\"horizontal-active-link\"\r\n            *ngFor=\"let category of categories;let i=index\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matMenuTriggerFor]=\"menu\" [routerLink]=\"['/shop', category.name, category.categoryId]\"\r\n            (mouseover)=\"indexData(i,category.categoryId)\" #matMenuTrigger=\"matMenuTrigger\">\r\n            <img class=\"menu-img\" src=\"assets/images/1-a.png\">\r\n            <!-- <span class=\"menu-text\">{{category.name}}</span> -->\r\n            <!-- <mat-icon class=\"caret\">arrow_drop_down</mat-icon> -->\r\n        </a>\r\n        <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" class=\"mega-menu category-menu app-dropdown\"\r\n            [hasBackdrop]=\"false\" (mouseleave)=\"$event.stopPropagation()\">\r\n            <span (mouseleave)=\"closeMyMenu()\">\r\n                <div fxLayout=\"row wrap\" *ngIf=\"((index)||(index === 0))\">\r\n                    <div fxFlex=\"20\" fxLayout=\"column\" class=\"p-1\"\r\n                        *ngFor=\"let subCategory of categories[index].children\">\r\n                        <a mat-menu-item [routerLink]=\"['/products', subCategory.categoryId]\"\r\n                            [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"linkActive()\"\r\n                            routerLinkActive=\"horizontal-active-link\">\r\n                            <b>{{subCategory.name}}</b>\r\n                        </a>\r\n                        <mat-divider></mat-divider>\r\n                        <div *ngIf=\"subCategory.children\">\r\n                            <div *ngFor=\"let grandsubCategory of subCategory.children;let j=index\">\r\n                                <a mat-menu-item [routerLink]=\"['/products', grandsubCategory.categoryId]\"\r\n                                    [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"linkActive()\"\r\n                                    routerLinkActive=\"horizontal-active-link\">\r\n                                    {{grandsubCategory.name}}</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </span>\r\n        </mat-menu>\r\n\r\n    </div>\r\n    <!-- <a mat-button routerLink=\"/contact\" routerLinkActive=\"horizontal-active-link\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\">Contact</a> -->\r\n\r\n    <!-- <div fxShow=\"true\" fxHide.lt-md class=\"search-algin\" fxFlex fxFlexOffset.gt-sm=\"1\" fxShow=\"true\" fxShow.gt-sm>\r\n        <form method=\"get\" class=\"search-form\" fxLayout=\"row\">\r\n            <mat-menu #categoriesMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n            </mat-menu>\r\n            <input type=\"text\" placeholder=\"What are you looking for ?\" fxFlex\r\n                (keyup)=\"searchData($event.target.value)\">\r\n            <button mat-mini-fab (click)=\"search()\" type=\"button\"\r\n                class=\"search-btn mat-elevation-z0 mat-mini-fab mat-accent\">\r\n                Search\r\n            </button>\r\n        </form>\r\n        <div mat-dialog-content *ngIf=\"searchLists?.length > 0 && searchValue\">\r\n            <ul>\r\n                <li *ngFor=\"let list of searchLists\">\r\n                    <a class=\"title text-truncate\">{{list.name}}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n    <div class=\"menu-right\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <app-spurt-cart class=\"menuTag\"></app-spurt-cart>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n\r\n<!-- <mat-sidenav-container fxFlexFill> -->\r\n<mat-sidenav #sidenav>\r\n    <mat-nav-list>\r\n        <a (click)=\"sidenav.toggle()\" href=\"javascript:void(0)\" mat-list-item>Close</a>\r\n        <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\r\n            <app-category-list [isClicked]=\"isClickedData\" [categories]=\"listSandbox.categoryList$ | async\"\r\n                (change)=\"onChangeCategory($event)\" [categoryId]=\"category\"></app-category-list>\r\n\r\n        </div>\r\n    </mat-nav-list>\r\n</mat-sidenav>\r\n<!-- </mat-sidenav-container> -->"

/***/ }),

/***/ "./src/default/shared/components/menu/menu.component.scss":
/*!****************************************************************!*\
  !*** ./src/default/shared/components/menu/menu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colorMenu {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL21lbnUvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGE6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogYmx1ZSgkY29sb3I6ICMwMDAwMDApO1xyXG4vLyB9XHJcbi5jb2xvck1lbnUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vLyAuY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XHJcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6aG9zdCA6Om5nLWRlZXAgLmNhdGVnb3J5LW1lbnUge1xyXG4vLyAgIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6Om5nLWRlZXAgLmNhdGVnb3J5LW1lbnUge1xyXG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lLm1lZ2EtbWVudS1wYW5lIHtcclxuLy8gICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgIGxlZnQ6MCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcCAuc2VydmljZS1tZW51IHtcclxuLy8gICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcclxuLy8gICBtYXJnaW4tbGVmdDogOTE3cHggIWltcG9ydGFudDtcclxuLy8gICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xyXG4vLyAgIHRvcDogOTZweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC9kZWVwLyAuY2F0ZWdvcnktbWVudSAuY2RrLW92ZXJsYXktcGFuZSB7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDt3aWR0aDoxMDAlICFpbXBvcnRhbnR9Il19 */"

/***/ }),

/***/ "./src/default/shared/components/menu/menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/default/shared/components/menu/menu.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.settings */ "./src/default/app.settings.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
 * version 3.0
 * www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */






var MenuComponent = /** @class */ (function () {
    function MenuComponent(listSandbox, appSettings, platformId, changeDetectRef, router) {
        this.listSandbox = listSandbox;
        this.appSettings = appSettings;
        this.platformId = platformId;
        this.changeDetectRef = changeDetectRef;
        this.router = router;
        this.category = { name: 'Select Category' };
        this.searchValue = '';
        this.searchLists = [];
        this.settings = this.appSettings.settings;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var setTheme = localStorage.getItem('optionsTheme');
            this.settings.theme = setTheme;
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    /** index for selecting categories.
     * @param index from event
     * @param categoryId from event
     * **/
    MenuComponent.prototype.indexData = function (index, id) {
        this.index = index;
        this.categoryId = id;
        this.trigger.openMenu();
        this.openMegaMenu();
    };
    MenuComponent.prototype.openMegaMenu = function () {
        var pane = document.getElementsByClassName('cdk-overlay-pane');
        [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
                if (el.children[0].classList.contains('mega-menu')) {
                    el.classList.add('mega-menu-pane');
                }
            }
        });
    };
    MenuComponent.prototype.closeMyMenu = function () {
        this.trigger.closeMenu();
    };
    // Make category link active if category got selected
    MenuComponent.prototype.linkActive = function () {
        this.categorylinkActive = this.categoryId;
    };
    /**
     * calls listSandbox productFilterData and send the value
     * @param productFilter set default value getting from template file
     */
    MenuComponent.prototype.sendUniqueId = function (productFilter) {
        this.listSandbox.productFilterData.next(productFilter);
    };
    // send the search value to product through navigation.If no value send 1 as default value.
    MenuComponent.prototype.searchData = function (value) {
        this.searchValue = value;
        if (!value) {
            // this.router.navigate(['/products'], {
            //     queryParams: { keyword: this.searchValue }
            // });
            this.searchLists = [];
        }
        else {
            // this.router.navigate(['/products'], {
            //     queryParams: { keyword: this.searchValue }
            // });
            this.getProductList(this.searchValue);
        }
    };
    /**
   * fetch product list from service. calling getProductList function from sandbox
   *
   * @param keyword filter
   */
    MenuComponent.prototype.getProductList = function (keyword) {
        var _this = this;
        var params = {};
        params.limit = 100;
        params.offset = 0;
        params.categoryId = this.categoryId ? this.categoryId : '';
        params.keyword = keyword;
        params.price = 'ASC';
        params.priceFrom = 0;
        params.priceTo = '';
        if (keyword) {
            this.listSandbox.getProductList(params);
            this.listSandbox.productlist$.subscribe(function (data) {
                _this.searchLists = data.slice();
            });
        }
    };
    MenuComponent.prototype.ngAfterContentChecked = function () {
        this.changeDetectRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "categoriesExpanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"])
    ], MenuComponent.prototype, "trigger", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/default/shared/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/default/shared/components/menu/menu.component.scss")],
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_2__["ListsSandbox"],
            _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
            Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/options/options.component.html":
/*!**********************************************************************!*\
  !*** ./src/default/shared/components/options/options.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- [ngClass]=\"{'show': showOptions}\" -->\r\n<div class=\"options transition\" class=\"green\">\r\n    <!-- <button mat-raised-button (click)=\"showOptions = !showOptions\" class=\"options-icon mat-elevation-z0\">\r\n        <mat-icon>palette</mat-icon>\r\n    </button>\r\n    <mat-card fxLayout=\"column\" fxLayoutAlign=\"space-between start\"> \r\n        <span class=\"skin-icon green\" (click)=\"changeTheme('green')\"></span> \r\n        <span class=\"skin-icon blue\" (click)=\"changeTheme('blue')\"></span>\r\n        <span class=\"skin-icon red\" (click)=\"changeTheme('red')\"></span> \r\n        <span class=\"skin-icon pink\" (click)=\"changeTheme('pink')\"></span> \r\n        <span class=\"skin-icon purple\" (click)=\"changeTheme('purple')\"></span>\r\n        <span class=\"skin-icon grey\" (click)=\"changeTheme('grey')\"></span>      \r\n    </mat-card> -->\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/options/options.component.scss":
/*!**********************************************************************!*\
  !*** ./src/default/shared/components/options/options.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options {\n  width: 60px;\n  height: 250px;\n  position: fixed;\n  top: 100px;\n  right: -62px;\n  z-index: 9999; }\n  .options .options-icon {\n    padding: 0;\n    position: absolute;\n    top: 12px;\n    left: -36px;\n    min-width: 38px;\n    z-index: 1;\n    box-shadow: -2px 3px 1px -2px rgba(0, 0, 0, 0.2), -2px 2px 2px 0 rgba(0, 0, 0, 0.14), -2px 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .options .mat-card {\n    position: absolute;\n    padding: 14px;\n    width: 100%;\n    height: 100%; }\n  .options.show {\n    right: -2px; }\n  .options .skin-icon {\n    width: 32px;\n    height: 32px;\n    cursor: pointer; }\n  .options .skin-icon.green {\n      background-color: #689f38; }\n  .options .skin-icon.blue {\n      background-color: #1976d2; }\n  .options .skin-icon.red {\n      background-color: #d32f2f; }\n  .options .skin-icon.pink {\n      background-color: #c2185b; }\n  .options .skin-icon.purple {\n      background-color: #7b1fa2; }\n  .options .skin-icon.grey {\n      background-color: #455a64; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL29wdGlvbnMvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFxvcHRpb25zXFxvcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYixnQkFBZTtFQUNmLFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYSxFQTRDaEI7RUFsREQ7SUFRUSxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxZQUFXO0lBQ1gsZ0JBQWU7SUFDZixXQUFVO0lBQ1YseUhBRTBDLEVBQzdDO0VBakJMO0lBbUJRLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsWUFBVztJQUNYLGFBQVksRUFDZjtFQXZCTDtJQXlCUSxZQUFXLEVBQ2Q7RUExQkw7SUE0QlEsWUFBVztJQUNYLGFBQVk7SUFDWixnQkFBZSxFQW1CbEI7RUFqREw7TUFnQ1ksMEJBQXlCLEVBQzVCO0VBakNUO01BbUNZLDBCQUF5QixFQUM1QjtFQXBDVDtNQXNDWSwwQkFBeUIsRUFDNUI7RUF2Q1Q7TUF5Q1ksMEJBQXlCLEVBQzVCO0VBMUNUO01BNENZLDBCQUF5QixFQUM1QjtFQTdDVDtNQStDWSwwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbnN7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgcmlnaHQ6IC02MnB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIC5vcHRpb25zLWljb257XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgIGxlZnQ6IC0zNnB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMzhweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCBcclxuICAgICAgICAgICAgICAgICAgICAtMnB4IDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIFxyXG4gICAgICAgICAgICAgICAgICAgIC0ycHggMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgcmlnaHQ6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuc2tpbi1pY29ue1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICAgICAgICBcclxuICAgICAgICAmLmdyZWVue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZjM4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJsdWV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucmVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnBpbmt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucHVycGxle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmdyZXl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTVhNjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/default/shared/components/options/options.component.ts":
/*!********************************************************************!*\
  !*** ./src/default/shared/components/options/options.component.ts ***!
  \********************************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/default/app.settings.ts");
/* harmony import */ var _core_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/common.service */ "./src/core/common/common.service.ts");
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




var OptionsComponent = /** @class */ (function () {
    /**             CHANGE THE COLORS PLATTE
     * set the color from localStorage,if localStorage have value or else
     * set color by default as green.
     * **/
    function OptionsComponent(appSettings, platformId, commonService) {
        this.appSettings = appSettings;
        this.platformId = platformId;
        this.commonService = commonService;
        // colors palette
        this.showOptions = true;
        this.settings = this.appSettings.settings;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            if (localStorage.getItem('optionsTheme')) {
                var tempColor = localStorage.getItem('optionsTheme');
                this.settings.theme = tempColor;
            }
            else {
                this.settings.theme = 'green';
            }
        }
        this.changeTheme('green');
    }
    /*** CHANGE THE COLORS PLATTE
     * @param theme from mat-card
     * save  the theme in localStorage as 'optionsTheme'(key).
     * ***/
    OptionsComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('optionsTheme', theme);
        }
    };
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/default/shared/components/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/default/shared/components/options/options.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"],
            Object,
            _core_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/product-not-found/product-not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./src/default/shared/components/product-not-found/product-not-found.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notFonudPage\" fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"90\" class=\"p-2 text-center\">\r\n    \t<h3 class=\"text-left\">Result for \"{{keyword ? keyword : 'xyzzz'}}\"</h3>\r\n        <img class=\"notFoundImg\" src=\"../../../assets/images/frame.png\" alt=\"not found\" height=\"\" width=\"\">\r\n        <h3>Not Found</h3>\r\n        <p>Sorry, the keyword you entered cannot be found, please\r\n            check again or search with anotherkeyword </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/product-not-found/product-not-found.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/default/shared/components/product-not-found/product-not-found.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border-radius: 0; }\n  .box .box-header {\n    height: 180px; }\n  .box .box-header .error {\n      font-size: 48px;\n      margin-bottom: 12px; }\n  .box .box-content {\n    position: relative;\n    height: 180px; }\n  .box .box-content .box-content-inner {\n      position: absolute;\n      top: -34px;\n      left: 34px;\n      right: 34px;\n      height: 180px; }\n  .box .box-content .box-content-header {\n      font-size: 16px;\n      text-transform: uppercase;\n      font-weight: 500; }\n  .box .box-content .box-content-header.server-error {\n        margin-bottom: 36px; }\n  .box .box-content .box-text {\n      margin-bottom: 10px;\n      text-align: center; }\n  .box .box-content .box-text::last-child {\n        margin-bottom: 15px; }\n  .box .box-content .box-footer {\n      position: relative;\n      bottom: 16px; }\n  .box .box-content .box-footer button {\n        min-width: 70px;\n        margin: 0 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3Qtbm90LWZvdW5kL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcY29tcG9uZW50c1xccHJvZHVjdC1ub3QtZm91bmRcXHByb2R1Y3Qtbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBMENuQjtFQTNDRDtJQUdRLGNBQWEsRUFLaEI7RUFSTDtNQUtZLGdCQUFlO01BQ2Ysb0JBQW1CLEVBQ3RCO0VBUFQ7SUFVUSxtQkFBa0I7SUFDbEIsY0FBYSxFQStCaEI7RUExQ0w7TUFhWSxtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLFdBQVU7TUFDVixZQUFXO01BQ1gsY0FBYSxFQUNoQjtFQWxCVDtNQW9CWSxnQkFBZTtNQUNmLDBCQUF5QjtNQUN6QixpQkFBZSxFQUlsQjtFQTFCVDtRQXdCZ0Isb0JBQW1CLEVBQ3RCO0VBekJiO01BNEJZLG9CQUFtQjtNQUNuQixtQkFBa0IsRUFJckI7RUFqQ1Q7UUErQmdCLG9CQUFtQixFQUN0QjtFQWhDYjtNQW1DWSxtQkFBa0I7TUFDbEIsYUFBWSxFQUtmO0VBekNUO1FBc0NnQixnQkFBZTtRQUNmLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1ub3QtZm91bmQvcHJvZHVjdC1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC5ib3gtaGVhZGVye1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgLmVycm9ye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJveC1jb250ZW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4OyAgICAgXHJcbiAgICAgICAgLmJveC1jb250ZW50LWlubmVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTM0cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94LWNvbnRlbnQtaGVhZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICAgICAgICAgICYuc2VydmVyLWVycm9ye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94LXRleHR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJjo6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC1mb290ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/default/shared/components/product-not-found/product-not-found.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/default/shared/components/product-not-found/product-not-found.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductNotFoundComponent", function() { return ProductNotFoundComponent; });
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


var ProductNotFoundComponent = /** @class */ (function () {
    function ProductNotFoundComponent(router) {
        this.router = router;
    }
    ProductNotFoundComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductNotFoundComponent.prototype, "keyword", void 0);
    ProductNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-not-found',
            template: __webpack_require__(/*! ./product-not-found.component.html */ "./src/default/shared/components/product-not-found/product-not-found.component.html"),
            styles: [__webpack_require__(/*! ./product-not-found.component.scss */ "./src/default/shared/components/product-not-found/product-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductNotFoundComponent);
    return ProductNotFoundComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n            <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\">\r\n                    <div *ngIf=\"product.Images as image\" class=\"swiper-slide\">\r\n                        <img [attr.data-src]=\"imagePath + '?path=' + image.containerName + '&name=' + image.image + '&width=573&height=673'\" class=\"swiper-lazy\" />\r\n                        <div class=\"swiper-lazy-preloader\"></div>\r\n                    </div>\r\n                    <div *ngIf=\"product.image as image\" class=\"swiper-slide\">\r\n                        <img [attr.data-src]=\"imagePath + '?path=' + image.containerName + '&name=' + image.image + '&width=573&height=673'\" class=\"swiper-lazy\" />\r\n                        <div class=\"swiper-lazy-preloader\"></div>\r\n                    </div>\r\n                </div>\r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\">\r\n                    <mat-icon>keyboard_arrow_left</mat-icon>\r\n                </button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\">\r\n                    <mat-icon>keyboard_arrow_right</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.gt-sm=\"px-2 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <h2>{{product.name}}</h2>\r\n            <div class=\"py-1 lh\">\r\n                <p><span class=\"text-muted fw-500\">Category: </span><span>{{product.name }}</span></p>\r\n                <p><span class=\"text-muted fw-500\">Availibility: </span><span>Available</span></p>\r\n            </div>\r\n            <div class=\"py-1\">\r\n            </div>\r\n            <p class=\"py-1 text-muted lh\">\r\n                <td [innerHtml]='product.description'></td>\r\n            </p>\r\n            <div class=\"text-muted\">\r\n                <h2 class=\"new-price\" style=\"display:inline-block\">\r\n                    <ng-container *ngIf=\"(product.flag=='' && product.pricerefer=='');else one\">$ {{product.price}}\r\n                    </ng-container>\r\n                    <ng-template #one>\r\n                        <span *ngIf=\"product.flag === 0\">$ {{product.pricerefer}}</span>\r\n                        <span *ngIf=\"product.flag === 1\"><del class=\"del\">$ {{product.price}}</del> $ {{product.pricerefer}}</span>\r\n\r\n                    </ng-template>\r\n                </h2>\r\n                <div fxLayoutAlign=\"end\" class=\"arroew\">\r\n\r\n                    <button [mat-dialog-close]=\"product\" (click)=\"redirect()\" mat-icon-button matTooltip=\"View full details\">\r\n                    <mat-icon>arrow_forward</mat-icon>\r\n                </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <app-controls [product]=\"product\" [type]=\"'popup'\" (closePopup)=\"closePopup($event)\"></app-controls>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del {\n  color: grey; }\n\n.product-dialog {\n  width: 50%; }\n\n.product-dialog .swiper-lazy {\n    min-height: 90%;\n    max-height: 90%; }\n\n.product-dialog .mat-dialog-container {\n    overflow: visible !important; }\n\n.product-dialog .mat-dialog-container .close-btn-outer {\n      position: relative; }\n\n.product-dialog .mat-dialog-container .close-btn-outer button {\n        position: absolute;\n        right: -44px;\n        top: -44px; }\n\n.product-dialog .mat-dialog-container .swiper-slide {\n      text-align: center; }\n\n.product-dialog .mat-dialog-container .swiper-slide img {\n        max-width: 100%; }\n\n.arroew {\n  display: inline-block !important;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3QtZGlhbG9nL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcY29tcG9uZW50c1xccHJvZHVjdHMtY2Fyb3VzZWxcXHByb2R1Y3QtZGlhbG9nXFxwcm9kdWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLFdBQVUsRUFzQmI7O0FBdkJEO0lBR1EsZ0JBQWU7SUFDZixnQkFBZSxFQUNsQjs7QUFMTDtJQU9RLDZCQUE0QixFQWUvQjs7QUF0Qkw7TUFTWSxtQkFBa0IsRUFNckI7O0FBZlQ7UUFXZ0IsbUJBQWtCO1FBQ2xCLGFBQVk7UUFDWixXQUFVLEVBQ2I7O0FBZGI7TUFpQlksbUJBQWtCLEVBSXJCOztBQXJCVDtRQW1CZ0IsZ0JBQWUsRUFDbEI7O0FBS2I7RUFDSSxpQ0FBZ0M7RUFDaEMsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3RzLWNhcm91c2VsL3Byb2R1Y3QtZGlhbG9nL3Byb2R1Y3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLnByb2R1Y3QtZGlhbG9nIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAuc3dpcGVyLWxhenkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICB9XHJcbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNsb3NlLWJ0bi1vdXRlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDRweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTQ0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFycm9ldyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProductDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDialogComponent", function() { return ProductDialogComponent; });
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var ProductDialogComponent = /** @class */ (function () {
    function ProductDialogComponent(dialogRef, productDetail, product, router, listSandbox, configService) {
        this.dialogRef = dialogRef;
        this.productDetail = productDetail;
        this.product = product;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        // configrations
        this.config = {};
    }
    // initially get data from config service
    ProductDialogComponent.prototype.ngOnInit = function () {
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
    };
    // calls the function finally
    ProductDialogComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        };
    };
    // close the popup window
    ProductDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductDialogComponent.prototype.closePopup = function (event) {
        this.close();
    };
    ProductDialogComponent.prototype.redirect = function () {
        this.close();
        this.router.navigate(['/products/productdetails', this.product.productId]);
    };
    ProductDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-dialog',
            template: __webpack_require__(/*! ./product-dialog.component.html */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.html"),
            styles: [__webpack_require__(/*! ./product-dialog.component.scss */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_0__["ListsSandbox"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_0__["ListsSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ProductDialogComponent);
    return ProductDialogComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/products-carousel/products-carousel.component.html":
/*!******************************************************************************************!*\
  !*** ./src/default/shared/components/products-carousel/products-carousel.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"products && products.length>0\" class=\"swiper-container\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">\r\n        <div *ngFor=\"let product of products\" class=\"swiper-slide\">\r\n            <mat-card class=\"product-item \" *ngIf='product'>\r\n                <mat-chip-list *ngIf=\"product.discount\">\r\n                    <mat-chip selected=\"true\" *ngIf=\"product.discount<=discountPrice\" color=\"warn\">\r\n                        {{product.discount}}%\r\n                    </mat-chip>\r\n                    <mat-chip selected=\"true\" *ngIf=\"product.discount>=fiftyPercent\" class=\"discount\">\r\n                        {{product.discount}}%\r\n                    </mat-chip>\r\n                    <mat-chip selected=\"true\" class=\"averageDiscount\" *ngIf=\"(product.discount>discountPrice)&&(product.discount<fiftyPercent)\">\r\n                        {{product.discount}}%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n\r\n                <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\r\n                    <img *ngIf='product.image' [src]=\"imagePath+ '?path=' + product.image.containerName + '&name=' + product.image.image + '&width=260&height=260'\" onError=\"this.src='/assets/images/default_image.png';\" style=\"height:200px\" class=\"swiper-lazy\" alt=\"\" />\r\n                    <!-- <div *ngIf='product.image' class=\"swiper-lazy-preloader\"></div> -->\r\n                    <img *ngIf='!product.image' src=\"assets/images/default_image.png\">\r\n                </a>\r\n                <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"title text-truncate\">\r\n                    {{product.name}}\r\n                </a>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                        <div class=\"size-mat\">\r\n                            <p class=\"new-price\">\r\n                                $ {{product.price}}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"divider mt-2\"></div>\r\n                <div class=\"icons\">\r\n                    <app-controls [product]=\"product\" [type]=\"'home'\" (OpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>\r\n    </button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\">\r\n        <mat-icon>keyboard_arrow_right</mat-icon>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/products-carousel/products-carousel.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/default/shared/components/products-carousel/products-carousel.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-container {\n  padding: 16px 2px 2px 2px; }\n  .swiper-container .swiper-slide {\n    text-align: center; }\n  .swiper-button-next.swiper-button-disabled,\n.swiper-button-prev.swiper-button-disabled {\n  pointer-events: auto; }\n  .del {\n  color: grey; }\n  /*green discount*/\n  .banners-container {\n  margin: 22px 0px; }\n  .banners-container .banner {\n    position: relative;\n    margin: 8px;\n    padding: 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    overflow: hidden;\n    transition: 0.15s ease-in; }\n  .banners-container.offer-products h3 {\n    font-size: 20px;\n    color: black;\n    font-weight: 600;\n    padding: 20px 0;\n    width: 100%; }\n  .banners-container.offer-products .product-item-l {\n    height: 100%;\n    padding: 10px 16px; }\n  .banners-container.offer-products .product-item-l span.discount {\n      position: absolute;\n      width: 70px;\n      height: 70px;\n      top: 20px;\n      right: 20px;\n      border-radius: 50%;\n      background: #027600;\n      text-align: center;\n      padding: 15px 0;\n      font-size: 24px;\n      color: white;\n      font-weight: 500;\n      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25); }\n  .banners-container.offer-products .product-item-l a.image-link {\n      display: block;\n      margin: 0 auto;\n      width: 100%;\n      text-align: center; }\n  .banners-container.offer-products .product-item-l a.image-link img {\n        margin-bottom: 0; }\n  .banners-container.offer-products .product-item-l .icons {\n      margin-top: 8px; }\n  .banners-container.offer-products .product-item-l a.title {\n      font-size: 22px;\n      font-weight: 500;\n      color: black !important; }\n  .banners-container.offer-products .product-item-l .new-price {\n      font-size: 22px; }\n  .banners-container.offer-products .product-item-l .new-price span.old-price {\n        font-size: 14px;\n        font-weight: 400;\n        color: #999; }\n  .banners-container.offer-products .product-item-l .prices {\n      margin: 0; }\n  .banners-container.offer-products .product-item-l .ratings-r ul {\n      list-style: none; }\n  .banners-container.offer-products .product-item-l .ratings-r ul li {\n        display: inline-block;\n        margin-left: 5px; }\n  .banners-container.offer-products .product-item-l .ratings-r ul li img {\n          margin-bottom: 0; }\n  .banners-container.offer-products .product-item-l .ratings-r p {\n      text-align: right;\n      font-size: 14px;\n      font-weight: 500;\n      color: #999; }\n  .banners-container.offer-products .product-item-l.product-item-r span.discount {\n      width: 37px;\n      height: 37px;\n      padding: 8px 0;\n      font-size: 14px; }\n  .banners-container.offer-products .product-item-l.product-item-r span.discount.d50 {\n        background: #e1ae09; }\n  .banners-container.offer-products .product-item-l.product-item-r a.title {\n      font-size: 16px; }\n  .banners-container.offer-products .product-item-l.product-item-r .new-price {\n      font-size: 14px; }\n  .banners-container.offer-products .product-item-l.product-item-r .new-price.old-price {\n        font-size: 12px; }\n  .banners-container.offer-products .product-item-l.product-item-r .ratings-r ul li img {\n      width: 11px; }\n  .banners-container.offer-products .product-item-l.product-item-r .ratings-r p {\n      font-size: 12px; }\n  .banners-container.offer-products .op-r {\n    justify-content: space-between;\n    padding-left: 20px;\n    height: 100%; }\n  .banners-container.offer-products .op-r .opr-col {\n      height: 48.6%;\n      width: 49%;\n      margin-bottom: 15px; }\n  @media (max-width: 959px) {\n  .banners-container .banner .info {\n    padding: 30px 0px; }\n    .banners-container .banner .info h1 {\n      font-size: 24px; }\n    .banners-container .banner .info h2 {\n      font-size: 16px; }\n    .banners-container .banner .info h3 {\n      font-size: 14px; } }\n  * {\n  box-sizing: border-box; }\n  .outLine {\n  outline: none; }\n  .transparent-card {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3RzLWNhcm91c2VsL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcY29tcG9uZW50c1xccHJvZHVjdHMtY2Fyb3VzZWxcXHByb2R1Y3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCLEVBSzVCO0VBTkQ7SUFHUSxtQkFBa0IsRUFFckI7RUFHTDs7RUFFSSxxQkFBb0IsRUFDdkI7RUFFRDtFQUNJLFlBQVcsRUFDZDtFQUdELGtCQUFrQjtFQUVsQjtFQUNJLGlCQUFnQixFQWtJbkI7RUFuSUQ7SUFHUSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLFdBQVU7SUFDViw2QkFBNEI7SUFDNUIsdUJBQXNCO0lBQ3RCLDRCQUEyQjtJQUMzQixpQkFBZ0I7SUFDaEIsMEJBQXlCLEVBQzVCO0VBWEw7SUFjWSxnQkFBZTtJQUNmLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixZQUFXLEVBQ2Q7RUFuQlQ7SUFxQlksYUFBWTtJQUNaLG1CQUFrQixFQWlHckI7RUF2SFQ7TUF3QmdCLG1CQUFrQjtNQUNsQixZQUFXO01BQ1gsYUFBWTtNQUNaLFVBQVM7TUFDVCxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLG9CQUFtQjtNQUNuQixtQkFBa0I7TUFDbEIsZ0JBQWU7TUFDZixnQkFBZTtNQUNmLGFBQVk7TUFDWixpQkFBZ0I7TUFHaEIsZ0RBQStDLEVBQ2xEO0VBdkNiO01BeUNnQixlQUFjO01BQ2QsZUFBYztNQUNkLFlBQVc7TUFDWCxtQkFBa0IsRUFJckI7RUFoRGI7UUE4Q29CLGlCQUFnQixFQUNuQjtFQS9DakI7TUFrRGdCLGdCQUFlLEVBQ2xCO0VBbkRiO01BcURnQixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQix3QkFBdUIsRUFDMUI7RUF4RGI7TUEwRGdCLGdCQUFlLEVBTWxCO0VBaEViO1FBNERvQixnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixZQUFXLEVBQ2Q7RUEvRGpCO01Ba0VnQixVQUFTLEVBQ1o7RUFuRWI7TUFzRW9CLGlCQUFnQixFQVFuQjtFQTlFakI7UUF3RXdCLHNCQUFxQjtRQUNyQixpQkFBZ0IsRUFJbkI7RUE3RXJCO1VBMkU0QixpQkFBZ0IsRUFDbkI7RUE1RXpCO01BZ0ZvQixrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZixpQkFBZ0I7TUFDaEIsWUFBVyxFQUNkO0VBcEZqQjtNQXdGb0IsWUFBVztNQUNYLGFBQVk7TUFDWixlQUFjO01BQ2QsZ0JBQWUsRUFJbEI7RUEvRmpCO1FBNkZ3QixvQkFBbUIsRUFDdEI7RUE5RnJCO01BaUdvQixnQkFBZSxFQUNsQjtFQWxHakI7TUFvR29CLGdCQUFlLEVBSWxCO0VBeEdqQjtRQXNHd0IsZ0JBQWUsRUFDbEI7RUF2R3JCO01BNkdnQyxZQUFXLEVBQ2Q7RUE5RzdCO01Ba0h3QixnQkFBZSxFQUNsQjtFQW5IckI7SUF5SFksK0JBQThCO0lBQzlCLG1CQUFrQjtJQUNsQixhQUFZLEVBTWY7RUFqSVQ7TUE2SGdCLGNBQWE7TUFDYixXQUFVO01BQ1Ysb0JBQW1CLEVBQ3RCO0VBS2I7RUFDSTtJQUdZLGtCQUFpQixFQVVwQjtJQWJUO01BS2dCLGdCQUFlLEVBQ2xCO0lBTmI7TUFRZ0IsZ0JBQWUsRUFDbEI7SUFUYjtNQVdnQixnQkFBZSxFQUNsQixFQUFBO0VBTWpCO0VBQ0ksdUJBQXNCLEVBQ3pCO0VBRUQ7RUFDSSxjQUFhLEVBQ2hCO0VBRUQ7RUFDSSxXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdHMtY2Fyb3VzZWwvcHJvZHVjdHMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDJweCAycHggMnB4O1xyXG4gICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXHJcbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLmRlbCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuXHJcbi8qZ3JlZW4gZGlzY291bnQqL1xyXG5cclxuLmJhbm5lcnMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMjJweCAwcHg7XHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbjtcclxuICAgIH1cclxuICAgICYub2ZmZXItcHJvZHVjdHMge1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LWl0ZW0tbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgICAgICBzcGFuLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDI3NjAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYS5pbWFnZS1saW5rIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uZXctcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5vbGQtcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZXMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yYXRpbmdzLXIge1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5wcm9kdWN0LWl0ZW0tciB7XHJcbiAgICAgICAgICAgICAgICBzcGFuLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICYuZDUwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UxYWUwOTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmV3LXByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5vbGQtcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJhdGluZ3MtciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb25zIHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wLXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAub3ByLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4LjYlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgLmJhbm5lcnMtY29udGFpbmVyIHtcclxuICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm91dExpbmUge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50LWNhcmQge1xyXG4gICAgb3BhY2l0eTogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/default/shared/components/products-carousel/products-carousel.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/default/shared/components/products-carousel/products-carousel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCarouselComponent", function() { return ProductsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
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






var ProductsCarouselComponent = /** @class */ (function () {
    function ProductsCarouselComponent(dialog, router, listSandbox, snackBar, platformId, configService) {
        this.dialog = dialog;
        this.router = router;
        this.listSandbox = listSandbox;
        this.snackBar = snackBar;
        this.platformId = platformId;
        this.configService = configService;
        // configration
        this.config = {};
        this.currentRate = 2;
        // discount price
        this.discountPrice = 20;
        this.fiftyPercent = 50;
    }
    // initially get data from config service
    ProductsCarouselComponent.prototype.ngOnInit = function () {
        this.imagePath = this.configService.getImageUrl();
    };
    ProductsCarouselComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            observer: true,
            slidesPerView: 6,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            autoplay: false,
            speed: 900,
            effect: 'slide',
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2
                },
                960: {
                    slidesPerView: 3
                },
                1280: {
                    slidesPerView: 4
                },
                1500: {
                    slidesPerView: 5
                }
            }
        };
    };
    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    ProductsCarouselComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
        });
        dialogRef.afterClosed().subscribe(function (products) {
            if (products) {
                _this.router.navigate(['/products/productdetails', products.id]);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsCarouselComponent.prototype, "products", void 0);
    ProductsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-carousel',
            template: __webpack_require__(/*! ./products-carousel.component.html */ "./src/default/shared/components/products-carousel/products-carousel.component.html"),
            styles: [__webpack_require__(/*! ./products-carousel.component.scss */ "./src/default/shared/components/products-carousel/products-carousel.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__["ListsSandbox"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            Object,
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], ProductsCarouselComponent);
    return ProductsCarouselComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/side-bar/side-bar.component.html":
/*!************************************************************************!*\
  !*** ./src/default/shared/components/side-bar/side-bar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"divider\"></div>\r\n<app-sidenav-menu [menuItems]=\"sidenavMenuItems\" [menuParentId]=\"0\"></app-sidenav-menu>\r\n<div class=\"divider\"></div>\r\n<div class=\"text-center py-2\">\r\n    <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\"/>\r\n    </svg>\r\n    <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\"/>\r\n    </svg>\r\n    <svg class=\"social-icon\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z\"/>\r\n    </svg>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/default/shared/components/side-bar/side-bar.component.scss":
/*!************************************************************************!*\
  !*** ./src/default/shared/components/side-bar/side-bar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/default/shared/components/side-bar/side-bar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/default/shared/components/side-bar/side-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidenav-menu/sidenav-menu.service */ "./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts");
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


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(sidenavMenuService) {
        this.sidenavMenuService = sidenavMenuService;
    }
    // initially get data from getSidenavMenuItems using  service
    SideBarComponent.prototype.ngOnInit = function () {
        this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spurt-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/default/shared/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/default/shared/components/side-bar/side-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_sidenav_menu_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/sidenav-menu/sidenav-menu.component.html":
/*!********************************************************************************!*\
  !*** ./src/default/shared/components/sidenav-menu/sidenav-menu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button\r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"        \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"       \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" fxLayoutAlign=\"start center\"       \r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-sidenav-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-sidenav-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/sidenav-menu/sidenav-menu.component.scss":
/*!********************************************************************************!*\
  !*** ./src/default/shared/components/sidenav-menu/sidenav-menu.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.menu-item .mat-button {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase; }\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n    transform: rotate(180deg); }\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px; }\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out; }\n\n.sub-menu .sub-menu .mat-button {\n    padding-left: 56px; }\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 76px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 96px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 116px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 136px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 156px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 176px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 196px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 216px; }\n\n.sub-menu .mat-button {\n    padding-left: 36px; }\n\n.sub-menu.show {\n    max-height: 500px;\n    transition: max-height 0.25s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL3NpZGVuYXYtbWVudS9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcc3RvcmUvc3JjXFxkZWZhdWx0XFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGVuYXYtbWVudVxcc2lkZW5hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW5hdi1tZW51L0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHRoZW1lXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsVUFBUyxFQUNaOztBQUVEO0VBRVEsWUFBVztFQUNYLGlCQUFnQjtFQUNoQiwwQkFBeUIsRUFRNUI7O0FBWkw7SUFTZ0IsMEJBQXlCLEVBQzVCOztBQVZiO0VBY1EsbUJBQWtCLEVBQ3JCOztBQUdMO0VBRUksY0FBYTtFQUNiLGlCQUFnQjtFQUdoQixzQ0FBcUMsRUFVeEM7O0FBaEJEO0lDckJZLG1CQUFnQyxFQUNuQzs7QURvQlQ7SUNyQlksbUJBQWdDLEVBQ25DOztBRG9CVDtJQ3JCWSxtQkFBZ0MsRUFDbkM7O0FEb0JUO0lDckJZLG9CQUFnQyxFQUNuQzs7QURvQlQ7SUNyQlksb0JBQWdDLEVBQ25DOztBRG9CVDtJQ3JCWSxvQkFBZ0MsRUFDbkM7O0FEb0JUO0lDckJZLG9CQUFnQyxFQUNuQzs7QURvQlQ7SUNyQlksb0JBQWdDLEVBQ25DOztBRG9CVDtJQ3JCWSxvQkFBZ0MsRUFDbkM7O0FEb0JUO0lBUVEsbUJBQWtCLEVBQ3JCOztBQVRMO0lBV1Esa0JBQWlCO0lBR2pCLHFDQUFvQyxFQUN2QyIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy9zaWRlbmF2LW1lbnUvc2lkZW5hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW17XHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoKTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4OyAgICAgIFxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICB9ICAgIFxyXG59IiwiQG1peGluIG1lbnUtbGV2ZWwtcGFkZGluZygpe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweCArICgyMHB4ICogJGkpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/shared/components/sidenav-menu/sidenav-menu.component.ts":
/*!******************************************************************************!*\
  !*** ./src/default/shared/components/sidenav-menu/sidenav-menu.component.ts ***!
  \******************************************************************************/
/*! exports provided: SidenavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function() { return SidenavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-menu.service */ "./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts");
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


var SidenavMenuComponent = /** @class */ (function () {
    function SidenavMenuComponent(sidenavMenuService) {
        this.sidenavMenuService = sidenavMenuService;
    }
    // initally get parentId data from item
    SidenavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentMenu = this.menuItems.filter(function (item) { return item.parentId === _this.menuParentId; });
    };
    // style purpose
    SidenavMenuComponent.prototype.onClick = function (menuId) {
        this.sidenavMenuService.toggleMenuItem(menuId);
        this.sidenavMenuService.closeOtherSubMenus(this.menuItems, menuId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "menuParentId", void 0);
    SidenavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav-menu',
            template: __webpack_require__(/*! ./sidenav-menu.component.html */ "./src/default/shared/components/sidenav-menu/sidenav-menu.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-menu.component.scss */ "./src/default/shared/components/sidenav-menu/sidenav-menu.component.scss")],
            providers: [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]]
        }),
        __metadata("design:paramtypes", [_sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]])
    ], SidenavMenuComponent);
    return SidenavMenuComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/sidenav-menu/sidenav-menu.model.ts":
/*!**************************************************************************!*\
  !*** ./src/default/shared/components/sidenav-menu/sidenav-menu.model.ts ***!
  \**************************************************************************/
/*! exports provided: SidenavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenu", function() { return SidenavMenu; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var SidenavMenu = /** @class */ (function () {
    function SidenavMenu(id, title, routerLink, href, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return SidenavMenu;
}());



/***/ }),

/***/ "./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts":
/*!****************************************************************************!*\
  !*** ./src/default/shared/components/sidenav-menu/sidenav-menu.service.ts ***!
  \****************************************************************************/
/*! exports provided: SidenavMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuService", function() { return SidenavMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav-menu */ "./src/default/shared/components/sidenav-menu/sidenav-menu.ts");
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




var SidenavMenuService = /** @class */ (function () {
    function SidenavMenuService(location, router) {
        this.location = location;
        this.router = router;
    }
    // style purpose
    SidenavMenuService.prototype.getSidenavMenuItems = function () {
        return _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"];
    };
    SidenavMenuService.prototype.expandActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = decodeURIComponent(url);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var menuItem_1 = activeMenuItem[0];
            while (menuItem_1.parentId !== 0) {
                var parentMenuItem = menu.filter(function (item) { return item.id === menuItem_1.parentId; })[0];
                menuItem_1 = parentMenuItem;
                this.toggleMenuItem(menuItem_1.id);
            }
        }
    };
    // style purpose
    SidenavMenuService.prototype.toggleMenuItem = function (menuId) {
        var menuItem = document.getElementById('menu-item-' + menuId);
        var subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    };
    // style purpose
    SidenavMenuService.prototype.closeOtherSubMenus = function (menu, menuId) {
        var currentMenuItem = menu.filter(function (item) { return item.id === menuId; })[0];
        menu.forEach(function (item) {
            if ((item.id !== menuId && item.parentId === currentMenuItem.parentId) || (currentMenuItem.parentId === 0 && item.id !== menuId)) {
                var subMenu = document.getElementById('sub-menu-' + item.id);
                var menuItem = document.getElementById('menu-item-' + item.id);
                if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            }
        });
    };
    // style purpose
    SidenavMenuService.prototype.closeAllSubMenus = function () {
        _sidenav_menu__WEBPACK_IMPORTED_MODULE_3__["sidenavMenuItems"].forEach(function (item) {
            var subMenu = document.getElementById('sub-menu-' + item.id);
            var menuItem = document.getElementById('menu-item-' + item.id);
            if (subMenu) {
                if (subMenu.classList.contains('show')) {
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                }
            }
        });
    };
    SidenavMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidenavMenuService);
    return SidenavMenuService;
}());



/***/ }),

/***/ "./src/default/shared/components/sidenav-menu/sidenav-menu.ts":
/*!********************************************************************!*\
  !*** ./src/default/shared/components/sidenav-menu/sidenav-menu.ts ***!
  \********************************************************************/
/*! exports provided: sidenavMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidenavMenuItems", function() { return sidenavMenuItems; });
/* harmony import */ var _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-menu.model */ "./src/default/shared/components/sidenav-menu/sidenav-menu.model.ts");
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

var sidenavMenuItems = [
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](1, 'Home', '/', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](2, 'Fashion', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](10, 'Women', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](11, 'Dresses & Skirts', '/products/dresses & skirts', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](12, 'Jackets', '/products/jackets', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](13, 'Tops & Blouses', '/products/tops & blouses', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](14, 'Shoes & Boots', '/products/shoes & boots', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](15, 'Knitwear', '/products/knitwear', null, null, false, 10),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](20, 'Men', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](21, 'T-shirts & Polos', '/products/t-shirts & polos', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](22, 'Shoe & Boots', '/products/shoe & boots', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](23, 'Jeans', '/products/jeans', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](24, 'Coats', '/products/coats', null, null, false, 20),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](30, 'Kids', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](31, 'Top', '/products/top', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](32, 'Pants & Shorts', '/products/pants & shorts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](33, 'Dresses', '/products/dresses', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](34, 'Skirts', '/products/skirts', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](35, 'Set & Body', '/products/set & body', null, null, false, 30),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](40, 'Accessories', null, null, null, true, 2),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](41, 'Watches', '/products/watches', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](42, 'Bags & Wallet', '/products/bags & wallet', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](43, 'Sunglasses', '/products/sunglasses', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](44, 'Belts & Hats', '/products/belts & hats', null, null, false, 40),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](50, 'Jewellery', '/products/jewellery', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](51, 'Electronics', '/products/electronics', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Sports', '/products/sports', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](52, 'Motors', '/products/motors', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](60, 'Pages', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](61, 'All products', '/products', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](62, 'Product detail', '/products/2/PC All-in-One', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](63, 'Sign in', '/sign-in', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](64, '404 Error', '/404', null, null, false, 60),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](80, 'Contact', '/contact', null, null, false, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](140, 'Level 1', null, null, null, true, 0),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](141, 'Level 2', null, null, null, true, 140),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](142, 'Level 3', null, null, null, true, 141),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](143, 'Level 4', null, null, null, true, 142),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](144, 'Level 5', null, 'http://themeseason.com', null, false, 143),
    new _sidenav_menu_model__WEBPACK_IMPORTED_MODULE_0__["SidenavMenu"](200, 'External Link', null, 'http://themeseason.com', '_blank', false, 0)
];


/***/ }),

/***/ "./src/default/shared/components/top-menu/top-menu.component.html":
/*!************************************************************************!*\
  !*** ./src/default/shared/components/top-menu/top-menu.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\r\n\r\n    <a class=\"mobileSearchIcon\" fxShow=\"true\" fxHide.gt-sm=\"true\" mat-button (click)=\"toogleInput()\">\r\n        <mat-icon class=\"mat-icon-sm account-icon blackStyle\">\r\n            <i class=\"fa fa-search\"></i>\r\n        </mat-icon>\r\n    </a>\r\n\r\n\r\n    <div *ngIf=\"isSearchInput\" class=\"search-algin\" fxFlex fxFlexOffset.gt-sm=\"1\" fxShow=\"true\" fxShow.gt-sm>\r\n        <form method=\"get\" class=\"search-form\" fxLayout=\"row\">\r\n            <mat-menu #categoriesMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n            </mat-menu>\r\n            <input type=\"text\" placeholder=\"What are you looking for ?\" fxFlex (keyup)=\"searchData($event.target.value)\"\r\n                [(ngModel)]=\"searchValue\" name=\"searchValue\" (keyup.enter)=\"\r\n                search()\" autocomplete=\"off\">\r\n        </form>\r\n        <div mat-dialog-content *ngIf=\"!show && searchLists.length > 0\">\r\n            <div class=\"searchTitles\">\r\n                <h5>Recent</h5>\r\n                <h5>Clear All</h5>\r\n            </div>\r\n            <ul>\r\n                <li *ngFor=\"let list of searchLists\">\r\n                    <a class=\"title text-truncate\" href=\"javascript:void(0)\"\r\n                        (click)=\"getSerchProduct(list)\">{{list.name}}</a>\r\n                    <mat-icon class=\"mat-icon-sm close-icon blackStyle\">close</mat-icon>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxShow=\"true\" fxHide.lt-md class=\"search-algin\" fxFlex fxFlexOffset.gt-sm=\"1\" fxShow=\"true\" fxShow.gt-sm>\r\n        <form method=\"get\" class=\"search-form\" fxLayout=\"row\" (click)=\" outsideClick($event)\">\r\n            <mat-menu #categoriesMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"categories-dropdown\">\r\n            </mat-menu>\r\n            <input type=\"text\" placeholder=\"What are you looking for ?\" fxFlex (keyup)=\"searchData($event.target.value)\"\r\n                [(ngModel)]=\"searchValue\" name=\"searchValue\" (keyup.enter)=\"\r\n                search()\" autocomplete=\"off\">\r\n        </form>\r\n        <div mat-dialog-content *ngIf=\"!show && searchLists.length > 0\">\r\n            <div>\r\n                <h5>Recent</h5>\r\n                <h5>Clear All</h5>\r\n            </div>\r\n            <ul>\r\n                <li *ngFor=\"let list of searchLists\">\r\n                    <a class=\"title text-truncate\" href=\"javascript:void(0)\"\r\n                        (click)=\"getSerchProduct(list)\">{{list.name}}</a>\r\n                    <mat-icon class=\"mat-icon-sm close-icon blackStyle\">close</mat-icon>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- *ngIf=\"(commonSandbox.getProfile$ | async)?.email\" -->\r\n    <a mat-button [matMenuTriggerFor]=\"accountMenu\" #accountMenuTrigger=\"matMenuTrigger\" class=\"blackStyle profileIcon\">\r\n        <!-- <mat-icon class=\"mat-icon-sm account-icon blackStyle\">person</mat-icon> -->\r\n        <mat-icon routerLink=\"/auth\" class=\"mat-icon-sm account-icon blackStyle\"><img\r\n                src=\"../../../assets/images/Profile.png\" /></mat-icon>\r\n        <span fxShow=\"false\" fxShow.gt-sm class=\"blackStyle\">Profile</span>\r\n        <!-- <mat-icon class=\"mat-icon-sm caret blackStyle\">arrow_drop_down</mat-icon> -->\r\n    </a>\r\n    <!-- <a mat-button routerLink=\"/auth\" *ngIf=\"!(commonSandbox.getProfile$ | async)?.email\">\r\n        <mat-icon routerLink=\"/auth\" class=\"mat-icon-sm account-icon blackStyle\"><img\r\n                src=\"../../../assets/images/Profile.png\" /></mat-icon>\r\n        <span fxShow=\"false\" fxShow.gt-sm class=\"blackStyle\">Profile</span>\r\n    </a> -->\r\n\r\n    <a mat-button mat-button [matMenuTriggerFor]=\"notificationMenu\" #notificationMenuTrigger=\"matMenuTrigger\"\r\n        class=\"blackStyle\">\r\n        <mat-icon class=\"mat-icon-sm notification-icon blackStyle\"><img src=\"../../../assets/images/Notification.png\" />\r\n        </mat-icon>\r\n        <span fxShow=\"false\" fxShow.gt-sm class=\"blackStyle\">Notification</span>\r\n    </a>\r\n\r\n    <span fxShow=\"true\" fxShow.gt-sm>\r\n        <a mat-button [routerLink]=\"['/wishlist']\">\r\n            <mat-icon class=\"mat-icon-sm\"><img src=\"../../../assets/images/heart.png\" /></mat-icon>\r\n            <span fxShow=\"false\" fxShow.gt-sm class=\"blackStyle\">Wishlist\r\n                <ng-container *ngIf=\"commonSandbox.wishlistCount$ | async;else noWhishListCount\">\r\n                    ({{commonSandbox.wishlistCount$ | async}})\r\n                </ng-container>\r\n                <ng-template #noWhishListCount>\r\n                    (0)\r\n                </ng-template>\r\n            </span>\r\n        </a>\r\n    </span>\r\n\r\n    <mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\"\r\n        class=\"app-dropdown account-pane account menu-drop\">\r\n        <h3>My Profile</h3>\r\n        <span>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\"\r\n                *ngIf=\"(commonSandbox.getProfile$ | async)?.email\">\r\n                <img *ngIf='(commonSandbox.getProfile$ | async)?.avatarPath'\r\n                    [src]=\"imagePath + '?path=' + (commonSandbox.getProfile$ | async)?.avatarPath + '&name=' + (commonSandbox.getProfile$ | async)?.avatar + '&width=60&height=60'\"\r\n                    alt=\"user-image\" width=\"50\">\r\n                <img *ngIf='!(commonSandbox.getProfile$ | async)?.avatarPath' src=\"./assets/images/others/user.jpg\"\r\n                    alt=\"user-image\" width=\"50\">\r\n                <p>{{(commonSandbox.getProfile$ | async)?.firstName}}<br> <small>{{(commonSandbox.getProfile$ |\r\n                        async)?.email}}\r\n                    </small></p>\r\n            </div>\r\n            <div class=\"divider\"></div>\r\n            <!-- <a mat-menu-item routerLink=\"/account/orders\">\r\n                <mat-icon class=\"mat-icon-sm\">\r\n                    <mat-icon>description</mat-icon>\r\n                </mat-icon>\r\n                <span>Order History</span>\r\n            </a> -->\r\n\r\n            <!-- new mwnu -->\r\n            <a mat-menu-item routerLink=\"/auth\" *ngIf=\"!(commonSandbox.getProfile$ | async)?.email\">\r\n                <span>SignIn/SignUp</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/account/profile\">\r\n                <span>Public Profile Settings</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/account/information\">\r\n                <span>Personal Information Settings</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/account/address\">\r\n                <span>Address Settings</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/account/influencer\">\r\n                <span>Influencer Management</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/account/orders\">\r\n                <span>My orders</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/contactus\">\r\n                <span>Contact Us</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/help\">\r\n                <span>Need Help</span>\r\n            </a>\r\n            <a mat-menu-item routerLink=\"/account/become-seller\">\r\n                <span>Become a Seller</span>\r\n            </a>\r\n\r\n\r\n            <!--  -->\r\n\r\n            <!-- <a mat-menu-item routerLink=\"/account\">\r\n                <mat-icon class=\"mat-icon-sm\">settings</mat-icon>\r\n                <span>Account Settings</span>\r\n            </a> -->\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item (click)=\"signOut()\" *ngIf=\"(commonSandbox.getProfile$ | async)?.email\">\r\n                <mat-icon class=\"mat-icon-sm\">power_settings_new</mat-icon>\r\n                <span>Sign Out</span>\r\n            </a>\r\n        </span>\r\n    </mat-menu>\r\n\r\n    <mat-menu #notificationMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\"\r\n        class=\"app-dropdown account-pane account menu-drop\">\r\n        <span>\r\n            <h3>Notifications</h3>\r\n            <div class=\"divider\"></div>\r\n            <a mat-menu-item>\r\n                <span>Your order number: 293823 has been shipped and we will notify you when its ready for\r\n                    delievery</span>\r\n            </a>\r\n            <a mat-menu-item>\r\n                <span>Your order number: 293823 has been packeed and we will notify you when its shipped</span>\r\n            </a>\r\n            <a mat-menu-item>\r\n                <span>Thank you for placing order</span>\r\n            </a>\r\n            <a mat-menu-item>\r\n                <span>Notifications</span>\r\n            </a>\r\n            <a mat-menu-item>\r\n                <span>Notifications</span>\r\n            </a>\r\n            <a mat-menu-item>\r\n                <span>Notifications</span>\r\n            </a>\r\n            <a mat-menu-item>\r\n                <span>Notifications</span>\r\n            </a>\r\n            <a mat-menu-item>\r\n                <span>Notifications</span>\r\n            </a>\r\n\r\n        </span>\r\n    </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/components/top-menu/top-menu.component.scss":
/*!************************************************************************!*\
  !*** ./src/default/shared/components/top-menu/top-menu.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvY29tcG9uZW50cy90b3AtbWVudS90b3AtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/default/shared/components/top-menu/top-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/default/shared/components/top-menu/top-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _core_common_common_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/common.sandbox */ "./src/core/common/common.sandbox.ts");
/* harmony import */ var _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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









var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent(platformId, configService, router, listSandbox, commonSandbox, productControl, snackBar, _elementRef) {
        this.platformId = platformId;
        this.configService = configService;
        this.router = router;
        this.listSandbox = listSandbox;
        this.commonSandbox = commonSandbox;
        this.productControl = productControl;
        this.snackBar = snackBar;
        this._elementRef = _elementRef;
        this.index = 0;
        // public languageKey = 'language';
        this.subscriptions = [];
        this.isSearchInput = false;
        this.searchValue = '';
        this.searchLists = [];
        this.show = true;
    }
    /**calls commonSandbox doGetProfile with default param
     * after calls commonSandbox getWishlistCounts.
     *
     * */
    TopMenuComponent.prototype.ngOnInit = function () {
        this.imagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imageUrl;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            if (localStorage.getItem('userToken')) {
                this.commonSandbox.doGetProfile();
                var params = {};
                params.limit = '';
                params.offset = 0;
                params.count = true;
                this.commonSandbox.getWishlistCounts(params);
            }
        }
    };
    TopMenuComponent.prototype.toogleInput = function () {
        this.isSearchInput = !this.isSearchInput;
    };
    /**first clear the local storage data.
     * calls commonSandbox doSignout,
     * Then navigate to authentication module
     * */
    TopMenuComponent.prototype.signOut = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            localStorage.clear();
            sessionStorage.clear();
        }
        this.commonSandbox.doSignout();
        this.productControl.clearCart();
        this.router.navigate(['/auth']);
    };
    // send the search value to product through navigation.If no value send 1 as default value.
    TopMenuComponent.prototype.searchData = function (value) {
        this.searchValue = value;
        if (!value) {
            // this.router.navigate(['/products'], {
            //     queryParams: { keyword: this.searchValue }
            // });
            this.searchLists = [];
        }
        else {
            // this.router.navigate(['/products'], {
            //     queryParams: { keyword: this.searchValue }
            // });
            this.getProductList(this.searchValue);
        }
        // this.getProductList(this.searchValue);
    };
    /**
       * fetch product list from service. calling getProductList function from sandbox
       *
       * @param keyword filter
       */
    TopMenuComponent.prototype.getProductList = function (keyword) {
        var _this = this;
        var params = {};
        params.limit = 100;
        params.offset = 0;
        params.categoryId = '';
        params.keyword = keyword;
        params.price = 'ASC';
        params.priceFrom = 0;
        params.priceTo = '';
        if (keyword) {
            this.listSandbox.getProductList(params);
            this.listSandbox.productlist$.subscribe(function (data) {
                _this.searchLists = data.slice();
            });
        }
    };
    TopMenuComponent.prototype.search = function () {
        this.router.navigate(['/products'], {
            queryParams: { keyword: this.searchValue }
        });
        this.searchValue = '';
    };
    TopMenuComponent.prototype.getSerchProduct = function (list) {
        if (list) {
            this.router.navigate(['/products'], {
                queryParams: { keyword: list.name }
            });
            this.searchLists = [];
            this.searchValue = '';
        }
    };
    TopMenuComponent.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.show = true;
            this.searchValue = '';
        }
    };
    TopMenuComponent.prototype.onInputClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (clickedInside) {
            this.show = false;
        }
    };
    TopMenuComponent.prototype.outsideClick = function () { };
    TopMenuComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TopMenuComponent.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TopMenuComponent.prototype, "onInputClick", null);
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/default/shared/components/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.scss */ "./src/default/shared/components/top-menu/top-menu.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object,
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_7__["ListsSandbox"],
            _core_common_common_sandbox__WEBPACK_IMPORTED_MODULE_3__["CommonSandbox"],
            _core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_4__["ProductControlSandbox"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/default/shared/components/trending-product/trending-product.component.html":
/*!****************************************************************************************!*\
  !*** ./src/default/shared/components/trending-product/trending-product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"spinner-wrapper\">\r\n  <app-spinner></app-spinner>\r\n</div>\r\n\r\n<div class=\"content\">\r\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\">\r\n    <div fxFlex=\"25%\" fxFlex.xs=\"100%\" fxFlex.sm=\"33%\" *ngFor=\"let num of [1,2,3,4]\">\r\n      <mat-card class=\"mat-elevation-z4\">\r\n        <img mat-card-image src=\"../../../../assets/images/ms-row-img.png\">\r\n        <mat-card-content>\r\n          <p>\r\n            The Himalayas is a mountain range in Asia.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <div class='prod-icon'>\r\n            <button mat-icon-button>\r\n              <mat-icon>favorite</mat-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Quick view\">\r\n              <mat-icon>remove_red_eye</mat-icon>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Add to cart\">\r\n              <mat-icon>shopping_cart</mat-icon>\r\n            </button>\r\n            <span class=\"cart-lk\">\r\n              <a> Add to Cart </a>\r\n            </span>\r\n          </div>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<mat-sidenav-container class=\"productsWrap trending-products\">\r\n  <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\r\n      class=\"filter-row mat-elevation-z1 text-muted\">\r\n      <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <div>\r\n\r\n        <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n          <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n            <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n              <span>{{sort.order}}</span>\r\n            </button>\r\n          </span>\r\n        </mat-menu>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"wrapper\" *ngIf=\"listSandbox?.productLoading$ | async\">\r\n      <div class=\"overlay\">\r\n        <div class=\"spinner-wrapper\">\r\n          <app-spinner [isShow]=\"listSandbox?.productLoading$ | async\"></app-spinner>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"advertisement-heading\" *ngIf=\"((listSandbox.productlist$ | async) | keyvalue)?.length\">\r\n      <h4>Most Popular and Trending</h4>\r\n    </div>\r\n    <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n\r\n      <div *ngFor=\"let product of (listSandbox.productlist$ | async)\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\r\n        fxFlex.sm=\"50\" class=\"col productDiv\">\r\n        <mat-card class=\"product-item text-center card-hover productCol\">\r\n          \r\n          <!-- <mat-icon class=\"mat-icon-lg\"><img src=\"../../../assets/images/Add to wishlist.png\" /></mat-icon> -->\r\n          <button class=\"wishIcon\" mat-icon-button\r\n            matTooltip=\"{{product.wishListStatus === 1 ? 'Added to wishlist': 'Add to wishlist'}}\"\r\n            (click)=\"addToWishList(product)\">\r\n            <mat-icon><img src=\"../../../assets/images/Add to wishlist.png\" /></mat-icon>\r\n            <!-- <mat-icon [color]=\"isWish[product]\" *ngIf=\"isWish[product] === 'warn'\"><img\r\n                src=\"../../../assets/images/Add to wishlist.png\" /></mat-icon>\r\n            <mat-icon *ngIf=\"isWish[product] !== 'warn'\"><img src=\"../../../assets/images/Add to wishlist_red.png\" /> -->\r\n          </button>\r\n          <div class=\"product-img\">\r\n            <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\r\n              <!-- *ngIf=\"product['Images'].defaultImage == 1\" -->\r\n              <img  [src]=\"imagePath+ '?path=' + product['Images'].containerName + '&name=' + product['Images'].image + '&width=260&height=260'\"\r\n                onError=\"this.src='/assets/images/default_image.png';\">\r\n            </a>\r\n            <div class=\"productRating\">\r\n              <div>\r\n                <div class=\"halfstar1\">&#x2605; 4.3 | <span>234</span></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <h4 class=\"category text-muted text-truncate \">{{product.metaTagTitle }}</h4> -->\r\n          <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"title text-truncate\">\r\n            {{product.name}}\r\n          </a>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"priceAndIcons\">\r\n              <p class=\"regularPrice\" *ngIf=\"product.regular\">${{product.regular}}</p>\r\n              <p class=\"new-price\">\r\n                $ {{product.price}}\r\n              </p>\r\n              <p *ngIf=\"product.regular\"><strong>{{getDiscPerc(product.regular, product.price)  | number: '1.0-0'}}% OFF</strong></p>\r\n              <!--  <app-controls [product]=\"product\" [type]=\"'all'\" (OpenProductDialog)=\"openProductDialog(product)\">\r\n              </app-controls> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"icons\">\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/default/shared/components/trending-product/trending-product.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/default/shared/components/trending-product/trending-product.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del {\n  color: grey; }\n\n.mediaIcons {\n  max-height: 65px; }\n\n.shareAlign {\n  margin-left: 60%; }\n\n::ng-deep.app.green .mat-checkbox-checkmark-path {\n  stroke: green !important; }\n\n.bannercursor {\n  cursor: pointer; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.supvalidation {\n  color: red; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        cursor: pointer;\n        max-width: 100%;\n        height: 6vh; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n.fix-image {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-wrapper {\n  text-align: center; }\n\n.no-review {\n  text-align: center; }\n\n.big-carousel {\n  margin-top: 8px;\n  height: 300px; }\n\n.big-carousel .swiper-container {\n    padding: 2px;\n    height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper {\n      height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide {\n        height: 300px;\n        text-align: center; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide img {\n          cursor: pointer; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide .changeColor {\n          box-shadow: 1px -1px 0px 3px #0000FF; }\n\n.big-carousel .swiper-button-next.swiper-button-disabled,\n  .big-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.big-carousel .swiper-button-prev {\n    left: -10px; }\n\n.big-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9jb21wb25lbnRzL3RyZW5kaW5nLXByb2R1Y3QvRDpcXG9kelxcd29ya2luZ1xcbWFya2V0cGxhY2VcXHN0b3JlL3NyY1xcZGVmYXVsdFxcc2hhcmVkXFxjb21wb25lbnRzXFx0cmVuZGluZy1wcm9kdWN0XFx0cmVuZGluZy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0kseUJBQXdCLEVBQzNCOztBQVFEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBVXJCOztBQVpEO0lBSVEsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsWUFBVyxFQUNkOztBQVJMO0lBVVEsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxnQkFBZSxFQTBCbEI7O0FBM0JEO0lBR1EsYUFBWSxFQWFmOztBQWhCTDtNQUtZLG1CQUFrQixFQVVyQjs7QUFmVDtRQU9nQixnQkFBZTtRQUNmLGdCQUFlO1FBQ2YsWUFBVyxFQUNkOztBQVZiOztJQW1CUSxXQUFVLEVBQ2I7O0FBcEJMO0lBc0JRLFlBQVcsRUFDZDs7QUF2Qkw7SUF5QlEsYUFBWSxFQUNmOztBQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYiw2QkFBNEI7RUFDNUIsYUFBWTtFQUNaLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUVRLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBSkw7RUFNUSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDakI7O0FBR0w7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSTtJQUNJLGdCQUFlO0lBQ2YsdUNBQXVFLEVBQzFFLEVBQUE7O0FBR0w7RUFJSSwwQkFBeUIsRUFVNUI7O0FBZEQ7SUFVUSx3Q0FBdUM7SUFFdkMsK0NBQTZDLEVBQ2hEOztBQUdMO0VBQ0kscUJBQWlCO0tBQWpCLGtCQUFpQixFQUdwQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsY0FBYSxFQStCaEI7O0FBakNEO0lBSVEsYUFBWTtJQUNaLGNBQWEsRUFpQmhCOztBQXRCTDtNQU9ZLGNBQWEsRUFjaEI7O0FBckJUO1FBU2dCLGNBQWE7UUFDYixtQkFBa0IsRUFVckI7O0FBcEJiO1VBWW9CLGdCQUFlLEVBR2xCOztBQWZqQjtVQWlCb0IscUNBQW9DLEVBRXZDOztBQW5CakI7O0lBeUJRLFdBQVUsRUFDYjs7QUExQkw7SUE0QlEsWUFBVyxFQUNkOztBQTdCTDtJQStCUSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL2NvbXBvbmVudHMvdHJlbmRpbmctcHJvZHVjdC90cmVuZGluZy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLm1lZGlhSWNvbnMge1xyXG4gICAgbWF4LWhlaWdodDogNjVweDtcclxufVxyXG5cclxuLnNoYXJlQWxpZ24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwLmFwcC5ncmVlbiAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcclxuICAgIHN0cm9rZTogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLmFwcC5ncmVlbiAubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgLy9tYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgLy9taW4td2lkdGg6IDkxcHggIWltcG9ydGFudDtcclxuICAgIC8vbWF4LXdpZHRoOiAyNDZweDtcclxufVxyXG5cclxuLmJhbm5lcmN1cnNvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC5wcm9kdWN0LWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3VwdmFsaWRhdGlvbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc21hbGwtY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNoYW5nZUNvbG9yIHtcclxuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDFweCAtMXB4IDBweCAzcHggIzAwMDBGRjtcclxuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDVweCA3cHggOHB4ICMwMDAwRkY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsXHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLnpvb20tdmlld2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5tdC0xNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uZGV0YWlscyBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC5yZXZpZXdzIHtcclxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1hdmF0YXIucmV2aWV3LWF1dGhvciB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLnRleHQge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mdWxsLWRlc2Mge1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAubWF0LWNhcmQucHJvZHVjdC1pbWFnZSBpbWcge1xyXG4gICAgICAgIGN1cnNvcjogem9vbS1pbjtcclxuICAgICAgICBjdXJzb3I6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvem9vbS5zdmcnKSAxMCAxMCwgem9vbS1pbjtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtaG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDEpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE0cHggMjRweCByZ2JhKDYyLCA1NywgMTA3LCAuMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZml4LWltYWdlIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgLy93aWR0aDogNDQycHg7XHJcbiAgICAvL2hlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm8tcmV2aWV3IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJpZy1jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIC5zd2lwZXItc2xpZGUge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2hhbmdlQ29sb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDBweCAzcHggIzAwMDBGRjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjMDAwMEZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/shared/components/trending-product/trending-product.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/default/shared/components/trending-product/trending-product.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TrendingProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingProductComponent", function() { return TrendingProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/default/shared/components/products-carousel/product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var src_core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/core/wishlist/wishlist.sandbox */ "./src/core/wishlist/wishlist.sandbox.ts");
/* harmony import */ var src_core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/core/product-control/product-control.sandbox */ "./src/core/product-control/product-control.sandbox.ts");
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










var TrendingProductComponent = /** @class */ (function () {
    function TrendingProductComponent(activatedRoute, dialog, snackBar, router, listSandbox, configService, changeDetectRef, controlSandbox, wishlistSandbox, platformId) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        this.changeDetectRef = changeDetectRef;
        this.controlSandbox = controlSandbox;
        this.wishlistSandbox = wishlistSandbox;
        this.platformId = platformId;
        // side nav
        this.sidenavOpen = true;
        // card view
        this.viewType = 'grid';
        this.viewCol = 14.28;
        this.sortData = 'Price Low To High';
        // parameters for product list
        this.startKey = 0;
        this.viewOrder = 'ASC';
        this.keyword = '';
        this.categoryId = '';
        this.brand = '';
        this.priceFrom = '';
        this.priceTo = '';
        // pagination
        this.pagesize = 7;
        this.index = 0;
        // product list
        this.isClicked = [];
        // discount price
        this.discountPrice = 20;
        this.fiftyPercent = 50;
        this.subscription = [];
        this.count = 1;
        this.quantity = 1;
        this.isWish = {};
        this.isAdd = [];
        this.optionValueArray = [];
        this.totalPrice = 0;
        this.OpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.QuantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // subscribe route params
        this.subscription.push(this.activatedRoute.queryParams.subscribe(function (query) {
            if (query['keyword']) {
                _this.keyword = query['keyword'];
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                    localStorage.setItem('keywordData', query['keyword']);
                    _this.keyword = localStorage.getItem('keywordData');
                }
                _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
            }
            if (query['brand']) {
                _this.brand = query['brand'];
                _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
            }
        }));
        this.subscription.push(this.activatedRoute.params.subscribe(function (param) {
            _this.queryParams = param;
            // if route params contains id assign id to the parameter categoryId
            if (_this.queryParams.id) {
                if (_this.queryParams.id === 'All' && !_this.brand) {
                    _this.isClicked = [];
                    _this.brand = '';
                    _this.keyword = '';
                    _this.categoryId = '';
                    _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
                }
                else {
                    _this.isClicked = [];
                    _this.isClicked[_this.queryParams.id] = true;
                    _this.categoryId = _this.queryParams.id;
                    _this.getProductList(_this.startKey, _this.viewOrder, _this.categoryId);
                }
            }
        }));
    }
    // initially remove local storage and calls listSandbox getSettings
    TrendingProductComponent.prototype.ngOnInit = function () {
        if (this.product) {
            if (this.product.wishListStatus && this.product.wishListStatus === 1) {
                this.isWish[this.product] = 'warn';
            }
            if (this.product.cartCount > 0) {
                this.count = this.product.cartCount;
            }
        }
        if (!this.queryParams.id && this.keyword === '') {
            this.getProductList(this.startKey, this.viewOrder, this.categoryId);
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('fromPrice');
            localStorage.removeItem('priceTo');
        }
        // this.listSandbox.getSettings();
        this.sortings = [
            { order: 'Price Low To High', value: 'ASC' },
            { order: 'Price High To Low', value: 'DESC' }
        ];
        // this.imagePath = this.configService.get('resize').imageUrl;
        this.imagePath = this.configService.getImageUrl();
        this.changeDetectRef.detectChanges();
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        if (window.innerWidth < 1280) {
            this.viewCol = 33.3;
        }
    };
    /**
     * fetch product list from service. calling getProductList function from sandbox
     *
     * @param limit number of records to be load
     * @param offset startkey of the records to be load
     * @param manufacturerId brand id to be filtered
     * @param categoryId category id to be filtered
     * @param price price to be filtered
     * @param priceFrom filter (from price)
     * @param keyword filter (to price)
     */
    TrendingProductComponent.prototype.getProductList = function (offset, price, category) {
        var params = {};
        params.limit = this.pagesize;
        params.offset = offset;
        if (this.brand == null) {
            this.brand = '';
        }
        params.manufacturerId = this.brand;
        params.categoryId = this.categoryId;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem('categoryIdDataKey', this.categoryId);
        }
        params.keyword = this.keyword;
        params.price = price;
        if (this.priceFrom) {
            params.priceFrom = this.priceFrom;
        }
        else {
            params.priceFrom = 0;
        }
        if (this.condition) {
            params.condition = this.condition;
        }
        params.priceTo = this.priceTo;
        this.listSandbox.getProductList(params);
        params.price = '';
        params.count = true;
        this.listSandbox.getProductCount(params);
    };
    /**
     * open quick view of the product
     *
     * @param data passing selected product detail to dialog
     */
    TrendingProductComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(src_default_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ProductDialogComponent"], {
            panelClass: 'product-dialog',
            data: product
        });
        dialogRef.afterClosed().subscribe(function (products) {
            if (products) {
                _this.router.navigate(['/products/productdetails', products.productId]);
            }
        });
    };
    // sidebar open close based on the window size
    TrendingProductComponent.prototype.onWindowResize = function () {
        window.innerWidth < 960
            ? (this.sidenavOpen = false)
            : (this.sidenavOpen = true);
        window.innerWidth < 1280 ? (this.viewCol = 33.3) : (this.viewCol = 14.28);
    };
    // changing the view type
    TrendingProductComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    // calls getProductList for sorting list
    TrendingProductComponent.prototype.changeSorting = function (sort) {
        this.sortData = sort.order;
        this.viewOrder = sort.value;
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    // calls getProductList for pagination
    TrendingProductComponent.prototype.onPageChange = function (event) {
        this.startKey = event.pageSize * event.pageIndex;
        this.pagesize = event.pageSize;
        this.index = event.pageIndex;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.priceFrom = localStorage.getItem('fromPrice');
            this.priceTo = localStorage.getItem('priceTo');
        }
        if (this.priceTo == null) {
            this.priceTo = '';
        }
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    // add product to wishlist
    TrendingProductComponent.prototype.addToWishList = function (product) {
        if (this.isWish[this.product] && this.isWish[this.product] === 'warn') {
            this.isWish[product] = '';
            var params = {};
            params.wishlistProductId = product.productId;
            this.wishlistSandbox.deleteWishlist(params);
        }
        else {
            this.isWish[product] = 'warn';
            this.isAdd = [];
            this.isAdd[product.productId] = true;
            var currentUser = void 0;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
                currentUser = JSON.parse(localStorage.getItem('user'));
            }
            if (currentUser) {
                var params = {};
                params.productId = product.productId;
                params.productOptionValueId = '';
                this.controlSandbox.addToWishlist(params);
            }
            else {
                if (this.type === 'popup') {
                    this.closePopup.emit('close');
                }
                this.router.navigate(['/auth']);
            }
        }
    };
    /**
     *  receive data which is emitted from the child component through event emitter,
     * set's local storage value(brandKey). And calls getProductList.
     *
     *  @param event from event  emitter.
     *
     *  **/
    TrendingProductComponent.prototype.receiveProgress = function (event) {
        this.priceFrom = '';
        this.brand = event.manufacturerId;
        // this.categoryId = event.categoryId;
        this.priceFrom = event.priceFrom;
        this.priceTo = event.priceTo;
        this.condition = event.condition;
        var defaultCallValue = this.viewOrder;
        this.categoryId = event.categoryId;
        this.getProductList(0, defaultCallValue, event.categoryId);
    };
    TrendingProductComponent.prototype.getDiscPerc = function (regularPrice, price) {
        var newPrice = Number(regularPrice) - Number(price);
        var perct = (newPrice / Number(regularPrice)) * 100;
        return perct;
    };
    TrendingProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], TrendingProductComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TrendingProductComponent.prototype, "onWindowResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrendingProductComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TrendingProductComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrendingProductComponent.prototype, "cartOptionValueArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TrendingProductComponent.prototype, "OpenProductDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TrendingProductComponent.prototype, "QuantityChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TrendingProductComponent.prototype, "closePopup", void 0);
    TrendingProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trending-product',
            template: __webpack_require__(/*! ./trending-product.component.html */ "./src/default/shared/components/trending-product/trending-product.component.html"),
            styles: [__webpack_require__(/*! ./trending-product.component.scss */ "./src/default/shared/components/trending-product/trending-product.component.scss")]
        })
        // implements OnInit, OnDestroy, AfterViewInit
        ,
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__["ListsSandbox"],
            src_core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            src_core_product_control_product_control_sandbox__WEBPACK_IMPORTED_MODULE_8__["ProductControlSandbox"],
            src_core_wishlist_wishlist_sandbox__WEBPACK_IMPORTED_MODULE_7__["WishlistSandbox"],
            Object])
    ], TrendingProductComponent);
    return TrendingProductComponent;
}());



/***/ }),

/***/ "./src/default/shared/get-directions/get-directions.component.html":
/*!*************************************************************************!*\
  !*** ./src/default/shared/get-directions/get-directions.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map\r\n        [latitude]=\"lattitudeLocation\"\r\n        [longitude]=\"longitudeLocation\"\r\n        [zoom]=\"zoom\"\r\n        [disableDefaultUI]=\"false\"\r\n        [zoomControl]=\"false\">\r\n\r\n    <agm-marker\r\n            [latitude]=\"lattitudeLocation\"\r\n            [longitude]=\"longitudeLocation\">\r\n    </agm-marker>\r\n\r\n</agm-map>\r\n"

/***/ }),

/***/ "./src/default/shared/get-directions/get-directions.component.scss":
/*!*************************************************************************!*\
  !*** ./src/default/shared/get-directions/get-directions.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 500px;\n  /* height is required */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9nZXQtZGlyZWN0aW9ucy9EOlxcb2R6XFx3b3JraW5nXFxtYXJrZXRwbGFjZVxcc3RvcmUvc3JjXFxkZWZhdWx0XFxzaGFyZWRcXGdldC1kaXJlY3Rpb25zXFxnZXQtZGlyZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLGNBQWE7RUFBRSx3QkFBd0IsRUFBRyIsImZpbGUiOiJzcmMvZGVmYXVsdC9zaGFyZWQvZ2V0LWRpcmVjdGlvbnMvZ2V0LWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHsgaGVpZ2h0OiA1MDBweDsgLyogaGVpZ2h0IGlzIHJlcXVpcmVkICovIH1cclxuIl19 */"

/***/ }),

/***/ "./src/default/shared/get-directions/get-directions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/default/shared/get-directions/get-directions.component.ts ***!
  \***********************************************************************/
/*! exports provided: GetDirectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDirectionsComponent", function() { return GetDirectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var GetDirectionsComponent = /** @class */ (function () {
    function GetDirectionsComponent() {
        // google maps zoom level
        this.zoom = 18;
        // initial center position for the map
        this.lattitudeLocation = 12.9386328;
        this.longitudeLocation = 80.138821;
    }
    GetDirectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-directions',
            template: __webpack_require__(/*! ./get-directions.component.html */ "./src/default/shared/get-directions/get-directions.component.html"),
            styles: [__webpack_require__(/*! ./get-directions.component.scss */ "./src/default/shared/get-directions/get-directions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GetDirectionsComponent);
    return GetDirectionsComponent;
}());



/***/ }),

/***/ "./src/default/shared/pipes/brand-search.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/default/shared/pipes/brand-search.pipe.ts ***!
  \*******************************************************/
/*! exports provided: BrandSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandSearchPipe", function() { return BrandSearchPipe; });
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

// brand seacrh pipe
var BrandSearchPipe = /** @class */ (function () {
    function BrandSearchPipe() {
    }
    BrandSearchPipe.prototype.transform = function (brands, args) {
        var searchText = new RegExp(args, 'ig');
        if (brands) {
            return brands.filter(function (brand) {
                if (brand.name) {
                    return brand.name.search(searchText) !== -1;
                }
            });
        }
    };
    BrandSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'brandSearchPipe', pure: false })
    ], BrandSearchPipe);
    return BrandSearchPipe;
}());



/***/ }),

/***/ "./src/default/shared/pipes/currency-symbol.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/default/shared/pipes/currency-symbol.pipe.ts ***!
  \**********************************************************/
/*! exports provided: CurrencySymbolPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySymbolPipe", function() { return CurrencySymbolPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var CurrencySymbolPipe = /** @class */ (function () {
    function CurrencySymbolPipe() {
    }
    CurrencySymbolPipe.prototype.transform = function (value, obj) {
        this.currentSymbol = obj;
        if (this.currentSymbol) {
            if (this.currentSymbol.position === 'right') {
                return value + ' ' + this.currentSymbol.symbol;
            }
            else if (this.currentSymbol.position === 'left') {
                return this.currentSymbol.symbol + ' ' + value;
            }
        }
        else {
            return value;
        }
    };
    CurrencySymbolPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'currencysymbol' }),
        __metadata("design:paramtypes", [])
    ], CurrencySymbolPipe);
    return CurrencySymbolPipe;
}());



/***/ }),

/***/ "./src/default/shared/pipes/filter-brands.pipe.ts":
/*!********************************************************!*\
  !*** ./src/default/shared/pipes/filter-brands.pipe.ts ***!
  \********************************************************/
/*! exports provided: FilterBrandsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBrandsPipe", function() { return FilterBrandsPipe; });
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

var FilterBrandsPipe = /** @class */ (function () {
    function FilterBrandsPipe() {
    }
    // filter brand
    FilterBrandsPipe.prototype.transform = function (brands, firstLetter) {
        if (firstLetter === 'all') {
            return brands;
        }
        else {
            return brands.filter(function (brand) { return brand.name.charAt(0) === firstLetter.toLowerCase(); });
        }
    };
    FilterBrandsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterBrands'
        })
    ], FilterBrandsPipe);
    return FilterBrandsPipe;
}());



/***/ }),

/***/ "./src/default/shared/pipes/filter-by-id.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/default/shared/pipes/filter-by-id.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FilterByIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByIdPipe", function() { return FilterByIdPipe; });
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

// filter by id
var FilterByIdPipe = /** @class */ (function () {
    function FilterByIdPipe() {
    }
    FilterByIdPipe.prototype.transform = function (items, id) {
        return items.filter(function (item) { return item.id === id; })[0];
    };
    FilterByIdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterById'
        })
    ], FilterByIdPipe);
    return FilterByIdPipe;
}());



/***/ }),

/***/ "./src/default/shared/pipes/pipes.module.ts":
/*!**************************************************!*\
  !*** ./src/default/shared/pipes/pipes.module.ts ***!
  \**************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-by-id.pipe */ "./src/default/shared/pipes/filter-by-id.pipe.ts");
/* harmony import */ var _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-brands.pipe */ "./src/default/shared/pipes/filter-brands.pipe.ts");
/* harmony import */ var _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brand-search.pipe */ "./src/default/shared/pipes/brand-search.pipe.ts");
/* harmony import */ var _currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency-symbol.pipe */ "./src/default/shared/pipes/currency-symbol.pipe.ts");
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






var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"],
                _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"],
                _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"],
                _currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_5__["CurrencySymbolPipe"]
            ],
            exports: [
                _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"],
                _filter_brands_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterBrandsPipe"],
                _brand_search_pipe__WEBPACK_IMPORTED_MODULE_4__["BrandSearchPipe"],
                _currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_5__["CurrencySymbolPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/default/shared/shared.module.ts":
/*!*********************************************!*\
  !*** ./src/default/shared/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/default/shared/spinner/spinner.component.ts");
/* harmony import */ var _components_banners_banners_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/banners/banners.component */ "./src/default/shared/components/banners/banners.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/default/shared/pipes/pipes.module.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/default/shared/components/contactus/contactus.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/help/help.component */ "./src/default/shared/components/help/help.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_footer_pages_footer_pages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer-pages/footer-pages.component */ "./src/default/shared/components/footer-pages/footer-pages.component.ts");
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






// component








var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"]
            ],
            exports: [
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _components_banners_banners_component__WEBPACK_IMPORTED_MODULE_7__["BannersComponent"]
            ],
            declarations: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _components_banners_banners_component__WEBPACK_IMPORTED_MODULE_7__["BannersComponent"], _components_footer_pages_footer_pages_component__WEBPACK_IMPORTED_MODULE_13__["FooterPagesComponent"], _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"]],
            entryComponents: [],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/default/shared/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/default/shared/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isShow\">\r\n    <div class=\"row\" style=\"margin-top: 30px;margin-right: 200px\">\r\n        <img style=\"width:90px;height:90px\"  src=\"assets/images/others/spurt-2.1-v1.gif\"/>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/shared/spinner/spinner.component.scss":
/*!***********************************************************!*\
  !*** ./src/default/shared/spinner/spinner.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loader {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px; }\n\n#loader {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px; }\n\n#loader .dot {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px; }\n\n#loader .dot::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px; }\n\n#loader .dot:nth-child(7n+1) {\n  transform: rotate(45deg); }\n\n#loader .dot:nth-child(7n+1)::before {\n  -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\n          animation: 0.8s linear 0.1s normal none infinite running load;\n  background: #00ff80 none repeat scroll 0 0; }\n\n#loader .dot:nth-child(7n+2) {\n  transform: rotate(90deg); }\n\n#loader .dot:nth-child(7n+2)::before {\n  -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\n          animation: 0.8s linear 0.2s normal none infinite running load;\n  background: #00ffea none repeat scroll 0 0; }\n\n#loader .dot:nth-child(7n+3) {\n  transform: rotate(135deg); }\n\n#loader .dot:nth-child(7n+3)::before {\n  -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\n          animation: 0.8s linear 0.3s normal none infinite running load;\n  background: #00aaff none repeat scroll 0 0; }\n\n#loader .dot:nth-child(7n+4) {\n  transform: rotate(180deg); }\n\n#loader .dot:nth-child(7n+4)::before {\n  -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\n          animation: 0.8s linear 0.4s normal none infinite running load;\n  background: #0040ff none repeat scroll 0 0; }\n\n#loader .dot:nth-child(7n+5) {\n  transform: rotate(225deg); }\n\n#loader .dot:nth-child(7n+5)::before {\n  -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\n          animation: 0.8s linear 0.5s normal none infinite running load;\n  background: #2a00ff none repeat scroll 0 0; }\n\n#loader .dot:nth-child(7n+6) {\n  transform: rotate(270deg); }\n\n#loader .dot:nth-child(7n+6)::before {\n  -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\n          animation: 0.8s linear 0.6s normal none infinite running load;\n  background: #9500ff none repeat scroll 0 0; }\n\n#loader .dot:nth-child(7n+7) {\n  transform: rotate(315deg); }\n\n#loader .dot:nth-child(7n+7)::before {\n  -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\n          animation: 0.8s linear 0.7s normal none infinite running load;\n  background: magenta none repeat scroll 0 0; }\n\n#loader .dot:nth-child(7n+8) {\n  transform: rotate(360deg); }\n\n#loader .dot:nth-child(7n+8)::before {\n  -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\n          animation: 0.8s linear 0.8s normal none infinite running load;\n  background: #ff0095 none repeat scroll 0 0; }\n\n#loader .loading {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px; }\n\n@-webkit-keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1); } }\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1); } }\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1); } }\n\n.spinner-message {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZWZhdWx0L3NoYXJlZC9zcGlubmVyL0Q6XFxvZHpcXHdvcmtpbmdcXG1hcmtldHBsYWNlXFxzdG9yZS9zcmNcXGRlZmF1bHRcXHNoYXJlZFxcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVM7RUFDVCxjQUFhO0VBQ2IsUUFBTztFQUNQLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLE9BQU07RUFDTixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxVQUFTO0VBQ1QsY0FBYTtFQUNiLFFBQU87RUFDUCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixPQUFNO0VBQ04sYUFBWSxFQUNiOztBQUVEO0VBQ0UsVUFBUztFQUNULGFBQVk7RUFDWixRQUFPO0VBQ1AsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLGNBQWEsRUFDZDs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsZUFBYztFQUNkLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLE9BQU07RUFDTixvQkFBbUI7RUFDbkIsY0FBYSxFQUNkOztBQUVEO0VBQ0UseUJBQXdCLEVBQ3pCOztBQUVEO0VBQ0Usc0VBQTZEO1VBQTdELDhEQUE2RDtFQUM3RCwyQ0FBMEMsRUFDM0M7O0FBRUQ7RUFDRSx5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxzRUFBNkQ7VUFBN0QsOERBQTZEO0VBQzdELDJDQUEwQyxFQUMzQzs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHNFQUE2RDtVQUE3RCw4REFBNkQ7RUFDN0QsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usc0VBQTZEO1VBQTdELDhEQUE2RDtFQUM3RCwyQ0FBMEMsRUFDM0M7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxzRUFBNkQ7VUFBN0QsOERBQTZEO0VBQzdELDJDQUEwQyxFQUMzQzs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHNFQUE2RDtVQUE3RCw4REFBNkQ7RUFDN0QsMkNBQTBDLEVBQzNDOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usc0VBQTZEO1VBQTdELDhEQUE2RDtFQUM3RCwyQ0FBMEMsRUFDM0M7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxzRUFBNkQ7VUFBN0QsOERBQTZEO0VBQzdELDJDQUEwQyxFQUMzQzs7QUFFRDtFQUNFLDZCQUE0QjtFQUM1Qiw2QkFBNEI7RUFDNUIsY0FBYTtFQUNiLGFBQVk7RUFDWixRQUFPO0VBQ1AsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixhQUFZLEVBQ2I7O0FBRUQ7RUFDRTtJQUNFLFdBQVU7SUFDVixvQkFBbUIsRUFBQSxFQUFBOztBQUh2QjtFQUNFO0lBQ0UsV0FBVTtJQUNWLG9CQUFtQixFQUFBLEVBQUE7O0FBSXZCO0VBQ0U7SUFDRSxXQUFVO0lBQ1Ysb0JBQW1CLEVBQUEsRUFBQTs7QUFJdkI7RUFDRSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2RlZmF1bHQvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkZXIge1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG59XHJcblxyXG4jbG9hZGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxNzVweDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90IHtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDg3LjVweDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90OjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDg3LjVweDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB3aWR0aDogODcuNXB4O1xyXG59XHJcblxyXG4jbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSk6OmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjFzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICBiYWNrZ3JvdW5kOiAjMDBmZjgwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbn1cclxuXHJcbiNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMikge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gIGJhY2tncm91bmQ6ICMwMGZmZWEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKTo6YmVmb3JlIHtcclxuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuM3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gIGJhY2tncm91bmQ6ICMwMGFhZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gIGJhY2tncm91bmQ6ICMwMDQwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gIGJhY2tncm91bmQ6ICMyYTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gIGJhY2tncm91bmQ6ICM5NTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuN3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gIGJhY2tncm91bmQ6IG1hZ2VudGEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG5cclxuI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KTo6YmVmb3JlIHtcclxuICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuOHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gIGJhY2tncm91bmQ6ICNmZjAwOTUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxufVxyXG5cclxuI2xvYWRlciAubG9hZGluZyB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJvdHRvbTogLTQwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkIHtcclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkIHtcclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnNwaW5uZXItbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/default/shared/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/default/shared/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.message = '';
    }
    SpinnerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "isShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "message", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/default/shared/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/default/shared/spinner/spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/default/theme/utils/custom-overlay-container.ts":
/*!*************************************************************!*\
  !*** ./src/default/theme/utils/custom-overlay-container.ts ***!
  \*************************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomOverlayContainer = /** @class */ (function (_super) {
    __extends(CustomOverlayContainer, _super);
    function CustomOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    };
    CustomOverlayContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomOverlayContainer);
    return CustomOverlayContainer;
}(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]));



/***/ }),

/***/ "./src/default/theme/utils/scroll-strategy.ts":
/*!****************************************************!*\
  !*** ./src/default/theme/utils/scroll-strategy.ts ***!
  \****************************************************/
/*! exports provided: menuScrollStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuScrollStrategy", function() { return menuScrollStrategy; });
function menuScrollStrategy(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    facebookAppId: '314930319788683',
    storeUrl: 'http://stagingwebsites.info:9016/api/',
    imageUrl: 'http://stagingwebsites.info:9016/api/media/image-resize/' // <Your API url for image resize>
    // storeUrl: 'http://localhost:9016/api/', // <Your API base url>
    // imageUrl: 'http://localhost:9016/api/media/image-resize/' // <Your API url for image resize>
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/icons.ts":
/*!**********************!*\
  !*** ./src/icons.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookF */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faRedditAlien */ "./node_modules/@fortawesome/free-brands-svg-icons/faRedditAlien.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedinIn */ "./node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGooglePlusG */ "./node_modules/@fortawesome/free-brands-svg-icons/faGooglePlusG.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTumblr */ "./node_modules/@fortawesome/free-brands-svg-icons/faTumblr.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faPinterestP */ "./node_modules/@fortawesome/free-brands-svg-icons/faPinterestP.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faWhatsapp */ "./node_modules/@fortawesome/free-brands-svg-icons/faWhatsapp.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faVk */ "./node_modules/@fortawesome/free-brands-svg-icons/faVk.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookMessenger */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookMessenger.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTelegramPlane */ "./node_modules/@fortawesome/free-brands-svg-icons/faTelegramPlane.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faMix */ "./node_modules/@fortawesome/free-brands-svg-icons/faMix.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faXing */ "./node_modules/@fortawesome/free-brands-svg-icons/faXing.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLine */ "./node_modules/@fortawesome/free-brands-svg-icons/faLine.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCommentAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMinus */ "./node_modules/@fortawesome/free-solid-svg-icons/faMinus.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEllipsisH */ "./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisH.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLink */ "./node_modules/@fortawesome/free-solid-svg-icons/faLink.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamation */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamation.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPrint */ "./node_modules/@fortawesome/free-solid-svg-icons/faPrint.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEnvelope */ "./node_modules/@fortawesome/free-solid-svg-icons/faEnvelope.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBook__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBook */ "./node_modules/@fortawesome/free-solid-svg-icons/faBook.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBook__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faBook__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLightbulb__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLightbulb */ "./node_modules/@fortawesome/free-solid-svg-icons/faLightbulb.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLightbulb__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faLightbulb__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCoffee__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCoffee */ "./node_modules/@fortawesome/free-solid-svg-icons/faCoffee.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCoffee__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCoffee__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faInfo__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faInfo */ "./node_modules/@fortawesome/free-solid-svg-icons/faInfo.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faInfo__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faInfo__WEBPACK_IMPORTED_MODULE_26__);



























var icons = [
    _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"], _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__["faLinkedinIn"], _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__["faGooglePlusG"], _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__["faPinterestP"], _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__["faRedditAlien"], _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__["faTumblr"],
    _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__["faWhatsapp"], _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__["faVk"], _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__["faFacebookMessenger"], _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__["faTelegramPlane"], _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__["faMix"], _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__["faXing"], _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__["faCommentAlt"], _fortawesome_free_solid_svg_icons_faBook__WEBPACK_IMPORTED_MODULE_23__["faBook"], _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__["faLine"],
    _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__["faEnvelope"], _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__["faCheck"], _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__["faPrint"], _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__["faExclamation"], _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__["faLink"], _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__["faEllipsisH"], _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__["faMinus"], _fortawesome_free_solid_svg_icons_faLightbulb__WEBPACK_IMPORTED_MODULE_24__["faLightbulb"], _fortawesome_free_solid_svg_icons_faCoffee__WEBPACK_IMPORTED_MODULE_25__["faCoffee"], _fortawesome_free_solid_svg_icons_faInfo__WEBPACK_IMPORTED_MODULE_26__["faInfo"]
];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add.apply(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"], icons);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _default_default_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/default.module */ "./src/default/default.module.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/icons.ts");
/*
* spurtcommerce
* version 1.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2022 piccosoft ltd
* Author piccosoft ltd <support@piccosoft.com>
* Licensed under the MIT license.
*/






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_default_default_module__WEBPACK_IMPORTED_MODULE_4__["DefaultModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\odz\working\marketplace\store\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map