"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["index_js"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Avatar: () => (/* binding */ Avatar)\n/* harmony export */ });\n/* harmony import */ var _avatar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.png */ \"./avatar.png\");\n\n\nconst myIcon = new Image();\nmyIcon.src = Icon;\n\nconst Avatar = (element) => {\n  \n  element.innerHTML = `\n    <div class=\"person--avatar\">\n      <img src=\"${_avatar_png__WEBPACK_IMPORTED_MODULE_0__}\" />\n    </div>\n  `;\n  return element;\n}\n\nAvatar(document.querySelector(`#avatar`));\n\n//# sourceURL=webpack://app1/./index.js?");

/***/ }),

/***/ "./avatar.png":
/*!********************!*\
  !*** ./avatar.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2548e59d2a278e9e1d5.png\";\n\n//# sourceURL=webpack://app1/./avatar.png?");

/***/ })

}]);