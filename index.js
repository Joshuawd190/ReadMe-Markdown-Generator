// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { rejects } from 'assert';
import { resolve } from 'path';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
    validate: (projectInput) =>
      projectInput ? true : console.log('Please enter your project name!'),
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Required)',
    validate: (projectInput) =>
      projectInput ? true : console.log('Please enter your GitHub username!'),
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email? (Required)',
    validate: (projectInput) =>
      projectInput ? true : console.log('Please enter your email'),
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: (projectDescInput) =>
      projectDescInput
        ? true
        : console.log('Please enter your project description!'),
  },
  {
    type: 'confirm',
    name: 'confirmLink',
    message: 'Would you like to add a link to the deployed application?',
    default: true,
  },
  {
    type: 'input',
    name: 'link',
    message: 'Provide a link to the deployed application.',
    when: ({ confirmLink }) => (confirmLink ? true : false),
  },
  {
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Would you like to add a features section?',
    default: true,
  },
  {
    type: 'input',
    name: 'features',
    message: 'Provide a description of your features.',
    when: ({ confirmFeatures }) => (confirmFeatures ? true : false),
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide instuctions on installation (Required)',
    validate: (input) =>
      input
        ? true
        : console.log('Please enter your project installation instructions!'),
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your project used? (Required)',
    validate: (input) =>
      input ? true : console.log('Please enter usage information'),
  },
  {
    type: 'confirm',
    name: 'screenshot',
    message:
      'Would you like to add a screenshot? (Add file to assets/images in your project directory first!)',
    default: true,
  },
  {
    type: 'input',
    name: 'screenshotAlt',
    message: 'Provide an alt text for your image.',
    when: ({ screenshot }) => (screenshot ? true : false),
  },
  {
    type: 'input',
    name: 'screenshotFile',
    message: 'Provide an file name for your image. (Must be exact)',
    when: ({ screenshot }) => (screenshot ? true : false),
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Credits (Required)',
    validate: (input) =>
      input ? true : console.log('Please enter credits information'),
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['None', 'MIT', 'GNU GPLv3', 'Unlicense', 'Apache License 2.0'],
  },
  {
    type: 'confirm',
    name: 'confirmContributing',
    message: 'Would you like to add a Contributing section?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Would you like to add a features section?',
    default: true,
  },
  {
    type: 'input',
    name: 'features',
    message: 'Provide a description of your features.',
    when: ({ confirmFeatures }) => (confirmFeatures ? true : false),
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}`, data, (err) => {
      if (err) reject(err);
      resolve({
        ok: true,
        message: 'File created.',
      });
    });
  });
}

function inquirerPrompt() {
  return inquirer.prompt(questions);
}
// TODO: Create a function to initialize app
function init() {
  inquirerPrompt()
    .then((questionData) => generateMarkdown(questionData))
    .then((data) => {
      return writeToFile('README.md', data);
    })
    .then((response) => {
      console.log(response);
      console.log('All done! Check /dist folder for your finished file.');
    });
}

// Function call to initialize app
init();
