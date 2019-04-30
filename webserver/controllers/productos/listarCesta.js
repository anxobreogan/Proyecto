'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function listarCesta(req, res, next) {


  const connection = await mysqlPool.getConnection();
  const sql = ('SELECT producto.producto,producto.precio, cesta.uui2 FROM producto INNER JOIN cesta ON cesta.idproducto2=producto.idproducto');

  await connection.query(sql, (error, results, fields) => {
    if (error) {
      return console(error.message);
    }
    console.log(results);
    res.status(200).send(results);
  });
}

module.exports = listarCesta;
