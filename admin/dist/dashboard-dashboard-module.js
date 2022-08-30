(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/core/admin/dashboard/dashboard.sandbox.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/dashboard/dashboard.sandbox.ts ***!
  \*******************************************************/
/*! exports provided: DashboardSandbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSandbox", function() { return DashboardSandbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/dashboard.action */ "./src/core/admin/dashboard/action/dashboard.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _reducer_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer/selectors */ "./src/core/admin/dashboard/reducer/selectors.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ "./src/core/admin/dashboard/models/index.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var DashboardSandbox = /** @class */ (function () {
    function DashboardSandbox(appState, router, toastr) {
        this.appState = appState;
        this.router = router;
        this.toastr = toastr;
        this.OrderCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getOrderCount"]);
        this.OrderCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getOrderCountLoading"]);
        this.OrderCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getOrderCountLoaded"]);
        this.productCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getProductCount"]);
        this.productCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getProductCountLoading"]);
        this.productCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getProductCountLoaded"]);
        this.customerCount$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getCustomerCount"]);
        this.customerCountLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getCustomerCountLoading"]);
        this.customerCountLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getCustomerCountLoaded"]);
        this.topSellingProducts$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getTopSellingProducts"]);
        this.topSellingProductsLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getTopSellingProductsLoading"]);
        this.topSellingProductsLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getTopSellingProductsLoaded"]);
        this.salesOrderList$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getSalesOrderList"]);
        this.salesOrderListLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getSalesOrderListLoading"]);
        this.salesOrderListLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getSalesOrderListLoaded"]);
        this.recentVisitorList$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getRecentVisitorList"]);
        this.recentVisitorListLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getRecentVisitorListLoading"]);
        this.recentVisitorListLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getRecentVisitorListLoaded"]);
        this.visitorLogList$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getVisitorLogs"]);
        this.visitorLogListLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getVisitorLogsLoading"]);
        this.visitorLogListLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getVisitorLogsLoaded"]);
        this.recentSellingProduct$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getRecentSellingProduct"]);
        this.recentSellingProductLoading$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getRecentSellingProductLoading"]);
        this.recentSellingProductLoaded$ = this.appState.select(_reducer_selectors__WEBPACK_IMPORTED_MODULE_6__["getRecentSellingProductLoaded"]);
        this.subscriptions = [];
        this.registerAuthEvents();
    }
    DashboardSandbox.prototype.getOrderListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetDashboardOrderCountAction"](new _models__WEBPACK_IMPORTED_MODULE_7__["OrderModel"](params)));
    };
    DashboardSandbox.prototype.getProductListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetDashboardProductCountAction"](new _models__WEBPACK_IMPORTED_MODULE_7__["ProductModel"](params)));
    };
    DashboardSandbox.prototype.getCustomerListCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetDashboardCustomerCountAction"](new _models__WEBPACK_IMPORTED_MODULE_7__["CustomerModel"](params)));
    };
    DashboardSandbox.prototype.getTopSellingProductList = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetTopSellingProductsAction"](params));
    };
    DashboardSandbox.prototype.getSalesOrderList = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetSalesOrderAction"](params));
    };
    DashboardSandbox.prototype.getVisitorLogsList = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetVisitorLogAction"](params));
    };
    DashboardSandbox.prototype.getRecentVisitorList = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetRecentVisitorListAction"](params));
    };
    DashboardSandbox.prototype.getRecentSellingProductList = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetRecentSellingProductAction"](params));
    };
    DashboardSandbox.prototype.getItemPerPageCount = function (params) {
        if (params === void 0) { params = {}; }
        this.appState.dispatch(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_3__["GetItemPerPageCountAction"](params));
    };
    /**
     * Registers events
     */
    DashboardSandbox.prototype.registerAuthEvents = function () { };
    DashboardSandbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], DashboardSandbox);
    return DashboardSandbox;
}());



/***/ }),

