'use strict';

// const mysql = require('mysql2');
const mysqlPool = require('../../../databases/mysql-pool');


async function addCesta(req, res, next) {
  //const copia = { ...req.body };
  const copia = { ...req.params };

  const { idproducto } = copia;

  console.log(idproducto);


  const connection = await mysqlPool.getConnection();
  try {

    await connection.query(`insert into cesta (idproducto2,precio,uui2) SELECT idproducto, precio,uuid FROM producto WHERE idproducto=${idproducto}`);



    res.status(200).send(copia);
    connection.release();
  } catch (e) {
    res.status(400).send('ha habido un error');
  }
}
module.exports = addCesta;
