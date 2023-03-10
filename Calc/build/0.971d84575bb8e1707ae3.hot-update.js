"use strict";
self["webpackHotUpdatewro_fer_w_22_es6_react_podstawy"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* abstract */
class Calculator {
  constructor(selectorName) {
    this.name = selectorName;
    this.$calculatorDOMElement = document.querySelector(selectorName);
    this.firstNumberArray = [];
    this.secondNumberArray = [];
    this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.initEvents();
  }

  /* Abstract method add numbers in two array
   *  @param {array} numberX First number
   *  @param {array} numberY Second number
   *  @return {array}
   */
  add(numberX, numberY) {
    console.error("Powinienes zaimplementować tę metodę w klasie dziedziczącej.");
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }

  /* Abstract method changing number
   *  @param {jQuery element} root Parent element
   */
  changeNumber(root) {
    console.error("Powinieneś zaimplementować tę metodę w klasie dziedziczącej. ");
  }

  /* Method changing Result
   */
  updateResult() {
    const results = this.$calculatorDOMElement.querySelectorAll(".result-bit span");
    this.resultNumberArray.reverse().forEach((number, i) => {
      results[i].innerText = number;
    });
  }

  /* Check what number is set in both numbers and add
   *  @return {string}
   */
  checkNumber() {
    let root = this.$calculatorDOMElement;
    let $firstNumber = root.querySelectorAll(".group-number label:first-child");
    let $secondNumber = root.querySelectorAll(".group-number label:nth-child(2)");
    let $resultNumber = root.querySelectorAll(".group-number .result-bit");
    for (let i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
      this.firstNumberArray[i] = parseInt($firstNumber[j].firstElementChild.innerText);
      this.secondNumberArray[i] = parseInt($secondNumber[j].firstElementChild.innerText);
      this.resultNumberArray[i] = parseInt($resultNumber[j].firstElementChild.innerText);
    }
    this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
  }

  /* Set event click on number
   */
  initEvents() {
    this.$calculatorDOMElement.addEventListener("click", event => {
      if (event.target.parentElement.classList.contains("display-number")) {
        const parentLabel = event.target.parentElement;
        this.changeNumber(parentLabel);
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1bd4d368e5098741a750")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsQ0FDdkI7RUFDSDs7RUFFQTtBQUNGO0VBQ0VFLFVBQVUsR0FBRztJQUNYLElBQUksQ0FBQ04scUJBQXFCLENBQUM4QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLEtBQUssSUFBSTtNQUM1RCxJQUFJQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQ25FLE1BQU1DLFdBQVcsR0FBR0wsS0FBSyxDQUFDQyxNQUFNLENBQUNDLGFBQWE7UUFDOUMsSUFBSSxDQUFDckIsWUFBWSxDQUFDd0IsV0FBVyxDQUFDO01BQ2hDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLGlFQUFleEMsVUFBVTs7Ozs7Ozs7VUMvRXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3JvX2Zlcl93XzIyX2VzNl9yZWFjdF9wb2RzdGF3eS8uL0NhbGMvanMvQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93cm9fZmVyX3dfMjJfZXM2X3JlYWN0X3BvZHN0YXd5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhYnN0cmFjdCAqL1xuY2xhc3MgQ2FsY3VsYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xuICAgIHRoaXMubmFtZSA9IHNlbGVjdG9yTmFtZTtcbiAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JOYW1lKTtcblxuICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xuICAgIHRoaXMuc2Vjb25kTnVtYmVyQXJyYXkgPSBbXTtcbiAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICB9XG5cbiAgLyogQWJzdHJhY3QgbWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxuICAgKiAgQHBhcmFtIHthcnJheX0gbnVtYmVyWCBGaXJzdCBudW1iZXJcbiAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclkgU2Vjb25kIG51bWJlclxuICAgKiAgQHJldHVybiB7YXJyYXl9XG4gICAqL1xuICBhZGQobnVtYmVyWCwgbnVtYmVyWSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIlBvd2luaWVuZXMgemFpbXBsZW1lbnRvd2HEhyB0xJkgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai5cIlxuICAgICk7XG4gICAgcmV0dXJuIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgfVxuXG4gIC8qIEFic3RyYWN0IG1ldGhvZCBjaGFuZ2luZyBudW1iZXJcbiAgICogIEBwYXJhbSB7alF1ZXJ5IGVsZW1lbnR9IHJvb3QgUGFyZW50IGVsZW1lbnRcbiAgICovXG4gIGNoYW5nZU51bWJlcihyb290KSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiUG93aW5pZW5lxZvCmyB6YWltcGxlbWVudG93YcSHIHTEmcKFIG1ldG9kxJnCmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai4gXCJcbiAgICApO1xuICB9XG5cbiAgLyogTWV0aG9kIGNoYW5naW5nIFJlc3VsdFxuICAgKi9cbiAgdXBkYXRlUmVzdWx0KCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIucmVzdWx0LWJpdCBzcGFuXCJcbiAgICApO1xuICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkucmV2ZXJzZSgpLmZvckVhY2goKG51bWJlciwgaSkgPT4ge1xuICAgICAgcmVzdWx0c1tpXS5pbm5lclRleHQgPSBudW1iZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKiBDaGVjayB3aGF0IG51bWJlciBpcyBzZXQgaW4gYm90aCBudW1iZXJzIGFuZCBhZGRcbiAgICogIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGNoZWNrTnVtYmVyKCkge1xuICAgIGxldCByb290ID0gdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XG4gICAgbGV0ICRmaXJzdE51bWJlciA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5ncm91cC1udW1iZXIgbGFiZWw6Zmlyc3QtY2hpbGRcIik7XG4gICAgbGV0ICRzZWNvbmROdW1iZXIgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5ncm91cC1udW1iZXIgbGFiZWw6bnRoLWNoaWxkKDIpXCJcbiAgICApO1xuICAgIGxldCAkcmVzdWx0TnVtYmVyID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyb3VwLW51bWJlciAucmVzdWx0LWJpdFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAkZmlyc3ROdW1iZXIubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcbiAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KCRmaXJzdE51bWJlcltqXS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQpO1xuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVtpXSA9IHBhcnNlSW50KCRzZWNvbmROdW1iZXJbal0uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJUZXh0KTtcbiAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCgkcmVzdWx0TnVtYmVyW2pdLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXN1bHROdW1iZXJBcnJheSA9IHRoaXMuYWRkKFxuICAgICAgdGhpcy5maXJzdE51bWJlckFycmF5LFxuICAgICAgdGhpcy5zZWNvbmROdW1iZXJBcnJheVxuICAgICk7XG4gIH1cblxuICAvKiBTZXQgZXZlbnQgY2xpY2sgb24gbnVtYmVyXG4gICAqL1xuICBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1udW1iZXJcIikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50TGFiZWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5jaGFuZ2VOdW1iZXIocGFyZW50TGFiZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYmQ0ZDM2OGU1MDk4NzQxYTc1MFwiKSJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwiY29uc3RydWN0b3IiLCJzZWxlY3Rvck5hbWUiLCJuYW1lIiwiJGNhbGN1bGF0b3JET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3ROdW1iZXJBcnJheSIsInNlY29uZE51bWJlckFycmF5IiwicmVzdWx0TnVtYmVyQXJyYXkiLCJpbml0RXZlbnRzIiwiYWRkIiwibnVtYmVyWCIsIm51bWJlclkiLCJjb25zb2xlIiwiZXJyb3IiLCJjaGFuZ2VOdW1iZXIiLCJyb290IiwidXBkYXRlUmVzdWx0IiwicmVzdWx0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIm51bWJlciIsImkiLCJpbm5lclRleHQiLCJjaGVja051bWJlciIsIiRmaXJzdE51bWJlciIsIiRzZWNvbmROdW1iZXIiLCIkcmVzdWx0TnVtYmVyIiwibGVuZ3RoIiwiaiIsInBhcnNlSW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRMYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=