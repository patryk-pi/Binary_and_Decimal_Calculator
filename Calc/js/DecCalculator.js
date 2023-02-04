import Calculator from "./Calculator";

class DecCalculator extends Calculator {

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


}

export default DecCalculator;