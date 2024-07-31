// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [    
    {
        message:"Enter your Title",
        name: "title",
        validate: title => {
            if(title){
                return true;
            } else {
                console.log('You must enter a title.');
                return false;
            }
        }
    },
    {
        message:"Enter your Description",
        name: "description",
        validate: description => {
            if(description){
                return true;
            } else {
                console.log('You must enter a description.');
                return false;
            }
        }
    },
    {
        message:"Enter your Installation instructions",
        name: "dnstall",
        validate: install => {
            if(install){
                return true;
            } else {
                console.log('You must enter a install.');
                return false;
            }
        }
    },
    {
        message:"Enter your Usage content",
        name: "usage",
        validate: usage => {
            if(usage){
                return true;
            } else {
                console.log('You must enter a usage.');
                return false;
            }
        }
    },
    {
        type: "list",
        message:"Choose your License",
        name: "license",
        choices: ["Artistic License 2.0", "ISC", "MIT", "PostgreSQL License", "The Unlicense"],
        validate: license => {
            if(license){
                return true;
            } else {
                console.log('You must enter a license.');
                return false;
            }
        }
    },
    {
        message:"Enter your Contribution credits",
        name: "contributing",
        validate: contributing => {
            if(contributing){
                return true;
            } else {
                console.log('You must enter a contributing.');
                return false;
            }
        }
    },
    {
        message:"Enter your test descriptions",
        name: "test",
        validate: test => {
            if(test){
                return true;
            } else {
                console.log('You must enter a test.');
                return false;
            }
        }
    },
    {
        message:"Provide your GitHub username",
        name: "questions",
        validate: questions => {
            if(questions){
                return true;
            } else {
                console.log('You must enter a username.');
                return false;
            }
        }
    }
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data) , (err) => {
        err ? console.log(err) : console.log('ReadMe has been successfully created!')
    });

};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then((data) => {
                const fileName = "README(test).md";
                writeToFile(fileName, data);
            })
};

// Function call to initialize app
init();
