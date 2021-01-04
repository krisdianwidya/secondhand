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

eval("var pathArray = window.location.pathname.split('/');\ngetComments();\n\nfunction getComments() {\n  $.get(\"/product/\".concat(pathArray[2], \"/comments\")).done(function (data) {\n    for (var i = 0; i < data.length; i++) {\n      $('#comment-content').append(\"<div class=\\\"d-flex\\\">\\n                <div class=\\\"mr-1\\\">\\n                    <img src=\\\"/storage/assets/profile_pic/\".concat(data[i].user.photo, \"\\\" class=\\\"img-fluid rounded-circle\\\" style=\\\"max-width: 25px;\\\" alt=\\\"profile-picture\\\">\\n                </div>\\n                <div>\\n                    <p class='m-0'><strong>\").concat(data[i].user.username, \"</strong></p>\\n                    <p>\").concat(data[i].body, \"</p>\\n                </div>\\n            </div>\"));\n    }\n  }).fail(function (error) {\n    console.log(error);\n  }).always(function () {\n    Echo.channel(\"product.\".concat(pathArray[2])).listen('NewComment', function (data) {\n      $('#comment-content').prepend(\"<div class=\\\"d-flex\\\">\\n                <div class=\\\"mr-1\\\">\\n                    <img src=\\\"/storage/assets/profile_pic/\".concat(data.comment.user.photo, \"\\\" class=\\\"img-fluid rounded-circle\\\" style=\\\"max-width: 25px;\\\" alt=\\\"profile-picture\\\">\\n                </div>\\n                <div>\\n                    <p class='m-0'><strong>\").concat(data.comment.user.username, \"</strong></p>\\n                    <p>\").concat(data.comment.body, \"</p>\\n                </div>\\n            </div>\"));\n    });\n  });\n}\n\n$('#btn-comment').on('click', function () {\n  var comment_body = $('#comment').val();\n  $.ajax({\n    url: \"/product/\".concat(pathArray[2], \"/comment\"),\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    method: \"post\",\n    dataType: \"json\",\n    data: {\n      comment: comment_body\n    }\n  }).done(function (data) {\n    $('#comment-content').prepend(\"<div class=\\\"d-flex\\\">\\n            <div class=\\\"mr-1\\\">\\n                <img src=\\\"/storage/assets/profile_pic/\".concat(data.user.photo, \"\\\" class=\\\"img-fluid rounded-circle\\\" style=\\\"max-width: 25px;\\\" alt=\\\"profile-picture\\\">\\n            </div>\\n            <div>\\n                <p class='m-0'><strong>\").concat(data.user.username, \"</strong></p>\\n                <p>\").concat(data.body, \"</p>\\n            </div>\\n        </div>\"));\n  }).fail(function (error) {\n    $('#comment').addClass('is-invalid');\n    $('#comment-error').append(\"<p class='m-0 text-danger'>\".concat(error.responseJSON.errors.comment[0], \"</p>\"));\n  }).always(function () {\n    $('#comment').val('');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbWVudHMuanM/OTgxOCJdLCJuYW1lcyI6WyJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXRDb21tZW50cyIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJ1c2VyIiwicGhvdG8iLCJ1c2VybmFtZSIsImJvZHkiLCJmYWlsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWx3YXlzIiwiRWNobyIsImNoYW5uZWwiLCJsaXN0ZW4iLCJwcmVwZW5kIiwiY29tbWVudCIsIm9uIiwiY29tbWVudF9ib2R5IiwidmFsIiwiYWpheCIsInVybCIsImhlYWRlcnMiLCJhdHRyIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJhZGRDbGFzcyIsInJlc3BvbnNlSlNPTiIsImVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixDQUFoQjtBQUVBQyxXQUFXOztBQUVYLFNBQVNBLFdBQVQsR0FBdUI7QUFDbkJDLEdBQUMsQ0FBQ0MsR0FBRixvQkFBa0JQLFNBQVMsQ0FBQyxDQUFELENBQTNCLGdCQUNLUSxJQURMLENBQ1UsVUFBQ0MsSUFBRCxFQUFVO0FBQ1osU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDSixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNLTSxNQURMLG9JQUc0Q0gsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUUcsSUFBUixDQUFhQyxLQUh6RCxrTUFNNkJMLElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFHLElBQVIsQ0FBYUUsUUFOMUMsbURBT1NOLElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFNLElBUGpCO0FBVUg7QUFDSixHQWRMLEVBY09DLElBZFAsQ0FjWSxVQUFDQyxLQUFELEVBQVc7QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxHQWhCTCxFQWlCS0csTUFqQkwsQ0FpQlksWUFBTTtBQUNWQyxRQUFJLENBQUNDLE9BQUwsbUJBQXdCdkIsU0FBUyxDQUFDLENBQUQsQ0FBakMsR0FDS3dCLE1BREwsQ0FDWSxZQURaLEVBQzBCLFVBQUNmLElBQUQsRUFBVTtBQUM1QkgsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FDS21CLE9BREwsb0lBR3dDaEIsSUFBSSxDQUFDaUIsT0FBTCxDQUFhYixJQUFiLENBQWtCQyxLQUgxRCxrTUFNeUJMLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYWIsSUFBYixDQUFrQkUsUUFOM0MsbURBT0tOLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYVYsSUFQbEI7QUFVSCxLQVpMO0FBYUgsR0EvQkw7QUFnQ0g7O0FBR0RWLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JxQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFNO0FBRWhDLE1BQUlDLFlBQVksR0FBR3RCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VCLEdBQWQsRUFBbkI7QUFFQXZCLEdBQUMsQ0FBQ3dCLElBQUYsQ0FBTztBQUNIQyxPQUFHLHFCQUFjL0IsU0FBUyxDQUFDLENBQUQsQ0FBdkIsYUFEQTtBQUVIZ0MsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCMUIsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIyQixJQUE3QixDQUFrQyxTQUFsQztBQURYLEtBRk47QUFLSEMsVUFBTSxFQUFFLE1BTEw7QUFNSEMsWUFBUSxFQUFFLE1BTlA7QUFPSDFCLFFBQUksRUFBRTtBQUNGaUIsYUFBTyxFQUFFRTtBQURQO0FBUEgsR0FBUCxFQVdLcEIsSUFYTCxDQVdVLFVBQUNDLElBQUQsRUFBVTtBQUNaSCxLQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNLbUIsT0FETCw0SEFHNENoQixJQUFJLENBQUNJLElBQUwsQ0FBVUMsS0FIdEQsc0xBTTZCTCxJQUFJLENBQUNJLElBQUwsQ0FBVUUsUUFOdkMsK0NBT1NOLElBQUksQ0FBQ08sSUFQZDtBQVVILEdBdEJMLEVBdUJLQyxJQXZCTCxDQXVCVSxVQUFDQyxLQUFELEVBQVc7QUFDYlosS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjOEIsUUFBZCxDQUF1QixZQUF2QjtBQUNBOUIsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FDS00sTUFETCxzQ0FDMENNLEtBQUssQ0FBQ21CLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCWixPQUExQixDQUFrQyxDQUFsQyxDQUQxQztBQUVILEdBM0JMLEVBNEJLTCxNQTVCTCxDQTRCWSxZQUFNO0FBQ1ZmLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VCLEdBQWQsQ0FBa0IsRUFBbEI7QUFDSCxHQTlCTDtBQStCSCxDQW5DRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21tZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbmdldENvbW1lbnRzKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb21tZW50cygpIHtcclxuICAgICQuZ2V0KGAvcHJvZHVjdC8ke3BhdGhBcnJheVsyXX0vY29tbWVudHNgKVxyXG4gICAgICAgIC5kb25lKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgJCgnI2NvbW1lbnQtY29udGVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdG9yYWdlL2Fzc2V0cy9wcm9maWxlX3BpYy8ke2RhdGFbaV0udXNlci5waG90b31cIiBjbGFzcz1cImltZy1mbHVpZCByb3VuZGVkLWNpcmNsZVwiIHN0eWxlPVwibWF4LXdpZHRoOiAyNXB4O1wiIGFsdD1cInByb2ZpbGUtcGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdtLTAnPjxzdHJvbmc+JHtkYXRhW2ldLnVzZXIudXNlcm5hbWV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZGF0YVtpXS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hbHdheXMoKCkgPT4ge1xyXG4gICAgICAgICAgICBFY2hvLmNoYW5uZWwoYHByb2R1Y3QuJHtwYXRoQXJyYXlbMl19YClcclxuICAgICAgICAgICAgICAgIC5saXN0ZW4oJ05ld0NvbW1lbnQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjb21tZW50LWNvbnRlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZChgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdG9yYWdlL2Fzc2V0cy9wcm9maWxlX3BpYy8ke2RhdGEuY29tbWVudC51c2VyLnBob3RvfVwiIGNsYXNzPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDI1cHg7XCIgYWx0PVwicHJvZmlsZS1waWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9J20tMCc+PHN0cm9uZz4ke2RhdGEuY29tbWVudC51c2VyLnVzZXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2RhdGEuY29tbWVudC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5cclxuJCgnI2J0bi1jb21tZW50Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgIGxldCBjb21tZW50X2JvZHkgPSAkKCcjY29tbWVudCcpLnZhbCgpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBgL3Byb2R1Y3QvJHtwYXRoQXJyYXlbMl19L2NvbW1lbnRgLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29tbWVudDogY29tbWVudF9ib2R5XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAkKCcjY29tbWVudC1jb250ZW50JylcclxuICAgICAgICAgICAgICAgIC5wcmVwZW5kKGA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdG9yYWdlL2Fzc2V0cy9wcm9maWxlX3BpYy8ke2RhdGEudXNlci5waG90b31cIiBjbGFzcz1cImltZy1mbHVpZCByb3VuZGVkLWNpcmNsZVwiIHN0eWxlPVwibWF4LXdpZHRoOiAyNXB4O1wiIGFsdD1cInByb2ZpbGUtcGljdHVyZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdtLTAnPjxzdHJvbmc+JHtkYXRhLnVzZXIudXNlcm5hbWV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtkYXRhLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAkKCcjY29tbWVudCcpLmFkZENsYXNzKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICQoJyNjb21tZW50LWVycm9yJylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoYDxwIGNsYXNzPSdtLTAgdGV4dC1kYW5nZXInPiR7ZXJyb3IucmVzcG9uc2VKU09OLmVycm9ycy5jb21tZW50WzBdfTwvcD5gKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hbHdheXMoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcjY29tbWVudCcpLnZhbCgnJyk7XHJcbiAgICAgICAgfSk7XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/comments.js\n");

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