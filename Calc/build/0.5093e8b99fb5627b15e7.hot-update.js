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
  constructor(selector) {
    super(selector);
    this.$tooltip = this.$calculatorDOMElement.querySelector(".popover");
  }
  showTooltip(text) {
    this.$tooltip.children[1].innerText = text;
    this.$tooltip.classList.add("show");
  }
  hideTooltip() {
    this.$tooltip.classList.remove("show");
  }
  changeNumber(parentElement) {
    const input = parentElement.firstElementChild;
    let tempValue = input.textContent;
    input.textContent = "";
    input.contentEditable = true;
    input.focus();
    input.addEventListener('blur', () => {
      this.hideTooltip();
      if (!input.textContent) {
        input.textContent = tempValue;
      } else {
        tempValue = input.textContent;
      }
    });
    this.showTooltip("Naciśnij aby dodać wartości");
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
      this.hideTooltip();
      const checkNumbers = this.checkNumber();
      if (checkNumbers) {
        this.updateResult();
      } else {
        alert("Sprawdź poprawność liczb!");
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
/******/ 	__webpack_require__.h = () => ("5cb8749e6c6670e14ea7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0IscUJBQXFCLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2lCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3RGLElBQUksQ0FBQ1YsV0FBVyxFQUFFO01BQ2xCLE1BQU13QixZQUFZLEdBQUcsSUFBSSxDQUFDTixXQUFXLEVBQUU7TUFDdkMsSUFBSU0sWUFBWSxFQUFFO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEVBQUU7TUFDdkIsQ0FBQyxNQUFNO1FBQ0hDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztNQUN0QztJQUNKLENBQUMsQ0FBQztFQUNOO0FBR0o7QUFFQSxpRUFBZXRDLGFBQWE7Ozs7Ozs7O1VDcEY1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvLi9DYWxjL2pzL0RlY0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xuXG5jbGFzcyBEZWNDYWxjdWxhdG9yIGV4dGVuZHMgQ2FsY3VsYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgICAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuJHRvb2x0aXAgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcG92ZXJcIik7XG4gICAgfVxuXG4gICAgc2hvd1Rvb2x0aXAodGV4dCkge1xuICAgICAgICB0aGlzLiR0b29sdGlwLmNoaWxkcmVuWzFdLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuJHRvb2x0aXAuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgfVxuXG4gICAgaGlkZVRvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMuJHRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgfVxuXG4gICAgY2hhbmdlTnVtYmVyKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBwYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBsZXQgdGVtcFZhbHVlID0gaW5wdXQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIGlucHV0LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgICAgIGlmICghaW5wdXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC50ZXh0Q29udGVudCA9IHRlbXBWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gaW5wdXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAoXCJOYWNpxZtuaWogYWJ5IGRvZGHEhyB3YXJ0b8WbY2lcIik7XG4gICAgfVxuXG4gICAgYWRkKG51bWJlcnNBLCBudW1iZXJzQikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gbnVtYmVyc0EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bU9mQXJyYXlzID0gbnVtYmVyc0FbaV0gKyBudW1iZXJzQltpXTtcbiAgICAgICAgICAgIGNvbnN0IHN1bSA9IHR5cGVvZiByZXN1bHRbaV0gPT09IFwidW5kZWZpbmVkXCIgPyBzdW1PZkFycmF5cyA6IHN1bU9mQXJyYXlzICsgcmVzdWx0W2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VtID4gOSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHN1bSAlIDEwO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpIC0gMV0gPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHN1bVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuXG4gICAgY2hlY2tOdW1iZXIoKSB7XG4gICAgICAgIHN1cGVyLmNoZWNrTnVtYmVyKCk7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5maXJzdE51bWJlckFycmF5LCAuLi50aGlzLnNlY29uZE51bWJlckFycmF5XS5ldmVyeSgoZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIgJiYgZWwgPCAxMCAmJiBlbCA+PSAwO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmluaXRFdmVudHMoKTtcblxuICAgICAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZXJhdG9yLWJhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tOdW1iZXJzID0gdGhpcy5jaGVja051bWJlcigpO1xuICAgICAgICAgICAgaWYgKGNoZWNrTnVtYmVycykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU3ByYXdkxbogcG9wcmF3bm/Fm8SHIGxpY3piIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVjYjg3NDllNmM2NjcwZTE0ZWE3XCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJEZWNDYWxjdWxhdG9yIiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsIiR0b29sdGlwIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInNob3dUb29sdGlwIiwidGV4dCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZVRvb2x0aXAiLCJyZW1vdmUiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRlbXBWYWx1ZSIsInRleHRDb250ZW50IiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtYmVyc0EiLCJudW1iZXJzQiIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzdW1PZkFycmF5cyIsInN1bSIsImNoZWNrTnVtYmVyIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwiZXZlcnkiLCJlbCIsImluaXRFdmVudHMiLCJjaGVja051bWJlcnMiLCJ1cGRhdGVSZXN1bHQiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=