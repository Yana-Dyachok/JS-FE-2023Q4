/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/button/button.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/button/button.scss ***!
  \*****************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `button {
  border-radius: 1rem;
  cursor: pointer;
}
button:disabled {
  border: none;
  background-color: #bdd1c5;
  box-shadow: none;
  cursor: not-allowed;
}
@media (hover: hover) and (pointer: fine) and (pointer: fine) {
  button:hover:not([disabled]) {
    color: #f3dcdc;
    background-color: #d3a29d;
    box-shadow: inset 0 0.5rem 8rem rgba(89, 1, 63, 0.7), inset 0 0.5rem 1rem rgba(35, 5, 25, 0.9), inset 0 -0.5rem 1rem rgba(237, 55, 134, 0.8);
    filter: drop-shadow(0.3rem 0.3rem 1.3rem #f3dcdc);
    transform: scale(1.1);
  }
}

.btn {
  width: 9rem;
  padding: 0.5rem;
  font-size: 2rem;
  display: inline-block;
  color: #a36361;
  background-color: #eecc8c;
  box-shadow: inset 0 0.5rem 8rem rgba(196, 231, 99, 0.7), inset 0 0.5rem 1rem rgba(25, 71, 51, 0.9), inset 0 -0.5rem 1rem rgba(239, 79, 199, 0.8);
}

@media (max-width: 500px) {
  .btn {
    width: 7rem;
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/core/components/button/button.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACI,mBAAA;EACA,eAAA;AADJ;AAGI;EACI,YAAA;EACA,yBCHU;EDIV,gBAAA;EACA,mBAAA;AADR;AAGI;EACI;IACI,cCdF;IDeE,yBCbA;IDcA,4IACI;IAGJ,iDAAA;IACA,qBAAA;EAJV;AACF;;AAQA;EACI,WAAA;EACA,eAAA;EACA,eAAA;EACA,qBAAA;EACA,cC5BQ;ED6BR,yBCxBM;EDyBN,gJACI;AANR;;AAWA;EACI;IACI,WAAA;IACA,iBAAA;IACA,iBAAA;EARN;AACF","sourcesContent":["@import '../../../styles/colors.scss';\r\n\r\nbutton {\r\n    border-radius: 1rem;\r\n    cursor: pointer;\r\n\r\n    &:disabled {\r\n        border: none;\r\n        background-color: $c-green-cyan-100;\r\n        box-shadow: none;\r\n        cursor: not-allowed;\r\n    }\r\n    @media (hover: hover) and (pointer: fine) and (pointer: fine) {\r\n        &:hover:not([disabled]) {\r\n            color: $c-white;\r\n            background-color: $c-pink-200;\r\n            box-shadow:\r\n                inset 0 0.5rem 8rem rgba(89, 1, 63, 0.7),\r\n                inset 0 0.5rem 1rem rgba(35, 5, 25, 0.9),\r\n                inset 0 -0.5rem 1rem rgba(237, 55, 134, 0.8);\r\n            filter: drop-shadow(0.3rem 0.3rem 1.3rem $c-white);\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n}\r\n\r\n.btn {\r\n    width: 9rem;\r\n    padding: 0.5rem;\r\n    font-size: 2rem;\r\n    display: inline-block;\r\n    color: $c-pink-800;\r\n    background-color: $c-yellow;\r\n    box-shadow:\r\n        inset 0 0.5rem 8rem rgba(196, 231, 99, 0.7),\r\n        inset 0 0.5rem 1rem rgba(25, 71, 51, 0.9),\r\n        inset 0 -0.5rem 1rem rgba(239, 79, 199, 0.8);\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .btn {\r\n        width: 7rem;\r\n        font-size: 1.5rem;\r\n        padding: 0.5rem 0;\r\n    }\r\n}\r\n","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/content-block/content.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/content-block/content.scss ***!
  \*************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.main {
  min-width: 60rem;
  border: 0.2rem solid #9eaba2;
  border-radius: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/core/components/content-block/content.scss"],"names":[],"mappings":"AAEA;EACI,gBAAA;EACA,4BAAA;EACA,mBAAA;AADJ","sourcesContent":["@import \"../../../styles/colors.scss\";\r\n\r\n.main {\r\n    min-width: 60rem;\r\n    border: 0.2rem solid $c-green-cyan-500;\r\n    border-radius: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/create-login-input/input_field.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/create-login-input/input_field.scss ***!
  \**********************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.login__form {
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
}
.login__form > label {
  text-align: left;
  font-size: 2rem;
  color: #a36361;
}
.login__input {
  width: 100%;
  padding: 1rem 2rem;
  margin: 0.8rem 0;
  box-sizing: border-box;
  font-size: 2.5rem;
  color: #6b2623;
  background-color: #f3dcdc;
  border: 0.2rem solid #bdd1c5;
  border-radius: 1rem;
}
.login__input:focus {
  border: 0.5rem solid #eecc8c;
}
.login__input.error {
  border: 0.3rem solid red;
}
.login__input.valid {
  border: 0.3rem solid #19e957;
}
.login__buttons {
  display: flex;
  gap: 3rem;
}
.login__error {
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  text-align: left;
  color: #bf1d1d;
}

@media (max-width: 500px) {
  .login__input {
    padding: 1rem;
    font-size: 1.8rem;
  }
  .login__input__error {
    font-size: 1.3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/core/components/create-login-input/input_field.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEI;EACI,aAAA;EACA,sBAAA;EACA,oBAAA;AADR;AAGQ;EACI,gBAAA;EACA,eAAA;EACA,cCPA;ADMZ;AAKI;EACI,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,iBAAA;EACA,cChBI;EDiBJ,yBCrBE;EDsBF,4BAAA;EACA,mBAAA;AAHR;AAKQ;EACI,4BAAA;AAHZ;AAMQ;EACI,wBAAA;AAJZ;AAOQ;EACI,4BAAA;AALZ;AASI;EACI,aAAA;EACA,SAAA;AAPR;AAUI;EACI,oBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AARR;;AAYA;EAEQ;IACI,aAAA;IACA,iBAAA;EAVV;EAYM;IACI,iBAAA;EAVV;AACF","sourcesContent":["@import '../../../styles/colors.scss';\r\n.login {\r\n    &__form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding-bottom: 3rem;\r\n\r\n        & > label {\r\n            text-align: left;\r\n            font-size: 2rem;\r\n            color: $c-pink-800;\r\n        }\r\n    }\r\n\r\n    &__input {\r\n        width: 100%;\r\n        padding: 1rem 2rem;\r\n        margin: 0.8rem 0;\r\n        box-sizing: border-box;\r\n        font-size: 2.5rem;\r\n        color: $c-pink-900;\r\n        background-color: $c-white;\r\n        border: 0.2rem solid $c-green-cyan-100;\r\n        border-radius: 1rem;\r\n\r\n        &:focus {\r\n            border: 0.5rem solid $c-yellow;\r\n        }\r\n\r\n        &.error {\r\n            border: 0.3rem solid red;\r\n        }\r\n\r\n        &.valid {\r\n            border: 0.3rem solid $c-green-cyan-800;\r\n        }\r\n    }\r\n\r\n    &__buttons {\r\n        display: flex;\r\n        gap: 3rem;\r\n    }\r\n\r\n    &__error {\r\n        padding: 0.5rem 1rem;\r\n        font-size: 1.6rem;\r\n        text-align: left;\r\n        color: #bf1d1d;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .login {        \r\n        &__input {\r\n            padding: 1rem;\r\n            font-size: 1.8rem;\r\n    \r\n        &__error {\r\n            font-size: 1.3rem;        }\r\n    }\r\n}\r\n}","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/footer/footer.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/footer/footer.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/rs-school.svg */ "./src/assets/svg/rs-school.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/icon-github.svg */ "./src/assets/svg/icon-github.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.footer {
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__list {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}
.footer__span {
  display: flex;
  justify-content: center;
  font-family: "tenpounds regular";
}
.footer__copyright {
  text-align: center;
}
.footer__copyright:before {
  content: "©";
}
.footer__item:not(.footer__description):hover, .footer__item:not(.footer__description):focus {
  filter: drop-shadow(0.3rem 0.3rem 1.3rem black);
  transform: scale(1.05);
}
.footer__logo-rss {
  width: 10rem;
  height: 4rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
}
.footer__logo-github {
  width: 5rem;
  height: 4.6rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center;
}

@media (max-width: 500px) {
  .footer__list {
    font-size: 1.2rem;
  }
  .footer__logo-rss {
    background-size: 6rem;
  }
  .footer__logo-github {
    background-size: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/core/components/footer/footer.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAEJ;AAAI;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,SAAA;AAER;AACI;EACI,aAAA;EACA,uBAAA;EACA,gCAAA;AACR;AAEI;EACI,kBAAA;AAAR;AAEQ;EACI,YAAA;AAAZ;AAII;EAEI,+CAAA;EACA,sBAAA;AAHR;AAMI;EACI,YAAA;EACA,YAAA;EACA,oEAAA;AAJR;AAOI;EACI,WAAA;EACA,cAAA;EACA,oEAAA;AALR;;AAUA;EAGQ;IACG,iBAAA;EATT;EAYM;IACG,qBAAA;EAVT;EAaM;IACI,qBAAA;EAXV;AACF","sourcesContent":[".footer {\r\n    min-height: 10vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        gap: 2rem;\r\n    }\r\n\r\n    &__span {\r\n        display: flex;\r\n        justify-content: center;\r\n        font-family: \"tenpounds regular\";\r\n    }\r\n\r\n    &__copyright {\r\n        text-align: center;\r\n\r\n        &:before {\r\n            content: '©';\r\n        }\r\n    }\r\n\r\n    &__item:not(&__description):hover,\r\n    &__item:not(&__description):focus {\r\n        filter: drop-shadow(0.3rem 0.3rem 1.3rem black);\r\n        transform: scale(1.05);\r\n    }\r\n\r\n    &__logo-rss {\r\n        width: 10rem;\r\n        height: 4rem;\r\n        background: url(\"../../../assets/svg/rs-school.svg\") no-repeat center;\r\n    }\r\n\r\n    &__logo-github {\r\n        width: 5rem;\r\n        height: 4.6rem;\r\n        background: url(\"../../../assets/svg/icon-github.svg\") no-repeat center;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 500px) {\r\n    .footer {\r\n    \r\n        &__list {\r\n           font-size: 1.2rem;\r\n        }\r\n    \r\n        &__logo-rss {\r\n           background-size: 6rem;\r\n        }\r\n    \r\n        &__logo-github {\r\n            background-size: 3rem;\r\n        }\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/header/header.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/header/header.scss ***!
  \*****************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: baseline;
  gap: 1rem;
}
.header__article {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  background-image: linear-gradient(180deg, #6b2623, #19e957);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (max-width: 500px) {
  .header__article {
    font-size: 1.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/core/components/header/header.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,kCAAA;EACA,qBAAA;EACA,SAAA;AADJ;AAGI;EACI,aAAA;EACA,8BAAA;EACA,eAAA;EACA,2DAAA;EACJ,6BAAA;EACA,qBAAA;EACA,kBAAA;AADJ;;AAKA;EAEI;IACI,iBAAA;EAHN;AACF","sourcesContent":["@import '../../../styles/colors.scss';\r\n\r\n.header {\r\n    display: grid;\r\n    grid-template-columns: 3fr 1fr 1fr; \r\n    align-items: baseline;\r\n    gap: 1rem;\r\n  \r\n    &__article {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        font-size: 2rem;\r\n        background-image: linear-gradient(180deg, $c-pink-900, $c-green-cyan-800); \r\n    -webkit-background-clip: text; \r\n    background-clip: text; \r\n    color: transparent;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  \r\n    .header__article {\r\n        font-size: 1.5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/error-page/error.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/error-page/error.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/error.png */ "./src/assets/img/error.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.error__block {
  width: 60vw;
  height: 80vh;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/contain no-repeat;
}`, "",{"version":3,"sources":["webpack://./src/pages/error-page/error.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,4EAAA;AACJ","sourcesContent":[".error__block {\r\n    width: 60vw;\r\n    height: 80vh;\r\n    background: url(\"../../assets/img/error.png\") center/contain no-repeat;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/info-page/info-page.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/info-page/info-page.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.info__block {
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem 2rem;
  color: #a36361;
}
.info__text {
  text-align: center;
  color: black;
}
.info__link, .info__title {
  font-family: "tenpounds regular";
  animation: fade-in 1s ease-out;
}
.info__link:hover {
  color: black;
  transform: scale(1.1);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@media (max-width: 720px) {
  .info__text {
    font-size: 1.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/info-page/info-page.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEI;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,oBAAA;EACA,cCPI;ADMZ;AAII;EACI,kBAAA;EACA,YCNE;ADIV;AAMI;EAEI,gCAAA;EACA,8BAAA;AALR;AAQI;EACI,YCjBE;EDkBF,qBAAA;AANR;;AAUA;EACI;IACI,UAAA;IACA,qBAAA;EAPN;EASE;IACI,UAAA;IACA,mBAAA;EAPN;AACF;AAUA;EACI;IACI,iBAAA;EARN;AACF","sourcesContent":["@import \"../../styles/colors.scss\";\r\n.info {\r\n    &__block {\r\n        max-width: 80rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 1rem;\r\n        padding: 0 1rem 2rem;\r\n        color: $c-pink-800;\r\n    }\r\n\r\n    &__text {\r\n        text-align: center;\r\n        color: $c-black;\r\n    }\r\n\r\n    \r\n    &__link,\r\n    &__title {\r\n        font-family: \"tenpounds regular\";\r\n        animation: fade-in 1s ease-out;\r\n    }\r\n\r\n    &__link:hover {\r\n        color: $c-black;\r\n        transform: scale(1.1);\r\n    }\r\n}\r\n\r\n@keyframes fade-in {\r\n    from {\r\n        opacity: 0;\r\n        transform: scale(0.9);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@media (max-width: 720px) {\r\n    .info__text {\r\n        font-size: 1.5rem;\r\n    }\r\n}","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/tenpounds-regular.woff2 */ "./src/assets/fonts/tenpounds-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/tenpounds-regular.woff */ "./src/assets/fonts/tenpounds-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Salina-Trial-Regular.woff2 */ "./src/assets/fonts/Salina-Trial-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Salina-Trial-Regular.woff */ "./src/assets/fonts/Salina-Trial-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  box-sizing: border-box;
}

*,
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

@font-face {
  font-family: "tenpounds regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "salina trial";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
html {
  scroll-behavior: smooth;
  font-size: 10px;
}

body {
  margin: 0 auto;
  padding: 1rem 2rem;
  font-family: "salina trial";
  font-size: 1.5rem;
  font-weight: 400;
  -webkit-font-smoothing: auto;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  color: black;
  background-image: linear-gradient(to right, #bdd1c5, #eecc8c, #a36361);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@font-face {
  font-family: "tenpounds regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "salina trial";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.scss","webpack://./src/styles/style.scss","webpack://./src/styles/fonts.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;ACCJ;;ADEE;;;EAGE,mBAAA;ACCJ;;ADEE;EACE,SAAA;ACCJ;;ADEE;EACE,qBAAA;ACCJ;;ADEE;EACE,SAAA;EACA,UAAA;ACCJ;;ADEE;EACE,SAAA;ACCJ;;ADEE;EACE,qBAAA;EACA,cAAA;ACCJ;;ADEE;;EAEE,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,SAAA;EACA,6BAAA;EACA,cAAA;EACA,aAAA;ACCJ;;ADEE;EACE,cAAA;EACA,eAAA;ACCJ;;ADEE;;;EAGE,SAAA;EACA,UAAA;EACA,gBAAA;ACCJ;;ACzDA;EACI,gCAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;AD2DJ;ACxDA;EACI,2BAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADyDJ;AErEA;EACI,uBAAA;EACA,eAAA;AFuEJ;;AEpEA;EACI,cAAA;EACA,kBAAA;EACA,2BAAA;EACA,iBAAA;EACA,gBAAA;EACA,4BAAA;EACA,8BAAA;EACA,gBAAA;EACA,YCRM;EDSN,sEAAA;AFuEJ;;AEpEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AFuEJ;;AEpEA;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AFuEJ;;ACvGA;EACI,gCAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADyGJ;ACtGA;EACI,2BAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADuGJ","sourcesContent":[":root {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  ul li {\r\n    list-style-type: none;\r\n  }\r\n  \r\n  ul {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  p {\r\n    margin: 0;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  button,\r\n  input {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    border: none;\r\n    outline: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: transparent;\r\n    color: inherit;\r\n    font: inherit;\r\n  }\r\n  \r\n  img {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3 {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: 400;\r\n  }  \r\n ",":root {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n}\n\nul li {\n  list-style-type: none;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton,\ninput {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  color: inherit;\n  font: inherit;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: \"tenpounds regular\";\n  src: url(\"../assets/fonts/tenpounds-regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/tenpounds-regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"salina trial\";\n  src: url(\"../assets/fonts/Salina-Trial-Regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/Salina-Trial-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}\nhtml {\n  scroll-behavior: smooth;\n  font-size: 10px;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 1rem 2rem;\n  font-family: \"salina trial\";\n  font-size: 1.5rem;\n  font-weight: 400;\n  -webkit-font-smoothing: auto;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: black;\n  background-image: linear-gradient(to right, #bdd1c5, #eecc8c, #a36361);\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.wrapper {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: \"tenpounds regular\";\n  src: url(\"../assets/fonts/tenpounds-regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/tenpounds-regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"salina trial\";\n  src: url(\"../assets/fonts/Salina-Trial-Regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/Salina-Trial-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}","@font-face {\r\n    font-family: \"tenpounds regular\";\r\n    src: url(\"../assets/fonts/tenpounds-regular.woff2\") format(\"woff2\"),\r\n        url(\"../assets/fonts/tenpounds-regular.woff\") format(\"woff\");\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"salina trial\";\r\n    src: url(\"../assets/fonts/Salina-Trial-Regular.woff2\") format(\"woff2\"),\r\n        url(\"../assets/fonts/Salina-Trial-Regular.woff\") format(\"woff\");\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}","@import \"./fonts.scss\";\r\n@import \"./colors.scss\";\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n    font-size: 10px;\r\n}\r\n\r\nbody {\r\n    margin: 0 auto;\r\n    padding: 1rem 2rem;\r\n    font-family: \"salina trial\";\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n    -webkit-font-smoothing: auto;\r\n    -webkit-text-size-adjust: 100%;\r\n    line-height: 1.5;\r\n    color: $c-black;\r\n    background-image: linear-gradient(to right, $c-green-cyan-100, $c-yellow, $c-pink-800);\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.wrapper {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
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

/***/ "./src/core/components/button/button.scss":
/*!************************************************!*\
  !*** ./src/core/components/button/button.scss ***!
  \************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/button/button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/core/components/content-block/content.scss":
/*!********************************************************!*\
  !*** ./src/core/components/content-block/content.scss ***!
  \********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./content.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/content-block/content.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/core/components/create-login-input/input_field.scss":
/*!*****************************************************************!*\
  !*** ./src/core/components/create-login-input/input_field.scss ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_field_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./input_field.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/create-login-input/input_field.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_field_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/core/components/footer/footer.scss":
/*!************************************************!*\
  !*** ./src/core/components/footer/footer.scss ***!
  \************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/core/components/header/header.scss":
/*!************************************************!*\
  !*** ./src/core/components/header/header.scss ***!
  \************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/error-page/error.scss":
/*!*****************************************!*\
  !*** ./src/pages/error-page/error.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_error_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./error.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/error-page/error.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_error_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_error_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_error_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_error_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/info-page/info-page.scss":
/*!********************************************!*\
  !*** ./src/pages/info-page/info-page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_info_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./info-page.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/info-page/info-page.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_info_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_info_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_info_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_info_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/core/app/app.ts":
/*!*****************************!*\
  !*** ./src/core/app/app.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const info_page_1 = __importDefault(__webpack_require__(/*! ../../pages/info-page/info-page */ "./src/pages/info-page/info-page.ts"));
const main_page_1 = __importDefault(__webpack_require__(/*! ../../pages/main-page/main-page */ "./src/pages/main-page/main-page.ts"));
const login_page_1 = __importDefault(__webpack_require__(/*! ../../pages/login-page/login-page */ "./src/pages/login-page/login-page.ts"));
const form_validation_1 = __importDefault(__webpack_require__(/*! ../components/form-validation/form-validation */ "./src/core/components/form-validation/form-validation.ts"));
const error_page_1 = __importDefault(__webpack_require__(/*! ../../pages/error-page/error-page */ "./src/pages/error-page/error-page.ts"));
class App {
    static renderNewPage(idPage) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page = null;
        if (idPage === "main") {
            page = new main_page_1.default(idPage);
        }
        else if (idPage === "info") {
            page = new info_page_1.default(idPage);
        }
        else if (idPage === "login") {
            page = new login_page_1.default(idPage);
        }
        else {
            page = new error_page_1.default(idPage);
        }
        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }
    enableRouteChange() {
        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }
    constructor() {
        this.formValidation = new form_validation_1.default();
    }
    run() {
        App.renderNewPage("login");
        this.enableRouteChange();
        window.location.hash = "login";
        this.formValidation.setupValidation();
        window.addEventListener("hashchange", () => {
            this.formValidation.setupValidation();
        });
    }
}
App.container = document.body;
App.defaultPageId = "current-page";
exports["default"] = App;


/***/ }),

/***/ "./src/core/components/aside-content/create-aside.ts":
/*!***********************************************************!*\
  !*** ./src/core/components/aside-content/create-aside.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createUserAside = exports.createUserSearch = exports.createUserItem = void 0;
const createUserItem = (name, count) => {
    const userItem = document.createElement("li");
    userItem.classList.add("aside-user__item");
    const userStatus = document.createElement("div");
    userStatus.classList.add("aside-user__status");
    const userName = document.createElement("label");
    userName.classList.add("aside-user__name");
    userName.textContent = name;
    const userMessages = document.createElement("label");
    userMessages.classList.add("aside-user__messages");
    userMessages.textContent = count || "";
    userItem.append(userStatus, userName, userMessages);
    return userItem;
};
exports.createUserItem = createUserItem;
const createUserSearch = () => {
    const userSearch = document.createElement("input");
    userSearch.classList.add("aside-user__search");
    userSearch.placeholder = "Search";
    return userSearch;
};
exports.createUserSearch = createUserSearch;
const createUserAside = () => {
    const userAside = document.createElement("aside");
    userAside.classList.add("aside-user");
    const userList = document.createElement("ul");
    userList.classList.add("aside-user__list");
    userAside.append((0, exports.createUserSearch)(), userList);
    return userAside;
};
exports.createUserAside = createUserAside;


/***/ }),

/***/ "./src/core/components/button/button.ts":
/*!**********************************************!*\
  !*** ./src/core/components/button/button.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./button.scss */ "./src/core/components/button/button.scss");
