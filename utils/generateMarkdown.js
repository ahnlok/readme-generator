// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const generateMarkdown = ({ title, description, github, linkedin, email, license }) = {
    const readMeWriteFile = `
    # **${data.title}**
    ## **${data.description}**
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Tests](#tests)
    * [License](#license)
    * [Contributions](#contributions)
    * [Questions](#questions)
 
    # Installation
    ${data.installation}
    # Usage
    ${data.usage}
    # Tests
    ${data.tests}
    # License
    ${data.license}
    # Contributions
    ${data.contributors}
    # Questions
    If you have any questions, please contact the project owner by clicking on the email listed below.  ${data.email}
    
    
  `;
  }
  }
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
