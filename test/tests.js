// IMPORT MODULES under test here:
import { add } from '../calculations.js';

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
