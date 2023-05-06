// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Description of project?",
            name: "description"
        },
        {
            type: "list",
            message: "Select your license?",
            choices: [
                'None',
                'MIT',
                'Apache'
            ],
            name: "license"
        },

    ])
        .then((response) => fs.writeFile('README.md', generateMarkdown(response), (err) => err ? console.error(err) : console.log('Commit logged!')
        ))
}

// Function call to initialize app
init();
