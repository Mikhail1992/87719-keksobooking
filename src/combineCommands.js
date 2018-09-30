'use strict';
const version = require(`./version`);
const help = require(`./help`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);
const undefinedCommand = require(`./undefined`);

module.exports = function (argument) {
  switch (argument) {
    case `--version`:
      version.execute();
      break;
    case `--help`:
      help.execute();
      break;
    case `--author`:
      author.execute();
      break;
    case `--license`:
      license.execute();
      break;
    case `--description`:
      description.execute();
      break;
    default:
      undefinedCommand.execute();
      help.execute();
      process.exit(1);
      break;
  }
};
