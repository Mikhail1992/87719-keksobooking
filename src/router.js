'use strict';

const express = require(`express`);
const router = new express.Router();
const {genetateNumber} = require(`./utils`);
const multer = require(`multer`);
const upload = multer({storage: multer.memoryStorage()});
const jsonParser = express.json();

const data = require(`./generateEntity`).getData(genetateNumber(1, 10));

router.get(``, (req, res) => {
  res.send(data);
});

router.get(`/:date`, (req, res) => {
  const date = req.params.date;
  if (!date) {
    res.status(400);
    res.send(`Name is absent in request`);
  }

  const found = data.find((it) => it.date === +date);
  if (!found) {
    res.status(404);
    res.send(`Date ${date} not found`);
  }

  res.send(found);
});

router.post(``, jsonParser, upload.single(`avatar`), (req, res) => {
  const body = req.body;
  const avatar = req.file;

  if (!Object.keys(body).length && !avatar) {
    res.status(400);
    res.send(`Field name "avatar" is required!`);
  }

  if (avatar) {
    body.author = {avatar: avatar.originalname};
  }

  res.send(body);
});

module.exports = router;
