(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("$$pages", [], factory);
	else if(typeof exports === 'object')
		exports["$$pages"] = factory();
	else
		root["$$pages"] = factory();
})(this, function() {
return _w_e_b_p_a_c_k_([0],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindClassMethod;
function bindClassMethod(instance) {
    Object.keys(Object.getPrototypeOf(instance))
        .filter(function (key) { return [
        'getInitialState',
        'getDefaultProps',
        'componentWillMount',
        'omponentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'render'
    ].indexOf(key) == -1; })
        .filter(function (key) { return typeof instance[key] == 'function'; })
        .forEach(function (key) { return instance[key] = instance[key].bind(instance); });
}


/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191);
__webpack_require__(192);
module.exports = __webpack_require__(95);


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(1038);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });



var Counter = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            count: 0
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["a" /* bindClassMethod */])(_this);
        _this.state.count = props.start;
        return _this;
    }
    Counter.prototype.setState = function (state) {
        if (this.props.max !== void 0 && state.count > this.props.max)
            state.count = this.props.max;
        if (this.props.min !== void 0 && state.count < this.props.min)
            state.count = this.props.min;
        _super.prototype.setState.call(this, state);
    };
    Counter.prototype.increment = function () {
        this.setState({
            count: this.state.count + 1
        });
    };
    Counter.prototype.decrement = function () {
        this.setState({
            count: this.state.count - 1
        });
    };
    Counter.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { onClick: this.decrement }, "Count down..."),
            "\u00A0",
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", { onClick: this.increment }, "Count up!"),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h1", null,
                "Count: ",
                this.state.count)));
    };
    return Counter;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

Counter.defaultProps = {
    min: 0
};


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });

var Layout = function (_a) {
    var _b = _a.children, children = _b === void 0 ? void 0 : _b, title = _a.title;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("html", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("head", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { charSet: "utf8" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, title)),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("body", null,
            children,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "vendor.js" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "pages.js" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "client.js" })));
};


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Counter__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });



var App = function (_a) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_Layout__["Layout"], { title: "Title" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Hello"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_Counter__["Counter"], { start: 1, max: 10 }));
};


/***/ })

},[1041]);
});