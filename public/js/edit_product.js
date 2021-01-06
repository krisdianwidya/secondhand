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

eval("$(document).ready(function () {\n  var pathArray = window.location.pathname.split('/');\n\n  if (pathArray[3] == \"edit\") {\n    $.get(\"/product/edit/\" + pathArray[2]).done(function (data) {\n      // toggle switch checkbox\n      if (data.sold == 1) {\n        $('#sold_toggle').prop(\"checked\", true);\n      } // categories checkbox \n\n\n      data.categories.forEach(function (element) {\n        for (var _i = 1; _i < 8; _i++) {\n          if (element.id == $('#checkbox-' + _i).val()) {\n            $('#checkbox-' + _i).prop(\"checked\", true);\n          }\n        }\n      });\n    }).fail(function (error) {\n      console.log(error);\n    });\n  } else {\n    console.log('not found');\n  }\n\n  $('#sold_toggle').on('click', function () {\n    if ($('#sold_toggle').val() == 0) {\n      $('#sold_toggle').val(1);\n    } else {\n      $('#sold_toggle').val(0);\n    }\n  });\n  var i = 1;\n  $('#btn-add').on('click', function (event) {\n    event.preventDefault();\n    $('.input-increment').after($('.img-fil').html());\n    i++;\n  });\n  $('#btn-min').on('click', function (event) {\n    event.preventDefault();\n\n    if (i > 1) {\n      $(\".file-input div:nth-child(\".concat(i, \")\")).remove();\n      i--;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZWRpdF9wcm9kdWN0LmpzPzkxY2EiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXQiLCJkb25lIiwiZGF0YSIsInNvbGQiLCJwcm9wIiwiY2F0ZWdvcmllcyIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsImlkIiwidmFsIiwiZmFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFmdGVyIiwiaHRtbCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBTTtBQUNwQixNQUFJQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLENBQWhCOztBQUVBLE1BQUlKLFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBZ0IsTUFBcEIsRUFBNEI7QUFDeEJILEtBQUMsQ0FBQ1EsR0FBRixDQUFNLG1CQUFtQkwsU0FBUyxDQUFDLENBQUQsQ0FBbEMsRUFDS00sSUFETCxDQUNVLFVBQUNDLElBQUQsRUFBVTtBQUNaO0FBQ0EsVUFBSUEsSUFBSSxDQUFDQyxJQUFMLElBQWEsQ0FBakIsRUFBb0I7QUFDaEJYLFNBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JZLElBQWxCLENBQXVCLFNBQXZCLEVBQWtDLElBQWxDO0FBQ0gsT0FKVyxDQU1aOzs7QUFDQUYsVUFBSSxDQUFDRyxVQUFMLENBQWdCQyxPQUFoQixDQUF3QixVQUFBQyxPQUFPLEVBQUk7QUFDL0IsYUFBSyxJQUFJQyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLENBQXBCLEVBQXVCQSxFQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLGNBQUlELE9BQU8sQ0FBQ0UsRUFBUixJQUFjakIsQ0FBQyxDQUFDLGVBQWVnQixFQUFoQixDQUFELENBQW9CRSxHQUFwQixFQUFsQixFQUE2QztBQUN6Q2xCLGFBQUMsQ0FBQyxlQUFlZ0IsRUFBaEIsQ0FBRCxDQUFvQkosSUFBcEIsQ0FBeUIsU0FBekIsRUFBb0MsSUFBcEM7QUFDSDtBQUNKO0FBQ0osT0FORDtBQU9ILEtBZkwsRUFlT08sSUFmUCxDQWVZLFVBQUNDLEtBQUQsRUFBVztBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBakJMO0FBa0JILEdBbkJELE1BbUJPO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDs7QUFHRHRCLEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J1QixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFNO0FBQ2hDLFFBQUl2QixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCa0IsR0FBbEIsTUFBMkIsQ0FBL0IsRUFBa0M7QUFDOUJsQixPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCa0IsR0FBbEIsQ0FBc0IsQ0FBdEI7QUFDSCxLQUZELE1BRU87QUFDSGxCLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JrQixHQUFsQixDQUFzQixDQUF0QjtBQUNIO0FBQ0osR0FORDtBQVFBLE1BQUlGLENBQUMsR0FBRyxDQUFSO0FBRUFoQixHQUFDLENBQUMsVUFBRCxDQUFELENBQWN1QixFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQUNDLEtBQUQsRUFBVztBQUNqQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0F6QixLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjBCLEtBQXRCLENBQTRCMUIsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjMkIsSUFBZCxFQUE1QjtBQUNBWCxLQUFDO0FBQ0osR0FKRDtBQU1BaEIsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjdUIsRUFBZCxDQUFpQixPQUFqQixFQUEwQixVQUFDQyxLQUFELEVBQVc7QUFDakNBLFNBQUssQ0FBQ0MsY0FBTjs7QUFDQSxRQUFJVCxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1BoQixPQUFDLHFDQUE4QmdCLENBQTlCLE9BQUQsQ0FBcUNZLE1BQXJDO0FBQ0FaLE9BQUM7QUFDSjtBQUNKLEdBTkQ7QUFPSCxDQWxERCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9lZGl0X3Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgICBsZXQgcGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgaWYgKHBhdGhBcnJheVszXSA9PSBcImVkaXRcIikge1xyXG4gICAgICAgICQuZ2V0KFwiL3Byb2R1Y3QvZWRpdC9cIiArIHBhdGhBcnJheVsyXSlcclxuICAgICAgICAgICAgLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvZ2dsZSBzd2l0Y2ggY2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnNvbGQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzb2xkX3RvZ2dsZScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhdGVnb3JpZXMgY2hlY2tib3ggXHJcbiAgICAgICAgICAgICAgICBkYXRhLmNhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSAkKCcjY2hlY2tib3gtJyArIGkpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjY2hlY2tib3gtJyArIGkpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoJyNzb2xkX3RvZ2dsZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoJCgnI3NvbGRfdG9nZ2xlJykudmFsKCkgPT0gMCkge1xyXG4gICAgICAgICAgICAkKCcjc29sZF90b2dnbGUnKS52YWwoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3NvbGRfdG9nZ2xlJykudmFsKDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBpID0gMTtcclxuXHJcbiAgICAkKCcjYnRuLWFkZCcpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLmlucHV0LWluY3JlbWVudCcpLmFmdGVyKCQoJy5pbWctZmlsJykuaHRtbCgpKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYnRuLW1pbicpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGkgPiAxKSB7XHJcbiAgICAgICAgICAgICQoYC5maWxlLWlucHV0IGRpdjpudGgtY2hpbGQoJHtpfSlgKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/edit_product.js\n");

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