class Button {
    constructor(className, commonClassName, text) {
        this.button = document.createElement("button");
        this.button.classList.add(className);
        this.button.classList.add(commonClassName);
        this.button.textContent = text;
    }
    getRootElement() {
        return this.button;
    }
    setDisabled(disabled) {
        if (disabled) {
            this.button.setAttribute("disabled", "disabled");
        }
        else {
            this.button.removeAttribute("disabled");
        }
    }
    onClick(callback) {
        this.button.addEventListener("click", callback);
    }
    handleUpdateButtonClick(callback) {
        this.button.addEventListener("click", callback);
    }
    removeEventListener(eventType, callback) {
        this.button.removeEventListener(eventType, callback);
    }
}
exports["default"] = Button;


/***/ }),

/***/ "./src/core/components/content-block/content.ts":
/*!******************************************************!*\
  !*** ./src/core/components/content-block/content.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const send_btn_1 = __importDefault(__webpack_require__(/*! ./send-btn/send-btn */ "./src/core/components/content-block/send-btn/send-btn.ts"));
const create_aside_1 = __webpack_require__(/*! ../aside-content/create-aside */ "./src/core/components/aside-content/create-aside.ts");
__webpack_require__(/*! ./content.scss */ "./src/core/components/content-block/content.scss");
class Content {
    constructor() {
        this.content = document.createElement("main");
        this.content.classList.add("main");
        this.sendButton = new send_btn_1.default();
    }
    createContentElements() {
        this.content.append((0, create_aside_1.createUserAside)());
    }
    getRootElement() {
        this.createContentElements();
        return this.content;
    }
}
exports["default"] = Content;


