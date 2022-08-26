(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookSquare.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faFacebookSquare.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fab';
var iconName = 'facebook-square';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f082';
var svgPathData = 'M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faFacebookSquare = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/fb-like.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/fb-like.component.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FbLikeComponent = /** @class */ (function () {
    function FbLikeComponent() {
        this.url = location.href;
        // initialise facebook sdk after it loads if required
        if (!window['fbAsyncInit']) {
            window['fbAsyncInit'] = function () {
                window['FB'].init({
                    appId: 'your-app-id',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v3.0'
                });
            };
        }
        // load facebook sdk if required
        var url = 'https://connect.facebook.net/en_US/sdk.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    FbLikeComponent.prototype.ngAfterViewInit = function () {
        // render facebook button
        window['FB'] && window['FB'].XFBML.parse();
    };
    FbLikeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'fb-like',
                    template: "<div class=\"fb-like\" [attr.data-href]=\"url\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"true\" data-share=\"true\"></div>"
                },] },
    ];
    /** @nocollapse */
    FbLikeComponent.ctorParameters = function () { return []; };
    FbLikeComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
    };
    return FbLikeComponent;
}());
exports.FbLikeComponent = FbLikeComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/google-plus.component.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/google-plus.component.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var GooglePlusComponent = /** @class */ (function () {
    function GooglePlusComponent() {
        this.url = location.href;
        // load google plus sdk if required
        var url = 'https://apis.google.com/js/platform.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    GooglePlusComponent.prototype.ngAfterViewInit = function () {
        // render google plus button
        window['gapi'] && window['gapi'].plusone.go();
    };
    GooglePlusComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'google-plus',
                    template: "<div class=\"g-plusone\" [attr.data-href]=\"url\" data-size=\"medium\"></div>"
                },] },
    ];
    /** @nocollapse */
    GooglePlusComponent.ctorParameters = function () { return []; };
    GooglePlusComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
    };
    return GooglePlusComponent;
}());
exports.GooglePlusComponent = GooglePlusComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var fb_like_component_1 = __webpack_require__(/*! ./fb-like.component */ "./node_modules/jw-angular-social-buttons/lib/fb-like.component.js");
var google_plus_component_1 = __webpack_require__(/*! ./google-plus.component */ "./node_modules/jw-angular-social-buttons/lib/google-plus.component.js");
var tweet_component_1 = __webpack_require__(/*! ./tweet.component */ "./node_modules/jw-angular-social-buttons/lib/tweet.component.js");
var linkedin_share_component_1 = __webpack_require__(/*! ./linkedin-share.component */ "./node_modules/jw-angular-social-buttons/lib/linkedin-share.component.js");
var pin_it_component_1 = __webpack_require__(/*! ./pin-it.component */ "./node_modules/jw-angular-social-buttons/lib/pin-it.component.js");
var JwSocialButtonsModule = /** @class */ (function () {
    function JwSocialButtonsModule() {
    }
    JwSocialButtonsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        fb_like_component_1.FbLikeComponent,
                        google_plus_component_1.GooglePlusComponent,
                        tweet_component_1.TweetComponent,
                        linkedin_share_component_1.LinkedInShareComponent,
                        pin_it_component_1.PinItComponent
                    ],
                    exports: [
                        fb_like_component_1.FbLikeComponent,
                        google_plus_component_1.GooglePlusComponent,
                        tweet_component_1.TweetComponent,
                        linkedin_share_component_1.LinkedInShareComponent,
                        pin_it_component_1.PinItComponent
                    ]
                },] },
    ];
    return JwSocialButtonsModule;
}());
exports.JwSocialButtonsModule = JwSocialButtonsModule;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/linkedin-share.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/linkedin-share.component.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LinkedInShareComponent = /** @class */ (function () {
    function LinkedInShareComponent() {
        this.url = location.href;
        // load twitter sdk if required
        var url = 'https://platform.linkedin.com/in.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            script.innerHTML = ' lang: en_US';
            document.body.appendChild(script);
        }
    }
    LinkedInShareComponent.prototype.ngAfterViewInit = function () {
        // add linkedin share button script tag to element
        this.element.nativeElement.innerHTML = "<script type=\"IN/Share\" data-url=\"" + this.url + "\"></script>";
        // render share button
        window['IN'] && window['IN'].parse();
    };
    LinkedInShareComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'linkedin-share',
                    template: "<div #element></div>"
                },] },
    ];
    /** @nocollapse */
    LinkedInShareComponent.ctorParameters = function () { return []; };
    LinkedInShareComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
        "element": [{ type: core_1.ViewChild, args: ['element',] },],
    };
    return LinkedInShareComponent;
}());
exports.LinkedInShareComponent = LinkedInShareComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/pin-it.component.js":
/*!************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/pin-it.component.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PinItComponent = /** @class */ (function () {
    function PinItComponent() {
        this.url = location.href;
        this.media = '';
        this.description = '';
        // load pinterest sdk if required
        var url = 'https://assets.pinterest.com/js/pinit.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            script['data-pin-build'] = 'parsePins';
            document.body.appendChild(script);
        }
    }
    PinItComponent.prototype.ngAfterViewInit = function () {
        // render pin it button
        window['parsePins'] && window['parsePins']();
    };
    PinItComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'pin-it',
                    template: "<a href=\"//www.pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}\" data-pin-do=\"buttonPin\" data-pin-config=\"beside\"></a>"
                },] },
    ];
    /** @nocollapse */
    PinItComponent.ctorParameters = function () { return []; };
    PinItComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
        "media": [{ type: core_1.Input },],
        "description": [{ type: core_1.Input },],
    };
    return PinItComponent;
}());
exports.PinItComponent = PinItComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/tweet.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/tweet.component.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var TweetComponent = /** @class */ (function () {
    function TweetComponent() {
        this.url = location.href;
        this.text = '';
        // load twitter sdk if required
        var url = 'https://platform.twitter.com/widgets.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    TweetComponent.prototype.ngAfterViewInit = function () {
        // render tweet button
        window['twttr'] && window['twttr'].widgets.load();
    };
    TweetComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tweet',
                    template: "<a href=\"https://twitter.com/share\" [attr.data-text]=\"text\" [attr.data-url]=\"url\" class=\"twitter-share-button\"></a>"
                },] },
    ];
    /** @nocollapse */
    TweetComponent.ctorParameters = function () { return []; };
    TweetComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
    };
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/default/pages/products/product-filter/product-filter.component.html":
/*!*********************************************************************************!*\
  !*** ./src/default/pages/products/product-filter/product-filter.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion displayMode=\"flat\" multi=\"true\">\n    <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Categories</h4>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"categories-wrapper categories-dropdown\" perfectScrollbar>\n            <app-category-list [isClicked]=\"isClickedData\" [categories]=\"listSandbox.categoryList$ | async\" (change)=\"onChangeCategory($event)\" [categoryId]=\"category\"></app-category-list>\n\n        </div>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Price </h4>\n                <i *ngIf=\"listSandbox.priceLoading$ | async\" class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\n\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\n            <span>From: <b>{{rupees}}{{priceFrom}}</b></span>\n            <span>To: <b>{{rupees}}{{priceTo}}</b></span>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\n            <mat-slider color=\"primary\" max=\"10000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\" (input)=\"priceFromValue($event)\" (mouseup)=\"selectPrice()\"></mat-slider>\n            <mat-slider color=\"warn\" [max]=\"(listSandbox.maxProductPrice$ | async)\" [min]=10000 thumb-label=\"true\" [(ngModel)]=\"priceTo\" (input)=\"priceToValue($event)\" (mouseup)=\"selectPrice()\"></mat-slider>\n        </div>\n    </mat-expansion-panel>\n\n    <!-- <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Condition</h4>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div fxLayout=\"column\">\n            <mat-radio-group matInput>\n                <mat-radio-button *ngFor=\"let condition of conditions\" color=\"primary\" (change)=\"changeCondition($event, condition.value)\" [value]=\"condition.value\">{{condition.option}}\n                </mat-radio-button>\n            </mat-radio-group>\n        </div>\n    </mat-expansion-panel> -->\n\n    <mat-expansion-panel expanded>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h4>Brands</h4>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"filter-brands\">\n            <button class='card-hover' mat-raised-button *ngFor=\"let brand of listSandbox.manufacturer$ | async\" (click)=\"selectBrand(brand.manufacturerId)\" [ngClass]=\"{'changeShadowColor': brandId == brand.manufacturerId }\">\n                <img [src]=\"imagePath+ '?path=' + brand.imagePath + '&name=' + brand.image + '&width=180&height=80'\"/>\n            </button>\n        </div>\n    </mat-expansion-panel>\n\n</mat-accordion>"

/***/ }),

