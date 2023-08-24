// Define variable to import the Triangle class from the triangle.js file
const Triangle = require('./triangle.js');

// This tests the output of the Triangle class render() function.
describe('Triangle', () => {
    
    //Identify the expected output of the test and the test function. 
    test('should render a string containing SVG elements', () => {

        // Create a test variable containing the expected string
        const expectedSVG = `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"><polygon points="30,180 150,20 270,180" fill="blue"/><text x="50%" y="160" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" text-anchor="middle" fill="yellow">ABC</text></svg>`;

        // Create a test instance of the Triangle class. 
        const triangle = new Triangle(
            'blue',
            'yellow',
            'ABC'
            );

        // Execute the test. expectedSVG should equal triangle.render().
expect(triangle.render()).toEqual(expectedSVG);        
    });
});