// This class is used by the shape.js file to render the dynamic portion of the SVG file contents when a Circle is selected for the logo shape.
class Circle {
    constructor(logoShapeColor, logoTextColor, logoText) {
        this.logoShapeColor = logoShapeColor;
        this.logoTextColor = logoTextColor;
        this.logoText = logoText;
    }

    render() {
        return `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"> <circle cx="50%" cy="50%" r="80" fill="${this.logoShapeColor}"/> <text x="50%" y="60%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text></svg>`;
    }

}

// Export the Circle constructor for use by other files
module.exports = Circle;