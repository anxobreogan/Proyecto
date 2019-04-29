'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function filtrarPorUser(req, res, next) {

  const hola = req.params.uuid;


  /*console.log(hola);*/

  const connection = await mysqlPool.getConnection();
  const sql = (`SELECT * FROM producto WHERE uuid ='${hola}'`);
  /*'SELECT * FROM users WHERE id = ?', [userId]*/

  /*'SELECT * FROM `books` WHERE `author` = ?', ['David']*/

  /*INSERT INTO  producto set ? ', copia*/

  await connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.log(error.message);
    }
    console.log(results);
    res.status(200).send(results);
  });

  /*res.send(results).status();*/

}

module.exports = filtrarPorUser;

/*
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
*/