// This class is used to hold the common arguments and validate them. The individual shape classes are children to this class.

class Shape {
    constructor(logoShapeColor, logoTextColor, logoText) {

        //    Validate the logo text entry
        if (logoText.length > 3) {
            throw new Error('The logo text must be 3 characters or less.');
        }

        // TO DO: Validate the text color entry
        // TO DO: Validate the shape color entry

        // Set variables for user selections using arguments received from 'index.js'.
        this.logoShapeColor = logoShapeColor;
        this.logoTextColor = logoTextColor;
        this.logoText = logoText;               
        
    }

}

// Export the Shape constructor for use by other files
module.exports = Shape;