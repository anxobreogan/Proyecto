'use strict';


const express = require('express');

const multer = require('multer');
const createAccount = require('../controllers/account/create-acount');
const login = require('../controllers/account/login');
const checkJwtToken = require('../controllers/sesion/check-jwttoken');

const activateAccount = require('../controllers/account/activate-acount');
const altaProducto = require('../controllers/productos/alta');
const listarProducto = require('../controllers/productos/listar');
const borrarProducto = require('../controllers/productos/baja');
const filtrarPorUser = require('../controllers/productos/filtrar');
const addCesta = require('../controllers/productos/cesta');
const listarCesta = require('../controllers/productos/listarCesta');
const actualizarProducto = require('../controllers/productos/actualiza');
const porIdProducto = require('../controllers/productos/listarPorIdProducoto');

const accountRouter = express.Router();
const upload = multer();

accountRouter.post('/producto', checkJwtToken, upload.single('file'), altaProducto);
accountRouter.get('/producto/listar', listarProducto);
accountRouter.get('/producto/filtrarPorUser/:uuid', checkJwtToken, filtrarPorUser);
accountRouter.delete('/producto/borrar/:idproducto', borrarProducto);
accountRouter.post('/producto/cesta/:idproducto', addCesta);
accountRouter.get('/producto/cesta/listar', listarCesta);
accountRouter.get('/producto/listarproducto/:idproducto', porIdProducto);
accountRouter.put('/producto/actualizar/:idproducto', actualizarProducto);



accountRouter.post('/account', createAccount);
accountRouter.get('/account/activate', activateAccount);
accountRouter.post('/account/login', login);

module.exports = accountRouter;


