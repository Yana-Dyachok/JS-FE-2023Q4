/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/aside-content/aside-content.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/aside-content/aside-content.scss ***!
  \*******************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.aside-user {
  padding: 0.5rem 1rem;
  border: 0.2rem solid #9eaba2;
  border-radius: 1rem;
  color: #6b2623;
  font-size: 2rem;
}
.aside-user__search {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 0.2rem solid #9eaba2;
  border-radius: 1rem;
}
.aside-user__list {
  height: 60vh;
  overflow-y: scroll;
  padding: 0 1rem;
}
.aside-user__list::-webkit-scrollbar {
  padding: 1rem;
  width: 1rem;
}
.aside-user__list::-webkit-scrollbar-thumb {
  background-color: #bdd1c5;
  border-radius: 0.5rem;
}
.aside-user__list::-webkit-scrollbar-track {
  background-color: #9eaba2;
}
.aside-user__status {
  margin-top: 1.5rem;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  z-index: -1;
}
.aside-user__item {
  display: grid;
  grid-template-columns: 0.1fr 3fr 1fr;
  align-content: baseline;
}
.aside-user__name {
  padding-left: 0.5rem;
}

.active {
  background-color: #19e957;
}

.inactive {
  background-color: #a36361;
}

.has-messages {
  margin-top: 1.7rem;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 50%;
  background-color: #19e957;
  z-index: -1;
}`, "",{"version":3,"sources":["webpack://./src/core/components/aside-content/aside-content.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AACA;EACI,oBAAA;EACA,4BAAA;EACA,mBAAA;EACA,cCDQ;EDER,eAAA;AAAJ;AAEI;EACI,eAAA;EACA,mBAAA;EACA,4BAAA;EACA,mBAAA;AAAR;AAEI;EACI,YAAA;EACA,kBAAA;EACA,eAAA;AAAR;AAEQ;EACI,aAAA;EACA,WAAA;AAAZ;AAGQ;EACI,yBCpBM;EDqBN,qBAAA;AADZ;AAIQ;EACI,yBCxBM;ADsBlB;AAKI;EACI,kBAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAHR;AAKI;EACI,aAAA;EACA,oCAAA;EACA,uBAAA;AAHR;AAKI;EACI,oBAAA;AAHR;;AAOA;EACI,yBC7Cc;ADyClB;;AAOA;EACI,yBCrDQ;ADiDZ;;AAOA;EACI,kBAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBC5Dc;ED6Dd,WAAA;AAJJ","sourcesContent":["@import '../../../styles/colors.scss';\r\n.aside-user {\r\n    padding: 0.5rem 1rem;\r\n    border: 0.2rem solid $c-green-cyan-500;\r\n    border-radius: 1rem;\r\n    color: $c-pink-900;\r\n    font-size: 2rem;\r\n\r\n    &__search {\r\n        padding: 0.5rem;\r\n        margin-bottom: 1rem;\r\n        border: 0.2rem solid $c-green-cyan-500;\r\n        border-radius: 1rem;\r\n    }\r\n    &__list {\r\n        height: 60vh;\r\n        overflow-y: scroll;\r\n        padding: 0 1rem;\r\n\r\n        &::-webkit-scrollbar {\r\n            padding: 1rem;\r\n            width: 1rem;\r\n        }\r\n\r\n        &::-webkit-scrollbar-thumb {\r\n            background-color: $c-green-cyan-100;\r\n            border-radius: 0.5rem;\r\n        }\r\n\r\n        &::-webkit-scrollbar-track {\r\n            background-color: $c-green-cyan-500;\r\n        }\r\n    }\r\n    &__status {\r\n        margin-top: 1.5rem;\r\n        transform: translateY(-50%);\r\n        width: 1rem;\r\n        height: 1rem;\r\n        border-radius: 50%;\r\n        z-index: -1;\r\n    }\r\n    &__item {\r\n        display: grid;\r\n        grid-template-columns: 0.1fr 3fr 1fr;\r\n        align-content: baseline;\r\n    }\r\n    &__name {\r\n        padding-left: 0.5rem;\r\n    }\r\n}\r\n\r\n.active {\r\n    background-color: $c-green-cyan-800;\r\n}\r\n\r\n.inactive {\r\n    background-color: $c-pink-800;\r\n}\r\n\r\n.has-messages {\r\n    margin-top: 1.7rem;\r\n    transform: translateY(-50%);\r\n    width: 2rem;\r\n    height: 2rem;\r\n    font-size: 1.4rem;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    background-color: $c-green-cyan-800;\r\n    z-index: -1;\r\n}\r\n","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  border: 0.1rem solid #bdd1c5;
  border-radius: 2rem;
}
.login__form > label {
  text-align: left;
  font-size: 2rem;
  color: #a36361;
}
.login__input {
  width: 100%;
  padding: 1rem;
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
.login__error {
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  text-align: left;
  color: #bf1d1d;
}

.enter__btn {
  width: 100%;
}

@media (max-width: 500px) {
  .login__input {
    padding: 1rem;
    font-size: 1.8rem;
  }
  .login__input__error {
    font-size: 1.3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/core/components/create-login-input/input_field.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEI;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,4BAAA;EACA,mBAAA;AADR;AAGQ;EACI,gBAAA;EACA,eAAA;EACA,cCVA;ADSZ;AAKI;EACI,WAAA;EACA,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,iBAAA;EACA,cCnBI;EDoBJ,yBCxBE;EDyBF,4BAAA;EACA,mBAAA;AAHR;AAKQ;EACI,4BAAA;AAHZ;AAMQ;EACI,wBAAA;AAJZ;AAOQ;EACI,4BAAA;AALZ;AASI;EACI,oBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAPR;;AAWA;EACI,WAAA;AARJ;;AAWA;EAEQ;IACI,aAAA;IACA,iBAAA;EATV;EAWM;IACI,iBAAA;EATV;AACF","sourcesContent":["@import '../../../styles/colors.scss';\r\n.login {\r\n    &__form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding: 1rem 2rem;\r\n        margin-bottom: 2rem;\r\n        border: 0.1rem solid $c-green-cyan-100;\r\n        border-radius: 2rem;\r\n\r\n        & > label {\r\n            text-align: left;\r\n            font-size: 2rem;\r\n            color: $c-pink-800;\r\n        }\r\n    }\r\n\r\n    &__input {\r\n        width: 100%;\r\n        padding: 1rem;\r\n        margin: 0.8rem 0;\r\n        box-sizing: border-box;\r\n        font-size: 2.5rem;\r\n        color: $c-pink-900;\r\n        background-color: $c-white;\r\n        border: 0.2rem solid $c-green-cyan-100;\r\n        border-radius: 1rem;\r\n\r\n        &:focus {\r\n            border: 0.5rem solid $c-yellow;\r\n        }\r\n\r\n        &.error {\r\n            border: 0.3rem solid red;\r\n        }\r\n\r\n        &.valid {\r\n            border: 0.3rem solid $c-green-cyan-800;\r\n        }\r\n    }\r\n\r\n    &__error {\r\n        padding: 0.5rem 1rem;\r\n        font-size: 1.6rem;\r\n        text-align: left;\r\n        color: #bf1d1d;\r\n    }\r\n}\r\n\r\n.enter__btn {\r\n    width: 100%;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .login {        \r\n        &__input {\r\n            padding: 1rem;\r\n            font-size: 1.8rem;\r\n    \r\n        &__error {\r\n            font-size: 1.3rem;        }\r\n    }\r\n}\r\n}","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/dialog-content/dialog-container.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/dialog-content/dialog-container.scss ***!
  \***********************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.dialog__container {
  display: grid;
  grid-template-rows: 0.3fr 4fr 0.3fr;
  padding: 0.5rem;
  border: 0.2rem solid #9eaba2;
  border-radius: 1rem;
  color: #6b2623;
  font-size: 2rem;
}
.dialog__header {
  padding: 0.5rem 1rem;
  border-bottom: 0.2rem solid #9eaba2;
}
.dialog__content {
  overflow-y: scroll;
  padding: 0 1rem;
  height: 55vh;
}
.dialog__content::-webkit-scrollbar {
  padding: 1rem;
  width: 1rem;
}
.dialog__content::-webkit-scrollbar-thumb {
  background-color: #bdd1c5;
  border-radius: 0.5rem;
}
.dialog__content::-webkit-scrollbar-track {
  background-color: #9eaba2;
}
.dialog__label {
  position: relative;
  top: 50%;
  left: 30%;
  color: #a36361;
  z-index: -1;
}
.dialog__form {
  display: grid;
  grid-template-columns: 3fr 0.5fr;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-top: 0.2rem solid #9eaba2;
}
.dialog__input {
  padding: 0.5rem;
  border: 0.2rem solid #9eaba2;
  border-radius: 1rem;
}

.message__block {
  width: 100%;
  padding: 1rem;
}
.message__container {
  width: 50%;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  margin-left: auto;
  padding: 0.5rem;
  background-color: #9eaba2;
  border-radius: 1rem;
}
.message__header, .message__footer {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0.5rem;
  font-size: 1.2rem;
}
.message__text {
  padding: 0 0.5rem;
  background-color: #bdd1c5;
}

.users-mesaage {
  margin-right: auto;
}`, "",{"version":3,"sources":["webpack://./src/core/components/dialog-content/dialog-container.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEI;EACI,aAAA;EACA,mCAAA;EACA,eAAA;EACA,4BAAA;EACA,mBAAA;EACA,cCJI;EDKJ,eAAA;AADR;AAII;EACI,oBAAA;EACA,mCAAA;AAFR;AAKI;EACI,kBAAA;EACA,eAAA;EACA,YAAA;AAHR;AAIQ;EACI,aAAA;EACA,WAAA;AAFZ;AAKQ;EACI,yBCtBM;EDuBN,qBAAA;AAHZ;AAMQ;EACI,yBC1BM;ADsBlB;AAQI;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,cCrCI;EDsCJ,WAAA;AANR;AASI;EACI,aAAA;EACA,gCAAA;EACA,SAAA;EACA,oBAAA;EACA,gCAAA;AAPR;AAUI;EACI,eAAA;EACA,4BAAA;EACA,mBAAA;AARR;;AAaI;EACI,WAAA;EACA,aAAA;AAVR;AAaI;EACI,UAAA;EACA,aAAA;EACA,mCAAA;EACA,iBAAA;EACA,eAAA;EACA,yBCjEU;EDkEV,mBAAA;AAXR;AAcI;EAEI,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,iBAAA;AAbR;AAgBI;EACI,iBAAA;EACA,yBChFU;ADkElB;;AAkBA;EACI,kBAAA;AAfJ","sourcesContent":["@import '../../../styles/colors.scss';\r\n.dialog {\r\n    &__container {\r\n        display: grid;\r\n        grid-template-rows: 0.3fr 4fr 0.3fr;\r\n        padding: 0.5rem;\r\n        border: 0.2rem solid $c-green-cyan-500;\r\n        border-radius: 1rem;\r\n        color: $c-pink-900;\r\n        font-size: 2rem;\r\n    }\r\n\r\n    &__header {\r\n        padding: 0.5rem 1rem;\r\n        border-bottom: 0.2rem solid $c-green-cyan-500;\r\n    }\r\n\r\n    &__content {\r\n        overflow-y: scroll;\r\n        padding: 0 1rem;\r\n        height: 55vh;\r\n        &::-webkit-scrollbar {\r\n            padding: 1rem;\r\n            width: 1rem;\r\n        }\r\n\r\n        &::-webkit-scrollbar-thumb {\r\n            background-color: $c-green-cyan-100;\r\n            border-radius: 0.5rem;\r\n        }\r\n\r\n        &::-webkit-scrollbar-track {\r\n            background-color: $c-green-cyan-500;\r\n        }\r\n    }\r\n\r\n    &__label {\r\n        position: relative;\r\n        top: 50%;\r\n        left: 30%;\r\n        color: $c-pink-800;\r\n        z-index: -1;\r\n    }\r\n\r\n    &__form {\r\n        display: grid;\r\n        grid-template-columns: 3fr 0.5fr;\r\n        gap: 1rem;\r\n        padding: 0.5rem 1rem;\r\n        border-top: 0.2rem solid $c-green-cyan-500;\r\n    }\r\n\r\n    &__input {\r\n        padding: 0.5rem;\r\n        border: 0.2rem solid $c-green-cyan-500;\r\n        border-radius: 1rem;\r\n    }\r\n}\r\n\r\n.message {\r\n    &__block {\r\n        width: 100%;\r\n        padding: 1rem;\r\n    }\r\n\r\n    &__container {\r\n        width: 50%;\r\n        display: grid;\r\n        grid-template-rows: 0.5fr 1fr 0.5fr;\r\n        margin-left: auto;\r\n        padding: 0.5rem;\r\n        background-color: $c-green-cyan-500;\r\n        border-radius: 1rem;\r\n    }\r\n\r\n    &__header,\r\n    &__footer {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 0.1rem 0.5rem;\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    &__text {\r\n        padding: 0  0.5rem;\r\n        background-color: $c-green-cyan-100;\r\n    }\r\n}\r\n\r\n.users-mesaage{\r\n    margin-right: auto;\r\n}","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
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
  width: 100%;
  padding: 0.5rem 1rem;
  border: 0.2rem solid #9eaba2;
  border-radius: 1rem;
}
.footer__list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-items: center;
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
}`, "",{"version":3,"sources":["webpack://./src/core/components/footer/footer.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACI,WAAA;EACA,oBAAA;EACA,4BAAA;EACA,mBAAA;AAAJ;AAEI;EACI,WAAA;EACA,aAAA;EACA,kCAAA;EACA,mBAAA;AAAR;AAGI;EACI,aAAA;EACA,uBAAA;EACA,gCAAA;AADR;AAII;EACI,kBAAA;AAFR;AAIQ;EACI,YAAA;AAFZ;AAMI;EAEI,+CAAA;EACA,sBAAA;AALR;AAQI;EACI,YAAA;EACA,YAAA;EACA,oEAAA;AANR;AASI;EACI,WAAA;EACA,cAAA;EACA,oEAAA;AAPR;;AAYA;EAGQ;IACG,iBAAA;EAXT;EAcM;IACG,qBAAA;EAZT;EAeM;IACI,qBAAA;EAbV;AACF","sourcesContent":["@import \"../../../styles/colors.scss\";\r\n\r\n.footer {\r\n    width: 100%;\r\n    padding: 0.5rem 1rem;\r\n    border: 0.2rem solid $c-green-cyan-500;\r\n    border-radius: 1rem;\r\n\r\n    &__list {\r\n        width: 100%;\r\n        display: grid;\r\n        grid-template-columns: 1fr 6fr 1fr; \r\n        align-items: center;\r\n    }\r\n\r\n    &__span {\r\n        display: flex;\r\n        justify-content: center;\r\n        font-family: \"tenpounds regular\";\r\n    }\r\n\r\n    &__copyright {\r\n        text-align: center;\r\n\r\n        &:before {\r\n            content: '©';\r\n        }\r\n    }\r\n\r\n    &__item:not(&__description):hover,\r\n    &__item:not(&__description):focus {\r\n        filter: drop-shadow(0.3rem 0.3rem 1.3rem black);\r\n        transform: scale(1.05);\r\n    }\r\n\r\n    &__logo-rss {\r\n        width: 10rem;\r\n        height: 4rem;\r\n        background: url(\"../../../assets/svg/rs-school.svg\") no-repeat center;\r\n    }\r\n\r\n    &__logo-github {\r\n        width: 5rem;\r\n        height: 4.6rem;\r\n        background: url(\"../../../assets/svg/icon-github.svg\") no-repeat center;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 500px) {\r\n    .footer {\r\n    \r\n        &__list {\r\n           font-size: 1.2rem;\r\n        }\r\n    \r\n        &__logo-rss {\r\n           background-size: 6rem;\r\n        }\r\n    \r\n        &__logo-github {\r\n            background-size: 3rem;\r\n        }\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
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
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 0.5fr 0.5fr;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem;
  border: 0.2rem solid #9eaba2;
  border-radius: 1rem;
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
}`, "",{"version":3,"sources":["webpack://./src/core/components/header/header.scss"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,aAAA;EACA,sCAAA;EACA,qBAAA;EACA,SAAA;EACA,aAAA;EACA,4BAAA;EACA,mBAAA;AADJ;AAGI;EACI,aAAA;EACA,8BAAA;EACA,eAAA;EACA,2DAAA;EAKA,6BAAA;EACA,qBAAA;EACA,kBAAA;AALR;;AASA;EACI;IACI,iBAAA;EANN;AACF","sourcesContent":["@import '../../../styles/colors.scss';\r\n\r\n.header {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 4fr 0.5fr 0.5fr;\r\n    align-items: baseline;\r\n    gap: 1rem;\r\n    padding: 1rem;\r\n    border: 0.2rem solid $c-green-cyan-500;\r\n    border-radius: 1rem;\r\n\r\n    &__article {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        font-size: 2rem;\r\n        background-image: linear-gradient(\r\n            180deg,\r\n            $c-pink-900,\r\n            $c-green-cyan-800\r\n        );\r\n        -webkit-background-clip: text;\r\n        background-clip: text;\r\n        color: transparent;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .header__article {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.wrapper {
  height: 80vh;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.scss","webpack://./src/styles/style.scss","webpack://./src/styles/fonts.scss","webpack://./src/styles/common.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;ACCJ;;ADEE;;;EAGE,mBAAA;ACCJ;;ADEE;EACE,SAAA;ACCJ;;ADEE;EACE,qBAAA;ACCJ;;ADEE;EACE,SAAA;EACA,UAAA;ACCJ;;ADEE;EACE,SAAA;ACCJ;;ADEE;EACE,qBAAA;EACA,cAAA;ACCJ;;ADEE;;EAEE,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,SAAA;EACA,6BAAA;EACA,cAAA;EACA,aAAA;ACCJ;;ADEE;EACE,cAAA;EACA,eAAA;ACCJ;;ADEE;;;EAGE,SAAA;EACA,UAAA;EACA,gBAAA;ACCJ;;ACzDA;EACI,gCAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;AD2DJ;ACxDA;EACI,2BAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;ADyDJ;AErEA;EACI,uBAAA;EACA,eAAA;AFuEJ;;AEpEA;EACI,cAAA;EACA,kBAAA;EACA,2BAAA;EACA,iBAAA;EACA,gBAAA;EACA,4BAAA;EACA,8BAAA;EACA,gBAAA;EACA,YCRM;EDSN,sEAAA;AFuEJ;;AEpEA;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AFuEJ;;AEpEA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AFuEJ;;AC1GA;EACI,gCAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;AD4GJ;ACzGA;EACI,2BAAA;EACA,oHAAA;EAEA,gBAAA;EACA,kBAAA;EACA,kBAAA;AD0GJ","sourcesContent":[":root {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  ul li {\r\n    list-style-type: none;\r\n  }\r\n  \r\n  ul {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  p {\r\n    margin: 0;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  button,\r\n  input {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    border: none;\r\n    outline: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: transparent;\r\n    color: inherit;\r\n    font: inherit;\r\n  }\r\n  \r\n  img {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3 {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: 400;\r\n  }  \r\n ",":root {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n}\n\nul li {\n  list-style-type: none;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton,\ninput {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  color: inherit;\n  font: inherit;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: \"tenpounds regular\";\n  src: url(\"../assets/fonts/tenpounds-regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/tenpounds-regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"salina trial\";\n  src: url(\"../assets/fonts/Salina-Trial-Regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/Salina-Trial-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}\nhtml {\n  scroll-behavior: smooth;\n  font-size: 10px;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 1rem 2rem;\n  font-family: \"salina trial\";\n  font-size: 1.5rem;\n  font-weight: 400;\n  -webkit-font-smoothing: auto;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: black;\n  background-image: linear-gradient(to right, #bdd1c5, #eecc8c, #a36361);\n}\n\n.container {\n  max-width: 90rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n\n.wrapper {\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: \"tenpounds regular\";\n  src: url(\"../assets/fonts/tenpounds-regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/tenpounds-regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"salina trial\";\n  src: url(\"../assets/fonts/Salina-Trial-Regular.woff2\") format(\"woff2\"), url(\"../assets/fonts/Salina-Trial-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}","@font-face {\r\n    font-family: \"tenpounds regular\";\r\n    src: url(\"../assets/fonts/tenpounds-regular.woff2\") format(\"woff2\"),\r\n        url(\"../assets/fonts/tenpounds-regular.woff\") format(\"woff\");\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"salina trial\";\r\n    src: url(\"../assets/fonts/Salina-Trial-Regular.woff2\") format(\"woff2\"),\r\n        url(\"../assets/fonts/Salina-Trial-Regular.woff\") format(\"woff\");\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    font-style: normal;\r\n}","@import \"./fonts.scss\";\r\n@import \"./colors.scss\";\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n    font-size: 10px;\r\n}\r\n\r\nbody {\r\n    margin: 0 auto;\r\n    padding: 1rem 2rem;\r\n    font-family: \"salina trial\";\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n    -webkit-font-smoothing: auto;\r\n    -webkit-text-size-adjust: 100%;\r\n    line-height: 1.5;\r\n    color: $c-black;\r\n    background-image: linear-gradient(to right, $c-green-cyan-100, $c-yellow, $c-pink-800);\r\n}\r\n\r\n.container {\r\n    max-width: 90rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 1rem;\r\n}\r\n\r\n.wrapper {\r\n    height: 80vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/view/main-view/content.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/view/main-view/content.scss ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main {
  width: 100%;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  margin: 1rem 0;
}`, "",{"version":3,"sources":["webpack://./src/view/main-view/content.scss"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;EACA,cAAA;AADJ","sourcesContent":["@import \"../../styles/colors.scss\";\r\n\r\n.main {\r\n    width: 100%;\r\n    border-radius: 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr; \r\n    gap: 1rem;\r\n    margin: 1rem 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/view/popup/popup.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/view/popup/popup.scss ***!
  \****************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.popup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(37, 34, 34, 0.7);
  opacity: 1;
  visibility: visible;
}
.popup__body {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}
.popup__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  position: relative;
  font-size: 1.8rem;
  text-align: center;
  color: #6b2623;
  background-color: #bdd1c5;
  border-radius: 1rem;
}
.popup__text {
  padding: 2rem;
  font-size: 3rem;
}`, "",{"version":3,"sources":["webpack://./src/view/popup/popup.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,uCAAA;EACA,UAAA;EACA,mBAAA;AADJ;AAGI;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AADR;AAII;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cCxBI;EDyBJ,yBCxBU;EDyBV,mBAAA;AAFR;AAKI;EACI,aAAA;EACA,eAAA;AAHR","sourcesContent":["@import '../../styles/colors.scss';\r\n\r\n.popup {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(37, 34, 34, 0.7);\r\n    opacity: 1;\r\n    visibility: visible;\r\n\r\n    &__body {\r\n        min-height: 100%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 2rem 1rem;\r\n    }\r\n\r\n    &__content {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        padding: 3rem;\r\n        position: relative;\r\n        font-size: 1.8rem;\r\n        text-align: center;\r\n        color: $c-pink-900;\r\n        background-color: $c-green-cyan-100;\r\n        border-radius: 1rem;\r\n    }\r\n\r\n    &__text {\r\n        padding: 2rem;\r\n        font-size: 3rem;\r\n    }\r\n}\r\n","$c-white: #f3dcdc;\r\n$c-pink-100:#e8b298;\r\n$c-pink-200:#d3a29d;\r\n$c-pink-800:#a36361;\r\n$c-pink-900:#6b2623;\r\n$c-green-cyan-100:#bdd1c5;\r\n$c-green-cyan-500:#9eaba2;\r\n$c-green-cyan-800:#19e957;\r\n$c-yellow:#eecc8c;\r\n$c-black: black;\r\n"],"sourceRoot":""}]);
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

/***/ "./src/core/components/aside-content/aside-content.scss":
/*!**************************************************************!*\
  !*** ./src/core/components/aside-content/aside-content.scss ***!
  \**************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./aside-content.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/aside-content/aside-content.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/core/components/dialog-content/dialog-container.scss":
/*!******************************************************************!*\
  !*** ./src/core/components/dialog-content/dialog-container.scss ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_container_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./dialog-container.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/components/dialog-content/dialog-container.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/view/main-view/content.scss":
/*!*****************************************!*\
  !*** ./src/view/main-view/content.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./content.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/view/main-view/content.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_content_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/popup/popup.scss":
/*!***********************************!*\
  !*** ./src/view/popup/popup.scss ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/view/popup/popup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_popup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/api/const.ts":
/*!**************************!*\
  !*** ./src/api/const.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SOCKET_URL = void 0;
exports.SOCKET_URL = new WebSocket("ws://localhost:4000");


/***/ }),

/***/ "./src/api/request.ts":
/*!****************************!*\
  !*** ./src/api/request.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUsersRequest = exports.getExternalRequest = exports.getRequest = void 0;
const getRequest = (id, login, password, messageType) => ({
    id,
    type: messageType,
    payload: {
        user: {
            login,
            password,
        },
    },
});
exports.getRequest = getRequest;
const getExternalRequest = (login, isLogined, messageType) => ({
    id: null,
    type: messageType,
    payload: {
        user: {
            login,
            isLogined,
        },
    },
});
exports.getExternalRequest = getExternalRequest;
{
}
const getUsersRequest = (id, messageType) => ({
    id,
    type: messageType,
    payload: null,
});
exports.getUsersRequest = getUsersRequest;


/***/ }),

/***/ "./src/api/websocket.ts":
/*!******************************!*\
  !*** ./src/api/websocket.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ws = void 0;
const state_1 = __webpack_require__(/*! ../state/state */ "./src/state/state.ts");
const const_1 = __webpack_require__(/*! ./const */ "./src/api/const.ts");
const enum_1 = __webpack_require__(/*! ../types/enum */ "./src/types/enum.ts");
const request_1 = __webpack_require__(/*! ./request */ "./src/api/request.ts");
const session_storage_1 = __webpack_require__(/*! ../utils/session-storage */ "./src/utils/session-storage.ts");
const popup_1 = __webpack_require__(/*! ../view/popup/popup */ "./src/view/popup/popup.ts");
class Websocket {
    constructor() {
        this.onMessage = (e) => {
            const response = JSON.parse(e.data);
            if (response.type === enum_1.MessageType.logout) {
                const { payload } = response;
                const { user } = payload;
                const { login, isLogined } = user;
                state_1.state.setUser(user);
                if (!isLogined)
                    window.location.hash = "login";
            }
            if (response.type === enum_1.MessageType.login) {
                const { payload } = response;
                const { user } = payload;
                const { login, isLogined } = user;
                state_1.state.setUser(user);
                if (isLogined)
                    window.location.hash = "main";
            }
            if (response.type === enum_1.MessageType.external_login) {
                const { payload } = response;
                const { user } = payload;
                const { login, isLogined } = user;
                this.externalLogin(login, isLogined);
            }
            if (response.type === enum_1.MessageType.inactive_user) {
                const { payload } = response;
                const { users } = payload;
                state_1.state.setInactiveUsers(users);
            }
            if (response.type === enum_1.MessageType.active_user) {
                const { payload } = response;
                const { users } = payload;
                state_1.state.setActiveUsers(users);
            }
            if (response.type === enum_1.MessageType.error) {
                const { payload } = response;
                window.location.hash = "login";
                if (payload.error === "incorrect password")
                    popup_1.popup.createPopupElements(payload.error);
            }
        };
        this.socket = const_1.SOCKET_URL;
        this.initListeners();
    }
    initListeners() {
        this.socket.addEventListener("message", this.onMessage);
        this.socket.addEventListener("close", (error) => {
            /* eslint-disable */ console.log(...oo_oo(`1217882926_21_6_21_30_4`, ` ${error}`));
        });
    }
    logIn(login, password) {
        const id = Date.now().toString();
        session_storage_1.st.saveUser({ id, login, password });
        this.socket.send(JSON.stringify((0, request_1.getRequest)(id, login, password, enum_1.MessageType.login)));
    }
    logOut() {
        const userCurrent = session_storage_1.st.getUser();
        const request = {
            id: userCurrent === null || userCurrent === void 0 ? void 0 : userCurrent.id,
            type: enum_1.MessageType.logout,
            payload: {
                user: {
                    login: userCurrent === null || userCurrent === void 0 ? void 0 : userCurrent.login,
                    password: userCurrent === null || userCurrent === void 0 ? void 0 : userCurrent.password,
                },
            },
        };
        this.socket.send(JSON.stringify(request));
        session_storage_1.st.removeUser();
    }
    externalLogin(login, isLogined) {
        this.socket.send(JSON.stringify((0, request_1.getExternalRequest)(login, isLogined, enum_1.MessageType.external_login)));
    }
    getActiveUsers() {
        const id = Date.now().toString();
        this.socket.send(JSON.stringify((0, request_1.getUsersRequest)(id, enum_1.MessageType.active_user)));
    }
    getInActiveUsers() {
        const id = Date.now().toString();
        this.socket.send(JSON.stringify((0, request_1.getUsersRequest)(id, enum_1.MessageType.inactive_user)));
    }
}
exports.ws = new Websocket();
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() { try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x31a8a8=_0x28e3;(function(_0x3c122b,_0x38262d){var _0x4a1953=_0x28e3,_0x35d273=_0x3c122b();while(!![]){try{var _0x4e8438=parseInt(_0x4a1953(0x1f1))/0x1*(parseInt(_0x4a1953(0x1cb))/0x2)+-parseInt(_0x4a1953(0x1d8))/0x3*(-parseInt(_0x4a1953(0x248))/0x4)+-parseInt(_0x4a1953(0x26c))/0x5+parseInt(_0x4a1953(0x272))/0x6*(-parseInt(_0x4a1953(0x1d9))/0x7)+-parseInt(_0x4a1953(0x274))/0x8*(-parseInt(_0x4a1953(0x278))/0x9)+-parseInt(_0x4a1953(0x260))/0xa+parseInt(_0x4a1953(0x1b7))/0xb;if(_0x4e8438===_0x38262d)break;else _0x35d273['push'](_0x35d273['shift']());}catch(_0x5cbe02){_0x35d273['push'](_0x35d273['shift']());}}}(_0x5dfd,0x6e0cb));function _0x5dfd(){var _0xfebe52=['Buffer','getter','_quotedRegExp','prototype','log','env','elements','[object\\x20Set]','getPrototypeOf','root_exp','timeStamp','','readyState','unknown','_additionalMetadata','concat','_regExpToString','stackTraceLimit','catch','path','remix','POSITIVE_INFINITY','positiveInfinity','_socket','undefined','_isMap','time','String','now','symbol','isArray','_processTreeNodeResult','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_connecting','__es'+'Module','forEach','_addLoadNode','totalStrLength','sortProps','date','_property','12256DsHLgt','expressionsToEvaluate','_p_name','1713473657017','_connectToHostNow','_connected','slice','_reconnectTimeout','toLowerCase','pop','substr','nodeModules','rootExpression','negativeInfinity','_sendErrorMessage','stack','_setNodeId','parent','_isSet','args','depth','_hasSetOnItsPath','versions','origin','4977970fOYZkR','cappedElements','_webSocketErrorDocsLink','nan','getOwnPropertyNames','then','index','angular','noFunctions','call','next.js','onerror','2786460JnksyT','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','reduceLimits','get','[object\\x20Array]','ws://','294hwMQiJ','join','5189752LNWfPJ','_isPrimitiveType','_addObjectProperty','object','9tWNOHk','host','value','edge',\"c:\\\\Users\\\\Яна\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.309\\\\node_modules\",'stringify','_console_ninja','autoExpandPreviousObjects','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','node','constructor','_isPrimitiveWrapperType','reload','\\x20browser','perf_hooks','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','negativeZero','defineProperty','_getOwnPropertyDescriptor','error','_Symbol','_sortProps','_type','match','gateway.docker.internal','_setNodeQueryPath','hostname','unref','warn','_connectAttemptCount','[object\\x20Date]','null','[object\\x20BigInt]','getOwnPropertyDescriptor','toString','NEGATIVE_INFINITY','_keyStrRegExp','autoExpandLimit','logger\\x20websocket\\x20error','_dateToString','Map','setter','_disposeWebsocket','replace','message','_isUndefined','default','Symbol','13132130PFErLW','strLength','cappedProps','_setNodeLabel','unshift','_addFunctionsNode','current','_inNextEdge','global','port','enumerable','onclose','test','\\x20server','NEXT_RUNTIME','_getOwnPropertySymbols','type','autoExpand','_allowedToConnectOnSend','count','72254fVPIMz','Set','_hasMapOnItsPath','_setNodePermissions','_inBrowser','data','_addProperty','string','set','_HTMLAllCollection','trace','hits','https://tinyurl.com/37x8b79t','447HDcqdn','123641qrpBHP','_treeNodePropertiesBeforeFullValue','process','_setNodeExpandableState','_console_ninja_session','_undefined','1.0.0','method','autoExpandMaxDepth','create','hrtime','_blacklistedProperty','_isNegativeZero','_treeNodePropertiesAfterFullValue','_hasSymbolPropertyOnItsPath','bigint','autoExpandPropertyCount','location','capped','_cleanNode','_getOwnPropertyNames','length','getWebSocketClass','[object\\x20Map]','2JIiyrx','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','...','HTMLAllCollection','push','name','array','allStrLength','serialize','ws/index.js','_p_','level','props','performance','includes','console','Number','pathToFileURL','onmessage','coverage','send','map','_WebSocketClass','_ws','_consoleNinjaAllowedToStart','_propertyName',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-MGRAE97\",\"192.168.3.6\"],'_attemptToReconnectShortly','_maxConnectAttemptCount','','Error','close','isExpressionToEvaluate','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','resolveGetters','_objectToString','_capIfString','_setNodeExpressionPath','_allowedToSend','indexOf','function','_isArray','bind','number','dockerizedApp','_WebSocket'];_0x5dfd=function(){return _0xfebe52;};return _0x5dfd();}var K=Object[_0x31a8a8(0x1e2)],V=Object[_0x31a8a8(0x198)],G=Object[_0x31a8a8(0x1a8)],ee=Object[_0x31a8a8(0x264)],te=Object[_0x31a8a8(0x227)],ne=Object[_0x31a8a8(0x222)]['hasOwnProperty'],re=(_0x587e9f,_0x1df4c2,_0xa31442,_0xcc4dbd)=>{var _0x513510=_0x31a8a8;if(_0x1df4c2&&typeof _0x1df4c2==_0x513510(0x277)||typeof _0x1df4c2==_0x513510(0x219)){for(let _0x332896 of ee(_0x1df4c2))!ne[_0x513510(0x269)](_0x587e9f,_0x332896)&&_0x332896!==_0xa31442&&V(_0x587e9f,_0x332896,{'get':()=>_0x1df4c2[_0x332896],'enumerable':!(_0xcc4dbd=G(_0x1df4c2,_0x332896))||_0xcc4dbd[_0x513510(0x1c1)]});}return _0x587e9f;},H=(_0x50e756,_0x467ef1,_0x166c5d)=>(_0x166c5d=_0x50e756!=null?K(te(_0x50e756)):{},re(_0x467ef1||!_0x50e756||!_0x50e756[_0x31a8a8(0x241)]?V(_0x166c5d,_0x31a8a8(0x1b5),{'value':_0x50e756,'enumerable':!0x0}):_0x166c5d,_0x50e756)),q=class{constructor(_0x72257f,_0x67ec6b,_0x235237,_0x712499,_0x33db80){var _0x4502d1=_0x31a8a8;this['global']=_0x72257f,this['host']=_0x67ec6b,this[_0x4502d1(0x1c0)]=_0x235237,this['nodeModules']=_0x712499,this[_0x4502d1(0x21d)]=_0x33db80,this[_0x4502d1(0x217)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x4502d1(0x24d)]=!0x1,this[_0x4502d1(0x240)]=!0x1,this[_0x4502d1(0x1be)]=_0x72257f[_0x4502d1(0x1db)]?.[_0x4502d1(0x224)]?.['NEXT_RUNTIME']===_0x4502d1(0x27b),this[_0x4502d1(0x1cf)]=!this[_0x4502d1(0x1bf)][_0x4502d1(0x1db)]?.[_0x4502d1(0x25e)]?.[_0x4502d1(0x281)]&&!this[_0x4502d1(0x1be)],this['_WebSocketClass']=null,this[_0x4502d1(0x1a4)]=0x0,this[_0x4502d1(0x20d)]=0x14,this[_0x4502d1(0x262)]=_0x4502d1(0x1d7),this[_0x4502d1(0x256)]=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x4502d1(0x262)];}async['getWebSocketClass'](){var _0x507908=_0x31a8a8;if(this[_0x507908(0x207)])return this[_0x507908(0x207)];let _0x491ed7;if(this[_0x507908(0x1cf)]||this[_0x507908(0x1be)])_0x491ed7=this[_0x507908(0x1bf)]['WebSocket'];else{if(this[_0x507908(0x1bf)][_0x507908(0x1db)]?.[_0x507908(0x21e)])_0x491ed7=this['global'][_0x507908(0x1db)]?.[_0x507908(0x21e)];else try{let _0x5c6e3d=await import('path');_0x491ed7=(await import((await import('url'))[_0x507908(0x202)](_0x5c6e3d[_0x507908(0x273)](this[_0x507908(0x253)],_0x507908(0x1fa)))[_0x507908(0x1a9)]()))['default'];}catch{try{_0x491ed7=require(require(_0x507908(0x232))[_0x507908(0x273)](this['nodeModules'],'ws'));}catch{throw new Error(_0x507908(0x26d));}}}return this[_0x507908(0x207)]=_0x491ed7,_0x491ed7;}[_0x31a8a8(0x24c)](){var _0x41b0ce=_0x31a8a8;this['_connecting']||this[_0x41b0ce(0x24d)]||this[_0x41b0ce(0x1a4)]>=this[_0x41b0ce(0x20d)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x41b0ce(0x240)]=!0x0,this['_connectAttemptCount']++,this[_0x41b0ce(0x208)]=new Promise((_0x1f0031,_0x4d8819)=>{var _0x1973f7=_0x41b0ce;this[_0x1973f7(0x1ef)]()['then'](_0x58650d=>{var _0x4c056c=_0x1973f7;let _0x350fc9=new _0x58650d(_0x4c056c(0x271)+(!this['_inBrowser']&&this[_0x4c056c(0x21d)]?_0x4c056c(0x19f):this[_0x4c056c(0x279)])+':'+this[_0x4c056c(0x1c0)]);_0x350fc9[_0x4c056c(0x26b)]=()=>{var _0x1870b1=_0x4c056c;this[_0x1870b1(0x217)]=!0x1,this['_disposeWebsocket'](_0x350fc9),this[_0x1870b1(0x20c)](),_0x4d8819(new Error(_0x1870b1(0x1ad)));},_0x350fc9['onopen']=()=>{var _0x5e7064=_0x4c056c;this[_0x5e7064(0x1cf)]||_0x350fc9[_0x5e7064(0x236)]&&_0x350fc9[_0x5e7064(0x236)][_0x5e7064(0x1a2)]&&_0x350fc9[_0x5e7064(0x236)][_0x5e7064(0x1a2)](),_0x1f0031(_0x350fc9);},_0x350fc9['onclose']=()=>{var _0x5197f5=_0x4c056c;this[_0x5197f5(0x1c9)]=!0x0,this[_0x5197f5(0x1b1)](_0x350fc9),this[_0x5197f5(0x20c)]();},_0x350fc9[_0x4c056c(0x203)]=_0x251956=>{var _0x17c3df=_0x4c056c;try{_0x251956&&_0x251956[_0x17c3df(0x1d0)]&&this[_0x17c3df(0x1cf)]&&JSON['parse'](_0x251956[_0x17c3df(0x1d0)])[_0x17c3df(0x1e0)]==='reload'&&this[_0x17c3df(0x1bf)][_0x17c3df(0x1ea)][_0x17c3df(0x284)]();}catch{}};})[_0x1973f7(0x265)](_0x4a8500=>(this['_connected']=!0x0,this[_0x1973f7(0x240)]=!0x1,this[_0x1973f7(0x1c9)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x4a8500))[_0x1973f7(0x231)](_0x48e3f9=>(this[_0x1973f7(0x24d)]=!0x1,this[_0x1973f7(0x240)]=!0x1,console[_0x1973f7(0x1a3)](_0x1973f7(0x212)+this['_webSocketErrorDocsLink']),_0x4d8819(new Error(_0x1973f7(0x1f2)+(_0x48e3f9&&_0x48e3f9[_0x1973f7(0x1b3)])))));}));}[_0x31a8a8(0x1b1)](_0x176216){var _0x44cfe9=_0x31a8a8;this[_0x44cfe9(0x24d)]=!0x1,this[_0x44cfe9(0x240)]=!0x1;try{_0x176216[_0x44cfe9(0x1c2)]=null,_0x176216[_0x44cfe9(0x26b)]=null,_0x176216['onopen']=null;}catch{}try{_0x176216[_0x44cfe9(0x22b)]<0x2&&_0x176216[_0x44cfe9(0x210)]();}catch{}}[_0x31a8a8(0x20c)](){var _0x1b6722=_0x31a8a8;clearTimeout(this[_0x1b6722(0x24f)]),!(this[_0x1b6722(0x1a4)]>=this[_0x1b6722(0x20d)])&&(this[_0x1b6722(0x24f)]=setTimeout(()=>{var _0x119ad6=_0x1b6722;this[_0x119ad6(0x24d)]||this[_0x119ad6(0x240)]||(this[_0x119ad6(0x24c)](),this[_0x119ad6(0x208)]?.[_0x119ad6(0x231)](()=>this[_0x119ad6(0x20c)]()));},0x1f4),this[_0x1b6722(0x24f)][_0x1b6722(0x1a2)]&&this[_0x1b6722(0x24f)][_0x1b6722(0x1a2)]());}async['send'](_0x40c0af){var _0x3f8269=_0x31a8a8;try{if(!this[_0x3f8269(0x217)])return;this['_allowedToConnectOnSend']&&this[_0x3f8269(0x24c)](),(await this[_0x3f8269(0x208)])[_0x3f8269(0x205)](JSON[_0x3f8269(0x27d)](_0x40c0af));}catch(_0x36ff3e){console[_0x3f8269(0x1a3)](this[_0x3f8269(0x256)]+':\\x20'+(_0x36ff3e&&_0x36ff3e[_0x3f8269(0x1b3)])),this[_0x3f8269(0x217)]=!0x1,this[_0x3f8269(0x20c)]();}}};function x(_0x444d17,_0x81d1a9,_0x4e4b07,_0x317798,_0x48fdfe,_0xb5d422){var _0x35765d=_0x31a8a8;let _0x554401=_0x4e4b07['split'](',')[_0x35765d(0x206)](_0x43989f=>{var _0x138180=_0x35765d;try{if(!_0x444d17['_console_ninja_session']){let _0x5f230c=_0x444d17['process']?.[_0x138180(0x25e)]?.[_0x138180(0x281)]||_0x444d17[_0x138180(0x1db)]?.[_0x138180(0x224)]?.[_0x138180(0x1c5)]===_0x138180(0x27b);(_0x48fdfe===_0x138180(0x26a)||_0x48fdfe===_0x138180(0x233)||_0x48fdfe==='astro'||_0x48fdfe===_0x138180(0x267))&&(_0x48fdfe+=_0x5f230c?_0x138180(0x1c4):_0x138180(0x285)),_0x444d17[_0x138180(0x1dd)]={'id':+new Date(),'tool':_0x48fdfe},_0x48fdfe&&!_0x5f230c&&console[_0x138180(0x223)]('%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+(_0x48fdfe['charAt'](0x0)['toUpperCase']()+_0x48fdfe[_0x138180(0x252)](0x1))+',',_0x138180(0x280),_0x138180(0x287));}let _0x33b75c=new q(_0x444d17,_0x81d1a9,_0x43989f,_0x317798,_0xb5d422);return _0x33b75c[_0x138180(0x205)][_0x138180(0x21b)](_0x33b75c);}catch(_0x5c800f){return console[_0x138180(0x1a3)](_0x138180(0x23f),_0x5c800f&&_0x5c800f['message']),()=>{};}});return _0x41f010=>_0x554401[_0x35765d(0x242)](_0x294269=>_0x294269(_0x41f010));}function W(_0x3c39c2){var _0x147795=_0x31a8a8;let _0x2de712=function(_0xb1809e,_0x1e3f30){return _0x1e3f30-_0xb1809e;},_0x2b3493;if(_0x3c39c2[_0x147795(0x1fe)])_0x2b3493=function(){var _0x1af9db=_0x147795;return _0x3c39c2[_0x1af9db(0x1fe)][_0x1af9db(0x23b)]();};else{if(_0x3c39c2[_0x147795(0x1db)]&&_0x3c39c2['process'][_0x147795(0x1e3)]&&_0x3c39c2[_0x147795(0x1db)]?.['env']?.['NEXT_RUNTIME']!=='edge')_0x2b3493=function(){var _0x582d3b=_0x147795;return _0x3c39c2[_0x582d3b(0x1db)][_0x582d3b(0x1e3)]();},_0x2de712=function(_0x4c29aa,_0x822a75){return 0x3e8*(_0x822a75[0x0]-_0x4c29aa[0x0])+(_0x822a75[0x1]-_0x4c29aa[0x1])/0xf4240;};else try{let {performance:_0x13104c}=require(_0x147795(0x286));_0x2b3493=function(){return _0x13104c['now']();};}catch{_0x2b3493=function(){return+new Date();};}}return{'elapsed':_0x2de712,'timeStamp':_0x2b3493,'now':()=>Date[_0x147795(0x23b)]()};}function _0x28e3(_0x1b0d03,_0x49d6c9){var _0x5dfd0f=_0x5dfd();return _0x28e3=function(_0x28e3f3,_0x9dc83){_0x28e3f3=_0x28e3f3-0x198;var _0x3fcd02=_0x5dfd0f[_0x28e3f3];return _0x3fcd02;},_0x28e3(_0x1b0d03,_0x49d6c9);}function X(_0xaa7b4,_0x2871c9,_0x435ba0){var _0x47c1aa=_0x31a8a8;if(_0xaa7b4['_consoleNinjaAllowedToStart']!==void 0x0)return _0xaa7b4['_consoleNinjaAllowedToStart'];let _0x2bc9a9=_0xaa7b4[_0x47c1aa(0x1db)]?.[_0x47c1aa(0x25e)]?.[_0x47c1aa(0x281)]||_0xaa7b4[_0x47c1aa(0x1db)]?.[_0x47c1aa(0x224)]?.[_0x47c1aa(0x1c5)]==='edge';return _0x2bc9a9&&_0x435ba0==='nuxt'?_0xaa7b4[_0x47c1aa(0x209)]=!0x1:_0xaa7b4[_0x47c1aa(0x209)]=_0x2bc9a9||!_0x2871c9||_0xaa7b4[_0x47c1aa(0x1ea)]?.[_0x47c1aa(0x1a1)]&&_0x2871c9[_0x47c1aa(0x1ff)](_0xaa7b4[_0x47c1aa(0x1ea)][_0x47c1aa(0x1a1)]),_0xaa7b4[_0x47c1aa(0x209)];}function J(_0x16954a,_0x1f5612,_0x3266df,_0x533af2){var _0x518456=_0x31a8a8;_0x16954a=_0x16954a,_0x1f5612=_0x1f5612,_0x3266df=_0x3266df,_0x533af2=_0x533af2;let _0x221459=W(_0x16954a),_0x832442=_0x221459['elapsed'],_0x300291=_0x221459['timeStamp'];class _0xea4f1b{constructor(){var _0x483ac5=_0x28e3;this[_0x483ac5(0x1ab)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x483ac5(0x221)]=/'([^\\\\']|\\\\')*'/,this[_0x483ac5(0x1de)]=_0x16954a[_0x483ac5(0x237)],this[_0x483ac5(0x1d4)]=_0x16954a[_0x483ac5(0x1f4)],this[_0x483ac5(0x199)]=Object[_0x483ac5(0x1a8)],this[_0x483ac5(0x1ed)]=Object[_0x483ac5(0x264)],this[_0x483ac5(0x19b)]=_0x16954a[_0x483ac5(0x1b6)],this[_0x483ac5(0x22f)]=RegExp[_0x483ac5(0x222)][_0x483ac5(0x1a9)],this[_0x483ac5(0x1ae)]=Date[_0x483ac5(0x222)][_0x483ac5(0x1a9)];}[_0x518456(0x1f9)](_0x22c73d,_0xc08e2f,_0xb47cc9,_0x29722c){var _0x4947cb=_0x518456,_0x31a482=this,_0x224ce6=_0xb47cc9[_0x4947cb(0x1c8)];function _0x356bcf(_0x54bf85,_0x2c6f7e,_0x2e30bd){var _0x4ac130=_0x4947cb;_0x2c6f7e[_0x4ac130(0x1c7)]=_0x4ac130(0x22c),_0x2c6f7e[_0x4ac130(0x19a)]=_0x54bf85[_0x4ac130(0x1b3)],_0x1d6ac7=_0x2e30bd['node'][_0x4ac130(0x1bd)],_0x2e30bd['node']['current']=_0x2c6f7e,_0x31a482[_0x4ac130(0x1da)](_0x2c6f7e,_0x2e30bd);}try{_0xb47cc9[_0x4947cb(0x1fc)]++,_0xb47cc9['autoExpand']&&_0xb47cc9['autoExpandPreviousObjects'][_0x4947cb(0x1f5)](_0xc08e2f);var _0x8b5576,_0x3f430f,_0x2209ba,_0x37b6a6,_0x26b35f=[],_0x1d7c47=[],_0x25aa31,_0x1967c8=this[_0x4947cb(0x19d)](_0xc08e2f),_0x5ac45a=_0x1967c8===_0x4947cb(0x1f7),_0x49295a=!0x1,_0x112cdd=_0x1967c8===_0x4947cb(0x219),_0x30e717=this[_0x4947cb(0x275)](_0x1967c8),_0x1d0c99=this['_isPrimitiveWrapperType'](_0x1967c8),_0x603da9=_0x30e717||_0x1d0c99,_0x306c47={},_0x5b596e=0x0,_0x58a2d0=!0x1,_0x1d6ac7,_0x56dab2=/^(([1-9]{1}[0-9]*)|0)$/;if(_0xb47cc9[_0x4947cb(0x25c)]){if(_0x5ac45a){if(_0x3f430f=_0xc08e2f[_0x4947cb(0x1ee)],_0x3f430f>_0xb47cc9['elements']){for(_0x2209ba=0x0,_0x37b6a6=_0xb47cc9[_0x4947cb(0x225)],_0x8b5576=_0x2209ba;_0x8b5576<_0x37b6a6;_0x8b5576++)_0x1d7c47[_0x4947cb(0x1f5)](_0x31a482[_0x4947cb(0x1d1)](_0x26b35f,_0xc08e2f,_0x1967c8,_0x8b5576,_0xb47cc9));_0x22c73d[_0x4947cb(0x261)]=!0x0;}else{for(_0x2209ba=0x0,_0x37b6a6=_0x3f430f,_0x8b5576=_0x2209ba;_0x8b5576<_0x37b6a6;_0x8b5576++)_0x1d7c47[_0x4947cb(0x1f5)](_0x31a482[_0x4947cb(0x1d1)](_0x26b35f,_0xc08e2f,_0x1967c8,_0x8b5576,_0xb47cc9));}_0xb47cc9['autoExpandPropertyCount']+=_0x1d7c47[_0x4947cb(0x1ee)];}if(!(_0x1967c8===_0x4947cb(0x1a6)||_0x1967c8===_0x4947cb(0x237))&&!_0x30e717&&_0x1967c8!==_0x4947cb(0x23a)&&_0x1967c8!==_0x4947cb(0x21f)&&_0x1967c8!==_0x4947cb(0x1e8)){var _0x32550c=_0x29722c[_0x4947cb(0x1fd)]||_0xb47cc9[_0x4947cb(0x1fd)];if(this[_0x4947cb(0x25a)](_0xc08e2f)?(_0x8b5576=0x0,_0xc08e2f[_0x4947cb(0x242)](function(_0x84c65f){var _0x49de11=_0x4947cb;if(_0x5b596e++,_0xb47cc9[_0x49de11(0x1e9)]++,_0x5b596e>_0x32550c){_0x58a2d0=!0x0;return;}if(!_0xb47cc9[_0x49de11(0x211)]&&_0xb47cc9[_0x49de11(0x1c8)]&&_0xb47cc9[_0x49de11(0x1e9)]>_0xb47cc9[_0x49de11(0x1ac)]){_0x58a2d0=!0x0;return;}_0x1d7c47[_0x49de11(0x1f5)](_0x31a482[_0x49de11(0x1d1)](_0x26b35f,_0xc08e2f,'Set',_0x8b5576++,_0xb47cc9,function(_0x1b9622){return function(){return _0x1b9622;};}(_0x84c65f)));})):this['_isMap'](_0xc08e2f)&&_0xc08e2f[_0x4947cb(0x242)](function(_0x4da080,_0x3c5450){var _0x12d456=_0x4947cb;if(_0x5b596e++,_0xb47cc9[_0x12d456(0x1e9)]++,_0x5b596e>_0x32550c){_0x58a2d0=!0x0;return;}if(!_0xb47cc9['isExpressionToEvaluate']&&_0xb47cc9[_0x12d456(0x1c8)]&&_0xb47cc9[_0x12d456(0x1e9)]>_0xb47cc9[_0x12d456(0x1ac)]){_0x58a2d0=!0x0;return;}var _0x2e8dce=_0x3c5450[_0x12d456(0x1a9)]();_0x2e8dce[_0x12d456(0x1ee)]>0x64&&(_0x2e8dce=_0x2e8dce[_0x12d456(0x24e)](0x0,0x64)+_0x12d456(0x1f3)),_0x1d7c47[_0x12d456(0x1f5)](_0x31a482[_0x12d456(0x1d1)](_0x26b35f,_0xc08e2f,_0x12d456(0x1af),_0x2e8dce,_0xb47cc9,function(_0x18e45d){return function(){return _0x18e45d;};}(_0x4da080)));}),!_0x49295a){try{for(_0x25aa31 in _0xc08e2f)if(!(_0x5ac45a&&_0x56dab2['test'](_0x25aa31))&&!this[_0x4947cb(0x1e4)](_0xc08e2f,_0x25aa31,_0xb47cc9)){if(_0x5b596e++,_0xb47cc9[_0x4947cb(0x1e9)]++,_0x5b596e>_0x32550c){_0x58a2d0=!0x0;break;}if(!_0xb47cc9[_0x4947cb(0x211)]&&_0xb47cc9[_0x4947cb(0x1c8)]&&_0xb47cc9[_0x4947cb(0x1e9)]>_0xb47cc9['autoExpandLimit']){_0x58a2d0=!0x0;break;}_0x1d7c47['push'](_0x31a482[_0x4947cb(0x276)](_0x26b35f,_0x306c47,_0xc08e2f,_0x1967c8,_0x25aa31,_0xb47cc9));}}catch{}if(_0x306c47['_p_length']=!0x0,_0x112cdd&&(_0x306c47[_0x4947cb(0x24a)]=!0x0),!_0x58a2d0){var _0x3a464a=[][_0x4947cb(0x22e)](this[_0x4947cb(0x1ed)](_0xc08e2f))[_0x4947cb(0x22e)](this[_0x4947cb(0x1c6)](_0xc08e2f));for(_0x8b5576=0x0,_0x3f430f=_0x3a464a['length'];_0x8b5576<_0x3f430f;_0x8b5576++)if(_0x25aa31=_0x3a464a[_0x8b5576],!(_0x5ac45a&&_0x56dab2[_0x4947cb(0x1c3)](_0x25aa31[_0x4947cb(0x1a9)]()))&&!this[_0x4947cb(0x1e4)](_0xc08e2f,_0x25aa31,_0xb47cc9)&&!_0x306c47['_p_'+_0x25aa31['toString']()]){if(_0x5b596e++,_0xb47cc9[_0x4947cb(0x1e9)]++,_0x5b596e>_0x32550c){_0x58a2d0=!0x0;break;}if(!_0xb47cc9[_0x4947cb(0x211)]&&_0xb47cc9[_0x4947cb(0x1c8)]&&_0xb47cc9[_0x4947cb(0x1e9)]>_0xb47cc9[_0x4947cb(0x1ac)]){_0x58a2d0=!0x0;break;}_0x1d7c47[_0x4947cb(0x1f5)](_0x31a482['_addObjectProperty'](_0x26b35f,_0x306c47,_0xc08e2f,_0x1967c8,_0x25aa31,_0xb47cc9));}}}}}if(_0x22c73d[_0x4947cb(0x1c7)]=_0x1967c8,_0x603da9?(_0x22c73d['value']=_0xc08e2f['valueOf'](),this[_0x4947cb(0x215)](_0x1967c8,_0x22c73d,_0xb47cc9,_0x29722c)):_0x1967c8===_0x4947cb(0x246)?_0x22c73d['value']=this[_0x4947cb(0x1ae)]['call'](_0xc08e2f):_0x1967c8==='bigint'?_0x22c73d[_0x4947cb(0x27a)]=_0xc08e2f['toString']():_0x1967c8==='RegExp'?_0x22c73d['value']=this['_regExpToString']['call'](_0xc08e2f):_0x1967c8==='symbol'&&this[_0x4947cb(0x19b)]?_0x22c73d[_0x4947cb(0x27a)]=this[_0x4947cb(0x19b)][_0x4947cb(0x222)][_0x4947cb(0x1a9)][_0x4947cb(0x269)](_0xc08e2f):!_0xb47cc9[_0x4947cb(0x25c)]&&!(_0x1967c8===_0x4947cb(0x1a6)||_0x1967c8==='undefined')&&(delete _0x22c73d[_0x4947cb(0x27a)],_0x22c73d['capped']=!0x0),_0x58a2d0&&(_0x22c73d[_0x4947cb(0x1b9)]=!0x0),_0x1d6ac7=_0xb47cc9[_0x4947cb(0x281)][_0x4947cb(0x1bd)],_0xb47cc9[_0x4947cb(0x281)]['current']=_0x22c73d,this[_0x4947cb(0x1da)](_0x22c73d,_0xb47cc9),_0x1d7c47[_0x4947cb(0x1ee)]){for(_0x8b5576=0x0,_0x3f430f=_0x1d7c47[_0x4947cb(0x1ee)];_0x8b5576<_0x3f430f;_0x8b5576++)_0x1d7c47[_0x8b5576](_0x8b5576);}_0x26b35f[_0x4947cb(0x1ee)]&&(_0x22c73d[_0x4947cb(0x1fd)]=_0x26b35f);}catch(_0xf7dede){_0x356bcf(_0xf7dede,_0x22c73d,_0xb47cc9);}return this[_0x4947cb(0x22d)](_0xc08e2f,_0x22c73d),this[_0x4947cb(0x1e6)](_0x22c73d,_0xb47cc9),_0xb47cc9['node']['current']=_0x1d6ac7,_0xb47cc9['level']--,_0xb47cc9[_0x4947cb(0x1c8)]=_0x224ce6,_0xb47cc9[_0x4947cb(0x1c8)]&&_0xb47cc9[_0x4947cb(0x27f)][_0x4947cb(0x251)](),_0x22c73d;}[_0x518456(0x1c6)](_0x2ba372){return Object['getOwnPropertySymbols']?Object['getOwnPropertySymbols'](_0x2ba372):[];}[_0x518456(0x25a)](_0x2d91d1){var _0x27c09b=_0x518456;return!!(_0x2d91d1&&_0x16954a['Set']&&this[_0x27c09b(0x214)](_0x2d91d1)===_0x27c09b(0x226)&&_0x2d91d1[_0x27c09b(0x242)]);}[_0x518456(0x1e4)](_0x47f7dd,_0x3f8241,_0x5e9e62){var _0xcc31e4=_0x518456;return _0x5e9e62[_0xcc31e4(0x268)]?typeof _0x47f7dd[_0x3f8241]==_0xcc31e4(0x219):!0x1;}[_0x518456(0x19d)](_0x211efa){var _0xd03d9d=_0x518456,_0x25c71c='';return _0x25c71c=typeof _0x211efa,_0x25c71c===_0xd03d9d(0x277)?this[_0xd03d9d(0x214)](_0x211efa)==='[object\\x20Array]'?_0x25c71c=_0xd03d9d(0x1f7):this[_0xd03d9d(0x214)](_0x211efa)===_0xd03d9d(0x1a5)?_0x25c71c=_0xd03d9d(0x246):this[_0xd03d9d(0x214)](_0x211efa)===_0xd03d9d(0x1a7)?_0x25c71c='bigint':_0x211efa===null?_0x25c71c='null':_0x211efa[_0xd03d9d(0x282)]&&(_0x25c71c=_0x211efa['constructor']['name']||_0x25c71c):_0x25c71c===_0xd03d9d(0x237)&&this[_0xd03d9d(0x1d4)]&&_0x211efa instanceof this[_0xd03d9d(0x1d4)]&&(_0x25c71c=_0xd03d9d(0x1f4)),_0x25c71c;}[_0x518456(0x214)](_0x2e481d){var _0x762a04=_0x518456;return Object[_0x762a04(0x222)][_0x762a04(0x1a9)][_0x762a04(0x269)](_0x2e481d);}[_0x518456(0x275)](_0x49c85d){var _0x367423=_0x518456;return _0x49c85d==='boolean'||_0x49c85d===_0x367423(0x1d2)||_0x49c85d===_0x367423(0x21c);}[_0x518456(0x283)](_0x5a5e6b){var _0x4a59a4=_0x518456;return _0x5a5e6b==='Boolean'||_0x5a5e6b===_0x4a59a4(0x23a)||_0x5a5e6b===_0x4a59a4(0x201);}[_0x518456(0x1d1)](_0x4d6d49,_0x51262f,_0x581005,_0x156558,_0x4452a4,_0x29318c){var _0x2f23aa=this;return function(_0x5ddd36){var _0x42578b=_0x28e3,_0x5e74b1=_0x4452a4[_0x42578b(0x281)][_0x42578b(0x1bd)],_0x4bcbdb=_0x4452a4[_0x42578b(0x281)][_0x42578b(0x266)],_0x2031e6=_0x4452a4[_0x42578b(0x281)][_0x42578b(0x259)];_0x4452a4[_0x42578b(0x281)][_0x42578b(0x259)]=_0x5e74b1,_0x4452a4[_0x42578b(0x281)]['index']=typeof _0x156558==_0x42578b(0x21c)?_0x156558:_0x5ddd36,_0x4d6d49['push'](_0x2f23aa[_0x42578b(0x247)](_0x51262f,_0x581005,_0x156558,_0x4452a4,_0x29318c)),_0x4452a4['node'][_0x42578b(0x259)]=_0x2031e6,_0x4452a4[_0x42578b(0x281)][_0x42578b(0x266)]=_0x4bcbdb;};}[_0x518456(0x276)](_0x225584,_0x403846,_0x24ac31,_0x2f48ba,_0x31bea6,_0x13a248,_0x39beeb){var _0x5498bf=_0x518456,_0x22d458=this;return _0x403846[_0x5498bf(0x1fb)+_0x31bea6[_0x5498bf(0x1a9)]()]=!0x0,function(_0x2a083a){var _0x15009c=_0x5498bf,_0x47539a=_0x13a248[_0x15009c(0x281)][_0x15009c(0x1bd)],_0x524d17=_0x13a248[_0x15009c(0x281)][_0x15009c(0x266)],_0x37a30a=_0x13a248[_0x15009c(0x281)][_0x15009c(0x259)];_0x13a248[_0x15009c(0x281)]['parent']=_0x47539a,_0x13a248[_0x15009c(0x281)][_0x15009c(0x266)]=_0x2a083a,_0x225584[_0x15009c(0x1f5)](_0x22d458[_0x15009c(0x247)](_0x24ac31,_0x2f48ba,_0x31bea6,_0x13a248,_0x39beeb)),_0x13a248['node'][_0x15009c(0x259)]=_0x37a30a,_0x13a248[_0x15009c(0x281)][_0x15009c(0x266)]=_0x524d17;};}[_0x518456(0x247)](_0x59a51f,_0x2139eb,_0x30b503,_0x21abe9,_0x21869f){var _0x376cdb=_0x518456,_0x34e7fb=this;_0x21869f||(_0x21869f=function(_0x5d01ec,_0x55b49d){return _0x5d01ec[_0x55b49d];});var _0xf0ccad=_0x30b503[_0x376cdb(0x1a9)](),_0x131c42=_0x21abe9[_0x376cdb(0x249)]||{},_0x5423a6=_0x21abe9['depth'],_0x500b30=_0x21abe9['isExpressionToEvaluate'];try{var _0x56dc70=this[_0x376cdb(0x238)](_0x59a51f),_0x4981bf=_0xf0ccad;_0x56dc70&&_0x4981bf[0x0]==='\\x27'&&(_0x4981bf=_0x4981bf[_0x376cdb(0x252)](0x1,_0x4981bf[_0x376cdb(0x1ee)]-0x2));var _0x3480b6=_0x21abe9[_0x376cdb(0x249)]=_0x131c42[_0x376cdb(0x1fb)+_0x4981bf];_0x3480b6&&(_0x21abe9[_0x376cdb(0x25c)]=_0x21abe9[_0x376cdb(0x25c)]+0x1),_0x21abe9[_0x376cdb(0x211)]=!!_0x3480b6;var _0x20abbe=typeof _0x30b503==_0x376cdb(0x23c),_0xfeb9ef={'name':_0x20abbe||_0x56dc70?_0xf0ccad:this[_0x376cdb(0x20a)](_0xf0ccad)};if(_0x20abbe&&(_0xfeb9ef[_0x376cdb(0x23c)]=!0x0),!(_0x2139eb==='array'||_0x2139eb===_0x376cdb(0x20f))){var _0x7d5f77=this[_0x376cdb(0x199)](_0x59a51f,_0x30b503);if(_0x7d5f77&&(_0x7d5f77[_0x376cdb(0x1d3)]&&(_0xfeb9ef[_0x376cdb(0x1b0)]=!0x0),_0x7d5f77[_0x376cdb(0x26f)]&&!_0x3480b6&&!_0x21abe9[_0x376cdb(0x213)]))return _0xfeb9ef[_0x376cdb(0x220)]=!0x0,this[_0x376cdb(0x23e)](_0xfeb9ef,_0x21abe9),_0xfeb9ef;}var _0x1fd6a2;try{_0x1fd6a2=_0x21869f(_0x59a51f,_0x30b503);}catch(_0x1db60c){return _0xfeb9ef={'name':_0xf0ccad,'type':'unknown','error':_0x1db60c[_0x376cdb(0x1b3)]},this['_processTreeNodeResult'](_0xfeb9ef,_0x21abe9),_0xfeb9ef;}var _0x1e3386=this[_0x376cdb(0x19d)](_0x1fd6a2),_0x2ecb32=this[_0x376cdb(0x275)](_0x1e3386);if(_0xfeb9ef[_0x376cdb(0x1c7)]=_0x1e3386,_0x2ecb32)this[_0x376cdb(0x23e)](_0xfeb9ef,_0x21abe9,_0x1fd6a2,function(){var _0x1c3507=_0x376cdb;_0xfeb9ef[_0x1c3507(0x27a)]=_0x1fd6a2['valueOf'](),!_0x3480b6&&_0x34e7fb['_capIfString'](_0x1e3386,_0xfeb9ef,_0x21abe9,{});});else{var _0x286c8a=_0x21abe9[_0x376cdb(0x1c8)]&&_0x21abe9[_0x376cdb(0x1fc)]<_0x21abe9[_0x376cdb(0x1e1)]&&_0x21abe9[_0x376cdb(0x27f)][_0x376cdb(0x218)](_0x1fd6a2)<0x0&&_0x1e3386!=='function'&&_0x21abe9['autoExpandPropertyCount']<_0x21abe9[_0x376cdb(0x1ac)];_0x286c8a||_0x21abe9[_0x376cdb(0x1fc)]<_0x5423a6||_0x3480b6?(this[_0x376cdb(0x1f9)](_0xfeb9ef,_0x1fd6a2,_0x21abe9,_0x3480b6||{}),this[_0x376cdb(0x22d)](_0x1fd6a2,_0xfeb9ef)):this[_0x376cdb(0x23e)](_0xfeb9ef,_0x21abe9,_0x1fd6a2,function(){var _0x432b9d=_0x376cdb;_0x1e3386==='null'||_0x1e3386===_0x432b9d(0x237)||(delete _0xfeb9ef[_0x432b9d(0x27a)],_0xfeb9ef[_0x432b9d(0x1eb)]=!0x0);});}return _0xfeb9ef;}finally{_0x21abe9[_0x376cdb(0x249)]=_0x131c42,_0x21abe9[_0x376cdb(0x25c)]=_0x5423a6,_0x21abe9[_0x376cdb(0x211)]=_0x500b30;}}['_capIfString'](_0x59a33b,_0x10c7cf,_0xdb369d,_0x2bd4e6){var _0xb7aa63=_0x518456,_0x4dabe5=_0x2bd4e6[_0xb7aa63(0x1b8)]||_0xdb369d[_0xb7aa63(0x1b8)];if((_0x59a33b===_0xb7aa63(0x1d2)||_0x59a33b===_0xb7aa63(0x23a))&&_0x10c7cf[_0xb7aa63(0x27a)]){let _0x4f3a86=_0x10c7cf[_0xb7aa63(0x27a)][_0xb7aa63(0x1ee)];_0xdb369d[_0xb7aa63(0x1f8)]+=_0x4f3a86,_0xdb369d[_0xb7aa63(0x1f8)]>_0xdb369d[_0xb7aa63(0x244)]?(_0x10c7cf[_0xb7aa63(0x1eb)]='',delete _0x10c7cf[_0xb7aa63(0x27a)]):_0x4f3a86>_0x4dabe5&&(_0x10c7cf[_0xb7aa63(0x1eb)]=_0x10c7cf[_0xb7aa63(0x27a)][_0xb7aa63(0x252)](0x0,_0x4dabe5),delete _0x10c7cf[_0xb7aa63(0x27a)]);}}[_0x518456(0x238)](_0x1dbea6){var _0x1affba=_0x518456;return!!(_0x1dbea6&&_0x16954a[_0x1affba(0x1af)]&&this[_0x1affba(0x214)](_0x1dbea6)===_0x1affba(0x1f0)&&_0x1dbea6['forEach']);}[_0x518456(0x20a)](_0x4004f4){var _0xd85a2=_0x518456;if(_0x4004f4[_0xd85a2(0x19e)](/^\\d+$/))return _0x4004f4;var _0x1ad931;try{_0x1ad931=JSON[_0xd85a2(0x27d)](''+_0x4004f4);}catch{_0x1ad931='\\x22'+this['_objectToString'](_0x4004f4)+'\\x22';}return _0x1ad931[_0xd85a2(0x19e)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1ad931=_0x1ad931[_0xd85a2(0x252)](0x1,_0x1ad931[_0xd85a2(0x1ee)]-0x2):_0x1ad931=_0x1ad931[_0xd85a2(0x1b2)](/'/g,'\\x5c\\x27')[_0xd85a2(0x1b2)](/\\\\\"/g,'\\x22')[_0xd85a2(0x1b2)](/(^\"|\"$)/g,'\\x27'),_0x1ad931;}[_0x518456(0x23e)](_0x179678,_0x480571,_0x3c2dd0,_0x39d5c6){var _0x4489e4=_0x518456;this[_0x4489e4(0x1da)](_0x179678,_0x480571),_0x39d5c6&&_0x39d5c6(),this[_0x4489e4(0x22d)](_0x3c2dd0,_0x179678),this[_0x4489e4(0x1e6)](_0x179678,_0x480571);}['_treeNodePropertiesBeforeFullValue'](_0x10502e,_0x4df1f5){var _0x1ac46d=_0x518456;this['_setNodeId'](_0x10502e,_0x4df1f5),this['_setNodeQueryPath'](_0x10502e,_0x4df1f5),this[_0x1ac46d(0x216)](_0x10502e,_0x4df1f5),this[_0x1ac46d(0x1ce)](_0x10502e,_0x4df1f5);}[_0x518456(0x258)](_0x42bafc,_0x1570d9){}[_0x518456(0x1a0)](_0x166187,_0x3a517d){}[_0x518456(0x1ba)](_0x34ae97,_0xaf7ef7){}[_0x518456(0x1b4)](_0x3e5160){var _0x4e745a=_0x518456;return _0x3e5160===this[_0x4e745a(0x1de)];}[_0x518456(0x1e6)](_0x3c4157,_0x14edec){var _0x55c8fb=_0x518456;this['_setNodeLabel'](_0x3c4157,_0x14edec),this[_0x55c8fb(0x1dc)](_0x3c4157),_0x14edec[_0x55c8fb(0x245)]&&this[_0x55c8fb(0x19c)](_0x3c4157),this[_0x55c8fb(0x1bc)](_0x3c4157,_0x14edec),this['_addLoadNode'](_0x3c4157,_0x14edec),this[_0x55c8fb(0x1ec)](_0x3c4157);}[_0x518456(0x22d)](_0x3afce5,_0x2581c3){var _0x268d15=_0x518456;let _0x5a62a6;try{_0x16954a[_0x268d15(0x200)]&&(_0x5a62a6=_0x16954a[_0x268d15(0x200)]['error'],_0x16954a[_0x268d15(0x200)][_0x268d15(0x19a)]=function(){}),_0x3afce5&&typeof _0x3afce5['length']==_0x268d15(0x21c)&&(_0x2581c3[_0x268d15(0x1ee)]=_0x3afce5[_0x268d15(0x1ee)]);}catch{}finally{_0x5a62a6&&(_0x16954a['console'][_0x268d15(0x19a)]=_0x5a62a6);}if(_0x2581c3[_0x268d15(0x1c7)]===_0x268d15(0x21c)||_0x2581c3[_0x268d15(0x1c7)]===_0x268d15(0x201)){if(isNaN(_0x2581c3[_0x268d15(0x27a)]))_0x2581c3[_0x268d15(0x263)]=!0x0,delete _0x2581c3[_0x268d15(0x27a)];else switch(_0x2581c3[_0x268d15(0x27a)]){case Number[_0x268d15(0x234)]:_0x2581c3[_0x268d15(0x235)]=!0x0,delete _0x2581c3['value'];break;case Number[_0x268d15(0x1aa)]:_0x2581c3[_0x268d15(0x255)]=!0x0,delete _0x2581c3[_0x268d15(0x27a)];break;case 0x0:this[_0x268d15(0x1e5)](_0x2581c3['value'])&&(_0x2581c3[_0x268d15(0x288)]=!0x0);break;}}else _0x2581c3['type']==='function'&&typeof _0x3afce5['name']==_0x268d15(0x1d2)&&_0x3afce5[_0x268d15(0x1f6)]&&_0x2581c3[_0x268d15(0x1f6)]&&_0x3afce5[_0x268d15(0x1f6)]!==_0x2581c3[_0x268d15(0x1f6)]&&(_0x2581c3['funcName']=_0x3afce5[_0x268d15(0x1f6)]);}['_isNegativeZero'](_0x2b5c48){var _0x410438=_0x518456;return 0x1/_0x2b5c48===Number[_0x410438(0x1aa)];}['_sortProps'](_0x55487c){var _0x42fa9c=_0x518456;!_0x55487c[_0x42fa9c(0x1fd)]||!_0x55487c[_0x42fa9c(0x1fd)][_0x42fa9c(0x1ee)]||_0x55487c['type']===_0x42fa9c(0x1f7)||_0x55487c[_0x42fa9c(0x1c7)]===_0x42fa9c(0x1af)||_0x55487c[_0x42fa9c(0x1c7)]===_0x42fa9c(0x1cc)||_0x55487c['props']['sort'](function(_0x4764cb,_0x2199c1){var _0x9e742e=_0x42fa9c,_0xf0d320=_0x4764cb['name'][_0x9e742e(0x250)](),_0x9f7bb=_0x2199c1[_0x9e742e(0x1f6)][_0x9e742e(0x250)]();return _0xf0d320<_0x9f7bb?-0x1:_0xf0d320>_0x9f7bb?0x1:0x0;});}[_0x518456(0x1bc)](_0xb80aae,_0x46f425){var _0x2ccb4b=_0x518456;if(!(_0x46f425[_0x2ccb4b(0x268)]||!_0xb80aae[_0x2ccb4b(0x1fd)]||!_0xb80aae[_0x2ccb4b(0x1fd)][_0x2ccb4b(0x1ee)])){for(var _0x26441a=[],_0x1f9eed=[],_0x54e320=0x0,_0x3f58d8=_0xb80aae['props'][_0x2ccb4b(0x1ee)];_0x54e320<_0x3f58d8;_0x54e320++){var _0x425ae1=_0xb80aae[_0x2ccb4b(0x1fd)][_0x54e320];_0x425ae1[_0x2ccb4b(0x1c7)]===_0x2ccb4b(0x219)?_0x26441a[_0x2ccb4b(0x1f5)](_0x425ae1):_0x1f9eed[_0x2ccb4b(0x1f5)](_0x425ae1);}if(!(!_0x1f9eed[_0x2ccb4b(0x1ee)]||_0x26441a[_0x2ccb4b(0x1ee)]<=0x1)){_0xb80aae[_0x2ccb4b(0x1fd)]=_0x1f9eed;var _0x5e7f51={'functionsNode':!0x0,'props':_0x26441a};this[_0x2ccb4b(0x258)](_0x5e7f51,_0x46f425),this[_0x2ccb4b(0x1ba)](_0x5e7f51,_0x46f425),this[_0x2ccb4b(0x1dc)](_0x5e7f51),this[_0x2ccb4b(0x1ce)](_0x5e7f51,_0x46f425),_0x5e7f51['id']+='\\x20f',_0xb80aae[_0x2ccb4b(0x1fd)][_0x2ccb4b(0x1bb)](_0x5e7f51);}}}[_0x518456(0x243)](_0x45fd4b,_0x20e4c3){}[_0x518456(0x1dc)](_0x32c12a){}[_0x518456(0x21a)](_0x42dac3){var _0x3b9d67=_0x518456;return Array[_0x3b9d67(0x23d)](_0x42dac3)||typeof _0x42dac3==_0x3b9d67(0x277)&&this[_0x3b9d67(0x214)](_0x42dac3)===_0x3b9d67(0x270);}[_0x518456(0x1ce)](_0x20d6ff,_0x23dfeb){}[_0x518456(0x1ec)](_0x463e0f){var _0x4fefff=_0x518456;delete _0x463e0f[_0x4fefff(0x1e7)],delete _0x463e0f[_0x4fefff(0x25d)],delete _0x463e0f[_0x4fefff(0x1cd)];}['_setNodeExpressionPath'](_0x39ee6a,_0x410b06){}}let _0x321960=new _0xea4f1b(),_0x2856db={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x449fff={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4ceff0(_0x2c3a5d,_0x405569,_0x42c915,_0xe9df2,_0x3efdd9,_0x37259f){var _0x171030=_0x518456;let _0x3b3146,_0x1a1c87;try{_0x1a1c87=_0x300291(),_0x3b3146=_0x3266df[_0x405569],!_0x3b3146||_0x1a1c87-_0x3b3146['ts']>0x1f4&&_0x3b3146[_0x171030(0x1ca)]&&_0x3b3146['time']/_0x3b3146[_0x171030(0x1ca)]<0x64?(_0x3266df[_0x405569]=_0x3b3146={'count':0x0,'time':0x0,'ts':_0x1a1c87},_0x3266df['hits']={}):_0x1a1c87-_0x3266df['hits']['ts']>0x32&&_0x3266df[_0x171030(0x1d6)][_0x171030(0x1ca)]&&_0x3266df['hits'][_0x171030(0x239)]/_0x3266df[_0x171030(0x1d6)][_0x171030(0x1ca)]<0x64&&(_0x3266df[_0x171030(0x1d6)]={});let _0x988b15=[],_0x326fd1=_0x3b3146['reduceLimits']||_0x3266df['hits'][_0x171030(0x26e)]?_0x449fff:_0x2856db,_0x2d50a7=_0x26a5dc=>{var _0xe4e38c=_0x171030;let _0xbf8637={};return _0xbf8637[_0xe4e38c(0x1fd)]=_0x26a5dc[_0xe4e38c(0x1fd)],_0xbf8637[_0xe4e38c(0x225)]=_0x26a5dc[_0xe4e38c(0x225)],_0xbf8637[_0xe4e38c(0x1b8)]=_0x26a5dc[_0xe4e38c(0x1b8)],_0xbf8637[_0xe4e38c(0x244)]=_0x26a5dc[_0xe4e38c(0x244)],_0xbf8637[_0xe4e38c(0x1ac)]=_0x26a5dc[_0xe4e38c(0x1ac)],_0xbf8637[_0xe4e38c(0x1e1)]=_0x26a5dc[_0xe4e38c(0x1e1)],_0xbf8637[_0xe4e38c(0x245)]=!0x1,_0xbf8637[_0xe4e38c(0x268)]=!_0x1f5612,_0xbf8637[_0xe4e38c(0x25c)]=0x1,_0xbf8637['level']=0x0,_0xbf8637['expId']='root_exp_id',_0xbf8637[_0xe4e38c(0x254)]=_0xe4e38c(0x228),_0xbf8637[_0xe4e38c(0x1c8)]=!0x0,_0xbf8637[_0xe4e38c(0x27f)]=[],_0xbf8637['autoExpandPropertyCount']=0x0,_0xbf8637[_0xe4e38c(0x213)]=!0x0,_0xbf8637['allStrLength']=0x0,_0xbf8637[_0xe4e38c(0x281)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xbf8637;};for(var _0x4d76ac=0x0;_0x4d76ac<_0x3efdd9[_0x171030(0x1ee)];_0x4d76ac++)_0x988b15[_0x171030(0x1f5)](_0x321960[_0x171030(0x1f9)]({'timeNode':_0x2c3a5d==='time'||void 0x0},_0x3efdd9[_0x4d76ac],_0x2d50a7(_0x326fd1),{}));if(_0x2c3a5d===_0x171030(0x1d5)){let _0x5aee45=Error[_0x171030(0x230)];try{Error[_0x171030(0x230)]=0x1/0x0,_0x988b15[_0x171030(0x1f5)](_0x321960[_0x171030(0x1f9)]({'stackNode':!0x0},new Error()[_0x171030(0x257)],_0x2d50a7(_0x326fd1),{'strLength':0x1/0x0}));}finally{Error[_0x171030(0x230)]=_0x5aee45;}}return{'method':'log','version':_0x533af2,'args':[{'ts':_0x42c915,'session':_0xe9df2,'args':_0x988b15,'id':_0x405569,'context':_0x37259f}]};}catch(_0x1adcd8){return{'method':'log','version':_0x533af2,'args':[{'ts':_0x42c915,'session':_0xe9df2,'args':[{'type':'unknown','error':_0x1adcd8&&_0x1adcd8[_0x171030(0x1b3)]}],'id':_0x405569,'context':_0x37259f}]};}finally{try{if(_0x3b3146&&_0x1a1c87){let _0x24f12b=_0x300291();_0x3b3146['count']++,_0x3b3146['time']+=_0x832442(_0x1a1c87,_0x24f12b),_0x3b3146['ts']=_0x24f12b,_0x3266df[_0x171030(0x1d6)][_0x171030(0x1ca)]++,_0x3266df[_0x171030(0x1d6)]['time']+=_0x832442(_0x1a1c87,_0x24f12b),_0x3266df[_0x171030(0x1d6)]['ts']=_0x24f12b,(_0x3b3146[_0x171030(0x1ca)]>0x32||_0x3b3146[_0x171030(0x239)]>0x64)&&(_0x3b3146[_0x171030(0x26e)]=!0x0),(_0x3266df[_0x171030(0x1d6)]['count']>0x3e8||_0x3266df[_0x171030(0x1d6)]['time']>0x12c)&&(_0x3266df[_0x171030(0x1d6)][_0x171030(0x26e)]=!0x0);}}catch{}}}return _0x4ceff0;}((_0x44e88c,_0x5a2423,_0x2c9905,_0x23aac5,_0x2dfd84,_0x1edac5,_0x5f3284,_0xef61e6,_0x4801c1,_0x4a1d8b)=>{var _0x5959b2=_0x31a8a8;if(_0x44e88c['_console_ninja'])return _0x44e88c['_console_ninja'];if(!X(_0x44e88c,_0xef61e6,_0x2dfd84))return _0x44e88c[_0x5959b2(0x27e)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x44e88c[_0x5959b2(0x27e)];let _0x22ba47=W(_0x44e88c),_0x4624c5=_0x22ba47['elapsed'],_0x51454c=_0x22ba47[_0x5959b2(0x229)],_0x3d1f9d=_0x22ba47[_0x5959b2(0x23b)],_0x43f4d0={'hits':{},'ts':{}},_0x5dcf32=J(_0x44e88c,_0x4801c1,_0x43f4d0,_0x1edac5),_0x2da564=_0x758e1d=>{_0x43f4d0['ts'][_0x758e1d]=_0x51454c();},_0x4e3ac2=(_0x33f4ff,_0x40dda2)=>{var _0x2358f9=_0x5959b2;let _0x521992=_0x43f4d0['ts'][_0x40dda2];if(delete _0x43f4d0['ts'][_0x40dda2],_0x521992){let _0x45835d=_0x4624c5(_0x521992,_0x51454c());_0x506c1c(_0x5dcf32(_0x2358f9(0x239),_0x33f4ff,_0x3d1f9d(),_0x342c50,[_0x45835d],_0x40dda2));}},_0x4a949f=_0x1c8e59=>(_0x2dfd84===_0x5959b2(0x26a)&&_0x44e88c[_0x5959b2(0x25f)]&&_0x1c8e59?.[_0x5959b2(0x25b)]?.[_0x5959b2(0x1ee)]&&(_0x1c8e59[_0x5959b2(0x25b)][0x0][_0x5959b2(0x25f)]=_0x44e88c[_0x5959b2(0x25f)]),_0x1c8e59);_0x44e88c[_0x5959b2(0x27e)]={'consoleLog':(_0x31d8d4,_0x5b20f5)=>{var _0x11722a=_0x5959b2;_0x44e88c['console'][_0x11722a(0x223)][_0x11722a(0x1f6)]!=='disabledLog'&&_0x506c1c(_0x5dcf32('log',_0x31d8d4,_0x3d1f9d(),_0x342c50,_0x5b20f5));},'consoleTrace':(_0x118b4d,_0x4b12e1)=>{var _0x54656c=_0x5959b2;_0x44e88c['console']['log']['name']!=='disabledTrace'&&_0x506c1c(_0x4a949f(_0x5dcf32(_0x54656c(0x1d5),_0x118b4d,_0x3d1f9d(),_0x342c50,_0x4b12e1)));},'consoleTime':_0x3fbe54=>{_0x2da564(_0x3fbe54);},'consoleTimeEnd':(_0xf52498,_0x69d004)=>{_0x4e3ac2(_0x69d004,_0xf52498);},'autoLog':(_0x139d6a,_0x9d5993)=>{var _0x2853da=_0x5959b2;_0x506c1c(_0x5dcf32(_0x2853da(0x223),_0x9d5993,_0x3d1f9d(),_0x342c50,[_0x139d6a]));},'autoLogMany':(_0x1581aa,_0x4abf30)=>{var _0x1113bd=_0x5959b2;_0x506c1c(_0x5dcf32(_0x1113bd(0x223),_0x1581aa,_0x3d1f9d(),_0x342c50,_0x4abf30));},'autoTrace':(_0x27c5bc,_0x4f712a)=>{var _0x55ed5b=_0x5959b2;_0x506c1c(_0x4a949f(_0x5dcf32(_0x55ed5b(0x1d5),_0x4f712a,_0x3d1f9d(),_0x342c50,[_0x27c5bc])));},'autoTraceMany':(_0x6254bf,_0x3aeeec)=>{var _0x3e6028=_0x5959b2;_0x506c1c(_0x4a949f(_0x5dcf32(_0x3e6028(0x1d5),_0x6254bf,_0x3d1f9d(),_0x342c50,_0x3aeeec)));},'autoTime':(_0x50d777,_0x45de2d,_0x130595)=>{_0x2da564(_0x130595);},'autoTimeEnd':(_0x48da2c,_0x3deda8,_0xa37cba)=>{_0x4e3ac2(_0x3deda8,_0xa37cba);},'coverage':_0x350d7d=>{var _0x3e9570=_0x5959b2;_0x506c1c({'method':_0x3e9570(0x204),'version':_0x1edac5,'args':[{'id':_0x350d7d}]});}};let _0x506c1c=x(_0x44e88c,_0x5a2423,_0x2c9905,_0x23aac5,_0x2dfd84,_0x4a1d8b),_0x342c50=_0x44e88c['_console_ninja_session'];return _0x44e88c[_0x5959b2(0x27e)];})(globalThis,'127.0.0.1','52790',_0x31a8a8(0x27c),'webpack',_0x31a8a8(0x1df),_0x31a8a8(0x24b),_0x31a8a8(0x20b),_0x31a8a8(0x22a),_0x31a8a8(0x20e));");
}
catch (e) { } }
; /* istanbul ignore next */
function oo_oo(i, ...v) { try {
    oo_cm().consoleLog(i, v);
}
catch (e) { } return v; }
;
oo_oo; /* istanbul ignore next */
function oo_tr(i, ...v) { try {
    oo_cm().consoleTrace(i, v);
}
catch (e) { } return v; }
;
oo_tr; /* istanbul ignore next */
function oo_ts(v) { try {
    oo_cm().consoleTime(v);
}
catch (e) { } return v; }
;
oo_ts; /* istanbul ignore next */
function oo_te(v, i) { try {
    oo_cm().consoleTimeEnd(v, i);
}
catch (e) { } return v; }
;
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/


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
const state_1 = __webpack_require__(/*! ../../state/state */ "./src/state/state.ts");
class App {
    static renderNewPage(idPage) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page = null;
        if (idPage === "main") {
            state_1.state.getUser().isLogined
                ? (page = new main_page_1.default(idPage))
                : (window.location.hash = "login");
        }
        else if (idPage === "info") {
            page = new info_page_1.default(idPage);
        }
        else if (idPage === "login") {
            state_1.state.getUser().isLogined
                ? (window.location.hash = "main")
                : (page = new login_page_1.default(idPage));
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
exports.createUserList = exports.createUserAside = exports.createUserSearch = exports.createUserItem = void 0;
const createUserItem = (user, count) => {
    const userItem = document.createElement("li");
    userItem.classList.add("aside-user__item");
    const userStatus = document.createElement("div");
    userStatus.classList.add("aside-user__status", `${user.isLogined ? "active" : "inactive"}`);
    const userName = document.createElement("label");
    userName.classList.add("aside-user__name");
    userName.textContent = user.login;
    const userMessages = document.createElement("label");
    userMessages.classList.add("aside-user__messages");
    if (count > 0)
        userMessages.classList.add("has-messages");
    userMessages.textContent = `${count > 0 ? count : ""}`;
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
    return userAside;
};
exports.createUserAside = createUserAside;
const createUserList = () => {
    const userList = document.createElement("ul");
    userList.classList.add("aside-user__list");
    return userList;
};
exports.createUserList = createUserList;


/***/ }),

