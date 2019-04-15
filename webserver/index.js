'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
let server = null;
app.use(bodyParser.json());

/**
 * Middelware CORS
 */


app.use((req, res, next) => {
  const accessControlAllowMethods = [
    'POST', 'GET', 'OPTIONS', 'PATCH', 'PUT',
  ];
  const accessControlAllowHeaders = [
    'Content-Type', 'Authorization', 'On-behalf-of', 'x-sg-elas-acl',
  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credential', 'true');
  res.header('Acces-Control-Allow-Methods', accessControlAllowMethods.join(','));
  res.header('Access-Control-Allow-Headers', accessControlAllowHeaders.join(','));
  /* res.header('Access-Control-Expose-Headers', accessControlAllowHeaders.join(',')); */
  next();
});

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



