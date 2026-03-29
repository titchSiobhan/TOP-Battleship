/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/ship.js"
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
(module) {

eval("{function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar ship = /*#__PURE__*/function () {\n  function ship(name, size, hits) {\n    _classCallCheck(this, ship);\n    this.name = name;\n    this.size = size;\n    this.hits = hits;\n  }\n  return _createClass(ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits++;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      if (this.hits === this.size) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }]);\n}();\nvar fleet = [];\nvar carrier = new ship('Carrier', 5, 0);\nvar battleship = new ship('Battleship', 4, 0);\nvar cruiser = new ship('Cruiser', 3, 0);\nfleet.push(carrier, battleship, cruiser);\nmodule.exports = {\n  ship: ship,\n  fleet: fleet\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS9zaGlwLmpzIiwibmFtZXMiOlsic2hpcCIsIm5hbWUiLCJzaXplIiwiaGl0cyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaGl0IiwiaXNTdW5rIiwiZmxlZXQiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS9zaGlwLmpzPzhmNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jbGFzcyBzaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsc2l6ZSwgaGl0cyApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmhpdHMgPSBoaXRzXHJcbiAgICB9XHJcbiAgICBoaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oaXRzKys7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG4gfVxyXG5cclxuIGxldCBmbGVldCA9IFtdO1xyXG5cclxuIGNvbnN0IGNhcnJpZXIgPSBuZXcgc2hpcCgnQ2FycmllcicsIDUsIDApO1xyXG4gY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBzaGlwKCdCYXR0bGVzaGlwJywgNCwgMCk7XHJcbiBjb25zdCBjcnVpc2VyID0gbmV3IHNoaXAoJ0NydWlzZXInLCAzLCAwKTtcclxuXHJcbiBmbGVldC5wdXNoKGNhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIpXHJcbiBcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgc2hpcCAsIGZsZWV0IH1cclxuICJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRU1BLElBQUk7RUFDTixTQUFBQSxLQUFZQyxJQUFJLEVBQUNDLElBQUksRUFBRUMsSUFBSSxFQUFHO0lBQUFDLGVBQUEsT0FBQUosSUFBQTtJQUMxQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtFQUNwQjtFQUFDLE9BQUFFLFlBQUEsQ0FBQUwsSUFBQTtJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBQyxHQUFHQSxDQUFBLEVBQUc7TUFDRixJQUFJLENBQUNMLElBQUksRUFBRTtJQUNmO0VBQUM7SUFBQUcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUUsTUFBTUEsQ0FBQSxFQUFHO01BQ0wsSUFBSSxJQUFJLENBQUNOLElBQUksS0FBSyxJQUFJLENBQUNELElBQUksRUFBRTtRQUN6QixPQUFPLElBQUk7TUFDZixDQUFDLE1BQU07UUFDSCxPQUFPLEtBQUs7TUFDaEI7SUFDSjtFQUFDO0FBQUE7QUFJSixJQUFJUSxLQUFLLEdBQUcsRUFBRTtBQUVkLElBQU1DLE9BQU8sR0FBRyxJQUFJWCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekMsSUFBTVksVUFBVSxHQUFHLElBQUlaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvQyxJQUFNYSxPQUFPLEdBQUcsSUFBSWIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXpDVSxLQUFLLENBQUNJLElBQUksQ0FBQ0gsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sQ0FBQztBQUl6Q0UsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFBRWhCLElBQUksRUFBSkEsSUFBSTtFQUFHVSxLQUFLLEVBQUxBO0FBQU0sQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./src/game/ship.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/ship.js */ \"./src/game/ship.js\");\n/* harmony import */ var _game_ship_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_ship_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(_game_ship_js__WEBPACK_IMPORTED_MODULE_0__.fleet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBRXZDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsZ0RBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmxlZXQgfSBmcm9tIFwiLi9nYW1lL3NoaXAuanNcIjtcclxuXHJcbmNvbnNvbGUubG9nKGZsZWV0KSJdLCJuYW1lcyI6WyJmbGVldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;