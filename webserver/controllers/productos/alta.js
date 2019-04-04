'use strict';

const mysql = require('mysql2');
const mysqlPool = require('../../../databases/mysql-pool');


/* function insertarProducto(producto, precio) {

  const connection = mysqlPool.getConnection();

  connection.query('INSERT INTO producto SET ?', {
    producto,
    precio,
  });



  console.log(producto + precio);
} */

async function altaProducto(req, res, next) {

  const connection = await mysqlPool.getConnection();

  await connection.query('INSERT INTO  producto set ?', [req.body]);

  res.status(200).send('terminado con exito');

  /* const productData = { ...req.body };

  const { producto, precio } = productData;


  res.status(200).send('hola'); */
  /* insertarProducto(producto, precio); */
  /* console.log(productData) */
}
module.exports = altaProducto;
