const liscenses = require('../assets/Licenses/Licenses');

function renderLicenseBadge(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'GNU GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return liscenses.MIT;
    case 'GNU GPLv3':
      return liscenses.GNUGPL3;
    case 'Unlicense':
      return liscenses.Unlicense;
    case 'Apache License 2.0':
      return liscenses.Apache;
    default:
      return '';
  }
}

function renderLink(data) {
  if (data.link) {
    return `${data.link}
  `;
  } else {
    return '';
  }
}
function renderScreenshot(data) {
  if (data.screenshot) {
    return `![${data.screenshotAlt}](assets/images/${data.screenshotFile})
      `;
  } else {
    return '';
  }
}
function renderFeatures(data) {
  if (data.features) {
    return `## Features
 
  ${data.features}
  
 `;
  } else {
    return '';
  }
}
function renderContributing(data) {
  if (data.confirmContributing) {
    return `## Contributing
 
    [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  
 `;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.name}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ${renderLink(data)}
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}

  ${renderScreenshot(data)}
  ## Credits
  
  ${data.credits}
  
  ## License

  ${renderLicenseSection(data.license)}
  
  ## Badges
  
  ${renderLicenseBadge(data.license)}
  
  ${renderFeatures(data)}

  ${renderContributing(data)}
 
  ##Questions

    You can reach me here with any questions:
    https://github.com/${data.github}
    ${data.email}

`;
}

module.exports = generateMarkdown;
