// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license) {
    if (license === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'Apache') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'Mozilla') {
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else if (license === 'Boost') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
  if (license) {
    if (license === 'MIT') {
      licenseLink = '[The MIT License](https://opensource.org/license/mit/)'
    } else if (license === 'Apache') {
      licenseLink = '[Apache 2.0 License](https://opensource.org/license/apache-2-0/)'
    } else if (license === 'Mozilla') {
      licenseLink = '[Mozilla Public 2.0 License](https://opensource.org/license/mpl-2-0/)'
    } else if (license === 'Boost') {
      licenseLink = '[Boost Software License 1.0](https://opensource.org/license/bsl1-0-html/)'
    }
    
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license !== 'None') {
    licenseSection = `
## License
  This application is covered by the ${renderLicenseLink(license)}
    `
  } 
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}  
  
${renderLicenseSection(data.license)}

## Contributing
  ${data.credits}

## Tests
  ${data.tests}

## Questions
  Click this link to find me on Github: [${data.username}](https://github.com/${data.username})\n 
  Please email with any questions about this project: ${data.email} 
`;
}

module.exports = generateMarkdown;
