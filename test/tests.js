// IMPORT MODULES under test here:
import { add, sub, mult } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(4, 9); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('sub two numbers', (expect) => {
    const expected = 15;

    const actual = sub(25, 10);

    expect.equal(actual, expected);
});

test('mult two numbers', (expect) => {
    const expected = 80;

    const actual = mult(4, 20);

    expect.equal(actual, expected);
});