/***/ }),

/***/ "./src/core/components/content-block/send-btn/send-btn.ts":
/*!****************************************************************!*\
  !*** ./src/core/components/content-block/send-btn/send-btn.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const button_1 = __importDefault(__webpack_require__(/*! ../../button/button */ "./src/core/components/button/button.ts"));
class SendButton extends button_1.default {
    constructor() {
        super("send__btn", "btn", "Send");
        // this.onClick(() => {
        // });
    }
}
exports["default"] = SendButton;


/***/ }),

/***/ "./src/core/components/create-login-input/input-field-create.ts":
/*!**********************************************************************!*\
  !*** ./src/core/components/create-login-input/input-field-create.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createInputField = void 0;
__webpack_require__(/*! ./input_field.scss */ "./src/core/components/create-login-input/input_field.scss");
const createInput = (type, id) => {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.classList.add("login__input");
    input.required = true;
    return input;
};
const createLabel = (forLabel, text) => {
    const label = document.createElement("label");
    label.htmlFor = forLabel;
    label.textContent = text;
    return label;
};
const createErrorElements = (classError) => Object.assign(document.createElement("div"), {
    className: `login__error ${classError}`,
});
const createInputField = () => {
    const form = document.createElement("form");
    form.classList.add("login__form");
    form.append(createLabel("user-name", "Name:"), createInput("text", "user-name"), createErrorElements("user-name__error"), createLabel("password", "Password:"), createInput("password", "password"), createErrorElements("password__error"));
    return form;
};
exports.createInputField = createInputField;


/***/ }),

/***/ "./src/core/components/enter-btn/enter-btn.ts":
/*!****************************************************!*\
  !*** ./src/core/components/enter-btn/enter-btn.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const button_1 = __importDefault(__webpack_require__(/*! ../button/button */ "./src/core/components/button/button.ts"));
class EnterButton extends button_1.default {
    constructor() {
        super("enter__btn", "btn", "Enter");
        this.setDisabled(true);
        this.onClick(() => {
            window.location.hash = "main";
        });
    }
}
exports["default"] = EnterButton;


/***/ }),

/***/ "./src/core/components/footer/footer.ts":
/*!**********************************************!*\
  !*** ./src/core/components/footer/footer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFooterElements = void 0;
__webpack_require__(/*! ./footer.scss */ "./src/core/components/footer/footer.scss");
const createGithubItem = () => {
    const githubItem = document.createElement("li");
    githubItem.classList.add("footer__item");
    const githubLink = document.createElement("a");
    githubLink.classList.add("footer__link");
    githubLink.setAttribute("href", "https://github.com/Yana-Dyachok");
    const githubLogo = document.createElement("div");
    githubLogo.classList.add("footer__logo-github");
    githubLink.append(githubLogo);
    githubItem.append(githubLink);
    return githubItem;
};
const createRSSItem = () => {
    const rssItem = document.createElement("li");
    rssItem.classList.add("footer__item");
    const rssLink = document.createElement("a");
    rssLink.classList.add("footer__link");
    rssLink.setAttribute("href", "https://rollingscopes.com/");
    const rssLogo = document.createElement("div");
    rssLogo.classList.add("footer__logo-rss");
    rssLink.append(rssLogo);
    rssItem.append(rssLink);
    return rssItem;
};
const createDescriptionItem = () => {
    const descriptionItem = document.createElement("li");
    descriptionItem.classList.add("footer__item", "footer__description");
    const school = document.createElement("span");
    school.classList.add("footer__span");
    school.textContent = "The Rolling Scopes School";
    const copyright = document.createElement("span");
    copyright.classList.add("footer__copyright", "footer__span");
    copyright.textContent = "2024";
    const author = document.createElement("span");
    author.classList.add("footer__span");
    author.textContent = "Created by Yana Dyachok";
    descriptionItem.append(school, copyright, author);
    return descriptionItem;
};
const createFooterElements = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const list = document.createElement("ul");
    list.classList.add("footer__list");
    list.append(createGithubItem(), createDescriptionItem(), createRSSItem());
    footer.append(list);
    return footer;
};
exports.createFooterElements = createFooterElements;


/***/ }),

/***/ "./src/core/components/form-validation/form-validation.ts":
/*!****************************************************************!*\
  !*** ./src/core/components/form-validation/form-validation.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const result_validation_1 = __importDefault(__webpack_require__(/*! ./result-validation */ "./src/core/components/form-validation/result-validation.ts"));
class FormValidation extends result_validation_1.default {
    constructor() {
        super(...arguments);
        this.isValidUserName = false;
        this.isValidPassword = false;
        this.userName = "";
        this.password = "";
    }
    setupValidation() {
        const userNameInput = document.getElementById("user-name");
        const passwordInput = document.getElementById("password");
        const errorUserName = document.querySelector(".user-name__error");
        const errorPassword = document.querySelector(".password__error");
        if (userNameInput) {
            userNameInput.addEventListener("input", () => {
                const { value } = userNameInput;
                this.isValidUserName = /^[A-Z][a-zA-Z-]{2,}$/.test(value);
                if (this.isValidUserName) {
                    this.validityIsTrue(userNameInput, errorUserName);
                }
                else {
                    this.validityNameIsFalse(userNameInput, errorUserName, value, 3);
                }
                this.toggleBtnDisabled();
                this.userName = value;
            });
        }
        if (passwordInput) {
            passwordInput.addEventListener("input", () => {
                const { value } = passwordInput;
                this.isValidPassword = /^(?=.*\d)(?=.*[A-Z]).{4,}$/.test(value);
                if (this.isValidPassword) {
                    this.validityIsTrue(passwordInput, errorPassword);
                }
                else {
                    this.validityPasswordIsFalse(passwordInput, errorPassword, value, 4);
                }
                this.toggleBtnDisabled();
                this.password = value;
            });
        }
    }
    toggleBtnDisabled() {
        const enterBtn = document.querySelector(".enter__btn");
        if (enterBtn) {
            if (!this.updateValidity(this.isValidUserName, this.isValidPassword)) {
                enterBtn.setAttribute("disabled", "disabled");
            }
            else {
                enterBtn.removeAttribute("disabled");
            }
        }
    }
}
exports["default"] = FormValidation;


/***/ }),

/***/ "./src/core/components/form-validation/result-validation.ts":
/*!******************************************************************!*\
  !*** ./src/core/components/form-validation/result-validation.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ResultValidation {
    validityIsTrue(inputElement, errorElement) {
        inputElement.classList.remove("error");
        inputElement.classList.add("valid");
        errorElement.innerHTML = "";
    }
    validityNameIsFalse(inputElement, errorElement, value, validLength) {
        inputElement.classList.add("error");
        inputElement.classList.remove("valid");
        const errorArray = [
            /^[A-Z]/.test(value),
            /^[A-Za-z-]*$/.test(value),
            value.length >= validLength,
        ];
        const errorMessages = [
            "* The first letter must be capitalized",
            "* Only English letters and hyphens are allowed",
            `* The input field requires a minimum of ${validLength} characters.`,
        ];
        for (let i = errorElement.children.length; i < 3; i += 1) {
            errorElement.append(document.createElement("p"));
        }
        for (let i = 0; i < 3; i += 1) {
            errorElement.children[i].textContent = !errorArray[i]
                ? errorMessages[i]
                : "";
        }
    }
    validityPasswordIsFalse(inputElement, errorElement, value, validLength) {
        inputElement.classList.add("error");
        inputElement.classList.remove("valid");
        const errorPassword = [
            /^(?=.*\d)/.test(value),
            /^(?=.*[A-Z])/.test(value),
            value.length >= validLength,
        ];
        const errorMessagesPassword = [
            "* At least 1 number (0-9)",
            "* At least 1 uppercase letter",
            `* The input field requires a minimum of ${validLength} characters.`,
        ];
        for (let i = errorElement.children.length; i < 3; i += 1) {
            errorElement.append(document.createElement("p"));
        }
        for (let i = 0; i < 3; i += 1) {
            errorElement.children[i].textContent = !errorPassword[i]
                ? errorMessagesPassword[i]
                : "";
        }
    }
    updateValidity(isValidFirst, isValidSecond) {
        return isValidFirst && isValidSecond;
    }
}
exports["default"] = ResultValidation;


/***/ }),

