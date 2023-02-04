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
    input.addEventListener('focusout', () => {});
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
/******/ 	__webpack_require__.h = () => ("fd500416a799aef02825")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45OTFjNjM1OGNmMGZjYTE5MDM3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUNyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUNsQkYsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQztJQUVsQkYsS0FBSyxDQUFDTSxlQUFlLEdBQUcsSUFBSTtJQUM1Qk4sS0FBSyxDQUFDTyxLQUFLLEVBQUU7SUFFYlAsS0FBSyxDQUFDUSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUV6QyxDQUFDLENBQUM7RUFDTjtFQUVBQyxHQUFHLENBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBQ25CLE1BQU1DLEdBQUcsR0FBRyxFQUFFO0VBQ2xCO0FBQ0o7QUFFQSxpRUFBZWYsYUFBYTs7Ozs7Ozs7VUN4QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS8uL0NhbGMvanMvRGVjQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcblxuICAgIGNoYW5nZU51bWJlcihwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGlucHV0LnRleHRDb250ZW50O1xuICAgIGNvbnNvbGUubG9nKHRlbXBWYWx1ZSlcbiAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zb2xlLmxvZyh0ZW1wVmFsdWUpXG5cbiAgICAgICAgaW5wdXQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZCAobnVtYmVyMSwgbnVtYmVyMikge1xuICAgICAgICBjb25zdCBzdW0gPSBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmQ1MDA0MTZhNzk5YWVmMDI4MjVcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRlbXBWYWx1ZSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRFZGl0YWJsZSIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZCIsIm51bWJlcjEiLCJudW1iZXIyIiwic3VtIl0sInNvdXJjZVJvb3QiOiIifQ==