/***/ "./src/core/admin/dashboard/dashboard.service.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/dashboard/dashboard.service.ts ***!
  \*******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/api/api */ "./src/core/admin/providers/api/api.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */



var DashboardService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DashboardService, _super);
    function DashboardService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        _this.URL = _this.getBaseUrl();
        return _this;
    }
    /* get order list count api*/
    DashboardService.prototype.getOrderListCount = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/order/orderlist', reqOpts);
    };
    /* get product list count api*/
    DashboardService.prototype.getProductListCount = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/product/productlist', reqOpts);
    };
    /* get customer list count api*/
    DashboardService.prototype.getCustomerListCount = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/customer/customerlist', reqOpts);
    };
    /* get top selling product list api*/
    DashboardService.prototype.getTopSellingProducts = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/product/top-selling-productlist', reqOpts);
    };
    /* get sales order list api*/
    DashboardService.prototype.getSalesOrders = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/order/saleslist', reqOpts);
    };
    /* get visitors list api*/
    DashboardService.prototype.getVisitorsList = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/customer/login-log-list', reqOpts);
    };
    /* get recent visitors list api*/
    DashboardService.prototype.getRecentVisitorsList = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/customer/recent-customerlist', reqOpts);
    };
    /* get recent selling product list api*/
    DashboardService.prototype.getRecentSellingProductList = function (filterParam) {
        var reqOpts = {};
        var params = Object.getOwnPropertyNames(filterParam).reduce(function (p, key) { return p.set(key, filterParam[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
        reqOpts.params = params;
        return this.http.get(this.URL + '/product/recent-selling-product', reqOpts);
    };
    /* get items per page count api*/
    DashboardService.prototype.getItemsPerPageCount = function () {
        return this.http.get(this.URL + '/settings/get-settings');
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DashboardService);
    return DashboardService;
}(_providers_api_api__WEBPACK_IMPORTED_MODULE_3__["Api"]));



/***/ }),

/***/ "./src/core/admin/dashboard/effects/dashboard.effect.ts":
/*!**************************************************************!*\
  !*** ./src/core/admin/dashboard/effects/dashboard.effect.ts ***!
  \**************************************************************/
/*! exports provided: DashboardEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEffects", function() { return DashboardEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/dashboard.action */ "./src/core/admin/dashboard/action/dashboard.action.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard.service */ "./src/core/admin/dashboard/dashboard.service.ts");

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */







var DashboardEffects = /** @class */ (function () {
    function DashboardEffects(action$, dashboardService) {
        var _this = this;
        this.action$ = action$;
        this.dashboardService = dashboardService;
        this.doOrderListCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_DASHBOARD_ORDER_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getOrderListCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetDashboardOrderCountSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetDashboardOrderCountFailAction"](error));
            }));
        }));
        this.doProductListCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_DASHBOARD_PRODUCT_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getProductListCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetDashboardProductCountSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetDashboardProductCountFailAction"](error));
            }));
        }));
        this.doCustomerListCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_DASHBOARD_CUSTOMER_COUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getCustomerListCount(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetDashboardCustomerCountSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetDashboardCustomerCountFailAction"](error));
            }));
        }));
        this.doTopSellingProducts$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_TOP_SELLING_PRODUCTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getTopSellingProducts(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetTopSellingProductsSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetTopSellingProductsFailAction"](error));
            }));
        }));
        this.doSalesOrderList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_SALES_ORDER_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getSalesOrders(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetSalesOrderSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetSalesOrderFailAction"](error)); }));
        }));
        this.doVisitorLogs$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_VISITOR_LOG_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getVisitorsList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetVisitorLogSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetVisitorLogFailAction"](error)); }));
        }));
        this.doRecentVisitorList$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_RECENT_VISITOR_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getRecentVisitorsList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetRecentVisitorListSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetRecentVisitorListFailAction"](error));
            }));
        }));
        this.doRecentSellingProducts$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_RECENT_SELLING_PRODUCT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (state) {
            return _this.dashboardService.getRecentSellingProductList(state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return [
                new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetRecentSellingProductSuccessAction"](response)
            ]; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetRecentSellingProductFailAction"](error));
            }));
        }));
        this.doItemPageCount$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_ITEMS_PAGECOUNT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.dashboardService.getItemsPerPageCount().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
                localStorage.setItem('itemsPerPage', res.data[0].itemsPerPage);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                return [new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetItemPerPageCountSuccessAction"](user)];
            }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _action_dashboard_action__WEBPACK_IMPORTED_MODULE_5__["GetItemPerPageCountFailAction"](error));
            }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doOrderListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doProductListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doCustomerListCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doTopSellingProducts$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doSalesOrderList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doVisitorLogs$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doRecentVisitorList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doRecentSellingProducts$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DashboardEffects.prototype, "doItemPageCount$", void 0);
    DashboardEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], DashboardEffects);
    return DashboardEffects;
}());



