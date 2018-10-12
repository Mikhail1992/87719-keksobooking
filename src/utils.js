'use strict';

const genetateNumber = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
};

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

const getRandomValue = (arr) => {
  const value = genetateNumber(0, arr.length - 1);
  return arr[value];
};

const getRandomValues = (arr) => {
  const count = genetateNumber(0, arr.length - 1);
  const item = (acc, iter, list) => {
    if (!iter) {
      return acc;
    }

    const randormElement = list[genetateNumber(0, list.length - 1)];
    return item([...acc, randormElement], iter - 1, list.filter((elem) => elem !== randormElement));
  };
  return item([], count, arr);
};

module.exports = {
  genetateNumber,
  shuffle,
  getRandomValue,
  getRandomValues
};
