'use strict';
const assert = require(`assert`);
const {
  getData,
  OFFER_TITLE,
  OFFER_TYPE,
  REGISTER_TIME,
  OFFER_FEATURES,
  OFFER_PHOTOS
} = require(`../src/generateEntity`);

describe(`Check random data`, () => {
  const data = getData()[0];
  it(`should matches regular expression`, () => {
    assert.equal(data.author.avatar.match(/https:\/\/robohash.org\/\d.jpg/).length, 1);
  });

  it(`should return array element`, () => {
    assert.equal(OFFER_TITLE.includes(data.offer.title), true);
  });

  it(`should return two numbers between 300, 900 and 150, 500`, () => {
    const address = data.offer.address;
    const values = address.split(`,`);
    assert.equal(values[0] >= 300 && values[0] <= 900, true);
    assert.equal(values[1] >= 150 && values[1] <= 500, true);
  });

  it(`should return price from 1000 to 1000000`, () => {
    const price = data.offer.price;
    assert.equal(price >= 1000 && price <= 1000000, true);
  });

  it(`should return type`, () => {
    const type = data.offer.type;
    assert.equal(OFFER_TYPE.includes(type), true);
  });

  it(`should return rooms`, () => {
    const rooms = data.offer.rooms;
    assert.equal(rooms >= 1 && rooms <= 5, true);
  });

  it(`should return guests`, () => {
    const guests = data.offer.guests;
    assert.equal(guests >= 1 && guests <= 5, true);
  });

  it(`should return checkin time`, () => {
    const checkin = data.offer.checkin;
    assert.equal(REGISTER_TIME.includes(checkin), true);
  });

  it(`should return checkout time`, () => {
    const checkout = data.offer.checkout;
    assert.equal(REGISTER_TIME.includes(checkout), true);
  });

  it(`should return features`, () => {
    const generatedFeatures = data.offer.features;
    assert.deepEqual(generatedFeatures.filter((feature) => !OFFER_FEATURES.includes(feature)), []);
  });

  it(`should return description`, () => {
    assert.equal(data.offer.description, ``);
  });

  it(`should return photos`, () => {
    const generatedPhotos = data.offer.photos;
    assert.equal(generatedPhotos.filter((photo) => OFFER_PHOTOS.includes(photo)).length, 3);
  });

  it(`should return location`, () => {
    const {location} = data;
    assert.equal(location.x >= 300 && location.x <= 900, true);
    assert.equal(location.y >= 150 && location.y <= 500, true);
    assert.equal(Object.keys(location).length, 2);
  });

  it(`should return date`, () => {
    const date = data.date;
    const min = new Date().valueOf() - 3600 * 24 * 7;
    const max = new Date().valueOf();
    assert.equal(date >= min && date <= max, true);
  });
});
