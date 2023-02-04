"use strict";
self["webpackHotUpdatewro_fer_w_22_es6_react_podstawy"](0,{

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

class DecCalculator extends _Calculator__WEBPACK_IMPORTED_MODULE_0__["default"] {
  changeNumber(parentElement) {
    const input = parentElement.firstElementChild;
    let tempValue = input.textContent;
    console.log(tempValue);
    input.textContent = '';
    console.log(tempValue);
    input.contentEditable = true;
    input.focus();
    input.addEventListener('focusout', () => {
      if (input.textContent === tempValue) {
        return;
      } else {
        input.textContent === tempValue;
      }
    });
  }
  add(number1, number2) {
    const sum = [];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("991c6358cf0fca19037f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNDUwNTk0OThkM2NhNGZhNzQyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUNyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUNsQkYsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUVsQkYsS0FBSyxDQUFDTSxlQUFlLEdBQUcsSUFBSTtJQUM1Qk4sS0FBSyxDQUFDTyxLQUFLLEVBQUU7SUFFYlAsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTTtNQUNyQyxJQUFJUixLQUFLLENBQUNHLFdBQVcsS0FBS0QsU0FBUyxFQUFFO1FBQ2pDO01BQ0osQ0FBQyxNQUFNO1FBQ0hGLEtBQUssQ0FBQ0csV0FBVyxLQUFLRCxTQUFTO01BQ25DO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQU8sR0FBRyxDQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtJQUNuQixNQUFNQyxHQUFHLEdBQUcsRUFBRTtFQUNsQjtBQUNKO0FBRUEsaUVBQWVmLGFBQWE7Ozs7Ozs7O1VDNUI1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvLi9DYWxjL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICBjaGFuZ2VOdW1iZXIocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyh0ZW1wVmFsdWUpXG4gICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc29sZS5sb2codGVtcFZhbHVlKVxuXG4gICAgICAgIGlucHV0LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudGV4dENvbnRlbnQgPT09IHRlbXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9PT0gdGVtcFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkIChudW1iZXIxLCBudW1iZXIyKSB7XG4gICAgICAgIGNvbnN0IHN1bSA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjQ2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5OTFjNjM1OGNmMGZjYTE5MDM3ZlwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwiRGVjQ2FsY3VsYXRvciIsImNoYW5nZU51bWJlciIsInBhcmVudEVsZW1lbnQiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwidGVtcFZhbHVlIiwidGV4dENvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwibnVtYmVyMSIsIm51bWJlcjIiLCJzdW0iXSwic291cmNlUm9vdCI6IiJ9