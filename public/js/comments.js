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

eval("var pathArray = window.location.pathname.split('/');\ngetComments();\n\nfunction getComments() {\n  $.get(\"/product/\".concat(pathArray[2], \"/comments\")).done(function (data) {\n    for (var _i = 0; _i < data.length; _i++) {\n      $('#comment-content').append(\"<div id='comment-\".concat(data[_i].id, \"'><p class='m-0'>\").concat(data[_i].user.username, \"</p> <p >\").concat(data[_i].body, \"</p>\\n             \\n             </div>\"));\n    }\n  }).fail(function (error) {\n    console.log(error);\n  }).always(function () {\n    Echo.channel(\"product.\".concat(pathArray[2])).listen('NewComment', function (data) {\n      $('#comment-content').prepend(\"<div><p class='m-0'>\".concat(data[i].user.username, \"</p> <p >\").concat(data[i].body, \"</p> </div>\"));\n    });\n  });\n}\n\n$('#btn-comment').on('click', function () {\n  $('#comment-error').html(\"<p class='m-0 text-danger'></p>\");\n  var comment_body = $('#comment').val();\n  $.ajax({\n    url: \"/product/\".concat(pathArray[2], \"/comment\"),\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    method: \"post\",\n    dataType: \"json\",\n    data: {\n      comment: comment_body\n    }\n  }).done(function (data) {\n    $('#comment-content').prepend(\"<div><p class='m-0'>\".concat(data[i].user.username, \"</p> <p >\").concat(data[i].body, \"</p> </div>\"));\n  }).fail(function (error) {\n    $('#comment').addClass('is-invalid');\n    $('#comment-error').append(\"<p class='m-0 text-danger'>\".concat(error.responseJSON.errors.comment[0], \"</p>\"));\n  }).always(function () {\n    $('#comment').val('');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbWVudHMuanM/OTgxOCJdLCJuYW1lcyI6WyJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXRDb21tZW50cyIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJpZCIsInVzZXIiLCJ1c2VybmFtZSIsImJvZHkiLCJmYWlsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWx3YXlzIiwiRWNobyIsImNoYW5uZWwiLCJsaXN0ZW4iLCJwcmVwZW5kIiwib24iLCJodG1sIiwiY29tbWVudF9ib2R5IiwidmFsIiwiYWpheCIsInVybCIsImhlYWRlcnMiLCJhdHRyIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJjb21tZW50IiwiYWRkQ2xhc3MiLCJyZXNwb25zZUpTT04iLCJlcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBaEI7QUFFQUMsV0FBVzs7QUFFWCxTQUFTQSxXQUFULEdBQXVCO0FBQ25CQyxHQUFDLENBQUNDLEdBQUYsb0JBQWtCUCxTQUFTLENBQUMsQ0FBRCxDQUEzQixnQkFDQ1EsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBVTtBQUNaLFNBQUksSUFBSUMsRUFBQyxHQUFDLENBQVYsRUFBYUEsRUFBQyxHQUFDRCxJQUFJLENBQUNFLE1BQXBCLEVBQTRCRCxFQUFDLEVBQTdCLEVBQWdDO0FBQzVCSixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNDTSxNQURELDRCQUM0QkgsSUFBSSxDQUFDQyxFQUFELENBQUosQ0FBUUcsRUFEcEMsOEJBQzBESixJQUFJLENBQUNDLEVBQUQsQ0FBSixDQUFRSSxJQUFSLENBQWFDLFFBRHZFLHNCQUMyRk4sSUFBSSxDQUFDQyxFQUFELENBQUosQ0FBUU0sSUFEbkc7QUFJSDtBQUNKLEdBUkQsRUFRR0MsSUFSSCxDQVFRLFVBQUNDLEtBQUQsRUFBVztBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEdBVkQsRUFXQ0csTUFYRCxDQVdRLFlBQU07QUFDVkMsUUFBSSxDQUFDQyxPQUFMLG1CQUF3QnZCLFNBQVMsQ0FBQyxDQUFELENBQWpDLEdBQ0t3QixNQURMLENBQ1ksWUFEWixFQUMwQixVQUFDZixJQUFELEVBQVU7QUFDNUJILE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQ0NtQixPQURELCtCQUNnQ2hCLElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFJLElBQVIsQ0FBYUMsUUFEN0Msc0JBQ2lFTixJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRTSxJQUR6RTtBQUVILEtBSkw7QUFLSCxHQWpCRDtBQWtCSDs7QUFHRFYsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9CLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDaENwQixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUNLcUIsSUFETDtBQUVBLE1BQUlDLFlBQVksR0FBR3RCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VCLEdBQWQsRUFBbkI7QUFFQXZCLEdBQUMsQ0FBQ3dCLElBQUYsQ0FBTztBQUNIQyxPQUFHLHFCQUFjL0IsU0FBUyxDQUFDLENBQUQsQ0FBdkIsYUFEQTtBQUVIZ0MsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCMUIsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIyQixJQUE3QixDQUFrQyxTQUFsQztBQURYLEtBRk47QUFLSEMsVUFBTSxFQUFFLE1BTEw7QUFNSEMsWUFBUSxFQUFFLE1BTlA7QUFPSDFCLFFBQUksRUFBRTtBQUNGMkIsYUFBTyxFQUFFUjtBQURQO0FBUEgsR0FBUCxFQVdDcEIsSUFYRCxDQVdNLFVBQUNDLElBQUQsRUFBVTtBQUNaSCxLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNLbUIsT0FETCwrQkFDb0NoQixJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRSSxJQUFSLENBQWFDLFFBRGpELHNCQUNxRU4sSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUU0sSUFEN0U7QUFFSCxHQWRELEVBZUNDLElBZkQsQ0FlTSxVQUFDQyxLQUFELEVBQVc7QUFDYlosS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjK0IsUUFBZCxDQUF1QixZQUF2QjtBQUNBL0IsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FDQ00sTUFERCxzQ0FDc0NNLEtBQUssQ0FBQ29CLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCSCxPQUExQixDQUFrQyxDQUFsQyxDQUR0QztBQUVILEdBbkJELEVBb0JDZixNQXBCRCxDQW9CUSxZQUFNO0FBQ1ZmLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VCLEdBQWQsQ0FBa0IsRUFBbEI7QUFDSCxHQXRCRDtBQXVCSCxDQTVCRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21tZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbmdldENvbW1lbnRzKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb21tZW50cygpIHtcclxuICAgICQuZ2V0KGAvcHJvZHVjdC8ke3BhdGhBcnJheVsyXX0vY29tbWVudHNgKVxyXG4gICAgLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgJCgnI2NvbW1lbnQtY29udGVudCcpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgaWQ9J2NvbW1lbnQtJHtkYXRhW2ldLmlkfSc+PHAgY2xhc3M9J20tMCc+JHtkYXRhW2ldLnVzZXIudXNlcm5hbWV9PC9wPiA8cCA+JHtkYXRhW2ldLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pXHJcbiAgICAuYWx3YXlzKCgpID0+IHtcclxuICAgICAgICBFY2hvLmNoYW5uZWwoYHByb2R1Y3QuJHtwYXRoQXJyYXlbMl19YClcclxuICAgICAgICAgICAgLmxpc3RlbignTmV3Q29tbWVudCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcjY29tbWVudC1jb250ZW50JylcclxuICAgICAgICAgICAgICAgIC5wcmVwZW5kKGA8ZGl2PjxwIGNsYXNzPSdtLTAnPiR7ZGF0YVtpXS51c2VyLnVzZXJuYW1lfTwvcD4gPHAgPiR7ZGF0YVtpXS5ib2R5fTwvcD4gPC9kaXY+YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4kKCcjYnRuLWNvbW1lbnQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkKCcjY29tbWVudC1lcnJvcicpXHJcbiAgICAgICAgLmh0bWwoYDxwIGNsYXNzPSdtLTAgdGV4dC1kYW5nZXInPjwvcD5gKTtcclxuICAgIGxldCBjb21tZW50X2JvZHkgPSAkKCcjY29tbWVudCcpLnZhbCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBgL3Byb2R1Y3QvJHtwYXRoQXJyYXlbMl19L2NvbW1lbnRgLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29tbWVudDogY29tbWVudF9ib2R5XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5kb25lKChkYXRhKSA9PiB7XHJcbiAgICAgICAgJCgnI2NvbW1lbnQtY29udGVudCcpXHJcbiAgICAgICAgICAgIC5wcmVwZW5kKGA8ZGl2PjxwIGNsYXNzPSdtLTAnPiR7ZGF0YVtpXS51c2VyLnVzZXJuYW1lfTwvcD4gPHAgPiR7ZGF0YVtpXS5ib2R5fTwvcD4gPC9kaXY+YCk7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgJCgnI2NvbW1lbnQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICQoJyNjb21tZW50LWVycm9yJylcclxuICAgICAgICAuYXBwZW5kKGA8cCBjbGFzcz0nbS0wIHRleHQtZGFuZ2VyJz4ke2Vycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnMuY29tbWVudFswXX08L3A+YCk7XHJcbiAgICB9KVxyXG4gICAgLmFsd2F5cygoKSA9PiB7XHJcbiAgICAgICAgJCgnI2NvbW1lbnQnKS52YWwoJycpO1xyXG4gICAgfSlcclxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/comments.js\n");

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