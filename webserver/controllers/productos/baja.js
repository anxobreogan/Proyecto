'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function borrarProducto(req, res, next) {

  const connection = await mysqlPool.getConnection();

  // console.log(connection);

  try {

    const { idproducto } = req.params;

    await connection.query('DELETE FROM cesta');
    await connection.query(`DELETE FROM producto WHERE idproducto=${idproducto}`);

    res.status(204).send('Todo ok');
    connection.release();
  } catch (e) {
    res.status(400).send('ha habido un error');
  }
}

module.exports = borrarProducto;


