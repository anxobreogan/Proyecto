'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function listarProducto(req, res, next) {


  const connection = await mysqlPool.getConnection();
  const sql = ('SELECT * FROM producto ');
  await connection.query(sql, (error, results, fields) => {
    if (error) {
      return console(error.message);
    }
    console.log(results);
    res.status(200).send(results);
  });
}

module.exports = listarProducto;