/***/ }),

/***/ "./src/core/admin/dashboard/models/customer.model.ts":
/*!***********************************************************!*\
  !*** ./src/core/admin/dashboard/models/customer.model.ts ***!
  \***********************************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var CustomerModel = /** @class */ (function () {
    function CustomerModel(params) {
        this.customerGroup = params.customerGroup || '';
        this.date = params.date || '';
        this.email = params.email || '';
        this.name = params.name || '';
        this.limit = params.limit || '';
        this.offset = params.offset || '';
        this.count = params.count || '';
        this.status = params.status || '';
    }
    return CustomerModel;
}());



/***/ }),

/***/ "./src/core/admin/dashboard/models/index.ts":
/*!**************************************************!*\
  !*** ./src/core/admin/dashboard/models/index.ts ***!
  \**************************************************/
/*! exports provided: CustomerModel, OrderModel, ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.model */ "./src/core/admin/dashboard/models/customer.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return _customer_model__WEBPACK_IMPORTED_MODULE_0__["CustomerModel"]; });

/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.model */ "./src/core/admin/dashboard/models/order.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return _order_model__WEBPACK_IMPORTED_MODULE_1__["OrderModel"]; });

/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.model */ "./src/core/admin/dashboard/models/product.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return _product_model__WEBPACK_IMPORTED_MODULE_2__["ProductModel"]; });

/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */





/***/ }),

/***/ "./src/core/admin/dashboard/models/order.model.ts":
/*!********************************************************!*\
  !*** ./src/core/admin/dashboard/models/order.model.ts ***!
  \********************************************************/
/*! exports provided: OrderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var OrderModel = /** @class */ (function () {
    function OrderModel(params) {
        this.limit = params.limit || 0;
        this.offset = params.offset || 0;
        this.orderId = params.orderId || '';
        this.customerName = params.customerName || '';
        this.totalAmount = params.totalAmount || '';
        this.dateAdded = params.dateAdded || '';
        this.count = params.count || false;
        this.orderStatusId = params.orderStatusId || '';
    }
    return OrderModel;
}());



/***/ }),

/***/ "./src/core/admin/dashboard/models/product.model.ts":
/*!**********************************************************!*\
  !*** ./src/core/admin/dashboard/models/product.model.ts ***!
  \**********************************************************/
/*! exports provided: ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
var ProductModel = /** @class */ (function () {
    function ProductModel(params) {
        this.limit = params.limit || 0;
        this.offset = params.offset || 0;
        this.keyword = params.keyword || '';
        this.sku = params.sku || '';
        this.status = params.status || '';
        this.price = params.price || '';
        this.count = params.count || false;
    }
    return ProductModel;
}());



/***/ }),

/***/ "./src/core/admin/dashboard/reducer/selectors.ts":
/*!*******************************************************!*\
  !*** ./src/core/admin/dashboard/reducer/selectors.ts ***!
  \*******************************************************/
