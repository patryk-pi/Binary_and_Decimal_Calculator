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
/******/ 	__webpack_require__.h = () => ("e9e5589516f28694bdb8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0IscUJBQXFCLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2lCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3RGLElBQUksQ0FBQ1YsV0FBVyxFQUFFO01BQ2xCLE1BQU13QixZQUFZLEdBQUcsSUFBSSxDQUFDTixXQUFXLEVBQUU7TUFDdkMsSUFBSU0sWUFBWSxFQUFFO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEVBQUU7TUFFM0I7SUFDSixDQUFDLENBQUM7RUFDRjtBQUtKO0FBRUEsaUVBQWVyQyxhQUFhOzs7Ozs7OztVQ3JGNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5Ly4vQ2FsYy9qcy9EZWNDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dyb19mZXJfd18yMl9lczZfcmVhY3RfcG9kc3Rhd3kvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcblxuY2xhc3MgRGVjQ2FsY3VsYXRvciBleHRlbmRzIENhbGN1bGF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLiR0b29sdGlwID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BvdmVyXCIpO1xuICAgIH1cblxuICAgIHNob3dUb29sdGlwKHRleHQpIHtcbiAgICAgICAgdGhpcy4kdG9vbHRpcC5jaGlsZHJlblsxXS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLiR0b29sdGlwLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIH1cblxuICAgIGhpZGVUb29sdGlwKCkge1xuICAgICAgICB0aGlzLiR0b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH1cblxuICAgIGNoYW5nZU51bWJlcihwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gcGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IGlucHV0LnRleHRDb250ZW50O1xuXG4gICAgICAgIGlucHV0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICBpbnB1dC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgICBpZiAoIWlucHV0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSB0ZW1wVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IGlucHV0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNob3dUb29sdGlwKFwiTmFjacWbbmlqIGFieSBkb2RhxIcgd2FydG/Fm2NpXCIpO1xuICAgIH1cblxuICAgIGFkZChudW1iZXJzQSwgbnVtYmVyc0IpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlcnNBLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBzdW1PZkFycmF5cyA9IG51bWJlcnNBW2ldICsgbnVtYmVyc0JbaV07XG4gICAgICAgICAgICBjb25zdCBzdW0gPSB0eXBlb2YgcmVzdWx0W2ldID09PSBcInVuZGVmaW5lZFwiID8gc3VtT2ZBcnJheXMgOiBzdW1PZkFycmF5cyArIHJlc3VsdFtpXTtcblxuICAgICAgICAgICAgaWYgKHN1bSA+IDkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBzdW0gJSAxMDtcbiAgICAgICAgICAgICAgICByZXN1bHRbaSAtIDFdID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBzdW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cblxuICAgIGNoZWNrTnVtYmVyKCkge1xuICAgICAgICBzdXBlci5jaGVja051bWJlcigpO1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuZmlyc3ROdW1iZXJBcnJheSwgLi4udGhpcy5zZWNvbmROdW1iZXJBcnJheV0uZXZlcnkoKGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsID09PSBcIm51bWJlclwiICYmIGVsIDwgMTAgJiYgZWwgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICBzdXBlci5pbml0RXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVyYXRvci1iYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrTnVtYmVycyA9IHRoaXMuY2hlY2tOdW1iZXIoKTtcbiAgICAgICAgICAgIGlmIChjaGVja051bWJlcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCgpO1xuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIH1cblxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5ZTU1ODk1MTZmMjg2OTRiZGI4XCIpIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJEZWNDYWxjdWxhdG9yIiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsIiR0b29sdGlwIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInNob3dUb29sdGlwIiwidGV4dCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZVRvb2x0aXAiLCJyZW1vdmUiLCJjaGFuZ2VOdW1iZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRlbXBWYWx1ZSIsInRleHRDb250ZW50IiwiY29udGVudEVkaXRhYmxlIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtYmVyc0EiLCJudW1iZXJzQiIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzdW1PZkFycmF5cyIsInN1bSIsImNoZWNrTnVtYmVyIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwiZXZlcnkiLCJlbCIsImluaXRFdmVudHMiLCJjaGVja051bWJlcnMiLCJ1cGRhdGVSZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9