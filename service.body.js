(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("$$service.body", [], factory);
	else if(typeof exports === 'object')
		exports["$$service.body"] = factory();
	else
		root["$$service.body"] = factory();
})(this, function() {
return _w_e_b_p_a_c_k_([1],{

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sugar__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sugar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sugar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sugar_locales_ja__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sugar_locales_ja___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sugar_locales_ja__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(324);



__WEBPACK_IMPORTED_MODULE_0_sugar__["extend"]();
Date.setLocale('ja');
self.postMessage = function (msg) { console.info(msg); };
self.addEventListener('fetch', __WEBPACK_IMPORTED_MODULE_2__router__["a" /* Router */].fetch);
self.addEventListener('install', function (event) {
    // インストール完了後、ページリロードを待たずにservice workerをactivateする
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());
});
// ここで明示的にupdateしても、service.jsに割り当てられているmax-ageの期間はdisk cacheを参照してしまうらしい
self.registration.update();


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_App__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });





function parseRequestData(request) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
        var data, blob_1, query;
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = Object.fromQueryString((request.url.match(/\?(.*)$/) || [, ''])[1]);
                    if (!(request.method == 'POST')) return [3 /*break*/, 3];
                    return [4 /*yield*/, request.blob()];
                case 1:
                    blob_1 = _a.sent();
                    return [4 /*yield*/, (new Promise(function (res) {
                            var fileReader = new FileReader();
                            fileReader.addEventListener('loadend', function (e) {
                                var queryString = decodeURI(e.srcElement.result);
                                res(Object.fromQueryString(queryString, { deep: true }));
                            });
                            fileReader.readAsText(blob_1);
                        }))];
                case 2:
                    query = _a.sent();
                    data = __WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"]({}, data, query);
                    _a.label = 3;
                case 3: return [2 /*return*/, data];
            }
        });
    });
}
var Router;
(function (Router) {
    function fetch(event) {
        var _this = this;
        var scope = location.pathname.match(/(.*)\/[^/]*$/)[1];
        var path = (event.request.url.match(/\/\/[^\/]*\/([^?]*)/)[1] || '').substr(scope.length);
        var request = event.request;
        var queryString = (request.url.match(/\?(.*)$/) || [, ''])[1];
        if (!request.url.startsWith(location.origin + '/'))
            return;
        return event.respondWith(new Promise(function (resolve) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: [
                    { path: '/app', component: __WEBPACK_IMPORTED_MODULE_4__pages_App__["App"] }
                ], location: (path || 'app') + "?" + queryString }, function (error, redirectLocation, renderProps) { return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, function () {
                var response;
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!error) return [3 /*break*/, 1];
                            response = new Response(error.message, { status: 500, headers: { 'Content-Type': 'text/plain' } });
                            return [3 /*break*/, 5];
                        case 1:
                            if (!redirectLocation) return [3 /*break*/, 2];
                            response = Response.redirect(redirectLocation.pathname + redirectLocation.search, 302);
                            return [3 /*break*/, 5];
                        case 2:
                            if (!renderProps) return [3 /*break*/, 3];
                            response = new Response('<!DOCTYPE html>' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router__["RouterContext"], renderProps)), { headers: { 'Content-Type': 'text/html' } });
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, self.fetch(request.clone())];
                        case 4:
                            response = _a.sent();
                            _a.label = 5;
                        case 5:
                            resolve(response);
                            return [2 /*return*/];
                    }
                });
            }); });
        }));
    }
    Router.fetch = fetch;
})(Router || (Router = {}));


/***/ })

},[1040]);
});