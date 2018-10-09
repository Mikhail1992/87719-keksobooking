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

module.exports = function () {
  const location = {
    x: genetateNumber(300, 900),
    y: genetateNumber(150, 500)
  };

  return {
    author: {
      avatar: `https://robohash.org/${genetateNumber(1, 9)}.jpg`
    },
    offer: {
      title: getRandomValue([
        `Большая уютная квартира`,
        `Маленькая неуютная квартира`,
        `Огромный прекрасный дворец`,
        `Маленький ужасный дворец`,
        `Красивый гостевой домик`,
        `Некрасивый негостеприимный домик`,
        `Уютное бунгало далеко от моря`,
        `Неуютное бунгало по колено в воде`
      ]),
      address: `${location.x}, ${location.y}`,
      price: genetateNumber(1000, 1000000),
      type: getRandomValue([`flat`, `palace`, `house`, `bungalo`]),
      rooms: genetateNumber(1, 5),
      guests: genetateNumber(1, 5),
      checkin: getRandomValue([`12:00`, `13:00`, `14:00`]),
      checkout: getRandomValue([`12:00`, `13:00`, `14:00`]),
      features: getRandomValues([`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`]),
      description: ``,
      photos: shuffle([
        `http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
      ]),
    },
    location,
    date: genetateNumber(new Date().valueOf() - 3600 * 24 * 7, new Date().valueOf())
  };
};
