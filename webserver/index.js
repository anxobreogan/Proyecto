const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
let server = null;

/**
 * 
 * @param {Number} port 
 */
async function listen(port) {

  if (server === null) {

    server = await app.listen(port);
  } else {
    console.log("Can`t listen, server already initialized");
  }
}

async function close() {

  if (server) {

    await server.close();

    server = null;
  } else {
    console.error("Can`t close a non started server");
  }
}

module.exports = {

  listen,
  close,
};



