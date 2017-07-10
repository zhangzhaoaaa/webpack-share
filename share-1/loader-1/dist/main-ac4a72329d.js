(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory(require("jQuery"));
	else
		root["MyLibrary"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://cdn.example.com/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n *\n Created by zhangzhao on 2017/7/6.\n Email: zhangzhao@gomeplus.com\n */\nconsole.log(\"home.....\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./home/home.js\n// module id = 0\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./home/home.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _good = __webpack_require__(2);\n\nvar _good2 = _interopRequireDefault(_good);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n *\n Created by zhangzhao on 2017/7/1.\n Email: zhangzhao@gomeplus.com\n */\n/***\n * sayhello\n * @returns {string}\n */\n\nvar $ = __webpack_require__(3);\nvar txt = __webpack_require__(4);\nvar h = __webpack_require__(0);\nvar a = __webpack_require__(5);\n\nfunction sayHello() {\n  return 'hello world';\n}\n\nconsole.log(\"jquery....\", txt);\n\nmodule.exports = sayHello;\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: missing super() call in constructor\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\n \\u001b[90m 3 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mdefault\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mGood\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mComponent\\u001b[39m {\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39m    constructor() {\\n \\u001b[90m   | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 5 | \\u001b[39m\\n \\u001b[90m 6 | \\u001b[39m    }\\n \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./good.jsx\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./good.jsx?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"jQuery\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = \"坎坎坷坷\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./test.txt\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./test.txt?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token, expected ; (2:8)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m{\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 2 | \\u001b[39m  \\u001b[32m\\\"name\\\"\\u001b[39m\\u001b[33m:\\u001b[39m\\u001b[32m\\\"zeromike\\\"\\u001b[39m\\n \\u001b[90m   | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 3 | \\u001b[39m}\\u001b[0m\\n\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./a.json\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./a.json?");

/***/ })
/******/ ]);
});