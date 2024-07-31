// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)]`
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
function generateMarkdown() {
  return `# ${title}
## Description

${description}


## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${install}



## Usage

${usage}


## License




## Tests

${test}


## Questions

[${questions}](https://github.com/${questions})
`
};

module.exports = generateMarkdown();