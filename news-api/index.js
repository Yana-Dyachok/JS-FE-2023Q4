/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.news__item {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    margin-bottom: 1.6%;
    background: #fff;
    color: #333;
    line-height: 1.4;
    font-family: Arial, sans-serif;
    border-radius: 5px;
    overflow: hidden;
}

.news__item:hover .news__meta-photo {
    transform: scale(1.3) rotate(3deg);
}

.news__item .news__meta {
    position: relative;
    height: 200px;
}

.news__item .news__meta-photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
}

.news__item .news__meta-details,
.news__item .news__meta-details ul {
    margin: auto;
    padding: 0;
    list-style: none;
}

.news__item .news__meta-details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -120%;
    margin: auto;
    transition: left 0.2s;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    width: 100%;
    font-size: 0.9rem;
}

.news__item .news__description {
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;
}

.news__item .news__description h2 {
    line-height: 1;
    margin: 0;
    font-size: 1.7rem;
}

.news__item .news__description h3 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #a2a2a2;
    margin-top: 5px;
}

.news__item .news__description .news__read-more {
    text-align: right;
}

.news__item .news__description .news__read-more a {
    color: #fc47ba;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-weight: 800;
}

.news__item .news__description .news__read-more a:after {
    content: '→';
    margin-left: -10px;
    opacity: 0;
    vertical-align: middle;
    transition: margin 0.3s, opacity 0.3s;
}

.news__item .news__description .news__read-more a:hover:after {
    margin-left: 5px;
    opacity: 1;
}

.news__item p {
    margin: 1rem 0 0;
}

.news__item p:first-of-type {
    margin-top: 1.25rem;
    position: relative;
}

.news__item p:first-of-type:before {
    content: '';
    position: absolute;
    height: 5px;
    background: #fc47ba;
    width: 35px;
    top: -0.75rem;
    border-radius: 3px;
}

.news__item:hover .news__meta-details {
    left: 0%;
}

@media (min-width: 640px) {
    .news__item {
        flex-direction: row;
        max-width: 700px;
    }

    .news__item .news__meta {
        flex-basis: 40%;
        height: auto;
    }

    .news__item .news__description {
        flex-basis: 60%;
    }

    .news__item .news__description:before {
        -webkit-transform: skewX(-3deg);
        transform: skewX(-3deg);
        content: '';
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
    }

    .news__item.alt {
        flex-direction: row-reverse;
    }

    .news__item.alt .news__description:before {
        left: inherit;
        right: -10px;
        -webkit-transform: skew(3deg);
        transform: skew(3deg);
    }

    .news__item.alt .news__meta-details {
        padding-left: 25px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/components/view/news/news.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI;QACI,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,+BAA+B;QAC/B,uBAAuB;QACvB,WAAW;QACX,gBAAgB;QAChB,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,MAAM;QACN,SAAS;QACT,WAAW;IACf;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,aAAa;QACb,YAAY;QACZ,6BAA6B;QAC7B,qBAAqB;IACzB;;IAEA;QACI,kBAAkB;IACtB;AACJ","sourcesContent":[".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #fc47ba;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #fc47ba;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sources {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    overflow: auto;
    font: 300 1em 'Fira Sans', sans-serif;
}

.source__item {
    background: none;
    border: 2px solid #fc47ba;
    border-radius: 10px;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    color: #fc47ba;
    transition: 0.25s;
    cursor: pointer;
}

.source__item:hover,
.source__item:focus {
    border-color: #48ebeb;
    color: aqua;
    filter: drop-shadow(0.3rem 0.3rem 1.3rem white);
    box-shadow: 0 0.5em 0.5em -0.4em aqua;
    transform: scale(1.05);
}

.source__item-name {
    font-weight: 400;
    white-space: wrap;
}
`, "",{"version":3,"sources":["webpack://./src/components/view/sources/sources.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,cAAc;IACd,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,WAAW;IACX,+CAA+C;IAC/C,qCAAqC;IACrC,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB","sourcesContent":[".sources {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 200px;\n    overflow: auto;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #fc47ba;\n    border-radius: 10px;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #fc47ba;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #48ebeb;\n    color: aqua;\n    filter: drop-shadow(0.3rem 0.3rem 1.3rem white);\n    box-shadow: 0 0.5em 0.5em -0.4em aqua;\n    transform: scale(1.05);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: wrap;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo-rss.svg */ "./src/assets/logo-rss.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/github.svg */ "./src/assets/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
}

ul li {
    list-style-type: none;
}

ul {
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: inherit;
    font: inherit;
}

img {
    display: block;
    max-width: 100%;
}

h1,
h2,
h3 {
    margin: 0;
    padding: 0;
    font-weight: 400;
}

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    color: #fff;
    background: #17181c;
    background: linear-gradient(to right,#17181c,#2f021f);
    font-family: sans-serif;
}

header {
    min-height: 5vh;
    padding: 10px 30px;
}

.header__title {
    font-size: 40px;
    font-weight: 800;
    text-align: center;
}

.main {
    padding: 0 20px;
    min-height: 85vh;
}

footer {
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.footer__item-copyright {
    font-size: 14px;
    color: #f5e8e8;
    text-align: center;
}
.footer__item-copyright {
    color: #f5e8e8;
}

.footer__item-copyright:before {
    content: '©';
}

.footer__item:not(.footer__item-copyright):hover,
.footer__item:not(.footer__item-copyright):focus  {
    filter: drop-shadow(0.3rem 0.3rem 1.3rem white);
    transform: scale(1.1);
}

.footer__logo-rss {
    width: 100px;
    height: 35px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
}

.footer__logo-github {
    width: 40px;
    height: 35px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center;
}

@media (max-width: 420px) {
    .header__title {
        font-size: 30px;
    }
  }`, "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;;;IAGI,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;;IAEI,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,UAAU;IACV,SAAS;IACT,6BAA6B;IAC7B,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,qDAAqD;IACrD,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,+CAA+C;IAC/C,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,oEAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oEAAqD;AACzD;;AAEA;IACI;QACI,eAAe;IACnB;EACF","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n}\n\nul li {\n    list-style-type: none;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\np {\n    margin: 0;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\nbutton,\ninput {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    outline: 0;\n    padding: 0;\n    margin: 0;\n    background-color: transparent;\n    color: inherit;\n    font: inherit;\n}\n\nimg {\n    display: block;\n    max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n    margin: 0;\n    padding: 0;\n    font-weight: 400;\n}\n\nhtml {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n}\n\nbody {\n    color: #fff;\n    background: #17181c;\n    background: linear-gradient(to right,#17181c,#2f021f);\n    font-family: sans-serif;\n}\n\nheader {\n    min-height: 5vh;\n    padding: 10px 30px;\n}\n\n.header__title {\n    font-size: 40px;\n    font-weight: 800;\n    text-align: center;\n}\n\n.main {\n    padding: 0 20px;\n    min-height: 85vh;\n}\n\nfooter {\n    min-height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer__list {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 20px;\n}\n\n.footer__item-copyright {\n    font-size: 14px;\n    color: #f5e8e8;\n    text-align: center;\n}\n.footer__item-copyright {\n    color: #f5e8e8;\n}\n\n.footer__item-copyright:before {\n    content: '©';\n}\n\n.footer__item:not(.footer__item-copyright):hover,\n.footer__item:not(.footer__item-copyright):focus  {\n    filter: drop-shadow(0.3rem 0.3rem 1.3rem white);\n    transform: scale(1.1);\n}\n\n.footer__logo-rss {\n    width: 100px;\n    height: 35px;\n    background: url(./assets/logo-rss.svg) no-repeat center;\n}\n\n.footer__logo-github {\n    width: 40px;\n    height: 35px;\n    background: url(./assets/github.svg) no-repeat center;\n}\n\n@media (max-width: 420px) {\n    .header__title {\n        font-size: 30px;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/view/news/news.css":
/*!*******************************************!*\
  !*** ./src/components/view/news/news.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./news.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/view/sources/sources.css":
/*!*************************************************!*\
  !*** ./src/components/view/sources/sources.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sources.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/app/app.js":
/*!***********************************!*\
  !*** ./src/components/app/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/controller */ "./src/components/controller/controller.js");
