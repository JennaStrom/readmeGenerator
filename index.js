// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description explaing the what, why, and how of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "usage"
    },
    {
        type: "list",
        message: "Select your license.",
        choices: [
            'None',
            'MIT',
            'Apache',
            'Mozilla',
            'Boost'
        ],
        name: "license"
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credits"
    },
    {
        type: "input",
        message: "Please enter any tests you have created for your application?",
        name: "tests"
    },
    {
        type: "input",
        message: "Please enter your Github username.",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    },

];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => fs.writeFile('README.md', generateMarkdown(response), (err) => err ? console.error(err) : console.log('Readme Generated!')
        ))
}

// Function call to initialize app
init();