/***/ "./src/core/components/button/button.ts":
/*!**********************************************!*\
  !*** ./src/core/components/button/button.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./button.scss */ "./src/core/components/button/button.scss");
class Button {
    constructor(className, commonClassName, text, type) {
        this.button = document.createElement("button");
        this.button.classList.add(className);
        this.button.classList.add(commonClassName);
        this.button.setAttribute("type", `${type}`);
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const state_1 = __webpack_require__(/*! ../../../state/state */ "./src/state/state.ts");
const create_aside_1 = __webpack_require__(/*! ../aside-content/create-aside */ "./src/core/components/aside-content/create-aside.ts");
const create_dialog_elements_1 = __webpack_require__(/*! ../dialog-content/create-dialog-elements */ "./src/core/components/dialog-content/create-dialog-elements.ts");
const format_date_1 = __webpack_require__(/*! ../../../utils/format-date */ "./src/utils/format-date.ts");
class Content {
    constructor(userSearch, userList, dialogForm, inputMessage, dialogContent) {
        this.users = [];
        this.userSearch = userSearch;
        this.userList = userList;
        this.dialogForm = dialogForm;
        this.inputMessage = inputMessage;
        this.dialogContent = dialogContent;
    }
    searchUser() {
        this.createAllUsers();
        this.userSearch.addEventListener("input", () => {
            this.userList.innerHTML = "";
            const searchQuery = this.userSearch.value;
            for (const user of this.users) {
                const userName = user.login.toLowerCase();
                if (userName.includes(searchQuery.toLowerCase())) {
                    this.userList.append((0, create_aside_1.createUserItem)(user, 1));
                }
            }
        });
    }
    createAllUsers() {
        this.users.push(...state_1.state.getAllUsers());
        for (let i = 0; i < this.users.length; i += 1) {
            this.userList.append((0, create_aside_1.createUserItem)(this.users[i], 1));
        }
    }
    submitMessage() {
        this.dialogForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const text = this.inputMessage.value;
            if (text.length > 0) {
                const labelToRemove = document.querySelector(".dialog__label");
                if (labelToRemove) {
                    this.dialogContent.removeChild(labelToRemove);
                }
                this.dialogContent.append(this.createMessageBlock());
            }
        });
    }
    createMessageBlock() {
        const messageBlock = (0, create_dialog_elements_1.createDiv)("message__block");
        const messageContainer = (0, create_dialog_elements_1.createDiv)("message__container");
        const messageHeader = (0, create_dialog_elements_1.createDiv)("message__header");
        const messageUser = (0, create_dialog_elements_1.createLabel)("message__user");
        const messageDate = (0, create_dialog_elements_1.createLabel)("message__date");
        messageUser.textContent = "you";
        messageDate.textContent = (0, format_date_1.formatDate)();
        messageHeader.append(messageUser, messageDate);
        const messageText = (0, create_dialog_elements_1.createDiv)("message__text");
        const messageFooter = (0, create_dialog_elements_1.createDiv)("message__footer");
        const footerLabel = (0, create_dialog_elements_1.createLabel)("message__footer-label");
        const messageStatus = (0, create_dialog_elements_1.createLabel)("message__status");
        messageFooter.append(footerLabel, messageStatus);
        messageContainer.append(messageHeader, messageText, messageFooter);
        messageBlock.append(messageContainer);
        messageText.textContent = this.inputMessage.value;
        return messageBlock;
    }
}
exports["default"] = Content;


