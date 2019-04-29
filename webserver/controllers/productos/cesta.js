'use strict';

// const mysql = require('mysql2');
const mysqlPool = require('../../../databases/mysql-pool');


async function addCesta(req, res, next) {
  const copia = { ...req.body };


  const connection = await mysqlPool.getConnection();
  try {

    await connection.query('INSERT INTO  cesta set ?', copia);


    res.status(200).send(copia);
    connection.release();
  } catch (e) {
    res.status(400).send('ha habido un error');
  }
}
module.exports = addCesta;
