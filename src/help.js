'use strict';
const colors = require(`colors`);
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
      ${colors.grey(`--${this.name}`)} — ${this.description.green};
      ${colors.grey(`--${version.name}`)} — ${version.description.green};
      ${colors.grey(`--${author.name}`)} — ${author.description.green}
      ${colors.grey(`--${license.name}`)} — ${license.description.green}
      ${colors.grey(`--${description.name}`)} — ${description.description.green}
    `);
  }
};