/*! exports provided: getDashboardState, getOrderCount, getOrderCountLoaded, getOrderCountLoading, getOrderCountFailed, getProductCount, getProductCountLoaded, getProductCountLoading, getProductCountFailed, getCustomerCount, getCustomerCountLoaded, getCustomerCountLoading, getCustomerCountFailed, getTopSellingProducts, getTopSellingProductsLoaded, getTopSellingProductsLoading, getTopSellingProductsFailed, getSalesOrderList, getSalesOrderListLoaded, getSalesOrderListLoading, getSalesOrderListFailed, getVisitorLogs, getVisitorLogsLoaded, getVisitorLogsLoading, getVisitorLogsFailed, getRecentVisitorList, getRecentVisitorListLoaded, getRecentVisitorListLoading, getRecentVisitorListFailed, getRecentSellingProduct, getRecentSellingProductLoaded, getRecentSellingProductLoading, getRecentSellingProductFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboardState", function() { return getDashboardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderCount", function() { return getOrderCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderCountLoaded", function() { return getOrderCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderCountLoading", function() { return getOrderCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderCountFailed", function() { return getOrderCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCount", function() { return getProductCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCountLoaded", function() { return getProductCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCountLoading", function() { return getProductCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCountFailed", function() { return getProductCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerCount", function() { return getCustomerCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerCountLoaded", function() { return getCustomerCountLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerCountLoading", function() { return getCustomerCountLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerCountFailed", function() { return getCustomerCountFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopSellingProducts", function() { return getTopSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopSellingProductsLoaded", function() { return getTopSellingProductsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopSellingProductsLoading", function() { return getTopSellingProductsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopSellingProductsFailed", function() { return getTopSellingProductsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesOrderList", function() { return getSalesOrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesOrderListLoaded", function() { return getSalesOrderListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesOrderListLoading", function() { return getSalesOrderListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesOrderListFailed", function() { return getSalesOrderListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitorLogs", function() { return getVisitorLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitorLogsLoaded", function() { return getVisitorLogsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitorLogsLoading", function() { return getVisitorLogsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitorLogsFailed", function() { return getVisitorLogsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentVisitorList", function() { return getRecentVisitorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentVisitorListLoaded", function() { return getRecentVisitorListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentVisitorListLoading", function() { return getRecentVisitorListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentVisitorListFailed", function() { return getRecentVisitorListFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentSellingProduct", function() { return getRecentSellingProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentSellingProductLoaded", function() { return getRecentSellingProductLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentSellingProductLoading", function() { return getRecentSellingProductLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentSellingProductFailed", function() { return getRecentSellingProductFailed; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.reducer */ "./src/core/admin/dashboard/reducer/dashboard.reducer.ts");


// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
var getDashboardState = function (state) { return state.dashboard; };
var getOrderCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getOrderCount"]);
var getOrderCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getOrderCountLoaded"]);
var getOrderCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getOrderCountLoading"]);
var getOrderCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getOrderCountFailed"]);
/* Total product count action values */
var getProductCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCount"]);
var getProductCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCountLoaded"]);
var getProductCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCountLoading"]);
var getProductCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getProductCountFailed"]);
/* Total customer count action values */
var getCustomerCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getCustomerCount"]);
var getCustomerCountLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getCustomerCountLoaded"]);
var getCustomerCountLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getCustomerCountLoading"]);
var getCustomerCountFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getCustomerCountFailed"]);
/* top selling product action values */
var getTopSellingProducts = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getTopSellingProducts"]);
var getTopSellingProductsLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getTopSellingProductsLoaded"]);
var getTopSellingProductsLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getTopSellingProductsLoading"]);
var getTopSellingProductsFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getTopSellingProductsFailed"]);
/* sales order list action values */
var getSalesOrderList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getSalesOrderList"]);
var getSalesOrderListLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getSalesOrderListLoaded"]);
var getSalesOrderListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getSalesOrderListLoading"]);
var getSalesOrderListFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getSalesOrderListFailed"]);
/* visitor login logs action values */
var getVisitorLogs = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getVisitorLogs"]);
var getVisitorLogsLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getVisitorLogsLoaded"]);
var getVisitorLogsLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getVisitorLogsLoading"]);
var getVisitorLogsFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getVisitorLogsFailed"]);
/* recent visitor list action values */
var getRecentVisitorList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentVisitorList"]);
var getRecentVisitorListLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentVisitorListLoaded"]);
var getRecentVisitorListLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentVisitorListLoading"]);
var getRecentVisitorListFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentVisitorListFailed"]);
/* recent selling products action values */
var getRecentSellingProduct = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentSellingProduct"]);
var getRecentSellingProductLoaded = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentSellingProductLoaded"]);
var getRecentSellingProductLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentSellingProductLoading"]);
var getRecentSellingProductFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDashboardState, _dashboard_reducer__WEBPACK_IMPORTED_MODULE_1__["getRecentSellingProductFailed"]);


