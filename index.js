'use strict';
const combineCommands = require(`./src/combineCommands`);

const argument = process.argv[2];

combineCommands(argument);
