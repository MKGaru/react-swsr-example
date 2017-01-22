(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("$$client", [], factory);
	else if(typeof exports === 'object')
		exports["$$client"] = factory();
	else
		root["$$client"] = factory();
})(this, function() {
return _w_e_b_p_a_c_k_([2],{

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_pages_App__ = __webpack_require__(95);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "React", function() { return __WEBPACK_IMPORTED_MODULE_0_react__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ReactDOM", function() { return __WEBPACK_IMPORTED_MODULE_1_react_dom__; });




__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__service_pages_App__["App"]), document);


/***/ })

},[1039]);
});