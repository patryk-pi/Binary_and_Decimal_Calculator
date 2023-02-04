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
    this.resultNumberArray.every(el => {
      return typeof el === 'number' && el >= 1 && el <= 9;
    });
  }
  initEvents() {
    this.$calculatorDOMElement.querySelector('.operator-bar').addEventListener("click", event => {
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
/******/ 	__webpack_require__.h = () => ("007d5868da24a9cd80a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZDYwOThhZTZiMTJiOTZjM2E3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUVqQ0gsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDSSxlQUFlLEdBQUcsSUFBSTtJQUM1QkosS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFFYkwsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1FBQ3BCSCxLQUFLLENBQUNHLFdBQVcsR0FBR0QsU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHRixLQUFLLENBQUNHLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBSSxHQUFHLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNDLE1BQU1FLFdBQVcsR0FBR0wsUUFBUSxDQUFDRyxDQUFDLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7TUFDN0MsTUFBTUcsR0FBRyxHQUFHLE9BQU9KLE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssV0FBVyxHQUFHRSxXQUFXLEdBQUdBLFdBQVcsR0FBR0gsTUFBTSxDQUFDQyxDQUFDLENBQUM7TUFFcEYsSUFBSUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNWRCxXQUFXLENBQUNGLENBQUMsQ0FBQyxHQUFHRyxHQUFHLEdBQUcsRUFBRTtRQUN6QkQsV0FBVyxDQUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUMxQixDQUFDLE1BQU07UUFDSEUsV0FBVyxDQUFDRixDQUFDLENBQUMsR0FBR0csR0FBRztNQUN4QjtJQUNKO0lBRUEsT0FBT0osTUFBTTtFQUNqQjtFQUVBSyxXQUFXLEdBQUc7SUFDVixLQUFLLENBQUNBLFdBQVcsRUFBRTtJQUNuQixJQUFJLENBQUNDLGlCQUFpQixDQUFDQyxLQUFLLENBQUNDLEVBQUUsSUFBSTtNQUMvQixPQUFPLE9BQU9BLEVBQUUsS0FBSyxRQUFRLElBQUlBLEVBQUUsSUFBSSxDQUFDLElBQUlBLEVBQUUsSUFBSSxDQUFDO0lBQ3ZELENBQUMsQ0FBQztFQUNOO0VBRUFDLFVBQVUsR0FBRztJQUNULElBQUksQ0FBQ0MscUJBQXFCLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFZ0IsS0FBSyxJQUFJO01BQ3pGLE1BQU1DLFlBQVksR0FBRyxJQUFJLENBQUNSLFdBQVcsRUFBRTtNQUN2QyxJQUFJUSxZQUFZLEVBQUU7UUFDZCxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUN2QjtJQUNKLENBQUMsQ0FBQztFQUNOO0FBS0o7QUFFQSxpRUFBZTNCLGFBQWE7Ozs7Ozs7O1VDN0Q1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvLi9DYWxjL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICBjaGFuZ2VOdW1iZXIocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcblxuICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgaW5wdXQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gdGVtcFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKG51bWJlcnNBLCBudW1iZXJzQikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gbnVtYmVyc0EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bU9mQXJyYXlzID0gbnVtYmVyc0FbaV0gKyBudW1iZXJzQltpXTtcbiAgICAgICAgICAgIGNvbnN0IHN1bSA9IHR5cGVvZiByZXN1bHRbaV0gPT09IFwidW5kZWZpbmVkXCIgPyBzdW1PZkFycmF5cyA6IHN1bU9mQXJyYXlzICsgcmVzdWx0W2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VtID4gMTApIHtcbiAgICAgICAgICAgICAgICBzdW1PZkFycmF5c1tpXSA9IHN1bSAlIDEwO1xuICAgICAgICAgICAgICAgIHN1bU9mQXJyYXlzW2kgLSAxXSA9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VtT2ZBcnJheXNbaV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY2hlY2tOdW1iZXIoKSB7XG4gICAgICAgIHN1cGVyLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkuZXZlcnkoZWwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gJ251bWJlcicgJiYgZWwgPj0gMSAmJiBlbCA8PSA5O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVyYXRvci1iYXInKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tOdW1iZXJzID0gdGhpcy5jaGVja051bWJlcigpO1xuICAgICAgICAgICAgaWYgKGNoZWNrTnVtYmVycykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDA3ZDU4NjhkYTI0YTljZDgwYTlcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRlbXBWYWx1ZSIsInRleHRDb250ZW50IiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwibnVtYmVyc0EiLCJudW1iZXJzQiIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzdW1PZkFycmF5cyIsInN1bSIsImNoZWNrTnVtYmVyIiwicmVzdWx0TnVtYmVyQXJyYXkiLCJldmVyeSIsImVsIiwiaW5pdEV2ZW50cyIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsImNoZWNrTnVtYmVycyIsInVwZGF0ZVJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=