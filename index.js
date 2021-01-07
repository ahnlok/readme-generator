// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description for your project?",
        name: "description",
    },  
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },  
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },  
    {
        type: "list",
        message: "What licesne do you like to use?",
        name: "license",
        choices: ["MIT", "ISC", "Microsoft Public License", "Open Software License", "Mozilla Public License"]
    },
])
.then((response) => {
    console.log(response);
    fs.appendFile("user.json", JSON.stringify(response), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your README choices is saved");
        }
    });
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
