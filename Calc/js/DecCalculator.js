import Calculator from "./Calculator";

class DecCalculator extends Calculator {

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
                result[i - 1] = 1
            } else {
                result[i] = sum
            }
        }

        return result;

    }


    checkNumber() {
        super.checkNumber();
        return [...this.firstNumberArray, ...this.secondNumberArray].every((el) => {
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
                alert("Sprawdź poprawność liczb!")
            }
        });
    }


}

export default DecCalculator;