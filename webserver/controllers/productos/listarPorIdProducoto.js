'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function filtrarPorProducto(req, res, next) {

  const { idproducto } = req.params;


  console.log(idproducto);

  const connection = await mysqlPool.getConnection();
  const sql = (`SELECT * FROM producto WHERE idproducto ='${idproducto}'`);


  await connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.log(error.message);
    }
    console.log(results);
    res.status(200).send(results);
  });



}

module.exports = filtrarPorProducto;
