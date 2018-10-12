'use strict';

const {writeFile, existsSync} = require(`fs`);
const {genetateNumber} = require(`../utils`);
const {getData} = require(`../generateEntity`);

const DEFAULT_PATH = `data.json`;
const RANDOM_DATA = getData(genetateNumber(1, 10));
const DEFAULT_OPTIONS = {encoding: `utf-8`, mode: 0o644};

module.exports = {
  name: `generate`,
  description: `Generate test data`,
  execute: (relativePath = DEFAULT_PATH, data = RANDOM_DATA, options = DEFAULT_OPTIONS) => {
    const filePath = `${process.cwd()}/src/mocks/${relativePath}`;
    const isExists = existsSync(filePath);

    if (isExists) {
      console.log(`File ${filePath} already exists`);
    } else {
      writeFile(filePath, JSON.stringify(data), options, () => {
        console.log(`${data.length} entity созданы и записаны в этот файл: ${filePath}`);
      });
    }
  }
};
