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

eval("var pathArray = window.location.pathname.split('/');\ngetComments();\n\nfunction getComments() {\n  $.get(\"/product/\".concat(pathArray[2], \"/comments\")).done(function (data) {\n    for (var i = 0; i < data.length; i++) {\n      $('#comment-content').append(\"<div><p class='m-0'>\".concat(data[i].user.username, \"</p> <p >\").concat(data[i].body, \"</p>\\n             \\n             </div>\"));\n    }\n  }).fail(function (error) {\n    console.log(error);\n  }).always(function () {\n    Echo.channel(\"product.\".concat(pathArray[2])).listen('NewComment', function (data) {\n      $('#comment-content').prepend(\"<div><p class='m-0'>\".concat(data.comment.user.username, \"</p> <p >\").concat(data.comment.body, \"</p> </div>\"));\n    });\n  });\n}\n\n$('#btn-comment').on('click', function () {\n  var comment_body = $('#comment').val();\n  $.ajax({\n    url: \"/product/\".concat(pathArray[2], \"/comment\"),\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    method: \"post\",\n    dataType: \"json\",\n    data: {\n      comment: comment_body\n    }\n  }).done(function (data) {\n    $('#comment-content').prepend(\"<div><p class='m-0'>\".concat(data.user.username, \"</p> <p >\").concat(data.body, \"</p> </div>\"));\n  }).fail(function (error) {\n    $('#comment').addClass('is-invalid');\n    $('#comment-error').append(\"<p class='m-0 text-danger'>\".concat(error.responseJSON.errors.comment[0], \"</p>\"));\n  }).always(function () {\n    $('#comment').val('');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbWVudHMuanM/OTgxOCJdLCJuYW1lcyI6WyJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXRDb21tZW50cyIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJ1c2VyIiwidXNlcm5hbWUiLCJib2R5IiwiZmFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFsd2F5cyIsIkVjaG8iLCJjaGFubmVsIiwibGlzdGVuIiwicHJlcGVuZCIsImNvbW1lbnQiLCJvbiIsImNvbW1lbnRfYm9keSIsInZhbCIsImFqYXgiLCJ1cmwiLCJoZWFkZXJzIiwiYXR0ciIsIm1ldGhvZCIsImRhdGFUeXBlIiwiYWRkQ2xhc3MiLCJyZXNwb25zZUpTT04iLCJlcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBaEI7QUFFQUMsV0FBVzs7QUFFWCxTQUFTQSxXQUFULEdBQXVCO0FBQ25CQyxHQUFDLENBQUNDLEdBQUYsb0JBQWtCUCxTQUFTLENBQUMsQ0FBRCxDQUEzQixnQkFDQ1EsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBVTtBQUNaLFNBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRCxJQUFJLENBQUNFLE1BQXBCLEVBQTRCRCxDQUFDLEVBQTdCLEVBQWdDO0FBQzVCSixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNDTSxNQURELCtCQUMrQkgsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUUcsSUFBUixDQUFhQyxRQUQ1QyxzQkFDZ0VMLElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFLLElBRHhFO0FBSUg7QUFDSixHQVJELEVBUUdDLElBUkgsQ0FRUSxVQUFDQyxLQUFELEVBQVc7QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxHQVZELEVBV0NHLE1BWEQsQ0FXUSxZQUFNO0FBQ1ZDLFFBQUksQ0FBQ0MsT0FBTCxtQkFBd0J0QixTQUFTLENBQUMsQ0FBRCxDQUFqQyxHQUNLdUIsTUFETCxDQUNZLFlBRFosRUFDMEIsVUFBQ2QsSUFBRCxFQUFVO0FBQzVCSCxPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNDa0IsT0FERCwrQkFDZ0NmLElBQUksQ0FBQ2dCLE9BQUwsQ0FBYVosSUFBYixDQUFrQkMsUUFEbEQsc0JBQ3NFTCxJQUFJLENBQUNnQixPQUFMLENBQWFWLElBRG5GO0FBRUgsS0FKTDtBQUtILEdBakJEO0FBa0JIOztBQUdEVCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUVoQyxNQUFJQyxZQUFZLEdBQUdyQixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNzQixHQUFkLEVBQW5CO0FBRUF0QixHQUFDLENBQUN1QixJQUFGLENBQU87QUFDSEMsT0FBRyxxQkFBYzlCLFNBQVMsQ0FBQyxDQUFELENBQXZCLGFBREE7QUFFSCtCLFdBQU8sRUFBRTtBQUNMLHNCQUFnQnpCLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMEIsSUFBN0IsQ0FBa0MsU0FBbEM7QUFEWCxLQUZOO0FBS0hDLFVBQU0sRUFBRSxNQUxMO0FBTUhDLFlBQVEsRUFBRSxNQU5QO0FBT0h6QixRQUFJLEVBQUU7QUFDRmdCLGFBQU8sRUFBRUU7QUFEUDtBQVBILEdBQVAsRUFXQ25CLElBWEQsQ0FXTSxVQUFDQyxJQUFELEVBQVU7QUFDWkgsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FDS2tCLE9BREwsK0JBQ29DZixJQUFJLENBQUNJLElBQUwsQ0FBVUMsUUFEOUMsc0JBQ2tFTCxJQUFJLENBQUNNLElBRHZFO0FBRUgsR0FkRCxFQWVDQyxJQWZELENBZU0sVUFBQ0MsS0FBRCxFQUFXO0FBQ2JYLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzZCLFFBQWQsQ0FBdUIsWUFBdkI7QUFDQTdCLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQ0NNLE1BREQsc0NBQ3NDSyxLQUFLLENBQUNtQixZQUFOLENBQW1CQyxNQUFuQixDQUEwQlosT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FEdEM7QUFFSCxHQW5CRCxFQW9CQ0wsTUFwQkQsQ0FvQlEsWUFBTTtBQUNWZCxLQUFDLENBQUMsVUFBRCxDQUFELENBQWNzQixHQUFkLENBQWtCLEVBQWxCO0FBQ0gsR0F0QkQ7QUF1QkgsQ0EzQkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tbWVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcblxyXG5nZXRDb21tZW50cygpO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29tbWVudHMoKSB7XHJcbiAgICAkLmdldChgL3Byb2R1Y3QvJHtwYXRoQXJyYXlbMl19L2NvbW1lbnRzYClcclxuICAgIC5kb25lKChkYXRhKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICQoJyNjb21tZW50LWNvbnRlbnQnKVxyXG4gICAgICAgICAgICAuYXBwZW5kKGA8ZGl2PjxwIGNsYXNzPSdtLTAnPiR7ZGF0YVtpXS51c2VyLnVzZXJuYW1lfTwvcD4gPHAgPiR7ZGF0YVtpXS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KVxyXG4gICAgLmFsd2F5cygoKSA9PiB7XHJcbiAgICAgICAgRWNoby5jaGFubmVsKGBwcm9kdWN0LiR7cGF0aEFycmF5WzJdfWApXHJcbiAgICAgICAgICAgIC5saXN0ZW4oJ05ld0NvbW1lbnQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnI2NvbW1lbnQtY29udGVudCcpXHJcbiAgICAgICAgICAgICAgICAucHJlcGVuZChgPGRpdj48cCBjbGFzcz0nbS0wJz4ke2RhdGEuY29tbWVudC51c2VyLnVzZXJuYW1lfTwvcD4gPHAgPiR7ZGF0YS5jb21tZW50LmJvZHl9PC9wPiA8L2Rpdj5gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiQoJyNidG4tY29tbWVudCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIFxyXG4gICAgbGV0IGNvbW1lbnRfYm9keSA9ICQoJyNjb21tZW50JykudmFsKCk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGAvcHJvZHVjdC8ke3BhdGhBcnJheVsyXX0vY29tbWVudGAsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjb21tZW50OiBjb21tZW50X2JvZHlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgICAkKCcjY29tbWVudC1jb250ZW50JylcclxuICAgICAgICAgICAgLnByZXBlbmQoYDxkaXY+PHAgY2xhc3M9J20tMCc+JHtkYXRhLnVzZXIudXNlcm5hbWV9PC9wPiA8cCA+JHtkYXRhLmJvZHl9PC9wPiA8L2Rpdj5gKTtcclxuICAgIH0pXHJcbiAgICAuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICAkKCcjY29tbWVudCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgJCgnI2NvbW1lbnQtZXJyb3InKVxyXG4gICAgICAgIC5hcHBlbmQoYDxwIGNsYXNzPSdtLTAgdGV4dC1kYW5nZXInPiR7ZXJyb3IucmVzcG9uc2VKU09OLmVycm9ycy5jb21tZW50WzBdfTwvcD5gKTtcclxuICAgIH0pXHJcbiAgICAuYWx3YXlzKCgpID0+IHtcclxuICAgICAgICAkKCcjY29tbWVudCcpLnZhbCgnJyk7XHJcbiAgICB9KVxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/comments.js\n");

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