/***/ }),

/***/ "./src/core/admin/shared/pipes/stringLengthCompress.ts":
/*!*************************************************************!*\
  !*** ./src/core/admin/shared/pipes/stringLengthCompress.ts ***!
  \*************************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, completeWords, ellipsis) {
        if (limit === void 0) { limit = 1000; }
        if (completeWords === void 0) { completeWords = false; }
        if (ellipsis === void 0) { ellipsis = '....'; }
        if (completeWords) {
            limit = value.substr(0, 20).lastIndexOf(' ');
        }
        return value.substr(0, limit) + " " + ellipsis;
    };
    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/theme/default/admin/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/theme/default/admin/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n    <h4>Overview Dashboard</h4>\n    <div class=\"card\">\n        <div class=\"flex\">\n\n            <img src=\"./assets/img/Order.fw.png\" id=\"img-order\">\n            <div class=\"content\">\n                <span>Orders</span>\n                <span class=\"dash-count\">{{dashboardSandbox.OrderCount$ | async}}</span>\n            </div>\n            <img src=\"./assets/img/Payments.fw.png\" id=\"img-payments\">\n            <div class=\"content\">\n                <span>Payments</span>\n                <span>0</span>\n            </div>\n            <img src=\"./assets/img/product.fw.png\">\n\n            <div class=\"content\">\n                <span>Products </span>\n                <span>{{dashboardSandbox.productCount$ | async}}</span>\n            </div>\n            <img src=\"./assets/img/Customers.fw.png\" id=\"img-customers\">\n            <div class=\"content\" id=\"content\">\n                <span>Customers</span>\n                <span>{{dashboardSandbox.customerCount$ | async}}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <span class=\"sell-products\">Top Selling Products  </span>\n        <span [hidden]=\"!(dashboardSandbox.topSellingProductsLoading$ | async) && (dashboardSandbox.topSellingProductsLoaded$ | async)\" class=\"spinner-border spinner-border-sm pull-right\" role=\"status\" aria-hidden=\"true\"></span>\n        <div class=\"top-selling\" *ngIf=\"dashboardSandbox.topSellingProductsLoaded$ | async\">\n            <div class=\"card card-hover\" *ngFor=\"let topSellingProducts of dashboardSandbox.topSellingProducts$ | async\">\n                <div class=\"top-sell\">\n                    <div id=\"top-selling\">\n\n                        <img *ngIf=\"topSellingProducts.productImage[0]\" [src]=\"imageURL + '?path=' + topSellingProducts.productImage[0].containerName + '&name=' + topSellingProducts.productImage[0].image +'&width=90&height=90'\" onError=\"this.src='/assets/error-images/Load icon Products.png';\"\n                            (load)=\"topSellingImageLoading(topSellingProducts.product.productId)\" [hidden]=\"!topSellingImage[topSellingProducts.product.productId]\">\n                        <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"topSellingImage[topSellingProducts.product.productId]\">\n                    </div>\n                    <div class=\"overflow\">\n                        <span>{{topSellingProducts.product.name | slice:0:70}}\n                            <span style=\"margin-left: -2px\"\n                                  *ngIf=\"topSellingProducts.product.name.length > 70\">...</span>\n                        </span>\n                    </div>\n                </div>\n                <p class=\"top-selling-amount\">$ {{topSellingProducts.product.price }}</p>\n\n                <span (click)=\"viewProduct(topSellingProducts.product.productId)\" class=\"view\">View Product}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"graph\">\n        <div class=\"card m-r-20\">\n            <span>Sales </span>\n            <span [hidden]=\"!(dashboardSandbox.salesOrderListLoading$ | async) && (dashboardSandbox.salesOrderListLoaded$ | async)\" class=\"spinner-border spinner-border-sm pull-right\" role=\"status\" aria-hidden=\"true\"></span>\n\n            <ng-container *ngIf=\"dashboardSandbox.salesOrderListLoaded$ | async\">\n                <ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"dashboardSandbox.salesOrderList$ | async\" [gradient]=\"gradient\" [xAxis]=\"showYAxis\" [yAxis]=\"showXAxis\" [legend]=\"showLegend\" (select)=\"onSelect($event)\">\n                </ngx-charts-bar-vertical>\n            </ng-container>\n\n        </div>\n        <div class=\"card\">\n            <span>Visitors</span>\n            <span [hidden]=\"!(dashboardSandbox.visitorLogListLoading$ | async) && (dashboardSandbox.visitorLogListLoaded$ | async)\" class=\"spinner-border spinner-border-sm pull-right\" role=\"status\" aria-hidden=\"true\"></span>\n            <ng-container *ngIf=\"dashboardSandbox.visitorLogListLoaded$ | async\">\n                <ngx-charts-line-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"dashboardSandbox.visitorLogList$ | async\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" (select)=\"onSelect($event)\">\n                </ngx-charts-line-chart>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"table\">\n        <div class=\"card m-r-20\">\n            <span>Recent Customers</span>\n            <span [hidden]=\"!(dashboardSandbox.recentVisitorListLoading$ | async) && (dashboardSandbox.recentVisitorListLoaded$ | async)\" class=\"spinner-border spinner-border-sm pull-right\" role=\"status\" aria-hidden=\"true\"></span>\n            <table *ngIf=\"dashboardSandbox.recentVisitorListLoaded$ | async\">\n                <thead>\n                    <tr>\n                        <th>Ip Address </th>\n                        <th>Name</th>\n                        <th>Email</th>\n                        <th>Date</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let visitorList of dashboardSandbox.recentVisitorList$ | async\">\n                        <td>{{visitorList.ip}}</td>\n                        <td>{{visitorList.firstName}}</td>\n                        <td>{{visitorList.username}}</td>\n                        <td>{{visitorList.createdDate | date:'MMM d, y, h:mm a'}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"card\">\n            <div class=\"title-selling\">\n                <span>Recent Selling Products</span><span>\n            </span>\n                <span [hidden]=\"!(dashboardSandbox.recentSellingProductLoading$ | async) && (dashboardSandbox.recentSellingProductLoaded$ | async)\" class=\"spinner-border spinner-border-sm pull-right\" role=\"status\" aria-hidden=\"true\"></span>\n            </div>\n            <ng-container *ngIf=\"dashboardSandbox.recentSellingProductLoaded$ | async\">\n                <div class=\"recent\" *ngFor=\"let product of dashboardSandbox.recentSellingProduct$ | async\">\n                    <span class=\"number\">{{product.order.orderPrefixId}}</span>\n                    <img *ngIf=\"product.productImage[0]\" [src]=\"imageURL + '?path=' + product.productImage[0].containerName + '&name=' + product.productImage[0].image + '&width=60&height=60'\" (load)=\"recentSellingImageLoading(product.orderId)\" [hidden]=\"!recentSellingImage[product.orderId]\">\n                    <img src=\"./assets/error-images/Load icon Products.png\" [hidden]=\"recentSellingImage[product.orderId]\">\n                    <span class=\"text-content\">{{product.ProductName | slice:0:30}}</span>\n                    <span class=\"amount\">$ {{product.Total }}</span>\n                    <span (click)=\"viewOrder(product.orderId)\" class=\"View\">View</span>\n                </div>\n                <br>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/theme/default/admin/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/theme/default/admin/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ././data */ "./src/theme/default/admin/dashboard/data.ts");
