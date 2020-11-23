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

eval("var pathArray = window.location.pathname.split('/');\ngetComments();\n\nfunction getComments() {\n  $.get(\"/product/\".concat(pathArray[2], \"/comments\")).done(function (data) {\n    for (var i = 0; i < data.length; i++) {\n      $('#comment-content').append(\"<div class=\\\"d-flex\\\">\\n                <div class=\\\"mr-1\\\">\\n                    <img src=\\\"/storage/assets/profile_pic/\".concat(data[i].user.photo, \"\\\" class=\\\"img-fluid rounded-circle\\\" style=\\\"max-width: 25px;\\\" alt=\\\"profile-picture\\\">\\n                </div>\\n                <div>\\n                    <p class='m-0'><strong>\").concat(data[i].user.username, \"</strong></p>\\n                    <p>\").concat(data[i].body, \"</p>\\n                </div>\\n            </div>\"));\n    }\n  }).fail(function (error) {\n    console.log(error);\n  }).always(function () {\n    Echo.channel(\"product.\".concat(pathArray[2])).listen('NewComment', function (data) {\n      $('#comment-content').prepend(\"<div class=\\\"d-flex\\\">\\n                <div class=\\\"mr-1\\\">\\n                    <img src=\\\"/storage/assets/profile_pic/\".concat(data.comment.user.photo, \"\\\" class=\\\"img-fluid rounded-circle\\\" style=\\\"max-width: 25px;\\\" alt=\\\"profile-picture\\\">\\n                </div>\\n                <div>\\n                    <p class='m-0'><strong>\").concat(data.comment.user.username, \"</strong></p>\\n                    <p>\").concat(data.comment.body, \"</p>\\n                </div>\\n            </div>\"));\n    });\n  });\n}\n\n$('#btn-comment').on('click', function () {\n  var comment_body = $('#comment').val();\n  $.ajax({\n    url: \"/product/\".concat(pathArray[2], \"/comment\"),\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    method: \"post\",\n    dataType: \"json\",\n    data: {\n      comment: comment_body\n    }\n  }).done(function (data) {\n    $('#comment-content').prepend(\"<div class=\\\"d-flex\\\">\\n            <div class=\\\"mr-1\\\">\\n                <img src=\\\"/storage/assets/profile_pic/\".concat(data.user.photo, \"\\\" class=\\\"img-fluid rounded-circle\\\" style=\\\"max-width: 25px;\\\" alt=\\\"profile-picture\\\">\\n            </div>\\n            <div>\\n                <p class='m-0'><strong>\").concat(data.user.username, \"</strong></p>\\n                <p>\").concat(data.body, \"</p>\\n            </div>\\n        </div>\"));\n  }).fail(function (error) {\n    $('#comment').addClass('is-invalid');\n    $('#comment-error').append(\"<p class='m-0 text-danger'>\".concat(error.responseJSON.errors.comment[0], \"</p>\"));\n  }).always(function () {\n    $('#comment').val('');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbWVudHMuanM/OTgxOCJdLCJuYW1lcyI6WyJwYXRoQXJyYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJnZXRDb21tZW50cyIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJ1c2VyIiwicGhvdG8iLCJ1c2VybmFtZSIsImJvZHkiLCJmYWlsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWx3YXlzIiwiRWNobyIsImNoYW5uZWwiLCJsaXN0ZW4iLCJwcmVwZW5kIiwiY29tbWVudCIsIm9uIiwiY29tbWVudF9ib2R5IiwidmFsIiwiYWpheCIsInVybCIsImhlYWRlcnMiLCJhdHRyIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJhZGRDbGFzcyIsInJlc3BvbnNlSlNPTiIsImVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixDQUFoQjtBQUVBQyxXQUFXOztBQUVYLFNBQVNBLFdBQVQsR0FBdUI7QUFDbkJDLEdBQUMsQ0FBQ0MsR0FBRixvQkFBa0JQLFNBQVMsQ0FBQyxDQUFELENBQTNCLGdCQUNDUSxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFVO0FBQ1osU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNELElBQUksQ0FBQ0UsTUFBcEIsRUFBNEJELENBQUMsRUFBN0IsRUFBZ0M7QUFDNUJKLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQ0NNLE1BREQsb0lBR2dESCxJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRRyxJQUFSLENBQWFDLEtBSDdELGtNQU1pQ0wsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUUcsSUFBUixDQUFhRSxRQU45QyxtREFPYU4sSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUU0sSUFQckI7QUFVSDtBQUNKLEdBZEQsRUFjR0MsSUFkSCxDQWNRLFVBQUNDLEtBQUQsRUFBVztBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEdBaEJELEVBaUJDRyxNQWpCRCxDQWlCUSxZQUFNO0FBQ1ZDLFFBQUksQ0FBQ0MsT0FBTCxtQkFBd0J2QixTQUFTLENBQUMsQ0FBRCxDQUFqQyxHQUNLd0IsTUFETCxDQUNZLFlBRFosRUFDMEIsVUFBQ2YsSUFBRCxFQUFVO0FBQzVCSCxPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUNDbUIsT0FERCxvSUFHNENoQixJQUFJLENBQUNpQixPQUFMLENBQWFiLElBQWIsQ0FBa0JDLEtBSDlELGtNQU02QkwsSUFBSSxDQUFDaUIsT0FBTCxDQUFhYixJQUFiLENBQWtCRSxRQU4vQyxtREFPU04sSUFBSSxDQUFDaUIsT0FBTCxDQUFhVixJQVB0QjtBQVVQLEtBWkQ7QUFhSCxHQS9CRDtBQWdDSDs7QUFHRFYsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnFCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFFaEMsTUFBSUMsWUFBWSxHQUFHdEIsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjdUIsR0FBZCxFQUFuQjtBQUVBdkIsR0FBQyxDQUFDd0IsSUFBRixDQUFPO0FBQ0hDLE9BQUcscUJBQWMvQixTQUFTLENBQUMsQ0FBRCxDQUF2QixhQURBO0FBRUhnQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0IxQixDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjJCLElBQTdCLENBQWtDLFNBQWxDO0FBRFgsS0FGTjtBQUtIQyxVQUFNLEVBQUUsTUFMTDtBQU1IQyxZQUFRLEVBQUUsTUFOUDtBQU9IMUIsUUFBSSxFQUFFO0FBQ0ZpQixhQUFPLEVBQUVFO0FBRFA7QUFQSCxHQUFQLEVBV0NwQixJQVhELENBV00sVUFBQ0MsSUFBRCxFQUFVO0FBQ1pILEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQ0ttQixPQURMLDRIQUdnRGhCLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxLQUgxRCxzTEFNaUNMLElBQUksQ0FBQ0ksSUFBTCxDQUFVRSxRQU4zQywrQ0FPYU4sSUFBSSxDQUFDTyxJQVBsQjtBQVVILEdBdEJELEVBdUJDQyxJQXZCRCxDQXVCTSxVQUFDQyxLQUFELEVBQVc7QUFDYlosS0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjOEIsUUFBZCxDQUF1QixZQUF2QjtBQUNBOUIsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FDQ00sTUFERCxzQ0FDc0NNLEtBQUssQ0FBQ21CLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCWixPQUExQixDQUFrQyxDQUFsQyxDQUR0QztBQUVILEdBM0JELEVBNEJDTCxNQTVCRCxDQTRCUSxZQUFNO0FBQ1ZmLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3VCLEdBQWQsQ0FBa0IsRUFBbEI7QUFDSCxHQTlCRDtBQStCSCxDQW5DRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21tZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbmdldENvbW1lbnRzKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb21tZW50cygpIHtcclxuICAgICQuZ2V0KGAvcHJvZHVjdC8ke3BhdGhBcnJheVsyXX0vY29tbWVudHNgKVxyXG4gICAgLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgJCgnI2NvbW1lbnQtY29udGVudCcpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RvcmFnZS9hc3NldHMvcHJvZmlsZV9waWMvJHtkYXRhW2ldLnVzZXIucGhvdG99XCIgY2xhc3M9XCJpbWctZmx1aWQgcm91bmRlZC1jaXJjbGVcIiBzdHlsZT1cIm1heC13aWR0aDogMjVweDtcIiBhbHQ9XCJwcm9maWxlLXBpY3R1cmVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz0nbS0wJz48c3Ryb25nPiR7ZGF0YVtpXS51c2VyLnVzZXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2RhdGFbaV0uYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuZmFpbCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KVxyXG4gICAgLmFsd2F5cygoKSA9PiB7XHJcbiAgICAgICAgRWNoby5jaGFubmVsKGBwcm9kdWN0LiR7cGF0aEFycmF5WzJdfWApXHJcbiAgICAgICAgICAgIC5saXN0ZW4oJ05ld0NvbW1lbnQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnI2NvbW1lbnQtY29udGVudCcpXHJcbiAgICAgICAgICAgICAgICAucHJlcGVuZChgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdG9yYWdlL2Fzc2V0cy9wcm9maWxlX3BpYy8ke2RhdGEuY29tbWVudC51c2VyLnBob3RvfVwiIGNsYXNzPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDI1cHg7XCIgYWx0PVwicHJvZmlsZS1waWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9J20tMCc+PHN0cm9uZz4ke2RhdGEuY29tbWVudC51c2VyLnVzZXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2RhdGEuY29tbWVudC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuJCgnI2J0bi1jb21tZW50Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgY29tbWVudF9ib2R5ID0gJCgnI2NvbW1lbnQnKS52YWwoKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogYC9wcm9kdWN0LyR7cGF0aEFycmF5WzJdfS9jb21tZW50YCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRfYm9keVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICQoJyNjb21tZW50LWNvbnRlbnQnKVxyXG4gICAgICAgICAgICAucHJlcGVuZChgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RvcmFnZS9hc3NldHMvcHJvZmlsZV9waWMvJHtkYXRhLnVzZXIucGhvdG99XCIgY2xhc3M9XCJpbWctZmx1aWQgcm91bmRlZC1jaXJjbGVcIiBzdHlsZT1cIm1heC13aWR0aDogMjVweDtcIiBhbHQ9XCJwcm9maWxlLXBpY3R1cmVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0nbS0wJz48c3Ryb25nPiR7ZGF0YS51c2VyLnVzZXJuYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7ZGF0YS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICB9KVxyXG4gICAgLmZhaWwoKGVycm9yKSA9PiB7XHJcbiAgICAgICAgJCgnI2NvbW1lbnQnKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICQoJyNjb21tZW50LWVycm9yJylcclxuICAgICAgICAuYXBwZW5kKGA8cCBjbGFzcz0nbS0wIHRleHQtZGFuZ2VyJz4ke2Vycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnMuY29tbWVudFswXX08L3A+YCk7XHJcbiAgICB9KVxyXG4gICAgLmFsd2F5cygoKSA9PiB7XHJcbiAgICAgICAgJCgnI2NvbW1lbnQnKS52YWwoJycpO1xyXG4gICAgfSlcclxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/comments.js\n");

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