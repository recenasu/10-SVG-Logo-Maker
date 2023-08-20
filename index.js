// Define variable to import the "fs" module to enable interaction with the file system
const fs = require('fs');

// Define variable to include the "inquirer" npm module
const inquirer = require('inquirer');

// Define global variables for the selected shape and icon.
var icon = "";
var shape = "";

// Define shape objects
const circleShape = {
    name: "Circle",
    icon: "circle shape",
}

const triangleShape = {
    name: "Triangle",
    icon: "triangle shape",
}

const squareShape = {
    name: "Square",
    icon: "square shape",
}

// Inquirer prompts. The 'key' is the 'name' property. The 'value' is the string value entered by the user.
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
                circleShape.name,
                triangleShape.name,
                squareShape.name,
            ],
        },
        {
            type: 'input',
            message: 'Enter a color keyword or a hex value for the shape color:',
            name: 'logoShapeColor',
        },
    ])
    .then((response) => {

        // Set the "icon" and "shape" variables based on selection.
        switch (response.logoShape) {
            case circleShape.name:
                icon = circleShape.icon;
                shape = circleShape.name;
                break;
            case triangleShape.name:
                icon = triangleShape.icon;
                shape = triangleShape.name;
                break;
            case squareShape.name:
                icon = squareShape.icon;
                shape = squareShape.name;
                break;
            default:
                icon = "NA";
                shape = "NA";
        }

        // Define variable for creating the logo.svg file.
        // TO DO: refer to some function
        // TO DO: remember 300x200 requirements

        // TO DO: Generate success message as part of a .then:
        console.log('Generated logo.svg');
        

        // Developer console logs
        console.log(response);
        console.log(icon);
        console.log(shape);
    }
    );