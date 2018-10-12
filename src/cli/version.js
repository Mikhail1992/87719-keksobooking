'use strict';
const packageInfo = require(`../../package.json`);

const colorizeVersion = (version) => {
  const subVersions = version.split(`.`);
  const patch = subVersions[2];
  const minor = subVersions[1];
  const major = subVersions[0];

  return `${major.red}.${minor.green}.${patch.blue}`;
};

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    console.log(`v${colorizeVersion(packageInfo.version)}`);
  }
};
