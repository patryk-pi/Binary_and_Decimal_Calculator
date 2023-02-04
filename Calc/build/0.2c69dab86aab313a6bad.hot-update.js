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
    input.textContent = null;
    console.log(tempValue);
    input.contentEditable = true;
    input.focus();
    if (input.textContent === null) {
      input.addEventListener('blur', () => {
        input.textContent = tempValue;
      });
    }
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
/******/ 	__webpack_require__.h = () => ("c3c88f71a681f71ad83f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYzY5ZGFiODZhYWIzMTNhNmJhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUNyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUNsQkYsS0FBSyxDQUFDRyxXQUFXLEdBQUcsSUFBSTtJQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUVsQkYsS0FBSyxDQUFDTSxlQUFlLEdBQUcsSUFBSTtJQUM1Qk4sS0FBSyxDQUFDTyxLQUFLLEVBQUU7SUFHYixJQUFJUCxLQUFLLENBQUNHLFdBQVcsS0FBSyxJQUFJLEVBQUU7TUFDNUJILEtBQUssQ0FBQ1EsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU07UUFDakNSLEtBQUssQ0FBQ0csV0FBVyxHQUFHRCxTQUFTO01BRWpDLENBQUMsQ0FBQztJQUNOO0VBQ0o7RUFFQU8sR0FBRyxDQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtJQUNuQixNQUFNQyxHQUFHLEdBQUcsRUFBRTtFQUNsQjtBQUNKO0FBRUEsaUVBQWVmLGFBQWE7Ozs7Ozs7O1VDNUI1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvLi9DYWxjL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICBjaGFuZ2VOdW1iZXIocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyh0ZW1wVmFsdWUpXG4gICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gbnVsbDtcbiAgICBjb25zb2xlLmxvZyh0ZW1wVmFsdWUpXG5cbiAgICAgICAgaW5wdXQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuXG4gICAgICAgIGlmIChpbnB1dC50ZXh0Q29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IHRlbXBWYWx1ZTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZCAobnVtYmVyMSwgbnVtYmVyMikge1xuICAgICAgICBjb25zdCBzdW0gPSBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzNjODhmNzFhNjgxZjcxYWQ4M2ZcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRlbXBWYWx1ZSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRFZGl0YWJsZSIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZCIsIm51bWJlcjEiLCJudW1iZXIyIiwic3VtIl0sInNvdXJjZVJvb3QiOiIifQ==