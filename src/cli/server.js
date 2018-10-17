'use strict';
const express = require(`express`);
const app = express();
const router = require(`../router`);

const NOT_FOUND_HANDLER = (req, res, _next) => {
  res.status(404).send(`Page was not found`);
};

const ERROR_HANDLER = (err, req, res, _next) => {
  if (err) {
    console.error(err);
    res.status(err.code || 500).send(err.message);
  }
};

app.use(express.static(`${__dirname}/../../static`));

app.use(`/api/offers`, router);

app.use(NOT_FOUND_HANDLER);

app.use(ERROR_HANDLER);

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
