// This class is used by the index.js file to render the SVG file contents when a Square is selected for the logo shape.

// Define variable for Shape constructor from shape.js containing the common variables.
const Shape = require('./shape.js');

class Square extends Shape {
    constructor(logoShapeColor, logoTextColor, logoText) {
        super(logoShapeColor, logoTextColor, logoText)
    }
    
    render () {
        return `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"><rect x="60" y="20" width="60%" height="80%" fill="${this.logoShapeColor}"/>
        <text x="50%" y="50%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" fill="${this.logoTextColor}" text-anchor="middle" dominant-baseline="middle">${this.logoText}</text>      </svg>`;
    }
}

// Export the Square constructor for use by other files
module.exports = Square;