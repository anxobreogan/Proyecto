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
  const sqlActivateQuery = `UPDATE users_activation
  SET verificatedat = '${now.toISOString().substring(0, 19).replace('T', ' ')}'
  WHERE verification_code='${verificationCode}'
  AND verificatedat IS NULL`;

  try {
    const connection = await mysqlPool.getConnection();
    const result = await connection.query(sqlActivateQuery);

    if (result[0].affectedRows === 1) {
      const sqlActivateUserQuery = `UPDATE users u
      JOIN users_activation uv
      ON u.uuid = uv.user_uuid
      AND u.activatedat IS NULL
      AND uv.verification_code = '${verificationCode}'
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
