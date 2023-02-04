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
    [...this.firstNumberArray, ...this.secondNumberArray].every(el => {
      console.log(el, typeof el === "number" && el < 10 && el >= 0);
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
/******/ 	__webpack_require__.h = () => ("85bf5a992b4d334a7cc2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lODg5ZmM0ZjgwZWY5NjY3MzBiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUVqQ0gsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDSSxlQUFlLEdBQUcsSUFBSTtJQUM1QkosS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFFYkwsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1FBQ3BCSCxLQUFLLENBQUNHLFdBQVcsR0FBR0QsU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHRixLQUFLLENBQUNHLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBSSxHQUFHLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNDLE1BQU1FLFdBQVcsR0FBR0wsUUFBUSxDQUFDRyxDQUFDLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7TUFDN0MsTUFBTUcsR0FBRyxHQUFHLE9BQU9KLE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssV0FBVyxHQUFHRSxXQUFXLEdBQUdBLFdBQVcsR0FBR0gsTUFBTSxDQUFDQyxDQUFDLENBQUM7TUFFcEYsSUFBSUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNWRCxXQUFXLENBQUNGLENBQUMsQ0FBQyxHQUFHRyxHQUFHLEdBQUcsRUFBRTtRQUN6QkQsV0FBVyxDQUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUMxQixDQUFDLE1BQU07UUFDSEUsV0FBVyxDQUFDRixDQUFDLENBQUMsR0FBR0csR0FBRztNQUN4QjtJQUNKO0lBRUEsT0FBT0osTUFBTTtFQUNqQjtFQUNBSyxXQUFXLEdBQUc7SUFDVixLQUFLLENBQUNBLFdBQVcsRUFBRTtJQUNwQixDQUFDLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQ0MsS0FBSyxDQUFFQyxFQUFFLElBQUs7TUFDL0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixFQUFFLEVBQUUsT0FBT0EsRUFBRSxLQUFLLFFBQVEsSUFBSUEsRUFBRSxHQUFHLEVBQUUsSUFBSUEsRUFBRSxJQUFJLENBQUMsQ0FBQztNQUM3RCxPQUFPLE9BQU9BLEVBQUUsS0FBSyxRQUFRLElBQUlBLEVBQUUsR0FBRyxFQUFFLElBQUlBLEVBQUUsSUFBSSxDQUFDO0lBQ3ZELENBQUMsQ0FBQztFQUNOO0VBRUFHLFVBQVUsR0FBRztJQUNULEtBQUssQ0FBQ0EsVUFBVSxFQUFFO0lBRWxCLElBQUksQ0FBQ0MscUJBQXFCLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2xCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BR3RGLE1BQU1tQixZQUFZLEdBQUcsSUFBSSxDQUFDVixXQUFXLEVBQUU7TUFDdkMsSUFBSVUsWUFBWSxFQUFFO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEVBQUU7TUFFM0I7SUFDSixDQUFDLENBQUM7RUFDRjtBQUlKO0FBRUEsaUVBQWU3QixhQUFhOzs7Ozs7OztVQ2pFNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5Ly4vQ2FsYy9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcblxuY2xhc3MgRGVjQ2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xuXG4gICAgY2hhbmdlTnVtYmVyKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBwYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBsZXQgdGVtcFZhbHVlID0gaW5wdXQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIGlucHV0LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5wdXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IHRlbXBWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gaW5wdXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZChudW1iZXJzQSwgbnVtYmVyc0IpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlcnNBLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBzdW1PZkFycmF5cyA9IG51bWJlcnNBW2ldICsgbnVtYmVyc0JbaV07XG4gICAgICAgICAgICBjb25zdCBzdW0gPSB0eXBlb2YgcmVzdWx0W2ldID09PSBcInVuZGVmaW5lZFwiID8gc3VtT2ZBcnJheXMgOiBzdW1PZkFycmF5cyArIHJlc3VsdFtpXTtcblxuICAgICAgICAgICAgaWYgKHN1bSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgc3VtT2ZBcnJheXNbaV0gPSBzdW0gJSAxMDtcbiAgICAgICAgICAgICAgICBzdW1PZkFycmF5c1tpIC0gMV0gPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1bU9mQXJyYXlzW2ldID0gc3VtXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBjaGVja051bWJlcigpIHtcbiAgICAgICAgc3VwZXIuY2hlY2tOdW1iZXIoKTtcbiAgICAgICBbLi4udGhpcy5maXJzdE51bWJlckFycmF5LCAuLi50aGlzLnNlY29uZE51bWJlckFycmF5XS5ldmVyeSgoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsLCB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIgJiYgZWwgPCAxMCAmJiBlbCA+PSAwKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIgJiYgZWwgPCAxMCAmJiBlbCA+PSAwO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICBzdXBlci5pbml0RXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVyYXRvci1iYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuXG4gICAgICAgICAgICBjb25zdCBjaGVja051bWJlcnMgPSB0aGlzLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tOdW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcblxuICAgICAgICB9XG4gICAgfSlcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY0NhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODViZjVhOTkyYjRkMzM0YTdjYzJcIikiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsIkRlY0NhbGN1bGF0b3IiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRlbXBWYWx1ZSIsInRleHRDb250ZW50IiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkIiwibnVtYmVyc0EiLCJudW1iZXJzQiIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzdW1PZkFycmF5cyIsInN1bSIsImNoZWNrTnVtYmVyIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwiZXZlcnkiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJpbml0RXZlbnRzIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNoZWNrTnVtYmVycyIsInVwZGF0ZVJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=