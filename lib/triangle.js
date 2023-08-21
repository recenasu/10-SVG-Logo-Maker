// This class is used by the shape.js file to render the dynamic portion of the SVG file contents when a Triangle is selected for the logo shape.
class Triangle {
    constructor(logoShapeColor, logoTextColor, logoText) {
        this.logoShapeColor = logoShapeColor;
        this.logoTextColor = logoTextColor;
        this.logoText = logoText;
    }
    
    render () {
        return `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"><polygon points="30,180 150,20 270,180" fill="${this.logoShapeColor}"/><text x="50%" y="160" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text></svg>`;
    }
}

// Export the Triangle constructor for use by other files
module.exports = Triangle;