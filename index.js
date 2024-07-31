// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
inquirer
    .prompt([    
    {
        message:"Enter your Title",
        name: "Title",
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
        name: "Description",
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
        name: "Install",
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
        name: "Usage",
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
        name: "License",
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
        name: "Contributing",
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
        name: "Test",
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
        name: "Questions",
        validate: questions => {
            if(questions){
                return true;
            } else {
                console.log('You must enter a username.');
                return false;
            }
        }
    }
]) 
.then((response) => {
    const mdPageContent = generateMarkdown(response);

    // TODO: Create a function to write README file
    fs.writeFile('readMe.md', mdPageContent, (err) => 
        err ? console.log(err) : console.log('ReadMe has been successfully created!')
    );
});



// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();
