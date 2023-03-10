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
      return typeof el === "number" && el < 10 && el >= 0;
    });
  }
  initEvents() {
    super.initEvents();
    this.$calculatorDOMElement.querySelector(".operator-bar").addEventListener("click", () => {
      const checkNumbers = this.checkNumber();
      if (checkNumbers) {
        this.updateResult();
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
/******/ 	__webpack_require__.h = () => ("c130ea633ef71bc2b1d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NWJmNWE5OTJiNGQzMzRhN2NjMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUVqQ0gsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDSSxlQUFlLEdBQUcsSUFBSTtJQUM1QkosS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFFYkwsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1FBQ3BCSCxLQUFLLENBQUNHLFdBQVcsR0FBR0QsU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHRixLQUFLLENBQUNHLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBSSxHQUFHLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNDLE1BQU1FLFdBQVcsR0FBR0wsUUFBUSxDQUFDRyxDQUFDLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7TUFDN0MsTUFBTUcsR0FBRyxHQUFHLE9BQU9KLE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssV0FBVyxHQUFHRSxXQUFXLEdBQUdBLFdBQVcsR0FBR0gsTUFBTSxDQUFDQyxDQUFDLENBQUM7TUFFcEYsSUFBSUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNWRCxXQUFXLENBQUNGLENBQUMsQ0FBQyxHQUFHRyxHQUFHLEdBQUcsRUFBRTtRQUN6QkQsV0FBVyxDQUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUMxQixDQUFDLE1BQU07UUFDSEUsV0FBVyxDQUFDRixDQUFDLENBQUMsR0FBR0csR0FBRztNQUN4QjtJQUNKO0lBRUEsT0FBT0osTUFBTTtFQUNqQjtFQUVBSyxXQUFXLEdBQUc7SUFDVixLQUFLLENBQUNBLFdBQVcsRUFBRTtJQUNuQixPQUFPLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNDLEtBQUssQ0FBQ0MsRUFBRSxJQUFJO01BQ3RDLE9BQU8sT0FBT0EsRUFBRSxLQUFLLFFBQVEsSUFBSUEsRUFBRSxHQUFHLEVBQUUsSUFBSUEsRUFBRSxJQUFJLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0VBQ047RUFFQUMsVUFBVSxHQUFHO0lBQ1QsS0FBSyxDQUFDQSxVQUFVLEVBQUU7SUFFbEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDZixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUd0RixNQUFNZ0IsWUFBWSxHQUFHLElBQUksQ0FBQ1AsV0FBVyxFQUFFO01BQ3ZDLElBQUlPLFlBQVksRUFBRTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxFQUFFO01BRTNCO0lBQ0osQ0FBQyxDQUFDO0VBQ0Y7QUFJSjtBQUVBLGlFQUFlMUIsYUFBYTs7Ozs7Ozs7VUNqRTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS8uL0NhbGMvanMvRGVjQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XG5cbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yIHtcblxuICAgIGNoYW5nZU51bWJlcihwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGlucHV0LnRleHRDb250ZW50O1xuXG4gICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICBpbnB1dC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlucHV0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSB0ZW1wVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IGlucHV0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGQobnVtYmVyc0EsIG51bWJlcnNCKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBudW1iZXJzQS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3Qgc3VtT2ZBcnJheXMgPSBudW1iZXJzQVtpXSArIG51bWJlcnNCW2ldO1xuICAgICAgICAgICAgY29uc3Qgc3VtID0gdHlwZW9mIHJlc3VsdFtpXSA9PT0gXCJ1bmRlZmluZWRcIiA/IHN1bU9mQXJyYXlzIDogc3VtT2ZBcnJheXMgKyByZXN1bHRbaV07XG5cbiAgICAgICAgICAgIGlmIChzdW0gPiAxMCkge1xuICAgICAgICAgICAgICAgIHN1bU9mQXJyYXlzW2ldID0gc3VtICUgMTA7XG4gICAgICAgICAgICAgICAgc3VtT2ZBcnJheXNbaSAtIDFdID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdW1PZkFycmF5c1tpXSA9IHN1bVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgXG4gICAgY2hlY2tOdW1iZXIoKSB7XG4gICAgICAgIHN1cGVyLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdE51bWJlckFycmF5LmV2ZXJ5KGVsID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIgJiYgZWwgPCAxMCAmJiBlbCA+PSAwO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICBzdXBlci5pbml0RXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVyYXRvci1iYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuXG4gICAgICAgICAgICBjb25zdCBjaGVja051bWJlcnMgPSB0aGlzLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcblxuICAgICAgICB9XG4gICAgfSlcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzEzMGVhNjMzZWY3MWJjMmIxZDRcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRlbXBWYWx1ZSIsInRleHRDb250ZW50IiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwibnVtYmVyc0EiLCJudW1iZXJzQiIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzdW1PZkFycmF5cyIsInN1bSIsImNoZWNrTnVtYmVyIiwicmVzdWx0TnVtYmVyQXJyYXkiLCJldmVyeSIsImVsIiwiaW5pdEV2ZW50cyIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja051bWJlcnMiLCJ1cGRhdGVSZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9