/***/ "./src/default/pages/products/product-filter/product-filter.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/default/pages/products/product-filter/product-filter.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-expansion-panel-header-title {\n  text-transform: uppercase; }\n\n.filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0; }\n\n.filter-price .mat-slider-horizontal {\n  min-width: 110px; }\n\n.filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden; }\n\n.filter-brands button img {\n    width: 66px;\n    height: 44px; }\n\n.filter-brands .changeShadowColor {\n  box-shadow: 5px 7px 8px #0000FF; }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\nmat-radio-button {\n  margin-left: 25px; }\n\nmat-radio-group {\n  margin-left: -26px; }\n\n.categories-wrapper {\n  position: relative;\n  max-height: 100%; }\n\n.wrapper {\n  height: 500px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAyL21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBRVEsZ0JBQWU7RUFDZixxQkFBb0I7RUFDcEIsV0FBVSxFQUNiOztBQUdMO0VBRVEsaUJBQWdCLEVBQ25COztBQUdMO0VBRVEsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixhQUFZO0VBQ1osaUJBQWdCLEVBS25COztBQVpMO0lBU1ksWUFBVztJQUNYLGFBQVksRUFDZjs7QUFYVDtFQWNRLGdDQUErQixFQUNsQzs7QUFHTDtFQUlJLDBCQUF5QixFQVU1Qjs7QUFkRDtJQVVRLHdDQUF1QztJQUV2QywrQ0FBNkMsRUFDaEQ7O0FBR0w7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0kseUJBQXdCLEVBQzNCIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmlsdGVyLWJ1dHRvbnMge1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogMzZweDtcbiAgICAgICAgbWFyZ2luOiAwIDZweCAxMHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuXG4uZmlsdGVyLXByaWNlIHtcbiAgICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICB9XG59XG5cbi5maWx0ZXItYnJhbmRzIHtcbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBtaW4td2lkdGg6IDY2cHg7XG4gICAgICAgIG1hcmdpbjogMCA2cHggMTBweCAwO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2hhbmdlU2hhZG93Q29sb3Ige1xuICAgICAgICBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjMDAwMEZGO1xuICAgIH1cbn1cblxuLmNhcmQtaG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDUpO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsIDU3LCAxMDcsIC4xKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xuICAgIH1cbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbm1hdC1yYWRpby1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xufVxuXG4uY2F0ZWdvcmllcy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/default/pages/products/product-filter/product-filter.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/default/pages/products/product-filter/product-filter.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
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
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */






