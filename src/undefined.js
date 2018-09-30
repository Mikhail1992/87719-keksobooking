'use strict';

module.exports = {
  name: `Undefined command`,
  description: `Shows error message and all commnads`,
  execute() {
    console.error(`
      Неизвестная команда.
    `);
  }
};
