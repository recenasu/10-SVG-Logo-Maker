// Define variable to import the Circle class from the circle.js file
const Circle = require('./circle');

// This tests the output of the Circle class render() function.
describe('Circle', () => {
    
    //Identify the expected output of the test and the test function. 
    test('should render a string containing SVG elements', () => {

        // Create test variables to hold test values
        let logoShapeColor = "blue";
        let logoTextColor = "yellow";
        let logoText = "ABC";

        // Create a test variable to hold the expected result
        const expectedSVG = `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"> <circle cx="50%" cy="50%" r="80" fill="${logoShapeColor}"/> <text x="50%" y="60%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" text-anchor="middle" fill="${logoTextColor}">${logoText}</text></svg>`;

        // Create a test instance of the Circle class. 
        const circle = new Circle(
            logoShapeColor,
            logoTextColor,
            logoText
            );

        // Execute the test. expectedSVG should equal circle.render().
expect(circle.render()).toEqual(expectedSVG);        
    });
});