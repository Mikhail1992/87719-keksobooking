'use strict';

const Cursor = require(`./cursor-mock`);
const offersGenerator = require(`../../src/generateEntity`);

class OfferStoreMock {
  constructor(data) {
    this.data = data;
  }

  async getOffer(date) {
    return this.data.filter((it) => it.date === parseInt(date, 10))[0];
  }

  async getAllOffers() {
    return new Cursor(this.data);
  }

  async save() {
    return {
      insertedId: 42
    };
  }

}

module.exports = new OfferStoreMock(offersGenerator.getData(10));
