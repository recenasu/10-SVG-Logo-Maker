// Define variable to import the "fs" module to enable interaction with the file system
const fs = require('fs');

// Define variable to include the "inquirer" npm module
const inquirer = require('inquirer');

// Define variable for Shape constructor from shape.js containing the validated svg file contents.
const Shape = require('./lib/shape.js');

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

        // // Variables for SVG file content variants
        // let circleSVG = `<svg viewBox = "0 0 300 200" xmlns = "http://www.w3.org/2000/svg"> --> <circle cx="50%" cy="50%" r="80" fill="${response.logoShapeColor}"/>
        // <text x="50%" y="60%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" text-anchor="middle" fill="${response.logoTextColor}">${response.logoText}</text></svg>`

        // let squareSVG = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        // <rect x="60" y="20" width="60%" height="80%" fill="${response.logoShapeColor}"/>
        // <text x="50%" y="50%" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" fill="${response.logoTextColor}" text-anchor="middle" dominant-baseline="middle">${response.logoText}</text>      </svg>`

        // let triangleSVG = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="30,180 150,20 270,180" fill="${response.logoShapeColor}"/><text x="50%" y="160" font-family="Arial, Helvetica, sans-serif" font-style="normal" font-size="4em" text-anchor="middle" fill="${response.logoTextColor}">${response.logoText}</text></svg>`

        const contentsSVG = new Shape(response.logoText, response.logoTextColor, response.logoShape, response.logoShapeColor);

        // console.log(contentsSVG.render());

        // Generate logo.svg file
        fs.appendFile('logo.svg', contentsSVG.render(), (err) => err ? console.error(err) : console.log('Generated logo.svg'));

        // TO DO
        // Add validation for entries
        // Add jest testing per the challenge README


    }
    );