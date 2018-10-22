'use strict';
const ValidationError = require(`./errors/validation-error`);

const validate = (data, avatar) => {
  const errors = [];
  if (!Object.keys(data).length && !avatar) {
    errors.push(`Field name "avatar" is required!`);
  }


  if (errors.length > 0) {
    throw new ValidationError(errors);
  }
  return data;
};

module.exports = validate;