/***/ "./src/core/components/header/header.ts":
/*!**********************************************!*\
  !*** ./src/core/components/header/header.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const logout_button_1 = __importDefault(__webpack_require__(/*! ./logout-button/logout_button */ "./src/core/components/header/logout-button/logout_button.ts"));
const info_btn_1 = __importDefault(__webpack_require__(/*! ../info-btn/info-btn */ "./src/core/components/info-btn/info-btn.ts"));
__webpack_require__(/*! ./header.scss */ "./src/core/components/header/header.scss");
class Header {
    constructor() {
        this.header = document.createElement("header");
        this.header.classList.add("header");
        this.logoutButton = new logout_button_1.default();
        this.infoButton = new info_btn_1.default();
    }
    createHeaderElements() {
        const article = document.createElement("article");
        article.classList.add("header__article");
        const userName = document.createElement("label");
        userName.classList.add("header__label", "header__user-name");
        userName.textContent = `User:`;
        const title = document.createElement("label");
        title.classList.add("header__label", "header__title");
        title.textContent = "Fun Chat";
        article.append(userName, title);
        this.header.append(article, this.infoButton.getRootElement(), this.logoutButton.getRootElement());
    }
    getRootElement() {
        this.createHeaderElements();
        return this.header;
    }
}
exports["default"] = Header;


/***/ }),

/***/ "./src/core/components/header/logout-button/logout_button.ts":
/*!*******************************************************************!*\
  !*** ./src/core/components/header/logout-button/logout_button.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const button_1 = __importDefault(__webpack_require__(/*! ../../button/button */ "./src/core/components/button/button.ts"));
class LogoutButton extends button_1.default {
    constructor() {
        super("logout__btn", "btn", "Log out");
        this.onClick(() => {
            window.location.hash = "login";
        });
    }
}
exports["default"] = LogoutButton;


/***/ }),

/***/ "./src/core/components/info-btn/info-btn.ts":
/*!**************************************************!*\
  !*** ./src/core/components/info-btn/info-btn.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const button_1 = __importDefault(__webpack_require__(/*! ../button/button */ "./src/core/components/button/button.ts"));
class InfoButton extends button_1.default {
    constructor() {
        super("info__btn", "btn", "Info");
        this.onClick(() => {
            window.location.hash = "info";
        });
    }
}
exports["default"] = InfoButton;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
const app_1 = __importDefault(__webpack_require__(/*! ./core/app/app */ "./src/core/app/app.ts"));
const app = new app_1.default();
app.run();


/***/ }),

/***/ "./src/pages/error-page/error-page.ts":
/*!********************************************!*\
  !*** ./src/pages/error-page/error-page.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const page_1 = __importDefault(__webpack_require__(/*! ../../utils/page/page */ "./src/utils/page/page.ts"));
__webpack_require__(/*! ./error.scss */ "./src/pages/error-page/error.scss");
class ErrorPage extends page_1.default {
    constructor(id) {
        super(id);
    }
    render() {
        const error = document.createElement("div");
        error.classList.add("error__block");
        this.container.append(error);
        return this.container;
    }
}
ErrorPage.TextObject = {
    "404": "Error! The page was not found.",
};
exports["default"] = ErrorPage;


/***/ }),

/***/ "./src/pages/info-page/info-page.ts":
/*!******************************************!*\
  !*** ./src/pages/info-page/info-page.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const page_1 = __importDefault(__webpack_require__(/*! ../../utils/page/page */ "./src/utils/page/page.ts"));
const button_1 = __importDefault(__webpack_require__(/*! ../../core/components/button/button */ "./src/core/components/button/button.ts"));
__webpack_require__(/*! ./info-page.scss */ "./src/pages/info-page/info-page.scss");
class InfoPage extends page_1.default {
    constructor(id) {
        super(id);
        this.button = new button_1.default("back__btn", "btn", "Back");
        this.button.onClick(() => {
            window.location.hash = "main";
        });
    }
    createInfoElements() {
        const infoBlock = document.createElement("div");
        infoBlock.classList.add("info__block");
        const title = document.createElement("h1");
        title.classList.add("info__title");
        title.textContent = "Fun chat";
        const info = document.createElement("h2");
        info.classList.add("info__text");
        info.textContent =
            "Introducing our chat platform—a space designed for seamless communication among friends. Picture this: engaging conversations, quick exchanges, and shared moments—all within the confines of our chat environment.";
        const githubLink = document.createElement("a");
        githubLink.classList.add("info__link");
        githubLink.setAttribute("href", "https://github.com/Yana-Dyachok");
        githubLink.setAttribute("target", "_blank");
        githubLink.textContent = "Created by Yana Dyachok";
        infoBlock.append(title, info, githubLink);
        return infoBlock;
    }
    render() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.append(this.createInfoElements(), this.button.getRootElement());
        this.container.append(wrapper);
        return this.container;
    }
}
InfoPage.TextObject = {
    InfoTitle: "Info Page",
};
exports["default"] = InfoPage;


/***/ }),

/***/ "./src/pages/login-page/login-page.ts":
/*!********************************************!*\
  !*** ./src/pages/login-page/login-page.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const page_1 = __importDefault(__webpack_require__(/*! ../../utils/page/page */ "./src/utils/page/page.ts"));
const info_btn_1 = __importDefault(__webpack_require__(/*! ../../core/components/info-btn/info-btn */ "./src/core/components/info-btn/info-btn.ts"));
const enter_btn_1 = __importDefault(__webpack_require__(/*! ../../core/components/enter-btn/enter-btn */ "./src/core/components/enter-btn/enter-btn.ts"));
const input_field_create_1 = __webpack_require__(/*! ../../core/components/create-login-input/input-field-create */ "./src/core/components/create-login-input/input-field-create.ts");
class LoginPage extends page_1.default {
    constructor(id) {
        super(id);
        this.infoBtn = new info_btn_1.default();
        this.enterBtn = new enter_btn_1.default();
    }
    render() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        const buttons = document.createElement("div");
        buttons.classList.add("login__buttons");
        buttons.append(this.enterBtn.getRootElement(), this.infoBtn.getRootElement());
        wrapper.append((0, input_field_create_1.createInputField)(), buttons);
        this.container.append(wrapper);
        return this.container;
    }
}
LoginPage.TextObject = {
    LoginTitle: "Login Page",
};
exports["default"] = LoginPage;


/***/ }),

/***/ "./src/pages/main-page/main-page.ts":
/*!******************************************!*\
  !*** ./src/pages/main-page/main-page.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const page_1 = __importDefault(__webpack_require__(/*! ../../utils/page/page */ "./src/utils/page/page.ts"));
const header_1 = __importDefault(__webpack_require__(/*! ../../core/components/header/header */ "./src/core/components/header/header.ts"));
const content_1 = __importDefault(__webpack_require__(/*! ../../core/components/content-block/content */ "./src/core/components/content-block/content.ts"));
const footer_1 = __webpack_require__(/*! ../../core/components/footer/footer */ "./src/core/components/footer/footer.ts");
class MainPage extends page_1.default {
    constructor(id) {
        super(id);
        this.header = new header_1.default();
        this.content = new content_1.default();
    }
    render() {
        this.container.append(this.header.getRootElement(), this.content.getRootElement(), (0, footer_1.createFooterElements)());
        return this.container;
    }
}
MainPage.TextObject = {
    MainTitle: "Main Page",
};
exports["default"] = MainPage;


/***/ }),

/***/ "./src/utils/page/page.ts":
/*!********************************!*\
  !*** ./src/utils/page/page.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Page {
    constructor(id) {
        this.container = document.createElement("div");
        this.container.classList.add("container");
        this.container.id = id;
    }
    render() {
        return this.container;
    }
}
Page.TextObject = {};
exports["default"] = Page;


/***/ }),

/***/ "./src/assets/fonts/Salina-Trial-Regular.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Salina-Trial-Regular.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d14d4c172f6cdc7cd4f9.woff";

/***/ }),

/***/ "./src/assets/fonts/Salina-Trial-Regular.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/Salina-Trial-Regular.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a56fabc577c7bf2d16.woff2";

/***/ }),

/***/ "./src/assets/fonts/tenpounds-regular.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/tenpounds-regular.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3430a4066bf27ae161f9.woff";

/***/ }),

/***/ "./src/assets/fonts/tenpounds-regular.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/tenpounds-regular.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b12d0b56b0a8538e546.woff2";

/***/ }),

/***/ "./src/assets/img/error.png":
/*!**********************************!*\
  !*** ./src/assets/img/error.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb99954c86db74d62cf6.png";

/***/ }),

/***/ "./src/assets/svg/icon-github.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/icon-github.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc49a960a2d3c5a49c80.svg";

/***/ }),

