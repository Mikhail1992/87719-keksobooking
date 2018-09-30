'use strict';
const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);

module.exports = {
  name: `help`,
  description: `Shows all commands`,
  execute() {
    console.log(`
      Доступные команды:
      --${this.name} — ${this.description};
      --${version.name} — ${version.description};
      --${author.name} — ${author.description}
      --${license.name} — ${license.description}
      --${description.name} — ${description.description}
    `);
  }
};