var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(router, listSandbox, configService, fb, route, platformId) {
        var _this = this;
        this.router = router;
        this.listSandbox = listSandbox;
        this.configService = configService;
        this.fb = fb;
        this.route = route;
        this.platformId = platformId;
        // price filter
        this.priceFrom = '';
        this.priceTo = '';
        // filter used new
        this.conditions = [
            { option: 'All', value: '' },
            { option: 'New', value: 1 },
            { option: 'Used', value: 2 }
        ];
        // product list
        this.keyword = '';
        this.condition = 0;
        this.oneTimeAssignValue = 1;
        this.progressEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
        this.route.params.subscribe(function (data) {
            if (data.id) {
                _this.category = data.id;
            }
        });
    }
    ProductFilterComponent.prototype.ngOnChanges = function (changes) {
        if (this.category && this.category !== '') {
            // this.getCategory(this.category);
        }
        else {
            this.getCategories();
        }
    };
    // Initially calls getCategories,getBrands function.
    ProductFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePath = this.configService.getImageUrl();
        this.getBrands();
        /**               INITIALLY SET VALUE  (FROM PRICE) AND  (TO PRICE)
         * subscribe listSandbox maxProductPrice$  to get  maximum product price and as well as set default minimum price.
         * priceTo gets value from listSandbox.maxProductPrice$ and  convert string to number format
         * priceFrom gets value from listSandbox.maxProductPrice$ and  convert string to number format
         * **/
        this.subscriptions.push(this.listSandbox.maxProductPrice$.subscribe(function (maximumPrice) {
            if (maximumPrice && _this.oneTimeAssignValue === 1) {
                var tempPriceTo = JSON.parse(maximumPrice);
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(_this.platformId)) {
                    localStorage.setItem('priceTo', tempPriceTo);
                    _this.priceTo = localStorage.getItem('priceTo');
                }
                var initialToPrice = '1';
                _this.priceFrom = JSON.parse(initialToPrice);
                _this.oneTimeAssignValue++;
            }
        }));
        // subscribe subject getting value from MenuComponent
        this.subscriptions.push(this.listSandbox.productFilterData.subscribe(function (productId) {
            if (productId) {
                _this.brandId = '';
            }
        }));
    };
    // getCategory(id) {
    //   const params: any = {};
    //   params.categoryId = id;
    //   this.listSandbox.getCategory(params);
    // }
    // calls listSandbox getManufacturerList for getting brand list
    ProductFilterComponent.prototype.getBrands = function () {
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        this.listSandbox.getManufacturerList(params);
    };
    // calls listSandbox getCategoryList with default param values
    ProductFilterComponent.prototype.getCategories = function () {
        var params = {};
        params.limit = '';
        params.offset = 0;
        params.keyword = '';
        params.sortOrder = '';
        this.listSandbox.getCategoryList(params);
    };
    // calls getProducts for filter
    ProductFilterComponent.prototype.onChangeCategory = function (categoryId) {
        this.category = categoryId;
        this.getProducts();
    };
    /**
     *  selecting brand in the brand list.
     *  Then calls getProducts to refresh the product list,
     *  set ,get,remove local storage for brandId.
     *  remove brandSelectionKey local storage.
     *  **/
    ProductFilterComponent.prototype.selectBrand = function (brandId) {
        if (brandId === +this.brandId) {
            this.brandId = '';
        }
        else {
            this.brandId = brandId;
        }
        this.getProducts();
    };
    /** calls getProducts event changed,
     * @param id from condition event **/
    ProductFilterComponent.prototype.changeCondition = function (event, id) {
        this.condition = id;
        this.getProducts();
    };
    /** set local storage value,
     *  after the price value changed based on the slider.
     *  @param event from priceFrom slider
     * **/
    ProductFilterComponent.prototype.priceFromValue = function (event) {
        this.priceFrom = event.value;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('fromPrice');
            localStorage.setItem('fromPrice', this.priceFrom);
            this.priceFrom = localStorage.getItem('fromPrice');
        }
    };
    /** set local storage value,
     *  after the price value changed based on the slider.
     *  @param event from priceTo slider
     * **/
    ProductFilterComponent.prototype.priceToValue = function (event) {
        this.priceTo = event.value;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem('priceTo');
            var objStr = JSON.stringify(this.priceTo);
            localStorage.setItem('priceTo', this.priceTo);
            this.priceTo = localStorage.getItem('priceTo');
        }
    };
    /**calls getProducts for price filter
     * **/
    ProductFilterComponent.prototype.selectPrice = function () {
        this.getProducts();
    };
    /**
     * calls listSandbox getProductList.Then calls listSandbox getProductCount
     *And also emits the param to product list for correct pagination.
     * */
    ProductFilterComponent.prototype.getProducts = function () {
        var params = {};
        params.refresh = false;
        if (this.brandId === 'null' || this.brandId == null) {
            this.brandId = '';
            params.manufacturerId = this.brandId;
        }
        else {
            params.manufacturerId = this.brandId;
        }
        /**  during removing local storage it assigns null string
         * this condition will handle that.**/
        params.keyword = this.keyword;
        if (this.category === 'null' || this.category == null) {
            this.category = '';
            params.categoryId = this.category;
        }
        else {
            params.categoryId = this.category;
        }
        if (this.priceFrom === 'null' || this.priceFrom == null) {
            this.priceFrom = '';
            params.priceFrom = this.priceFrom;
        }
        else {
            params.priceFrom = this.priceFrom;
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            if (!localStorage.getItem('priceTo')) {
                this.priceTo = '';
                params.priceTo = this.priceTo;
            }
            else {
                params.priceTo = this.priceTo;
            }
        }
        params.condition = this.condition;
        this.progressEmit.emit(params);
    };
    ProductFilterComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "isClickedData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "brandId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "progressEmit", void 0);
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spurt-product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/default/pages/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.scss */ "./src/default/pages/products/product-filter/product-filter.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__["ListsSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            Object])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/product/product-zoom/product-zoom.component.html":
/*!*************************************************************************************!*\
  !*** ./src/default/pages/products/product/product-zoom/product-zoom.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-in\" (click)=\"zoomIn()\"><mat-icon>zoom_in</mat-icon></button>\r\n    <button mat-mini-fab color=\"primary\" class=\"zoom-out\" (click)=\"zoomOut()\"><mat-icon>zoom_out</mat-icon></button>\r\n    <button mat-mini-fab color=\"warn\" class=\"close\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <div class=\"viewer\">\r\n        <img [src]=\"image\" #zoomImage>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/pages/products/product/product-zoom/product-zoom.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/default/pages/products/product/product-zoom/product-zoom.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom-dialog .mat-dialog-container {\n  overflow: visible !important; }\n  .zoom-dialog .mat-dialog-container .controls {\n    position: relative; }\n  .zoom-dialog .mat-dialog-container .controls button {\n      position: absolute;\n      top: -44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-in {\n      right: 44px; }\n  .zoom-dialog .mat-dialog-container .controls .zoom-out {\n      right: 0; }\n  .zoom-dialog .mat-dialog-container .controls .close {\n      right: -44px; }\n  .zoom-dialog .mat-dialog-container .viewer {\n    width: 100%;\n    text-align: center; }\n  .zoom-dialog .mat-dialog-container .viewer img {\n      max-width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAyL21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC16b29tL3Byb2R1Y3Qtem9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLDZCQUE0QixFQXdCL0I7RUExQkw7SUFJWSxtQkFBa0IsRUFjckI7RUFsQlQ7TUFNZ0IsbUJBQWtCO01BQ2xCLFdBQVUsRUFDYjtFQVJiO01BVWdCLFlBQVcsRUFDZDtFQVhiO01BYWdCLFNBQVEsRUFDWDtFQWRiO01BZ0JnQixhQUFZLEVBQ2Y7RUFqQmI7SUFvQlksWUFBVztJQUNYLG1CQUFrQixFQUlyQjtFQXpCVDtNQXVCZ0IsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvZGVmYXVsdC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3Qtem9vbS9wcm9kdWN0LXpvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuem9vbS1kaWFsb2d7XHJcbiAgICAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAuY29udHJvbHN7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuem9vbS1pbntcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA0NHB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuem9vbS1vdXR7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsb3Nle1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00NHB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudmlld2Vye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/default/pages/products/product/product-zoom/product-zoom.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/default/pages/products/product/product-zoom/product-zoom.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function() { return ProductZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var ProductZoomComponent = /** @class */ (function () {
    function ProductZoomComponent(dialogRef, image) {
        this.dialogRef = dialogRef;
        this.image = image;
        this.count = 10;
        this.maxWidth = 60;
    }
    ProductZoomComponent.prototype.ngOnInit = function () {
    };
    // close the window
    ProductZoomComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    // zoom the image
    ProductZoomComponent.prototype.zoomIn = function () {
        if (this.count < 60) {
            this.maxWidth = this.maxWidth + this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
            this.count = this.count + 10;
        }
    };
    // zoom out the image
    ProductZoomComponent.prototype.zoomOut = function () {
        if (this.count > 10) {
            this.count = this.count - 10;
            this.maxWidth = this.maxWidth - this.count;
            this.zoomImage.nativeElement.style.maxWidth = this.maxWidth + '%';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomImage'),
        __metadata("design:type", Object)
    ], ProductZoomComponent.prototype, "zoomImage", void 0);
    ProductZoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-zoom',
            template: __webpack_require__(/*! ./product-zoom.component.html */ "./src/default/pages/products/product/product-zoom/product-zoom.component.html"),
            styles: [__webpack_require__(/*! ./product-zoom.component.scss */ "./src/default/pages/products/product/product-zoom/product-zoom.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProductZoomComponent);
    return ProductZoomComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/product/product.component.html":
/*!*******************************************************************!*\
  !*** ./src/default/pages/products/product/product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-wrapper\">\r\n    <app-spinner [isShow]=\"productDetail.productDetailLoading$ | async\"></app-spinner>\r\n</div>\r\n<div *ngIf=\"!(productDetail.productDetailLoading$ | async)\">\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-md=\"35\" fxFlex.md=\"45\">\r\n            <mat-card class=\"product-image\">\r\n                <button mat-icon-button (click)=\"openZoomViewer()\" fxHide=\"false\" fxHide.gt-md>\r\n                <mat-icon>fullscreen</mat-icon>\r\n            </button>\r\n                <img class=\"fix-image\" *ngIf=\"image\" [src]=\"image\" onError=\"this.src='/assets/images/default_image.png';\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" />\r\n            </mat-card>\r\n\r\n            <div class=\"small-carousel\">\r\n                <div class=\"swiper-container\" [swiper]=\"configuration\">\r\n                    <div class=\"swiper-wrapper\">\r\n                        <div *ngFor=\"let image of (productDetail.productDetails$ | async)?.productImage\" class=\"swiper-slide\">\r\n                            <mat-card (click)=\"selectImage(image)\" class=\" p-1 card-hover\" [ngClass]=\"{'changeColor': isActive[image.productId]}\">\r\n                                <img [src]=\"imagePath + '?path=' + image.containerName + '&name=' + image.image + '&width=60&height=60'\" class=\"swiper-lazy\" onError=\"this.src='/assets/images/default_image.png';\" />\r\n                                <!--<div class=\" swiper-lazy-preloader\"></div>-->\r\n                            </mat-card>\r\n                        </div>\r\n                    </div>\r\n                    <button mat-icon-button class=\"swiper-button-prev swipe-arrow\">\r\n                    <mat-icon>keyboard_arrow_left</mat-icon>\r\n                </button>\r\n                    <button mat-icon-button class=\"swiper-button-next swipe-arrow\">\r\n                    <mat-icon>keyboard_arrow_right</mat-icon>\r\n                </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-md=\"45\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <div #zoomViewer fxShow=\"false\" fxShow.gt-md *ngIf=\"zoomImage\">\r\n                <mat-card *ngIf=\"zoomImage\" class=\"zoom-viewer mat-elevation-z18\" [ngStyle]=\"{'background-image': 'url(' + zoomImage + ')'}\">\r\n                </mat-card>\r\n            </div>\r\n\r\n            <h2>{{(productDetail.productDetails$ | async)?.name}}</h2>\r\n            <div class=\"py-1 lh\">\r\n                <p><span class=\"text-muted fw-500\">Category: </span><span *ngIf=\"(productDetail.productDetails$ | async)?.Category[0]\">{{(productDetail.productDetails$ | async)?.Category[0].categoryName}}</span>\r\n                </p>\r\n                <p><span class=\"text-muted fw-500\">Availibility: </span><span>Available</span></p>\r\n                <p *ngIf=\"(productDetail.productDetails$ | async)as detail\">\r\n                    <ng-template #t let-fill=\"fill\">\r\n                        <span class=\"star\" [class.full]=\"fill === 100\">\r\n                          <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n                        </span>\r\n                    </ng-template>\r\n                </p>\r\n            </div>\r\n            <div class=\"py-1\">\r\n            </div>\r\n            <div class=\"divider mt-1\"></div>\r\n            <h2 class=\"py-2 new-price\">$ {{(productDetail.productDetails$ | async)?.price}}</h2>\r\n            <div class=\"py-1\">\r\n                <app-controls-product-detail [product]=\"productDetail.productDetails$ | async\" [type]=\"'detail'\"></app-controls-product-detail>\r\n            </div>\r\n\r\n            <div class=\"divider\"></div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted py-1\">\r\n            </div>\r\n\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-md=\"20\" fxHide fxShow.gt-md>\r\n            <div fxLayout=\"row wrap\" class=\"info-bar product-right\" ngClass.gt-md=\"m-0\">\r\n                <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"mat-icon-xlg text-muted m-0\">card_giftcard</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p>BONUS PLUS</p>\r\n                            <span class=\"text-muted m-0\">Make fun of shopping and collect bonuses</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"mat-icon-xlg text-muted m-0\">local_shipping</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p>FREE SHIPPING</p>\r\n                            <span class=\"text-muted m-0\">Free shipping on all orders over ₹99</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"mat-icon-xlg text-muted m-0\">monetization_on</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p>MONEY BACK GUARANTEE</p>\r\n                            <span class=\"text-muted m-0\">30 Days money return guarantee</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.md=\"25\" fxFlex.sm=\"50\" class=\"mt-16\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"mat-icon-xlg text-muted m-0\">history</mat-icon>\r\n                        <div class=\"content\">\r\n                            <p>ONLINE SUPPORT 24/7</p>\r\n                            <span class=\"text-muted m-0\">Call Us: {{(productDetail.settingDetail$ | async)?.storeTelephone}}</span>\r\n                        </div>\r\n                    </mat-card>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"row wrap\" class=\"mt-2\">\r\n        <div fxFlex=\"100\" fxFlex.gt-md=\"78\" fxFlex.md=\"74\">\r\n            <mat-card>\r\n                <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">\r\n                    <mat-tab label=\"Description\">\r\n                        <div class=\"full-desc lh\">\r\n                            <p [innerHtml]='(productDetail.productDetails$ | async)?.description'></p>\r\n                        </div>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n\r\n            </mat-card>\r\n\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-md=\"22\" fxFlex.md=\"26\" ngClass.gt-sm=\"pl-3\" fxHide fxShow.gt-sm>\r\n            <div class=\"big-carousel\">\r\n                <div class=\"swiper-container\" [swiper]=\"config\">\r\n                    <div class=\"swiper-wrapper\">\r\n                        <div *ngFor=\"let slide of productDetail.bannerList$ | async\" class=\"swiper-slide\">\r\n                            <img [routerLink]=\"['/products']\" [src]=\"imagePath+ '?path=' + slide.imagePath + '&name=' + slide.image + '&width=560&height=560'\" class=\"swiper-lazy\" onError=\"this.src='/assets/images/default_image.png';\" class=\"mw-100 d-block mt-3 bannercursor\">\r\n                        </div>\r\n                        <!--<img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%202\" alt=\"\"-->\r\n                        <!--class=\"mw-100 d-block mt-3\">-->\r\n                        <!--<img src=\"https://via.placeholder.com/400x310/EEEEEE/9E9E9E/?text=Banner%203\" alt=\"\"-->\r\n                        <!--class=\"mw-100 d-block mt-3\">-->\r\n                    </div>\r\n                    <button mat-icon-button class=\"swiper-button-prev swipe-arrow\">\r\n                            <mat-icon>keyboard_arrow_up</mat-icon>\r\n                        </button>\r\n                    <button mat-icon-button class=\"swiper-button-next swipe-arrow\">\r\n                            <mat-icon>keyboard_arrow_down</mat-icon>\r\n                        </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/default/pages/products/product/product.component.scss":
/*!*******************************************************************!*\
  !*** ./src/default/pages/products/product/product.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del {\n  color: grey; }\n\n.mediaIcons {\n  max-height: 65px; }\n\n.shareAlign {\n  margin-left: 60%; }\n\n::ng-deep.app.green .mat-checkbox-checkmark-path {\n  stroke: green !important; }\n\n.bannercursor {\n  cursor: pointer; }\n\n.mat-card.product-image {\n  padding: 6px;\n  text-align: center; }\n\n.mat-card.product-image button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99; }\n\n.mat-card.product-image img {\n    max-width: 100%; }\n\n.supvalidation {\n  color: red; }\n\n.small-carousel {\n  margin-top: 8px; }\n\n.small-carousel .swiper-container {\n    padding: 2px; }\n\n.small-carousel .swiper-container .swiper-slide {\n      text-align: center; }\n\n.small-carousel .swiper-container .swiper-slide img {\n        cursor: pointer;\n        max-width: 100%;\n        height: 6vh; }\n\n.small-carousel .swiper-button-next.swiper-button-disabled,\n  .small-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.small-carousel .swiper-button-prev {\n    left: -10px; }\n\n.small-carousel .swiper-button-next {\n    right: -10px; }\n\n.mat-card.zoom-viewer {\n  position: absolute;\n  display: none;\n  background-repeat: no-repeat;\n  padding: 8px;\n  z-index: 99; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.details button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 6px; }\n\n.mat-list.reviews .mat-list-item .mat-list-avatar.review-author {\n  width: 80px;\n  height: 80px; }\n\n.mat-list.reviews .mat-list-item .mat-line.text {\n  white-space: unset;\n  font-style: italic;\n  margin: 10px 0; }\n\n.full-desc {\n  padding: 30px 40px; }\n\n@media (min-width: 1280px) {\n  .mat-card.product-image img {\n    cursor: zoom-in;\n    cursor: url('zoom.svg') 10 10, zoom-in; } }\n\n.card-hover {\n  transition: all .25s ease; }\n\n.card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n.fix-image {\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.spinner-wrapper {\n  text-align: center; }\n\n.no-review {\n  text-align: center; }\n\n.big-carousel {\n  margin-top: 8px;\n  height: 300px; }\n\n.big-carousel .swiper-container {\n    padding: 2px;\n    height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper {\n      height: 300px; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide {\n        height: 300px;\n        text-align: center; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide img {\n          cursor: pointer; }\n\n.big-carousel .swiper-container .swiper-wrapper .swiper-slide .changeColor {\n          box-shadow: 1px -1px 0px 3px #0000FF; }\n\n.big-carousel .swiper-button-next.swiper-button-disabled,\n  .big-carousel .swiper-button-prev.swiper-button-disabled {\n    opacity: 0; }\n\n.big-carousel .swiper-button-prev {\n    left: -10px; }\n\n.big-carousel .swiper-button-next {\n    right: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAyL21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLHlCQUF3QixFQUMzQjs7QUFRRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQVVyQjs7QUFaRDtJQUlRLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sU0FBUTtJQUNSLFlBQVcsRUFDZDs7QUFSTDtJQVVRLGdCQUFlLEVBQ2xCOztBQUdMO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0ksZ0JBQWUsRUEwQmxCOztBQTNCRDtJQUdRLGFBQVksRUFhZjs7QUFoQkw7TUFLWSxtQkFBa0IsRUFVckI7O0FBZlQ7UUFPZ0IsZ0JBQWU7UUFDZixnQkFBZTtRQUNmLFlBQVcsRUFDZDs7QUFWYjs7SUFtQlEsV0FBVSxFQUNiOztBQXBCTDtJQXNCUSxZQUFXLEVBQ2Q7O0FBdkJMO0lBeUJRLGFBQVksRUFDZjs7QUFHTDtFQUNJLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsNkJBQTRCO0VBQzVCLGFBQVk7RUFDWixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFFUSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUpMO0VBTVEsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2pCOztBQUdMO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0k7SUFDSSxnQkFBZTtJQUNmLHVDQUF1RSxFQUMxRSxFQUFBOztBQUdMO0VBSUksMEJBQXlCLEVBVTVCOztBQWREO0lBVVEsd0NBQXVDO0lBRXZDLCtDQUE2QyxFQUNoRDs7QUFHTDtFQUNJLHFCQUFpQjtLQUFqQixrQkFBaUIsRUFHcEI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGNBQWEsRUErQmhCOztBQWpDRDtJQUlRLGFBQVk7SUFDWixjQUFhLEVBaUJoQjs7QUF0Qkw7TUFPWSxjQUFhLEVBY2hCOztBQXJCVDtRQVNnQixjQUFhO1FBQ2IsbUJBQWtCLEVBVXJCOztBQXBCYjtVQVlvQixnQkFBZSxFQUdsQjs7QUFmakI7VUFpQm9CLHFDQUFvQyxFQUV2Qzs7QUFuQmpCOztJQXlCUSxXQUFVLEVBQ2I7O0FBMUJMO0lBNEJRLFlBQVcsRUFDZDs7QUE3Qkw7SUErQlEsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWwge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5tZWRpYUljb25zIHtcclxuICAgIG1heC1oZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi5zaGFyZUFsaWduIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5hcHAuZ3JlZW4gLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XHJcbiAgICBzdHJva2U6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5hcHAuZ3JlZW4gLm1hdC1tZW51LXBhbmVsIHtcclxuICAgIC8vbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIC8vbWluLXdpZHRoOiA5MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvL21heC13aWR0aDogMjQ2cHg7XHJcbn1cclxuXHJcbi5iYW5uZXJjdXJzb3Ige1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmQucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnN1cHZhbGlkYXRpb24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNtYWxsLWNhcm91c2VsIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNnZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jaGFuZ2VDb2xvciB7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAxcHggLTFweCAwcHggM3B4ICMwMDAwRkY7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA1cHggN3B4IDhweCAjMDAwMEZGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC56b29tLXZpZXdlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4ubXQtMTYge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmRldGFpbHMgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QucmV2aWV3cyB7XHJcbiAgICAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtYXZhdGFyLnJldmlldy1hdXRob3Ige1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZS50ZXh0IHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZnVsbC1kZXNjIHtcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgLm1hdC1jYXJkLnByb2R1Y3QtaW1hZ2UgaW1nIHtcclxuICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgY3Vyc29yOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb3RoZXJzL3pvb20uc3ZnJykgMTAgMTAsIHpvb20taW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2MiwgNTcsIDEwNywgLjEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsIDU3LCAxMDcsIC4xKTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpeC1pbWFnZSB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIC8vd2lkdGg6IDQ0MnB4O1xyXG4gICAgLy9oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uc3Bpbm5lci13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5vLXJldmlldyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iaWctY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAuc3dpcGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAuc3dpcGVyLXNsaWRlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoYW5nZUNvbG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggLTFweCAwcHggM3B4ICMwMDAwRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogNXB4IDdweCA4cHggIzAwMDBGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/default/pages/products/product/product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/default/pages/products/product/product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-zoom/product-zoom.component */ "./src/default/pages/products/product/product-zoom/product-zoom.component.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductComponent = /** @class */ (function () {
    function ProductComponent(activatedRoute, formBuilder, dialog, productDetail, configService, changeDetectRef, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.productDetail = productDetail;
        this.configService = configService;
        this.changeDetectRef = changeDetectRef;
        this.router = router;
        // configuration
        this.config = {};
        this.configuration = {};
        // subcription
        this.subscriptions = [];
        this.isActive = [];
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.router.navigated = true;
                window.scrollTo(0, 0);
            }
        });
    }
    /** Initially initialize getProductdetail,getRelatedProducts when subscribed
     * subscribe productDetails$ and set initially default values for required options **/
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePath = this.configService.getImageUrl();
        // subscribe route params and trigger selected product detail, related products
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getProductdetail();
            _this.getBannerList();
        });
    };
    // fetch banner list from sandbox
    ProductComponent.prototype.getBannerList = function () {
        var params = {};
        params.limit = 100;
        params.offset = 0;
        this.productDetail.getBannerList(params);
    };
    /**
     * calls productDetail getProductDetails with param.Then subscribe productDetail productDetails$
     *
     * Then store the image path  and image name in the array.
     * **/
    ProductComponent.prototype.getProductdetail = function () {
        var _this = this;
        var params = {};
        params.id = this.id;
        this.productDetail.getProductDetails(params);
        this.subscriptions.push(this.productDetail.productDetails$.subscribe(function (detail) {
            if (detail && detail.productImage.length > 0) {
                var imageLength = detail.productImage.length;
                _this.isActive = [];
                _this.isActive[detail.productImage[0].productId] = true;
                for (var i = 0; i < imageLength; i++) {
                    if (detail.productImage[i].defaultImage === 1) {
                        _this.productImageId = detail.productImage[0].productId;
                        _this.image =
                            _this.imagePath + '?path=' +
                                detail.productImage[i].containerName + '&name=' +
                                detail.productImage[i].image +
                                '&width=390&height=390';
                        _this.zoomImage =
                            _this.imagePath + '?path=' +
                                detail.productImage[i].containerName + '&name=' +
                                detail.productImage[i].image +
                                '&width=660&height=660';
                        _this.changeDetectRef.detectChanges();
                        setTimeout(function () {
                            _this.config.observer = true;
                            _this.changeDetectRef.detectChanges();
                        });
                    }
                }
            }
        }));
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
        this.config = {
            observer: false,
            direction: 'vertical',
            autoHeight: true,
            autoplay: true,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            grabCursor: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            watchSlidesVisibility: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3
                }
            }
        };
        this.configuration = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            grabCursor: true,
            pagination: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: false,
            watchSlidesVisibility: true,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3
                }
            }
        };
    };
    // view the selected image
    ProductComponent.prototype.selectImage = function (image, i) {
        this.productImageId = image.productId;
        this.isActive = [];
        this.isActive[image.productId] = true;
        this.image =
            this.imagePath + '?path=' +
                image.containerName + '&name=' +
                image.image +
                '&width=390&height=390';
        this.changeDetectRef.detectChanges();
        this.zoomImage =
            this.imagePath + '?path=' +
                image.containerName + '&name=' +
                image.image +
                '&width=660&height=660';
    };
    // zoom the image when mouse got moved over the image
    ProductComponent.prototype.onMouseMove = function (e) {
        if (window.innerWidth >= 1280) {
            var image = void 0, offsetX = void 0, offsetY = void 0, x = void 0, y = void 0, zoomer = void 0;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = (offsetX / image.offsetWidth) * 100;
            y = (offsetY / image.offsetHeight) * 100;
            if (this.zoomImage) {
                zoomer = this.zoomViewer.nativeElement.children[0];
            }
            if (zoomer) {
                zoomer.style.backgroundPosition = x + '% ' + y + '%';
                zoomer.style.display = 'block';
                zoomer.style.height = image.height + 'px';
                zoomer.style.width = image.width + 'px';
            }
        }
    };
    // event when mouse clicked to zoom the image
    ProductComponent.prototype.onMouseLeave = function (event) {
        this.zoomViewer.nativeElement.children[0].style.display = 'none';
    };
    // open pop to view the zoom image
    ProductComponent.prototype.openZoomViewer = function () {
        this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_4__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
        });
    };
    // unsubscribe subscribed events while destroy the page
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.subscriptions.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zoomViewer'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "zoomViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"]),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"])
    ], ProductComponent.prototype, "directiveRef", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/default/pages/products/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/default/pages/products/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_5__["ListsSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/products.component.html":
/*!************************************************************!*\
  !*** ./src/default/pages/products/products.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(listSandbox.childBannerList$ | async)?.length > 0\">\r\n    <app-main-submenu-carousel [categoryId]=\"categoryId\"></app-main-submenu-carousel>\r\n</div>\r\n<mat-sidenav-container>\r\n    <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"filter-sidenav\"\r\n        perfectScrollbar>\r\n        <app-spurt-product-filter (progressEmit)=\"receiveProgress($event)\" [isClickedData]=\"isClicked\" [brandId]=\"brand\"\r\n            [category]=\"categoryId\">\r\n        </app-spurt-product-filter>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\r\n            class=\"filter-row mat-elevation-z1 text-muted\">\r\n            <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <div>\r\n                <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n                    {{sortData}}\r\n                    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n                </a>\r\n\r\n                <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" class=\"app-dropdown\" overlapTrigger=\"true\">\r\n                    <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                        <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                            <span>{{sort.order}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n            </div>\r\n            <div>\r\n                <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                    <mat-icon>view_list</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 33.3)\">\r\n                    <mat-icon>view_module</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n                    <mat-icon>view_comfy</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"wrapper\" *ngIf=\"listSandbox.productLoading$ | async\">\r\n            <div class=\"overlay\">\r\n                <div class=\"spinner-wrapper\">\r\n                    <app-spinner [isShow]=\"listSandbox.productLoading$ | async\"></app-spinner>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"viewType == 'grid'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n\r\n            <div *ngFor=\"let product of (listSandbox.productlist$ | async)\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\"\r\n                fxFlex.sm=\"50\" class=\"col\">\r\n                <mat-card class=\"product-item text-center card-hover\">\r\n                    <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\r\n                        <img *ngIf=\"product['Images'].defaultImage == 1\" style=\"height:200px\"\r\n                            [src]=\"imagePath+ '?path=' + product['Images'].containerName + '&name=' + product['Images'].image + '&width=260&height=260'\"\r\n                            onError=\"this.src='/assets/images/default_image.png';\">\r\n                    </a>\r\n                    <!-- <h4 class=\"category text-muted text-truncate \">{{product.metaTagTitle }}</h4> -->\r\n                    <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"title text-truncate\">\r\n                        {{product.name}}\r\n                    </a>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <p class=\"new-price\">\r\n                                $ {{product.price}}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"divider mt-2\"></div>\r\n                    <div class=\"icons\">\r\n                        <app-controls [product]=\"product\" [type]=\"'all'\"\r\n                            (OpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"viewType == 'list'\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n            <div *ngFor=\"let product of (listSandbox.productlist$ | async) | paginate: { itemsPerPage: count, currentPage: page }\"\r\n                fxFlex=\"100\" class=\"col\">\r\n                <mat-card class=\"product-item\" style=\"height:90%\">\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"p-2\">\r\n                            <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"image-link\">\r\n                                <img *ngIf=\"product.Images\"\r\n                                    [src]=\"imagePath + '?path=' + product.Images.containerName + '&name=' + product.Images.image + '&width=280&height=280'\"\r\n                                    onError=\"this.src='/assets/images/default_image.png';\">\r\n                            </a>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"p-2\">\r\n                            <h4 class=\"category text-muted\"></h4>\r\n                            <a [routerLink]=\"['/products/productdetails', product.productId]\" class=\"title\">\r\n                                {{product.name}}\r\n                            </a>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"prices\">\r\n                                <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                                    <p class=\"new-price\">\r\n                                        $ {{product.price}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"divider\"></div>\r\n                            <div class=\"icons\">\r\n                                <app-controls [product]=\"product\" [type]=\"'all'\"\r\n                                    (OpenProductDialog)=\"openProductDialog(product)\"></app-controls>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n        <app-product-not-found [keyword]=\"keyword\" *ngIf=\"(listSandbox.productLoaded$ | async) && (listSandbox.productlist$ | async)?.length == 0\"></app-product-not-found>\r\n        <!-- <div *ngIf=\"(listSandbox.productLoaded$ | async) && (listSandbox.productlist$ | async)?.length == 0\"\r\n            fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"90\" class=\"p-2\">\r\n                <img style=\"margin-left: 45%;\" src=\"../../../assets/images/default-image.jpg\" alt=\"not found\" height=\"150\" width=\"150\">\r\n                <p style=\"margin-left: 50%;margin-top:1%;color:rgb(17, 15, 15); font-weight: 900; font-size: 20px;\">No Found</p>\r\n                <p style=\"margin-left: 30%;margin-top:1%;color:gray\">Sorry, the keyword you entered cannot be found, please check again or search with anotherkeyword </p>\r\n            </div>\r\n        </div> -->\r\n        <div *ngIf=\"(listSandbox.productlist$ | async)?.length > 0\" fxLayout=\"row wrap\">\r\n            <div fxFlex=\"100\">\r\n                <mat-card class=\"p-0 text-center\">\r\n                    <mat-paginator [length]=\"listSandbox.productcount$|async\" [pageSize]=\"pagesize\" [pageIndex]=\"index\"\r\n                        [pageSizeOptions]=\"[10,15,20]\" (page)=\"onPageChange($event)\">\r\n                    </mat-paginator>\r\n                    <!--<pagination-controls class=\"product-pagination\" autoHide=\"false\" maxSize=\"5\"-->\r\n                    <!--(pageChange)=\"onPageChanged($event)\"></pagination-controls>-->\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n<div class=\"products-tabs featured-tabs\">\r\n    <!-- <mat-tab-group mat-stretch-tabs>\r\n        <mat-tab label=\"Most Popular and Trending\"> -->\r\n            <app-trending-product></app-trending-product>\r\n        <!-- </mat-tab>\r\n    </mat-tab-group> -->\r\n</div>"

/***/ }),

