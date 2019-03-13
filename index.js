'use strict';
require('dotenv').config();
const webServer = require('./webserver');
const httpServerConfig = require('./config/http-server-config');


(async function initApp() {

  try {
    await webServer.listen(httpServerConfig.port);
    console.log(`server running at: ${httpServerConfig.port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}());



