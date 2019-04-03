
'use strict';

const bcrypt = require('bcrypt');
const Joi = require('joi');
const sendgridMail = require('@sendgrid/mail');
const uuidV4 = require('uuidv4');
const mysqlPool = require('../../../databases/mysql-pool');


sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

//creamos la función para insertar el usuario en la base de datos.

async function insertUserIntoDatabase(email, password) {

  const securePassword = await bcrypt.hash(password, 10);

  const uuid = uuidV4;
  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');

  console.log('secure password', securePassword);
  console.log('createdAt', createdAt);
  console.log('uuid', uuid);

  const connection = await mysqlPool.getConnection();
  await connection.query('INSERT INTO usuarios SET ?', {
    uuid,
    email,
    password: securePassword,
    createdat: createdAt,
  });
  return uuid;


}
/**
 * 
 * @param {String} uuid 
 * @param {String} verificationCode
 */
async function addVerificationCode(uuid) {

  const verificationCode = uuidV4();

  const now = new Date();

  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
  const sqlQuery = 'INSERT INTO verificacion SET ?';
  const connection = await mysqlPool.getConnection();

  await connection.query(sqlQuery, {
    usuariouuid: uuid,
    verificacioncodigo: verificationCode,
    createdat: createdAt,
  });
  connection.release();
  return verificationCode;
}

async function sendEmailRegistration(userEmail, verificationCode) {
  const msg = {
    to: userEmail,
    from: {
      email: 'prueba@yopmail.com',
      name: 'prueba',
    },
    subject: 'Saludos de prueba',
    text: 'Cuerpo del texto a enviar',
    html: `link de confirmación <a href="${process.env.HTTP_SERVER_DOMAIN}/api/account/activate?verification_code=${verificationCode}">activate it here</a>`,
  };
  const data = await sendgridMail.send(msg);

  return data;
}

async function validateSchema(payload) {
  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  };

  return Joi.validate(payload, schema);
}



async function create(req, res, next) {

  const accountData = { ...req.body };

  try {
    await validateSchema(accountData);

  } catch (e) {
    return res.status(400).send(e);
  }

  const {
    email,
    password,
  } = accountData;

  try {

    /**
     * Crear el usuario mediante post y enviar la respuesta.
     */
    const uuid = await insertUserIntoDatabase(email, password);
    res.status(204).json();
    /**
     * Generar el codigo de verificación y enviar el mail.
     */
    try {
      const verifacationCode = await addVerificationCode(uuid);
      await sendEmailRegistration(email, verifacationCode);
    } catch (e) {
      console.log('sendgrid error', e);
    }
  } catch (e) {
    next(e);
  }
  return 9;
}


module.exports = create;


