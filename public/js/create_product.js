/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/create_product.js":
/*!****************************************!*\
  !*** ./resources/js/create_product.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var i = 1;\n  $('#btn-add').on('click', function (event) {\n    event.preventDefault();\n    $('.input-increment').after($('.img-fil').html());\n    i++;\n  });\n  $('#btn-min').on('click', function (event) {\n    event.preventDefault();\n\n    if (i > 1) {\n      $(\".file-input div:nth-child(\".concat(i, \")\")).remove();\n      i--;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY3JlYXRlX3Byb2R1Y3QuanM/OWJlNiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImkiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZnRlciIsImh0bWwiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFFMUIsTUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFFQUgsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSSxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUNDLEtBQUQsRUFBVTtBQUNsQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FOLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTyxLQUF0QixDQUE0QlAsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjUSxJQUFkLEVBQTVCO0FBQ0FMLEtBQUM7QUFDRixHQUpEO0FBTUFILEdBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY0ksRUFBZCxDQUFpQixPQUFqQixFQUEwQixVQUFDQyxLQUFELEVBQVc7QUFDbkNBLFNBQUssQ0FBQ0MsY0FBTjs7QUFDQSxRQUFHSCxDQUFDLEdBQUcsQ0FBUCxFQUFTO0FBQ1BILE9BQUMscUNBQThCRyxDQUE5QixPQUFELENBQXFDTSxNQUFyQztBQUNBTixPQUFDO0FBQ0Y7QUFDRixHQU5EO0FBT0QsQ0FqQkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY3JlYXRlX3Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgaSA9IDE7XHJcblxyXG4gICQoJyNidG4tYWRkJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuaW5wdXQtaW5jcmVtZW50JykuYWZ0ZXIoJCgnLmltZy1maWwnKS5odG1sKCkpO1xyXG4gICAgaSsrO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjYnRuLW1pbicpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGkgPiAxKXtcclxuICAgICAgJChgLmZpbGUtaW5wdXQgZGl2Om50aC1jaGlsZCgke2l9KWApLnJlbW92ZSgpO1xyXG4gICAgICBpLS07XHJcbiAgICB9XHJcbiAgfSlcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/create_product.js\n");

/***/ }),

/***/ 2:
/*!**********************************************!*\
  !*** multi ./resources/js/create_product.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krisdianwdy\lrvel\secondhand\resources\js\create_product.js */"./resources/js/create_product.js");


/***/ })

/******/ });