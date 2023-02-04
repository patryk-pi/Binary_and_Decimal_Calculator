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
  add(numbersA, numbersB) {
    const sum = [];
    for (let i = numbersA.length - 1; i >= 0; i--) {
      const sumOfArrays = numbersA[i] + numbersB[i];
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a2c5d07fa890b461567")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYjA1OGUwYTU5ZTZhZTYzMTUyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUc3Q0QsS0FBSyxDQUFDRSxXQUFXLEdBQUcsRUFBRTtJQUV0QkYsS0FBSyxDQUFDRyxlQUFlLEdBQUcsSUFBSTtJQUM1QkgsS0FBSyxDQUFDSSxLQUFLLEVBQUU7SUFFYkosS0FBSyxDQUFDSyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNMLEtBQUssQ0FBQ0UsV0FBVyxFQUFFO1FBQ3BCRixLQUFLLENBQUNFLFdBQVcsR0FBR0ksU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHTixLQUFLLENBQUNFLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBSyxHQUFHLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1DLEdBQUcsR0FBRyxFQUFFO0lBRWQsS0FBSyxJQUFJQyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDM0MsTUFBTUUsV0FBVyxHQUFJTCxRQUFRLENBQUNHLENBQUMsQ0FBQyxHQUFHRixRQUFRLENBQUNFLENBQUMsQ0FBQztJQUNsRDtFQUVKO0FBR0o7QUFFQSxpRUFBZWQsYUFBYTs7Ozs7Ozs7VUNsQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS8uL0NhbGMvanMvRGVjQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcblxuICAgIGNoYW5nZU51bWJlcihwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICBcblxuICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgaW5wdXQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gdGVtcFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKG51bWJlcnNBLCBudW1iZXJzQikge1xuICAgICAgICBjb25zdCBzdW0gPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gbnVtYmVyc0EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bU9mQXJyYXlzICA9IG51bWJlcnNBW2ldICsgbnVtYmVyc0JbaV07XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmEyYzVkMDdmYTg5MGI0NjE1NjdcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRleHRDb250ZW50IiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwidGVtcFZhbHVlIiwiYWRkIiwibnVtYmVyc0EiLCJudW1iZXJzQiIsInN1bSIsImkiLCJsZW5ndGgiLCJzdW1PZkFycmF5cyJdLCJzb3VyY2VSb290IjoiIn0=