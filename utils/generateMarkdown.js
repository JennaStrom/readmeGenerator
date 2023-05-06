// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license) {
    if (license === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'Apache') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
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
      licenseLink = '[Apache 2.0 License}(https://opensource.org/license/apache-2-0/)'
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
  ${renderLicenseLink(license)}
    `
  } 
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
# ${data.title}

## Description
  ${data.description}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
