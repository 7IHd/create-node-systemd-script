/*
 * command-line user interaction
 */
'use strict';

const inquirer = require('inquirer');

module.exports = {
  askServiceName: () => {
    const questions = [
      {
        name: 'servicename',
        type: 'input',
        message: 'Enter the service name:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your service name.';
          }
        },
      },
      {
        name: 'port',
        type: 'input',
        message: 'Enter the port number for the service:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the port number for the service.';
          }
        },
      },
      {
        name: 'serverjs',
        type: 'input',
        message: 'Enter the working directory for your service:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter working directory for your service:';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