/* harmony import */ var _view_appView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/appView */ "./src/components/view/appView.js");
/* harmony import */ var _view_news_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/news/news */ "./src/components/view/news/news.js");
/* harmony import */ var _view_sources_sources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/sources/sources */ "./src/components/view/sources/sources.js");






class App {
    constructor() {
        this.controller = new _controller_controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.view = new _view_appView__WEBPACK_IMPORTED_MODULE_1__.AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


// class App {
//     private controller: AppController;
//     private view: AppView;

//     constructor() {
//         this.controller = new AppController();
//         this.view = new AppView();
//     }

//     start(): void {
//         const sourcesElement = document.querySelector('.sources');
//         if (sourcesElement) {
//             sourcesElement.addEventListener('click', (e: Event) => {
//                 this.controller.getNews(e, (data: NewsItem[]) => {
//                     const newsData: NewsData = { articles: data };
//                     this.view.drawNews(newsData);
//                 });
//             });
//         }

//         this.controller.getSources((data: Source[]) => {
//             const sourcesData: SourcesData = { sources: data };
//             this.view.drawSources(sourcesData);
//         });
//     }
// }

// export default App;


/***/ }),

/***/ "./src/components/controller/appLoader.js":
/*!************************************************!*\
  !*** ./src/components/controller/appLoader.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./src/components/controller/loader.js");

class AppLoader extends _loader__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("https://rss-news-api.onrender.com/", {
            apiKey: "260969fa2eaf4cc5bf3ca2a62fca0840",
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLoader);

// type Options = {
//     apiKey: string;
// };

// class AppLoader extends Loader {
//     constructor() {
//         const apiUrl = process.env.API_URL || '';
//         const apiKey = process.env.API_KEY || '';

//         const options: Options = { apiKey };

//         super(apiUrl, options);
//     }
// }

// export default AppLoader;


// export default AppLoader;

/***/ }),

/***/ "./src/components/controller/controller.js":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLoader */ "./src/components/controller/appLoader.js");
/* harmony import */ var _view_news_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/news/news */ "./src/components/view/news/news.js");
/* harmony import */ var _view_sources_sources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/sources/sources */ "./src/components/view/sources/sources.js");





class AppController extends _appLoader__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getSources(callback) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppController);

// class AppController extends AppLoader {
//     getSources(callback: (data: Source[]) => void): void {
//         super.getResp({ endpoint: 'sources' }, callback);
//     }

//     getNews(e: Event, callback: (data: NewsItem[]) => void): void {
//         let target = e.target as HTMLElement;
//         const newsContainer = e.currentTarget as HTMLElement;

//         while (target !== newsContainer) {
//             if (target.classList.contains('source__item')) {
//                 const sourceId = target.getAttribute('data-source-id');
//                 if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
//                     newsContainer.setAttribute('data-source', sourceId);
//                     super.getResp(
//                         {
//                             endpoint: 'everything',
//                             options: {
//                                 sources: sourceId,
//                             },
//                         },
//                         callback
//                     );
//                 }
//                 return;
//             }
//             if (target.parentNode) {
//                 target = target.parentNode as HTMLElement;
//             } else {
//                 break;
//             }
//         }
//     }
// }

// export default AppController;


/***/ }),

/***/ "./src/components/controller/loader.js":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options, endpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method, endpoint, callback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);
// type Options = {
//     [key: string]: string;
// };

// type Callback<T> = (data: T) => void;

// class Loader {
//     baseLink: string;
//     options: Options;

//     constructor(baseLink: string, options: Options) {
//         this.baseLink = baseLink;
//         this.options = options;
//     }

//     getResp<T>(
//         { endpoint, options = {} }: { endpoint: string; options?: Options },
//         callback: Callback<T> = () => {
//             console.error('No callback for GET response');
//         }
//     ): void {
//         this.load('GET', endpoint, callback, options);
//     }

