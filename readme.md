DEMO: https://decimal-calculator-patryk-pi.netlify.app/

Decimal Calculator built on the bases of pre-prepared Calculator and Binary Calculator ES6 classes. Binary and Decimal calculators are extending the Calculator Class.

Calculator is accepting only digits from 0-9. It's collecting data in 2 arrays, and showing the result in the 3rd one. 
Decimal calculator consists of the following methods:
 - changeNumber - allows to change numbers in the input fields - fields are being cleared on focus for better UX, in case of no change - previous value is restored
 - add - returns the result array as a result of adding 2 different arrays. Elements of the arrays are being added from the last element in order to be able to move to another index the rest of values above 10 (like in addition column method)
 - checkNumber - this method is parsing the values entered into the input fields and checking if all the elements are actually numbers from 0 to 9
 - toolTips - methods which are showing and hiding tooltips when necessary
 - initEvents - method is checking if all elements are numbers - and if they are - the result is being added and displayed in the UI. Method is attached to an event handler.

