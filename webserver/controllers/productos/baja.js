'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function borrarProducto(req, res, next) {

  const connection = await mysqlPool.getConnection();

  // console.log(connection);

  try {

    const { idproducto } = req.params;

    /*console.log(idproducto);*/

    await connection.query('DELETE FROM cesta');

    await connection.query(`DELETE FROM producto WHERE idproducto=${idproducto}`);


    //   `UPDATE users_activation
    // SET verificatedat = '${now.toISOString().substring(0, 19).replace('T', ' ')}'
    // WHERE verification_code='${verificationCode}'
    // AND verificatedat IS NULL


    res.status(204).send('Todo ok');



    connection.release();
  } catch (e) {
    res.status(400).send('ha habido un error');
  }
}

module.exports = borrarProducto;


/* async function altaProducto(req, res, next) {

  const connection = await mysqlPool.getConnection();
  try {
    await connection.query('INSERT INTO  producto set ?', [req.body]);

    res.status(200).send('terminado con exito');
    connection.release();
  } catch (e) {
    res.status(400).send('ha habido un error');
  }
}

module.exports = altaProducto; */