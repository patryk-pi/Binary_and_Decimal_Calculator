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
    return [...this.firstNumberArray, ...this.secondNumberArray].every(el => {
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
/******/ 	__webpack_require__.h = () => ("e889fc4f80ef966730bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZTk4YzJkY2RmNGZhMDRjYzMxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLGFBQWEsU0FBU0QsbURBQVUsQ0FBQztFQUVuQ0UsWUFBWSxDQUFDQyxhQUFhLEVBQUU7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxhQUFhLENBQUNFLGlCQUFpQjtJQUM3QyxJQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csV0FBVztJQUVqQ0gsS0FBSyxDQUFDRyxXQUFXLEdBQUcsRUFBRTtJQUV0QkgsS0FBSyxDQUFDSSxlQUFlLEdBQUcsSUFBSTtJQUM1QkosS0FBSyxDQUFDSyxLQUFLLEVBQUU7SUFFYkwsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTTtNQUNqQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1FBQ3BCSCxLQUFLLENBQUNHLFdBQVcsR0FBR0QsU0FBUztNQUNqQyxDQUFDLE1BQU07UUFDSEEsU0FBUyxHQUFHRixLQUFLLENBQUNHLFdBQVc7TUFDakM7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBSSxHQUFHLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3BCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCLEtBQUssSUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNDLE1BQU1FLFdBQVcsR0FBR0wsUUFBUSxDQUFDRyxDQUFDLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxDQUFDLENBQUM7TUFDN0MsTUFBTUcsR0FBRyxHQUFHLE9BQU9KLE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssV0FBVyxHQUFHRSxXQUFXLEdBQUdBLFdBQVcsR0FBR0gsTUFBTSxDQUFDQyxDQUFDLENBQUM7TUFFcEYsSUFBSUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNWRCxXQUFXLENBQUNGLENBQUMsQ0FBQyxHQUFHRyxHQUFHLEdBQUcsRUFBRTtRQUN6QkQsV0FBVyxDQUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUMxQixDQUFDLE1BQU07UUFDSEUsV0FBVyxDQUFDRixDQUFDLENBQUMsR0FBR0csR0FBRztNQUN4QjtJQUNKO0lBRUEsT0FBT0osTUFBTTtFQUNqQjtFQUNBSyxXQUFXLEdBQUc7SUFDVixLQUFLLENBQUNBLFdBQVcsRUFBRTtJQUNuQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDQyxLQUFLLENBQUVDLEVBQUUsSUFBSztNQUN2RUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEVBQUUsRUFBRSxPQUFPQSxFQUFFLEtBQUssUUFBUSxJQUFJQSxFQUFFLEdBQUcsRUFBRSxJQUFJQSxFQUFFLElBQUksQ0FBQyxDQUFDO01BQzdELE9BQU8sT0FBT0EsRUFBRSxLQUFLLFFBQVEsSUFBSUEsRUFBRSxHQUFHLEVBQUUsSUFBSUEsRUFBRSxJQUFJLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0VBQ047RUFFQUcsVUFBVSxHQUFHO0lBQ1QsS0FBSyxDQUFDQSxVQUFVLEVBQUU7SUFFbEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFHdEYsTUFBTW1CLFlBQVksR0FBRyxJQUFJLENBQUNWLFdBQVcsRUFBRTtNQUN2QyxJQUFJVSxZQUFZLEVBQUU7UUFDZCxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUUzQjtJQUNKLENBQUMsQ0FBQztFQUNGO0FBSUo7QUFFQSxpRUFBZTdCLGFBQWE7Ozs7Ozs7O1VDakU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvLi9DYWxjL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICBjaGFuZ2VOdW1iZXIocGFyZW50RWxlbWVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcblxuICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgaW5wdXQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gdGVtcFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSBpbnB1dC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKG51bWJlcnNBLCBudW1iZXJzQikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gbnVtYmVyc0EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bU9mQXJyYXlzID0gbnVtYmVyc0FbaV0gKyBudW1iZXJzQltpXTtcbiAgICAgICAgICAgIGNvbnN0IHN1bSA9IHR5cGVvZiByZXN1bHRbaV0gPT09IFwidW5kZWZpbmVkXCIgPyBzdW1PZkFycmF5cyA6IHN1bU9mQXJyYXlzICsgcmVzdWx0W2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VtID4gMTApIHtcbiAgICAgICAgICAgICAgICBzdW1PZkFycmF5c1tpXSA9IHN1bSAlIDEwO1xuICAgICAgICAgICAgICAgIHN1bU9mQXJyYXlzW2kgLSAxXSA9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VtT2ZBcnJheXNbaV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGNoZWNrTnVtYmVyKCkge1xuICAgICAgICBzdXBlci5jaGVja051bWJlcigpO1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuZmlyc3ROdW1iZXJBcnJheSwgLi4udGhpcy5zZWNvbmROdW1iZXJBcnJheV0uZXZlcnkoKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbCwgdHlwZW9mIGVsID09PSBcIm51bWJlclwiICYmIGVsIDwgMTAgJiYgZWwgPj0gMCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsID09PSBcIm51bWJlclwiICYmIGVsIDwgMTAgJiYgZWwgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgc3VwZXIuaW5pdEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3BlcmF0b3ItYmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cblxuICAgICAgICAgICAgY29uc3QgY2hlY2tOdW1iZXJzID0gdGhpcy5jaGVja051bWJlcigpO1xuICAgICAgICAgICAgaWYgKGNoZWNrTnVtYmVycykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU4ODlmYzRmODBlZjk2NjczMGJiXCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJEZWNDYWxjdWxhdG9yIiwiY2hhbmdlTnVtYmVyIiwicGFyZW50RWxlbWVudCIsImlucHV0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ0ZW1wVmFsdWUiLCJ0ZXh0Q29udGVudCIsImNvbnRlbnRFZGl0YWJsZSIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZCIsIm51bWJlcnNBIiwibnVtYmVyc0IiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwic3VtT2ZBcnJheXMiLCJzdW0iLCJjaGVja051bWJlciIsImZpcnN0TnVtYmVyQXJyYXkiLCJzZWNvbmROdW1iZXJBcnJheSIsImV2ZXJ5IiwiZWwiLCJjb25zb2xlIiwibG9nIiwiaW5pdEV2ZW50cyIsIiRjYWxjdWxhdG9yRE9NRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja051bWJlcnMiLCJ1cGRhdGVSZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9