//     errorHandler(res: Response): Response {
//         if (!res.ok) {
//             if (res.status === 401 || res.status === 404)
//                 console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
//             throw Error(res.statusText);
//         }

//         return res;
//     }

//     makeUrl(options: Options, endpoint: string): string {
//         const urlOptions = { ...this.options, ...options };
//         let url = `${this.baseLink}${endpoint}?`;

//         Object.keys(urlOptions).forEach((key) => {
//             url += `${key}=${urlOptions[key]}&`;
//         });

//         return url.slice(0, -1);
//     }

//     load<T>(method: string, endpoint: string, callback: Callback<T>, options: Options = {}): void {
//         fetch(this.makeUrl(options, endpoint), { method })
//             .then(this.errorHandler)
//             .then((res) => res.json())
//             .then((data) => callback(data))
//             .catch((err) => console.error(err));
//     }
// }

// export default Loader;



/***/ }),

/***/ "./src/components/view/appView.js":
/*!****************************************!*\
  !*** ./src/components/view/appView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppView: () => (/* binding */ AppView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news/news */ "./src/components/view/news/news.js");
/* harmony import */ var _sources_sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources/sources */ "./src/components/view/sources/sources.js");





class AppView {
    constructor() {
        this.news = new _news_news__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.sources = new _sources_sources__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }

    drawNews(data) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppView);

//export interface NewsData {
    //     articles: NewsItem[];
    // }
    
    // export interface SourcesData {
    //     sources: Source[];
    // }
    
    // export class AppView {
    //     private news: News;
    //     private sources: Sources;
    
    //     constructor() {
    //         this.news = new News();
    //         this.sources = new Sources();
    //     }
    
    //     drawNews(data: NewsData): void {
    //         const values = data.articles || [];
    //         this.news.draw(values);
    //     }
    
    //     drawSources(data: SourcesData): void {
    //         const values = data.sources || [];
    //         this.sources.draw(values);
    //     }
    // }
    
    // export default AppView;


/***/ }),

/***/ "./src/components/view/news/news.js":
/*!******************************************!*\
  !*** ./src/components/view/news/news.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.css */ "./src/components/view/news/news.css");


// export interface NewsItem {
//     author: string;
//     title: string;
//     description: string;
//     urlToImage: string;
//     publishedAt: string;
//     source: {
//         name: string;
//     };
//     url: string;
// }

class News {

    
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

            newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
    // draw(data: NewsItem[]): void {
    //     const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    //     const fragment = document.createDocumentFragment();
    //     const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
    //     if (newsItemTemp) {
    //         news.forEach((item, idx) => {
    //             const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
    //             if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

    //             const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
    //             if (metaPhoto) {
    //                 metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
    //             }

    //             const metaAuthor = newsClone.querySelector('.news__meta-author');
    //             if (metaAuthor) {
    //                 metaAuthor.textContent = item.author || item.source.name;
    //             }

    //             const metaDate = newsClone.querySelector('.news__meta-date');
    //             if (metaDate) {
    //                 metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
    //             }

    //             const descriptionTitle = newsClone.querySelector('.news__description-title');
    //             if (descriptionTitle) {
    //                 descriptionTitle.textContent = item.title;
    //             }

    //             const descriptionSource = newsClone.querySelector('.news__description-source');
    //             if (descriptionSource) {
    //                 descriptionSource.textContent = item.source.name;
    //             }

    //             const descriptionContent = newsClone.querySelector('.news__description-content');
    //             if (descriptionContent) {
    //                 descriptionContent.textContent = item.description;
    //             }

    //             const readMoreLink = newsClone.querySelector('.news__read-more a');
    //             if (readMoreLink) {
    //                 readMoreLink.setAttribute('href', item.url);
    //             }

    //             fragment.append(newsClone);
    //         });
    //     } else {
    //         console.error("Element with id 'newsItemTemp' not found.");
    //     }

    //     const newsContainer = document.querySelector<HTMLElement>('.news');
    //     if (newsContainer) {
    //         newsContainer.innerHTML = '';
    //         newsContainer.appendChild(fragment);
    //     } else {
    //         console.error("Element with class 'news' not found.");
    //     }
    // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);



/***/ }),

/***/ "./src/components/view/sources/sources.js":
/*!************************************************!*\
  !*** ./src/components/view/sources/sources.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sources_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources.css */ "./src/components/view/sources/sources.css");


class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sources);

// export interface Source {
//     id: string;
//     name: string;
// }

// class Sources {

//     draw(data: Source | Source[]): void {
//         const dataArray = Array.isArray(data) ? data : [data];
//         for (const source of dataArray) {
//             const fragment = document.createDocumentFragment();
//             const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
            
//             if (!sourceItemTemp) {
//                 return;
//             }

//             const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

//             const sourceName = sourceClone.querySelector('.source__item-name');
//             if (sourceName) {
//                 sourceName.textContent = source.name;
//             }

//             const sourceItem = sourceClone.querySelector('.source__item');
//             if (sourceItem) {
//                 sourceItem.setAttribute('data-source-id', source.id);
//             }

//             fragment.append(sourceClone);

//             const sourcesContainer = document.querySelector<HTMLElement>('.sources');
//             if (!sourcesContainer) {
//                 return;
//             }

//             sourcesContainer.append(fragment);
//         }
//     }
// }

// export default Sources;

/***/ }),

/***/ "./src/assets/github.svg":
/*!*******************************!*\
  !*** ./src/assets/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26feb3bfe62bfb59e7b3.svg";

/***/ }),

