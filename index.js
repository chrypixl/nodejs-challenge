// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [    
    {
        message:"Enter your Title",
        name: "Title",
        validate: titleInput => {
            if(titleInput){
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
        validate: descriptionInput => {
            if(descriptionInput){
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
        validate: installInput => {
            if(installInput){
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
        validate: usageInput => {
            if(usageInput){
                return true;
            } else {
                console.log('You must enter a usage.');
                return false;
            }
        }
    },
    {
        message:"Enter your License",
        name: "License",
        validate: licenseInput => {
            if(licenseInput){
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
        validate: contributingInput => {
            if(contributingInput){
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
        validate: testInput => {
            if(testInput){
                return true;
            } else {
                console.log('You must enter a test.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
