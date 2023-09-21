//Packages needed for App: Jest, Inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes"); // might have to import an object


// Array of prompts for user input
const shapePrompts = [
    {
        type: "input",
        message:"Enter up to 3 characters for your logo: ",
        name: "text",
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
        name: "shapeColor"
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
    .then((answers) => {
        const {shapeChoice,text, textColor, shapeColor} = answers;
        console.log(answers);
        if ( shapePrompts.shapeChoice == "circle" || "Circle") {
            const circleInit = new Circle(shapeChoice,text, textColor, shapeColor);
            writeToFile(circleInit.render())
            
            console.log("generated circleInit")
        } else {
            console.log("error generating circle")
        }
        // continue shapes !!!!!!!!
       
})

}

// Function call to initialize app 
init();