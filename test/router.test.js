'use strict';

const request = require(`supertest`);
const assert = require(`assert`);
const express = require(`express`);

const offersStoreMock = require(`./mocks/offers-store-mock`);
const imagesStoreMock = require(`./mocks/images-store-mock`);
const offersRoute = require(`../src/router`)(offersStoreMock, imagesStoreMock);

const app = express();
app.use(`/api/offers`, offersRoute);

describe(`GET /api/offers`, () => {
  it(`get all offers`, async () => {

    const response = await request(app).
      get(`/api/offers`).
      set(`Accept`, `application/json`).
      expect(200).
      expect(`Content-Type`, /json/);

    const offers = response.body.data;
    const offersCondition = offers.length === 10;
    assert.equal(offersCondition, true);
  });

  it(`get all offers?skip=2&limit=20`, async () => {

    const response = await request(app).
      get(`/api/offers?skip=2&limit=20`).
      set(`Accept`, `application/json`).
      expect(200).
      expect(`Content-Type`, /json/);

    const offers = response.body;
    assert.equal(offers.total, 10);
    assert.equal(offers.data.length, 8);
  });

  it(`get all offers with / at the end`, async () => {

    const response = await request(app).
      get(`/api/offers/`).
      set(`Accept`, `application/json`).
      expect(200).
      expect(`Content-Type`, /json/);

    const wizards = response.body;
    assert.equal(wizards.total, 10);
    assert.equal(wizards.data.length, 10);
  });
});

describe(`GET /api/offers/:date`, () => {
  it(`get date offer`, async () => {
    const firstOffer = await request(app).
      get(`/api/offers`).
      set(`Accept`, `application/json`).
      expect(200).
      expect(`Content-Type`, /json/);

    const response = await request(app).
      get(`/api/offers/${firstOffer.body.data[0].date}`).
      set(`Accept`, `application/json`).
      expect(200).
      expect(`Content-Type`, /json/);

    const {date} = response.body;
    const dateStart = new Date().valueOf() - 3600 * 24 * 7;
    const dateEnd = new Date().valueOf();
    const dateCondition = date > dateStart && date < dateEnd;
    assert.equal(dateCondition, true);
  });

  it(`get data from unknown resource`, async () => {
    const date = new Date().valueOf() + 1000;
    return await request(app).
      get(`/api/offers/${date}`).
      set(`Accept`, `application/json`).
      expect(404).
      expect(`Date ${date} not found`).
      expect(`Content-Type`, /html/);
  });
});


describe(`POST api/offers`, () => {
  it(`send offer as json`, async () => {

    const sent = {avatar: `1.jpg`};

    const response = await request(app).
      post(`/api/offers`).
      send(sent).
      set(`Accept`, `application/json`).
      set(`Content-Type`, `application/json`).
      expect(200).
      expect(`Content-Type`, /json/);

    const offer = response.body;
    assert.deepEqual(offer, sent);
  });

  it(`send offer without avatar`, async () => {

    const response = await request(app).
      post(`/api/offers`).
      send({}).
      set(`Accept`, `application/json`).
      set(`Content-Type`, `application/json`).
      expect(400).
      expect(`Content-Type`, /json/);

    const error = response.body;
    assert.equal(error, `Field name "avatar" is required!`);
  });

  it(`send offer as multipart/form-data`, async () => {

    const authorAvatar = `1.jpg`;

    const response = await request(app).
      post(`/api/offers`).
      field(`avatar`, authorAvatar).
      set(`Accept`, `application/json`).
      set(`Content-Type`, `multipart/form-data`).
      expect(200).
      expect(`Content-Type`, /json/);


    const offer = response.body;
    assert.deepEqual(offer, {avatar: authorAvatar});
  });
  it(`send offer with avatar as multipart/form-data`, async () => {

    const authorAvatar = `1.jpg`;

    const response = await request(app).
      post(`/api/offers`).
      field(`avatar`, authorAvatar).
      attach(`avatar`, `test/fixtures/1.jpg`).
      set(`Accept`, `application/json`).
      set(`Content-Type`, `multipart/form-data`).
      expect(200).
      expect(`Content-Type`, /json/);


    const offer = response.body;
    assert.deepEqual(offer, {avatar: `${authorAvatar}`});
  });

});
