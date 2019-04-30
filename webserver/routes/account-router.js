'use strict';

const express = require('express');
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

const accountRouter = express.Router();
/* accountRouter.post('/login/{id}', createAccount); */ // login

/* accountRouter.post('/account', createAccount); */ // Crear usuario
/* accountRouter.get('/account', createAccount); */ // Recuperar usuarios
/* accountRouter.get('/account/{id}', createAccount); */ // Recuperar usuario con id x (opcional)

accountRouter.post('/producto', checkJwtToken, altaProducto);
accountRouter.get('/producto/listar', listarProducto);
accountRouter.get('/producto/filtrarPorUser/:uuid', checkJwtToken, filtrarPorUser);
accountRouter.delete('/producto/borrar/:idproducto', borrarProducto);
accountRouter.post('/producto/cesta', addCesta);
accountRouter.get('/producto/cesta/listar', listarCesta);
/* accountRouter.get('/product/{id}', createAccount); */ // Recuperar producto con id x 

accountRouter.post('/account', createAccount);
accountRouter.get('/account/activate', activateAccount);
accountRouter.post('/account/login', login);

module.exports = accountRouter;


