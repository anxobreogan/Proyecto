'use strict';

// const mysql = require('mysql2');
const cloudinary = require('cloudinary');
const mysqlPool = require('../../../databases/mysql-pool');




const cloudName = process.env.CLOUDINARI_CLOUD_NAME;
const apiKey = process.env.CLOUDINARI_API_KEY;
const apiSecret = process.env.CLOUDINARI_API_SECRET;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

// async function altaProducto(req, res, next) {
//   const copia = { ...req.body };


//   const connection = await mysqlPool.getConnection();
//   try {
//     await connection.query('INSERT INTO  producto set ?', copia);

//     res.status(200).send(copia);
//     connection.release();
//   } catch (e) {
//     res.status(400).send('ha habido un error');
//   }
// }


async function altaProducto(req, res, next) {

  const { file } = req;

  const { producto, precio, descripcioncorta, descripcioncompleta, uuid, idlocalizacion } = req.body;

  try {
    if (!file.buffer) {
      return res.status(400).send();
    }

    cloudinary.v2.uploader.upload_stream({

      resource_type: 'raw',
      width: 200,
      height: 200,
      format: 'png',
      crop: 'limit',
    }, async (error, result) => {
      if (error) {
        return res.status(400).send(error);
      }
      const
        {
          secure_url: secureUrl,
        } = result;

      console.log(result);
      const connection = await mysqlPool.getConnection();
      await connection.query(`INSERT INTO producto SET image_url = '${secureUrl}',
    producto= '${producto}', precio = '${precio}', descripcioncorta = '${descripcioncorta}', descripcioncompleta = '${descripcioncompleta}', uuid = '${uuid}', idlocalizacion = '${idlocalizacion}'`);
      connection.release();
      return res.status(204).send();
    }).end(file.buffer);
  } catch (error) {
    return res.status(500).send(error.message);
  }

}




module.exports = altaProducto;
