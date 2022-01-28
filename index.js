// TODO: Include packages needed for this application

const inquirer = require('inquirer');

/// try to make generate page-template like pg
const generatePage = require('./src/page-template');

const {writeFile} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptReadme = () => {

    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectname',
        message: 'What is the name of your project?',
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          } else {
            console.log('Please enter your project name.');
            return false;
          }
        }
      },
  
      { 
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the description of your project.');
            return false;
          }
        }
      },
       
      {
          type: 'confirm',
          name: 'confirmWebsite',
          message: 'Is your project hosted on a website?',
          default: true
        },

        {
          type: 'input',
          name: 'website',
          message: 'Provide the website.',
          when: ({ confirmWebsite }) => {
            if (confirmWebsite) {
              return true;
            } else {
                console.log('Please provide the website.');
              return false;
            }
          }
        },

        { 
            type: 'input',
            name: 'screenshot',
            message: 'Enter the screenshot for your project. I.e. "<img src="./assets/images/screenshot.png">"',
            validate: screenshotInput => {
              if (screenshotInput) {
                return true;
              } else {
                console.log('Please enter the screenshot for your project.');
                return false;
              }
            }
        }       
    ]);
  };

  promptReadme()
  .then(readmeData => {
    return generatePage(readmeData);
  })
  .then(pageMarkdown => {
    return writeFile(pageMarkdown);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