/***/ "./src/default/pages/products/products.component.scss":
/*!************************************************************!*\
  !*** ./src/default/pages/products/products.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-sidenav {\n  width: 280px;\n  border: 0 !important; }\n  .filter-sidenav .mat-expansion-panel-header-title {\n    text-transform: uppercase; }\n  .del {\n  color: grey; }\n  .filter-row {\n  background: #fff;\n  padding: 8px 12px; }\n  .all-products {\n  min-height: 400px;\n  padding: 2px;\n  overflow: hidden; }\n  .all-products.p-left {\n    padding-left: 16px; }\n  .products-wrapper {\n  margin: 8px -8px; }\n  .products-wrapper .col {\n    padding: 8px; }\n  .categories-wrapper {\n  position: relative;\n  max-height: 300px; }\n  .filter-buttons button {\n  min-width: 36px;\n  margin: 0 6px 10px 0;\n  padding: 0; }\n  .filter-price .mat-slider-horizontal {\n  min-width: 110px; }\n  .filter-brands button {\n  width: 66px;\n  height: 44px;\n  min-width: 66px;\n  margin: 0 6px 10px 0;\n  padding: 0px;\n  overflow: hidden; }\n  .filter-brands button img {\n    width: 66px;\n    height: 44px; }\n  .wrapper {\n  width: 100%;\n  height: 100%; }\n  .overlay {\n  position: absolute;\n  z-index: 1002;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%; }\n  .spinner-wrapper {\n  display: flex;\n  justify-content: center;\n  justify-items: center; }\n  .card-hover {\n  transition: all .25s ease; }\n  .card-hover:hover {\n    transform: translateY(-4px) scale(1.05);\n    box-shadow: 0 14px 24px rgba(62, 57, 107, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdGVzdDAyL21hcmtldHBsYWNlL3N0b3JlL3NyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLHFCQUFvQixFQUl2QjtFQU5EO0lBSVEsMEJBQXlCLEVBQzVCO0VBRUw7RUFDSSxZQUFXLEVBQ2Q7RUFDRDtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7RUFDRDtFQUNJLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osaUJBQWdCLEVBSW5CO0VBUEQ7SUFLUSxtQkFBa0IsRUFDckI7RUFHTDtFQUVJLGlCQUFnQixFQU1uQjtFQVJEO0lBTVEsYUFBWSxFQUNmO0VBR0w7RUFDSSxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ3BCO0VBRUQ7RUFFUSxnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixXQUFVLEVBQ2I7RUFHTDtFQUVRLGlCQUFnQixFQUNuQjtFQUdMO0VBRVEsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixhQUFZO0VBQ1osaUJBQWdCLEVBS25CO0VBWkw7SUFTWSxZQUFXO0lBQ1gsYUFBWSxFQUNmO0VBR1Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmO0VBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLDJDQUEwQztFQUMxQyxZQUFXO0VBQ1gsYUFBWSxFQUNmO0VBRUQ7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLHNCQUFxQixFQUN4QjtFQUVEO0VBSUksMEJBQXlCLEVBVXhCO0VBZEw7SUFVSSx3Q0FBdUM7SUFFdkMsK0NBQTBDLEVBQ3pDIiwiZmlsZSI6InNyYy9kZWZhdWx0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn1cclxuLmRlbHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcbi5maWx0ZXItcm93e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcbi5hbGwtcHJvZHVjdHN7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLnAtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0cy13cmFwcGVye1xyXG4gICBcclxuICAgIG1hcmdpbjogOHB4IC04cHg7XHJcbiAgICAuY29seyBcclxuICAgICAgICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmZpbHRlci1idXR0b25ze1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgNnB4IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyLXByaWNle1xyXG4gICAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbHtcclxuICAgICAgICBtaW4td2lkdGg6IDExMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyLWJyYW5kc3tcclxuICAgIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2NnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA2cHggMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNwaW5uZXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjAxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsNTcsMTA3LC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyNHB4IHJnYmEoNjIsNTcsMTA3LC4xKTtcclxuICAgIH1cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/default/pages/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/default/pages/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/products-carousel/product-dialog/product-dialog.component */ "./src/default/shared/components/products-carousel/product-dialog/product-dialog.component.ts");
