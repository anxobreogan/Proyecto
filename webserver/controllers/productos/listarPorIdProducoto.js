'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function listarPorProducto(req, res, next) {

  const connection = await mysqlPool.getConnection();

  //console.log(connection);

  try {


    const { idproducto } = req.params;

    console.log(idproducto);



    await connection.query(`SELECT * FROM producto WHERE idproducto=${idproducto}`);






    res.status(204).send('Todo ok');



    connection.release();
  } catch (e) {
    res.status(400).send('ha habido un error');
  }
}

module.exports = listarPorProducto;
