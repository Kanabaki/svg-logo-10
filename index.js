//Packages needed for App: Jest, Inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes"); // might have to import an object


// Array of prompts for user input
const shapePrompts = [
    {
        type: "input",
        message:"Enter up to 3 characters for your logo: ",
        name: "logoName",
    },
    {
type: "input",
message: `Text Color
Enter a color keyword ie.orange OR a Hexadecimal number for your text: `,
name: "textColor"
    },
    {
        type: "list",
        message:"Choose a shape:",
        name: "shapeChoice",
        choices: ["circle","triangle","square"]
    },
    {
        type: "input",
        message: `Shape Color
Enter a color keyword ie.yellow OR a Hexadecimal number for your shape: `,
        name: "textColor"
            },
];

// Function that writes logo.svg ================================================
function writeToFile(writingShape) {
    fs.writeFile("logo.svg", writingShape, (err) => {
        if (err)
        console.log(err);
    else{
        console.log("Generated logo.svg")
    }
    });
};

// Initializing the app =========================================================
function init() {
    inquirer
    .prompt(shapePrompts)
    .then((shapeData) => {
        if ( `${Circle}`) {
            
        }
        const importedShape = genShapes(shapeData) // genShapes is not defined
        writeToFile(importedShape)
})

}

// Function call to initialize app 
init();