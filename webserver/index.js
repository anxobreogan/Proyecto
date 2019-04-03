'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
let server = null;
app.use(bodyParser.json());


//rutas.

app.use('/api', routes.accountRouter);


/**
  * @param {Number} port;
 */
async function listen(port) {
  if (server === null) {
    server = await app.listen(port);
  } else {
    console.log('Cant listen, server already initialized');
  }
}

async function close() {
  if (server) {
    await server.close();

    server = null;
  } else {
    console.error('Cant close a non started server');
  }
}

module.exports = {

  listen,
  close,
};



