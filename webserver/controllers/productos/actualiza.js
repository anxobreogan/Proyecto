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
    // await connection.query(`UPDATE producto WHERE idproducto=${idproducto}`);

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

module.exports = actualizarProducto;
