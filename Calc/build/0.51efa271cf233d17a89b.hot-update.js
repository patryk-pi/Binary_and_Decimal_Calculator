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
    input.contentEditable = true;
    input.focus();
    input.addEventListener('focusout', () => {
      if (input.textContent === null) {
        console.log(tempValue);
        input.value = tempValue;
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
/******/ 	__webpack_require__.h = () => ("c51293a8541a92a328d8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MWVmYTI3MWNmMjMzZDE3YTg5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUNyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUNsQkYsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDTSxlQUFlLEdBQUcsSUFBSTtJQUM1Qk4sS0FBSyxDQUFDTyxLQUFLLEVBQUU7SUFFYlAsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTTtNQUNyQyxJQUFJUixLQUFLLENBQUNHLFdBQVcsS0FBSyxJQUFJLEVBQUU7UUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUM7UUFDdEJGLEtBQUssQ0FBQ1MsS0FBSyxHQUFHUCxTQUFTO01BQzNCO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQVEsR0FBRyxDQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtJQUNuQixNQUFNQyxHQUFHLEdBQUcsRUFBRTtFQUNsQjtBQUNKO0FBRUEsaUVBQWVoQixhQUFhOzs7Ozs7OztVQzFCNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5Ly4vQ2FsYy9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcblxuY2xhc3MgRGVjQ2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xuXG4gICAgY2hhbmdlTnVtYmVyKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBwYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBsZXQgdGVtcFZhbHVlID0gaW5wdXQudGV4dENvbnRlbnQ7XG4gICAgY29uc29sZS5sb2codGVtcFZhbHVlKVxuICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGlucHV0LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudGV4dENvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wVmFsdWUpXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0ZW1wVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkIChudW1iZXIxLCBudW1iZXIyKSB7XG4gICAgICAgIGNvbnN0IHN1bSA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjQ2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNTEyOTNhODU0MWE5MmEzMjhkOFwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwiRGVjQ2FsY3VsYXRvciIsImNoYW5nZU51bWJlciIsInBhcmVudEVsZW1lbnQiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwidGVtcFZhbHVlIiwidGV4dENvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJhZGQiLCJudW1iZXIxIiwibnVtYmVyMiIsInN1bSJdLCJzb3VyY2VSb290IjoiIn0=