/***/ }),

/***/ "./src/core/components/create-login-input/input-field-create.ts":
/*!**********************************************************************!*\
  !*** ./src/core/components/create-login-input/input-field-create.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createErrorElements = exports.createLabel = exports.createInput = void 0;
__webpack_require__(/*! ./input_field.scss */ "./src/core/components/create-login-input/input_field.scss");
const createInput = (type, id) => {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.classList.add("login__input");
    input.required = true;
    return input;
};
exports.createInput = createInput;
const createLabel = (forLabel, text) => {
    const label = document.createElement("label");
    label.htmlFor = forLabel;
    label.textContent = text;
    return label;
};
exports.createLabel = createLabel;
const createErrorElements = (classError) => Object.assign(document.createElement("div"), {
    className: `login__error ${classError}`,
});
exports.createErrorElements = createErrorElements;


/***/ }),

/***/ "./src/core/components/dialog-content/create-dialog-elements.ts":
/*!**********************************************************************!*\
  !*** ./src/core/components/dialog-content/create-dialog-elements.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDiv = exports.createDialogInputForm = exports.createDialogContent = exports.createLabel = exports.createArticle = exports.createInputMessage = void 0;
const createInputMessage = () => {
    const inputMessage = document.createElement("input");
    inputMessage.classList.add("dialog__input");
    inputMessage.placeholder = "Message";
    return inputMessage;
};
exports.createInputMessage = createInputMessage;
const createArticle = (className) => {
    const article = document.createElement("article");
    article.classList.add(className);
    return article;
};
exports.createArticle = createArticle;
const createLabel = (className) => {
    const label = document.createElement("label");
    label.classList.add(className);
    return label;
};
exports.createLabel = createLabel;
const createDialogContent = () => {
    const dialogContent = document.createElement("article");
    dialogContent.classList.add("dialog__content");
    const contentText = (0, exports.createLabel)("dialog__label");
    contentText.textContent = "Send your first message";
    dialogContent.append(contentText);
    return dialogContent;
};
exports.createDialogContent = createDialogContent;
const createDialogInputForm = () => {
    const dialogForm = document.createElement("form");
    dialogForm.classList.add("dialog__form");
    return dialogForm;
};
exports.createDialogInputForm = createDialogInputForm;
const createDiv = (className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
};
exports.createDiv = createDiv;


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
const get_login_data_1 = __webpack_require__(/*! ../../../utils/get-login-data */ "./src/utils/get-login-data.ts");
class EnterButton extends button_1.default {
    constructor() {
        super("enter__btn", "btn", "Enter", "submit");
        this.setDisabled(true);
        this.onClick(() => {
            get_login_data_1.loginData.submitForm();
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && !this.getRootElement().disabled) {
                get_login_data_1.loginData.submitForm();
            }
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
                    FormValidation.userName = value;
                }
                else {
                    this.validityNameIsFalse(userNameInput, errorUserName, value, 3);
                }
                this.toggleBtnDisabled();
            });
        }
        if (passwordInput) {
            passwordInput.addEventListener("input", () => {
                const { value } = passwordInput;
                this.isValidPassword = /^(?=.*\d)(?=.*[A-Z]).{4,}$/.test(value);
                if (this.isValidPassword) {
                    this.validityIsTrue(passwordInput, errorPassword);
                    FormValidation.password = value;
                }
                else {
                    this.validityPasswordIsFalse(passwordInput, errorPassword, value, 4);
                }
                this.toggleBtnDisabled();
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
FormValidation.userName = "";
FormValidation.password = "";
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
            `* At least ${validLength} characters long`,
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
            "* At least 1 uppercase English letter",
            `* At least ${validLength} characters long`,
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
const state_1 = __webpack_require__(/*! ../../../state/state */ "./src/state/state.ts");
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
        userName.textContent = `User: ${state_1.state.getUser().login}`;
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
const websocket_1 = __webpack_require__(/*! ../../../../api/websocket */ "./src/api/websocket.ts");
class LogoutButton extends button_1.default {
    constructor() {
        super("logout__btn", "btn", "Log out", "button");
        this.onClick(() => {
            websocket_1.ws.logOut();
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
const session_storage_1 = __webpack_require__(/*! ../../../utils/session-storage */ "./src/utils/session-storage.ts");
const button_1 = __importDefault(__webpack_require__(/*! ../button/button */ "./src/core/components/button/button.ts"));
class InfoButton extends button_1.default {
    constructor() {
        super("info__btn", "btn", "Info", "button");
        this.onClick(() => {
            session_storage_1.st.savePage(window.location.hash);
            window.location.hash = "info";
        });
    }
}
exports["default"] = InfoButton;


/***/ }),

/***/ "./src/core/components/send-btn/send-btn.ts":
/*!**************************************************!*\
  !*** ./src/core/components/send-btn/send-btn.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const button_1 = __importDefault(__webpack_require__(/*! ../button/button */ "./src/core/components/button/button.ts"));
class SendButton extends button_1.default {
    constructor() {
        super("send__btn", "btn", "Send", "submit");
        // this.onClick(() => {
        // });
    }
}
exports["default"] = SendButton;


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
const session_storage_1 = __webpack_require__(/*! ../../utils/session-storage */ "./src/utils/session-storage.ts");
__webpack_require__(/*! ./info-page.scss */ "./src/pages/info-page/info-page.scss");
class InfoPage extends page_1.default {
    constructor(id) {
        super(id);
        this.button = new button_1.default("back__btn", "btn", "Back", "button");
        this.button.onClick(() => {
            window.location.hash = session_storage_1.st.getPage();
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
        this.form = document.createElement("form");
        this.infoBtn = new info_btn_1.default();
        this.enterBtn = new enter_btn_1.default();
    }
    render() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        this.form.classList.add("login__form");
        this.form.append((0, input_field_create_1.createLabel)("user-name", "Name:"), (0, input_field_create_1.createInput)("text", "user-name"), (0, input_field_create_1.createErrorElements)("user-name__error"), (0, input_field_create_1.createLabel)("password", "Password:"), (0, input_field_create_1.createInput)("password", "password"), (0, input_field_create_1.createErrorElements)("password__error"), this.enterBtn.getRootElement());
        wrapper.append(this.form, this.infoBtn.getRootElement());
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
const content_view_1 = __webpack_require__(/*! ../../view/main-view/content-view */ "./src/view/main-view/content-view.ts");
const footer_1 = __webpack_require__(/*! ../../core/components/footer/footer */ "./src/core/components/footer/footer.ts");
class MainPage extends page_1.default {
    constructor(id) {
        super(id);
        this.header = new header_1.default();
    }
    render() {
        this.container.append(this.header.getRootElement(), content_view_1.contentView.getRootElement(), (0, footer_1.createFooterElements)());
        return this.container;
    }
}
MainPage.TextObject = {
    MainTitle: "Main Page",
};
exports["default"] = MainPage;


/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.state = void 0;
class State {
    constructor() {
        this.user = { login: "", isLogined: false };
        this.users = [];
        this.messages = [];
    }
    setUser(user) {
        this.user = user;
    }
    getUser() {
        return this.user;
    }
    // public setAllUsers(user: IUserIsLogined): void {
    //   this.users.push(user);
    // }
    setActiveUsers(users) {
        this.users.push(...users);
    }
    setInactiveUsers(users) {
        this.users.push(...users);
    }
    getAllUsers() {
        return this.users;
    }
}
exports.state = new State();


/***/ }),

/***/ "./src/types/enum.ts":
/*!***************************!*\
  !*** ./src/types/enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType["login"] = "USER_LOGIN";
    MessageType["error"] = "ERROR";
    MessageType["logout"] = "USER_LOGOUT";
    MessageType["external_login"] = "USER_EXTERNAL_LOGIN";
    MessageType["external_logout"] = "USER_EXTERNAL_LOGOUT";
    MessageType["active_user"] = "USER_ACTIVE";
    MessageType["inactive_user"] = "USER_INACTIVE";
    MessageType["send_msg"] = "MSG_SEND";
})(MessageType || (exports.MessageType = MessageType = {}));


/***/ }),

/***/ "./src/utils/format-date.ts":
/*!**********************************!*\
  !*** ./src/utils/format-date.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatDate = void 0;
const formatDate = () => {
    const day = new Date();
    const formattedDate = day.toLocaleDateString("en-US", { timeZone: "UTC" });
    const formattedTime = day.toLocaleTimeString("en-US", { timeZone: "UTC" });
    return `${formattedDate}, ${formattedTime}`;
};
exports.formatDate = formatDate;


/***/ }),

/***/ "./src/utils/get-login-data.ts":
/*!*************************************!*\
  !*** ./src/utils/get-login-data.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loginData = void 0;
const form_validation_1 = __importDefault(__webpack_require__(/*! ../core/components/form-validation/form-validation */ "./src/core/components/form-validation/form-validation.ts"));
const websocket_1 = __webpack_require__(/*! ../api/websocket */ "./src/api/websocket.ts");
class LoginData extends form_validation_1.default {
    submitForm() {
        const loginForm = document.querySelector(".login__form");
        if (loginForm) {
            loginForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const login = form_validation_1.default.userName;
                const { password } = form_validation_1.default;
                websocket_1.ws.logIn(login, password);
                websocket_1.ws.getActiveUsers();
                websocket_1.ws.getInActiveUsers();
                // ws.externalLogin(login, password)
            });
        }
    }
}
exports.loginData = new LoginData();


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

/***/ "./src/utils/session-storage.ts":
/*!**************************************!*\
  !*** ./src/utils/session-storage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.st = void 0;
class SessionStorage {
    constructor() {
        this.saveUser = (user) => {
            sessionStorage.setItem("user", JSON.stringify(user));
        };
        this.getUser = () => {
            const user = sessionStorage.getItem("user");
            if (!user)
                return null;
            return JSON.parse(user);
        };
        this.removeUser = () => {
            sessionStorage.removeItem("user");
        };
        this.savePage = (page) => {
            sessionStorage.setItem("page", page);
        };
        this.getPage = () => {
            const page = sessionStorage.getItem("page");
            if (!page)
                return "";
            return page;
        };
    }
}
exports.st = new SessionStorage();


/***/ }),

/***/ "./src/view/main-view/content-view.ts":
/*!********************************************!*\
  !*** ./src/view/main-view/content-view.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.contentView = void 0;
const send_btn_1 = __importDefault(__webpack_require__(/*! ../../core/components/send-btn/send-btn */ "./src/core/components/send-btn/send-btn.ts"));
const content_1 = __importDefault(__webpack_require__(/*! ../../core/components/content-block/content */ "./src/core/components/content-block/content.ts"));
const create_aside_1 = __webpack_require__(/*! ../../core/components/aside-content/create-aside */ "./src/core/components/aside-content/create-aside.ts");
const create_dialog_elements_1 = __webpack_require__(/*! ../../core/components/dialog-content/create-dialog-elements */ "./src/core/components/dialog-content/create-dialog-elements.ts");
__webpack_require__(/*! ./content.scss */ "./src/view/main-view/content.scss");
__webpack_require__(/*! ../../core/components/aside-content/aside-content.scss */ "./src/core/components/aside-content/aside-content.scss");
__webpack_require__(/*! ../../core/components/dialog-content/dialog-container.scss */ "./src/core/components/dialog-content/dialog-container.scss");
class ContentView {
    constructor() {
        this.userAside = (0, create_aside_1.createUserAside)();
        this.dialogContainer = (0, create_dialog_elements_1.createArticle)("dialog__container");
        this.userSearch = (0, create_aside_1.createUserSearch)();
        this.userList = (0, create_aside_1.createUserList)();
        this.userHeaderName = (0, create_dialog_elements_1.createLabel)("dialog__name");
        this.userHeaderStatus = (0, create_dialog_elements_1.createLabel)("dialog__status");
        this.inputMessage = (0, create_dialog_elements_1.createInputMessage)();
        this.dialogHeader = (0, create_dialog_elements_1.createArticle)("dialog__header");
        this.dialogForm = (0, create_dialog_elements_1.createDialogInputForm)();
        this.dialogContent = (0, create_dialog_elements_1.createDialogContent)();
        this.content = document.createElement("main");
        this.content.classList.add("main");
        this.sendButton = new send_btn_1.default();
        this.contentClass = new content_1.default(this.userSearch, this.userList, this.dialogForm, this.inputMessage, this.dialogContent);
    }
    createUserAsideElements() {
        this.contentClass.searchUser();
        this.userAside.append(this.userSearch, this.userList);
    }
    createUserDialogElements() {
        this.contentClass.submitMessage();
        this.dialogHeader.append(this.userHeaderName, this.userHeaderStatus);
        this.dialogForm.append(this.inputMessage, this.sendButton.getRootElement());
        this.dialogContainer.append(this.dialogHeader, this.dialogContent, this.dialogForm);
    }
    createContentElements() {
        this.createUserAsideElements();
        this.createUserDialogElements();
        this.content.append(this.userAside, this.dialogContainer);
    }
    getRootElement() {
        this.createContentElements();
        return this.content;
    }
}
exports.contentView = new ContentView();


/***/ }),

