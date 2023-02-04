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
    input.textContent = "";
    input.contentEditable = true;
    input.focus();
    input.addEventListener('blur', () => {
      if (!input.textContent) {
        input.textContent = tempValue;
      } else {
        tempValue = input.textContent;
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("755b47b802403cd24edc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZjhhMTk0NjYyMjVhZWY5ZDEwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUVqQ0gsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDSSxlQUFlLEdBQUcsSUFBSTtJQUM1QkosS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFFYkwsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1FBQ3BCSCxLQUFLLENBQUNHLFdBQVcsR0FBR0QsU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHRixLQUFLLENBQUNHLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtBQUdKO0FBRUEsaUVBQWVOLGFBQWE7Ozs7Ozs7O1VDekI1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvLi9DYWxjL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICBjaGFuZ2VOdW1iZXIocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcblxuICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgaW5wdXQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gdGVtcFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjQ2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NTViNDdiODAyNDAzY2QyNGVkY1wiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwiRGVjQ2FsY3VsYXRvciIsImNoYW5nZU51bWJlciIsInBhcmVudEVsZW1lbnQiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwidGVtcFZhbHVlIiwidGV4dENvbnRlbnQiLCJjb250ZW50RWRpdGFibGUiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9