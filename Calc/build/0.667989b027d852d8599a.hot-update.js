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
      if (sum > 9) {
        result[i] = sum % 10;
        result[i - 1] = 1;
      } else {
        result[i] = sum;
      }
    }
    return result;
  }
  checkNumber() {
    super.checkNumber();
    return [...this.firstNumberArray, ...this.secondNumberArray].every(el => {
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
/******/ 	__webpack_require__.h = () => ("f557265a7666f08d1bdb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42Njc5ODliMDI3ZDg1MmQ4NTk5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUVqQ0gsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDSSxlQUFlLEdBQUcsSUFBSTtJQUM1QkosS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFFYkwsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1FBQ3BCSCxLQUFLLENBQUNHLFdBQVcsR0FBR0QsU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHRixLQUFLLENBQUNHLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBSSxHQUFHLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNDLE1BQU1FLFdBQVcsR0FBR0wsUUFBUSxDQUFDRyxDQUFDLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7TUFDN0MsTUFBTUcsR0FBRyxHQUFHLE9BQU9KLE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssV0FBVyxHQUFHRSxXQUFXLEdBQUdBLFdBQVcsR0FBR0gsTUFBTSxDQUFDQyxDQUFDLENBQUM7TUFFcEYsSUFBSUcsR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNUSixNQUFNLENBQUNDLENBQUMsQ0FBQyxHQUFHRyxHQUFHLEdBQUcsRUFBRTtRQUNwQkosTUFBTSxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUNyQixDQUFDLE1BQU07UUFDSEQsTUFBTSxDQUFDQyxDQUFDLENBQUMsR0FBR0csR0FBRztNQUNuQjtJQUNKO0lBRUEsT0FBT0osTUFBTTtFQUVqQjtFQUtBSyxXQUFXLEdBQUc7SUFDVixLQUFLLENBQUNBLFdBQVcsRUFBRTtJQUNuQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDQyxLQUFLLENBQUVDLEVBQUUsSUFBSztNQUN2RSxPQUFPLE9BQU9BLEVBQUUsS0FBSyxRQUFRLElBQUlBLEVBQUUsR0FBRyxFQUFFLElBQUlBLEVBQUUsSUFBSSxDQUFDO0lBQ3ZELENBQUMsQ0FBQztFQUNOO0VBRUFDLFVBQVUsR0FBRztJQUNULEtBQUssQ0FBQ0EsVUFBVSxFQUFFO0lBRWxCLElBQUksQ0FBQ0MscUJBQXFCLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2hCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BR3RGLE1BQU1pQixZQUFZLEdBQUcsSUFBSSxDQUFDUixXQUFXLEVBQUU7TUFDdkMsSUFBSVEsWUFBWSxFQUFFO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEVBQUU7TUFFM0I7SUFDSixDQUFDLENBQUM7RUFDRjtBQUlKO0FBRUEsaUVBQWUzQixhQUFhOzs7Ozs7OztVQ3JFNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5Ly4vQ2FsYy9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcblxuY2xhc3MgRGVjQ2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xuXG4gICAgY2hhbmdlTnVtYmVyKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBwYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBsZXQgdGVtcFZhbHVlID0gaW5wdXQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIGlucHV0LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5wdXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IHRlbXBWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gaW5wdXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZChudW1iZXJzQSwgbnVtYmVyc0IpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlcnNBLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBzdW1PZkFycmF5cyA9IG51bWJlcnNBW2ldICsgbnVtYmVyc0JbaV07XG4gICAgICAgICAgICBjb25zdCBzdW0gPSB0eXBlb2YgcmVzdWx0W2ldID09PSBcInVuZGVmaW5lZFwiID8gc3VtT2ZBcnJheXMgOiBzdW1PZkFycmF5cyArIHJlc3VsdFtpXTtcblxuICAgICAgICAgICAgaWYgKHN1bSA+IDkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBzdW0gJSAxMDtcbiAgICAgICAgICAgICAgICByZXN1bHRbaSAtIDFdID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cblxuXG5cbiAgICBjaGVja051bWJlcigpIHtcbiAgICAgICAgc3VwZXIuY2hlY2tOdW1iZXIoKTtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmZpcnN0TnVtYmVyQXJyYXksIC4uLnRoaXMuc2Vjb25kTnVtYmVyQXJyYXldLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIiAmJiBlbCA8IDEwICYmIGVsID49IDA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmluaXRFdmVudHMoKTtcblxuICAgICAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZXJhdG9yLWJhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrTnVtYmVycyA9IHRoaXMuY2hlY2tOdW1iZXIoKTtcbiAgICAgICAgICAgIGlmIChjaGVja051bWJlcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVjQ2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNTU3MjY1YTc2NjZmMDhkMWJkYlwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwiRGVjQ2FsY3VsYXRvciIsImNoYW5nZU51bWJlciIsInBhcmVudEVsZW1lbnQiLCJpbnB1dCIsImZpcnN0RWxlbWVudENoaWxkIiwidGVtcFZhbHVlIiwidGV4dENvbnRlbnQiLCJjb250ZW50RWRpdGFibGUiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGQiLCJudW1iZXJzQSIsIm51bWJlcnNCIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInN1bU9mQXJyYXlzIiwic3VtIiwiY2hlY2tOdW1iZXIiLCJmaXJzdE51bWJlckFycmF5Iiwic2Vjb25kTnVtYmVyQXJyYXkiLCJldmVyeSIsImVsIiwiaW5pdEV2ZW50cyIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja051bWJlcnMiLCJ1cGRhdGVSZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9