/* harmony import */ var _core_admin_dashboard_dashboard_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/admin/dashboard/dashboard.sandbox */ "./src/core/admin/dashboard/dashboard.sandbox.ts");
/* harmony import */ var _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/admin/service/config.service */ "./src/core/admin/service/config.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_admin_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/admin/layout/layout.sandbox */ "./src/core/admin/layout/layout.sandbox.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardSandbox, router, _sanitizer, configService, titleService, layoutSandbox) {
        this.dashboardSandbox = dashboardSandbox;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.configService = configService;
        this.titleService = titleService;
        this.layoutSandbox = layoutSandbox;
        this.view = [750, 300];
        this.imageURL = this.configService.getImageUrl();
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.topSellingImage = {};
        this.recentSellingImage = {};
        this.colorScheme = {
            domain: ['blue']
        };
        Object.assign(this, { horizontalbar: _data__WEBPACK_IMPORTED_MODULE_2__["horizontalbar"], line: _data__WEBPACK_IMPORTED_MODULE_2__["line"], single: _data__WEBPACK_IMPORTED_MODULE_2__["single"] });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Dashboard');
        this.dashboardSandbox.getOrderListCount({ count: 1 });
        this.dashboardSandbox.getProductListCount({ count: 1, status: 1 });
        this.dashboardSandbox.getCustomerListCount({ count: 1, status: 1 });
        this.dashboardSandbox.getTopSellingProductList();
        this.dashboardSandbox.getSalesOrderList();
        this.dashboardSandbox.getRecentVisitorList();
        this.dashboardSandbox.getVisitorLogsList();
        this.dashboardSandbox.getRecentSellingProductList();
        this.dashboardSandbox.getItemPerPageCount();
        this.productUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].productUrl;
    };
    // OnSelect Function
    DashboardComponent.prototype.onSelect = function (event) { };
    // View Product
    DashboardComponent.prototype.viewProduct = function (id) {
        window.open(this.productUrl + 'products/productdetails/' + id);
    };
    // View Order Details
    DashboardComponent.prototype.viewOrder = function (orderId) {
        this.router.navigate(['/sales/orders/vieworder', orderId]);
    };
    DashboardComponent.prototype.topSellingImageLoading = function (id) {
        this.topSellingImage[id] = true;
    };
    DashboardComponent.prototype.recentSellingImageLoading = function (id) {
        this.recentSellingImage[id] = true;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/theme/default/admin/dashboard/dashboard.component.html")
            // providers: [ConfigService]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_dashboard_dashboard_sandbox__WEBPACK_IMPORTED_MODULE_3__["DashboardSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _core_admin_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _core_admin_layout_layout_sandbox__WEBPACK_IMPORTED_MODULE_8__["LayoutSandbox"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/theme/default/admin/dashboard/dashboard.module.ts":
/*!***************************************************************!*\
  !*** ./src/theme/default/admin/dashboard/dashboard.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../default.common.module */ "./src/theme/default/default.common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/theme/default/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/admin/dashboard/dashboard.service */ "./src/core/admin/dashboard/dashboard.service.ts");
/* harmony import */ var _core_admin_dashboard_dashboard_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/admin/dashboard/dashboard.sandbox */ "./src/core/admin/dashboard/dashboard.sandbox.ts");
/* harmony import */ var _core_admin_dashboard_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/admin/dashboard/effects/dashboard.effect */ "./src/core/admin/dashboard/effects/dashboard.effect.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard.routing */ "./src/theme/default/admin/dashboard/dashboard.routing.ts");
/* harmony import */ var _default_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../default.material.module */ "./src/theme/default/default.material.module.ts");
/* harmony import */ var _core_admin_shared_pipes_stringLengthCompress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/admin/shared/pipes/stringLengthCompress */ "./src/core/admin/shared/pipes/stringLengthCompress.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components */ "./src/theme/default/admin/shared/components/index.ts");

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



