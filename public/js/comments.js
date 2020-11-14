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

/***/ "./resources/js/comments.js":
/*!**********************************!*\
  !*** ./resources/js/comments.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var pathArray = window.location.pathname.split('/');\ngetComments();\n\nfunction getComments() {\n  $.get(\"/product/\".concat(pathArray[2], \"/comments\")).done(function (data) {\n    for (var i = 0; i < data.length; i++) {\n      $('#comment-content').append(\"<p class='m-0'>\".concat(data[i].user.username, \"</p> <p>\").concat(data[i].body, \"</p>\"));\n    }\n  }).fail(function (error) {\n    console.log(error);\n  });\n}\n\n$('#btn-comment').on('click', function () {\n  $('#comment-error').html(\"<p class='m-0 text-danger'></p>\");\n  var comment_body = $('#comment').val(); // $.post(`/product/${pathArray[2]}/comments`, {_token: '{!! csrf_token() !!}', comment: comment_body})\n\n  $.ajax({\n    url: \"/product/\".concat(pathArray[2], \"/comments\"),\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    method: \"post\",\n    dataType: \"json\",\n    data: {\n      comment: comment_body\n    }\n  }).done(function (data) {\n    $('#comment-content').prepend(\"<p class='m-0'>\".concat(data.user.username, \"</p> <p>\").concat(data.body, \"</p>\"));\n  }).fail(function (error) {\n    $('#comment').addClass('is-invalid');\n    $('#comment-error').append(\"<p class='m-0 text-danger'>\".concat(error.responseJSON.errors.comment[0], \"</p>\"));\n  }).always(function () {\n    $('#comment').val('');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbWVudHMuanM/OTgxOCJdLCJuYW1lcyI6WyJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXRDb21tZW50cyIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJ1c2VyIiwidXNlcm5hbWUiLCJib2R5IiwiZmFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uIiwiaHRtbCIsImNvbW1lbnRfYm9keSIsInZhbCIsImFqYXgiLCJ1cmwiLCJoZWFkZXJzIiwiYXR0ciIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY29tbWVudCIsInByZXBlbmQiLCJhZGRDbGFzcyIsInJlc3BvbnNlSlNPTiIsImVycm9ycyIsImFsd2F5cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixDQUFoQjtBQUVBQyxXQUFXOztBQUVYLFNBQVNBLFdBQVQsR0FBdUI7QUFDbkJDLEdBQUMsQ0FBQ0MsR0FBRixvQkFBa0JQLFNBQVMsQ0FBQyxDQUFELENBQTNCLGdCQUNDUSxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFVO0FBQ1osU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNELElBQUksQ0FBQ0UsTUFBcEIsRUFBNEJELENBQUMsRUFBN0IsRUFBZ0M7QUFDNUJKLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQ0NNLE1BREQsMEJBQzBCSCxJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRRyxJQUFSLENBQWFDLFFBRHZDLHFCQUMwREwsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUUssSUFEbEU7QUFFSDtBQUNKLEdBTkQsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEtBQUQsRUFBVztBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEdBUkQ7QUFTSDs7QUFHRFgsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNoQ2QsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FDS2UsSUFETDtBQUVBLE1BQUlDLFlBQVksR0FBR2hCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2lCLEdBQWQsRUFBbkIsQ0FIZ0MsQ0FLaEM7O0FBRUFqQixHQUFDLENBQUNrQixJQUFGLENBQU87QUFDSEMsT0FBRyxxQkFBY3pCLFNBQVMsQ0FBQyxDQUFELENBQXZCLGNBREE7QUFFSDBCLFdBQU8sRUFBRTtBQUNMLHNCQUFnQnBCLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCcUIsSUFBN0IsQ0FBa0MsU0FBbEM7QUFEWCxLQUZOO0FBS0hDLFVBQU0sRUFBRSxNQUxMO0FBTUhDLFlBQVEsRUFBRSxNQU5QO0FBT0hwQixRQUFJLEVBQUU7QUFDRnFCLGFBQU8sRUFBRVI7QUFEUDtBQVBILEdBQVAsRUFXQ2QsSUFYRCxDQVdNLFVBQUNDLElBQUQsRUFBVTtBQUNaSCxLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNLeUIsT0FETCwwQkFDK0J0QixJQUFJLENBQUNJLElBQUwsQ0FBVUMsUUFEekMscUJBQzRETCxJQUFJLENBQUNNLElBRGpFO0FBRUgsR0FkRCxFQWVDQyxJQWZELENBZU0sVUFBQ0MsS0FBRCxFQUFXO0FBQ2JYLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzBCLFFBQWQsQ0FBdUIsWUFBdkI7QUFDQTFCLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQ0NNLE1BREQsc0NBQ3NDSyxLQUFLLENBQUNnQixZQUFOLENBQW1CQyxNQUFuQixDQUEwQkosT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FEdEM7QUFFSCxHQW5CRCxFQW9CQ0ssTUFwQkQsQ0FvQlEsWUFBTTtBQUNWN0IsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjaUIsR0FBZCxDQUFrQixFQUFsQjtBQUNILEdBdEJEO0FBdUJILENBOUJEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2NvbW1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHBhdGhBcnJheSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5cclxuZ2V0Q29tbWVudHMoKTtcclxuXHJcbmZ1bmN0aW9uIGdldENvbW1lbnRzKCkge1xyXG4gICAgJC5nZXQoYC9wcm9kdWN0LyR7cGF0aEFycmF5WzJdfS9jb21tZW50c2ApXHJcbiAgICAuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAkKCcjY29tbWVudC1jb250ZW50JylcclxuICAgICAgICAgICAgLmFwcGVuZChgPHAgY2xhc3M9J20tMCc+JHtkYXRhW2ldLnVzZXIudXNlcm5hbWV9PC9wPiA8cD4ke2RhdGFbaV0uYm9keX08L3A+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiQoJyNidG4tY29tbWVudCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICQoJyNjb21tZW50LWVycm9yJylcclxuICAgICAgICAuaHRtbChgPHAgY2xhc3M9J20tMCB0ZXh0LWRhbmdlcic+PC9wPmApO1xyXG4gICAgbGV0IGNvbW1lbnRfYm9keSA9ICQoJyNjb21tZW50JykudmFsKCk7XHJcblxyXG4gICAgLy8gJC5wb3N0KGAvcHJvZHVjdC8ke3BhdGhBcnJheVsyXX0vY29tbWVudHNgLCB7X3Rva2VuOiAneyEhIGNzcmZfdG9rZW4oKSAhIX0nLCBjb21tZW50OiBjb21tZW50X2JvZHl9KVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBgL3Byb2R1Y3QvJHtwYXRoQXJyYXlbMl19L2NvbW1lbnRzYCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRfYm9keVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICQoJyNjb21tZW50LWNvbnRlbnQnKVxyXG4gICAgICAgICAgICAucHJlcGVuZChgPHAgY2xhc3M9J20tMCc+JHtkYXRhLnVzZXIudXNlcm5hbWV9PC9wPiA8cD4ke2RhdGEuYm9keX08L3A+YCk7ICAgICAgICBcclxuICAgIH0pXHJcbiAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICAkKCcjY29tbWVudCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgJCgnI2NvbW1lbnQtZXJyb3InKVxyXG4gICAgICAgIC5hcHBlbmQoYDxwIGNsYXNzPSdtLTAgdGV4dC1kYW5nZXInPiR7ZXJyb3IucmVzcG9uc2VKU09OLmVycm9ycy5jb21tZW50WzBdfTwvcD5gKTtcclxuICAgIH0pXHJcbiAgICAuYWx3YXlzKCgpID0+IHtcclxuICAgICAgICAkKCcjY29tbWVudCcpLnZhbCgnJyk7XHJcbiAgICB9KVxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/comments.js\n");

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./resources/js/comments.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krisdianwdy\lrvel\secondhand\resources\js\comments.js */"./resources/js/comments.js");


/***/ })

/******/ });