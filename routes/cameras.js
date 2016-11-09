'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/api/cameras', (_req, res, next) => {
  knex('cameras')
    .orderBy('id')
    .then((rows) => {
      const cameras = camelizeKeys(rows);

      res.send(cameras);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
