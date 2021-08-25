// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [{}];

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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
