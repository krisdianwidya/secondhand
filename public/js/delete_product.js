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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/delete_product.js":
/*!****************************************!*\
  !*** ./resources/js/delete_product.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var pathArray = window.location.pathname.split('/');\n$('#delete-product').on('click', function () {\n  Swal.fire({\n    title: 'Are you sure?',\n    text: \"You won't be able to revert this!\",\n    icon: 'warning',\n    showCancelButton: true,\n    confirmButtonColor: '#3085d6',\n    cancelButtonColor: '#d33',\n    confirmButtonText: 'Yes, delete it!'\n  }).then(function (result) {\n    if (result.isConfirmed) {\n      $('#form-delete-' + pathArray[2]).submit();\n      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlX3Byb2R1Y3QuanM/Zjc5MCJdLCJuYW1lcyI6WyJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCIkIiwib24iLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixDQUFoQjtBQUVBQyxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNuQ0MsTUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsU0FBSyxFQUFFLGVBREQ7QUFFTkMsUUFBSSxFQUFFLG1DQUZBO0FBR05DLFFBQUksRUFBRSxTQUhBO0FBSU5DLG9CQUFnQixFQUFFLElBSlo7QUFLTkMsc0JBQWtCLEVBQUUsU0FMZDtBQU1OQyxxQkFBaUIsRUFBRSxNQU5iO0FBT05DLHFCQUFpQixFQUFFO0FBUGIsR0FBVixFQVFPQyxJQVJQLENBUVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3BCLFFBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQmIsT0FBQyxDQUFDLGtCQUFnQkwsU0FBUyxDQUFDLENBQUQsQ0FBMUIsQ0FBRCxDQUFnQ21CLE1BQWhDO0FBQ0FaLFVBQUksQ0FBQ0MsSUFBTCxDQUNJLFVBREosRUFFSSw2QkFGSixFQUdJLFNBSEo7QUFLSDtBQUNKLEdBakJEO0FBa0JILENBbkJEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZV9wcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBwYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiQoJyNkZWxldGUtcHJvZHVjdCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxyXG4gICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAkKCcjZm9ybS1kZWxldGUtJytwYXRoQXJyYXlbMl0pLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAgICAgICAnRGVsZXRlZCEnLFxyXG4gICAgICAgICAgICAgICAgJ1lvdXIgZmlsZSBoYXMgYmVlbiBkZWxldGVkLicsXHJcbiAgICAgICAgICAgICAgICAnc3VjY2VzcydcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/delete_product.js\n");

/***/ }),

/***/ 4:
/*!**********************************************!*\
  !*** multi ./resources/js/delete_product.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krisdianwdy\lrvel\secondhand\resources\js\delete_product.js */"./resources/js/delete_product.js");


/***/ })

/******/ });