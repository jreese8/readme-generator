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

        // {
        //   type: 'input',
        //   name: 'table',
        //   message: 'Provide your table of contents.',
        //   when: ({ confirmTable }) => {
        //     if (confirmTable) {
        //       return true;
        //     } else {
        //         console.log('Please provide your table of contents.');
        //       return false;
        //     }
        //   }
        // },

        { 
            type: 'input',
            name: 'installation',
            message: 'Provide the steps needed for installation of your project.',
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('Please provide the steps needed for installation.');
                return false;
              }
            }
        },

        { 
          type: 'input',
          name: 'usage',
          message: 'Provide examples of usage for your project.',
          validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please provide examples of usage for your project.');
              return false;
            }
          }
      },

      { 
        type: 'input',
        name: 'credits',
        message: 'List any collaborators or third-party apps used, if applicable.',
        validate: creditsInput => {
          if (creditsInput) {
            return true;
          } else {
            console.log('No collaborators or third-pary apps entered.');
            return true;
          }
        }
    },

    { 
      type: 'list',
      name: 'license',
      message: 'Choose your license.',
      choices: ['Community License', 'MIT License', 'GNU GPL'],
      validate: licenseList => {
        if (licenseList) {
          return true;
        } else {
          console.log('Please choose your license.');
          return false;
        }
      }
  },

  { 
    type: 'input',
    name: 'contribute',
    message: 'How would you like other developers to contribute?',
    validate: contributeInput => {
      if (contributeInput) {
        return true;
      } else {
        console.log('Please enter how would you like other developers to contribute.');
        return false;
      }
    }
},

{ 
  type: 'input',
  name: 'tests',
  message: 'Provide examples of tests for your project.',
  validate: testsInput => {
    if (testsInput) {
      return true;
    } else {
      console.log('Please provide examples of tests for your project.');
      return false;
    }
  }
},

{
type: 'input',
  name: 'github',
  message: 'Provide your GitHub username.',
  validate: githubInput => {
    if (githubInput) {
      return true;
    } else {
      console.log('Please provide your GitHub username.');
      return false;
    }
  }
},

{
type: 'input',
  name: 'email',
  message: 'Provide your email address.',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('Please provide email address.');
      return false;
    }
  }
},

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
