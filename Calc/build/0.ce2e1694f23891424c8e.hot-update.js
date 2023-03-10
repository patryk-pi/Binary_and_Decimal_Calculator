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
  add(numbersA, numbersB) {
    const result = [];
    for (let i = numbersA.length - 1; i >= 0; i--) {
      const sumOfArrays = numbersA[i] + numbersB[i];
      const sum = typeof result[i] === "undefined" ? sumOfArrays : sumOfArrays + result[i];
      if (sum > 10) {
        sumOfArrays[i] = sum % 10;
        sumOfArrays[i - 1] = 1;
      } else {
        sumOfArrays[i] = sum;
      }
    }
    return result;
  }
  checkNumber() {
    super.checkNumber();
    return this.resultNumberArray.every(el => {
      return typeof el === 'number' && el >= 1 && el <= 9;
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d29d120af15492aead5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZTJlMTY5NGYyMzg5MTQyNGM4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUVqQ0gsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDSSxlQUFlLEdBQUcsSUFBSTtJQUM1QkosS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFFYkwsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1FBQ3BCSCxLQUFLLENBQUNHLFdBQVcsR0FBR0QsU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHRixLQUFLLENBQUNHLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBSSxHQUFHLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNDLE1BQU1FLFdBQVcsR0FBSUwsUUFBUSxDQUFDRyxDQUFDLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7TUFDOUMsTUFBTUcsR0FBRyxHQUFHLE9BQU9KLE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssV0FBVyxHQUFHRSxXQUFXLEdBQUdBLFdBQVcsR0FBR0gsTUFBTSxDQUFDQyxDQUFDLENBQUM7TUFFcEYsSUFBSUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNWRCxXQUFXLENBQUNGLENBQUMsQ0FBQyxHQUFHRyxHQUFHLEdBQUcsRUFBRTtRQUN6QkQsV0FBVyxDQUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUMxQixDQUFDLE1BQU07UUFDSEUsV0FBVyxDQUFDRixDQUFDLENBQUMsR0FBR0csR0FBRztNQUN4QjtJQUNKO0lBRUEsT0FBT0osTUFBTTtFQUNqQjtFQUNBSyxXQUFXLEdBQUc7SUFDVixLQUFLLENBQUNBLFdBQVcsRUFBRTtJQUNuQixPQUFPLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNDLEtBQUssQ0FBQ0MsRUFBRSxJQUFJO01BQ3RDLE9BQU8sT0FBT0EsRUFBRSxLQUFLLFFBQVEsSUFBSUEsRUFBRSxJQUFJLENBQUMsSUFBSUEsRUFBRSxJQUFHLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0VBQ047QUFHSjtBQUVBLGlFQUFlckIsYUFBYTs7Ozs7Ozs7VUNqRDVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS8uL0NhbGMvanMvRGVjQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcblxuICAgIGNoYW5nZU51bWJlcihwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGlucHV0LnRleHRDb250ZW50O1xuXG4gICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICBpbnB1dC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlucHV0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSB0ZW1wVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IGlucHV0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGQobnVtYmVyc0EsIG51bWJlcnNCKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBudW1iZXJzQS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgc3VtT2ZBcnJheXMgID0gbnVtYmVyc0FbaV0gKyBudW1iZXJzQltpXTtcbiAgICAgICAgICAgIGNvbnN0IHN1bSA9IHR5cGVvZiByZXN1bHRbaV0gPT09IFwidW5kZWZpbmVkXCIgPyBzdW1PZkFycmF5cyA6IHN1bU9mQXJyYXlzICsgcmVzdWx0W2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VtID4gMTApIHtcbiAgICAgICAgICAgICAgICBzdW1PZkFycmF5c1tpXSA9IHN1bSAlIDEwO1xuICAgICAgICAgICAgICAgIHN1bU9mQXJyYXlzW2kgLSAxXSA9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VtT2ZBcnJheXNbaV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGNoZWNrTnVtYmVyKCkge1xuICAgICAgICBzdXBlci5jaGVja051bWJlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHROdW1iZXJBcnJheS5ldmVyeShlbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsID09PSAnbnVtYmVyJyAmJiBlbCA+PSAxICYmIGVsIDw9OTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlkMjlkMTIwYWYxNTQ5MmFlYWQ1XCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJEZWNDYWxjdWxhdG9yIiwiY2hhbmdlTnVtYmVyIiwicGFyZW50RWxlbWVudCIsImlucHV0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ0ZW1wVmFsdWUiLCJ0ZXh0Q29udGVudCIsImNvbnRlbnRFZGl0YWJsZSIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZCIsIm51bWJlcnNBIiwibnVtYmVyc0IiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwic3VtT2ZBcnJheXMiLCJzdW0iLCJjaGVja051bWJlciIsInJlc3VsdE51bWJlckFycmF5IiwiZXZlcnkiLCJlbCJdLCJzb3VyY2VSb290IjoiIn0=