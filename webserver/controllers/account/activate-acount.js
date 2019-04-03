'use strict';

const mysqlPool = require('../../../databases/mysql-pool');

async function activate(req, res, next) {

  const { verification_code: verificationCode } = req.query;

  if (!verificationCode) {
    return res.status(400).json({
      message: 'invalid verification code',
      target: 'verification_code',
    });
  }
  const now = new Date();
  const sqlActivateQuery = `UPDATE verificacion
  SET verificatedat = '${now.toISOString().substring(0, 19).replace('T', ' ')}'
  WHERE verificacioncodigo='${verificationCode}'
  AND verificatedat IS NULL`;

  try {
    const connection = await mysqlPool.getConnection();
    const result = await connection.query(sqlActivateQuery);

    if (result[0].affectedRows === 1) {
      const sqlActivateUserQuery = `UPDATE usuarios u
      JOIN verificacion uv
      ON u.uuid = uv.usuariouuid
      AND u.activatedat IS NULL
      AND uv.verificacioncodigo = '${verificationCode}'
      SET u.activatedat = uv.verificatedat`;

      const resultActivateUser = await connection.query(sqlActivateUserQuery);

      if (resultActivateUser[0].affectedRows === 1) {
        connection.release();
        return res.send('account activate');
      }
    }

    connection.release();
    return res.send('verification code invalid');
  } catch (e) {

    return res.status(500).send(e.message);
  }

}

module.exports = activate;