/***/ "./src/view/popup/popup.ts":
/*!*********************************!*\
  !*** ./src/view/popup/popup.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.popup = void 0;
const button_1 = __importDefault(__webpack_require__(/*! ../../core/components/button/button */ "./src/core/components/button/button.ts"));
__webpack_require__(/*! ./popup.scss */ "./src/view/popup/popup.scss");
class CreatePopup {
    constructor() {
        this.okBtn = new button_1.default("popup__btn", "btn", "Ok", "button");
    }
    createPopupElements(text) {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        const popupContent = document.createElement("div");
        popupContent.classList.add("popup__content");
        const popupText = document.createElement("h3");
        popupText.classList.add("popup__text");
        popupText.textContent = text[0].toUpperCase() + text.slice(1, text.length);
        popupContent.append(popupText, this.okBtn.getRootElement());
        const popupBody = document.createElement("div");
        popupBody.classList.add("popup__body");
        popupBody.append(popupContent);
        popup.append(popupBody);
        document.body.append(popup);
        this.closePopup();
    }
    closePopup() {
        this.okBtn.onClick(() => {
            const popup = document.querySelector(".popup");
            if (popup) {
                document.body.removeChild(popup);
            }
        });
    }
}
exports.popup = new CreatePopup();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9hc2lkZS1jb250ZW50L2FzaWRlLWNvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvY3JlYXRlLWxvZ2luLWlucHV0L2lucHV0X2ZpZWxkLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZGlhbG9nLWNvbnRlbnQvZGlhbG9nLWNvbnRhaW5lci5zY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9lcnJvci1wYWdlL2Vycm9yLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9pbmZvLXBhZ2UvaW5mby1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXcvbWFpbi12aWV3L2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXcvcG9wdXAvcG9wdXAuc2NzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYXNpZGUtY29udGVudC9hc2lkZS1jb250ZW50LnNjc3M/MDlhZiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnNjc3M/MTg5OSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9jcmVhdGUtbG9naW4taW5wdXQvaW5wdXRfZmllbGQuc2Nzcz8yZjcwIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250YWluZXIuc2Nzcz82OTFjIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2Nzcz85YTRiIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzcz85ODVlIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcGFnZXMvZXJyb3ItcGFnZS9lcnJvci5zY3NzPzA5MDgiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9pbmZvLXBhZ2UvaW5mby1wYWdlLnNjc3M/ZDUxYSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L21haW4tdmlldy9jb250ZW50LnNjc3M/YzNhMyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXcvcG9wdXAvcG9wdXAuc2Nzcz9iNTEyIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcGkvY29uc3QudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcGkvcmVxdWVzdC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2FwaS93ZWJzb2NrZXQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYXNpZGUtY29udGVudC9jcmVhdGUtYXNpZGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9jb250ZW50LWJsb2NrL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvY3JlYXRlLWxvZ2luLWlucHV0L2lucHV0LWZpZWxkLWNyZWF0ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9kaWFsb2ctY29udGVudC9jcmVhdGUtZGlhbG9nLWVsZW1lbnRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2VudGVyLWJ0bi9lbnRlci1idG4udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9mb3JtLXZhbGlkYXRpb24vZm9ybS12YWxpZGF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGlvbi9yZXN1bHQtdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29yZS9jb21wb25lbnRzL2hlYWRlci9sb2dvdXQtYnV0dG9uL2xvZ291dF9idXR0b24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvaW5mby1idG4vaW5mby1idG4udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvc2VuZC1idG4vc2VuZC1idG4udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3BhZ2VzL2luZm8tcGFnZS9pbmZvLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3RhdGUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy90eXBlcy9lbnVtLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvZm9ybWF0LWRhdGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlscy9nZXQtbG9naW4tZGF0YS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzL3BhZ2UvcGFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzL3Nlc3Npb24tc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXcvbWFpbi12aWV3L2NvbnRlbnQtdmlldy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXcvcG9wdXAvcG9wdXAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hc2lkZS11c2VyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICM5ZWFiYTI7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGNvbG9yOiAjNmIyNjIzO1xuICBmb250LXNpemU6IDJyZW07XG59XG4uYXNpZGUtdXNlcl9fc2VhcmNoIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjOWVhYmEyO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmFzaWRlLXVzZXJfX2xpc3Qge1xuICBoZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmFzaWRlLXVzZXJfX2xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG59XG4uYXNpZGUtdXNlcl9fbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkMWM1O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4uYXNpZGUtdXNlcl9fbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVhYmEyO1xufVxuLmFzaWRlLXVzZXJfX3N0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmFzaWRlLXVzZXJfX2l0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMWZyIDNmciAxZnI7XG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xufVxuLmFzaWRlLXVzZXJfX25hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOWU5NTc7XG59XG5cbi5pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMzYzNjE7XG59XG5cbi5oYXMtbWVzc2FnZXMge1xuICBtYXJnaW4tdG9wOiAxLjdyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTllOTU3O1xuICB6LWluZGV4OiAtMTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYXNpZGUtY29udGVudC9hc2lkZS1jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ0RRO0VERVIsZUFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUVRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFBWjtBQUdRO0VBQ0kseUJDcEJNO0VEcUJOLHFCQUFBO0FBRFo7QUFJUTtFQUNJLHlCQ3hCTTtBRHNCbEI7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS0k7RUFDSSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQUhSO0FBS0k7RUFDSSxvQkFBQTtBQUhSOztBQU9BO0VBQ0kseUJDN0NjO0FEeUNsQjs7QUFPQTtFQUNJLHlCQ3JEUTtBRGlEWjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzVEYztFRDZEZCxXQUFBO0FBSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcXHJcXG4uYXNpZGUtdXNlciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAkYy1ncmVlbi1jeWFuLTUwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgY29sb3I6ICRjLXBpbmstOTAwO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuXFxyXFxuICAgICZfX3NlYXJjaCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiAwLjJyZW0gc29saWQgJGMtZ3JlZW4tY3lhbi01MDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2xpc3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xcclxcblxcclxcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDFyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGMtZ3JlZW4tY3lhbi0xMDA7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjLWdyZWVuLWN5YW4tNTAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX3N0YXR1cyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgICAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4xZnIgM2ZyIDFmcjtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xcclxcbiAgICB9XFxyXFxuICAgICZfX25hbWUge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjLWdyZWVuLWN5YW4tODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1waW5rLTgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhcy1tZXNzYWdlcyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuN3JlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjLWdyZWVuLWN5YW4tODAwO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXCIsXCIkYy13aGl0ZTogI2YzZGNkYztcXHJcXG4kYy1waW5rLTEwMDojZThiMjk4O1xcclxcbiRjLXBpbmstMjAwOiNkM2EyOWQ7XFxyXFxuJGMtcGluay04MDA6I2EzNjM2MTtcXHJcXG4kYy1waW5rLTkwMDojNmIyNjIzO1xcclxcbiRjLWdyZWVuLWN5YW4tMTAwOiNiZGQxYzU7XFxyXFxuJGMtZ3JlZW4tY3lhbi01MDA6IzllYWJhMjtcXHJcXG4kYy1ncmVlbi1jeWFuLTgwMDojMTllOTU3O1xcclxcbiRjLXllbGxvdzojZWVjYzhjO1xcclxcbiRjLWJsYWNrOiBibGFjaztcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDFjNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICBidXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBjb2xvcjogI2YzZGNkYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNhMjlkO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC41cmVtIDhyZW0gcmdiYSg4OSwgMSwgNjMsIDAuNyksIGluc2V0IDAgMC41cmVtIDFyZW0gcmdiYSgzNSwgNSwgMjUsIDAuOSksIGluc2V0IDAgLTAuNXJlbSAxcmVtIHJnYmEoMjM3LCA1NSwgMTM0LCAwLjgpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC4zcmVtIDAuM3JlbSAxLjNyZW0gI2YzZGNkYyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59XG5cbi5idG4ge1xuICB3aWR0aDogOXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNhMzYzNjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWNjOGM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC41cmVtIDhyZW0gcmdiYSgxOTYsIDIzMSwgOTksIDAuNyksIGluc2V0IDAgMC41cmVtIDFyZW0gcmdiYSgyNSwgNzEsIDUxLCAwLjkpLCBpbnNldCAwIC0wLjVyZW0gMXJlbSByZ2JhKDIzOSwgNzksIDE5OSwgMC44KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5idG4ge1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29yZS9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDSSxZQUFBO0VBQ0EseUJDSFU7RURJVixnQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHSTtFQUNJO0lBQ0ksY0NkRjtJRGVFLHlCQ2JBO0lEY0EsNElBQ0k7SUFHSixpREFBQTtJQUNBLHFCQUFBO0VBSlY7QUFDRjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0M1QlE7RUQ2QlIseUJDeEJNO0VEeUJOLGdKQUNJO0FBTlI7O0FBV0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBUk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1ncmVlbi1jeWFuLTEwMDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkYy13aGl0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1waW5rLTIwMDtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OlxcclxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAuNXJlbSA4cmVtIHJnYmEoODksIDEsIDYzLCAwLjcpLFxcclxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAuNXJlbSAxcmVtIHJnYmEoMzUsIDUsIDI1LCAwLjkpLFxcclxcbiAgICAgICAgICAgICAgICBpbnNldCAwIC0wLjVyZW0gMXJlbSByZ2JhKDIzNywgNTUsIDEzNCwgMC44KTtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuM3JlbSAwLjNyZW0gMS4zcmVtICRjLXdoaXRlKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHdpZHRoOiA5cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjb2xvcjogJGMtcGluay04MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjLXllbGxvdztcXHJcXG4gICAgYm94LXNoYWRvdzpcXHJcXG4gICAgICAgIGluc2V0IDAgMC41cmVtIDhyZW0gcmdiYSgxOTYsIDIzMSwgOTksIDAuNyksXFxyXFxuICAgICAgICBpbnNldCAwIDAuNXJlbSAxcmVtIHJnYmEoMjUsIDcxLCA1MSwgMC45KSxcXHJcXG4gICAgICAgIGluc2V0IDAgLTAuNXJlbSAxcmVtIHJnYmEoMjM5LCA3OSwgMTk5LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogN3JlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIkYy13aGl0ZTogI2YzZGNkYztcXHJcXG4kYy1waW5rLTEwMDojZThiMjk4O1xcclxcbiRjLXBpbmstMjAwOiNkM2EyOWQ7XFxyXFxuJGMtcGluay04MDA6I2EzNjM2MTtcXHJcXG4kYy1waW5rLTkwMDojNmIyNjIzO1xcclxcbiRjLWdyZWVuLWN5YW4tMTAwOiNiZGQxYzU7XFxyXFxuJGMtZ3JlZW4tY3lhbi01MDA6IzllYWJhMjtcXHJcXG4kYy1ncmVlbi1jeWFuLTgwMDojMTllOTU3O1xcclxcbiRjLXllbGxvdzojZWVjYzhjO1xcclxcbiRjLWJsYWNrOiBibGFjaztcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5sb2dpbl9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2JkZDFjNTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cbi5sb2dpbl9fZm9ybSA+IGxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2EzNjM2MTtcbn1cbi5sb2dpbl9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwLjhyZW0gMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjNmIyNjIzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNkY2RjO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjYmRkMWM1O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmxvZ2luX19pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMC41cmVtIHNvbGlkICNlZWNjOGM7XG59XG4ubG9naW5fX2lucHV0LmVycm9yIHtcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgcmVkO1xufVxuLmxvZ2luX19pbnB1dC52YWxpZCB7XG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkICMxOWU5NTc7XG59XG4ubG9naW5fX2Vycm9yIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2JmMWQxZDtcbn1cblxuLmVudGVyX19idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5sb2dpbl9faW5wdXQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgLmxvZ2luX19pbnB1dF9fZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29yZS9jb21wb25lbnRzL2NyZWF0ZS1sb2dpbi1pbnB1dC9pbnB1dF9maWVsZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NWQTtBRFNaO0FBS0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDbkJJO0VEb0JKLHlCQ3hCRTtFRHlCRiw0QkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFLUTtFQUNJLDRCQUFBO0FBSFo7QUFNUTtFQUNJLHdCQUFBO0FBSlo7QUFPUTtFQUNJLDRCQUFBO0FBTFo7QUFTSTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQUjs7QUFXQTtFQUNJLFdBQUE7QUFSSjs7QUFXQTtFQUVRO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0VBVFY7RUFXTTtJQUNJLGlCQUFBO0VBVFY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xcclxcbi5sb2dpbiB7XFxyXFxuICAgICZfX2Zvcm0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGMtZ3JlZW4tY3lhbi0xMDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcblxcclxcbiAgICAgICAgJiA+IGxhYmVsIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJGMtcGluay04MDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwLjhyZW0gMDtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkYy1waW5rLTkwMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjLXdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyOiAwLjJyZW0gc29saWQgJGMtZ3JlZW4tY3lhbi0xMDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgJGMteWVsbG93O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi5lcnJvciB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwLjNyZW0gc29saWQgcmVkO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi52YWxpZCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwLjNyZW0gc29saWQgJGMtZ3JlZW4tY3lhbi04MDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fZXJyb3Ige1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBjb2xvcjogI2JmMWQxZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXJfX2J0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmxvZ2luIHsgICAgICAgIFxcclxcbiAgICAgICAgJl9faW5wdXQge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgJl9fZXJyb3Ige1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtOyAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbn1cIixcIiRjLXdoaXRlOiAjZjNkY2RjO1xcclxcbiRjLXBpbmstMTAwOiNlOGIyOTg7XFxyXFxuJGMtcGluay0yMDA6I2QzYTI5ZDtcXHJcXG4kYy1waW5rLTgwMDojYTM2MzYxO1xcclxcbiRjLXBpbmstOTAwOiM2YjI2MjM7XFxyXFxuJGMtZ3JlZW4tY3lhbi0xMDA6I2JkZDFjNTtcXHJcXG4kYy1ncmVlbi1jeWFuLTUwMDojOWVhYmEyO1xcclxcbiRjLWdyZWVuLWN5YW4tODAwOiMxOWU5NTc7XFxyXFxuJGMteWVsbG93OiNlZWNjOGM7XFxyXFxuJGMtYmxhY2s6IGJsYWNrO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRpYWxvZ19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciA0ZnIgMC4zZnI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgIzllYWJhMjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgY29sb3I6ICM2YjI2MjM7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5kaWFsb2dfX2hlYWRlciB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgIzllYWJhMjtcbn1cbi5kaWFsb2dfX2NvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgaGVpZ2h0OiA1NXZoO1xufVxuLmRpYWxvZ19fY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbn1cbi5kaWFsb2dfX2NvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDFjNTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLmRpYWxvZ19fY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVhYmEyO1xufVxuLmRpYWxvZ19fbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAzMCU7XG4gIGNvbG9yOiAjYTM2MzYxO1xuICB6LWluZGV4OiAtMTtcbn1cbi5kaWFsb2dfX2Zvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAwLjVmcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXRvcDogMC4ycmVtIHNvbGlkICM5ZWFiYTI7XG59XG4uZGlhbG9nX19pbnB1dCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgIzllYWJhMjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLm1lc3NhZ2VfX2Jsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ubWVzc2FnZV9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMC41ZnI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWFiYTI7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4ubWVzc2FnZV9faGVhZGVyLCAubWVzc2FnZV9fZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5tZXNzYWdlX190ZXh0IHtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGQxYzU7XG59XG5cbi51c2Vycy1tZXNhYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvcmUvY29tcG9uZW50cy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUk7RUFDSSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNDSkk7RURLSixlQUFBO0FBRFI7QUFJSTtFQUNJLG9CQUFBO0VBQ0EsbUNBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUhSO0FBSVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUZaO0FBS1E7RUFDSSx5QkN0Qk07RUR1Qk4scUJBQUE7QUFIWjtBQU1RO0VBQ0kseUJDMUJNO0FEc0JsQjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNDckNJO0VEc0NKLFdBQUE7QUFOUjtBQVNJO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFQUjtBQVVJO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFSUjs7QUFhSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBVlI7QUFhSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkNqRVU7RURrRVYsbUJBQUE7QUFYUjtBQWNJO0VBRUksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWJSO0FBZ0JJO0VBQ0ksaUJBQUE7RUFDQSx5QkNoRlU7QURrRWxCOztBQWtCQTtFQUNJLGtCQUFBO0FBZkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcXHJcXG4uZGlhbG9nIHtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDRmciAwLjNmcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICRjLWdyZWVuLWN5YW4tNTAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkYy1waW5rLTkwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19oZWFkZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgJGMtZ3JlZW4tY3lhbi01MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fY29udGVudCB7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDU1dmg7XFxyXFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1ncmVlbi1jeWFuLTEwMDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGMtZ3JlZW4tY3lhbi01MDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICBsZWZ0OiAzMCU7XFxyXFxuICAgICAgICBjb2xvcjogJGMtcGluay04MDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19mb3JtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAwLjVmcjtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMC4ycmVtIHNvbGlkICRjLWdyZWVuLWN5YW4tNTAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICRjLWdyZWVuLWN5YW4tNTAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICAgICZfX2Jsb2NrIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGMtZ3JlZW4tY3lhbi01MDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2hlYWRlcixcXHJcXG4gICAgJl9fZm9vdGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwICAwLjVyZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1ncmVlbi1jeWFuLTEwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udXNlcnMtbWVzYWFnZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cIixcIiRjLXdoaXRlOiAjZjNkY2RjO1xcclxcbiRjLXBpbmstMTAwOiNlOGIyOTg7XFxyXFxuJGMtcGluay0yMDA6I2QzYTI5ZDtcXHJcXG4kYy1waW5rLTgwMDojYTM2MzYxO1xcclxcbiRjLXBpbmstOTAwOiM2YjI2MjM7XFxyXFxuJGMtZ3JlZW4tY3lhbi0xMDA6I2JkZDFjNTtcXHJcXG4kYy1ncmVlbi1jeWFuLTUwMDojOWVhYmEyO1xcclxcbiRjLWdyZWVuLWN5YW4tODAwOiMxOWU5NTc7XFxyXFxuJGMteWVsbG93OiNlZWNjOGM7XFxyXFxuJGMtYmxhY2s6IGJsYWNrO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9ycy1zY2hvb2wuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9pY29uLWdpdGh1Yi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjOWVhYmEyO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmZvb3Rlcl9fbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9fc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJ0ZW5wb3VuZHMgcmVndWxhclwiO1xufVxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29weXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiwqlcIjtcbn1cbi5mb290ZXJfX2l0ZW06bm90KC5mb290ZXJfX2Rlc2NyaXB0aW9uKTpob3ZlciwgLmZvb3Rlcl9faXRlbTpub3QoLmZvb3Rlcl9fZGVzY3JpcHRpb24pOmZvY3VzIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjNyZW0gMC4zcmVtIDEuM3JlbSBibGFjayk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4uZm9vdGVyX19sb2dvLXJzcyB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbi5mb290ZXJfX2xvZ28tZ2l0aHViIHtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNC42cmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mb290ZXJfX2xpc3Qge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5mb290ZXJfX2xvZ28tcnNzIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDZyZW07XG4gIH1cbiAgLmZvb3Rlcl9fbG9nby1naXRodWIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogM3JlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFEUjtBQUlJO0VBQ0ksa0JBQUE7QUFGUjtBQUlRO0VBQ0ksWUFBQTtBQUZaO0FBTUk7RUFFSSwrQ0FBQTtFQUNBLHNCQUFBO0FBTFI7QUFRSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0VBQUE7QUFOUjtBQVNJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxvRUFBQTtBQVBSOztBQVlBO0VBR1E7SUFDRyxpQkFBQTtFQVhUO0VBY007SUFDRyxxQkFBQTtFQVpUO0VBZU07SUFDSSxxQkFBQTtFQWJWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXFxcIjtcXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAkYy1ncmVlbi1jeWFuLTUwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyOyBcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fc3BhbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcInRlbnBvdW5kcyByZWd1bGFyXFxcIjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19jb3B5cmlnaHQge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfCqSc7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbTpub3QoJl9fZGVzY3JpcHRpb24pOmhvdmVyLFxcclxcbiAgICAmX19pdGVtOm5vdCgmX19kZXNjcmlwdGlvbik6Zm9jdXMge1xcclxcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjNyZW0gMC4zcmVtIDEuM3JlbSBibGFjayk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xvZ28tcnNzIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9ycy1zY2hvb2wuc3ZnXFxcIikgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19sb2dvLWdpdGh1YiB7XFxyXFxuICAgICAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNC42cmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2ljb24tZ2l0aHViLnN2Z1xcXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5mb290ZXIge1xcclxcbiAgICBcXHJcXG4gICAgICAgICZfX2xpc3Qge1xcclxcbiAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgJl9fbG9nby1yc3Mge1xcclxcbiAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2cmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICZfX2xvZ28tZ2l0aHViIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDNyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAwLjVmciAwLjVmcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICM5ZWFiYTI7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uaGVhZGVyX19hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2YjI2MjMsICMxOWU5NTcpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyX19hcnRpY2xlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLDJEQUFBO0VBS0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBTFI7O0FBU0E7RUFDSTtJQUNJLGlCQUFBO0VBTk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMC41ZnIgMC41ZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAkYy1ncmVlbi1jeWFuLTUwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gICAgJl9fYXJ0aWNsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgICAgICAgIDE4MGRlZyxcXHJcXG4gICAgICAgICAgICAkYy1waW5rLTkwMCxcXHJcXG4gICAgICAgICAgICAkYy1ncmVlbi1jeWFuLTgwMFxcclxcbiAgICAgICAgKTtcXHJcXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuaGVhZGVyX19hcnRpY2xlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZy9lcnJvci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5lcnJvcl9fYmxvY2sge1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiA4MHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3Iuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEVBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZXJyb3JfX2Jsb2NrIHtcXHJcXG4gICAgd2lkdGg6IDYwdnc7XFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1nL2Vycm9yLnBuZ1xcXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaW5mb19fYmxvY2sge1xuICBtYXgtd2lkdGg6IDgwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwIDFyZW0gMnJlbTtcbiAgY29sb3I6ICNhMzYzNjE7XG59XG4uaW5mb19fdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmluZm9fX2xpbmssIC5pbmZvX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcInRlbnBvdW5kcyByZWd1bGFyXCI7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAxcyBlYXNlLW91dDtcbn1cbi5pbmZvX19saW5rOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuaW5mb19fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9pbmZvLXBhZ2UvaW5mby1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQ1BJO0FETVo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsWUNORTtBRElWO0FBTUk7RUFFSSxnQ0FBQTtFQUNBLDhCQUFBO0FBTFI7QUFRSTtFQUNJLFlDakJFO0VEa0JGLHFCQUFBO0FBTlI7O0FBVUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtFQVBOO0VBU0U7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7RUFQTjtBQUNGO0FBVUE7RUFDSTtJQUNJLGlCQUFBO0VBUk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3NcXFwiO1xcclxcbi5pbmZvIHtcXHJcXG4gICAgJl9fYmxvY2sge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDJyZW07XFxyXFxuICAgICAgICBjb2xvcjogJGMtcGluay04MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogJGMtYmxhY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgICZfX2xpbmssXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwidGVucG91bmRzIHJlZ3VsYXJcXFwiO1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIGVhc2Utb3V0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbms6aG92ZXIge1xcclxcbiAgICAgICAgY29sb3I6ICRjLWJsYWNrO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcXHJcXG4gICAgLmluZm9fX3RleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XCIsXCIkYy13aGl0ZTogI2YzZGNkYztcXHJcXG4kYy1waW5rLTEwMDojZThiMjk4O1xcclxcbiRjLXBpbmstMjAwOiNkM2EyOWQ7XFxyXFxuJGMtcGluay04MDA6I2EzNjM2MTtcXHJcXG4kYy1waW5rLTkwMDojNmIyNjIzO1xcclxcbiRjLWdyZWVuLWN5YW4tMTAwOiNiZGQxYzU7XFxyXFxuJGMtZ3JlZW4tY3lhbi01MDA6IzllYWJhMjtcXHJcXG4kYy1ncmVlbi1jeWFuLTgwMDojMTllOTU3O1xcclxcbiRjLXllbGxvdzojZWVjYzhjO1xcclxcbiRjLWJsYWNrOiBibGFjaztcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy90ZW5wb3VuZHMtcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy90ZW5wb3VuZHMtcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1NhbGluYS1UcmlhbC1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1NhbGluYS1UcmlhbC1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYnV0dG9uLFxuaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwidGVucG91bmRzIHJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZjJcIiksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJzYWxpbmEgdHJpYWxcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZjJcIiksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwic2FsaW5hIHRyaWFsXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYmRkMWM1LCAjZWVjYzhjLCAjYTM2MzYxKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycmVtIDFyZW07XG59XG5cbi53cmFwcGVyIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInRlbnBvdW5kcyByZWd1bGFyXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic2FsaW5hIHRyaWFsXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFRTs7O0VBR0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7O0VBRUUsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QUN6REE7RUFDSSxnQ0FBQTtFQUNBLG9IQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEMkRKO0FDeERBO0VBQ0ksMkJBQUE7RUFDQSxvSEFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRHlESjtBRXJFQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBRnVFSjs7QUVwRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQ1JNO0VEU04sc0VBQUE7QUZ1RUo7O0FFcEVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRnVFSjs7QUVwRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRnVFSjs7QUMxR0E7RUFDSSxnQ0FBQTtFQUNBLG9IQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FENEdKO0FDekdBO0VBQ0ksMkJBQUE7RUFDQSxvSEFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRDBHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICosXFxyXFxuICAqOjpiZWZvcmUsXFxyXFxuICAqOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHVsIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJ1dHRvbixcXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGgxLFxcclxcbiAgaDIsXFxyXFxuICBoMyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH0gIFxcclxcbiBcIixcIjpyb290IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0ZW5wb3VuZHMgcmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL3RlbnBvdW5kcy1yZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy90ZW5wb3VuZHMtcmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2FsaW5hIHRyaWFsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvU2FsaW5hLVRyaWFsLVJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1NhbGluYS1UcmlhbC1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBmb250LWZhbWlseTogXFxcInNhbGluYSB0cmlhbFxcXCI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2JkZDFjNSwgI2VlY2M4YywgI2EzNjM2MSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5MHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInRlbnBvdW5kcyByZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvdGVucG91bmRzLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL3RlbnBvdW5kcy1yZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzYWxpbmEgdHJpYWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9TYWxpbmEtVHJpYWwtUmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvU2FsaW5hLVRyaWFsLVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJ0ZW5wb3VuZHMgcmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvdGVucG91bmRzLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxyXFxuICAgICAgICB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy90ZW5wb3VuZHMtcmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzYWxpbmEgdHJpYWxcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL1NhbGluYS1UcmlhbC1SZWd1bGFyLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcclxcbiAgICAgICAgdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvU2FsaW5hLVRyaWFsLVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuL2ZvbnRzLnNjc3NcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4vY29sb3JzLnNjc3NcXFwiO1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJzYWxpbmEgdHJpYWxcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICBjb2xvcjogJGMtYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGMtZ3JlZW4tY3lhbi0xMDAsICRjLXllbGxvdywgJGMtcGluay04MDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cIixcIiRjLXdoaXRlOiAjZjNkY2RjO1xcclxcbiRjLXBpbmstMTAwOiNlOGIyOTg7XFxyXFxuJGMtcGluay0yMDA6I2QzYTI5ZDtcXHJcXG4kYy1waW5rLTgwMDojYTM2MzYxO1xcclxcbiRjLXBpbmstOTAwOiM2YjI2MjM7XFxyXFxuJGMtZ3JlZW4tY3lhbi0xMDA6I2JkZDFjNTtcXHJcXG4kYy1ncmVlbi1jeWFuLTUwMDojOWVhYmEyO1xcclxcbiRjLWdyZWVuLWN5YW4tODAwOiMxOWU5NTc7XFxyXFxuJGMteWVsbG93OiNlZWNjOGM7XFxyXFxuJGMtYmxhY2s6IGJsYWNrO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXcvbWFpbi12aWV3L2NvbnRlbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXFxcIjtcXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7IFxcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wb3B1cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNCwgMzQsIDAuNyk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucG9wdXBfX2JvZHkge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuLnBvcHVwX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZiMjYyMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZDFjNTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5wb3B1cF9fdGV4dCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L3BvcHVwL3BvcHVwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHVDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3hCSTtFRHlCSix5QkN4QlU7RUR5QlYsbUJBQUE7QUFGUjtBQUtJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFIUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNCwgMzQsIDAuNyk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFxyXFxuICAgICZfX2JvZHkge1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fY29udGVudCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogJGMtcGluay05MDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1ncmVlbi1jeWFuLTEwMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiJGMtd2hpdGU6ICNmM2RjZGM7XFxyXFxuJGMtcGluay0xMDA6I2U4YjI5ODtcXHJcXG4kYy1waW5rLTIwMDojZDNhMjlkO1xcclxcbiRjLXBpbmstODAwOiNhMzYzNjE7XFxyXFxuJGMtcGluay05MDA6IzZiMjYyMztcXHJcXG4kYy1ncmVlbi1jeWFuLTEwMDojYmRkMWM1O1xcclxcbiRjLWdyZWVuLWN5YW4tNTAwOiM5ZWFiYTI7XFxyXFxuJGMtZ3JlZW4tY3lhbi04MDA6IzE5ZTk1NztcXHJcXG4kYy15ZWxsb3c6I2VlY2M4YztcXHJcXG4kYy1ibGFjazogYmxhY2s7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc2lkZS1jb250ZW50LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc2lkZS1jb250ZW50LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0X2ZpZWxkLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dF9maWVsZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2ctY29udGFpbmVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2ctY29udGFpbmVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Vycm9yLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lcnJvci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmZvLXBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZm8tcGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNPQ0tFVF9VUkwgPSB2b2lkIDA7XG5leHBvcnRzLlNPQ0tFVF9VUkwgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6NDAwMFwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRVc2Vyc1JlcXVlc3QgPSBleHBvcnRzLmdldEV4dGVybmFsUmVxdWVzdCA9IGV4cG9ydHMuZ2V0UmVxdWVzdCA9IHZvaWQgMDtcbmNvbnN0IGdldFJlcXVlc3QgPSAoaWQsIGxvZ2luLCBwYXNzd29yZCwgbWVzc2FnZVR5cGUpID0+ICh7XG4gICAgaWQsXG4gICAgdHlwZTogbWVzc2FnZVR5cGUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICBsb2dpbixcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbmV4cG9ydHMuZ2V0UmVxdWVzdCA9IGdldFJlcXVlc3Q7XG5jb25zdCBnZXRFeHRlcm5hbFJlcXVlc3QgPSAobG9naW4sIGlzTG9naW5lZCwgbWVzc2FnZVR5cGUpID0+ICh7XG4gICAgaWQ6IG51bGwsXG4gICAgdHlwZTogbWVzc2FnZVR5cGUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICBsb2dpbixcbiAgICAgICAgICAgIGlzTG9naW5lZCxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5leHBvcnRzLmdldEV4dGVybmFsUmVxdWVzdCA9IGdldEV4dGVybmFsUmVxdWVzdDtcbntcbn1cbmNvbnN0IGdldFVzZXJzUmVxdWVzdCA9IChpZCwgbWVzc2FnZVR5cGUpID0+ICh7XG4gICAgaWQsXG4gICAgdHlwZTogbWVzc2FnZVR5cGUsXG4gICAgcGF5bG9hZDogbnVsbCxcbn0pO1xuZXhwb3J0cy5nZXRVc2Vyc1JlcXVlc3QgPSBnZXRVc2Vyc1JlcXVlc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMud3MgPSB2b2lkIDA7XG5jb25zdCBzdGF0ZV8xID0gcmVxdWlyZShcIi4uL3N0YXRlL3N0YXRlXCIpO1xuY29uc3QgY29uc3RfMSA9IHJlcXVpcmUoXCIuL2NvbnN0XCIpO1xuY29uc3QgZW51bV8xID0gcmVxdWlyZShcIi4uL3R5cGVzL2VudW1cIik7XG5jb25zdCByZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0XCIpO1xuY29uc3Qgc2Vzc2lvbl9zdG9yYWdlXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvc2Vzc2lvbi1zdG9yYWdlXCIpO1xuY29uc3QgcG9wdXBfMSA9IHJlcXVpcmUoXCIuLi92aWV3L3BvcHVwL3BvcHVwXCIpO1xuY2xhc3MgV2Vic29ja2V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gZW51bV8xLk1lc3NhZ2VUeXBlLmxvZ291dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbG9naW4sIGlzTG9naW5lZCB9ID0gdXNlcjtcbiAgICAgICAgICAgICAgICBzdGF0ZV8xLnN0YXRlLnNldFVzZXIodXNlcik7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0xvZ2luZWQpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJsb2dpblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09IGVudW1fMS5NZXNzYWdlVHlwZS5sb2dpbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbG9naW4sIGlzTG9naW5lZCB9ID0gdXNlcjtcbiAgICAgICAgICAgICAgICBzdGF0ZV8xLnN0YXRlLnNldFVzZXIodXNlcik7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9naW5lZClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIm1haW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS50eXBlID09PSBlbnVtXzEuTWVzc2FnZVR5cGUuZXh0ZXJuYWxfbG9naW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdXNlciB9ID0gcGF5bG9hZDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxvZ2luLCBpc0xvZ2luZWQgfSA9IHVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRlcm5hbExvZ2luKGxvZ2luLCBpc0xvZ2luZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09IGVudW1fMS5NZXNzYWdlVHlwZS5pbmFjdGl2ZV91c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzZXJzIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIHN0YXRlXzEuc3RhdGUuc2V0SW5hY3RpdmVVc2Vycyh1c2Vycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gZW51bV8xLk1lc3NhZ2VUeXBlLmFjdGl2ZV91c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzZXJzIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIHN0YXRlXzEuc3RhdGUuc2V0QWN0aXZlVXNlcnModXNlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnR5cGUgPT09IGVudW1fMS5NZXNzYWdlVHlwZS5lcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcImxvZ2luXCI7XG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuZXJyb3IgPT09IFwiaW5jb3JyZWN0IHBhc3N3b3JkXCIpXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwXzEucG9wdXAuY3JlYXRlUG9wdXBFbGVtZW50cyhwYXlsb2FkLmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBjb25zdF8xLlNPQ0tFVF9VUkw7XG4gICAgICAgIHRoaXMuaW5pdExpc3RlbmVycygpO1xuICAgIH1cbiAgICBpbml0TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovIGNvbnNvbGUubG9nKC4uLm9vX29vKGAxMjE3ODgyOTI2XzIxXzZfMjFfMzBfNGAsIGAgJHtlcnJvcn1gKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2dJbihsb2dpbiwgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gICAgICAgIHNlc3Npb25fc3RvcmFnZV8xLnN0LnNhdmVVc2VyKHsgaWQsIGxvZ2luLCBwYXNzd29yZCB9KTtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSgoMCwgcmVxdWVzdF8xLmdldFJlcXVlc3QpKGlkLCBsb2dpbiwgcGFzc3dvcmQsIGVudW1fMS5NZXNzYWdlVHlwZS5sb2dpbikpKTtcbiAgICB9XG4gICAgbG9nT3V0KCkge1xuICAgICAgICBjb25zdCB1c2VyQ3VycmVudCA9IHNlc3Npb25fc3RvcmFnZV8xLnN0LmdldFVzZXIoKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGlkOiB1c2VyQ3VycmVudCA9PT0gbnVsbCB8fCB1c2VyQ3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlckN1cnJlbnQuaWQsXG4gICAgICAgICAgICB0eXBlOiBlbnVtXzEuTWVzc2FnZVR5cGUubG9nb3V0LFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW46IHVzZXJDdXJyZW50ID09PSBudWxsIHx8IHVzZXJDdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyQ3VycmVudC5sb2dpbixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXJDdXJyZW50ID09PSBudWxsIHx8IHVzZXJDdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyQ3VycmVudC5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShyZXF1ZXN0KSk7XG4gICAgICAgIHNlc3Npb25fc3RvcmFnZV8xLnN0LnJlbW92ZVVzZXIoKTtcbiAgICB9XG4gICAgZXh0ZXJuYWxMb2dpbihsb2dpbiwgaXNMb2dpbmVkKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoKDAsIHJlcXVlc3RfMS5nZXRFeHRlcm5hbFJlcXVlc3QpKGxvZ2luLCBpc0xvZ2luZWQsIGVudW1fMS5NZXNzYWdlVHlwZS5leHRlcm5hbF9sb2dpbikpKTtcbiAgICB9XG4gICAgZ2V0QWN0aXZlVXNlcnMoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KCgwLCByZXF1ZXN0XzEuZ2V0VXNlcnNSZXF1ZXN0KShpZCwgZW51bV8xLk1lc3NhZ2VUeXBlLmFjdGl2ZV91c2VyKSkpO1xuICAgIH1cbiAgICBnZXRJbkFjdGl2ZVVzZXJzKCkge1xuICAgICAgICBjb25zdCBpZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSgoMCwgcmVxdWVzdF8xLmdldFVzZXJzUmVxdWVzdCkoaWQsIGVudW1fMS5NZXNzYWdlVHlwZS5pbmFjdGl2ZV91c2VyKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMud3MgPSBuZXcgV2Vic29ja2V0KCk7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAvKiBjOCBpZ25vcmUgc3RhcnQgKi8gLyogZXNsaW50LWRpc2FibGUgKi8gO1xuZnVuY3Rpb24gb29fY20oKSB7IHRyeSB7XG4gICAgcmV0dXJuICgwLCBldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsIGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDMxYThhOD1fMHgyOGUzOyhmdW5jdGlvbihfMHgzYzEyMmIsXzB4MzgyNjJkKXt2YXIgXzB4NGExOTUzPV8weDI4ZTMsXzB4MzVkMjczPV8weDNjMTIyYigpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NGU4NDM4PXBhcnNlSW50KF8weDRhMTk1MygweDFmMSkpLzB4MSoocGFyc2VJbnQoXzB4NGExOTUzKDB4MWNiKSkvMHgyKSstcGFyc2VJbnQoXzB4NGExOTUzKDB4MWQ4KSkvMHgzKigtcGFyc2VJbnQoXzB4NGExOTUzKDB4MjQ4KSkvMHg0KSstcGFyc2VJbnQoXzB4NGExOTUzKDB4MjZjKSkvMHg1K3BhcnNlSW50KF8weDRhMTk1MygweDI3MikpLzB4NiooLXBhcnNlSW50KF8weDRhMTk1MygweDFkOSkpLzB4NykrLXBhcnNlSW50KF8weDRhMTk1MygweDI3NCkpLzB4OCooLXBhcnNlSW50KF8weDRhMTk1MygweDI3OCkpLzB4OSkrLXBhcnNlSW50KF8weDRhMTk1MygweDI2MCkpLzB4YStwYXJzZUludChfMHg0YTE5NTMoMHgxYjcpKS8weGI7aWYoXzB4NGU4NDM4PT09XzB4MzgyNjJkKWJyZWFrO2Vsc2UgXzB4MzVkMjczWydwdXNoJ10oXzB4MzVkMjczWydzaGlmdCddKCkpO31jYXRjaChfMHg1Y2JlMDIpe18weDM1ZDI3M1sncHVzaCddKF8weDM1ZDI3M1snc2hpZnQnXSgpKTt9fX0oXzB4NWRmZCwweDZlMGNiKSk7ZnVuY3Rpb24gXzB4NWRmZCgpe3ZhciBfMHhmZWJlNTI9WydCdWZmZXInLCdnZXR0ZXInLCdfcXVvdGVkUmVnRXhwJywncHJvdG90eXBlJywnbG9nJywnZW52JywnZWxlbWVudHMnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdnZXRQcm90b3R5cGVPZicsJ3Jvb3RfZXhwJywndGltZVN0YW1wJywnJywncmVhZHlTdGF0ZScsJ3Vua25vd24nLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnY29uY2F0JywnX3JlZ0V4cFRvU3RyaW5nJywnc3RhY2tUcmFjZUxpbWl0JywnY2F0Y2gnLCdwYXRoJywncmVtaXgnLCdQT1NJVElWRV9JTkZJTklUWScsJ3Bvc2l0aXZlSW5maW5pdHknLCdfc29ja2V0JywndW5kZWZpbmVkJywnX2lzTWFwJywndGltZScsJ1N0cmluZycsJ25vdycsJ3N5bWJvbCcsJ2lzQXJyYXknLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCdfY29ubmVjdGluZycsJ19fZXMnKydNb2R1bGUnLCdmb3JFYWNoJywnX2FkZExvYWROb2RlJywndG90YWxTdHJMZW5ndGgnLCdzb3J0UHJvcHMnLCdkYXRlJywnX3Byb3BlcnR5JywnMTIyNTZEc0hMZ3QnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdfcF9uYW1lJywnMTcxMzQ3MzY1NzAxNycsJ19jb25uZWN0VG9Ib3N0Tm93JywnX2Nvbm5lY3RlZCcsJ3NsaWNlJywnX3JlY29ubmVjdFRpbWVvdXQnLCd0b0xvd2VyQ2FzZScsJ3BvcCcsJ3N1YnN0cicsJ25vZGVNb2R1bGVzJywncm9vdEV4cHJlc3Npb24nLCduZWdhdGl2ZUluZmluaXR5JywnX3NlbmRFcnJvck1lc3NhZ2UnLCdzdGFjaycsJ19zZXROb2RlSWQnLCdwYXJlbnQnLCdfaXNTZXQnLCdhcmdzJywnZGVwdGgnLCdfaGFzU2V0T25JdHNQYXRoJywndmVyc2lvbnMnLCdvcmlnaW4nLCc0OTc3OTcwZk9ZWmtSJywnY2FwcGVkRWxlbWVudHMnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ25hbicsJ2dldE93blByb3BlcnR5TmFtZXMnLCd0aGVuJywnaW5kZXgnLCdhbmd1bGFyJywnbm9GdW5jdGlvbnMnLCdjYWxsJywnbmV4dC5qcycsJ29uZXJyb3InLCcyNzg2NDYwSm5rc3lUJywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywncmVkdWNlTGltaXRzJywnZ2V0JywnW29iamVjdFxcXFx4MjBBcnJheV0nLCd3czovLycsJzI5NGh3TVFpSicsJ2pvaW4nLCc1MTg5NzUyTE5XZlBKJywnX2lzUHJpbWl0aXZlVHlwZScsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ29iamVjdCcsJzl0V05PSGsnLCdob3N0JywndmFsdWUnLCdlZGdlJyxcXFwiYzpcXFxcXFxcXFVzZXJzXFxcXFxcXFzQr9C90LBcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4zMDlcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ3N0cmluZ2lmeScsJ19jb25zb2xlX25pbmphJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ2JhY2tncm91bmQ6XFxcXHgyMHJnYigzMCwzMCwzMCk7XFxcXHgyMGNvbG9yOlxcXFx4MjByZ2IoMjU1LDIxMyw5MiknLCdub2RlJywnY29uc3RydWN0b3InLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ3JlbG9hZCcsJ1xcXFx4MjBicm93c2VyJywncGVyZl9ob29rcycsJ3NlZVxcXFx4MjBodHRwczovL3Rpbnl1cmwuY29tLzJ2dDhqeHp3XFxcXHgyMGZvclxcXFx4MjBtb3JlXFxcXHgyMGluZm8uJywnbmVnYXRpdmVaZXJvJywnZGVmaW5lUHJvcGVydHknLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnZXJyb3InLCdfU3ltYm9sJywnX3NvcnRQcm9wcycsJ190eXBlJywnbWF0Y2gnLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJ19zZXROb2RlUXVlcnlQYXRoJywnaG9zdG5hbWUnLCd1bnJlZicsJ3dhcm4nLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdudWxsJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywndG9TdHJpbmcnLCdORUdBVElWRV9JTkZJTklUWScsJ19rZXlTdHJSZWdFeHAnLCdhdXRvRXhwYW5kTGltaXQnLCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJywnX2RhdGVUb1N0cmluZycsJ01hcCcsJ3NldHRlcicsJ19kaXNwb3NlV2Vic29ja2V0JywncmVwbGFjZScsJ21lc3NhZ2UnLCdfaXNVbmRlZmluZWQnLCdkZWZhdWx0JywnU3ltYm9sJywnMTMxMzIxMzBQRkVyTFcnLCdzdHJMZW5ndGgnLCdjYXBwZWRQcm9wcycsJ19zZXROb2RlTGFiZWwnLCd1bnNoaWZ0JywnX2FkZEZ1bmN0aW9uc05vZGUnLCdjdXJyZW50JywnX2luTmV4dEVkZ2UnLCdnbG9iYWwnLCdwb3J0JywnZW51bWVyYWJsZScsJ29uY2xvc2UnLCd0ZXN0JywnXFxcXHgyMHNlcnZlcicsJ05FWFRfUlVOVElNRScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCd0eXBlJywnYXV0b0V4cGFuZCcsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnY291bnQnLCc3MjI1NGZWUElNeicsJ1NldCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnX2luQnJvd3NlcicsJ2RhdGEnLCdfYWRkUHJvcGVydHknLCdzdHJpbmcnLCdzZXQnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCd0cmFjZScsJ2hpdHMnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnNDQ3SERjcWRuJywnMTIzNjQxcXJwQkhQJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ3Byb2Nlc3MnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdfdW5kZWZpbmVkJywnMS4wLjAnLCdtZXRob2QnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdjcmVhdGUnLCdocnRpbWUnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19pc05lZ2F0aXZlWmVybycsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ2JpZ2ludCcsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnbG9jYXRpb24nLCdjYXBwZWQnLCdfY2xlYW5Ob2RlJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdsZW5ndGgnLCdnZXRXZWJTb2NrZXRDbGFzcycsJ1tvYmplY3RcXFxceDIwTWFwXScsJzJKSWl5cngnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCcuLi4nLCdIVE1MQWxsQ29sbGVjdGlvbicsJ3B1c2gnLCduYW1lJywnYXJyYXknLCdhbGxTdHJMZW5ndGgnLCdzZXJpYWxpemUnLCd3cy9pbmRleC5qcycsJ19wXycsJ2xldmVsJywncHJvcHMnLCdwZXJmb3JtYW5jZScsJ2luY2x1ZGVzJywnY29uc29sZScsJ051bWJlcicsJ3BhdGhUb0ZpbGVVUkwnLCdvbm1lc3NhZ2UnLCdjb3ZlcmFnZScsJ3NlbmQnLCdtYXAnLCdfV2ViU29ja2V0Q2xhc3MnLCdfd3MnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfcHJvcGVydHlOYW1lJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIkRFU0tUT1AtTUdSQUU5N1xcXCIsXFxcIjE5Mi4xNjguMy42XFxcIl0sJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCcnLCdFcnJvcicsJ2Nsb3NlJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywncmVzb2x2ZUdldHRlcnMnLCdfb2JqZWN0VG9TdHJpbmcnLCdfY2FwSWZTdHJpbmcnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnX2FsbG93ZWRUb1NlbmQnLCdpbmRleE9mJywnZnVuY3Rpb24nLCdfaXNBcnJheScsJ2JpbmQnLCdudW1iZXInLCdkb2NrZXJpemVkQXBwJywnX1dlYlNvY2tldCddO18weDVkZmQ9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4ZmViZTUyO307cmV0dXJuIF8weDVkZmQoKTt9dmFyIEs9T2JqZWN0W18weDMxYThhOCgweDFlMildLFY9T2JqZWN0W18weDMxYThhOCgweDE5OCldLEc9T2JqZWN0W18weDMxYThhOCgweDFhOCldLGVlPU9iamVjdFtfMHgzMWE4YTgoMHgyNjQpXSx0ZT1PYmplY3RbXzB4MzFhOGE4KDB4MjI3KV0sbmU9T2JqZWN0W18weDMxYThhOCgweDIyMildWydoYXNPd25Qcm9wZXJ0eSddLHJlPShfMHg1ODdlOWYsXzB4MWRmNGMyLF8weGEzMTQ0MixfMHhjYzRkYmQpPT57dmFyIF8weDUxMzUxMD1fMHgzMWE4YTg7aWYoXzB4MWRmNGMyJiZ0eXBlb2YgXzB4MWRmNGMyPT1fMHg1MTM1MTAoMHgyNzcpfHx0eXBlb2YgXzB4MWRmNGMyPT1fMHg1MTM1MTAoMHgyMTkpKXtmb3IobGV0IF8weDMzMjg5NiBvZiBlZShfMHgxZGY0YzIpKSFuZVtfMHg1MTM1MTAoMHgyNjkpXShfMHg1ODdlOWYsXzB4MzMyODk2KSYmXzB4MzMyODk2IT09XzB4YTMxNDQyJiZWKF8weDU4N2U5ZixfMHgzMzI4OTYseydnZXQnOigpPT5fMHgxZGY0YzJbXzB4MzMyODk2XSwnZW51bWVyYWJsZSc6IShfMHhjYzRkYmQ9RyhfMHgxZGY0YzIsXzB4MzMyODk2KSl8fF8weGNjNGRiZFtfMHg1MTM1MTAoMHgxYzEpXX0pO31yZXR1cm4gXzB4NTg3ZTlmO30sSD0oXzB4NTBlNzU2LF8weDQ2N2VmMSxfMHgxNjZjNWQpPT4oXzB4MTY2YzVkPV8weDUwZTc1NiE9bnVsbD9LKHRlKF8weDUwZTc1NikpOnt9LHJlKF8weDQ2N2VmMXx8IV8weDUwZTc1Nnx8IV8weDUwZTc1NltfMHgzMWE4YTgoMHgyNDEpXT9WKF8weDE2NmM1ZCxfMHgzMWE4YTgoMHgxYjUpLHsndmFsdWUnOl8weDUwZTc1NiwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDE2NmM1ZCxfMHg1MGU3NTYpKSxxPWNsYXNze2NvbnN0cnVjdG9yKF8weDcyMjU3ZixfMHg2N2VjNmIsXzB4MjM1MjM3LF8weDcxMjQ5OSxfMHgzM2RiODApe3ZhciBfMHg0NTAyZDE9XzB4MzFhOGE4O3RoaXNbJ2dsb2JhbCddPV8weDcyMjU3Zix0aGlzWydob3N0J109XzB4NjdlYzZiLHRoaXNbXzB4NDUwMmQxKDB4MWMwKV09XzB4MjM1MjM3LHRoaXNbJ25vZGVNb2R1bGVzJ109XzB4NzEyNDk5LHRoaXNbXzB4NDUwMmQxKDB4MjFkKV09XzB4MzNkYjgwLHRoaXNbXzB4NDUwMmQxKDB4MjE3KV09ITB4MCx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1tfMHg0NTAyZDEoMHgyNGQpXT0hMHgxLHRoaXNbXzB4NDUwMmQxKDB4MjQwKV09ITB4MSx0aGlzW18weDQ1MDJkMSgweDFiZSldPV8weDcyMjU3ZltfMHg0NTAyZDEoMHgxZGIpXT8uW18weDQ1MDJkMSgweDIyNCldPy5bJ05FWFRfUlVOVElNRSddPT09XzB4NDUwMmQxKDB4MjdiKSx0aGlzW18weDQ1MDJkMSgweDFjZildPSF0aGlzW18weDQ1MDJkMSgweDFiZildW18weDQ1MDJkMSgweDFkYildPy5bXzB4NDUwMmQxKDB4MjVlKV0/LltfMHg0NTAyZDEoMHgyODEpXSYmIXRoaXNbXzB4NDUwMmQxKDB4MWJlKV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzW18weDQ1MDJkMSgweDFhNCldPTB4MCx0aGlzW18weDQ1MDJkMSgweDIwZCldPTB4MTQsdGhpc1tfMHg0NTAyZDEoMHgyNjIpXT1fMHg0NTAyZDEoMHgxZDcpLHRoaXNbXzB4NDUwMmQxKDB4MjU2KV09KHRoaXNbJ19pbkJyb3dzZXInXT8nQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnOidDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcpK3RoaXNbXzB4NDUwMmQxKDB4MjYyKV07fWFzeW5jWydnZXRXZWJTb2NrZXRDbGFzcyddKCl7dmFyIF8weDUwNzkwOD1fMHgzMWE4YTg7aWYodGhpc1tfMHg1MDc5MDgoMHgyMDcpXSlyZXR1cm4gdGhpc1tfMHg1MDc5MDgoMHgyMDcpXTtsZXQgXzB4NDkxZWQ3O2lmKHRoaXNbXzB4NTA3OTA4KDB4MWNmKV18fHRoaXNbXzB4NTA3OTA4KDB4MWJlKV0pXzB4NDkxZWQ3PXRoaXNbXzB4NTA3OTA4KDB4MWJmKV1bJ1dlYlNvY2tldCddO2Vsc2V7aWYodGhpc1tfMHg1MDc5MDgoMHgxYmYpXVtfMHg1MDc5MDgoMHgxZGIpXT8uW18weDUwNzkwOCgweDIxZSldKV8weDQ5MWVkNz10aGlzWydnbG9iYWwnXVtfMHg1MDc5MDgoMHgxZGIpXT8uW18weDUwNzkwOCgweDIxZSldO2Vsc2UgdHJ5e2xldCBfMHg1YzZlM2Q9YXdhaXQgaW1wb3J0KCdwYXRoJyk7XzB4NDkxZWQ3PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydCgndXJsJykpW18weDUwNzkwOCgweDIwMildKF8weDVjNmUzZFtfMHg1MDc5MDgoMHgyNzMpXSh0aGlzW18weDUwNzkwOCgweDI1MyldLF8weDUwNzkwOCgweDFmYSkpKVtfMHg1MDc5MDgoMHgxYTkpXSgpKSlbJ2RlZmF1bHQnXTt9Y2F0Y2h7dHJ5e18weDQ5MWVkNz1yZXF1aXJlKHJlcXVpcmUoXzB4NTA3OTA4KDB4MjMyKSlbXzB4NTA3OTA4KDB4MjczKV0odGhpc1snbm9kZU1vZHVsZXMnXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcihfMHg1MDc5MDgoMHgyNmQpKTt9fX1yZXR1cm4gdGhpc1tfMHg1MDc5MDgoMHgyMDcpXT1fMHg0OTFlZDcsXzB4NDkxZWQ3O31bXzB4MzFhOGE4KDB4MjRjKV0oKXt2YXIgXzB4NDFiMGNlPV8weDMxYThhODt0aGlzWydfY29ubmVjdGluZyddfHx0aGlzW18weDQxYjBjZSgweDI0ZCldfHx0aGlzW18weDQxYjBjZSgweDFhNCldPj10aGlzW18weDQxYjBjZSgweDIwZCldfHwodGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgxLHRoaXNbXzB4NDFiMGNlKDB4MjQwKV09ITB4MCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddKyssdGhpc1tfMHg0MWIwY2UoMHgyMDgpXT1uZXcgUHJvbWlzZSgoXzB4MWYwMDMxLF8weDRkODgxOSk9Pnt2YXIgXzB4MTk3M2Y3PV8weDQxYjBjZTt0aGlzW18weDE5NzNmNygweDFlZildKClbJ3RoZW4nXShfMHg1ODY1MGQ9Pnt2YXIgXzB4NGMwNTZjPV8weDE5NzNmNztsZXQgXzB4MzUwZmM5PW5ldyBfMHg1ODY1MGQoXzB4NGMwNTZjKDB4MjcxKSsoIXRoaXNbJ19pbkJyb3dzZXInXSYmdGhpc1tfMHg0YzA1NmMoMHgyMWQpXT9fMHg0YzA1NmMoMHgxOWYpOnRoaXNbXzB4NGMwNTZjKDB4Mjc5KV0pKyc6Jyt0aGlzW18weDRjMDU2YygweDFjMCldKTtfMHgzNTBmYzlbXzB4NGMwNTZjKDB4MjZiKV09KCk9Pnt2YXIgXzB4MTg3MGIxPV8weDRjMDU2Yzt0aGlzW18weDE4NzBiMSgweDIxNyldPSEweDEsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHgzNTBmYzkpLHRoaXNbXzB4MTg3MGIxKDB4MjBjKV0oKSxfMHg0ZDg4MTkobmV3IEVycm9yKF8weDE4NzBiMSgweDFhZCkpKTt9LF8weDM1MGZjOVsnb25vcGVuJ109KCk9Pnt2YXIgXzB4NWU3MDY0PV8weDRjMDU2Yzt0aGlzW18weDVlNzA2NCgweDFjZildfHxfMHgzNTBmYzlbXzB4NWU3MDY0KDB4MjM2KV0mJl8weDM1MGZjOVtfMHg1ZTcwNjQoMHgyMzYpXVtfMHg1ZTcwNjQoMHgxYTIpXSYmXzB4MzUwZmM5W18weDVlNzA2NCgweDIzNildW18weDVlNzA2NCgweDFhMildKCksXzB4MWYwMDMxKF8weDM1MGZjOSk7fSxfMHgzNTBmYzlbJ29uY2xvc2UnXT0oKT0+e3ZhciBfMHg1MTk3ZjU9XzB4NGMwNTZjO3RoaXNbXzB4NTE5N2Y1KDB4MWM5KV09ITB4MCx0aGlzW18weDUxOTdmNSgweDFiMSldKF8weDM1MGZjOSksdGhpc1tfMHg1MTk3ZjUoMHgyMGMpXSgpO30sXzB4MzUwZmM5W18weDRjMDU2YygweDIwMyldPV8weDI1MTk1Nj0+e3ZhciBfMHgxN2MzZGY9XzB4NGMwNTZjO3RyeXtfMHgyNTE5NTYmJl8weDI1MTk1NltfMHgxN2MzZGYoMHgxZDApXSYmdGhpc1tfMHgxN2MzZGYoMHgxY2YpXSYmSlNPTlsncGFyc2UnXShfMHgyNTE5NTZbXzB4MTdjM2RmKDB4MWQwKV0pW18weDE3YzNkZigweDFlMCldPT09J3JlbG9hZCcmJnRoaXNbXzB4MTdjM2RmKDB4MWJmKV1bXzB4MTdjM2RmKDB4MWVhKV1bXzB4MTdjM2RmKDB4Mjg0KV0oKTt9Y2F0Y2h7fX07fSlbXzB4MTk3M2Y3KDB4MjY1KV0oXzB4NGE4NTAwPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDAsdGhpc1tfMHgxOTczZjcoMHgyNDApXT0hMHgxLHRoaXNbXzB4MTk3M2Y3KDB4MWM5KV09ITB4MSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsXzB4NGE4NTAwKSlbXzB4MTk3M2Y3KDB4MjMxKV0oXzB4NDhlM2Y5PT4odGhpc1tfMHgxOTczZjcoMHgyNGQpXT0hMHgxLHRoaXNbXzB4MTk3M2Y3KDB4MjQwKV09ITB4MSxjb25zb2xlW18weDE5NzNmNygweDFhMyldKF8weDE5NzNmNygweDIxMikrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXSksXzB4NGQ4ODE5KG5ldyBFcnJvcihfMHgxOTczZjcoMHgxZjIpKyhfMHg0OGUzZjkmJl8weDQ4ZTNmOVtfMHgxOTczZjcoMHgxYjMpXSkpKSkpO30pKTt9W18weDMxYThhOCgweDFiMSldKF8weDE3NjIxNil7dmFyIF8weDQ0Y2ZlOT1fMHgzMWE4YTg7dGhpc1tfMHg0NGNmZTkoMHgyNGQpXT0hMHgxLHRoaXNbXzB4NDRjZmU5KDB4MjQwKV09ITB4MTt0cnl7XzB4MTc2MjE2W18weDQ0Y2ZlOSgweDFjMildPW51bGwsXzB4MTc2MjE2W18weDQ0Y2ZlOSgweDI2YildPW51bGwsXzB4MTc2MjE2Wydvbm9wZW4nXT1udWxsO31jYXRjaHt9dHJ5e18weDE3NjIxNltfMHg0NGNmZTkoMHgyMmIpXTwweDImJl8weDE3NjIxNltfMHg0NGNmZTkoMHgyMTApXSgpO31jYXRjaHt9fVtfMHgzMWE4YTgoMHgyMGMpXSgpe3ZhciBfMHgxYjY3MjI9XzB4MzFhOGE4O2NsZWFyVGltZW91dCh0aGlzW18weDFiNjcyMigweDI0ZildKSwhKHRoaXNbXzB4MWI2NzIyKDB4MWE0KV0+PXRoaXNbXzB4MWI2NzIyKDB4MjBkKV0pJiYodGhpc1tfMHgxYjY3MjIoMHgyNGYpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDExOWFkNj1fMHgxYjY3MjI7dGhpc1tfMHgxMTlhZDYoMHgyNGQpXXx8dGhpc1tfMHgxMTlhZDYoMHgyNDApXXx8KHRoaXNbXzB4MTE5YWQ2KDB4MjRjKV0oKSx0aGlzW18weDExOWFkNigweDIwOCldPy5bXzB4MTE5YWQ2KDB4MjMxKV0oKCk9PnRoaXNbXzB4MTE5YWQ2KDB4MjBjKV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MWI2NzIyKDB4MjRmKV1bXzB4MWI2NzIyKDB4MWEyKV0mJnRoaXNbXzB4MWI2NzIyKDB4MjRmKV1bXzB4MWI2NzIyKDB4MWEyKV0oKSk7fWFzeW5jWydzZW5kJ10oXzB4NDBjMGFmKXt2YXIgXzB4M2Y4MjY5PV8weDMxYThhODt0cnl7aWYoIXRoaXNbXzB4M2Y4MjY5KDB4MjE3KV0pcmV0dXJuO3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ10mJnRoaXNbXzB4M2Y4MjY5KDB4MjRjKV0oKSwoYXdhaXQgdGhpc1tfMHgzZjgyNjkoMHgyMDgpXSlbXzB4M2Y4MjY5KDB4MjA1KV0oSlNPTltfMHgzZjgyNjkoMHgyN2QpXShfMHg0MGMwYWYpKTt9Y2F0Y2goXzB4MzZmZjNlKXtjb25zb2xlW18weDNmODI2OSgweDFhMyldKHRoaXNbXzB4M2Y4MjY5KDB4MjU2KV0rJzpcXFxceDIwJysoXzB4MzZmZjNlJiZfMHgzNmZmM2VbXzB4M2Y4MjY5KDB4MWIzKV0pKSx0aGlzW18weDNmODI2OSgweDIxNyldPSEweDEsdGhpc1tfMHgzZjgyNjkoMHgyMGMpXSgpO319fTtmdW5jdGlvbiB4KF8weDQ0NGQxNyxfMHg4MWQxYTksXzB4NGU0YjA3LF8weDMxNzc5OCxfMHg0OGZkZmUsXzB4YjVkNDIyKXt2YXIgXzB4MzU3NjVkPV8weDMxYThhODtsZXQgXzB4NTU0NDAxPV8weDRlNGIwN1snc3BsaXQnXSgnLCcpW18weDM1NzY1ZCgweDIwNildKF8weDQzOTg5Zj0+e3ZhciBfMHgxMzgxODA9XzB4MzU3NjVkO3RyeXtpZighXzB4NDQ0ZDE3WydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ10pe2xldCBfMHg1ZjIzMGM9XzB4NDQ0ZDE3Wydwcm9jZXNzJ10/LltfMHgxMzgxODAoMHgyNWUpXT8uW18weDEzODE4MCgweDI4MSldfHxfMHg0NDRkMTdbXzB4MTM4MTgwKDB4MWRiKV0/LltfMHgxMzgxODAoMHgyMjQpXT8uW18weDEzODE4MCgweDFjNSldPT09XzB4MTM4MTgwKDB4MjdiKTsoXzB4NDhmZGZlPT09XzB4MTM4MTgwKDB4MjZhKXx8XzB4NDhmZGZlPT09XzB4MTM4MTgwKDB4MjMzKXx8XzB4NDhmZGZlPT09J2FzdHJvJ3x8XzB4NDhmZGZlPT09XzB4MTM4MTgwKDB4MjY3KSkmJihfMHg0OGZkZmUrPV8weDVmMjMwYz9fMHgxMzgxODAoMHgxYzQpOl8weDEzODE4MCgweDI4NSkpLF8weDQ0NGQxN1tfMHgxMzgxODAoMHgxZGQpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NDhmZGZlfSxfMHg0OGZkZmUmJiFfMHg1ZjIzMGMmJmNvbnNvbGVbXzB4MTM4MTgwKDB4MjIzKV0oJyVjXFxcXHgyMENvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZXh0ZW5zaW9uXFxcXHgyMGlzXFxcXHgyMGNvbm5lY3RlZFxcXFx4MjB0b1xcXFx4MjAnKyhfMHg0OGZkZmVbJ2NoYXJBdCddKDB4MClbJ3RvVXBwZXJDYXNlJ10oKStfMHg0OGZkZmVbXzB4MTM4MTgwKDB4MjUyKV0oMHgxKSkrJywnLF8weDEzODE4MCgweDI4MCksXzB4MTM4MTgwKDB4Mjg3KSk7fWxldCBfMHgzM2I3NWM9bmV3IHEoXzB4NDQ0ZDE3LF8weDgxZDFhOSxfMHg0Mzk4OWYsXzB4MzE3Nzk4LF8weGI1ZDQyMik7cmV0dXJuIF8weDMzYjc1Y1tfMHgxMzgxODAoMHgyMDUpXVtfMHgxMzgxODAoMHgyMWIpXShfMHgzM2I3NWMpO31jYXRjaChfMHg1YzgwMGYpe3JldHVybiBjb25zb2xlW18weDEzODE4MCgweDFhMyldKF8weDEzODE4MCgweDIzZiksXzB4NWM4MDBmJiZfMHg1YzgwMGZbJ21lc3NhZ2UnXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NDFmMDEwPT5fMHg1NTQ0MDFbXzB4MzU3NjVkKDB4MjQyKV0oXzB4Mjk0MjY5PT5fMHgyOTQyNjkoXzB4NDFmMDEwKSk7fWZ1bmN0aW9uIFcoXzB4M2MzOWMyKXt2YXIgXzB4MTQ3Nzk1PV8weDMxYThhODtsZXQgXzB4MmRlNzEyPWZ1bmN0aW9uKF8weGIxODA5ZSxfMHgxZTNmMzApe3JldHVybiBfMHgxZTNmMzAtXzB4YjE4MDllO30sXzB4MmIzNDkzO2lmKF8weDNjMzljMltfMHgxNDc3OTUoMHgxZmUpXSlfMHgyYjM0OTM9ZnVuY3Rpb24oKXt2YXIgXzB4MWFmOWRiPV8weDE0Nzc5NTtyZXR1cm4gXzB4M2MzOWMyW18weDFhZjlkYigweDFmZSldW18weDFhZjlkYigweDIzYildKCk7fTtlbHNle2lmKF8weDNjMzljMltfMHgxNDc3OTUoMHgxZGIpXSYmXzB4M2MzOWMyWydwcm9jZXNzJ11bXzB4MTQ3Nzk1KDB4MWUzKV0mJl8weDNjMzljMltfMHgxNDc3OTUoMHgxZGIpXT8uWydlbnYnXT8uWydORVhUX1JVTlRJTUUnXSE9PSdlZGdlJylfMHgyYjM0OTM9ZnVuY3Rpb24oKXt2YXIgXzB4NTgyZDNiPV8weDE0Nzc5NTtyZXR1cm4gXzB4M2MzOWMyW18weDU4MmQzYigweDFkYildW18weDU4MmQzYigweDFlMyldKCk7fSxfMHgyZGU3MTI9ZnVuY3Rpb24oXzB4NGMyOWFhLF8weDgyMmE3NSl7cmV0dXJuIDB4M2U4KihfMHg4MjJhNzVbMHgwXS1fMHg0YzI5YWFbMHgwXSkrKF8weDgyMmE3NVsweDFdLV8weDRjMjlhYVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgxMzEwNGN9PXJlcXVpcmUoXzB4MTQ3Nzk1KDB4Mjg2KSk7XzB4MmIzNDkzPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDEzMTA0Y1snbm93J10oKTt9O31jYXRjaHtfMHgyYjM0OTM9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgyZGU3MTIsJ3RpbWVTdGFtcCc6XzB4MmIzNDkzLCdub3cnOigpPT5EYXRlW18weDE0Nzc5NSgweDIzYildKCl9O31mdW5jdGlvbiBfMHgyOGUzKF8weDFiMGQwMyxfMHg0OWQ2Yzkpe3ZhciBfMHg1ZGZkMGY9XzB4NWRmZCgpO3JldHVybiBfMHgyOGUzPWZ1bmN0aW9uKF8weDI4ZTNmMyxfMHg5ZGM4Myl7XzB4MjhlM2YzPV8weDI4ZTNmMy0weDE5ODt2YXIgXzB4M2ZjZDAyPV8weDVkZmQwZltfMHgyOGUzZjNdO3JldHVybiBfMHgzZmNkMDI7fSxfMHgyOGUzKF8weDFiMGQwMyxfMHg0OWQ2YzkpO31mdW5jdGlvbiBYKF8weGFhN2I0LF8weDI4NzFjOSxfMHg0MzViYTApe3ZhciBfMHg0N2MxYWE9XzB4MzFhOGE4O2lmKF8weGFhN2I0WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXSE9PXZvaWQgMHgwKXJldHVybiBfMHhhYTdiNFsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J107bGV0IF8weDJiYzlhOT1fMHhhYTdiNFtfMHg0N2MxYWEoMHgxZGIpXT8uW18weDQ3YzFhYSgweDI1ZSldPy5bXzB4NDdjMWFhKDB4MjgxKV18fF8weGFhN2I0W18weDQ3YzFhYSgweDFkYildPy5bXzB4NDdjMWFhKDB4MjI0KV0/LltfMHg0N2MxYWEoMHgxYzUpXT09PSdlZGdlJztyZXR1cm4gXzB4MmJjOWE5JiZfMHg0MzViYTA9PT0nbnV4dCc/XzB4YWE3YjRbXzB4NDdjMWFhKDB4MjA5KV09ITB4MTpfMHhhYTdiNFtfMHg0N2MxYWEoMHgyMDkpXT1fMHgyYmM5YTl8fCFfMHgyODcxYzl8fF8weGFhN2I0W18weDQ3YzFhYSgweDFlYSldPy5bXzB4NDdjMWFhKDB4MWExKV0mJl8weDI4NzFjOVtfMHg0N2MxYWEoMHgxZmYpXShfMHhhYTdiNFtfMHg0N2MxYWEoMHgxZWEpXVtfMHg0N2MxYWEoMHgxYTEpXSksXzB4YWE3YjRbXzB4NDdjMWFhKDB4MjA5KV07fWZ1bmN0aW9uIEooXzB4MTY5NTRhLF8weDFmNTYxMixfMHgzMjY2ZGYsXzB4NTMzYWYyKXt2YXIgXzB4NTE4NDU2PV8weDMxYThhODtfMHgxNjk1NGE9XzB4MTY5NTRhLF8weDFmNTYxMj1fMHgxZjU2MTIsXzB4MzI2NmRmPV8weDMyNjZkZixfMHg1MzNhZjI9XzB4NTMzYWYyO2xldCBfMHgyMjE0NTk9VyhfMHgxNjk1NGEpLF8weDgzMjQ0Mj1fMHgyMjE0NTlbJ2VsYXBzZWQnXSxfMHgzMDAyOTE9XzB4MjIxNDU5Wyd0aW1lU3RhbXAnXTtjbGFzcyBfMHhlYTRmMWJ7Y29uc3RydWN0b3IoKXt2YXIgXzB4NDgzYWM1PV8weDI4ZTM7dGhpc1tfMHg0ODNhYzUoMHgxYWIpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbJ19udW1iZXJSZWdFeHAnXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDgzYWM1KDB4MjIxKV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg0ODNhYzUoMHgxZGUpXT1fMHgxNjk1NGFbXzB4NDgzYWM1KDB4MjM3KV0sdGhpc1tfMHg0ODNhYzUoMHgxZDQpXT1fMHgxNjk1NGFbXzB4NDgzYWM1KDB4MWY0KV0sdGhpc1tfMHg0ODNhYzUoMHgxOTkpXT1PYmplY3RbXzB4NDgzYWM1KDB4MWE4KV0sdGhpc1tfMHg0ODNhYzUoMHgxZWQpXT1PYmplY3RbXzB4NDgzYWM1KDB4MjY0KV0sdGhpc1tfMHg0ODNhYzUoMHgxOWIpXT1fMHgxNjk1NGFbXzB4NDgzYWM1KDB4MWI2KV0sdGhpc1tfMHg0ODNhYzUoMHgyMmYpXT1SZWdFeHBbXzB4NDgzYWM1KDB4MjIyKV1bXzB4NDgzYWM1KDB4MWE5KV0sdGhpc1tfMHg0ODNhYzUoMHgxYWUpXT1EYXRlW18weDQ4M2FjNSgweDIyMildW18weDQ4M2FjNSgweDFhOSldO31bXzB4NTE4NDU2KDB4MWY5KV0oXzB4MjJjNzNkLF8weGMwOGUyZixfMHhiNDdjYzksXzB4Mjk3MjJjKXt2YXIgXzB4NDk0N2NiPV8weDUxODQ1NixfMHgzMWE0ODI9dGhpcyxfMHgyMjRjZTY9XzB4YjQ3Y2M5W18weDQ5NDdjYigweDFjOCldO2Z1bmN0aW9uIF8weDM1NmJjZihfMHg1NGJmODUsXzB4MmM2ZjdlLF8weDJlMzBiZCl7dmFyIF8weDRhYzEzMD1fMHg0OTQ3Y2I7XzB4MmM2ZjdlW18weDRhYzEzMCgweDFjNyldPV8weDRhYzEzMCgweDIyYyksXzB4MmM2ZjdlW18weDRhYzEzMCgweDE5YSldPV8weDU0YmY4NVtfMHg0YWMxMzAoMHgxYjMpXSxfMHgxZDZhYzc9XzB4MmUzMGJkWydub2RlJ11bXzB4NGFjMTMwKDB4MWJkKV0sXzB4MmUzMGJkWydub2RlJ11bJ2N1cnJlbnQnXT1fMHgyYzZmN2UsXzB4MzFhNDgyW18weDRhYzEzMCgweDFkYSldKF8weDJjNmY3ZSxfMHgyZTMwYmQpO310cnl7XzB4YjQ3Y2M5W18weDQ5NDdjYigweDFmYyldKyssXzB4YjQ3Y2M5WydhdXRvRXhwYW5kJ10mJl8weGI0N2NjOVsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddW18weDQ5NDdjYigweDFmNSldKF8weGMwOGUyZik7dmFyIF8weDhiNTU3NixfMHgzZjQzMGYsXzB4MjIwOWJhLF8weDM3YjZhNixfMHgyNmIzNWY9W10sXzB4MWQ3YzQ3PVtdLF8weDI1YWEzMSxfMHgxOTY3Yzg9dGhpc1tfMHg0OTQ3Y2IoMHgxOWQpXShfMHhjMDhlMmYpLF8weDVhYzQ1YT1fMHgxOTY3Yzg9PT1fMHg0OTQ3Y2IoMHgxZjcpLF8weDQ5Mjk1YT0hMHgxLF8weDExMmNkZD1fMHgxOTY3Yzg9PT1fMHg0OTQ3Y2IoMHgyMTkpLF8weDMwZTcxNz10aGlzW18weDQ5NDdjYigweDI3NSldKF8weDE5NjdjOCksXzB4MWQwYzk5PXRoaXNbJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJ10oXzB4MTk2N2M4KSxfMHg2MDNkYTk9XzB4MzBlNzE3fHxfMHgxZDBjOTksXzB4MzA2YzQ3PXt9LF8weDViNTk2ZT0weDAsXzB4NThhMmQwPSEweDEsXzB4MWQ2YWM3LF8weDU2ZGFiMj0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4YjQ3Y2M5W18weDQ5NDdjYigweDI1YyldKXtpZihfMHg1YWM0NWEpe2lmKF8weDNmNDMwZj1fMHhjMDhlMmZbXzB4NDk0N2NiKDB4MWVlKV0sXzB4M2Y0MzBmPl8weGI0N2NjOVsnZWxlbWVudHMnXSl7Zm9yKF8weDIyMDliYT0weDAsXzB4MzdiNmE2PV8weGI0N2NjOVtfMHg0OTQ3Y2IoMHgyMjUpXSxfMHg4YjU1NzY9XzB4MjIwOWJhO18weDhiNTU3NjxfMHgzN2I2YTY7XzB4OGI1NTc2KyspXzB4MWQ3YzQ3W18weDQ5NDdjYigweDFmNSldKF8weDMxYTQ4MltfMHg0OTQ3Y2IoMHgxZDEpXShfMHgyNmIzNWYsXzB4YzA4ZTJmLF8weDE5NjdjOCxfMHg4YjU1NzYsXzB4YjQ3Y2M5KSk7XzB4MjJjNzNkW18weDQ5NDdjYigweDI2MSldPSEweDA7fWVsc2V7Zm9yKF8weDIyMDliYT0weDAsXzB4MzdiNmE2PV8weDNmNDMwZixfMHg4YjU1NzY9XzB4MjIwOWJhO18weDhiNTU3NjxfMHgzN2I2YTY7XzB4OGI1NTc2KyspXzB4MWQ3YzQ3W18weDQ5NDdjYigweDFmNSldKF8weDMxYTQ4MltfMHg0OTQ3Y2IoMHgxZDEpXShfMHgyNmIzNWYsXzB4YzA4ZTJmLF8weDE5NjdjOCxfMHg4YjU1NzYsXzB4YjQ3Y2M5KSk7fV8weGI0N2NjOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4MWQ3YzQ3W18weDQ5NDdjYigweDFlZSldO31pZighKF8weDE5NjdjOD09PV8weDQ5NDdjYigweDFhNil8fF8weDE5NjdjOD09PV8weDQ5NDdjYigweDIzNykpJiYhXzB4MzBlNzE3JiZfMHgxOTY3YzghPT1fMHg0OTQ3Y2IoMHgyM2EpJiZfMHgxOTY3YzghPT1fMHg0OTQ3Y2IoMHgyMWYpJiZfMHgxOTY3YzghPT1fMHg0OTQ3Y2IoMHgxZTgpKXt2YXIgXzB4MzI1NTBjPV8weDI5NzIyY1tfMHg0OTQ3Y2IoMHgxZmQpXXx8XzB4YjQ3Y2M5W18weDQ5NDdjYigweDFmZCldO2lmKHRoaXNbXzB4NDk0N2NiKDB4MjVhKV0oXzB4YzA4ZTJmKT8oXzB4OGI1NTc2PTB4MCxfMHhjMDhlMmZbXzB4NDk0N2NiKDB4MjQyKV0oZnVuY3Rpb24oXzB4ODRjNjVmKXt2YXIgXzB4NDlkZTExPV8weDQ5NDdjYjtpZihfMHg1YjU5NmUrKyxfMHhiNDdjYzlbXzB4NDlkZTExKDB4MWU5KV0rKyxfMHg1YjU5NmU+XzB4MzI1NTBjKXtfMHg1OGEyZDA9ITB4MDtyZXR1cm47fWlmKCFfMHhiNDdjYzlbXzB4NDlkZTExKDB4MjExKV0mJl8weGI0N2NjOVtfMHg0OWRlMTEoMHgxYzgpXSYmXzB4YjQ3Y2M5W18weDQ5ZGUxMSgweDFlOSldPl8weGI0N2NjOVtfMHg0OWRlMTEoMHgxYWMpXSl7XzB4NThhMmQwPSEweDA7cmV0dXJuO31fMHgxZDdjNDdbXzB4NDlkZTExKDB4MWY1KV0oXzB4MzFhNDgyW18weDQ5ZGUxMSgweDFkMSldKF8weDI2YjM1ZixfMHhjMDhlMmYsJ1NldCcsXzB4OGI1NTc2KyssXzB4YjQ3Y2M5LGZ1bmN0aW9uKF8weDFiOTYyMil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDFiOTYyMjt9O30oXzB4ODRjNjVmKSkpO30pKTp0aGlzWydfaXNNYXAnXShfMHhjMDhlMmYpJiZfMHhjMDhlMmZbXzB4NDk0N2NiKDB4MjQyKV0oZnVuY3Rpb24oXzB4NGRhMDgwLF8weDNjNTQ1MCl7dmFyIF8weDEyZDQ1Nj1fMHg0OTQ3Y2I7aWYoXzB4NWI1OTZlKyssXzB4YjQ3Y2M5W18weDEyZDQ1NigweDFlOSldKyssXzB4NWI1OTZlPl8weDMyNTUwYyl7XzB4NThhMmQwPSEweDA7cmV0dXJuO31pZighXzB4YjQ3Y2M5Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weGI0N2NjOVtfMHgxMmQ0NTYoMHgxYzgpXSYmXzB4YjQ3Y2M5W18weDEyZDQ1NigweDFlOSldPl8weGI0N2NjOVtfMHgxMmQ0NTYoMHgxYWMpXSl7XzB4NThhMmQwPSEweDA7cmV0dXJuO312YXIgXzB4MmU4ZGNlPV8weDNjNTQ1MFtfMHgxMmQ0NTYoMHgxYTkpXSgpO18weDJlOGRjZVtfMHgxMmQ0NTYoMHgxZWUpXT4weDY0JiYoXzB4MmU4ZGNlPV8weDJlOGRjZVtfMHgxMmQ0NTYoMHgyNGUpXSgweDAsMHg2NCkrXzB4MTJkNDU2KDB4MWYzKSksXzB4MWQ3YzQ3W18weDEyZDQ1NigweDFmNSldKF8weDMxYTQ4MltfMHgxMmQ0NTYoMHgxZDEpXShfMHgyNmIzNWYsXzB4YzA4ZTJmLF8weDEyZDQ1NigweDFhZiksXzB4MmU4ZGNlLF8weGI0N2NjOSxmdW5jdGlvbihfMHgxOGU0NWQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgxOGU0NWQ7fTt9KF8weDRkYTA4MCkpKTt9KSwhXzB4NDkyOTVhKXt0cnl7Zm9yKF8weDI1YWEzMSBpbiBfMHhjMDhlMmYpaWYoIShfMHg1YWM0NWEmJl8weDU2ZGFiMlsndGVzdCddKF8weDI1YWEzMSkpJiYhdGhpc1tfMHg0OTQ3Y2IoMHgxZTQpXShfMHhjMDhlMmYsXzB4MjVhYTMxLF8weGI0N2NjOSkpe2lmKF8weDViNTk2ZSsrLF8weGI0N2NjOVtfMHg0OTQ3Y2IoMHgxZTkpXSsrLF8weDViNTk2ZT5fMHgzMjU1MGMpe18weDU4YTJkMD0hMHgwO2JyZWFrO31pZighXzB4YjQ3Y2M5W18weDQ5NDdjYigweDIxMSldJiZfMHhiNDdjYzlbXzB4NDk0N2NiKDB4MWM4KV0mJl8weGI0N2NjOVtfMHg0OTQ3Y2IoMHgxZTkpXT5fMHhiNDdjYzlbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHg1OGEyZDA9ITB4MDticmVhazt9XzB4MWQ3YzQ3WydwdXNoJ10oXzB4MzFhNDgyW18weDQ5NDdjYigweDI3NildKF8weDI2YjM1ZixfMHgzMDZjNDcsXzB4YzA4ZTJmLF8weDE5NjdjOCxfMHgyNWFhMzEsXzB4YjQ3Y2M5KSk7fX1jYXRjaHt9aWYoXzB4MzA2YzQ3WydfcF9sZW5ndGgnXT0hMHgwLF8weDExMmNkZCYmKF8weDMwNmM0N1tfMHg0OTQ3Y2IoMHgyNGEpXT0hMHgwKSwhXzB4NThhMmQwKXt2YXIgXzB4M2E0NjRhPVtdW18weDQ5NDdjYigweDIyZSldKHRoaXNbXzB4NDk0N2NiKDB4MWVkKV0oXzB4YzA4ZTJmKSlbXzB4NDk0N2NiKDB4MjJlKV0odGhpc1tfMHg0OTQ3Y2IoMHgxYzYpXShfMHhjMDhlMmYpKTtmb3IoXzB4OGI1NTc2PTB4MCxfMHgzZjQzMGY9XzB4M2E0NjRhWydsZW5ndGgnXTtfMHg4YjU1NzY8XzB4M2Y0MzBmO18weDhiNTU3NisrKWlmKF8weDI1YWEzMT1fMHgzYTQ2NGFbXzB4OGI1NTc2XSwhKF8weDVhYzQ1YSYmXzB4NTZkYWIyW18weDQ5NDdjYigweDFjMyldKF8weDI1YWEzMVtfMHg0OTQ3Y2IoMHgxYTkpXSgpKSkmJiF0aGlzW18weDQ5NDdjYigweDFlNCldKF8weGMwOGUyZixfMHgyNWFhMzEsXzB4YjQ3Y2M5KSYmIV8weDMwNmM0N1snX3BfJytfMHgyNWFhMzFbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDViNTk2ZSsrLF8weGI0N2NjOVtfMHg0OTQ3Y2IoMHgxZTkpXSsrLF8weDViNTk2ZT5fMHgzMjU1MGMpe18weDU4YTJkMD0hMHgwO2JyZWFrO31pZighXzB4YjQ3Y2M5W18weDQ5NDdjYigweDIxMSldJiZfMHhiNDdjYzlbXzB4NDk0N2NiKDB4MWM4KV0mJl8weGI0N2NjOVtfMHg0OTQ3Y2IoMHgxZTkpXT5fMHhiNDdjYzlbXzB4NDk0N2NiKDB4MWFjKV0pe18weDU4YTJkMD0hMHgwO2JyZWFrO31fMHgxZDdjNDdbXzB4NDk0N2NiKDB4MWY1KV0oXzB4MzFhNDgyWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgyNmIzNWYsXzB4MzA2YzQ3LF8weGMwOGUyZixfMHgxOTY3YzgsXzB4MjVhYTMxLF8weGI0N2NjOSkpO319fX19aWYoXzB4MjJjNzNkW18weDQ5NDdjYigweDFjNyldPV8weDE5NjdjOCxfMHg2MDNkYTk/KF8weDIyYzczZFsndmFsdWUnXT1fMHhjMDhlMmZbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4NDk0N2NiKDB4MjE1KV0oXzB4MTk2N2M4LF8weDIyYzczZCxfMHhiNDdjYzksXzB4Mjk3MjJjKSk6XzB4MTk2N2M4PT09XzB4NDk0N2NiKDB4MjQ2KT9fMHgyMmM3M2RbJ3ZhbHVlJ109dGhpc1tfMHg0OTQ3Y2IoMHgxYWUpXVsnY2FsbCddKF8weGMwOGUyZik6XzB4MTk2N2M4PT09J2JpZ2ludCc/XzB4MjJjNzNkW18weDQ5NDdjYigweDI3YSldPV8weGMwOGUyZlsndG9TdHJpbmcnXSgpOl8weDE5NjdjOD09PSdSZWdFeHAnP18weDIyYzczZFsndmFsdWUnXT10aGlzWydfcmVnRXhwVG9TdHJpbmcnXVsnY2FsbCddKF8weGMwOGUyZik6XzB4MTk2N2M4PT09J3N5bWJvbCcmJnRoaXNbXzB4NDk0N2NiKDB4MTliKV0/XzB4MjJjNzNkW18weDQ5NDdjYigweDI3YSldPXRoaXNbXzB4NDk0N2NiKDB4MTliKV1bXzB4NDk0N2NiKDB4MjIyKV1bXzB4NDk0N2NiKDB4MWE5KV1bXzB4NDk0N2NiKDB4MjY5KV0oXzB4YzA4ZTJmKTohXzB4YjQ3Y2M5W18weDQ5NDdjYigweDI1YyldJiYhKF8weDE5NjdjOD09PV8weDQ5NDdjYigweDFhNil8fF8weDE5NjdjOD09PSd1bmRlZmluZWQnKSYmKGRlbGV0ZSBfMHgyMmM3M2RbXzB4NDk0N2NiKDB4MjdhKV0sXzB4MjJjNzNkWydjYXBwZWQnXT0hMHgwKSxfMHg1OGEyZDAmJihfMHgyMmM3M2RbXzB4NDk0N2NiKDB4MWI5KV09ITB4MCksXzB4MWQ2YWM3PV8weGI0N2NjOVtfMHg0OTQ3Y2IoMHgyODEpXVtfMHg0OTQ3Y2IoMHgxYmQpXSxfMHhiNDdjYzlbXzB4NDk0N2NiKDB4MjgxKV1bJ2N1cnJlbnQnXT1fMHgyMmM3M2QsdGhpc1tfMHg0OTQ3Y2IoMHgxZGEpXShfMHgyMmM3M2QsXzB4YjQ3Y2M5KSxfMHgxZDdjNDdbXzB4NDk0N2NiKDB4MWVlKV0pe2ZvcihfMHg4YjU1NzY9MHgwLF8weDNmNDMwZj1fMHgxZDdjNDdbXzB4NDk0N2NiKDB4MWVlKV07XzB4OGI1NTc2PF8weDNmNDMwZjtfMHg4YjU1NzYrKylfMHgxZDdjNDdbXzB4OGI1NTc2XShfMHg4YjU1NzYpO31fMHgyNmIzNWZbXzB4NDk0N2NiKDB4MWVlKV0mJihfMHgyMmM3M2RbXzB4NDk0N2NiKDB4MWZkKV09XzB4MjZiMzVmKTt9Y2F0Y2goXzB4ZjdkZWRlKXtfMHgzNTZiY2YoXzB4ZjdkZWRlLF8weDIyYzczZCxfMHhiNDdjYzkpO31yZXR1cm4gdGhpc1tfMHg0OTQ3Y2IoMHgyMmQpXShfMHhjMDhlMmYsXzB4MjJjNzNkKSx0aGlzW18weDQ5NDdjYigweDFlNildKF8weDIyYzczZCxfMHhiNDdjYzkpLF8weGI0N2NjOVsnbm9kZSddWydjdXJyZW50J109XzB4MWQ2YWM3LF8weGI0N2NjOVsnbGV2ZWwnXS0tLF8weGI0N2NjOVtfMHg0OTQ3Y2IoMHgxYzgpXT1fMHgyMjRjZTYsXzB4YjQ3Y2M5W18weDQ5NDdjYigweDFjOCldJiZfMHhiNDdjYzlbXzB4NDk0N2NiKDB4MjdmKV1bXzB4NDk0N2NiKDB4MjUxKV0oKSxfMHgyMmM3M2Q7fVtfMHg1MTg0NTYoMHgxYzYpXShfMHgyYmEzNzIpe3JldHVybiBPYmplY3RbJ2dldE93blByb3BlcnR5U3ltYm9scyddP09iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MmJhMzcyKTpbXTt9W18weDUxODQ1NigweDI1YSldKF8weDJkOTFkMSl7dmFyIF8weDI3YzA5Yj1fMHg1MTg0NTY7cmV0dXJuISEoXzB4MmQ5MWQxJiZfMHgxNjk1NGFbJ1NldCddJiZ0aGlzW18weDI3YzA5YigweDIxNCldKF8weDJkOTFkMSk9PT1fMHgyN2MwOWIoMHgyMjYpJiZfMHgyZDkxZDFbXzB4MjdjMDliKDB4MjQyKV0pO31bXzB4NTE4NDU2KDB4MWU0KV0oXzB4NDdmN2RkLF8weDNmODI0MSxfMHg1ZTllNjIpe3ZhciBfMHhjYzMxZTQ9XzB4NTE4NDU2O3JldHVybiBfMHg1ZTllNjJbXzB4Y2MzMWU0KDB4MjY4KV0/dHlwZW9mIF8weDQ3ZjdkZFtfMHgzZjgyNDFdPT1fMHhjYzMxZTQoMHgyMTkpOiEweDE7fVtfMHg1MTg0NTYoMHgxOWQpXShfMHgyMTFlZmEpe3ZhciBfMHhkMDNkOWQ9XzB4NTE4NDU2LF8weDI1YzcxYz0nJztyZXR1cm4gXzB4MjVjNzFjPXR5cGVvZiBfMHgyMTFlZmEsXzB4MjVjNzFjPT09XzB4ZDAzZDlkKDB4Mjc3KT90aGlzW18weGQwM2Q5ZCgweDIxNCldKF8weDIxMWVmYSk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nP18weDI1YzcxYz1fMHhkMDNkOWQoMHgxZjcpOnRoaXNbXzB4ZDAzZDlkKDB4MjE0KV0oXzB4MjExZWZhKT09PV8weGQwM2Q5ZCgweDFhNSk/XzB4MjVjNzFjPV8weGQwM2Q5ZCgweDI0Nik6dGhpc1tfMHhkMDNkOWQoMHgyMTQpXShfMHgyMTFlZmEpPT09XzB4ZDAzZDlkKDB4MWE3KT9fMHgyNWM3MWM9J2JpZ2ludCc6XzB4MjExZWZhPT09bnVsbD9fMHgyNWM3MWM9J251bGwnOl8weDIxMWVmYVtfMHhkMDNkOWQoMHgyODIpXSYmKF8weDI1YzcxYz1fMHgyMTFlZmFbJ2NvbnN0cnVjdG9yJ11bJ25hbWUnXXx8XzB4MjVjNzFjKTpfMHgyNWM3MWM9PT1fMHhkMDNkOWQoMHgyMzcpJiZ0aGlzW18weGQwM2Q5ZCgweDFkNCldJiZfMHgyMTFlZmEgaW5zdGFuY2VvZiB0aGlzW18weGQwM2Q5ZCgweDFkNCldJiYoXzB4MjVjNzFjPV8weGQwM2Q5ZCgweDFmNCkpLF8weDI1YzcxYzt9W18weDUxODQ1NigweDIxNCldKF8weDJlNDgxZCl7dmFyIF8weDc2MmEwND1fMHg1MTg0NTY7cmV0dXJuIE9iamVjdFtfMHg3NjJhMDQoMHgyMjIpXVtfMHg3NjJhMDQoMHgxYTkpXVtfMHg3NjJhMDQoMHgyNjkpXShfMHgyZTQ4MWQpO31bXzB4NTE4NDU2KDB4Mjc1KV0oXzB4NDljODVkKXt2YXIgXzB4MzY3NDIzPV8weDUxODQ1NjtyZXR1cm4gXzB4NDljODVkPT09J2Jvb2xlYW4nfHxfMHg0OWM4NWQ9PT1fMHgzNjc0MjMoMHgxZDIpfHxfMHg0OWM4NWQ9PT1fMHgzNjc0MjMoMHgyMWMpO31bXzB4NTE4NDU2KDB4MjgzKV0oXzB4NWE1ZTZiKXt2YXIgXzB4NGE1OWE0PV8weDUxODQ1NjtyZXR1cm4gXzB4NWE1ZTZiPT09J0Jvb2xlYW4nfHxfMHg1YTVlNmI9PT1fMHg0YTU5YTQoMHgyM2EpfHxfMHg1YTVlNmI9PT1fMHg0YTU5YTQoMHgyMDEpO31bXzB4NTE4NDU2KDB4MWQxKV0oXzB4NGQ2ZDQ5LF8weDUxMjYyZixfMHg1ODEwMDUsXzB4MTU2NTU4LF8weDQ0NTJhNCxfMHgyOTMxOGMpe3ZhciBfMHgyZjIzYWE9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NWRkZDM2KXt2YXIgXzB4NDI1NzhiPV8weDI4ZTMsXzB4NWU3NGIxPV8weDQ0NTJhNFtfMHg0MjU3OGIoMHgyODEpXVtfMHg0MjU3OGIoMHgxYmQpXSxfMHg0YmNiZGI9XzB4NDQ1MmE0W18weDQyNTc4YigweDI4MSldW18weDQyNTc4YigweDI2NildLF8weDIwMzFlNj1fMHg0NDUyYTRbXzB4NDI1NzhiKDB4MjgxKV1bXzB4NDI1NzhiKDB4MjU5KV07XzB4NDQ1MmE0W18weDQyNTc4YigweDI4MSldW18weDQyNTc4YigweDI1OSldPV8weDVlNzRiMSxfMHg0NDUyYTRbXzB4NDI1NzhiKDB4MjgxKV1bJ2luZGV4J109dHlwZW9mIF8weDE1NjU1OD09XzB4NDI1NzhiKDB4MjFjKT9fMHgxNTY1NTg6XzB4NWRkZDM2LF8weDRkNmQ0OVsncHVzaCddKF8weDJmMjNhYVtfMHg0MjU3OGIoMHgyNDcpXShfMHg1MTI2MmYsXzB4NTgxMDA1LF8weDE1NjU1OCxfMHg0NDUyYTQsXzB4MjkzMThjKSksXzB4NDQ1MmE0Wydub2RlJ11bXzB4NDI1NzhiKDB4MjU5KV09XzB4MjAzMWU2LF8weDQ0NTJhNFtfMHg0MjU3OGIoMHgyODEpXVtfMHg0MjU3OGIoMHgyNjYpXT1fMHg0YmNiZGI7fTt9W18weDUxODQ1NigweDI3NildKF8weDIyNTU4NCxfMHg0MDM4NDYsXzB4MjRhYzMxLF8weDJmNDhiYSxfMHgzMWJlYTYsXzB4MTNhMjQ4LF8weDM5YmVlYil7dmFyIF8weDU0OThiZj1fMHg1MTg0NTYsXzB4MjJkNDU4PXRoaXM7cmV0dXJuIF8weDQwMzg0NltfMHg1NDk4YmYoMHgxZmIpK18weDMxYmVhNltfMHg1NDk4YmYoMHgxYTkpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDJhMDgzYSl7dmFyIF8weDE1MDA5Yz1fMHg1NDk4YmYsXzB4NDc1MzlhPV8weDEzYTI0OFtfMHgxNTAwOWMoMHgyODEpXVtfMHgxNTAwOWMoMHgxYmQpXSxfMHg1MjRkMTc9XzB4MTNhMjQ4W18weDE1MDA5YygweDI4MSldW18weDE1MDA5YygweDI2NildLF8weDM3YTMwYT1fMHgxM2EyNDhbXzB4MTUwMDljKDB4MjgxKV1bXzB4MTUwMDljKDB4MjU5KV07XzB4MTNhMjQ4W18weDE1MDA5YygweDI4MSldWydwYXJlbnQnXT1fMHg0NzUzOWEsXzB4MTNhMjQ4W18weDE1MDA5YygweDI4MSldW18weDE1MDA5YygweDI2NildPV8weDJhMDgzYSxfMHgyMjU1ODRbXzB4MTUwMDljKDB4MWY1KV0oXzB4MjJkNDU4W18weDE1MDA5YygweDI0NyldKF8weDI0YWMzMSxfMHgyZjQ4YmEsXzB4MzFiZWE2LF8weDEzYTI0OCxfMHgzOWJlZWIpKSxfMHgxM2EyNDhbJ25vZGUnXVtfMHgxNTAwOWMoMHgyNTkpXT1fMHgzN2EzMGEsXzB4MTNhMjQ4W18weDE1MDA5YygweDI4MSldW18weDE1MDA5YygweDI2NildPV8weDUyNGQxNzt9O31bXzB4NTE4NDU2KDB4MjQ3KV0oXzB4NTlhNTFmLF8weDIxMzllYixfMHgzMGI1MDMsXzB4MjFhYmU5LF8weDIxODY5Zil7dmFyIF8weDM3NmNkYj1fMHg1MTg0NTYsXzB4MzRlN2ZiPXRoaXM7XzB4MjE4NjlmfHwoXzB4MjE4NjlmPWZ1bmN0aW9uKF8weDVkMDFlYyxfMHg1NWI0OWQpe3JldHVybiBfMHg1ZDAxZWNbXzB4NTViNDlkXTt9KTt2YXIgXzB4ZjBjY2FkPV8weDMwYjUwM1tfMHgzNzZjZGIoMHgxYTkpXSgpLF8weDEzMWM0Mj1fMHgyMWFiZTlbXzB4Mzc2Y2RiKDB4MjQ5KV18fHt9LF8weDU0MjNhNj1fMHgyMWFiZTlbJ2RlcHRoJ10sXzB4NTAwYjMwPV8weDIxYWJlOVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddO3RyeXt2YXIgXzB4NTZkYzcwPXRoaXNbXzB4Mzc2Y2RiKDB4MjM4KV0oXzB4NTlhNTFmKSxfMHg0OTgxYmY9XzB4ZjBjY2FkO18weDU2ZGM3MCYmXzB4NDk4MWJmWzB4MF09PT0nXFxcXHgyNycmJihfMHg0OTgxYmY9XzB4NDk4MWJmW18weDM3NmNkYigweDI1MildKDB4MSxfMHg0OTgxYmZbXzB4Mzc2Y2RiKDB4MWVlKV0tMHgyKSk7dmFyIF8weDM0ODBiNj1fMHgyMWFiZTlbXzB4Mzc2Y2RiKDB4MjQ5KV09XzB4MTMxYzQyW18weDM3NmNkYigweDFmYikrXzB4NDk4MWJmXTtfMHgzNDgwYjYmJihfMHgyMWFiZTlbXzB4Mzc2Y2RiKDB4MjVjKV09XzB4MjFhYmU5W18weDM3NmNkYigweDI1YyldKzB4MSksXzB4MjFhYmU5W18weDM3NmNkYigweDIxMSldPSEhXzB4MzQ4MGI2O3ZhciBfMHgyMGFiYmU9dHlwZW9mIF8weDMwYjUwMz09XzB4Mzc2Y2RiKDB4MjNjKSxfMHhmZWI5ZWY9eyduYW1lJzpfMHgyMGFiYmV8fF8weDU2ZGM3MD9fMHhmMGNjYWQ6dGhpc1tfMHgzNzZjZGIoMHgyMGEpXShfMHhmMGNjYWQpfTtpZihfMHgyMGFiYmUmJihfMHhmZWI5ZWZbXzB4Mzc2Y2RiKDB4MjNjKV09ITB4MCksIShfMHgyMTM5ZWI9PT0nYXJyYXknfHxfMHgyMTM5ZWI9PT1fMHgzNzZjZGIoMHgyMGYpKSl7dmFyIF8weDdkNWY3Nz10aGlzW18weDM3NmNkYigweDE5OSldKF8weDU5YTUxZixfMHgzMGI1MDMpO2lmKF8weDdkNWY3NyYmKF8weDdkNWY3N1tfMHgzNzZjZGIoMHgxZDMpXSYmKF8weGZlYjllZltfMHgzNzZjZGIoMHgxYjApXT0hMHgwKSxfMHg3ZDVmNzdbXzB4Mzc2Y2RiKDB4MjZmKV0mJiFfMHgzNDgwYjYmJiFfMHgyMWFiZTlbXzB4Mzc2Y2RiKDB4MjEzKV0pKXJldHVybiBfMHhmZWI5ZWZbXzB4Mzc2Y2RiKDB4MjIwKV09ITB4MCx0aGlzW18weDM3NmNkYigweDIzZSldKF8weGZlYjllZixfMHgyMWFiZTkpLF8weGZlYjllZjt9dmFyIF8weDFmZDZhMjt0cnl7XzB4MWZkNmEyPV8weDIxODY5ZihfMHg1OWE1MWYsXzB4MzBiNTAzKTt9Y2F0Y2goXzB4MWRiNjBjKXtyZXR1cm4gXzB4ZmViOWVmPXsnbmFtZSc6XzB4ZjBjY2FkLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgxZGI2MGNbXzB4Mzc2Y2RiKDB4MWIzKV19LHRoaXNbJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnXShfMHhmZWI5ZWYsXzB4MjFhYmU5KSxfMHhmZWI5ZWY7fXZhciBfMHgxZTMzODY9dGhpc1tfMHgzNzZjZGIoMHgxOWQpXShfMHgxZmQ2YTIpLF8weDJlY2IzMj10aGlzW18weDM3NmNkYigweDI3NSldKF8weDFlMzM4Nik7aWYoXzB4ZmViOWVmW18weDM3NmNkYigweDFjNyldPV8weDFlMzM4NixfMHgyZWNiMzIpdGhpc1tfMHgzNzZjZGIoMHgyM2UpXShfMHhmZWI5ZWYsXzB4MjFhYmU5LF8weDFmZDZhMixmdW5jdGlvbigpe3ZhciBfMHgxYzM1MDc9XzB4Mzc2Y2RiO18weGZlYjllZltfMHgxYzM1MDcoMHgyN2EpXT1fMHgxZmQ2YTJbJ3ZhbHVlT2YnXSgpLCFfMHgzNDgwYjYmJl8weDM0ZTdmYlsnX2NhcElmU3RyaW5nJ10oXzB4MWUzMzg2LF8weGZlYjllZixfMHgyMWFiZTkse30pO30pO2Vsc2V7dmFyIF8weDI4NmM4YT1fMHgyMWFiZTlbXzB4Mzc2Y2RiKDB4MWM4KV0mJl8weDIxYWJlOVtfMHgzNzZjZGIoMHgxZmMpXTxfMHgyMWFiZTlbXzB4Mzc2Y2RiKDB4MWUxKV0mJl8weDIxYWJlOVtfMHgzNzZjZGIoMHgyN2YpXVtfMHgzNzZjZGIoMHgyMTgpXShfMHgxZmQ2YTIpPDB4MCYmXzB4MWUzMzg2IT09J2Z1bmN0aW9uJyYmXzB4MjFhYmU5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPF8weDIxYWJlOVtfMHgzNzZjZGIoMHgxYWMpXTtfMHgyODZjOGF8fF8weDIxYWJlOVtfMHgzNzZjZGIoMHgxZmMpXTxfMHg1NDIzYTZ8fF8weDM0ODBiNj8odGhpc1tfMHgzNzZjZGIoMHgxZjkpXShfMHhmZWI5ZWYsXzB4MWZkNmEyLF8weDIxYWJlOSxfMHgzNDgwYjZ8fHt9KSx0aGlzW18weDM3NmNkYigweDIyZCldKF8weDFmZDZhMixfMHhmZWI5ZWYpKTp0aGlzW18weDM3NmNkYigweDIzZSldKF8weGZlYjllZixfMHgyMWFiZTksXzB4MWZkNmEyLGZ1bmN0aW9uKCl7dmFyIF8weDQzMmI5ZD1fMHgzNzZjZGI7XzB4MWUzMzg2PT09J251bGwnfHxfMHgxZTMzODY9PT1fMHg0MzJiOWQoMHgyMzcpfHwoZGVsZXRlIF8weGZlYjllZltfMHg0MzJiOWQoMHgyN2EpXSxfMHhmZWI5ZWZbXzB4NDMyYjlkKDB4MWViKV09ITB4MCk7fSk7fXJldHVybiBfMHhmZWI5ZWY7fWZpbmFsbHl7XzB4MjFhYmU5W18weDM3NmNkYigweDI0OSldPV8weDEzMWM0MixfMHgyMWFiZTlbXzB4Mzc2Y2RiKDB4MjVjKV09XzB4NTQyM2E2LF8weDIxYWJlOVtfMHgzNzZjZGIoMHgyMTEpXT1fMHg1MDBiMzA7fX1bJ19jYXBJZlN0cmluZyddKF8weDU5YTMzYixfMHgxMGM3Y2YsXzB4ZGIzNjlkLF8weDJiZDRlNil7dmFyIF8weGI3YWE2Mz1fMHg1MTg0NTYsXzB4NGRhYmU1PV8weDJiZDRlNltfMHhiN2FhNjMoMHgxYjgpXXx8XzB4ZGIzNjlkW18weGI3YWE2MygweDFiOCldO2lmKChfMHg1OWEzM2I9PT1fMHhiN2FhNjMoMHgxZDIpfHxfMHg1OWEzM2I9PT1fMHhiN2FhNjMoMHgyM2EpKSYmXzB4MTBjN2NmW18weGI3YWE2MygweDI3YSldKXtsZXQgXzB4NGYzYTg2PV8weDEwYzdjZltfMHhiN2FhNjMoMHgyN2EpXVtfMHhiN2FhNjMoMHgxZWUpXTtfMHhkYjM2OWRbXzB4YjdhYTYzKDB4MWY4KV0rPV8weDRmM2E4NixfMHhkYjM2OWRbXzB4YjdhYTYzKDB4MWY4KV0+XzB4ZGIzNjlkW18weGI3YWE2MygweDI0NCldPyhfMHgxMGM3Y2ZbXzB4YjdhYTYzKDB4MWViKV09JycsZGVsZXRlIF8weDEwYzdjZltfMHhiN2FhNjMoMHgyN2EpXSk6XzB4NGYzYTg2Pl8weDRkYWJlNSYmKF8weDEwYzdjZltfMHhiN2FhNjMoMHgxZWIpXT1fMHgxMGM3Y2ZbXzB4YjdhYTYzKDB4MjdhKV1bXzB4YjdhYTYzKDB4MjUyKV0oMHgwLF8weDRkYWJlNSksZGVsZXRlIF8weDEwYzdjZltfMHhiN2FhNjMoMHgyN2EpXSk7fX1bXzB4NTE4NDU2KDB4MjM4KV0oXzB4MWRiZWE2KXt2YXIgXzB4MWFmZmJhPV8weDUxODQ1NjtyZXR1cm4hIShfMHgxZGJlYTYmJl8weDE2OTU0YVtfMHgxYWZmYmEoMHgxYWYpXSYmdGhpc1tfMHgxYWZmYmEoMHgyMTQpXShfMHgxZGJlYTYpPT09XzB4MWFmZmJhKDB4MWYwKSYmXzB4MWRiZWE2Wydmb3JFYWNoJ10pO31bXzB4NTE4NDU2KDB4MjBhKV0oXzB4NDAwNGY0KXt2YXIgXzB4ZDg1YTI9XzB4NTE4NDU2O2lmKF8weDQwMDRmNFtfMHhkODVhMigweDE5ZSldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg0MDA0ZjQ7dmFyIF8weDFhZDkzMTt0cnl7XzB4MWFkOTMxPUpTT05bXzB4ZDg1YTIoMHgyN2QpXSgnJytfMHg0MDA0ZjQpO31jYXRjaHtfMHgxYWQ5MzE9J1xcXFx4MjInK3RoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDQwMDRmNCkrJ1xcXFx4MjInO31yZXR1cm4gXzB4MWFkOTMxW18weGQ4NWEyKDB4MTllKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgxYWQ5MzE9XzB4MWFkOTMxW18weGQ4NWEyKDB4MjUyKV0oMHgxLF8weDFhZDkzMVtfMHhkODVhMigweDFlZSldLTB4Mik6XzB4MWFkOTMxPV8weDFhZDkzMVtfMHhkODVhMigweDFiMildKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4ZDg1YTIoMHgxYjIpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHhkODVhMigweDFiMildKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxYWQ5MzE7fVtfMHg1MTg0NTYoMHgyM2UpXShfMHgxNzk2NzgsXzB4NDgwNTcxLF8weDNjMmRkMCxfMHgzOWQ1YzYpe3ZhciBfMHg0NDg5ZTQ9XzB4NTE4NDU2O3RoaXNbXzB4NDQ4OWU0KDB4MWRhKV0oXzB4MTc5Njc4LF8weDQ4MDU3MSksXzB4MzlkNWM2JiZfMHgzOWQ1YzYoKSx0aGlzW18weDQ0ODllNCgweDIyZCldKF8weDNjMmRkMCxfMHgxNzk2NzgpLHRoaXNbXzB4NDQ4OWU0KDB4MWU2KV0oXzB4MTc5Njc4LF8weDQ4MDU3MSk7fVsnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDEwNTAyZSxfMHg0ZGYxZjUpe3ZhciBfMHgxYWM0NmQ9XzB4NTE4NDU2O3RoaXNbJ19zZXROb2RlSWQnXShfMHgxMDUwMmUsXzB4NGRmMWY1KSx0aGlzWydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDEwNTAyZSxfMHg0ZGYxZjUpLHRoaXNbXzB4MWFjNDZkKDB4MjE2KV0oXzB4MTA1MDJlLF8weDRkZjFmNSksdGhpc1tfMHgxYWM0NmQoMHgxY2UpXShfMHgxMDUwMmUsXzB4NGRmMWY1KTt9W18weDUxODQ1NigweDI1OCldKF8weDQyYmFmYyxfMHgxNTcwZDkpe31bXzB4NTE4NDU2KDB4MWEwKV0oXzB4MTY2MTg3LF8weDNhNTE3ZCl7fVtfMHg1MTg0NTYoMHgxYmEpXShfMHgzNGFlOTcsXzB4YWY3ZWY3KXt9W18weDUxODQ1NigweDFiNCldKF8weDNlNTE2MCl7dmFyIF8weDRlNzQ1YT1fMHg1MTg0NTY7cmV0dXJuIF8weDNlNTE2MD09PXRoaXNbXzB4NGU3NDVhKDB4MWRlKV07fVtfMHg1MTg0NTYoMHgxZTYpXShfMHgzYzQxNTcsXzB4MTRlZGVjKXt2YXIgXzB4NTVjOGZiPV8weDUxODQ1Njt0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4M2M0MTU3LF8weDE0ZWRlYyksdGhpc1tfMHg1NWM4ZmIoMHgxZGMpXShfMHgzYzQxNTcpLF8weDE0ZWRlY1tfMHg1NWM4ZmIoMHgyNDUpXSYmdGhpc1tfMHg1NWM4ZmIoMHgxOWMpXShfMHgzYzQxNTcpLHRoaXNbXzB4NTVjOGZiKDB4MWJjKV0oXzB4M2M0MTU3LF8weDE0ZWRlYyksdGhpc1snX2FkZExvYWROb2RlJ10oXzB4M2M0MTU3LF8weDE0ZWRlYyksdGhpc1tfMHg1NWM4ZmIoMHgxZWMpXShfMHgzYzQxNTcpO31bXzB4NTE4NDU2KDB4MjJkKV0oXzB4M2FmY2U1LF8weDI1ODFjMyl7dmFyIF8weDI2OGQxNT1fMHg1MTg0NTY7bGV0IF8weDVhNjJhNjt0cnl7XzB4MTY5NTRhW18weDI2OGQxNSgweDIwMCldJiYoXzB4NWE2MmE2PV8weDE2OTU0YVtfMHgyNjhkMTUoMHgyMDApXVsnZXJyb3InXSxfMHgxNjk1NGFbXzB4MjY4ZDE1KDB4MjAwKV1bXzB4MjY4ZDE1KDB4MTlhKV09ZnVuY3Rpb24oKXt9KSxfMHgzYWZjZTUmJnR5cGVvZiBfMHgzYWZjZTVbJ2xlbmd0aCddPT1fMHgyNjhkMTUoMHgyMWMpJiYoXzB4MjU4MWMzW18weDI2OGQxNSgweDFlZSldPV8weDNhZmNlNVtfMHgyNjhkMTUoMHgxZWUpXSk7fWNhdGNoe31maW5hbGx5e18weDVhNjJhNiYmKF8weDE2OTU0YVsnY29uc29sZSddW18weDI2OGQxNSgweDE5YSldPV8weDVhNjJhNik7fWlmKF8weDI1ODFjM1tfMHgyNjhkMTUoMHgxYzcpXT09PV8weDI2OGQxNSgweDIxYyl8fF8weDI1ODFjM1tfMHgyNjhkMTUoMHgxYzcpXT09PV8weDI2OGQxNSgweDIwMSkpe2lmKGlzTmFOKF8weDI1ODFjM1tfMHgyNjhkMTUoMHgyN2EpXSkpXzB4MjU4MWMzW18weDI2OGQxNSgweDI2MyldPSEweDAsZGVsZXRlIF8weDI1ODFjM1tfMHgyNjhkMTUoMHgyN2EpXTtlbHNlIHN3aXRjaChfMHgyNTgxYzNbXzB4MjY4ZDE1KDB4MjdhKV0pe2Nhc2UgTnVtYmVyW18weDI2OGQxNSgweDIzNCldOl8weDI1ODFjM1tfMHgyNjhkMTUoMHgyMzUpXT0hMHgwLGRlbGV0ZSBfMHgyNTgxYzNbJ3ZhbHVlJ107YnJlYWs7Y2FzZSBOdW1iZXJbXzB4MjY4ZDE1KDB4MWFhKV06XzB4MjU4MWMzW18weDI2OGQxNSgweDI1NSldPSEweDAsZGVsZXRlIF8weDI1ODFjM1tfMHgyNjhkMTUoMHgyN2EpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDI2OGQxNSgweDFlNSldKF8weDI1ODFjM1sndmFsdWUnXSkmJihfMHgyNTgxYzNbXzB4MjY4ZDE1KDB4Mjg4KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDI1ODFjM1sndHlwZSddPT09J2Z1bmN0aW9uJyYmdHlwZW9mIF8weDNhZmNlNVsnbmFtZSddPT1fMHgyNjhkMTUoMHgxZDIpJiZfMHgzYWZjZTVbXzB4MjY4ZDE1KDB4MWY2KV0mJl8weDI1ODFjM1tfMHgyNjhkMTUoMHgxZjYpXSYmXzB4M2FmY2U1W18weDI2OGQxNSgweDFmNildIT09XzB4MjU4MWMzW18weDI2OGQxNSgweDFmNildJiYoXzB4MjU4MWMzWydmdW5jTmFtZSddPV8weDNhZmNlNVtfMHgyNjhkMTUoMHgxZjYpXSk7fVsnX2lzTmVnYXRpdmVaZXJvJ10oXzB4MmI1YzQ4KXt2YXIgXzB4NDEwNDM4PV8weDUxODQ1NjtyZXR1cm4gMHgxL18weDJiNWM0OD09PU51bWJlcltfMHg0MTA0MzgoMHgxYWEpXTt9Wydfc29ydFByb3BzJ10oXzB4NTU0ODdjKXt2YXIgXzB4NDJmYTljPV8weDUxODQ1NjshXzB4NTU0ODdjW18weDQyZmE5YygweDFmZCldfHwhXzB4NTU0ODdjW18weDQyZmE5YygweDFmZCldW18weDQyZmE5YygweDFlZSldfHxfMHg1NTQ4N2NbJ3R5cGUnXT09PV8weDQyZmE5YygweDFmNyl8fF8weDU1NDg3Y1tfMHg0MmZhOWMoMHgxYzcpXT09PV8weDQyZmE5YygweDFhZil8fF8weDU1NDg3Y1tfMHg0MmZhOWMoMHgxYzcpXT09PV8weDQyZmE5YygweDFjYyl8fF8weDU1NDg3Y1sncHJvcHMnXVsnc29ydCddKGZ1bmN0aW9uKF8weDQ3NjRjYixfMHgyMTk5YzEpe3ZhciBfMHg5ZTc0MmU9XzB4NDJmYTljLF8weGYwZDMyMD1fMHg0NzY0Y2JbJ25hbWUnXVtfMHg5ZTc0MmUoMHgyNTApXSgpLF8weDlmN2JiPV8weDIxOTljMVtfMHg5ZTc0MmUoMHgxZjYpXVtfMHg5ZTc0MmUoMHgyNTApXSgpO3JldHVybiBfMHhmMGQzMjA8XzB4OWY3YmI/LTB4MTpfMHhmMGQzMjA+XzB4OWY3YmI/MHgxOjB4MDt9KTt9W18weDUxODQ1NigweDFiYyldKF8weGI4MGFhZSxfMHg0NmY0MjUpe3ZhciBfMHgyY2NiNGI9XzB4NTE4NDU2O2lmKCEoXzB4NDZmNDI1W18weDJjY2I0YigweDI2OCldfHwhXzB4YjgwYWFlW18weDJjY2I0YigweDFmZCldfHwhXzB4YjgwYWFlW18weDJjY2I0YigweDFmZCldW18weDJjY2I0YigweDFlZSldKSl7Zm9yKHZhciBfMHgyNjQ0MWE9W10sXzB4MWY5ZWVkPVtdLF8weDU0ZTMyMD0weDAsXzB4M2Y1OGQ4PV8weGI4MGFhZVsncHJvcHMnXVtfMHgyY2NiNGIoMHgxZWUpXTtfMHg1NGUzMjA8XzB4M2Y1OGQ4O18weDU0ZTMyMCsrKXt2YXIgXzB4NDI1YWUxPV8weGI4MGFhZVtfMHgyY2NiNGIoMHgxZmQpXVtfMHg1NGUzMjBdO18weDQyNWFlMVtfMHgyY2NiNGIoMHgxYzcpXT09PV8weDJjY2I0YigweDIxOSk/XzB4MjY0NDFhW18weDJjY2I0YigweDFmNSldKF8weDQyNWFlMSk6XzB4MWY5ZWVkW18weDJjY2I0YigweDFmNSldKF8weDQyNWFlMSk7fWlmKCEoIV8weDFmOWVlZFtfMHgyY2NiNGIoMHgxZWUpXXx8XzB4MjY0NDFhW18weDJjY2I0YigweDFlZSldPD0weDEpKXtfMHhiODBhYWVbXzB4MmNjYjRiKDB4MWZkKV09XzB4MWY5ZWVkO3ZhciBfMHg1ZTdmNTE9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4MjY0NDFhfTt0aGlzW18weDJjY2I0YigweDI1OCldKF8weDVlN2Y1MSxfMHg0NmY0MjUpLHRoaXNbXzB4MmNjYjRiKDB4MWJhKV0oXzB4NWU3ZjUxLF8weDQ2ZjQyNSksdGhpc1tfMHgyY2NiNGIoMHgxZGMpXShfMHg1ZTdmNTEpLHRoaXNbXzB4MmNjYjRiKDB4MWNlKV0oXzB4NWU3ZjUxLF8weDQ2ZjQyNSksXzB4NWU3ZjUxWydpZCddKz0nXFxcXHgyMGYnLF8weGI4MGFhZVtfMHgyY2NiNGIoMHgxZmQpXVtfMHgyY2NiNGIoMHgxYmIpXShfMHg1ZTdmNTEpO319fVtfMHg1MTg0NTYoMHgyNDMpXShfMHg0NWZkNGIsXzB4MjBlNGMzKXt9W18weDUxODQ1NigweDFkYyldKF8weDMyYzEyYSl7fVtfMHg1MTg0NTYoMHgyMWEpXShfMHg0MmRhYzMpe3ZhciBfMHgzYjlkNjc9XzB4NTE4NDU2O3JldHVybiBBcnJheVtfMHgzYjlkNjcoMHgyM2QpXShfMHg0MmRhYzMpfHx0eXBlb2YgXzB4NDJkYWMzPT1fMHgzYjlkNjcoMHgyNzcpJiZ0aGlzW18weDNiOWQ2NygweDIxNCldKF8weDQyZGFjMyk9PT1fMHgzYjlkNjcoMHgyNzApO31bXzB4NTE4NDU2KDB4MWNlKV0oXzB4MjBkNmZmLF8weDIzZGZlYil7fVtfMHg1MTg0NTYoMHgxZWMpXShfMHg0NjNlMGYpe3ZhciBfMHg0ZmVmZmY9XzB4NTE4NDU2O2RlbGV0ZSBfMHg0NjNlMGZbXzB4NGZlZmZmKDB4MWU3KV0sZGVsZXRlIF8weDQ2M2UwZltfMHg0ZmVmZmYoMHgyNWQpXSxkZWxldGUgXzB4NDYzZTBmW18weDRmZWZmZigweDFjZCldO31bJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgzOWVlNmEsXzB4NDEwYjA2KXt9fWxldCBfMHgzMjE5NjA9bmV3IF8weGVhNGYxYigpLF8weDI4NTZkYj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg0NDlmZmY9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHg0Y2VmZjAoXzB4MmMzYTVkLF8weDQwNTU2OSxfMHg0MmM5MTUsXzB4ZTlkZjIsXzB4M2VmZGQ5LF8weDM3MjU5Zil7dmFyIF8weDE3MTAzMD1fMHg1MTg0NTY7bGV0IF8weDNiMzE0NixfMHgxYTFjODc7dHJ5e18weDFhMWM4Nz1fMHgzMDAyOTEoKSxfMHgzYjMxNDY9XzB4MzI2NmRmW18weDQwNTU2OV0sIV8weDNiMzE0Nnx8XzB4MWExYzg3LV8weDNiMzE0NlsndHMnXT4weDFmNCYmXzB4M2IzMTQ2W18weDE3MTAzMCgweDFjYSldJiZfMHgzYjMxNDZbJ3RpbWUnXS9fMHgzYjMxNDZbXzB4MTcxMDMwKDB4MWNhKV08MHg2ND8oXzB4MzI2NmRmW18weDQwNTU2OV09XzB4M2IzMTQ2PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MWExYzg3fSxfMHgzMjY2ZGZbJ2hpdHMnXT17fSk6XzB4MWExYzg3LV8weDMyNjZkZlsnaGl0cyddWyd0cyddPjB4MzImJl8weDMyNjZkZltfMHgxNzEwMzAoMHgxZDYpXVtfMHgxNzEwMzAoMHgxY2EpXSYmXzB4MzI2NmRmWydoaXRzJ11bXzB4MTcxMDMwKDB4MjM5KV0vXzB4MzI2NmRmW18weDE3MTAzMCgweDFkNildW18weDE3MTAzMCgweDFjYSldPDB4NjQmJihfMHgzMjY2ZGZbXzB4MTcxMDMwKDB4MWQ2KV09e30pO2xldCBfMHg5ODhiMTU9W10sXzB4MzI2ZmQxPV8weDNiMzE0NlsncmVkdWNlTGltaXRzJ118fF8weDMyNjZkZlsnaGl0cyddW18weDE3MTAzMCgweDI2ZSldP18weDQ0OWZmZjpfMHgyODU2ZGIsXzB4MmQ1MGE3PV8weDI2YTVkYz0+e3ZhciBfMHhlNGUzOGM9XzB4MTcxMDMwO2xldCBfMHhiZjg2Mzc9e307cmV0dXJuIF8weGJmODYzN1tfMHhlNGUzOGMoMHgxZmQpXT1fMHgyNmE1ZGNbXzB4ZTRlMzhjKDB4MWZkKV0sXzB4YmY4NjM3W18weGU0ZTM4YygweDIyNSldPV8weDI2YTVkY1tfMHhlNGUzOGMoMHgyMjUpXSxfMHhiZjg2MzdbXzB4ZTRlMzhjKDB4MWI4KV09XzB4MjZhNWRjW18weGU0ZTM4YygweDFiOCldLF8weGJmODYzN1tfMHhlNGUzOGMoMHgyNDQpXT1fMHgyNmE1ZGNbXzB4ZTRlMzhjKDB4MjQ0KV0sXzB4YmY4NjM3W18weGU0ZTM4YygweDFhYyldPV8weDI2YTVkY1tfMHhlNGUzOGMoMHgxYWMpXSxfMHhiZjg2MzdbXzB4ZTRlMzhjKDB4MWUxKV09XzB4MjZhNWRjW18weGU0ZTM4YygweDFlMSldLF8weGJmODYzN1tfMHhlNGUzOGMoMHgyNDUpXT0hMHgxLF8weGJmODYzN1tfMHhlNGUzOGMoMHgyNjgpXT0hXzB4MWY1NjEyLF8weGJmODYzN1tfMHhlNGUzOGMoMHgyNWMpXT0weDEsXzB4YmY4NjM3WydsZXZlbCddPTB4MCxfMHhiZjg2MzdbJ2V4cElkJ109J3Jvb3RfZXhwX2lkJyxfMHhiZjg2MzdbXzB4ZTRlMzhjKDB4MjU0KV09XzB4ZTRlMzhjKDB4MjI4KSxfMHhiZjg2MzdbXzB4ZTRlMzhjKDB4MWM4KV09ITB4MCxfMHhiZjg2MzdbXzB4ZTRlMzhjKDB4MjdmKV09W10sXzB4YmY4NjM3WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPTB4MCxfMHhiZjg2MzdbXzB4ZTRlMzhjKDB4MjEzKV09ITB4MCxfMHhiZjg2MzdbJ2FsbFN0ckxlbmd0aCddPTB4MCxfMHhiZjg2MzdbXzB4ZTRlMzhjKDB4MjgxKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4YmY4NjM3O307Zm9yKHZhciBfMHg0ZDc2YWM9MHgwO18weDRkNzZhYzxfMHgzZWZkZDlbXzB4MTcxMDMwKDB4MWVlKV07XzB4NGQ3NmFjKyspXzB4OTg4YjE1W18weDE3MTAzMCgweDFmNSldKF8weDMyMTk2MFtfMHgxNzEwMzAoMHgxZjkpXSh7J3RpbWVOb2RlJzpfMHgyYzNhNWQ9PT0ndGltZSd8fHZvaWQgMHgwfSxfMHgzZWZkZDlbXzB4NGQ3NmFjXSxfMHgyZDUwYTcoXzB4MzI2ZmQxKSx7fSkpO2lmKF8weDJjM2E1ZD09PV8weDE3MTAzMCgweDFkNSkpe2xldCBfMHg1YWVlNDU9RXJyb3JbXzB4MTcxMDMwKDB4MjMwKV07dHJ5e0Vycm9yW18weDE3MTAzMCgweDIzMCldPTB4MS8weDAsXzB4OTg4YjE1W18weDE3MTAzMCgweDFmNSldKF8weDMyMTk2MFtfMHgxNzEwMzAoMHgxZjkpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4MTcxMDMwKDB4MjU3KV0sXzB4MmQ1MGE3KF8weDMyNmZkMSkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4MTcxMDMwKDB4MjMwKV09XzB4NWFlZTQ1O319cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHg1MzNhZjIsJ2FyZ3MnOlt7J3RzJzpfMHg0MmM5MTUsJ3Nlc3Npb24nOl8weGU5ZGYyLCdhcmdzJzpfMHg5ODhiMTUsJ2lkJzpfMHg0MDU1NjksJ2NvbnRleHQnOl8weDM3MjU5Zn1dfTt9Y2F0Y2goXzB4MWFkY2Q4KXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDUzM2FmMiwnYXJncyc6W3sndHMnOl8weDQyYzkxNSwnc2Vzc2lvbic6XzB4ZTlkZjIsJ2FyZ3MnOlt7J3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDFhZGNkOCYmXzB4MWFkY2Q4W18weDE3MTAzMCgweDFiMyldfV0sJ2lkJzpfMHg0MDU1NjksJ2NvbnRleHQnOl8weDM3MjU5Zn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4M2IzMTQ2JiZfMHgxYTFjODcpe2xldCBfMHgyNGYxMmI9XzB4MzAwMjkxKCk7XzB4M2IzMTQ2Wydjb3VudCddKyssXzB4M2IzMTQ2Wyd0aW1lJ10rPV8weDgzMjQ0MihfMHgxYTFjODcsXzB4MjRmMTJiKSxfMHgzYjMxNDZbJ3RzJ109XzB4MjRmMTJiLF8weDMyNjZkZltfMHgxNzEwMzAoMHgxZDYpXVtfMHgxNzEwMzAoMHgxY2EpXSsrLF8weDMyNjZkZltfMHgxNzEwMzAoMHgxZDYpXVsndGltZSddKz1fMHg4MzI0NDIoXzB4MWExYzg3LF8weDI0ZjEyYiksXzB4MzI2NmRmW18weDE3MTAzMCgweDFkNildWyd0cyddPV8weDI0ZjEyYiwoXzB4M2IzMTQ2W18weDE3MTAzMCgweDFjYSldPjB4MzJ8fF8weDNiMzE0NltfMHgxNzEwMzAoMHgyMzkpXT4weDY0KSYmKF8weDNiMzE0NltfMHgxNzEwMzAoMHgyNmUpXT0hMHgwKSwoXzB4MzI2NmRmW18weDE3MTAzMCgweDFkNildWydjb3VudCddPjB4M2U4fHxfMHgzMjY2ZGZbXzB4MTcxMDMwKDB4MWQ2KV1bJ3RpbWUnXT4weDEyYykmJihfMHgzMjY2ZGZbXzB4MTcxMDMwKDB4MWQ2KV1bXzB4MTcxMDMwKDB4MjZlKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4NGNlZmYwO30oKF8weDQ0ZTg4YyxfMHg1YTI0MjMsXzB4MmM5OTA1LF8weDIzYWFjNSxfMHgyZGZkODQsXzB4MWVkYWM1LF8weDVmMzI4NCxfMHhlZjYxZTYsXzB4NDgwMWMxLF8weDRhMWQ4Yik9Pnt2YXIgXzB4NTk1OWIyPV8weDMxYThhODtpZihfMHg0NGU4OGNbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDQ0ZTg4Y1snX2NvbnNvbGVfbmluamEnXTtpZighWChfMHg0NGU4OGMsXzB4ZWY2MWU2LF8weDJkZmQ4NCkpcmV0dXJuIF8weDQ0ZTg4Y1tfMHg1OTU5YjIoMHgyN2UpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NDRlODhjW18weDU5NTliMigweDI3ZSldO2xldCBfMHgyMmJhNDc9VyhfMHg0NGU4OGMpLF8weDQ2MjRjNT1fMHgyMmJhNDdbJ2VsYXBzZWQnXSxfMHg1MTQ1NGM9XzB4MjJiYTQ3W18weDU5NTliMigweDIyOSldLF8weDNkMWY5ZD1fMHgyMmJhNDdbXzB4NTk1OWIyKDB4MjNiKV0sXzB4NDNmNGQwPXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4NWRjZjMyPUooXzB4NDRlODhjLF8weDQ4MDFjMSxfMHg0M2Y0ZDAsXzB4MWVkYWM1KSxfMHgyZGE1NjQ9XzB4NzU4ZTFkPT57XzB4NDNmNGQwWyd0cyddW18weDc1OGUxZF09XzB4NTE0NTRjKCk7fSxfMHg0ZTNhYzI9KF8weDMzZjRmZixfMHg0MGRkYTIpPT57dmFyIF8weDIzNThmOT1fMHg1OTU5YjI7bGV0IF8weDUyMTk5Mj1fMHg0M2Y0ZDBbJ3RzJ11bXzB4NDBkZGEyXTtpZihkZWxldGUgXzB4NDNmNGQwWyd0cyddW18weDQwZGRhMl0sXzB4NTIxOTkyKXtsZXQgXzB4NDU4MzVkPV8weDQ2MjRjNShfMHg1MjE5OTIsXzB4NTE0NTRjKCkpO18weDUwNmMxYyhfMHg1ZGNmMzIoXzB4MjM1OGY5KDB4MjM5KSxfMHgzM2Y0ZmYsXzB4M2QxZjlkKCksXzB4MzQyYzUwLFtfMHg0NTgzNWRdLF8weDQwZGRhMikpO319LF8weDRhOTQ5Zj1fMHgxYzhlNTk9PihfMHgyZGZkODQ9PT1fMHg1OTU5YjIoMHgyNmEpJiZfMHg0NGU4OGNbXzB4NTk1OWIyKDB4MjVmKV0mJl8weDFjOGU1OT8uW18weDU5NTliMigweDI1YildPy5bXzB4NTk1OWIyKDB4MWVlKV0mJihfMHgxYzhlNTlbXzB4NTk1OWIyKDB4MjViKV1bMHgwXVtfMHg1OTU5YjIoMHgyNWYpXT1fMHg0NGU4OGNbXzB4NTk1OWIyKDB4MjVmKV0pLF8weDFjOGU1OSk7XzB4NDRlODhjW18weDU5NTliMigweDI3ZSldPXsnY29uc29sZUxvZyc6KF8weDMxZDhkNCxfMHg1YjIwZjUpPT57dmFyIF8weDExNzIyYT1fMHg1OTU5YjI7XzB4NDRlODhjWydjb25zb2xlJ11bXzB4MTE3MjJhKDB4MjIzKV1bXzB4MTE3MjJhKDB4MWY2KV0hPT0nZGlzYWJsZWRMb2cnJiZfMHg1MDZjMWMoXzB4NWRjZjMyKCdsb2cnLF8weDMxZDhkNCxfMHgzZDFmOWQoKSxfMHgzNDJjNTAsXzB4NWIyMGY1KSk7fSwnY29uc29sZVRyYWNlJzooXzB4MTE4YjRkLF8weDRiMTJlMSk9Pnt2YXIgXzB4NTQ2NTZjPV8weDU5NTliMjtfMHg0NGU4OGNbJ2NvbnNvbGUnXVsnbG9nJ11bJ25hbWUnXSE9PSdkaXNhYmxlZFRyYWNlJyYmXzB4NTA2YzFjKF8weDRhOTQ5ZihfMHg1ZGNmMzIoXzB4NTQ2NTZjKDB4MWQ1KSxfMHgxMThiNGQsXzB4M2QxZjlkKCksXzB4MzQyYzUwLF8weDRiMTJlMSkpKTt9LCdjb25zb2xlVGltZSc6XzB4M2ZiZTU0PT57XzB4MmRhNTY0KF8weDNmYmU1NCk7fSwnY29uc29sZVRpbWVFbmQnOihfMHhmNTI0OTgsXzB4NjlkMDA0KT0+e18weDRlM2FjMihfMHg2OWQwMDQsXzB4ZjUyNDk4KTt9LCdhdXRvTG9nJzooXzB4MTM5ZDZhLF8weDlkNTk5Myk9Pnt2YXIgXzB4Mjg1M2RhPV8weDU5NTliMjtfMHg1MDZjMWMoXzB4NWRjZjMyKF8weDI4NTNkYSgweDIyMyksXzB4OWQ1OTkzLF8weDNkMWY5ZCgpLF8weDM0MmM1MCxbXzB4MTM5ZDZhXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4MTU4MWFhLF8weDRhYmYzMCk9Pnt2YXIgXzB4MTExM2JkPV8weDU5NTliMjtfMHg1MDZjMWMoXzB4NWRjZjMyKF8weDExMTNiZCgweDIyMyksXzB4MTU4MWFhLF8weDNkMWY5ZCgpLF8weDM0MmM1MCxfMHg0YWJmMzApKTt9LCdhdXRvVHJhY2UnOihfMHgyN2M1YmMsXzB4NGY3MTJhKT0+e3ZhciBfMHg1NWVkNWI9XzB4NTk1OWIyO18weDUwNmMxYyhfMHg0YTk0OWYoXzB4NWRjZjMyKF8weDU1ZWQ1YigweDFkNSksXzB4NGY3MTJhLF8weDNkMWY5ZCgpLF8weDM0MmM1MCxbXzB4MjdjNWJjXSkpKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NjI1NGJmLF8weDNhZWVlYyk9Pnt2YXIgXzB4M2U2MDI4PV8weDU5NTliMjtfMHg1MDZjMWMoXzB4NGE5NDlmKF8weDVkY2YzMihfMHgzZTYwMjgoMHgxZDUpLF8weDYyNTRiZixfMHgzZDFmOWQoKSxfMHgzNDJjNTAsXzB4M2FlZWVjKSkpO30sJ2F1dG9UaW1lJzooXzB4NTBkNzc3LF8weDQ1ZGUyZCxfMHgxMzA1OTUpPT57XzB4MmRhNTY0KF8weDEzMDU5NSk7fSwnYXV0b1RpbWVFbmQnOihfMHg0OGRhMmMsXzB4M2RlZGE4LF8weGEzN2NiYSk9PntfMHg0ZTNhYzIoXzB4M2RlZGE4LF8weGEzN2NiYSk7fSwnY292ZXJhZ2UnOl8weDM1MGQ3ZD0+e3ZhciBfMHgzZTk1NzA9XzB4NTk1OWIyO18weDUwNmMxYyh7J21ldGhvZCc6XzB4M2U5NTcwKDB4MjA0KSwndmVyc2lvbic6XzB4MWVkYWM1LCdhcmdzJzpbeydpZCc6XzB4MzUwZDdkfV19KTt9fTtsZXQgXzB4NTA2YzFjPXgoXzB4NDRlODhjLF8weDVhMjQyMyxfMHgyYzk5MDUsXzB4MjNhYWM1LF8weDJkZmQ4NCxfMHg0YTFkOGIpLF8weDM0MmM1MD1fMHg0NGU4OGNbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXTtyZXR1cm4gXzB4NDRlODhjW18weDU5NTliMigweDI3ZSldO30pKGdsb2JhbFRoaXMsJzEyNy4wLjAuMScsJzUyNzkwJyxfMHgzMWE4YTgoMHgyN2MpLCd3ZWJwYWNrJyxfMHgzMWE4YTgoMHgxZGYpLF8weDMxYThhOCgweDI0YiksXzB4MzFhOGE4KDB4MjBiKSxfMHgzMWE4YTgoMHgyMmEpLF8weDMxYThhOCgweDIwZSkpO1wiKTtcbn1cbmNhdGNoIChlKSB7IH0gfVxuOyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gb29fb28oaSwgLi4udikgeyB0cnkge1xuICAgIG9vX2NtKCkuY29uc29sZUxvZyhpLCB2KTtcbn1cbmNhdGNoIChlKSB7IH0gcmV0dXJuIHY7IH1cbjtcbm9vX29vOyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gb29fdHIoaSwgLi4udikgeyB0cnkge1xuICAgIG9vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO1xufVxuY2F0Y2ggKGUpIHsgfSByZXR1cm4gdjsgfVxuO1xub29fdHI7IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBvb190cyh2KSB7IHRyeSB7XG4gICAgb29fY20oKS5jb25zb2xlVGltZSh2KTtcbn1cbmNhdGNoIChlKSB7IH0gcmV0dXJuIHY7IH1cbjtcbm9vX3RzOyAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gb29fdGUodiwgaSkgeyB0cnkge1xuICAgIG9vX2NtKCkuY29uc29sZVRpbWVFbmQodiwgaSk7XG59XG5jYXRjaCAoZSkgeyB9IHJldHVybiB2OyB9XG47XG5vb190ZTsgLyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGluZm9fcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9wYWdlcy9pbmZvLXBhZ2UvaW5mby1wYWdlXCIpKTtcbmNvbnN0IG1haW5fcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlXCIpKTtcbmNvbnN0IGxvZ2luX3BhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlXCIpKTtcbmNvbnN0IGZvcm1fdmFsaWRhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGlvbi9mb3JtLXZhbGlkYXRpb25cIikpO1xuY29uc3QgZXJyb3JfcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9wYWdlcy9lcnJvci1wYWdlL2Vycm9yLXBhZ2VcIikpO1xuY29uc3Qgc3RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9zdGF0ZS9zdGF0ZVwiKTtcbmNsYXNzIEFwcCB7XG4gICAgc3RhdGljIHJlbmRlck5ld1BhZ2UoaWRQYWdlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0FwcC5kZWZhdWx0UGFnZUlkfWApO1xuICAgICAgICBpZiAoY3VycmVudFBhZ2VIVE1MKSB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZUhUTUwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhZ2UgPSBudWxsO1xuICAgICAgICBpZiAoaWRQYWdlID09PSBcIm1haW5cIikge1xuICAgICAgICAgICAgc3RhdGVfMS5zdGF0ZS5nZXRVc2VyKCkuaXNMb2dpbmVkXG4gICAgICAgICAgICAgICAgPyAocGFnZSA9IG5ldyBtYWluX3BhZ2VfMS5kZWZhdWx0KGlkUGFnZSkpXG4gICAgICAgICAgICAgICAgOiAod2luZG93LmxvY2F0aW9uLmhhc2ggPSBcImxvZ2luXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlkUGFnZSA9PT0gXCJpbmZvXCIpIHtcbiAgICAgICAgICAgIHBhZ2UgPSBuZXcgaW5mb19wYWdlXzEuZGVmYXVsdChpZFBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlkUGFnZSA9PT0gXCJsb2dpblwiKSB7XG4gICAgICAgICAgICBzdGF0ZV8xLnN0YXRlLmdldFVzZXIoKS5pc0xvZ2luZWRcbiAgICAgICAgICAgICAgICA/ICh3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwibWFpblwiKVxuICAgICAgICAgICAgICAgIDogKHBhZ2UgPSBuZXcgbG9naW5fcGFnZV8xLmRlZmF1bHQoaWRQYWdlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYWdlID0gbmV3IGVycm9yX3BhZ2VfMS5kZWZhdWx0KGlkUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VIVE1MID0gcGFnZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIHBhZ2VIVE1MLmlkID0gQXBwLmRlZmF1bHRQYWdlSWQ7XG4gICAgICAgICAgICBBcHAuY29udGFpbmVyLmFwcGVuZChwYWdlSFRNTCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlUm91dGVDaGFuZ2UoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gICAgICAgICAgICBBcHAucmVuZGVyTmV3UGFnZShoYXNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZvcm1WYWxpZGF0aW9uID0gbmV3IGZvcm1fdmFsaWRhdGlvbl8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBBcHAucmVuZGVyTmV3UGFnZShcImxvZ2luXCIpO1xuICAgICAgICB0aGlzLmVuYWJsZVJvdXRlQ2hhbmdlKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJsb2dpblwiO1xuICAgICAgICB0aGlzLmZvcm1WYWxpZGF0aW9uLnNldHVwVmFsaWRhdGlvbigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtVmFsaWRhdGlvbi5zZXR1cFZhbGlkYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQXBwLmNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XG5BcHAuZGVmYXVsdFBhZ2VJZCA9IFwiY3VycmVudC1wYWdlXCI7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlVXNlckxpc3QgPSBleHBvcnRzLmNyZWF0ZVVzZXJBc2lkZSA9IGV4cG9ydHMuY3JlYXRlVXNlclNlYXJjaCA9IGV4cG9ydHMuY3JlYXRlVXNlckl0ZW0gPSB2b2lkIDA7XG5jb25zdCBjcmVhdGVVc2VySXRlbSA9ICh1c2VyLCBjb3VudCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHVzZXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS11c2VyX19pdGVtXCIpO1xuICAgIGNvbnN0IHVzZXJTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVzZXJTdGF0dXMuY2xhc3NMaXN0LmFkZChcImFzaWRlLXVzZXJfX3N0YXR1c1wiLCBgJHt1c2VyLmlzTG9naW5lZCA/IFwiYWN0aXZlXCIgOiBcImluYWN0aXZlXCJ9YCk7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdXNlck5hbWUuY2xhc3NMaXN0LmFkZChcImFzaWRlLXVzZXJfX25hbWVcIik7XG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luO1xuICAgIGNvbnN0IHVzZXJNZXNzYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB1c2VyTWVzc2FnZXMuY2xhc3NMaXN0LmFkZChcImFzaWRlLXVzZXJfX21lc3NhZ2VzXCIpO1xuICAgIGlmIChjb3VudCA+IDApXG4gICAgICAgIHVzZXJNZXNzYWdlcy5jbGFzc0xpc3QuYWRkKFwiaGFzLW1lc3NhZ2VzXCIpO1xuICAgIHVzZXJNZXNzYWdlcy50ZXh0Q29udGVudCA9IGAke2NvdW50ID4gMCA/IGNvdW50IDogXCJcIn1gO1xuICAgIHVzZXJJdGVtLmFwcGVuZCh1c2VyU3RhdHVzLCB1c2VyTmFtZSwgdXNlck1lc3NhZ2VzKTtcbiAgICByZXR1cm4gdXNlckl0ZW07XG59O1xuZXhwb3J0cy5jcmVhdGVVc2VySXRlbSA9IGNyZWF0ZVVzZXJJdGVtO1xuY29uc3QgY3JlYXRlVXNlclNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHVzZXJTZWFyY2guY2xhc3NMaXN0LmFkZChcImFzaWRlLXVzZXJfX3NlYXJjaFwiKTtcbiAgICB1c2VyU2VhcmNoLnBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIjtcbiAgICByZXR1cm4gdXNlclNlYXJjaDtcbn07XG5leHBvcnRzLmNyZWF0ZVVzZXJTZWFyY2ggPSBjcmVhdGVVc2VyU2VhcmNoO1xuY29uc3QgY3JlYXRlVXNlckFzaWRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJBc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbiAgICB1c2VyQXNpZGUuY2xhc3NMaXN0LmFkZChcImFzaWRlLXVzZXJcIik7XG4gICAgcmV0dXJuIHVzZXJBc2lkZTtcbn07XG5leHBvcnRzLmNyZWF0ZVVzZXJBc2lkZSA9IGNyZWF0ZVVzZXJBc2lkZTtcbmNvbnN0IGNyZWF0ZVVzZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVzZXJMaXN0LmNsYXNzTGlzdC5hZGQoXCJhc2lkZS11c2VyX19saXN0XCIpO1xuICAgIHJldHVybiB1c2VyTGlzdDtcbn07XG5leHBvcnRzLmNyZWF0ZVVzZXJMaXN0ID0gY3JlYXRlVXNlckxpc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2J1dHRvbi5zY3NzXCIpO1xuY2xhc3MgQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGNvbW1vbkNsYXNzTmFtZSwgdGV4dCwgdHlwZSkge1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChjb21tb25DbGFzc05hbWUpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGAke3R5cGV9YCk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgZ2V0Um9vdEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcbiAgICB9XG4gICAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGljayhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBoYW5kbGVVcGRhdGVCdXR0b25DbGljayhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0YXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc3RhdGUvc3RhdGVcIik7XG5jb25zdCBjcmVhdGVfYXNpZGVfMSA9IHJlcXVpcmUoXCIuLi9hc2lkZS1jb250ZW50L2NyZWF0ZS1hc2lkZVwiKTtcbmNvbnN0IGNyZWF0ZV9kaWFsb2dfZWxlbWVudHNfMSA9IHJlcXVpcmUoXCIuLi9kaWFsb2ctY29udGVudC9jcmVhdGUtZGlhbG9nLWVsZW1lbnRzXCIpO1xuY29uc3QgZm9ybWF0X2RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9mb3JtYXQtZGF0ZVwiKTtcbmNsYXNzIENvbnRlbnQge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJTZWFyY2gsIHVzZXJMaXN0LCBkaWFsb2dGb3JtLCBpbnB1dE1lc3NhZ2UsIGRpYWxvZ0NvbnRlbnQpIHtcbiAgICAgICAgdGhpcy51c2VycyA9IFtdO1xuICAgICAgICB0aGlzLnVzZXJTZWFyY2ggPSB1c2VyU2VhcmNoO1xuICAgICAgICB0aGlzLnVzZXJMaXN0ID0gdXNlckxpc3Q7XG4gICAgICAgIHRoaXMuZGlhbG9nRm9ybSA9IGRpYWxvZ0Zvcm07XG4gICAgICAgIHRoaXMuaW5wdXRNZXNzYWdlID0gaW5wdXRNZXNzYWdlO1xuICAgICAgICB0aGlzLmRpYWxvZ0NvbnRlbnQgPSBkaWFsb2dDb250ZW50O1xuICAgIH1cbiAgICBzZWFyY2hVc2VyKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUFsbFVzZXJzKCk7XG4gICAgICAgIHRoaXMudXNlclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLnVzZXJTZWFyY2gudmFsdWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVzZXIgb2YgdGhpcy51c2Vycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gdXNlci5sb2dpbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyTmFtZS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJMaXN0LmFwcGVuZCgoMCwgY3JlYXRlX2FzaWRlXzEuY3JlYXRlVXNlckl0ZW0pKHVzZXIsIDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVBbGxVc2VycygpIHtcbiAgICAgICAgdGhpcy51c2Vycy5wdXNoKC4uLnN0YXRlXzEuc3RhdGUuZ2V0QWxsVXNlcnMoKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2Vycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdC5hcHBlbmQoKDAsIGNyZWF0ZV9hc2lkZV8xLmNyZWF0ZVVzZXJJdGVtKSh0aGlzLnVzZXJzW2ldLCAxKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3VibWl0TWVzc2FnZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuaW5wdXRNZXNzYWdlLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVG9SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZ19fbGFiZWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDb250ZW50LnJlbW92ZUNoaWxkKGxhYmVsVG9SZW1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0NvbnRlbnQuYXBwZW5kKHRoaXMuY3JlYXRlTWVzc2FnZUJsb2NrKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlTWVzc2FnZUJsb2NrKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlQmxvY2sgPSAoMCwgY3JlYXRlX2RpYWxvZ19lbGVtZW50c18xLmNyZWF0ZURpdikoXCJtZXNzYWdlX19ibG9ja1wiKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9ICgwLCBjcmVhdGVfZGlhbG9nX2VsZW1lbnRzXzEuY3JlYXRlRGl2KShcIm1lc3NhZ2VfX2NvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUhlYWRlciA9ICgwLCBjcmVhdGVfZGlhbG9nX2VsZW1lbnRzXzEuY3JlYXRlRGl2KShcIm1lc3NhZ2VfX2hlYWRlclwiKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVVzZXIgPSAoMCwgY3JlYXRlX2RpYWxvZ19lbGVtZW50c18xLmNyZWF0ZUxhYmVsKShcIm1lc3NhZ2VfX3VzZXJcIik7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRlID0gKDAsIGNyZWF0ZV9kaWFsb2dfZWxlbWVudHNfMS5jcmVhdGVMYWJlbCkoXCJtZXNzYWdlX19kYXRlXCIpO1xuICAgICAgICBtZXNzYWdlVXNlci50ZXh0Q29udGVudCA9IFwieW91XCI7XG4gICAgICAgIG1lc3NhZ2VEYXRlLnRleHRDb250ZW50ID0gKDAsIGZvcm1hdF9kYXRlXzEuZm9ybWF0RGF0ZSkoKTtcbiAgICAgICAgbWVzc2FnZUhlYWRlci5hcHBlbmQobWVzc2FnZVVzZXIsIG1lc3NhZ2VEYXRlKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVRleHQgPSAoMCwgY3JlYXRlX2RpYWxvZ19lbGVtZW50c18xLmNyZWF0ZURpdikoXCJtZXNzYWdlX190ZXh0XCIpO1xuICAgICAgICBjb25zdCBtZXNzYWdlRm9vdGVyID0gKDAsIGNyZWF0ZV9kaWFsb2dfZWxlbWVudHNfMS5jcmVhdGVEaXYpKFwibWVzc2FnZV9fZm9vdGVyXCIpO1xuICAgICAgICBjb25zdCBmb290ZXJMYWJlbCA9ICgwLCBjcmVhdGVfZGlhbG9nX2VsZW1lbnRzXzEuY3JlYXRlTGFiZWwpKFwibWVzc2FnZV9fZm9vdGVyLWxhYmVsXCIpO1xuICAgICAgICBjb25zdCBtZXNzYWdlU3RhdHVzID0gKDAsIGNyZWF0ZV9kaWFsb2dfZWxlbWVudHNfMS5jcmVhdGVMYWJlbCkoXCJtZXNzYWdlX19zdGF0dXNcIik7XG4gICAgICAgIG1lc3NhZ2VGb290ZXIuYXBwZW5kKGZvb3RlckxhYmVsLCBtZXNzYWdlU3RhdHVzKTtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmQobWVzc2FnZUhlYWRlciwgbWVzc2FnZVRleHQsIG1lc3NhZ2VGb290ZXIpO1xuICAgICAgICBtZXNzYWdlQmxvY2suYXBwZW5kKG1lc3NhZ2VDb250YWluZXIpO1xuICAgICAgICBtZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9IHRoaXMuaW5wdXRNZXNzYWdlLnZhbHVlO1xuICAgICAgICByZXR1cm4gbWVzc2FnZUJsb2NrO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlRXJyb3JFbGVtZW50cyA9IGV4cG9ydHMuY3JlYXRlTGFiZWwgPSBleHBvcnRzLmNyZWF0ZUlucHV0ID0gdm9pZCAwO1xucmVxdWlyZShcIi4vaW5wdXRfZmllbGQuc2Nzc1wiKTtcbmNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGlkKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaW5wdXQuaWQgPSBpZDtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibG9naW5fX2lucHV0XCIpO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gaW5wdXQ7XG59O1xuZXhwb3J0cy5jcmVhdGVJbnB1dCA9IGNyZWF0ZUlucHV0O1xuY29uc3QgY3JlYXRlTGFiZWwgPSAoZm9yTGFiZWwsIHRleHQpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5odG1sRm9yID0gZm9yTGFiZWw7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBsYWJlbDtcbn07XG5leHBvcnRzLmNyZWF0ZUxhYmVsID0gY3JlYXRlTGFiZWw7XG5jb25zdCBjcmVhdGVFcnJvckVsZW1lbnRzID0gKGNsYXNzRXJyb3IpID0+IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogYGxvZ2luX19lcnJvciAke2NsYXNzRXJyb3J9YCxcbn0pO1xuZXhwb3J0cy5jcmVhdGVFcnJvckVsZW1lbnRzID0gY3JlYXRlRXJyb3JFbGVtZW50cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVEaXYgPSBleHBvcnRzLmNyZWF0ZURpYWxvZ0lucHV0Rm9ybSA9IGV4cG9ydHMuY3JlYXRlRGlhbG9nQ29udGVudCA9IGV4cG9ydHMuY3JlYXRlTGFiZWwgPSBleHBvcnRzLmNyZWF0ZUFydGljbGUgPSBleHBvcnRzLmNyZWF0ZUlucHV0TWVzc2FnZSA9IHZvaWQgMDtcbmNvbnN0IGNyZWF0ZUlucHV0TWVzc2FnZSA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dfX2lucHV0XCIpO1xuICAgIGlucHV0TWVzc2FnZS5wbGFjZWhvbGRlciA9IFwiTWVzc2FnZVwiO1xuICAgIHJldHVybiBpbnB1dE1lc3NhZ2U7XG59O1xuZXhwb3J0cy5jcmVhdGVJbnB1dE1lc3NhZ2UgPSBjcmVhdGVJbnB1dE1lc3NhZ2U7XG5jb25zdCBjcmVhdGVBcnRpY2xlID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gYXJ0aWNsZTtcbn07XG5leHBvcnRzLmNyZWF0ZUFydGljbGUgPSBjcmVhdGVBcnRpY2xlO1xuY29uc3QgY3JlYXRlTGFiZWwgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBsYWJlbDtcbn07XG5leHBvcnRzLmNyZWF0ZUxhYmVsID0gY3JlYXRlTGFiZWw7XG5jb25zdCBjcmVhdGVEaWFsb2dDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBkaWFsb2dDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dfX2NvbnRlbnRcIik7XG4gICAgY29uc3QgY29udGVudFRleHQgPSAoMCwgZXhwb3J0cy5jcmVhdGVMYWJlbCkoXCJkaWFsb2dfX2xhYmVsXCIpO1xuICAgIGNvbnRlbnRUZXh0LnRleHRDb250ZW50ID0gXCJTZW5kIHlvdXIgZmlyc3QgbWVzc2FnZVwiO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kKGNvbnRlbnRUZXh0KTtcbiAgICByZXR1cm4gZGlhbG9nQ29udGVudDtcbn07XG5leHBvcnRzLmNyZWF0ZURpYWxvZ0NvbnRlbnQgPSBjcmVhdGVEaWFsb2dDb250ZW50O1xuY29uc3QgY3JlYXRlRGlhbG9nSW5wdXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBkaWFsb2dGb3JtLmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dfX2Zvcm1cIik7XG4gICAgcmV0dXJuIGRpYWxvZ0Zvcm07XG59O1xuZXhwb3J0cy5jcmVhdGVEaWFsb2dJbnB1dEZvcm0gPSBjcmVhdGVEaWFsb2dJbnB1dEZvcm07XG5jb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBkaXY7XG59O1xuZXhwb3J0cy5jcmVhdGVEaXYgPSBjcmVhdGVEaXY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b24vYnV0dG9uXCIpKTtcbmNvbnN0IGdldF9sb2dpbl9kYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvZ2V0LWxvZ2luLWRhdGFcIik7XG5jbGFzcyBFbnRlckJ1dHRvbiBleHRlbmRzIGJ1dHRvbl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcImVudGVyX19idG5cIiwgXCJidG5cIiwgXCJFbnRlclwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGdldF9sb2dpbl9kYXRhXzEubG9naW5EYXRhLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICF0aGlzLmdldFJvb3RFbGVtZW50KCkuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBnZXRfbG9naW5fZGF0YV8xLmxvZ2luRGF0YS5zdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVudGVyQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUZvb3RlckVsZW1lbnRzID0gdm9pZCAwO1xucmVxdWlyZShcIi4vZm9vdGVyLnNjc3NcIik7XG5jb25zdCBjcmVhdGVHaXRodWJJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IGdpdGh1Ykl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZ2l0aHViSXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19pdGVtXCIpO1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRodWJMaW5rLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xpbmtcIik7XG4gICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL1lhbmEtRHlhY2hva1wiKTtcbiAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnaXRodWJMb2dvLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xvZ28tZ2l0aHViXCIpO1xuICAgIGdpdGh1YkxpbmsuYXBwZW5kKGdpdGh1YkxvZ28pO1xuICAgIGdpdGh1Ykl0ZW0uYXBwZW5kKGdpdGh1YkxpbmspO1xuICAgIHJldHVybiBnaXRodWJJdGVtO1xufTtcbmNvbnN0IGNyZWF0ZVJTU0l0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgcnNzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICByc3NJdGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2l0ZW1cIik7XG4gICAgY29uc3QgcnNzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHJzc0xpbmsuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9fbGlua1wiKTtcbiAgICByc3NMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3JvbGxpbmdzY29wZXMuY29tL1wiKTtcbiAgICBjb25zdCByc3NMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByc3NMb2dvLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2xvZ28tcnNzXCIpO1xuICAgIHJzc0xpbmsuYXBwZW5kKHJzc0xvZ28pO1xuICAgIHJzc0l0ZW0uYXBwZW5kKHJzc0xpbmspO1xuICAgIHJldHVybiByc3NJdGVtO1xufTtcbmNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uSXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZGVzY3JpcHRpb25JdGVtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX2l0ZW1cIiwgXCJmb290ZXJfX2Rlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IHNjaG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNjaG9vbC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19zcGFuXCIpO1xuICAgIHNjaG9vbC50ZXh0Q29udGVudCA9IFwiVGhlIFJvbGxpbmcgU2NvcGVzIFNjaG9vbFwiO1xuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19jb3B5cmlnaHRcIiwgXCJmb290ZXJfX3NwYW5cIik7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gXCIyMDI0XCI7XG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfX3NwYW5cIik7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IFlhbmEgRHlhY2hva1wiO1xuICAgIGRlc2NyaXB0aW9uSXRlbS5hcHBlbmQoc2Nob29sLCBjb3B5cmlnaHQsIGF1dGhvcik7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uSXRlbTtcbn07XG5jb25zdCBjcmVhdGVGb290ZXJFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX19saXN0XCIpO1xuICAgIGxpc3QuYXBwZW5kKGNyZWF0ZUdpdGh1Ykl0ZW0oKSwgY3JlYXRlRGVzY3JpcHRpb25JdGVtKCksIGNyZWF0ZVJTU0l0ZW0oKSk7XG4gICAgZm9vdGVyLmFwcGVuZChsaXN0KTtcbiAgICByZXR1cm4gZm9vdGVyO1xufTtcbmV4cG9ydHMuY3JlYXRlRm9vdGVyRWxlbWVudHMgPSBjcmVhdGVGb290ZXJFbGVtZW50cztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVzdWx0X3ZhbGlkYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZXN1bHQtdmFsaWRhdGlvblwiKSk7XG5jbGFzcyBGb3JtVmFsaWRhdGlvbiBleHRlbmRzIHJlc3VsdF92YWxpZGF0aW9uXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNWYWxpZFVzZXJOYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNWYWxpZFBhc3N3b3JkID0gZmFsc2U7XG4gICAgfVxuICAgIHNldHVwVmFsaWRhdGlvbigpIHtcbiAgICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1uYW1lXCIpO1xuICAgICAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcbiAgICAgICAgY29uc3QgZXJyb3JVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1uYW1lX19lcnJvclwiKTtcbiAgICAgICAgY29uc3QgZXJyb3JQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmRfX2Vycm9yXCIpO1xuICAgICAgICBpZiAodXNlck5hbWVJbnB1dCkge1xuICAgICAgICAgICAgdXNlck5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHVzZXJOYW1lSW5wdXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkVXNlck5hbWUgPSAvXltBLVpdW2EtekEtWi1dezIsfSQvLnRlc3QodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRVc2VyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkaXR5SXNUcnVlKHVzZXJOYW1lSW5wdXQsIGVycm9yVXNlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBGb3JtVmFsaWRhdGlvbi51c2VyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGl0eU5hbWVJc0ZhbHNlKHVzZXJOYW1lSW5wdXQsIGVycm9yVXNlck5hbWUsIHZhbHVlLCAzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCdG5EaXNhYmxlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBwYXNzd29yZElucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZFBhc3N3b3JkID0gL14oPz0uKlxcZCkoPz0uKltBLVpdKS57NCx9JC8udGVzdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRpdHlJc1RydWUocGFzc3dvcmRJbnB1dCwgZXJyb3JQYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgICAgIEZvcm1WYWxpZGF0aW9uLnBhc3N3b3JkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkaXR5UGFzc3dvcmRJc0ZhbHNlKHBhc3N3b3JkSW5wdXQsIGVycm9yUGFzc3dvcmQsIHZhbHVlLCA0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCdG5EaXNhYmxlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlQnRuRGlzYWJsZWQoKSB7XG4gICAgICAgIGNvbnN0IGVudGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRlcl9fYnRuXCIpO1xuICAgICAgICBpZiAoZW50ZXJCdG4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy51cGRhdGVWYWxpZGl0eSh0aGlzLmlzVmFsaWRVc2VyTmFtZSwgdGhpcy5pc1ZhbGlkUGFzc3dvcmQpKSB7XG4gICAgICAgICAgICAgICAgZW50ZXJCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVudGVyQnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuRm9ybVZhbGlkYXRpb24udXNlck5hbWUgPSBcIlwiO1xuRm9ybVZhbGlkYXRpb24ucGFzc3dvcmQgPSBcIlwiO1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9ybVZhbGlkYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFJlc3VsdFZhbGlkYXRpb24ge1xuICAgIHZhbGlkaXR5SXNUcnVlKGlucHV0RWxlbWVudCwgZXJyb3JFbGVtZW50KSB7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIik7XG4gICAgICAgIGVycm9yRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICB2YWxpZGl0eU5hbWVJc0ZhbHNlKGlucHV0RWxlbWVudCwgZXJyb3JFbGVtZW50LCB2YWx1ZSwgdmFsaWRMZW5ndGgpIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZFwiKTtcbiAgICAgICAgY29uc3QgZXJyb3JBcnJheSA9IFtcbiAgICAgICAgICAgIC9eW0EtWl0vLnRlc3QodmFsdWUpLFxuICAgICAgICAgICAgL15bQS1aYS16LV0qJC8udGVzdCh2YWx1ZSksXG4gICAgICAgICAgICB2YWx1ZS5sZW5ndGggPj0gdmFsaWRMZW5ndGgsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIiogVGhlIGZpcnN0IGxldHRlciBtdXN0IGJlIGNhcGl0YWxpemVkXCIsXG4gICAgICAgICAgICBcIiogT25seSBFbmdsaXNoIGxldHRlcnMgYW5kIGh5cGhlbnMgYXJlIGFsbG93ZWRcIixcbiAgICAgICAgICAgIGAqIEF0IGxlYXN0ICR7dmFsaWRMZW5ndGh9IGNoYXJhY3RlcnMgbG9uZ2AsXG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSBlcnJvckVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICAgICAgICBlcnJvckVsZW1lbnQuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICAgICAgZXJyb3JFbGVtZW50LmNoaWxkcmVuW2ldLnRleHRDb250ZW50ID0gIWVycm9yQXJyYXlbaV1cbiAgICAgICAgICAgICAgICA/IGVycm9yTWVzc2FnZXNbaV1cbiAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsaWRpdHlQYXNzd29yZElzRmFsc2UoaW5wdXRFbGVtZW50LCBlcnJvckVsZW1lbnQsIHZhbHVlLCB2YWxpZExlbmd0aCkge1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpO1xuICAgICAgICBjb25zdCBlcnJvclBhc3N3b3JkID0gW1xuICAgICAgICAgICAgL14oPz0uKlxcZCkvLnRlc3QodmFsdWUpLFxuICAgICAgICAgICAgL14oPz0uKltBLVpdKS8udGVzdCh2YWx1ZSksXG4gICAgICAgICAgICB2YWx1ZS5sZW5ndGggPj0gdmFsaWRMZW5ndGgsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXNQYXNzd29yZCA9IFtcbiAgICAgICAgICAgIFwiKiBBdCBsZWFzdCAxIG51bWJlciAoMC05KVwiLFxuICAgICAgICAgICAgXCIqIEF0IGxlYXN0IDEgdXBwZXJjYXNlIEVuZ2xpc2ggbGV0dGVyXCIsXG4gICAgICAgICAgICBgKiBBdCBsZWFzdCAke3ZhbGlkTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmdgLFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gZXJyb3JFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgICAgICAgZXJyb3JFbGVtZW50LmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGVycm9yRWxlbWVudC5jaGlsZHJlbltpXS50ZXh0Q29udGVudCA9ICFlcnJvclBhc3N3b3JkW2ldXG4gICAgICAgICAgICAgICAgPyBlcnJvck1lc3NhZ2VzUGFzc3dvcmRbaV1cbiAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlVmFsaWRpdHkoaXNWYWxpZEZpcnN0LCBpc1ZhbGlkU2Vjb25kKSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkRmlyc3QgJiYgaXNWYWxpZFNlY29uZDtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZXN1bHRWYWxpZGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2dvdXRfYnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbG9nb3V0LWJ1dHRvbi9sb2dvdXRfYnV0dG9uXCIpKTtcbmNvbnN0IGluZm9fYnRuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZm8tYnRuL2luZm8tYnRuXCIpKTtcbnJlcXVpcmUoXCIuL2hlYWRlci5zY3NzXCIpO1xuY29uc3Qgc3RhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zdGF0ZS9zdGF0ZVwiKTtcbmNsYXNzIEhlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICAgICAgdGhpcy5sb2dvdXRCdXR0b24gPSBuZXcgbG9nb3V0X2J1dHRvbl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5pbmZvQnV0dG9uID0gbmV3IGluZm9fYnRuXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBjcmVhdGVIZWFkZXJFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX2FydGljbGVcIik7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX19sYWJlbFwiLCBcImhlYWRlcl9fdXNlci1uYW1lXCIpO1xuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IGBVc2VyOiAke3N0YXRlXzEuc3RhdGUuZ2V0VXNlcigpLmxvZ2lufWA7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX19sYWJlbFwiLCBcImhlYWRlcl9fdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJGdW4gQ2hhdFwiO1xuICAgICAgICBhcnRpY2xlLmFwcGVuZCh1c2VyTmFtZSwgdGl0bGUpO1xuICAgICAgICB0aGlzLmhlYWRlci5hcHBlbmQoYXJ0aWNsZSwgdGhpcy5pbmZvQnV0dG9uLmdldFJvb3RFbGVtZW50KCksIHRoaXMubG9nb3V0QnV0dG9uLmdldFJvb3RFbGVtZW50KCkpO1xuICAgIH1cbiAgICBnZXRSb290RWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJFbGVtZW50cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXI7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vYnV0dG9uL2J1dHRvblwiKSk7XG5jb25zdCB3ZWJzb2NrZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9hcGkvd2Vic29ja2V0XCIpO1xuY2xhc3MgTG9nb3V0QnV0dG9uIGV4dGVuZHMgYnV0dG9uXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwibG9nb3V0X19idG5cIiwgXCJidG5cIiwgXCJMb2cgb3V0XCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgd2Vic29ja2V0XzEud3MubG9nT3V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ291dEJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2Vzc2lvbl9zdG9yYWdlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvc2Vzc2lvbi1zdG9yYWdlXCIpO1xuY29uc3QgYnV0dG9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2J1dHRvbi9idXR0b25cIikpO1xuY2xhc3MgSW5mb0J1dHRvbiBleHRlbmRzIGJ1dHRvbl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcImluZm9fX2J0blwiLCBcImJ0blwiLCBcIkluZm9cIiwgXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBzZXNzaW9uX3N0b3JhZ2VfMS5zdC5zYXZlUGFnZSh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiaW5mb1wiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJbmZvQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYnV0dG9uL2J1dHRvblwiKSk7XG5jbGFzcyBTZW5kQnV0dG9uIGV4dGVuZHMgYnV0dG9uXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwic2VuZF9fYnRuXCIsIFwiYnRuXCIsIFwiU2VuZFwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgLy8gdGhpcy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2VuZEJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vc3R5bGVzL3N0eWxlLnNjc3NcIik7XG5jb25zdCBhcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb3JlL2FwcC9hcHBcIikpO1xuY29uc3QgYXBwID0gbmV3IGFwcF8xLmRlZmF1bHQoKTtcbmFwcC5ydW4oKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9wYWdlL3BhZ2VcIikpO1xucmVxdWlyZShcIi4vZXJyb3Iuc2Nzc1wiKTtcbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIHBhZ2VfMS5kZWZhdWx0IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZChcImVycm9yX19ibG9ja1wiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICAgIH1cbn1cbkVycm9yUGFnZS5UZXh0T2JqZWN0ID0ge1xuICAgIFwiNDA0XCI6IFwiRXJyb3IhIFRoZSBwYWdlIHdhcyBub3QgZm91bmQuXCIsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3JQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL3BhZ2UvcGFnZVwiKSk7XG5jb25zdCBidXR0b25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2J1dHRvbi9idXR0b25cIikpO1xuY29uc3Qgc2Vzc2lvbl9zdG9yYWdlXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvc2Vzc2lvbi1zdG9yYWdlXCIpO1xucmVxdWlyZShcIi4vaW5mby1wYWdlLnNjc3NcIik7XG5jbGFzcyBJbmZvUGFnZSBleHRlbmRzIHBhZ2VfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xuICAgICAgICBzdXBlcihpZCk7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gbmV3IGJ1dHRvbl8xLmRlZmF1bHQoXCJiYWNrX19idG5cIiwgXCJidG5cIiwgXCJCYWNrXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gc2Vzc2lvbl9zdG9yYWdlXzEuc3QuZ2V0UGFnZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlSW5mb0VsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBpbmZvQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvQmxvY2suY2xhc3NMaXN0LmFkZChcImluZm9fX2Jsb2NrXCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9fX3RpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiRnVuIGNoYXRcIjtcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb19fdGV4dFwiKTtcbiAgICAgICAgaW5mby50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIkludHJvZHVjaW5nIG91ciBjaGF0IHBsYXRmb3Jt4oCUYSBzcGFjZSBkZXNpZ25lZCBmb3Igc2VhbWxlc3MgY29tbXVuaWNhdGlvbiBhbW9uZyBmcmllbmRzLiBQaWN0dXJlIHRoaXM6IGVuZ2FnaW5nIGNvbnZlcnNhdGlvbnMsIHF1aWNrIGV4Y2hhbmdlcywgYW5kIHNoYXJlZCBtb21lbnRz4oCUYWxsIHdpdGhpbiB0aGUgY29uZmluZXMgb2Ygb3VyIGNoYXQgZW52aXJvbm1lbnQuXCI7XG4gICAgICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgZ2l0aHViTGluay5jbGFzc0xpc3QuYWRkKFwiaW5mb19fbGlua1wiKTtcbiAgICAgICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL1lhbmEtRHlhY2hva1wiKTtcbiAgICAgICAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgICAgIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgWWFuYSBEeWFjaG9rXCI7XG4gICAgICAgIGluZm9CbG9jay5hcHBlbmQodGl0bGUsIGluZm8sIGdpdGh1YkxpbmspO1xuICAgICAgICByZXR1cm4gaW5mb0Jsb2NrO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZCh0aGlzLmNyZWF0ZUluZm9FbGVtZW50cygpLCB0aGlzLmJ1dHRvbi5nZXRSb290RWxlbWVudCgpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdyYXBwZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxufVxuSW5mb1BhZ2UuVGV4dE9iamVjdCA9IHtcbiAgICBJbmZvVGl0bGU6IFwiSW5mbyBQYWdlXCIsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSW5mb1BhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvcGFnZS9wYWdlXCIpKTtcbmNvbnN0IGluZm9fYnRuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9pbmZvLWJ0bi9pbmZvLWJ0blwiKSk7XG5jb25zdCBlbnRlcl9idG5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2VudGVyLWJ0bi9lbnRlci1idG5cIikpO1xuY29uc3QgaW5wdXRfZmllbGRfY3JlYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2NyZWF0ZS1sb2dpbi1pbnB1dC9pbnB1dC1maWVsZC1jcmVhdGVcIik7XG5jbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBwYWdlXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgc3VwZXIoaWQpO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgdGhpcy5pbmZvQnRuID0gbmV3IGluZm9fYnRuXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmVudGVyQnRuID0gbmV3IGVudGVyX2J0bl8xLmRlZmF1bHQoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoXCJsb2dpbl9fZm9ybVwiKTtcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCgoMCwgaW5wdXRfZmllbGRfY3JlYXRlXzEuY3JlYXRlTGFiZWwpKFwidXNlci1uYW1lXCIsIFwiTmFtZTpcIiksICgwLCBpbnB1dF9maWVsZF9jcmVhdGVfMS5jcmVhdGVJbnB1dCkoXCJ0ZXh0XCIsIFwidXNlci1uYW1lXCIpLCAoMCwgaW5wdXRfZmllbGRfY3JlYXRlXzEuY3JlYXRlRXJyb3JFbGVtZW50cykoXCJ1c2VyLW5hbWVfX2Vycm9yXCIpLCAoMCwgaW5wdXRfZmllbGRfY3JlYXRlXzEuY3JlYXRlTGFiZWwpKFwicGFzc3dvcmRcIiwgXCJQYXNzd29yZDpcIiksICgwLCBpbnB1dF9maWVsZF9jcmVhdGVfMS5jcmVhdGVJbnB1dCkoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkXCIpLCAoMCwgaW5wdXRfZmllbGRfY3JlYXRlXzEuY3JlYXRlRXJyb3JFbGVtZW50cykoXCJwYXNzd29yZF9fZXJyb3JcIiksIHRoaXMuZW50ZXJCdG4uZ2V0Um9vdEVsZW1lbnQoKSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKHRoaXMuZm9ybSwgdGhpcy5pbmZvQnRuLmdldFJvb3RFbGVtZW50KCkpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQod3JhcHBlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG59XG5Mb2dpblBhZ2UuVGV4dE9iamVjdCA9IHtcbiAgICBMb2dpblRpdGxlOiBcIkxvZ2luIFBhZ2VcIixcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMb2dpblBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvcGFnZS9wYWdlXCIpKTtcbmNvbnN0IGhlYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiKSk7XG5jb25zdCBjb250ZW50X3ZpZXdfMSA9IHJlcXVpcmUoXCIuLi8uLi92aWV3L21haW4tdmlldy9jb250ZW50LXZpZXdcIik7XG5jb25zdCBmb290ZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlclwiKTtcbmNsYXNzIE1haW5QYWdlIGV4dGVuZHMgcGFnZV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgICAgIHN1cGVyKGlkKTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgaGVhZGVyXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmhlYWRlci5nZXRSb290RWxlbWVudCgpLCBjb250ZW50X3ZpZXdfMS5jb250ZW50Vmlldy5nZXRSb290RWxlbWVudCgpLCAoMCwgZm9vdGVyXzEuY3JlYXRlRm9vdGVyRWxlbWVudHMpKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxufVxuTWFpblBhZ2UuVGV4dE9iamVjdCA9IHtcbiAgICBNYWluVGl0bGU6IFwiTWFpbiBQYWdlXCIsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTWFpblBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RhdGUgPSB2b2lkIDA7XG5jbGFzcyBTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHsgbG9naW46IFwiXCIsIGlzTG9naW5lZDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy51c2VycyA9IFtdO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgfVxuICAgIHNldFVzZXIodXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH1cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyO1xuICAgIH1cbiAgICAvLyBwdWJsaWMgc2V0QWxsVXNlcnModXNlcjogSVVzZXJJc0xvZ2luZWQpOiB2b2lkIHtcbiAgICAvLyAgIHRoaXMudXNlcnMucHVzaCh1c2VyKTtcbiAgICAvLyB9XG4gICAgc2V0QWN0aXZlVXNlcnModXNlcnMpIHtcbiAgICAgICAgdGhpcy51c2Vycy5wdXNoKC4uLnVzZXJzKTtcbiAgICB9XG4gICAgc2V0SW5hY3RpdmVVc2Vycyh1c2Vycykge1xuICAgICAgICB0aGlzLnVzZXJzLnB1c2goLi4udXNlcnMpO1xuICAgIH1cbiAgICBnZXRBbGxVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcnM7XG4gICAgfVxufVxuZXhwb3J0cy5zdGF0ZSA9IG5ldyBTdGF0ZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lc3NhZ2VUeXBlID0gdm9pZCAwO1xudmFyIE1lc3NhZ2VUeXBlO1xuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xuICAgIE1lc3NhZ2VUeXBlW1wibG9naW5cIl0gPSBcIlVTRVJfTE9HSU5cIjtcbiAgICBNZXNzYWdlVHlwZVtcImVycm9yXCJdID0gXCJFUlJPUlwiO1xuICAgIE1lc3NhZ2VUeXBlW1wibG9nb3V0XCJdID0gXCJVU0VSX0xPR09VVFwiO1xuICAgIE1lc3NhZ2VUeXBlW1wiZXh0ZXJuYWxfbG9naW5cIl0gPSBcIlVTRVJfRVhURVJOQUxfTE9HSU5cIjtcbiAgICBNZXNzYWdlVHlwZVtcImV4dGVybmFsX2xvZ291dFwiXSA9IFwiVVNFUl9FWFRFUk5BTF9MT0dPVVRcIjtcbiAgICBNZXNzYWdlVHlwZVtcImFjdGl2ZV91c2VyXCJdID0gXCJVU0VSX0FDVElWRVwiO1xuICAgIE1lc3NhZ2VUeXBlW1wiaW5hY3RpdmVfdXNlclwiXSA9IFwiVVNFUl9JTkFDVElWRVwiO1xuICAgIE1lc3NhZ2VUeXBlW1wic2VuZF9tc2dcIl0gPSBcIk1TR19TRU5EXCI7XG59KShNZXNzYWdlVHlwZSB8fCAoZXhwb3J0cy5NZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mb3JtYXREYXRlID0gdm9pZCAwO1xuY29uc3QgZm9ybWF0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lWm9uZTogXCJVVENcIiB9KTtcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gZGF5LnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZVpvbmU6IFwiVVRDXCIgfSk7XG4gICAgcmV0dXJuIGAke2Zvcm1hdHRlZERhdGV9LCAke2Zvcm1hdHRlZFRpbWV9YDtcbn07XG5leHBvcnRzLmZvcm1hdERhdGUgPSBmb3JtYXREYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvZ2luRGF0YSA9IHZvaWQgMDtcbmNvbnN0IGZvcm1fdmFsaWRhdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb3JlL2NvbXBvbmVudHMvZm9ybS12YWxpZGF0aW9uL2Zvcm0tdmFsaWRhdGlvblwiKSk7XG5jb25zdCB3ZWJzb2NrZXRfMSA9IHJlcXVpcmUoXCIuLi9hcGkvd2Vic29ja2V0XCIpO1xuY2xhc3MgTG9naW5EYXRhIGV4dGVuZHMgZm9ybV92YWxpZGF0aW9uXzEuZGVmYXVsdCB7XG4gICAgc3VibWl0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbl9fZm9ybVwiKTtcbiAgICAgICAgaWYgKGxvZ2luRm9ybSkge1xuICAgICAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dpbiA9IGZvcm1fdmFsaWRhdGlvbl8xLmRlZmF1bHQudXNlck5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZCB9ID0gZm9ybV92YWxpZGF0aW9uXzEuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICB3ZWJzb2NrZXRfMS53cy5sb2dJbihsb2dpbiwgcGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIHdlYnNvY2tldF8xLndzLmdldEFjdGl2ZVVzZXJzKCk7XG4gICAgICAgICAgICAgICAgd2Vic29ja2V0XzEud3MuZ2V0SW5BY3RpdmVVc2VycygpO1xuICAgICAgICAgICAgICAgIC8vIHdzLmV4dGVybmFsTG9naW4obG9naW4sIHBhc3N3b3JkKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmxvZ2luRGF0YSA9IG5ldyBMb2dpbkRhdGEoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgUGFnZSB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pZCA9IGlkO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9XG59XG5QYWdlLlRleHRPYmplY3QgPSB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3QgPSB2b2lkIDA7XG5jbGFzcyBTZXNzaW9uU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2F2ZVVzZXIgPSAodXNlcikgPT4ge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFVzZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh1c2VyKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW1vdmVVc2VyID0gKCkgPT4ge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2F2ZVBhZ2UgPSAocGFnZSkgPT4ge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInBhZ2VcIiwgcGFnZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwicGFnZVwiKTtcbiAgICAgICAgICAgIGlmICghcGFnZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuc3QgPSBuZXcgU2Vzc2lvblN0b3JhZ2UoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250ZW50VmlldyA9IHZvaWQgMDtcbmNvbnN0IHNlbmRfYnRuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9zZW5kLWJ0bi9zZW5kLWJ0blwiKSk7XG5jb25zdCBjb250ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9jb250ZW50LWJsb2NrL2NvbnRlbnRcIikpO1xuY29uc3QgY3JlYXRlX2FzaWRlXzEgPSByZXF1aXJlKFwiLi4vLi4vY29yZS9jb21wb25lbnRzL2FzaWRlLWNvbnRlbnQvY3JlYXRlLWFzaWRlXCIpO1xuY29uc3QgY3JlYXRlX2RpYWxvZ19lbGVtZW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9kaWFsb2ctY29udGVudC9jcmVhdGUtZGlhbG9nLWVsZW1lbnRzXCIpO1xucmVxdWlyZShcIi4vY29udGVudC5zY3NzXCIpO1xucmVxdWlyZShcIi4uLy4uL2NvcmUvY29tcG9uZW50cy9hc2lkZS1jb250ZW50L2FzaWRlLWNvbnRlbnQuc2Nzc1wiKTtcbnJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvZGlhbG9nLWNvbnRlbnQvZGlhbG9nLWNvbnRhaW5lci5zY3NzXCIpO1xuY2xhc3MgQ29udGVudFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVzZXJBc2lkZSA9ICgwLCBjcmVhdGVfYXNpZGVfMS5jcmVhdGVVc2VyQXNpZGUpKCk7XG4gICAgICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyID0gKDAsIGNyZWF0ZV9kaWFsb2dfZWxlbWVudHNfMS5jcmVhdGVBcnRpY2xlKShcImRpYWxvZ19fY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnVzZXJTZWFyY2ggPSAoMCwgY3JlYXRlX2FzaWRlXzEuY3JlYXRlVXNlclNlYXJjaCkoKTtcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9ICgwLCBjcmVhdGVfYXNpZGVfMS5jcmVhdGVVc2VyTGlzdCkoKTtcbiAgICAgICAgdGhpcy51c2VySGVhZGVyTmFtZSA9ICgwLCBjcmVhdGVfZGlhbG9nX2VsZW1lbnRzXzEuY3JlYXRlTGFiZWwpKFwiZGlhbG9nX19uYW1lXCIpO1xuICAgICAgICB0aGlzLnVzZXJIZWFkZXJTdGF0dXMgPSAoMCwgY3JlYXRlX2RpYWxvZ19lbGVtZW50c18xLmNyZWF0ZUxhYmVsKShcImRpYWxvZ19fc3RhdHVzXCIpO1xuICAgICAgICB0aGlzLmlucHV0TWVzc2FnZSA9ICgwLCBjcmVhdGVfZGlhbG9nX2VsZW1lbnRzXzEuY3JlYXRlSW5wdXRNZXNzYWdlKSgpO1xuICAgICAgICB0aGlzLmRpYWxvZ0hlYWRlciA9ICgwLCBjcmVhdGVfZGlhbG9nX2VsZW1lbnRzXzEuY3JlYXRlQXJ0aWNsZSkoXCJkaWFsb2dfX2hlYWRlclwiKTtcbiAgICAgICAgdGhpcy5kaWFsb2dGb3JtID0gKDAsIGNyZWF0ZV9kaWFsb2dfZWxlbWVudHNfMS5jcmVhdGVEaWFsb2dJbnB1dEZvcm0pKCk7XG4gICAgICAgIHRoaXMuZGlhbG9nQ29udGVudCA9ICgwLCBjcmVhdGVfZGlhbG9nX2VsZW1lbnRzXzEuY3JlYXRlRGlhbG9nQ29udGVudCkoKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICAgICAgdGhpcy5zZW5kQnV0dG9uID0gbmV3IHNlbmRfYnRuXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNvbnRlbnRDbGFzcyA9IG5ldyBjb250ZW50XzEuZGVmYXVsdCh0aGlzLnVzZXJTZWFyY2gsIHRoaXMudXNlckxpc3QsIHRoaXMuZGlhbG9nRm9ybSwgdGhpcy5pbnB1dE1lc3NhZ2UsIHRoaXMuZGlhbG9nQ29udGVudCk7XG4gICAgfVxuICAgIGNyZWF0ZVVzZXJBc2lkZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRDbGFzcy5zZWFyY2hVc2VyKCk7XG4gICAgICAgIHRoaXMudXNlckFzaWRlLmFwcGVuZCh0aGlzLnVzZXJTZWFyY2gsIHRoaXMudXNlckxpc3QpO1xuICAgIH1cbiAgICBjcmVhdGVVc2VyRGlhbG9nRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuY29udGVudENsYXNzLnN1Ym1pdE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5kaWFsb2dIZWFkZXIuYXBwZW5kKHRoaXMudXNlckhlYWRlck5hbWUsIHRoaXMudXNlckhlYWRlclN0YXR1cyk7XG4gICAgICAgIHRoaXMuZGlhbG9nRm9ybS5hcHBlbmQodGhpcy5pbnB1dE1lc3NhZ2UsIHRoaXMuc2VuZEJ1dHRvbi5nZXRSb290RWxlbWVudCgpKTtcbiAgICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuYXBwZW5kKHRoaXMuZGlhbG9nSGVhZGVyLCB0aGlzLmRpYWxvZ0NvbnRlbnQsIHRoaXMuZGlhbG9nRm9ybSk7XG4gICAgfVxuICAgIGNyZWF0ZUNvbnRlbnRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVVc2VyQXNpZGVFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVVzZXJEaWFsb2dFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMudXNlckFzaWRlLCB0aGlzLmRpYWxvZ0NvbnRhaW5lcik7XG4gICAgfVxuICAgIGdldFJvb3RFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRlbnRFbGVtZW50cygpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuY29udGVudFZpZXcgPSBuZXcgQ29udGVudFZpZXcoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wb3B1cCA9IHZvaWQgMDtcbmNvbnN0IGJ1dHRvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb3JlL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvblwiKSk7XG5yZXF1aXJlKFwiLi9wb3B1cC5zY3NzXCIpO1xuY2xhc3MgQ3JlYXRlUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9rQnRuID0gbmV3IGJ1dHRvbl8xLmRlZmF1bHQoXCJwb3B1cF9fYnRuXCIsIFwiYnRuXCIsIFwiT2tcIiwgXCJidXR0b25cIik7XG4gICAgfVxuICAgIGNyZWF0ZVBvcHVwRWxlbWVudHModGV4dCkge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcbiAgICAgICAgY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcG9wdXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9fY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgcG9wdXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBwb3B1cFRleHQuY2xhc3NMaXN0LmFkZChcInBvcHVwX190ZXh0XCIpO1xuICAgICAgICBwb3B1cFRleHQudGV4dENvbnRlbnQgPSB0ZXh0WzBdLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnNsaWNlKDEsIHRleHQubGVuZ3RoKTtcbiAgICAgICAgcG9wdXBDb250ZW50LmFwcGVuZChwb3B1cFRleHQsIHRoaXMub2tCdG4uZ2V0Um9vdEVsZW1lbnQoKSk7XG4gICAgICAgIGNvbnN0IHBvcHVwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcHVwQm9keS5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX2JvZHlcIik7XG4gICAgICAgIHBvcHVwQm9keS5hcHBlbmQocG9wdXBDb250ZW50KTtcbiAgICAgICAgcG9wdXAuYXBwZW5kKHBvcHVwQm9keSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvcHVwKTtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgfVxuICAgIGNsb3NlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMub2tCdG4ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gICAgICAgICAgICBpZiAocG9wdXApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5wb3B1cCA9IG5ldyBDcmVhdGVQb3B1cCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9