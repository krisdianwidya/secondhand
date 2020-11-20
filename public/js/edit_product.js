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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/edit_product.js":
/*!**************************************!*\
  !*** ./resources/js/edit_product.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var pathArray = window.location.pathname.split('/');\n\n  if (pathArray[3] == \"edit\") {\n    $.get(\"/product/edit/\" + pathArray[2]).done(function (data) {\n      // toggle switch checkbox\n      if (data.sold == 1) {\n        $('#sold_toggle').prop(\"checked\", true);\n      } // categories checkbox \n\n\n      data.categories.forEach(function (element) {\n        for (var i = 1; i < 8; i++) {\n          if (element.id == $('#checkbox-' + i).val()) {\n            $('#checkbox-' + i).prop(\"checked\", true);\n          }\n        }\n      });\n    }).fail(function (error) {\n      console.log(error);\n    });\n  } else {\n    console.log('not found');\n  }\n\n  $('#sold_toggle').on('click', function () {\n    if ($('#sold_toggle').val() == 0) {\n      $('#sold_toggle').val(1);\n    } else {\n      $('#sold_toggle').val(0);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZWRpdF9wcm9kdWN0LmpzPzkxY2EiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXQiLCJkb25lIiwiZGF0YSIsInNvbGQiLCJwcm9wIiwiY2F0ZWdvcmllcyIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsImlkIiwidmFsIiwiZmFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFNO0FBQ3BCLE1BQUlDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBaEI7O0FBRUEsTUFBR0osU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFnQixNQUFuQixFQUEwQjtBQUN0QkgsS0FBQyxDQUFDUSxHQUFGLENBQU0sbUJBQWlCTCxTQUFTLENBQUMsQ0FBRCxDQUFoQyxFQUNDTSxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFVO0FBQ1o7QUFDQSxVQUFHQSxJQUFJLENBQUNDLElBQUwsSUFBYSxDQUFoQixFQUFrQjtBQUNkWCxTQUFDLENBQUMsY0FBRCxDQUFELENBQWtCWSxJQUFsQixDQUF1QixTQUF2QixFQUFrQyxJQUFsQztBQUNILE9BSlcsQ0FNWjs7O0FBQ0FGLFVBQUksQ0FBQ0csVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0IsVUFBQUMsT0FBTyxFQUFJO0FBQy9CLGFBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFHLENBQWpCLEVBQW9CQSxDQUFDLEVBQXJCLEVBQXdCO0FBQ3BCLGNBQUdELE9BQU8sQ0FBQ0UsRUFBUixJQUFjakIsQ0FBQyxDQUFDLGVBQWFnQixDQUFkLENBQUQsQ0FBa0JFLEdBQWxCLEVBQWpCLEVBQXlDO0FBQ3JDbEIsYUFBQyxDQUFDLGVBQWFnQixDQUFkLENBQUQsQ0FBa0JKLElBQWxCLENBQXVCLFNBQXZCLEVBQWtDLElBQWxDO0FBQ0g7QUFDSjtBQUNKLE9BTkQ7QUFPSCxLQWZELEVBZUdPLElBZkgsQ0FlUSxVQUFDQyxLQUFELEVBQVc7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxLQWpCRDtBQWtCSCxHQW5CRCxNQW1CSztBQUNEQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7O0FBR0R0QixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCdUIsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNoQyxRQUFHdkIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtCLEdBQWxCLE1BQTJCLENBQTlCLEVBQWdDO0FBQzVCbEIsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmtCLEdBQWxCLENBQXNCLENBQXRCO0FBQ0gsS0FGRCxNQUVLO0FBQ0RsQixPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCa0IsR0FBbEIsQ0FBc0IsQ0FBdEI7QUFDSDtBQUNKLEdBTkQ7QUFPSCxDQWxDRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9lZGl0X3Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBsZXQgcGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgICBcclxuICAgIGlmKHBhdGhBcnJheVszXSA9PSBcImVkaXRcIil7XHJcbiAgICAgICAgJC5nZXQoXCIvcHJvZHVjdC9lZGl0L1wiK3BhdGhBcnJheVsyXSlcclxuICAgICAgICAuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0b2dnbGUgc3dpdGNoIGNoZWNrYm94XHJcbiAgICAgICAgICAgIGlmKGRhdGEuc29sZCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICQoJyNzb2xkX3RvZ2dsZScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjYXRlZ29yaWVzIGNoZWNrYm94IFxyXG4gICAgICAgICAgICBkYXRhLmNhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0xOyBpIDwgODsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmlkID09ICQoJyNjaGVja2JveC0nK2kpLnZhbCgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2NoZWNrYm94LScraSkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAkKCcjc29sZF90b2dnbGUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoJCgnI3NvbGRfdG9nZ2xlJykudmFsKCkgPT0gMCl7XHJcbiAgICAgICAgICAgICQoJyNzb2xkX3RvZ2dsZScpLnZhbCgxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnI3NvbGRfdG9nZ2xlJykudmFsKDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/edit_product.js\n");

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./resources/js/edit_product.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krisdianwdy\lrvel\secondhand\resources\js\edit_product.js */"./resources/js/edit_product.js");


/***/ })

/******/ });