var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _core_admin_shared_pipes_stringLengthCompress__WEBPACK_IMPORTED_MODULE_12__["TruncatePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_components__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
                _default_common_module__WEBPACK_IMPORTED_MODULE_3__["DefaultCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _default_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_10__["DashboardRoutingModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_core_admin_dashboard_effects_dashboard_effect__WEBPACK_IMPORTED_MODULE_9__["DashboardEffects"]])
            ],
            providers: [_core_admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"], _core_admin_dashboard_dashboard_sandbox__WEBPACK_IMPORTED_MODULE_8__["DashboardSandbox"]],
            bootstrap: [],
            entryComponents: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/dashboard/dashboard.routing.ts":
/*!****************************************************************!*\
  !*** ./src/theme/default/admin/dashboard/dashboard.routing.ts ***!
  \****************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/theme/default/admin/dashboard/dashboard.component.ts");

/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */


// Component

var dashboardRoutes = [{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/theme/default/admin/dashboard/data.ts":
/*!***************************************************!*\
  !*** ./src/theme/default/admin/dashboard/data.ts ***!
  \***************************************************/
/*! exports provided: single, horizontalbar, line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalbar", function() { return horizontalbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return line; });
/*
 * SpurtCommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
var single = [
    {
        name: 'JAN',
        value: 100
    },
    {
        name: 'FEB',
        value: 200
    },
    {
        name: 'MAR',
        value: 250
    },
    {
        name: 'APR',
        value: 300
    },
    {
        name: 'MAY',
        value: 260
    },
    {
        name: 'JUN',
        value: 500
    },
    {
        name: 'JUL',
        value: 650
    },
    {
        name: 'AUG',
        value: 700
    },
    {
        name: 'SEP',
        value: 500
    },
    {
        name: 'OCT',
        value: 580
    },
    {
        name: 'NOV',
        value: 670
    },
    {
        name: 'DEC',
        value: 750
    }
];
var horizontalbar = [
    {
        name: '2017',
        series: [
            {
                name: 'Lorem ipsum1',
                value: 100
            },
            {
                name: 'Lorem ipsum2',
                value: 600
            },
            {
                name: 'Lorem ipsum3',
                value: 600
            }
        ]
    },
    {
        name: '2016',
        series: [
            {
                name: 'Lorem ipsum1',
                value: 100
            },
            {
                name: 'Lorem ipsum2',
                value: 200
            },
            {
                name: 'Lorem ipsum3',
                value: 200
            }
        ]
    },
    {
        name: '2015',
        series: [
            {
                name: 'Lorem ipsum1',
                value: 50
            },
            {
                name: 'Lorem ipsum2',
                value: 480
            },
            {
                name: 'Lorem ipsum3',
                value: 400
            }
        ]
    },
    {
        name: '2014',
        series: [
            {
                name: 'Lorem ipsum1',
                value: 300
            },
            {
                name: 'Lorem ipsum2',
                value: 180
            },
            {
                name: 'Lorem ipsum3',
                value: 180
            }
        ]
    },
    {
        name: '2013',
        series: [
            {
                name: 'Lorem ipsum1',
                value: 500
            },
            {
                name: 'Lorem ipsum2',
                value: 280
            },
            {
                name: 'Lorem ipsum3',
                value: 280
            }
        ]
    }
];
var line = [
    {
        name: 'Lorem ipsum1',
        series: [
            {
                name: '2012',
                value: 100
            },
            {
                name: '2013',
                value: 200
            },
            {
                name: '2014',
                value: 320
            },
            {
                name: '2015',
                value: 180
            },
            {
                name: '2016',
                value: 200
            },
            {
                name: '2017',
                value: 400
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map