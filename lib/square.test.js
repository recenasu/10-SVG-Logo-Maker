// Define variable to import the Square class from the square.js file
const Square = require('./square.js');

// This tests the output of the Square class render() function.
describe('Square', () => {
    
    //Identify the expected output of the test and the test function. 
    test('should render a string containing SVG elements', () => {

        // Create test variables to hold test values
        let logoShapeColor = "blue";
        let logoTextColor = "yellow";
        let logoText = "ABC";
        
        // Create a test variable containing the expected string
        const expectedSVG = `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"><rect x="60" y="20" width="60%" height="80%" fill="${logoShapeColor}"/> <text x="50%" y="50%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" fill="${logoTextColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text></svg>`;

        // Create a test instance of the Square class. 
        const square = new Square(
            logoShapeColor,
            logoTextColor,
            logoText
            );

        // Execute the test. expectedSVG should equal square.render().
expect(square.render()).toEqual(expectedSVG);        
    });
});