'use strict';
const combineCommands = require(`./src/cli/combineCommands`);

const argument = process.argv[2];

combineCommands(argument);
