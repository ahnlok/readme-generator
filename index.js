// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// License Variables
const apache = "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).";
const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";

// TODO: Create an array of questions for user input
// const questions = [];
const questions = [
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
];
// function to write new ReadMe file
function init() {
    inquirere.prompt(questions).then((reponse) => {
        console.log(response);

        const dynamicString = generateMarkdown(response);
        
        fs.writeFile("goodreadme.md", dynamicString, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully generated new README.md file");
            }
        });
    });
}

init();