/***/ "./src/assets/svg/rs-school.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/rs-school.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad178c0df28bc133be34.svg";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9jb250ZW50LWJsb2NrL2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9jcmVhdGUtbG9naW4taW5wdXQvaW5wdXRfZmllbGQuc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcGFnZXMvaW5mby1wYWdlL2luZm8tcGFnZS5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2Nzcz8xODk5Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2NvbnRlbnQtYmxvY2svY29udGVudC5zY3NzP2Y4YjciLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvY3JlYXRlLWxvZ2luLWlucHV0L2lucHV0X2ZpZWxkLnNjc3M/MmY3MCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3M/OWE0YiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3M/OTg1ZSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3Iuc2Nzcz8wOTA4Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcGFnZXMvaW5mby1wYWdlL2luZm8tcGFnZS5zY3NzP2Q1MWEiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYXNpZGUtY29udGVudC9jcmVhdGUtYXNpZGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9jb250ZW50LWJsb2NrL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvY29udGVudC1ibG9jay9zZW5kLWJ0bi9zZW5kLWJ0bi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9jcmVhdGUtbG9naW4taW5wdXQvaW5wdXQtZmllbGQtY3JlYXRlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2VudGVyLWJ0bi9lbnRlci1idG4udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9mb3JtLXZhbGlkYXRpb24vZm9ybS12YWxpZGF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGlvbi9yZXN1bHQtdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2hlYWRlci9sb2dvdXQtYnV0dG9uL2xvZ291dF9idXR0b24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvaW5mby1idG4vaW5mby1idG4udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3BhZ2VzL2luZm8tcGFnZS9pbmZvLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvcGFnZS9wYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246ZGlzYWJsZWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGQxYzU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgY29sb3I6ICNmM2RjZGM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzYTI5ZDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAuNXJlbSA4cmVtIHJnYmEoODksIDEsIDYzLCAwLjcpLCBpbnNldCAwIDAuNXJlbSAxcmVtIHJnYmEoMzUsIDUsIDI1LCAwLjkpLCBpbnNldCAwIC0wLjVyZW0gMXJlbSByZ2JhKDIzNywgNTUsIDEzNCwgMC44KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuM3JlbSAwLjNyZW0gMS4zcmVtICNmM2RjZGMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDlyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjYTM2MzYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjYzhjO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAuNXJlbSA4cmVtIHJnYmEoMTk2LCAyMzEsIDk5LCAwLjcpLCBpbnNldCAwIDAuNXJlbSAxcmVtIHJnYmEoMjUsIDcxLCA1MSwgMC45KSwgaW5zZXQgMCAtMC41cmVtIDFyZW0gcmdiYSgyMzksIDc5LCAxOTksIDAuOCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvcmUvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0ksWUFBQTtFQUNBLHlCQ0hVO0VESVYsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBR0k7RUFDSTtJQUNJLGNDZEY7SURlRSx5QkNiQTtJRGNBLDRJQUNJO0lBR0osaURBQUE7SUFDQSxxQkFBQTtFQUpWO0FBQ0Y7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNDNUJRO0VENkJSLHlCQ3hCTTtFRHlCTixnSkFDSTtBQU5SOztBQVdBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQVJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICY6ZGlzYWJsZWQge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGMtZ3JlZW4tY3lhbi0xMDA7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJGMtd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGMtcGluay0yMDA7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzpcXHJcXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwLjVyZW0gOHJlbSByZ2JhKDg5LCAxLCA2MywgMC43KSxcXHJcXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwLjVyZW0gMXJlbSByZ2JhKDM1LCA1LCAyNSwgMC45KSxcXHJcXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAtMC41cmVtIDFyZW0gcmdiYSgyMzcsIDU1LCAxMzQsIDAuOCk7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjNyZW0gMC4zcmVtIDEuM3JlbSAkYy13aGl0ZSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICB3aWR0aDogOXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgY29sb3I6ICRjLXBpbmstODAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy15ZWxsb3c7XFxyXFxuICAgIGJveC1zaGFkb3c6XFxyXFxuICAgICAgICBpbnNldCAwIDAuNXJlbSA4cmVtIHJnYmEoMTk2LCAyMzEsIDk5LCAwLjcpLFxcclxcbiAgICAgICAgaW5zZXQgMCAwLjVyZW0gMXJlbSByZ2JhKDI1LCA3MSwgNTEsIDAuOSksXFxyXFxuICAgICAgICBpbnNldCAwIC0wLjVyZW0gMXJlbSByZ2JhKDIzOSwgNzksIDE5OSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDdyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiJGMtd2hpdGU6ICNmM2RjZGM7XFxyXFxuJGMtcGluay0xMDA6I2U4YjI5ODtcXHJcXG4kYy1waW5rLTIwMDojZDNhMjlkO1xcclxcbiRjLXBpbmstODAwOiNhMzYzNjE7XFxyXFxuJGMtcGluay05MDA6IzZiMjYyMztcXHJcXG4kYy1ncmVlbi1jeWFuLTEwMDojYmRkMWM1O1xcclxcbiRjLWdyZWVuLWN5YW4tNTAwOiM5ZWFiYTI7XFxyXFxuJGMtZ3JlZW4tY3lhbi04MDA6IzE5ZTk1NztcXHJcXG4kYy15ZWxsb3c6I2VlY2M4YztcXHJcXG4kYy1ibGFjazogYmxhY2s7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWFpbiB7XG4gIG1pbi13aWR0aDogNjByZW07XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICM5ZWFiYTI7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29yZS9jb21wb25lbnRzL2NvbnRlbnQtYmxvY2svY29udGVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXFxcIjtcXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1pbi13aWR0aDogNjByZW07XFxyXFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICRjLWdyZWVuLWN5YW4tNTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2dpbl9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuLmxvZ2luX19mb3JtID4gbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjYTM2MzYxO1xufVxuLmxvZ2luX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIG1hcmdpbjogMC44cmVtIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogIzZiMjYyMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZGNkYztcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgI2JkZDFjNTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5sb2dpbl9faW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDAuNXJlbSBzb2xpZCAjZWVjYzhjO1xufVxuLmxvZ2luX19pbnB1dC5lcnJvciB7XG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkIHJlZDtcbn1cbi5sb2dpbl9faW5wdXQudmFsaWQge1xuICBib3JkZXI6IDAuM3JlbSBzb2xpZCAjMTllOTU3O1xufVxuLmxvZ2luX19idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcmVtO1xufVxuLmxvZ2luX19lcnJvciB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNiZjFkMWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubG9naW5fX2lucHV0IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG4gIC5sb2dpbl9faW5wdXRfX2Vycm9yIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvcmUvY29tcG9uZW50cy9jcmVhdGUtbG9naW4taW5wdXQvaW5wdXRfZmllbGQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBRFI7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDUEE7QURNWjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NoQkk7RURpQkoseUJDckJFO0VEc0JGLDRCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBQ0ksNEJBQUE7QUFIWjtBQU1RO0VBQ0ksd0JBQUE7QUFKWjtBQU9RO0VBQ0ksNEJBQUE7QUFMWjtBQVNJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFQUjtBQVVJO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJSOztBQVlBO0VBRVE7SUFDSSxhQUFBO0lBQ0EsaUJBQUE7RUFWVjtFQVlNO0lBQ0ksaUJBQUE7RUFWVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XFxyXFxuLmxvZ2luIHtcXHJcXG4gICAgJl9fZm9ybSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcblxcclxcbiAgICAgICAgJiA+IGxhYmVsIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJGMtcGluay04MDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgICAgICBtYXJnaW46IDAuOHJlbSAwO1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICAgICAgY29sb3I6ICRjLXBpbmstOTAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGMtd2hpdGU7XFxyXFxuICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAkYy1ncmVlbi1jeWFuLTEwMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCAkYy15ZWxsb3c7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLmVycm9yIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDAuM3JlbSBzb2xpZCByZWQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLnZhbGlkIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDAuM3JlbSBzb2xpZCAkYy1ncmVlbi1jeWFuLTgwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19idXR0b25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fZXJyb3Ige1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBjb2xvcjogI2JmMWQxZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmxvZ2luIHsgICAgICAgIFxcclxcbiAgICAgICAgJl9faW5wdXQge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgJl9fZXJyb3Ige1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtOyAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbn1cIixcIiRjLXdoaXRlOiAjZjNkY2RjO1xcclxcbiRjLXBpbmstMTAwOiNlOGIyOTg7XFxyXFxuJGMtcGluay0yMDA6I2QzYTI5ZDtcXHJcXG4kYy1waW5rLTgwMDojYTM2MzYxO1xcclxcbiRjLXBpbmstOTAwOiM2YjI2MjM7XFxyXFxuJGMtZ3JlZW4tY3lhbi0xMDA6I2JkZDFjNTtcXHJcXG4kYy1ncmVlbi1jeWFuLTUwMDojOWVhYmEyO1xcclxcbiRjLWdyZWVuLWN5YW4tODAwOiMxOWU5NTc7XFxyXFxuJGMteWVsbG93OiNlZWNjOGM7XFxyXFxuJGMtYmxhY2s6IGJsYWNrO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9ycy1zY2hvb2wuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9pY29uLWdpdGh1Yi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4uZm9vdGVyIHtcbiAgbWluLWhlaWdodDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vdGVyX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xufVxuLmZvb3Rlcl9fc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJ0ZW5wb3VuZHMgcmVndWxhclwiO1xufVxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29weXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiwqlcIjtcbn1cbi5mb290ZXJfX2l0ZW06bm90KC5mb290ZXJfX2Rlc2NyaXB0aW9uKTpob3ZlciwgLmZvb3Rlcl9faXRlbTpub3QoLmZvb3Rlcl9fZGVzY3JpcHRpb24pOmZvY3VzIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjNyZW0gMC4zcmVtIDEuM3JlbSBibGFjayk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4uZm9vdGVyX19sb2dvLXJzcyB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbi5mb290ZXJfX2xvZ28tZ2l0aHViIHtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNC42cmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mb290ZXJfX2xpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb290ZXJfX2xvZ28tcnNzIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDZyZW07XG4gIH1cbiAgLmZvb3Rlcl9fbG9nby1naXRodWIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogM3JlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFFUjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUVRO0VBQ0ksWUFBQTtBQUFaO0FBSUk7RUFFSSwrQ0FBQTtFQUNBLHNCQUFBO0FBSFI7QUFNSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0VBQUE7QUFKUjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxvRUFBQTtBQUxSOztBQVVBO0VBR1E7SUFDRyxpQkFBQTtFQVRUO0VBWU07SUFDRyxxQkFBQTtFQVZUO0VBYU07SUFDSSxxQkFBQTtFQVhWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19zcGFuIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwidGVucG91bmRzIHJlZ3VsYXJcXFwiO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2NvcHlyaWdodCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJ8KpJztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtOm5vdCgmX19kZXNjcmlwdGlvbik6aG92ZXIsXFxyXFxuICAgICZfX2l0ZW06bm90KCZfX2Rlc2NyaXB0aW9uKTpmb2N1cyB7XFxyXFxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuM3JlbSAwLjNyZW0gMS4zcmVtIGJsYWNrKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbG9nby1yc3Mge1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi8uLi9hc3NldHMvc3ZnL3JzLXNjaG9vbC5zdmdcXFwiKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xvZ28tZ2l0aHViIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0LjZyZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvaWNvbi1naXRodWIuc3ZnXFxcIikgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmZvb3RlciB7XFxyXFxuICAgIFxcclxcbiAgICAgICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAmX19sb2dvLXJzcyB7XFxyXFxuICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDZyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgJl9fbG9nby1naXRodWIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDFyZW07XG59XG4uaGVhZGVyX19hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2YjI2MjMsICMxOWU5NTcpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyX19hcnRpY2xlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLDJEQUFBO0VBQ0osNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFFSTtJQUNJLGlCQUFBO0VBSE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMWZyOyBcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICBcXHJcXG4gICAgJl9fYXJ0aWNsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJGMtcGluay05MDAsICRjLWdyZWVuLWN5YW4tODAwKTsgXFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBcXHJcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgXFxyXFxuICAgIC5oZWFkZXJfX2FydGljbGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1nL2Vycm9yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmVycm9yX19ibG9jayB7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDgwdmg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw0RUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lcnJvcl9fYmxvY2sge1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9pbWcvZXJyb3IucG5nXFxcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbmZvX19ibG9jayB7XG4gIG1heC13aWR0aDogODByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDAgMXJlbSAycmVtO1xuICBjb2xvcjogI2EzNjM2MTtcbn1cbi5pbmZvX190ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG4uaW5mb19fbGluaywgLmluZm9fX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwidGVucG91bmRzIHJlZ3VsYXJcIjtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2Utb3V0O1xufVxuLmluZm9fX2xpbms6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5pbmZvX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2luZm8tcGFnZS9pbmZvLXBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGNDUEk7QURNWjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxZQ05FO0FESVY7QUFNSTtFQUVJLGdDQUFBO0VBQ0EsOEJBQUE7QUFMUjtBQVFJO0VBQ0ksWUNqQkU7RURrQkYscUJBQUE7QUFOUjs7QUFVQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0VBUE47RUFTRTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFQVBOO0FBQ0Y7QUFVQTtFQUNJO0lBQ0ksaUJBQUE7RUFSTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy9jb2xvcnMuc2Nzc1xcXCI7XFxyXFxuLmluZm8ge1xcclxcbiAgICAmX19ibG9jayB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMnJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkYy1waW5rLTgwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiAkYy1ibGFjaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBcXHJcXG4gICAgJl9fbGluayxcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJ0ZW5wb3VuZHMgcmVndWxhclxcXCI7XFxyXFxuICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1vdXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGluazpob3ZlciB7XFxyXFxuICAgICAgICBjb2xvcjogJGMtYmxhY2s7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xcclxcbiAgICAuaW5mb19fdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbn1cIixcIiRjLXdoaXRlOiAjZjNkY2RjO1xcclxcbiRjLXBpbmstMTAwOiNlOGIyOTg7XFxyXFxuJGMtcGluay0yMDA6I2QzYTI5ZDtcXHJcXG4kYy1waW5rLTgwMDojYTM2MzYxO1xcclxcbiRjLXBpbmstOTAwOiM2YjI2MjM7XFxyXFxuJGMtZ3JlZW4tY3lhbi0xMDA6I2JkZDFjNTtcXHJcXG4kYy1ncmVlbi1jeWFuLTUwMDojOWVhYmEyO1xcclxcbiRjLWdyZWVuLWN5YW4tODAwOiMxOWU5NTc7XFxyXFxuJGMteWVsbG93OiNlZWNjOGM7XFxyXFxuJGMtYmxhY2s6IGJsYWNrO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL3RlbnBvdW5kcy1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL3RlbnBvdW5kcy1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU2FsaW5hLVRyaWFsLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU2FsaW5hLVRyaWFsLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5idXR0b24sXG5pbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJ0ZW5wb3VuZHMgcmVndWxhclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInNhbGluYSB0cmlhbFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBmb250LWZhbWlseTogXCJzYWxpbmEgdHJpYWxcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiZGQxYzUsICNlZWNjOGMsICNhMzYzNjEpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInRlbnBvdW5kcyByZWd1bGFyXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic2FsaW5hIHRyaWFsXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFRTs7O0VBR0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7O0VBRUUsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QUN6REE7RUFDSSxnQ0FBQTtFQUNBLG9IQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEMkRKO0FDeERBO0VBQ0ksMkJBQUE7RUFDQSxvSEFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRHlESjtBRXJFQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBRnVFSjs7QUVwRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQ1JNO0VEU04sc0VBQUE7QUZ1RUo7O0FFcEVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUZ1RUo7O0FFcEVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUZ1RUo7O0FDdkdBO0VBQ0ksZ0NBQUE7RUFDQSxvSEFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRHlHSjtBQ3RHQTtFQUNJLDJCQUFBO0VBQ0Esb0hBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUR1R0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAqLFxcclxcbiAgKjo6YmVmb3JlLFxcclxcbiAgKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBidXR0b24sXFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBoMSxcXHJcXG4gIGgyLFxcclxcbiAgaDMge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB9ICBcXHJcXG4gXCIsXCI6cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGVucG91bmRzIHJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy90ZW5wb3VuZHMtcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvdGVucG91bmRzLXJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInNhbGluYSB0cmlhbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1NhbGluYS1UcmlhbC1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9TYWxpbmEtVHJpYWwtUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzYWxpbmEgdHJpYWxcXFwiO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiZGQxYzUsICNlZWNjOGMsICNhMzYzNjEpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGVucG91bmRzIHJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy90ZW5wb3VuZHMtcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvdGVucG91bmRzLXJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInNhbGluYSB0cmlhbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1NhbGluYS1UcmlhbC1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9TYWxpbmEtVHJpYWwtUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cIixcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInRlbnBvdW5kcyByZWd1bGFyXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy90ZW5wb3VuZHMtcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXHJcXG4gICAgICAgIHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL3RlbnBvdW5kcy1yZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInNhbGluYSB0cmlhbFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvU2FsaW5hLVRyaWFsLVJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxyXFxuICAgICAgICB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9TYWxpbmEtVHJpYWwtUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4vZm9udHMuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9jb2xvcnMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInNhbGluYSB0cmlhbFxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgIGNvbG9yOiAkYy1ibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkYy1ncmVlbi1jeWFuLTEwMCwgJGMteWVsbG93LCAkYy1waW5rLTgwMCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cIixcIiRjLXdoaXRlOiAjZjNkY2RjO1xcclxcbiRjLXBpbmstMTAwOiNlOGIyOTg7XFxyXFxuJGMtcGluay0yMDA6I2QzYTI5ZDtcXHJcXG4kYy1waW5rLTgwMDojYTM2MzYxO1xcclxcbiRjLXBpbmstOTAwOiM2YjI2MjM7XFxyXFxuJGMtZ3JlZW4tY3lhbi0xMDA6I2JkZDFjNTtcXHJcXG4kYy1ncmVlbi1jeWFuLTUwMDojOWVhYmEyO1xcclxcbiRjLWdyZWVuLWN5YW4tODAwOiMxOWU5NTc7XFxyXFxuJGMteWVsbG93OiNlZWNjOGM7XFxyXFxuJGMtYmxhY2s6IGJsYWNrO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dF9maWVsZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXRfZmllbGQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXJyb3Iuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Vycm9yLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZm8tcGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5mby1wYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGluZm9fcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9wYWdlcy9pbmZvLXBhZ2UvaW5mby1wYWdlXCIpKTtcbmNvbnN0IG1haW5fcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlXCIpKTtcbmNvbnN0IGxvZ2luX3BhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlXCIpKTtcbmNvbnN0IGZvcm1fdmFsaWRhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGlvbi9mb3JtLXZhbGlkYXRpb25cIikpO1xuY29uc3QgZXJyb3JfcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9wYWdlcy9lcnJvci1wYWdlL2Vycm9yLXBhZ2VcIikpO1xuY2xhc3MgQXBwIHtcbiAgICBzdGF0aWMgcmVuZGVyTmV3UGFnZShpZFBhZ2UpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2VIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7QXBwLmRlZmF1bHRQYWdlSWR9YCk7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZUhUTUwpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlSFRNTC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFnZSA9IG51bGw7XG4gICAgICAgIGlmIChpZFBhZ2UgPT09IFwibWFpblwiKSB7XG4gICAgICAgICAgICBwYWdlID0gbmV3IG1haW5fcGFnZV8xLmRlZmF1bHQoaWRQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpZFBhZ2UgPT09IFwiaW5mb1wiKSB7XG4gICAgICAgICAgICBwYWdlID0gbmV3IGluZm9fcGFnZV8xLmRlZmF1bHQoaWRQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpZFBhZ2UgPT09IFwibG9naW5cIikge1xuICAgICAgICAgICAgcGFnZSA9IG5ldyBsb2dpbl9wYWdlXzEuZGVmYXVsdChpZFBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFnZSA9IG5ldyBlcnJvcl9wYWdlXzEuZGVmYXVsdChpZFBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlSFRNTCA9IHBhZ2UucmVuZGVyKCk7XG4gICAgICAgICAgICBwYWdlSFRNTC5pZCA9IEFwcC5kZWZhdWx0UGFnZUlkO1xuICAgICAgICAgICAgQXBwLmNvbnRhaW5lci5hcHBlbmQocGFnZUhUTUwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVuYWJsZVJvdXRlQ2hhbmdlKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuICAgICAgICAgICAgQXBwLnJlbmRlck5ld1BhZ2UoaGFzaCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGlvbiA9IG5ldyBmb3JtX3ZhbGlkYXRpb25fMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgQXBwLnJlbmRlck5ld1BhZ2UoXCJsb2dpblwiKTtcbiAgICAgICAgdGhpcy5lbmFibGVSb3V0ZUNoYW5nZSgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwibG9naW5cIjtcbiAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGlvbi5zZXR1cFZhbGlkYXRpb24oKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybVZhbGlkYXRpb24uc2V0dXBWYWxpZGF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkFwcC5jb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xuQXBwLmRlZmF1bHRQYWdlSWQgPSBcImN1cnJlbnQtcGFnZVwiO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZVVzZXJBc2lkZSA9IGV4cG9ydHMuY3JlYXRlVXNlclNlYXJjaCA9IGV4cG9ydHMuY3JlYXRlVXNlckl0ZW0gPSB2b2lkIDA7XG5jb25zdCBjcmVhdGVVc2VySXRlbSA9IChuYW1lLCBjb3VudCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHVzZXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS11c2VyX19pdGVtXCIpO1xuICAgIGNvbnN0IHVzZXJTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVzZXJTdGF0dXMuY2xhc3NMaXN0LmFkZChcImFzaWRlLXVzZXJfX3N0YXR1c1wiKTtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtdXNlcl9fbmFtZVwiKTtcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgY29uc3QgdXNlck1lc3NhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHVzZXJNZXNzYWdlcy5jbGFzc0xpc3QuYWRkKFwiYXNpZGUtdXNlcl9fbWVzc2FnZXNcIik7XG4gICAgdXNlck1lc3NhZ2VzLnRleHRDb250ZW50ID0gY291bnQgfHwgXCJcIjtcbiAgICB1c2VySXRlbS5hcHBlbmQodXNlclN0YXR1cywgdXNlck5hbWUsIHVzZXJNZXNzYWdlcyk7XG4gICAgcmV0dXJuIHVzZXJJdGVtO1xufTtcbmV4cG9ydHMuY3JlYXRlVXNlckl0ZW0gPSBjcmVhdGVVc2VySXRlbTtcbmNvbnN0IGNyZWF0ZVVzZXJTZWFyY2ggPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlclNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB1c2VyU2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS11c2VyX19zZWFyY2hcIik7XG4gICAgdXNlclNlYXJjaC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoXCI7XG4gICAgcmV0dXJuIHVzZXJTZWFyY2g7XG59O1xuZXhwb3J0cy5jcmVhdGVVc2VyU2VhcmNoID0gY3JlYXRlVXNlclNlYXJjaDtcbmNvbnN0IGNyZWF0ZVVzZXJBc2lkZSA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyQXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gICAgdXNlckFzaWRlLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS11c2VyXCIpO1xuICAgIGNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVzZXJMaXN0LmNsYXNzTGlzdC5hZGQoXCJhc2lkZS11c2VyX19saXN0XCIpO1xuICAgIHVzZXJBc2lkZS5hcHBlbmQoKDAsIGV4cG9ydHMuY3JlYXRlVXNlclNlYXJjaCkoKSwgdXNlckxpc3QpO1xuICAgIHJldHVybiB1c2VyQXNpZGU7XG59O1xuZXhwb3J0cy5jcmVhdGVVc2VyQXNpZGUgPSBjcmVhdGVVc2VyQXNpZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2J1dHRvbi5zY3NzXCIpO1xuY2xhc3MgQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGNvbW1vbkNsYXNzTmFtZSwgdGV4dCkge1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChjb21tb25DbGFzc05hbWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGdldFJvb3RFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idXR0b247XG4gICAgfVxuICAgIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2soY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgaGFuZGxlVXBkYXRlQnV0dG9uQ2xpY2soY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzZW5kX2J0bl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NlbmQtYnRuL3NlbmQtYnRuXCIpKTtcbmNvbnN0IGNyZWF0ZV9hc2lkZV8xID0gcmVxdWlyZShcIi4uL2FzaWRlLWNvbnRlbnQvY3JlYXRlLWFzaWRlXCIpO1xucmVxdWlyZShcIi4vY29udGVudC5zY3NzXCIpO1xuY2xhc3MgQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgICAgIHRoaXMuc2VuZEJ1dHRvbiA9IG5ldyBzZW5kX2J0bl8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgY3JlYXRlQ29udGVudEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKCgwLCBjcmVhdGVfYXNpZGVfMS5jcmVhdGVVc2VyQXNpZGUpKCkpO1xuICAgIH1cbiAgICBnZXRSb290RWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb250ZW50RWxlbWVudHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYnV0dG9uL2J1dHRvblwiKSk7XG5jbGFzcyBTZW5kQnV0dG9uIGV4dGVuZHMgYnV0dG9uXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwic2VuZF9fYnRuXCIsIFwiYnRuXCIsIFwiU2VuZFwiKTtcbiAgICAgICAgLy8gdGhpcy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2VuZEJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVJbnB1dEZpZWxkID0gdm9pZCAwO1xucmVxdWlyZShcIi4vaW5wdXRfZmllbGQuc2Nzc1wiKTtcbmNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGlkKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaW5wdXQuaWQgPSBpZDtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibG9naW5fX2lucHV0XCIpO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5wdXQ7XG59O1xuY29uc3QgY3JlYXRlTGFiZWwgPSAoZm9yTGFiZWwsIHRleHQpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5odG1sRm9yID0gZm9yTGFiZWw7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBsYWJlbDtcbn07XG5jb25zdCBjcmVhdGVFcnJvckVsZW1lbnRzID0gKGNsYXNzRXJyb3IpID0+IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogYGxvZ2luX19lcnJvciAke2NsYXNzRXJyb3J9YCxcbn0pO1xuY29uc3QgY3JlYXRlSW5wdXRGaWVsZCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwibG9naW5fX2Zvcm1cIik7XG4gICAgZm9ybS5hcHBlbmQoY3JlYXRlTGFiZWwoXCJ1c2VyLW5hbWVcIiwgXCJOYW1lOlwiKSwgY3JlYXRlSW5wdXQoXCJ0ZXh0XCIsIFwidXNlci1uYW1lXCIpLCBjcmVhdGVFcnJvckVsZW1lbnRzKFwidXNlci1uYW1lX19lcnJvclwiKSwgY3JlYXRlTGFiZWwoXCJwYXNzd29yZFwiLCBcIlBhc3N3b3JkOlwiKSwgY3JlYXRlSW5wdXQoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkXCIpLCBjcmVhdGVFcnJvckVsZW1lbnRzKFwicGFzc3dvcmRfX2Vycm9yXCIpKTtcbiAgICByZXR1cm4gZm9ybTtcbn07XG5leHBvcnRzLmNyZWF0ZUlucHV0RmllbGQgPSBjcmVhdGVJbnB1dEZpZWxkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYnV0dG9uL2J1dHRvblwiKSk7XG5jbGFzcyBFbnRlckJ1dHRvbiBleHRlbmRzIGJ1dHRvbl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcImVudGVyX19idG5cIiwgXCJidG5cIiwgXCJFbnRlclwiKTtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJtYWluXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVudGVyQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUZvb3RlckVsZW1lbnRzID0gdm9pZCAwO1xucmVxdWlyZShcIi4vZm9vdGVyLnNjc3NcIik7XG5jb25zdCBjcmVhdGVHaXRodWJJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IGdpdGh1Ykl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZ2l0aHViSXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19pdGVtXCIpO1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRodWJMaW5rLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xpbmtcIik7XG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL1lhbmEtRHlhY2hva1wiKTtcbiAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnaXRodWJMb2dvLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xvZ28tZ2l0aHViXCIpO1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kKGdpdGh1YkxvZ28pO1xuICAgIGdpdGh1Ykl0ZW0uYXBwZW5kKGdpdGh1YkxpbmspO1xuICAgIHJldHVybiBnaXRodWJJdGVtO1xufTtcbmNvbnN0IGNyZWF0ZVJTU0l0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgcnNzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICByc3NJdGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2l0ZW1cIik7XG4gICAgY29uc3QgcnNzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHJzc0xpbmsuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9fbGlua1wiKTtcbiAgICByc3NMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3JvbGxpbmdzY29wZXMuY29tL1wiKTtcbiAgICBjb25zdCByc3NMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByc3NMb2dvLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xvZ28tcnNzXCIpO1xuICAgIHJzc0xpbmsuYXBwZW5kKHJzc0xvZ28pO1xuICAgIHJzc0l0ZW0uYXBwZW5kKHJzc0xpbmspO1xuICAgIHJldHVybiByc3NJdGVtO1xufTtcbmNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uSXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZGVzY3JpcHRpb25JdGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2l0ZW1cIiwgXCJmb290ZXJfX2Rlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IHNjaG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNjaG9vbC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19zcGFuXCIpO1xuICAgIHNjaG9vbC50ZXh0Q29udGVudCA9IFwiVGhlIFJvbGxpbmcgU2NvcGVzIFNjaG9vbFwiO1xuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19jb3B5cmlnaHRcIiwgXCJmb290ZXJfX3NwYW5cIik7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gXCIyMDI0XCI7XG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX3NwYW5cIik7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IFlhbmEgRHlhY2hva1wiO1xuICAgIGRlc2NyaXB0aW9uSXRlbS5hcHBlbmQoc2Nob29sLCBjb3B5cmlnaHQsIGF1dGhvcik7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uSXRlbTtcbn07XG5jb25zdCBjcmVhdGVGb290ZXJFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19saXN0XCIpO1xuICAgIGxpc3QuYXBwZW5kKGNyZWF0ZUdpdGh1Ykl0ZW0oKSwgY3JlYXRlRGVzY3JpcHRpb25JdGVtKCksIGNyZWF0ZVJTU0l0ZW0oKSk7XG4gICAgZm9vdGVyLmFwcGVuZChsaXN0KTtcbiAgICByZXR1cm4gZm9vdGVyO1xufTtcbmV4cG9ydHMuY3JlYXRlRm9vdGVyRWxlbWVudHMgPSBjcmVhdGVGb290ZXJFbGVtZW50cztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVzdWx0X3ZhbGlkYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZXN1bHQtdmFsaWRhdGlvblwiKSk7XG5jbGFzcyBGb3JtVmFsaWRhdGlvbiBleHRlbmRzIHJlc3VsdF92YWxpZGF0aW9uXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNWYWxpZFVzZXJOYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNWYWxpZFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gXCJcIjtcbiAgICB9XG4gICAgc2V0dXBWYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLW5hbWVcIik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xuICAgICAgICBjb25zdCBlcnJvclVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLW5hbWVfX2Vycm9yXCIpO1xuICAgICAgICBjb25zdCBlcnJvclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9fZXJyb3JcIik7XG4gICAgICAgIGlmICh1c2VyTmFtZUlucHV0KSB7XG4gICAgICAgICAgICB1c2VyTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdXNlck5hbWVJbnB1dDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWRVc2VyTmFtZSA9IC9eW0EtWl1bYS16QS1aLV17Mix9JC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFVzZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRpdHlJc1RydWUodXNlck5hbWVJbnB1dCwgZXJyb3JVc2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkaXR5TmFtZUlzRmFsc2UodXNlck5hbWVJbnB1dCwgZXJyb3JVc2VyTmFtZSwgdmFsdWUsIDMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJ0bkRpc2FibGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBwYXNzd29yZElucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZFBhc3N3b3JkID0gL14oPz0uKlxcZCkoPz0uKltBLVpdKS57NCx9JC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRpdHlJc1RydWUocGFzc3dvcmRJbnB1dCwgZXJyb3JQYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkaXR5UGFzc3dvcmRJc0ZhbHNlKHBhc3N3b3JkSW5wdXQsIGVycm9yUGFzc3dvcmQsIHZhbHVlLCA0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCdG5EaXNhYmxlZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZUJ0bkRpc2FibGVkKCkge1xuICAgICAgICBjb25zdCBlbnRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50ZXJfX2J0blwiKTtcbiAgICAgICAgaWYgKGVudGVyQnRuKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudXBkYXRlVmFsaWRpdHkodGhpcy5pc1ZhbGlkVXNlck5hbWUsIHRoaXMuaXNWYWxpZFBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICAgIGVudGVyQnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnRlckJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEZvcm1WYWxpZGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBSZXN1bHRWYWxpZGF0aW9uIHtcbiAgICB2YWxpZGl0eUlzVHJ1ZShpbnB1dEVsZW1lbnQsIGVycm9yRWxlbWVudCkge1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpO1xuICAgICAgICBlcnJvckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgdmFsaWRpdHlOYW1lSXNGYWxzZShpbnB1dEVsZW1lbnQsIGVycm9yRWxlbWVudCwgdmFsdWUsIHZhbGlkTGVuZ3RoKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRcIik7XG4gICAgICAgIGNvbnN0IGVycm9yQXJyYXkgPSBbXG4gICAgICAgICAgICAvXltBLVpdLy50ZXN0KHZhbHVlKSxcbiAgICAgICAgICAgIC9eW0EtWmEtei1dKiQvLnRlc3QodmFsdWUpLFxuICAgICAgICAgICAgdmFsdWUubGVuZ3RoID49IHZhbGlkTGVuZ3RoLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCIqIFRoZSBmaXJzdCBsZXR0ZXIgbXVzdCBiZSBjYXBpdGFsaXplZFwiLFxuICAgICAgICAgICAgXCIqIE9ubHkgRW5nbGlzaCBsZXR0ZXJzIGFuZCBoeXBoZW5zIGFyZSBhbGxvd2VkXCIsXG4gICAgICAgICAgICBgKiBUaGUgaW5wdXQgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mICR7dmFsaWRMZW5ndGh9IGNoYXJhY3RlcnMuYCxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVycm9yRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGVycm9yRWxlbWVudC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgICBlcnJvckVsZW1lbnQuY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSAhZXJyb3JBcnJheVtpXVxuICAgICAgICAgICAgICAgID8gZXJyb3JNZXNzYWdlc1tpXVxuICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YWxpZGl0eVBhc3N3b3JkSXNGYWxzZShpbnB1dEVsZW1lbnQsIGVycm9yRWxlbWVudCwgdmFsdWUsIHZhbGlkTGVuZ3RoKSB7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRcIik7XG4gICAgICAgIGNvbnN0IGVycm9yUGFzc3dvcmQgPSBbXG4gICAgICAgICAgICAvXig/PS4qXFxkKS8udGVzdCh2YWx1ZSksXG4gICAgICAgICAgICAvXig/PS4qW0EtWl0pLy50ZXN0KHZhbHVlKSxcbiAgICAgICAgICAgIHZhbHVlLmxlbmd0aCA+PSB2YWxpZExlbmd0aCxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlc1Bhc3N3b3JkID0gW1xuICAgICAgICAgICAgXCIqIEF0IGxlYXN0IDEgbnVtYmVyICgwLTkpXCIsXG4gICAgICAgICAgICBcIiogQXQgbGVhc3QgMSB1cHBlcmNhc2UgbGV0dGVyXCIsXG4gICAgICAgICAgICBgKiBUaGUgaW5wdXQgZmllbGQgcmVxdWlyZXMgYSBtaW5pbXVtIG9mICR7dmFsaWRMZW5ndGh9IGNoYXJhY3RlcnMuYCxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVycm9yRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGVycm9yRWxlbWVudC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgICBlcnJvckVsZW1lbnQuY2hpbGRyZW5baV0udGV4dENvbnRlbnQgPSAhZXJyb3JQYXNzd29yZFtpXVxuICAgICAgICAgICAgICAgID8gZXJyb3JNZXNzYWdlc1Bhc3N3b3JkW2ldXG4gICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVZhbGlkaXR5KGlzVmFsaWRGaXJzdCwgaXNWYWxpZFNlY29uZCkge1xuICAgICAgICByZXR1cm4gaXNWYWxpZEZpcnN0ICYmIGlzVmFsaWRTZWNvbmQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzdWx0VmFsaWRhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbG9nb3V0X2J1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xvZ291dC1idXR0b24vbG9nb3V0X2J1dHRvblwiKSk7XG5jb25zdCBpbmZvX2J0bl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmZvLWJ0bi9pbmZvLWJ0blwiKSk7XG5yZXF1aXJlKFwiLi9oZWFkZXIuc2Nzc1wiKTtcbmNsYXNzIEhlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICAgICAgdGhpcy5sb2dvdXRCdXR0b24gPSBuZXcgbG9nb3V0X2J1dHRvbl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5pbmZvQnV0dG9uID0gbmV3IGluZm9fYnRuXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBjcmVhdGVIZWFkZXJFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX2FydGljbGVcIik7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX19sYWJlbFwiLCBcImhlYWRlcl9fdXNlci1uYW1lXCIpO1xuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IGBVc2VyOmA7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX19sYWJlbFwiLCBcImhlYWRlcl9fdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJGdW4gQ2hhdFwiO1xuICAgICAgICBhcnRpY2xlLmFwcGVuZCh1c2VyTmFtZSwgdGl0bGUpO1xuICAgICAgICB0aGlzLmhlYWRlci5hcHBlbmQoYXJ0aWNsZSwgdGhpcy5pbmZvQnV0dG9uLmdldFJvb3RFbGVtZW50KCksIHRoaXMubG9nb3V0QnV0dG9uLmdldFJvb3RFbGVtZW50KCkpO1xuICAgIH1cbiAgICBnZXRSb290RWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJFbGVtZW50cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXI7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYnV0dG9uL2J1dHRvblwiKSk7XG5jbGFzcyBMb2dvdXRCdXR0b24gZXh0ZW5kcyBidXR0b25fMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJsb2dvdXRfX2J0blwiLCBcImJ0blwiLCBcIkxvZyBvdXRcIik7XG4gICAgICAgIHRoaXMub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwibG9naW5cIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTG9nb3V0QnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYnV0dG9uL2J1dHRvblwiKSk7XG5jbGFzcyBJbmZvQnV0dG9uIGV4dGVuZHMgYnV0dG9uXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwiaW5mb19fYnRuXCIsIFwiYnRuXCIsIFwiSW5mb1wiKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJpbmZvXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEluZm9CdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZS5zY3NzXCIpO1xuY29uc3QgYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29yZS9hcHAvYXBwXCIpKTtcbmNvbnN0IGFwcCA9IG5ldyBhcHBfMS5kZWZhdWx0KCk7XG5hcHAucnVuKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvcGFnZS9wYWdlXCIpKTtcbnJlcXVpcmUoXCIuL2Vycm9yLnNjc3NcIik7XG5jbGFzcyBFcnJvclBhZ2UgZXh0ZW5kcyBwYWdlXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgc3VwZXIoaWQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZChcImVycm9yX19ibG9ja1wiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cbn1cbkVycm9yUGFnZS5UZXh0T2JqZWN0ID0ge1xuICAgIFwiNDA0XCI6IFwiRXJyb3IhIFRoZSBwYWdlIHdhcyBub3QgZm91bmQuXCIsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3JQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL3BhZ2UvcGFnZVwiKSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIikpO1xucmVxdWlyZShcIi4vaW5mby1wYWdlLnNjc3NcIik7XG5jbGFzcyBJbmZvUGFnZSBleHRlbmRzIHBhZ2VfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xuICAgICAgICBzdXBlcihpZCk7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IGJ1dHRvbl8xLmRlZmF1bHQoXCJiYWNrX19idG5cIiwgXCJidG5cIiwgXCJCYWNrXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJtYWluXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVJbmZvRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9CbG9jay5jbGFzc0xpc3QuYWRkKFwiaW5mb19fYmxvY2tcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb19fdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJGdW4gY2hhdFwiO1xuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvX190ZXh0XCIpO1xuICAgICAgICBpbmZvLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiSW50cm9kdWNpbmcgb3VyIGNoYXQgcGxhdGZvcm3igJRhIHNwYWNlIGRlc2lnbmVkIGZvciBzZWFtbGVzcyBjb21tdW5pY2F0aW9uIGFtb25nIGZyaWVuZHMuIFBpY3R1cmUgdGhpczogZW5nYWdpbmcgY29udmVyc2F0aW9ucywgcXVpY2sgZXhjaGFuZ2VzLCBhbmQgc2hhcmVkIG1vbWVudHPigJRhbGwgd2l0aGluIHRoZSBjb25maW5lcyBvZiBvdXIgY2hhdCBlbnZpcm9ubWVudC5cIjtcbiAgICAgICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBnaXRodWJMaW5rLmNsYXNzTGlzdC5hZGQoXCJpbmZvX19saW5rXCIpO1xuICAgICAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vWWFuYS1EeWFjaG9rXCIpO1xuICAgICAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgZ2l0aHViTGluay50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBieSBZYW5hIER5YWNob2tcIjtcbiAgICAgICAgaW5mb0Jsb2NrLmFwcGVuZCh0aXRsZSwgaW5mbywgZ2l0aHViTGluayk7XG4gICAgICAgIHJldHVybiBpbmZvQmxvY2s7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKHRoaXMuY3JlYXRlSW5mb0VsZW1lbnRzKCksIHRoaXMuYnV0dG9uLmdldFJvb3RFbGVtZW50KCkpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQod3JhcHBlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG59XG5JbmZvUGFnZS5UZXh0T2JqZWN0ID0ge1xuICAgIEluZm9UaXRsZTogXCJJbmZvIFBhZ2VcIixcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBJbmZvUGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9wYWdlL3BhZ2VcIikpO1xuY29uc3QgaW5mb19idG5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2luZm8tYnRuL2luZm8tYnRuXCIpKTtcbmNvbnN0IGVudGVyX2J0bl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvZW50ZXItYnRuL2VudGVyLWJ0blwiKSk7XG5jb25zdCBpbnB1dF9maWVsZF9jcmVhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvY3JlYXRlLWxvZ2luLWlucHV0L2lucHV0LWZpZWxkLWNyZWF0ZVwiKTtcbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIHBhZ2VfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xuICAgICAgICBzdXBlcihpZCk7XG4gICAgICAgIHRoaXMuaW5mb0J0biA9IG5ldyBpbmZvX2J0bl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5lbnRlckJ0biA9IG5ldyBlbnRlcl9idG5fMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJsb2dpbl9fYnV0dG9uc1wiKTtcbiAgICAgICAgYnV0dG9ucy5hcHBlbmQodGhpcy5lbnRlckJ0bi5nZXRSb290RWxlbWVudCgpLCB0aGlzLmluZm9CdG4uZ2V0Um9vdEVsZW1lbnQoKSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKCgwLCBpbnB1dF9maWVsZF9jcmVhdGVfMS5jcmVhdGVJbnB1dEZpZWxkKSgpLCBidXR0b25zKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxufVxuTG9naW5QYWdlLlRleHRPYmplY3QgPSB7XG4gICAgTG9naW5UaXRsZTogXCJMb2dpbiBQYWdlXCIsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9naW5QYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL3BhZ2UvcGFnZVwiKSk7XG5jb25zdCBoZWFkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIikpO1xuY29uc3QgY29udGVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvY29udGVudC1ibG9jay9jb250ZW50XCIpKTtcbmNvbnN0IGZvb3Rlcl8xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCIpO1xuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBwYWdlXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgc3VwZXIoaWQpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBoZWFkZXJfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IG5ldyBjb250ZW50XzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmhlYWRlci5nZXRSb290RWxlbWVudCgpLCB0aGlzLmNvbnRlbnQuZ2V0Um9vdEVsZW1lbnQoKSwgKDAsIGZvb3Rlcl8xLmNyZWF0ZUZvb3RlckVsZW1lbnRzKSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cbn1cbk1haW5QYWdlLlRleHRPYmplY3QgPSB7XG4gICAgTWFpblRpdGxlOiBcIk1haW4gUGFnZVwiLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1haW5QYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlkID0gaWQ7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cbn1cblBhZ2UuVGV4dE9iamVjdCA9IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==