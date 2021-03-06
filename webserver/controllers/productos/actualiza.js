'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function actualizarProducto(req, res, next) {

  const connection = await mysqlPool.getConnection();

  // console.log(connection);

  try {

    const { idproducto } = req.params;
    const copia = { ...req.body };

    console.log(copia.precio);

    console.log(idproducto);



    await connection.query('UPDATE producto set ? WHERE idproducto=?', [req.body, idproducto]);


    res.status(204).send('Todo ok');



    connection.release();
  } catch (e) {
    res.status(400).send('ha habido un error');
  }
}

module.exports = actualizarProducto;
