// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateReadMe = require('./utils/generateMarkdown');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// // License Variables
// const gnu    = "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).";
// const mit    = "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).";
// const isc    = "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).";

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your full name?",
            name: "name",
        },
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
            message: "What is your deployed repo for this project?",
            name: "repo",
        }, 
        {
            type: "input",
            message: "What is your images or gif for the installation guide??",
            name: "image",
        }, 
        {
            type: "input",
            message: "What is your Github URL?",
            name: "github",
        },  
        {
            type: "input",
            message: "What is your LinkedIn URL?",
            name: "linkedin",
        },  
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },  
        {
            type: "list",
            message: "What licensee do you like to use?",
            name: "license",
            choices: ["MIT", "ISC", "GNU GPLv3", "None"]
        },
    ]);
};

const generateMarkdown = (answers) =>
`
# ${answers.title}
## Description: 
### ${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Questions](#questions)
 
# Installation
![installation](${answers.image})
---
# Usage
### Here you checkout deployed repository for this project
<${answers.repo}>
---
# License
### License: ${answers.license} 
### Copyright (c) [2021] [${answers.name}]
---
# Contact
### Email: <${answers.email}>
### GitHub: <${answers.github}>
### LinkedIn: <${answers.linkedin}>
---
# Contributions
### If you want to be a contributor send me an email to <${answers.email}>
# Questions
### If you have any questions, please contact the project owner via email or github listed below.  
### Email: <${answers.email}>
### GitHub: <${answers.github}>
`;
// License selection function
// async function renderLicense(response) {
//     await inquirer.promptUser().then(function(response){
//         return responses = response;
//     });
//     if(response.license === "MIT"){
//       response.license = mit;
//     } else if 
//       (response.license === "GNU GPLv3") {
//       response.license = gnu;
//     } else if (response.license === "ISC") {
//       response.license = isc;
//     } else {
//       response.license = "This project is not licensed."
//     }
//   }
//   renderLicense();
// function to write new ReadMe file
const init = async () => {
    // console.log('sup');
    try {
        const answers = await promptUser();

        const readMe = generateMarkdown(answers);

        await writeFileAsync("goodreadme.md", readMe);

        console.log("Successfully generated your goodreadme.md");
        } catch (err) {
            console.log(err);
        }
    };

init();
// function init() {
//     inquirer.prompt(questions).then((response) => {
//         console.log(response);

//         const dynamicString = generateMarkdown(response);

//         fs.writeFile("goodreadme.md", dynamicString, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Successfully generated new README.md file");
//             }
//         });
//     });
// };

// init();
