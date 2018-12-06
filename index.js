'use strict';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./lib/inquirer');

clear();

console.log(
  chalk.yellow(figlet.textSync('NSS Creator', {horizontalLayout: 'full'})),
);

const run = async () => {
  const servicename = await inquirer.askServiceName();
  console.log(servicename);
};

run();
