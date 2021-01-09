
// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) =>
  `
    # ${answers.title}
    ## Description: 
    ${answers.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Tests](#tests)
    * [License](#license)
    * [Contributions](#contributions)
    * [Questions](#questions)
 
    # Installation
    ![installation](${answers.image})
    ---
    # Usage
    Here you checkout deployed repository for this project
    <${answers.repo}>
    ---
    # License
    ${answers.license} Copyright (c) [2021] [${answers.name}]
    ---
    # Contact
    Email: <${answers.email}>
    GitHub: <${answers.github}>
    LinkedIn: <${answers.linkedin}>
    ---
    # Contributions
    If you want to be a contributor send me an email to <${answers.email}>
    # Questions
    If you have any questions, please contact the project owner by clicking on the email listed below.  
    <${answers.email}>
  `;
 
module.exports = generateMarkdown;
