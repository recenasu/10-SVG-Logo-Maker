// This file uses the Inquirer npm module to prompt the user for inputs. The user input "logoShape" is used to execute 1 of 3 classes (Square, Triangle, or Circle) which are children of the Shape class. The Shape class is used to validate the user inputs. The executed class (Square, Triangle, or Circle) renders a string containing the appropriate SVG elements. fs.appendFile is then used to create a new "logo.svg" file from the rendered SVG elements.

// Define variable to import the "fs" module to enable interaction with the file system
const fs = require('fs');

// Define variable to import the "inquirer" npm module for user prompts
const inquirer = require('inquirer');

// Define variables to import the different shape classes contained in other files.
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

// Define an empty global variable. This will be assigned the appropriate shape class (Square, Triangle, or Circle) based on the user selection.
var contentsSVG = "";

// This function executes the program.
function init () {
    
    // Inquirer prompts for the 4 questions. The 'key' is the 'name' property. The 'value' is the string value entered by the user.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 3 characters for your logo:',
            name: 'logoText',
        },
        {
            type: 'input',
            message: 'Enter a color keyword or a hex value for the text color:',
            name: 'logoTextColor',
        },
        {
            type: 'list',
            message: 'Choose a shape for your logo:',
            name: 'logoShape',
            choices: [
                "Circle",
                "Triangle",
                "Square",
            ],
        },
        {
            type: 'input',
            message: 'Enter a color keyword or a hex value for the shape color:',
            name: 'logoShapeColor',
        },
    ])
    .then((response) => {

// This statement assigns a class (Circle, Triangle, or Square) to the contentsSVG variable based on the user logoShape selection. Circle is the default.
        switch (response.logoShape) {
            case "Circle":
                contentsSVG = new Circle(
                    response.logoShapeColor,
                    response.logoTextColor,
                    response.logoText
                );
                break;
            case "Triangle":
                contentsSVG = new Triangle(
                    response.logoShapeColor,
                    response.logoTextColor,
                    response.logoText
                );
                break;
            case "Square":
                contentsSVG = new Square(
                    response.logoShapeColor,
                    response.logoTextColor,
                    response.logoText
                );
                break;
            default:
                contentsSVG = new Circle(
                    response.logoShapeColor,
                    response.logoTextColor,
                    response.logoText
                );
        }
        
        // Generate logo.svg file using the render function of the contentsSVG class. Upon success, print a message to the console.
        fs.appendFile('logo.svg', contentsSVG.render(), (err) => err ? console.error(err) : console.log('Generated logo.svg'));

        
    }
    );
}

init();