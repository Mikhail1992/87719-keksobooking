'use strict';
const assert = require(`assert`);
const generateEntity = require(`../src/generateEntity`);

describe(`Check random data`, () => {
  it(`should matches regular expression`, () => {
    assert.equal(generateEntity().author.avatar.match(/https:\/\/robohash.org\/\d.jpg/).length, 1);
  });

  it(`should return array element`, () => {
    const list = [
      `Большая уютная квартира`,
      `Маленькая неуютная квартира`,
      `Огромный прекрасный дворец`,
      `Маленький ужасный дворец`,
      `Красивый гостевой домик`,
      `Некрасивый негостеприимный домик`,
      `Уютное бунгало далеко от моря`,
      `Неуютное бунгало по колено в воде`
    ];
    assert.equal(list.includes(generateEntity().offer.title), true);
  });

  it(`should return two numbers between 300, 900 and 150, 500`, () => {
    const address = generateEntity().offer.address;
    const values = address.split(`,`);
    assert.equal(values[0] >= 300 && values[0] <= 900, true);
    assert.equal(values[1] >= 150 && values[1] <= 500, true);
  });

  it(`should return price from 1000 to 1000000`, () => {
    const price = generateEntity().offer.price;
    assert.equal(price >= 1000 && price <= 1000000, true);
  });

  it(`should return type`, () => {
    const types = [`flat`, `palace`, `house`, `bungalo`];
    const type = generateEntity().offer.type;
    assert.equal(types.includes(type), true);
  });

  it(`should return rooms`, () => {
    const rooms = generateEntity().offer.rooms;
    assert.equal(rooms >= 1 && rooms <= 5, true);
  });

  it(`should return guests`, () => {
    const guests = generateEntity().offer.guests;
    assert.equal(guests >= 1 && guests <= 5, true);
  });

  it(`should return checkin time`, () => {
    const arrTime = [`12:00`, `13:00`, `14:00`];
    const checkin = generateEntity().offer.checkin;
    assert.equal(arrTime.includes(checkin), true);
  });

  it(`should return checkout time`, () => {
    const arrTime = [`12:00`, `13:00`, `14:00`];
    const checkout = generateEntity().offer.checkout;
    assert.equal(arrTime.includes(checkout), true);
  });

  it(`should return features`, () => {
    const features = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
    const generatedFeatures = generateEntity().offer.features;
    assert.deepEqual(generatedFeatures.filter((feature) => !features.includes(feature)), []);
  });

  it(`should return description`, () => {
    assert.equal(generateEntity().offer.description, ``);
  });

  it(`should return photos`, () => {
    const generatedPhotos = generateEntity().offer.photos;
    const photos = [
      `http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
    ];
    assert.equal(generatedPhotos.filter((photo) => photos.includes(photo)).length, 3);
  });

  it(`should return location`, () => {
    const location = generateEntity().location;
    assert.equal(location.x >= 300 && location.x <= 900, true);
    assert.equal(location.y >= 150 && location.y <= 500, true);
    assert.equal(Object.keys(location).length, 2);
  });

  it(`should return date`, () => {
    const date = generateEntity().date;
    const min = new Date().valueOf() - 3600 * 24 * 7;
    const max = new Date().valueOf();
    assert.equal(date >= min && date <= max, true);
  });
});
