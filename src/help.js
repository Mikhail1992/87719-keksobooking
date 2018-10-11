'use strict';

const colors = require(`colors`);

const findCommand = (commands, command) => {
  return commands.find((item) => item.name === command);
};

const getCommandName = (commands, command) => {
  return colors.grey(`--${findCommand(commands, command).name}`);
};

const getCommandDescr = (commands, command) => {
  return findCommand(commands, command).description.green;
};

module.exports = {
  name: `help`,
  description: `Shows all commands`,
  execute(commands) {
    console.log(`
      Доступные команды:
      ${colors.grey(`--${this.name}`)} — ${this.description.green};
      ${getCommandName(commands, `version`)} — ${getCommandDescr(commands, `version`)};
      ${getCommandName(commands, `author`)} — ${getCommandDescr(commands, `author`)}
      ${getCommandName(commands, `license`)} — ${getCommandDescr(commands, `license`)}
      ${getCommandName(commands, `description`)} — ${getCommandDescr(commands, `description`)}
      ${getCommandName(commands, `server`)} — ${getCommandDescr(commands, `server`)}
    `);
  }
};
