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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/comments.js":
/*!**********************************!*\
  !*** ./resources/js/comments.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var pathArray = window.location.pathname.split('/');\ngetComments();\n\nfunction getComments() {\n  $.get(\"/product/\".concat(pathArray[2], \"/comments\")).done(function (data) {\n    for (var i = 0; i < data.length; i++) {\n      $('#comment-content').append(\"<div><p class='m-0'>\".concat(data[i].user.username, \"</p> <p >\").concat(data[i].body, \"</p>\\n             \\n             </div>\"));\n    }\n  }).fail(function (error) {\n    console.log(error);\n  }).always(function () {\n    Echo.channel(\"product.\".concat(pathArray[2])).listen('NewComment', function (data) {\n      $('#comment-content').prepend(\"<div><p class='m-0'>\".concat(data.comment.user.username, \"</p> <p >\").concat(data.comment.body, \"</p> </div>\"));\n    });\n  });\n}\n\n$('#btn-comment').on('click', function () {\n  $('#comment-error').html(\"<p class='m-0 text-danger'></p>\");\n  var comment_body = $('#comment').val();\n  $.ajax({\n    url: \"/product/\".concat(pathArray[2], \"/comment\"),\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    method: \"post\",\n    dataType: \"json\",\n    data: {\n      comment: comment_body\n    }\n  }).done(function (data) {\n    $('#comment-content').prepend(\"<div><p class='m-0'>\".concat(data.user.username, \"</p> <p >\").concat(data.body, \"</p> </div>\"));\n  }).fail(function (error) {\n    $('#comment').addClass('is-invalid');\n    $('#comment-error').append(\"<p class='m-0 text-danger'>\".concat(error.responseJSON.errors.comment[0], \"</p>\"));\n  }).always(function () {\n    $('#comment').val('');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbWVudHMuanM/OTgxOCJdLCJuYW1lcyI6WyJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXRDb21tZW50cyIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJ1c2VyIiwidXNlcm5hbWUiLCJib2R5IiwiZmFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFsd2F5cyIsIkVjaG8iLCJjaGFubmVsIiwibGlzdGVuIiwicHJlcGVuZCIsImNvbW1lbnQiLCJvbiIsImh0bWwiLCJjb21tZW50X2JvZHkiLCJ2YWwiLCJhamF4IiwidXJsIiwiaGVhZGVycyIsImF0dHIiLCJtZXRob2QiLCJkYXRhVHlwZSIsImFkZENsYXNzIiwicmVzcG9uc2VKU09OIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLENBQWhCO0FBRUFDLFdBQVc7O0FBRVgsU0FBU0EsV0FBVCxHQUF1QjtBQUNuQkMsR0FBQyxDQUFDQyxHQUFGLG9CQUFrQlAsU0FBUyxDQUFDLENBQUQsQ0FBM0IsZ0JBQ0NRLElBREQsQ0FDTSxVQUFDQyxJQUFELEVBQVU7QUFDWixTQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0QsSUFBSSxDQUFDRSxNQUFwQixFQUE0QkQsQ0FBQyxFQUE3QixFQUFnQztBQUM1QkosT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FDQ00sTUFERCwrQkFDK0JILElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFHLElBQVIsQ0FBYUMsUUFENUMsc0JBQ2dFTCxJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRSyxJQUR4RTtBQUlIO0FBQ0osR0FSRCxFQVFHQyxJQVJILENBUVEsVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsR0FWRCxFQVdDRyxNQVhELENBV1EsWUFBTTtBQUNWQyxRQUFJLENBQUNDLE9BQUwsbUJBQXdCdEIsU0FBUyxDQUFDLENBQUQsQ0FBakMsR0FDS3VCLE1BREwsQ0FDWSxZQURaLEVBQzBCLFVBQUNkLElBQUQsRUFBVTtBQUM1QkgsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FDQ2tCLE9BREQsK0JBQ2dDZixJQUFJLENBQUNnQixPQUFMLENBQWFaLElBQWIsQ0FBa0JDLFFBRGxELHNCQUNzRUwsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhVixJQURuRjtBQUVILEtBSkw7QUFLSCxHQWpCRDtBQWtCSDs7QUFHRFQsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9CLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDaENwQixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUNLcUIsSUFETDtBQUVBLE1BQUlDLFlBQVksR0FBR3RCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VCLEdBQWQsRUFBbkI7QUFFQXZCLEdBQUMsQ0FBQ3dCLElBQUYsQ0FBTztBQUNIQyxPQUFHLHFCQUFjL0IsU0FBUyxDQUFDLENBQUQsQ0FBdkIsYUFEQTtBQUVIZ0MsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCMUIsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIyQixJQUE3QixDQUFrQyxTQUFsQztBQURYLEtBRk47QUFLSEMsVUFBTSxFQUFFLE1BTEw7QUFNSEMsWUFBUSxFQUFFLE1BTlA7QUFPSDFCLFFBQUksRUFBRTtBQUNGZ0IsYUFBTyxFQUFFRztBQURQO0FBUEgsR0FBUCxFQVdDcEIsSUFYRCxDQVdNLFVBQUNDLElBQUQsRUFBVTtBQUNaSCxLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNLa0IsT0FETCwrQkFDb0NmLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxRQUQ5QyxzQkFDa0VMLElBQUksQ0FBQ00sSUFEdkU7QUFFSCxHQWRELEVBZUNDLElBZkQsQ0FlTSxVQUFDQyxLQUFELEVBQVc7QUFDYlgsS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjOEIsUUFBZCxDQUF1QixZQUF2QjtBQUNBOUIsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FDQ00sTUFERCxzQ0FDc0NLLEtBQUssQ0FBQ29CLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCYixPQUExQixDQUFrQyxDQUFsQyxDQUR0QztBQUVILEdBbkJELEVBb0JDTCxNQXBCRCxDQW9CUSxZQUFNO0FBQ1ZkLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VCLEdBQWQsQ0FBa0IsRUFBbEI7QUFDSCxHQXRCRDtBQXVCSCxDQTVCRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21tZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbmdldENvbW1lbnRzKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb21tZW50cygpIHtcclxuICAgICQuZ2V0KGAvcHJvZHVjdC8ke3BhdGhBcnJheVsyXX0vY29tbWVudHNgKVxyXG4gICAgLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgJCgnI2NvbW1lbnQtY29udGVudCcpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYDxkaXY+PHAgY2xhc3M9J20tMCc+JHtkYXRhW2ldLnVzZXIudXNlcm5hbWV9PC9wPiA8cCA+JHtkYXRhW2ldLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pXHJcbiAgICAuYWx3YXlzKCgpID0+IHtcclxuICAgICAgICBFY2hvLmNoYW5uZWwoYHByb2R1Y3QuJHtwYXRoQXJyYXlbMl19YClcclxuICAgICAgICAgICAgLmxpc3RlbignTmV3Q29tbWVudCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcjY29tbWVudC1jb250ZW50JylcclxuICAgICAgICAgICAgICAgIC5wcmVwZW5kKGA8ZGl2PjxwIGNsYXNzPSdtLTAnPiR7ZGF0YS5jb21tZW50LnVzZXIudXNlcm5hbWV9PC9wPiA8cCA+JHtkYXRhLmNvbW1lbnQuYm9keX08L3A+IDwvZGl2PmApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuJCgnI2J0bi1jb21tZW50Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgJCgnI2NvbW1lbnQtZXJyb3InKVxyXG4gICAgICAgIC5odG1sKGA8cCBjbGFzcz0nbS0wIHRleHQtZGFuZ2VyJz48L3A+YCk7XHJcbiAgICBsZXQgY29tbWVudF9ib2R5ID0gJCgnI2NvbW1lbnQnKS52YWwoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogYC9wcm9kdWN0LyR7cGF0aEFycmF5WzJdfS9jb21tZW50YCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRfYm9keVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICQoJyNjb21tZW50LWNvbnRlbnQnKVxyXG4gICAgICAgICAgICAucHJlcGVuZChgPGRpdj48cCBjbGFzcz0nbS0wJz4ke2RhdGEudXNlci51c2VybmFtZX08L3A+IDxwID4ke2RhdGEuYm9keX08L3A+IDwvZGl2PmApO1xyXG4gICAgfSlcclxuICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICQoJyNjb21tZW50JykuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAkKCcjY29tbWVudC1lcnJvcicpXHJcbiAgICAgICAgLmFwcGVuZChgPHAgY2xhc3M9J20tMCB0ZXh0LWRhbmdlcic+JHtlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzLmNvbW1lbnRbMF19PC9wPmApO1xyXG4gICAgfSlcclxuICAgIC5hbHdheXMoKCkgPT4ge1xyXG4gICAgICAgICQoJyNjb21tZW50JykudmFsKCcnKTtcclxuICAgIH0pXHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/comments.js\n");

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./resources/js/comments.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krisdianwdy\lrvel\secondhand\resources\js\comments.js */"./resources/js/comments.js");


/***/ })

/******/ });