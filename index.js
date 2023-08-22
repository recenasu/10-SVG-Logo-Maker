// This file uses the Inquirer npm module to prompt the user for inputs. The user input "logoShape" is used to execute 1 of 3 classes (Square, Triangle, or Circle) which are children of the Shape class used to validate the user inputs. The executed class renders a string containing SVG elements. The code in this file then uses fs.appendFile to create a new "logo.svg" file from the rendered SVG elements.

// Define variable to import the "fs" module to enable interaction with the file system
const fs = require('fs');

// Define variable to include the "inquirer" npm module
const inquirer = require('inquirer');

// Define variables for the shape constructors from the different .js files constructing the svg elements based on the user logoShape selection.
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

// Define an emtpy global variable to receive the contents of the SVG file.
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
        
        // Generate logo.svg file
        fs.appendFile('logo.svg', contentsSVG.render(), (err) => err ? console.error(err) : console.log('Generated logo.svg'));

        // TO DO
        // Add validation for entries
        // Add jest testing per the challenge README. Look in the header.js test in the Mini-project for some ideas. Basically, you are testing that the SVG format is returned from the render() method.


    }
    );
}

init();