/* harmony import */ var _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/lists/lists.sandbox */ "./src/core/lists/lists.sandbox.ts");
/* harmony import */ var _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/service/config.service */ "./src/core/service/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(activatedRoute, dialog, snackBar, router, listSandbox, configService, changeDetectRef, platformId) {
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
        this.viewCol = 14;
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
        this.pagesize = 12;
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
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(_this.platformId)) {
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
            _this.getChildBannerList();
        }));
    }
    // initially remove local storage and calls listSandbox getSettings
    ProductsComponent.prototype.ngOnInit = function () {
        this.getChildBannerList();
        if (!this.queryParams.id && this.keyword === '') {
            this.getProductList(this.startKey, this.viewOrder, this.categoryId);
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
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
    // fetch chield banner list from sandbox
    ProductsComponent.prototype.getChildBannerList = function () {
        var params = {};
        params.limit = 4;
        params.offset = 0;
        params.child = this.categoryId;
        this.listSandbox.getChildBannerList(params);
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
    ProductsComponent.prototype.getProductList = function (offset, price, category) {
        var params = {};
        params.limit = this.pagesize;
        params.offset = offset;
        if (this.brand == null) {
            this.brand = '';
        }
        params.manufacturerId = this.brand;
        params.categoryId = this.categoryId;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
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
    ProductsComponent.prototype.openProductDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_components_products_carousel_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductDialogComponent"], {
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
    ProductsComponent.prototype.onWindowResize = function () {
        window.innerWidth < 960
            ? (this.sidenavOpen = false)
            : (this.sidenavOpen = true);
        window.innerWidth < 1280 ? (this.viewCol = 33.3) : (this.viewCol = 14);
    };
    // changing the view type
    ProductsComponent.prototype.changeViewType = function (viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
    };
    // calls getProductList for sorting list
    ProductsComponent.prototype.changeSorting = function (sort) {
        this.sortData = sort.order;
        this.viewOrder = sort.value;
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    // calls getProductList for pagination
    ProductsComponent.prototype.onPageChange = function (event) {
        this.startKey = event.pageSize * event.pageIndex;
        this.pagesize = event.pageSize;
        this.index = event.pageIndex;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            this.priceFrom = localStorage.getItem('fromPrice');
            this.priceTo = localStorage.getItem('priceTo');
        }
        if (this.priceTo == null) {
            this.priceTo = '';
        }
        this.getProductList(this.startKey, this.viewOrder, this.categoryId);
    };
    /**
     *  receive data which is emitted from the child component through event emitter,
     * set's local storage value(brandKey). And calls getProductList.
     *
     *  @param event from event  emitter.
     *
     *  **/
    ProductsComponent.prototype.receiveProgress = function (event) {
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
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.forEach(function (each) {
            each.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductsComponent.prototype, "onWindowResize", null);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/default/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/default/pages/products/products.component.scss")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_lists_lists_sandbox__WEBPACK_IMPORTED_MODULE_4__["ListsSandbox"],
            _core_service_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            Object])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/default/pages/products/products.module.ts":
/*!*******************************************************!*\
  !*** ./src/default/pages/products/products.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/default/shared/shared.module.ts");
/* harmony import */ var _shared_components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/index */ "./src/default/shared/components/index.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.component */ "./src/default/pages/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/default/pages/products/product/product.component.ts");
/* harmony import */ var _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-zoom/product-zoom.component */ "./src/default/pages/products/product/product-zoom/product-zoom.component.ts");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ "./src/default/shared/pipes/pipes.module.ts");
/* harmony import */ var _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-filter/product-filter.component */ "./src/default/pages/products/product-filter/product-filter.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jw-angular-social-buttons */ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm5/ngx-share-button.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookSquare */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookSquare.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_19__);
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
// module








// component












var routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
        pathMatch: 'full',
        data: {
            urls: [{ title: 'All Products' }]
        }
    },
    {
        path: 'products',
        component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
        pathMatch: 'full',
        data: {
            urls: [{ title: 'All Products' }]
        }
    },
    {
        path: 'productdetails/:id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
        pathMatch: 'full',
        data: {
            urls: [
                { title: 'Products', url: '/products' },
                { title: 'Product detail', url: '' }
            ]
        }
    }
];
var icons = [
    // ... other icons
    _fortawesome_free_brands_svg_icons_faFacebookSquare__WEBPACK_IMPORTED_MODULE_17__["faFacebookSquare"],
    _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_19__["faTwitter"]
];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add.apply(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"], icons);
var shareProp = {};
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _shared_components_index__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_14__["JwSocialButtonsModule"],
                _ngx_share_button__WEBPACK_IMPORTED_MODULE_15__["ShareButtonModule"].withConfig({ prop: shareProp }),
                // ShareButtonModule.forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientJsonpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"],
                _product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_12__["ProductFilterComponent"]
            ],
            entryComponents: [_product_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_10__["ProductZoomComponent"]],
            providers: []
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module.js.map