'use strict';
const express = require(`express`);
const app = express();
const offersStore = require(`../store`);
const imagesStore = require(`../images/store`);
const router = require(`../router`)(offersStore, imagesStore);

app.use(express.static(`${__dirname}/../../static`));

app.use(`/api/offers`, router);

const runServer = (port) => {

  port = parseInt(port, 10);

  app.listen(port, () => console.log(`Сервер запущен: http://localhost:${port}`));
};

module.exports = {
  name: `server`,
  description: `Run server`,
  execute(port = 3000) {
    runServer(port);
  },
  app
};
