'use strict';

const express = require('express');

const accountRouter = express.Router();

accountRouter.post('/account', (req, res, next) => {
  return res.status().send;
});

module.exports = accountRouter;


