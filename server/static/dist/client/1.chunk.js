webpackJsonp([1],{

/***/ "./src/app/core/modules/unauthorized-page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UnauthorizedPageModule\", function() { return UnauthorizedPageModule; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(\"./node_modules/@angular/core/@angular/core.es5.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(\"./node_modules/@angular/common/@angular/common.es5.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(\"./node_modules/@angular/router/@angular/router.es5.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(\"./node_modules/@angular/material/@angular/material.es5.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unauthorized_page_routing__ = __webpack_require__(\"./src/app/core/modules/unauthorized-page/unauthorized-page.routing.ts\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unauthorized_page_component__ = __webpack_require__(\"./src/app/core/modules/unauthorized-page/unauthorized-page.component.ts\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(\"./node_modules/@angular/flex-layout/index.js\");\n\n\n\n\n\n\n\nvar UnauthorizedPageModule = (function () {\n    function UnauthorizedPageModule() {\n    }\n    return UnauthorizedPageModule;\n}());\nUnauthorizedPageModule = __decorate([\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"NgModule\"])({\n        imports: [\n            __WEBPACK_IMPORTED_MODULE_1__angular_common__[\"e\" /* CommonModule */],\n            __WEBPACK_IMPORTED_MODULE_2__angular_router__[\"a\" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__unauthorized_page_routing__[\"a\" /* routes */]),\n            __WEBPACK_IMPORTED_MODULE_3__angular_material__[\"a\" /* MaterialModule */],\n            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__[\"FlexLayoutModule\"]\n        ],\n        declarations: [\n            __WEBPACK_IMPORTED_MODULE_5__unauthorized_page_component__[\"a\" /* UnauthorizedPageComponent */]\n        ],\n        providers: []\n    })\n], UnauthorizedPageModule);\n\n//# sourceMappingURL=index.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/core/modules/unauthorized-page/index.ts\n// module id = ./src/app/core/modules/unauthorized-page/index.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/core/modules/unauthorized-page/index.ts?");

/***/ }),

/***/ "./src/app/core/modules/unauthorized-page/unauthorized-page.component.pug":
/***/ (function(module, exports) {

eval("module.exports = \"<md-card id=\\\"my-page-card\\\"><div fxLayout=\\\"column\\\" fxFlexFill><div fxFlex=\\\"30vh\\\"></div><div fxFlex=\\\"60\\\"><div fxLayout=\\\"row\\\" fxLayoutAlign=\\\"center center\\\"><h1>You must be signed in to access the page</h1></div></div><div fxFlex></div></div></md-card>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/core/modules/unauthorized-page/unauthorized-page.component.pug\n// module id = ./src/app/core/modules/unauthorized-page/unauthorized-page.component.pug\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/core/modules/unauthorized-page/unauthorized-page.component.pug?");

/***/ }),

/***/ "./src/app/core/modules/unauthorized-page/unauthorized-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return UnauthorizedPageComponent; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(\"./node_modules/@angular/core/@angular/core.es5.js\");\n\nvar UnauthorizedPageComponent = (function () {\n    function UnauthorizedPageComponent() {\n    }\n    return UnauthorizedPageComponent;\n}());\nUnauthorizedPageComponent = __decorate([\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"Component\"])({\n        selector: 'unauthorized-page',\n        template: __webpack_require__(\"./src/app/core/modules/unauthorized-page/unauthorized-page.component.pug\")\n    })\n], UnauthorizedPageComponent);\n\n//# sourceMappingURL=unauthorized-page.component.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/core/modules/unauthorized-page/unauthorized-page.component.ts\n// module id = ./src/app/core/modules/unauthorized-page/unauthorized-page.component.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/core/modules/unauthorized-page/unauthorized-page.component.ts?");

/***/ }),

/***/ "./src/app/core/modules/unauthorized-page/unauthorized-page.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return routes; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unauthorized_page_component__ = __webpack_require__(\"./src/app/core/modules/unauthorized-page/unauthorized-page.component.ts\");\n\nvar routes = [\n    {\n        path: '',\n        component: __WEBPACK_IMPORTED_MODULE_0__unauthorized_page_component__[\"a\" /* UnauthorizedPageComponent */]\n    }\n];\n//# sourceMappingURL=unauthorized-page.routing.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/core/modules/unauthorized-page/unauthorized-page.routing.ts\n// module id = ./src/app/core/modules/unauthorized-page/unauthorized-page.routing.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./src/app/core/modules/unauthorized-page/unauthorized-page.routing.ts?");

/***/ })

});