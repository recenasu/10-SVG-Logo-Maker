// This class is used by the shape.js file to render the dynamic portion of the SVG file contents when a Square is selected for the logo shape.
class Square {
    constructor(logoShapeColor, logoTextColor, logoText) {
        this.logoShapeColor = logoShapeColor;
        this.logoTextColor = logoTextColor;
        this.logoText = logoText;
    }
    
    render () {
        return `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"><rect x="60" y="20" width="60%" height="80%" fill="${this.logoShapeColor}"/>
        <text x="50%" y="50%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" fill="${this.logoTextColor}" text-anchor="middle" dominant-baseline="middle">${this.logoText}</text>      </svg>`;
    }
}

// Export the Square constructor for use by other files
module.exports = Square;