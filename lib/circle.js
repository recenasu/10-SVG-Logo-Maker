// This class is used by the index.js file to render the SVG file contents when a Circle is selected for the logo shape.

// Define variable to import the Shape class containing the validated variables.
const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(logoShapeColor, logoTextColor, logoText) {
        super(logoShapeColor, logoTextColor, logoText)
    }

    // Create the SVG contents using the inherited variables.
    render() {
        return `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"> <circle cx="50%" cy="50%" r="80" fill="${this.logoShapeColor}"/> <text x="50%" y="60%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text></svg>`;
    }

}

// Export the Circle constructor for use by other files
module.exports = Circle;