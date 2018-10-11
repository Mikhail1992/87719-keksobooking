'use strict';
const combineCommands = require(`./src/combineCommands`);

const params = process.argv.filter((item, index) => index > 1);

combineCommands(params);