/***/ "./src/assets/logo-rss.svg":
/*!*********************************!*\
  !*** ./src/assets/logo-rss.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a36db03436e6dac8939.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.js");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ "./src/global.css");



const app = new _components_app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.start();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ2pCOztBQUV0QixnQkFBZ0IsMkRBQUc7QUFDbkIsWSIsInNvdXJjZXMiOlsid2VicGFjazovL25ld3MtanMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3MiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc291cmNlcy9zb3VyY2VzLmNzcyIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vc3JjL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ld3MtanMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3M/ZTIwNiIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzPzUyYjEiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL3NyYy9nbG9iYWwuY3NzP2QzYmMiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25ld3MtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ld3MtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9hcHBMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvYXBwVmlldy5qcyIsIndlYnBhY2s6Ly9uZXdzLWpzLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuanMiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc291cmNlcy9zb3VyY2VzLmpzIiwid2VicGFjazovL25ld3MtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3cy1qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXdzLWpzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3cy1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3MtanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXdzLWpzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25ld3MtanMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmV3cy1qcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3cy1qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5ld3NfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxLjYlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uZXdzX19pdGVtOmhvdmVyIC5uZXdzX19tZXRhLXBob3RvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xufVxuXG4ubmV3c19faXRlbSAubmV3c19fbWV0YSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLXBob3RvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzLFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyB1bCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTEyMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC4ycztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNhMmEyYTI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGEge1xuICAgIGNvbG9yOiAjZmM0N2JhO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICfihpInO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MsIG9wYWNpdHkgMC4zcztcbn1cblxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYTpob3ZlcjphZnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubmV3c19faXRlbSBwIHtcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xufVxuXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZjNDdiYTtcbiAgICB3aWR0aDogMzVweDtcbiAgICB0b3A6IC0wLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtZGV0YWlscyB7XG4gICAgbGVmdDogMCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgIC5uZXdzX19pdGVtIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB9XG5cbiAgICAubmV3c19faXRlbSAubmV3c19fbWV0YSB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcbiAgICB9XG5cbiAgICAubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgIC5uZXdzX19pdGVtLmFsdCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG5cbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IGluaGVyaXQ7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2tldygzZGVnKTtcbiAgICB9XG5cbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX21ldGEtZGV0YWlscyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvbmV3cy9uZXdzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7SUFDZjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXdzX19pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNiU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtcGhvdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtcGhvdG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyxcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHVsIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogLTEyMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgyIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNhMmEyYTI7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYSB7XFxuICAgIGNvbG9yOiAjZmM0N2JhO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmFmdGVyIHtcXG4gICAgY29udGVudDogJ+KGkic7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MsIG9wYWNpdHkgMC4zcztcXG59XFxuXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYTpob3ZlcjphZnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uZXdzX19pdGVtIHAge1xcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcbn1cXG5cXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZDogI2ZjNDdiYTtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIHRvcDogLTAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxuICAgIGxlZnQ6IDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gICAgLm5ld3NfX2l0ZW0ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEge1xcbiAgICAgICAgZmxleC1iYXNpczogNDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XFxuICAgIH1cXG5cXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgIH1cXG5cXG4gICAgLm5ld3NfX2l0ZW0uYWx0IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgfVxcblxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxuICAgICAgICBsZWZ0OiBpbmhlcml0O1xcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxuICAgIH1cXG5cXG4gICAgLm5ld3NfX2l0ZW0uYWx0IC5uZXdzX19tZXRhLWRldGFpbHMge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNvdXJjZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmb250OiAzMDAgMWVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uc291cmNlX19pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmYzQ3YmE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbjogMC41ZW07XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBjb2xvcjogI2ZjNDdiYTtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zb3VyY2VfX2l0ZW06aG92ZXIsXG4uc291cmNlX19pdGVtOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM0OGViZWI7XG4gICAgY29sb3I6IGFxdWE7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjNyZW0gMC4zcmVtIDEuM3JlbSB3aGl0ZSk7XG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gYXF1YTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uc291cmNlX19pdGVtLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc291cmNlcy9zb3VyY2VzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsK0NBQStDO0lBQy9DLHFDQUFxQztJQUNyQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zb3VyY2VzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmb250OiAzMDAgMWVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc291cmNlX19pdGVtIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZjNDdiYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbjogMC41ZW07XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxuICAgIGNvbG9yOiAjZmM0N2JhO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc291cmNlX19pdGVtOmhvdmVyLFxcbi5zb3VyY2VfX2l0ZW06Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6ICM0OGViZWI7XFxuICAgIGNvbG9yOiBhcXVhO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuM3JlbSAwLjNyZW0gMS4zcmVtIHdoaXRlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gYXF1YTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnNvdXJjZV9faXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbG9nby1yc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZ2l0aHViLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG51bCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG51bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbnAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMxNzE4MWM7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMxNzE4MWMsIzJmMDIxZik7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbmhlYWRlciB7XG4gICAgbWluLWhlaWdodDogNXZoO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cblxuLmhlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtaW4taGVpZ2h0OiA4NXZoO1xufVxuXG5mb290ZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyX19saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5mb290ZXJfX2l0ZW0tY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmNWU4ZTg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3Rlcl9faXRlbS1jb3B5cmlnaHQge1xuICAgIGNvbG9yOiAjZjVlOGU4O1xufVxuXG4uZm9vdGVyX19pdGVtLWNvcHlyaWdodDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfCqSc7XG59XG5cbi5mb290ZXJfX2l0ZW06bm90KC5mb290ZXJfX2l0ZW0tY29weXJpZ2h0KTpob3Zlcixcbi5mb290ZXJfX2l0ZW06bm90KC5mb290ZXJfX2l0ZW0tY29weXJpZ2h0KTpmb2N1cyAge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC4zcmVtIDAuM3JlbSAxLjNyZW0gd2hpdGUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmZvb3Rlcl9fbG9nby1yc3Mge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG59XG5cbi5mb290ZXJfX2xvZ28tZ2l0aHViIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgIC5oZWFkZXJfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscURBQXFEO0lBQ3JELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksK0NBQStDO0lBQy9DLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0VBQXVEO0FBQzNEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvRUFBcUQ7QUFDekQ7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbnVsIGxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICMxNzE4MWM7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMTcxODFjLCMyZjAyMWYpO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogNXZoO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA4NXZoO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlcl9fbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvb3Rlcl9faXRlbS1jb3B5cmlnaHQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjZjVlOGU4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb290ZXJfX2l0ZW0tY29weXJpZ2h0IHtcXG4gICAgY29sb3I6ICNmNWU4ZTg7XFxufVxcblxcbi5mb290ZXJfX2l0ZW0tY29weXJpZ2h0OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICfCqSc7XFxufVxcblxcbi5mb290ZXJfX2l0ZW06bm90KC5mb290ZXJfX2l0ZW0tY29weXJpZ2h0KTpob3ZlcixcXG4uZm9vdGVyX19pdGVtOm5vdCguZm9vdGVyX19pdGVtLWNvcHlyaWdodCk6Zm9jdXMgIHtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjNyZW0gMC4zcmVtIDEuM3JlbSB3aGl0ZSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmZvb3Rlcl9fbG9nby1yc3Mge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2xvZ28tcnNzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlcl9fbG9nby1naXRodWIge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvZ2l0aHViLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAgIC5oZWFkZXJfX3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc291cmNlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NvdXJjZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XG5cbmltcG9ydCB7IEFwcFZpZXcsIE5ld3NEYXRhLCBTb3VyY2VzRGF0YSB9IGZyb20gJy4uL3ZpZXcvYXBwVmlldyc7XG5pbXBvcnQgeyBOZXdzSXRlbSB9IGZyb20gJy4uL3ZpZXcvbmV3cy9uZXdzJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4uL3ZpZXcvc291cmNlcy9zb3VyY2VzJztcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEFwcFZpZXcoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jb250cm9sbGVyLmdldE5ld3MoZSwgKGRhdGEpID0+IHRoaXMudmlldy5kcmF3TmV3cyhkYXRhKSkpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0U291cmNlcygoZGF0YSkgPT4gdGhpcy52aWV3LmRyYXdTb3VyY2VzKGRhdGEpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBjbGFzcyBBcHAge1xuLy8gICAgIHByaXZhdGUgY29udHJvbGxlcjogQXBwQ29udHJvbGxlcjtcbi8vICAgICBwcml2YXRlIHZpZXc6IEFwcFZpZXc7XG5cbi8vICAgICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcbi8vICAgICAgICAgdGhpcy52aWV3ID0gbmV3IEFwcFZpZXcoKTtcbi8vICAgICB9XG5cbi8vICAgICBzdGFydCgpOiB2b2lkIHtcbi8vICAgICAgICAgY29uc3Qgc291cmNlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpO1xuLy8gICAgICAgICBpZiAoc291cmNlc0VsZW1lbnQpIHtcbi8vICAgICAgICAgICAgIHNvdXJjZXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldE5ld3MoZSwgKGRhdGE6IE5ld3NJdGVtW10pID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3c0RhdGE6IE5ld3NEYXRhID0geyBhcnRpY2xlczogZGF0YSB9O1xuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZHJhd05ld3MobmV3c0RhdGEpO1xuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0U291cmNlcygoZGF0YTogU291cmNlW10pID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHNvdXJjZXNEYXRhOiBTb3VyY2VzRGF0YSA9IHsgc291cmNlczogZGF0YSB9O1xuLy8gICAgICAgICAgICAgdGhpcy52aWV3LmRyYXdTb3VyY2VzKHNvdXJjZXNEYXRhKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJztcbmNsYXNzIEFwcExvYWRlciBleHRlbmRzIExvYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHByb2Nlc3MuZW52LkFQSV9VUkwsIHtcbiAgICAgICAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQVBJX0tFWSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQXBwTG9hZGVyO1xuXG4vLyB0eXBlIE9wdGlvbnMgPSB7XG4vLyAgICAgYXBpS2V5OiBzdHJpbmc7XG4vLyB9O1xuXG4vLyBjbGFzcyBBcHBMb2FkZXIgZXh0ZW5kcyBMb2FkZXIge1xuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5BUElfVVJMIHx8ICcnO1xuLy8gICAgICAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZIHx8ICcnO1xuXG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7IGFwaUtleSB9O1xuXG4vLyAgICAgICAgIHN1cGVyKGFwaVVybCwgb3B0aW9ucyk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHBMb2FkZXI7XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgQXBwTG9hZGVyOyIsImltcG9ydCBBcHBMb2FkZXIgZnJvbSAnLi9hcHBMb2FkZXInO1xuXG5pbXBvcnQgeyBOZXdzSXRlbSB9IGZyb20gJy4uL3ZpZXcvbmV3cy9uZXdzJztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4uL3ZpZXcvc291cmNlcy9zb3VyY2VzJztcblxuY2xhc3MgQXBwQ29udHJvbGxlciBleHRlbmRzIEFwcExvYWRlciB7XG4gICAgZ2V0U291cmNlcyhjYWxsYmFjaykge1xuICAgICAgICBzdXBlci5nZXRSZXNwKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnc291cmNlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXROZXdzKGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICB3aGlsZSAodGFyZ2V0ICE9PSBuZXdzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc291cmNlX19pdGVtJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlLWlkJyk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld3NDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZScpICE9PSBzb3VyY2VJZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmdldFJlc3AoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICdldmVyeXRoaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6IHNvdXJjZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xsZXI7XG5cbi8vIGNsYXNzIEFwcENvbnRyb2xsZXIgZXh0ZW5kcyBBcHBMb2FkZXIge1xuLy8gICAgIGdldFNvdXJjZXMoY2FsbGJhY2s6IChkYXRhOiBTb3VyY2VbXSkgPT4gdm9pZCk6IHZvaWQge1xuLy8gICAgICAgICBzdXBlci5nZXRSZXNwKHsgZW5kcG9pbnQ6ICdzb3VyY2VzJyB9LCBjYWxsYmFjayk7XG4vLyAgICAgfVxuXG4vLyAgICAgZ2V0TmV3cyhlOiBFdmVudCwgY2FsbGJhY2s6IChkYXRhOiBOZXdzSXRlbVtdKSA9PiB2b2lkKTogdm9pZCB7XG4vLyAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbi8vICAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuLy8gICAgICAgICB3aGlsZSAodGFyZ2V0ICE9PSBuZXdzQ29udGFpbmVyKSB7XG4vLyAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc291cmNlX19pdGVtJykpIHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlLWlkJyk7XG4vLyAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZUlkICYmIG5ld3NDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZScpICE9PSBzb3VyY2VJZCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBuZXdzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnLCBzb3VyY2VJZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHN1cGVyLmdldFJlc3AoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICdldmVyeXRoaW5nJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6IHNvdXJjZUlkLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcbi8vICAgICAgICAgICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaWYgKHRhcmdldC5wYXJlbnROb2RlKSB7XG4vLyAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250cm9sbGVyO1xuIiwiY2xhc3MgTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihiYXNlTGluaywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmJhc2VMaW5rID0gYmFzZUxpbms7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0UmVzcChcbiAgICAgICAgeyBlbmRwb2ludCwgb3B0aW9ucyA9IHt9IH0sXG4gICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gY2FsbGJhY2sgZm9yIEdFVCByZXNwb25zZScpO1xuICAgICAgICB9XG4gICAgKSB7XG4gICAgICAgIHRoaXMubG9hZCgnR0VUJywgZW5kcG9pbnQsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBlcnJvckhhbmRsZXIocmVzKSB7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxIHx8IHJlcy5zdGF0dXMgPT09IDQwNClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9IGVycm9yOiAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBtYWtlVXJsKG9wdGlvbnMsIGVuZHBvaW50KSB7XG4gICAgICAgIGNvbnN0IHVybE9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5iYXNlTGlua30ke2VuZHBvaW50fT9gO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHVybE9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdXJsICs9IGAke2tleX09JHt1cmxPcHRpb25zW2tleV19JmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmwuc2xpY2UoMCwgLTEpO1xuICAgIH1cblxuICAgIGxvYWQobWV0aG9kLCBlbmRwb2ludCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBmZXRjaCh0aGlzLm1ha2VVcmwob3B0aW9ucywgZW5kcG9pbnQpLCB7IG1ldGhvZCB9KVxuICAgICAgICAgICAgLnRoZW4odGhpcy5lcnJvckhhbmRsZXIpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGNhbGxiYWNrKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4vLyB0eXBlIE9wdGlvbnMgPSB7XG4vLyAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuLy8gfTtcblxuLy8gdHlwZSBDYWxsYmFjazxUPiA9IChkYXRhOiBUKSA9PiB2b2lkO1xuXG4vLyBjbGFzcyBMb2FkZXIge1xuLy8gICAgIGJhc2VMaW5rOiBzdHJpbmc7XG4vLyAgICAgb3B0aW9uczogT3B0aW9ucztcblxuLy8gICAgIGNvbnN0cnVjdG9yKGJhc2VMaW5rOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnMpIHtcbi8vICAgICAgICAgdGhpcy5iYXNlTGluayA9IGJhc2VMaW5rO1xuLy8gICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuLy8gICAgIH1cblxuLy8gICAgIGdldFJlc3A8VD4oXG4vLyAgICAgICAgIHsgZW5kcG9pbnQsIG9wdGlvbnMgPSB7fSB9OiB7IGVuZHBvaW50OiBzdHJpbmc7IG9wdGlvbnM/OiBPcHRpb25zIH0sXG4vLyAgICAgICAgIGNhbGxiYWNrOiBDYWxsYmFjazxUPiA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGNhbGxiYWNrIGZvciBHRVQgcmVzcG9uc2UnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICk6IHZvaWQge1xuLy8gICAgICAgICB0aGlzLmxvYWQoJ0dFVCcsIGVuZHBvaW50LCBjYWxsYmFjaywgb3B0aW9ucyk7XG4vLyAgICAgfVxuXG4vLyAgICAgZXJyb3JIYW5kbGVyKHJlczogUmVzcG9uc2UpOiBSZXNwb25zZSB7XG4vLyAgICAgICAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxIHx8IHJlcy5zdGF0dXMgPT09IDQwNClcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9IGVycm9yOiAke3Jlcy5zdGF0dXNUZXh0fWApO1xuLy8gICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgcmV0dXJuIHJlcztcbi8vICAgICB9XG5cbi8vICAgICBtYWtlVXJsKG9wdGlvbnM6IE9wdGlvbnMsIGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuLy8gICAgICAgICBjb25zdCB1cmxPcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbi8vICAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZUxpbmt9JHtlbmRwb2ludH0/YDtcblxuLy8gICAgICAgICBPYmplY3Qua2V5cyh1cmxPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbi8vICAgICAgICAgICAgIHVybCArPSBgJHtrZXl9PSR7dXJsT3B0aW9uc1trZXldfSZgO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgICAgICByZXR1cm4gdXJsLnNsaWNlKDAsIC0xKTtcbi8vICAgICB9XG5cbi8vICAgICBsb2FkPFQ+KG1ldGhvZDogc3RyaW5nLCBlbmRwb2ludDogc3RyaW5nLCBjYWxsYmFjazogQ2FsbGJhY2s8VD4sIG9wdGlvbnM6IE9wdGlvbnMgPSB7fSk6IHZvaWQge1xuLy8gICAgICAgICBmZXRjaCh0aGlzLm1ha2VVcmwob3B0aW9ucywgZW5kcG9pbnQpLCB7IG1ldGhvZCB9KVxuLy8gICAgICAgICAgICAgLnRoZW4odGhpcy5lcnJvckhhbmRsZXIpXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuLy8gICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGNhbGxiYWNrKGRhdGEpKVxuLy8gICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBMb2FkZXI7XG5cbiIsImltcG9ydCBOZXdzIGZyb20gJy4vbmV3cy9uZXdzJztcbmltcG9ydCB7IE5ld3NJdGVtIH0gZnJvbSAnLi9uZXdzL25ld3MnO1xuaW1wb3J0IFNvdXJjZXMgZnJvbSAnLi9zb3VyY2VzL3NvdXJjZXMnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZXMnO1xuXG5leHBvcnQgY2xhc3MgQXBwVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmV3cyA9IG5ldyBOZXdzKCk7XG4gICAgICAgIHRoaXMuc291cmNlcyA9IG5ldyBTb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZHJhd05ld3MoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhPy5hcnRpY2xlcyA/IGRhdGE/LmFydGljbGVzIDogW107XG4gICAgICAgIHRoaXMubmV3cy5kcmF3KHZhbHVlcyk7XG4gICAgfVxuXG4gICAgZHJhd1NvdXJjZXMoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhPy5zb3VyY2VzID8gZGF0YT8uc291cmNlcyA6IFtdO1xuICAgICAgICB0aGlzLnNvdXJjZXMuZHJhdyh2YWx1ZXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwVmlldztcblxuLy9leHBvcnQgaW50ZXJmYWNlIE5ld3NEYXRhIHtcbiAgICAvLyAgICAgYXJ0aWNsZXM6IE5ld3NJdGVtW107XG4gICAgLy8gfVxuICAgIFxuICAgIC8vIGV4cG9ydCBpbnRlcmZhY2UgU291cmNlc0RhdGEge1xuICAgIC8vICAgICBzb3VyY2VzOiBTb3VyY2VbXTtcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gZXhwb3J0IGNsYXNzIEFwcFZpZXcge1xuICAgIC8vICAgICBwcml2YXRlIG5ld3M6IE5ld3M7XG4gICAgLy8gICAgIHByaXZhdGUgc291cmNlczogU291cmNlcztcbiAgICBcbiAgICAvLyAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gICAgICAgICB0aGlzLm5ld3MgPSBuZXcgTmV3cygpO1xuICAgIC8vICAgICAgICAgdGhpcy5zb3VyY2VzID0gbmV3IFNvdXJjZXMoKTtcbiAgICAvLyAgICAgfVxuICAgIFxuICAgIC8vICAgICBkcmF3TmV3cyhkYXRhOiBOZXdzRGF0YSk6IHZvaWQge1xuICAgIC8vICAgICAgICAgY29uc3QgdmFsdWVzID0gZGF0YS5hcnRpY2xlcyB8fCBbXTtcbiAgICAvLyAgICAgICAgIHRoaXMubmV3cy5kcmF3KHZhbHVlcyk7XG4gICAgLy8gICAgIH1cbiAgICBcbiAgICAvLyAgICAgZHJhd1NvdXJjZXMoZGF0YTogU291cmNlc0RhdGEpOiB2b2lkIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGRhdGEuc291cmNlcyB8fCBbXTtcbiAgICAvLyAgICAgICAgIHRoaXMuc291cmNlcy5kcmF3KHZhbHVlcyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgXG4gICAgLy8gZXhwb3J0IGRlZmF1bHQgQXBwVmlldztcbiIsImltcG9ydCAnLi9uZXdzLmNzcyc7XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgTmV3c0l0ZW0ge1xuLy8gICAgIGF1dGhvcjogc3RyaW5nO1xuLy8gICAgIHRpdGxlOiBzdHJpbmc7XG4vLyAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbi8vICAgICB1cmxUb0ltYWdlOiBzdHJpbmc7XG4vLyAgICAgcHVibGlzaGVkQXQ6IHN0cmluZztcbi8vICAgICBzb3VyY2U6IHtcbi8vICAgICAgICAgbmFtZTogc3RyaW5nO1xuLy8gICAgIH07XG4vLyAgICAgdXJsOiBzdHJpbmc7XG4vLyB9XG5cbmNsYXNzIE5ld3Mge1xuXG4gICAgXG4gICAgZHJhdyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IG5ld3MgPSBkYXRhLmxlbmd0aCA+PSAxMCA/IGRhdGEuZmlsdGVyKChfaXRlbSwgaWR4KSA9PiBpZHggPCAxMCkgOiBkYXRhO1xuXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBjb25zdCBuZXdzSXRlbVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3c0l0ZW1UZW1wJyk7XG5cbiAgICAgICAgbmV3cy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld3NDbG9uZSA9IG5ld3NJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgICAgaWYgKGlkeCAlIDIpIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19faXRlbScpLmNsYXNzTGlzdC5hZGQoJ2FsdCcpO1xuXG4gICAgICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX21ldGEtcGhvdG8nKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7XG4gICAgICAgICAgICAgICAgaXRlbS51cmxUb0ltYWdlIHx8ICdpbWcvbmV3c19wbGFjZWhvbGRlci5qcGcnXG4gICAgICAgICAgICB9KWA7XG4gICAgICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX21ldGEtYXV0aG9yJykudGV4dENvbnRlbnQgPSBpdGVtLmF1dGhvciB8fCBpdGVtLnNvdXJjZS5uYW1lO1xuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWRhdGUnKS50ZXh0Q29udGVudCA9IGl0ZW0ucHVibGlzaGVkQXRcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgLmpvaW4oJy0nKTtcblxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19kZXNjcmlwdGlvbi10aXRsZScpLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tc291cmNlJykudGV4dENvbnRlbnQgPSBpdGVtLnNvdXJjZS5uYW1lO1xuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50JykudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19yZWFkLW1vcmUgYScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGl0ZW0udXJsKTtcblxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKG5ld3NDbG9uZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzJykuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cbiAgICAvLyBkcmF3KGRhdGE6IE5ld3NJdGVtW10pOiB2b2lkIHtcbiAgICAvLyAgICAgY29uc3QgbmV3cyA9IGRhdGEubGVuZ3RoID49IDEwID8gZGF0YS5maWx0ZXIoKF9pdGVtLCBpZHgpID0+IGlkeCA8IDEwKSA6IGRhdGE7XG5cbiAgICAvLyAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgLy8gICAgIGNvbnN0IG5ld3NJdGVtVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRlbXBsYXRlRWxlbWVudD4oJyNuZXdzSXRlbVRlbXAnKTtcbiAgICAvLyAgICAgaWYgKG5ld3NJdGVtVGVtcCkge1xuICAgIC8vICAgICAgICAgbmV3cy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBuZXdzQ2xvbmUgPSBuZXdzSXRlbVRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRGcmFnbWVudDtcbiAgICAvLyAgICAgICAgICAgICBpZiAoaWR4ICUgMikgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19pdGVtJyk/LmNsYXNzTGlzdC5hZGQoJ2FsdCcpO1xuXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgbWV0YVBob3RvID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLXBob3RvJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgLy8gICAgICAgICAgICAgaWYgKG1ldGFQaG90bykge1xuICAgIC8vICAgICAgICAgICAgICAgICBtZXRhUGhvdG8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0ZW0udXJsVG9JbWFnZSB8fCAnaW1nL25ld3NfcGxhY2Vob2xkZXIuanBnJ30pYDtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICBjb25zdCBtZXRhQXV0aG9yID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWF1dGhvcicpO1xuICAgIC8vICAgICAgICAgICAgIGlmIChtZXRhQXV0aG9yKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1ldGFBdXRob3IudGV4dENvbnRlbnQgPSBpdGVtLmF1dGhvciB8fCBpdGVtLnNvdXJjZS5uYW1lO1xuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IG1ldGFEYXRlID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWRhdGUnKTtcbiAgICAvLyAgICAgICAgICAgICBpZiAobWV0YURhdGUpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbWV0YURhdGUudGV4dENvbnRlbnQgPSBpdGVtLnB1Ymxpc2hlZEF0LnNsaWNlKDAsIDEwKS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCctJyk7XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tdGl0bGUnKTtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb25UaXRsZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblNvdXJjZSA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tc291cmNlJyk7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uU291cmNlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU291cmNlLnRleHRDb250ZW50ID0gaXRlbS5zb3VyY2UubmFtZTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRlbnQgPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLWNvbnRlbnQnKTtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb25Db250ZW50KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgcmVhZE1vcmVMaW5rID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19yZWFkLW1vcmUgYScpO1xuICAgIC8vICAgICAgICAgICAgIGlmIChyZWFkTW9yZUxpbmspIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVhZE1vcmVMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGl0ZW0udXJsKTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQobmV3c0Nsb25lKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVsZW1lbnQgd2l0aCBpZCAnbmV3c0l0ZW1UZW1wJyBub3QgZm91bmQuXCIpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV3cycpO1xuICAgIC8vICAgICBpZiAobmV3c0NvbnRhaW5lcikge1xuICAgIC8vICAgICAgICAgbmV3c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAvLyAgICAgICAgIG5ld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVsZW1lbnQgd2l0aCBjbGFzcyAnbmV3cycgbm90IGZvdW5kLlwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcblxuIiwiaW1wb3J0ICcuL3NvdXJjZXMuY3NzJztcblxuY2xhc3MgU291cmNlcyB7XG4gICAgZHJhdyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBjb25zdCBzb3VyY2VJdGVtVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VyY2VJdGVtVGVtcCcpO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlQ2xvbmUgPSBzb3VyY2VJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgICAgc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNvdXJjZV9faXRlbS1uYW1lJykudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtJykuc2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZS1pZCcsIGl0ZW0uaWQpO1xuXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoc291cmNlQ2xvbmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpLmFwcGVuZChmcmFnbWVudCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU291cmNlcztcblxuLy8gZXhwb3J0IGludGVyZmFjZSBTb3VyY2Uge1xuLy8gICAgIGlkOiBzdHJpbmc7XG4vLyAgICAgbmFtZTogc3RyaW5nO1xuLy8gfVxuXG4vLyBjbGFzcyBTb3VyY2VzIHtcblxuLy8gICAgIGRyYXcoZGF0YTogU291cmNlIHwgU291cmNlW10pOiB2b2lkIHtcbi8vICAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG4vLyAgICAgICAgIGZvciAoY29uc3Qgc291cmNlIG9mIGRhdGFBcnJheSkge1xuLy8gICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4vLyAgICAgICAgICAgICBjb25zdCBzb3VyY2VJdGVtVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRlbXBsYXRlRWxlbWVudD4oJyNzb3VyY2VJdGVtVGVtcCcpO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICBpZiAoIXNvdXJjZUl0ZW1UZW1wKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBjb25zdCBzb3VyY2VDbG9uZSA9IHNvdXJjZUl0ZW1UZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50RnJhZ21lbnQ7XG5cbi8vICAgICAgICAgICAgIGNvbnN0IHNvdXJjZU5hbWUgPSBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtLW5hbWUnKTtcbi8vICAgICAgICAgICAgIGlmIChzb3VyY2VOYW1lKSB7XG4vLyAgICAgICAgICAgICAgICAgc291cmNlTmFtZS50ZXh0Q29udGVudCA9IHNvdXJjZS5uYW1lO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBjb25zdCBzb3VyY2VJdGVtID0gc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNvdXJjZV9faXRlbScpO1xuLy8gICAgICAgICAgICAgaWYgKHNvdXJjZUl0ZW0pIHtcbi8vICAgICAgICAgICAgICAgICBzb3VyY2VJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UtaWQnLCBzb3VyY2UuaWQpO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoc291cmNlQ2xvbmUpO1xuXG4vLyAgICAgICAgICAgICBjb25zdCBzb3VyY2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5zb3VyY2VzJyk7XG4vLyAgICAgICAgICAgICBpZiAoIXNvdXJjZXNDb250YWluZXIpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHNvdXJjZXNDb250YWluZXIuYXBwZW5kKGZyYWdtZW50KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgU291cmNlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xuaW1wb3J0ICcuL2dsb2JhbC5jc3MnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuc3RhcnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=