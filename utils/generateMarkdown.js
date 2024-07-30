// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    `[License](#license)`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    `${licenseInput}`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?


## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

>Install my-project with npm
>
>bash
>npm install my-project
>cd my-project



## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
> md
> ![alt text](assets/images/screenshot.png)

>javascript
>import Component from 'my-project'
>
>function App() {
>  return <Component />
>}


## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).


## Contributing

Contributions are always welcome!

See contributing.md for ways to get started.

Please adhere to this project's code of conduct.


## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.


## Questions
`
};

module.exports = generateMarkdown;
