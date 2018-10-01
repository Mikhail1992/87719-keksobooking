'use strict';
const commands = require(`./`);

module.exports = function (argument) {
  const command = commands.find((item) => `--${item.name}` === argument);

  if (command) {
    command.execute(commands);
  } else {
    commands.find((item) => item.name === `undef`).execute();
    commands.find((item) => item.name === `help`).execute(commands);
    process.exit(1);
  }
};
