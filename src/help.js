'use strict';

const findCommand = (commands, command) => {
  return commands.find((item) => item.name === command);
};

module.exports = {
  name: `help`,
  description: `Shows all commands`,
  execute(commands) {
    console.log(`
      Доступные команды:
      --${this.name} — ${this.description};
      --${findCommand(commands, `version`).name} — ${findCommand(commands, `version`).description};
      --${findCommand(commands, `author`).name} — ${findCommand(commands, `author`).description}
      --${findCommand(commands, `license`).name} — ${findCommand(commands, `license`).description}
      --${findCommand(commands, `description`).name} — ${findCommand(commands, `description`).description}
    `);
  }
};
