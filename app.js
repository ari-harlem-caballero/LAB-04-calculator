
import { add } from './calculations.js';



// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

addButton.addEventListener('click', () => {
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;

    const sum = add(num1, num2);

    addAnswer.textContent = sum;
});