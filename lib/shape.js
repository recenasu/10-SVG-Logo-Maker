// This class is used to create the SVG file contents

// Define variables for the shape constructors from the different .js files constructing the svg elements based on the user logoShape selection.
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');
var dynamicContent = "";

class Shape {
    constructor(logoText, logoTextColor, logoShape, logoShapeColor) {

        //    Validate the logo text entry
        if (logoText.length > 3) {
            throw new Error('The logo text must be 3 characters or less.');
        }

        // TO DO: Validate the text color entry
        // TO DO: Validate the shape color entry

        // Set variables for user selections using arguments received from 'index.js'.
        this.logoText = logoText;
        this.logoTextColor = logoTextColor;
        this.logoShape = logoShape;
        this.logoShapeColor = logoShapeColor;
        
        // Create new contentsSVG object using the applicable constructor based on the logoshape selection.
        switch (this.logoShape) {
            case "Circle":
                dynamicContent = new Circle(
                    this.logoShapeColor,
                    this.logoTextColor,
                    this.logoText
                );
                break;
            case "Triangle":
                dynamicContent = new Triangle(
                    this.logoShapeColor,
                    this.logoTextColor,
                    this.logoText
                );
                break;
            case "Square":
                dynamicContent = new Square(
                    this.logoShapeColor,
                    this.logoTextColor,
                    this.logoText
                );
                break;
            default:
                dynamicContent = new CircleSVG(
                    this.logoShapeColor,
                    this.logoTextColor,
                    this.logoText
                );
        }
        
    }

    render() {
        return dynamicContent.render();
    }
}

// Export the Shape constructor for use by other files
module.exports = Shape;