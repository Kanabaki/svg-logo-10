//Packages needed for App: Jest, Inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const genShapes = require("./lib/shapes")

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
