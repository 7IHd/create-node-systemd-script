/*
 * basic file management
 */
'use strict';

const fs = require('fs'),
  path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    // application available globally... process.cwd()
    return path.basename(process.cwd());
  },
  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },
};
