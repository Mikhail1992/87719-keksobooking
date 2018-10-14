'use strict';

const request = require(`supertest`);
const assert = require(`assert`);

const app = require(`../src/cli/server`).app;

describe(`GET /api/offers`, () => {
  it(`get all offers`, async () => {

    const response = await request(app).
      get(`/api/offers`).
      set(`Accept`, `application/json`).
      expect(200).
      expect(`Content-Type`, /json/);

    const offers = response.body;
    const offersCondition = offers.length > 0 && offers.length <= 10;
    assert.equal(offersCondition, true);
  });

  it(`get data from unknown resource`, async () => {
    return await request(app).
      get(`/api/oneone`).
      set(`Accept`, `application/json`).
      expect(404).
      expect(`Page was not found`).
      expect(`Content-Type`, /html/);
  });
});

describe(`GET /api/offers`, () => {
  it(`get date offer`, async () => {
    const firstOffer = await request(app).
    get(`/api/offers`).
    set(`Accept`, `application/json`);
    const response = await request(app).
      get(`/api/offers/${firstOffer.body[0].date}`).
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
