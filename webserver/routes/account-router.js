'use strict';

const express = require('express');
const createAccount = require('../controllers/account/create-acount');
const login = require('../controllers/account/login');

const activateAccount = require('../controllers/account/activate-acount');
const altaProducto = require('../controllers/productos/alta');
const listarProducto = require('../controllers/productos/listar');
const borrarProducto = require('../controllers/productos/baja');

const accountRouter = express.Router();
/* accountRouter.post('/login/{id}', createAccount); */ // login

/* accountRouter.post('/account', createAccount); */ // Crear usuario
/* accountRouter.get('/account', createAccount); */ // Recuperar usuarios
/* accountRouter.get('/account/{id}', createAccount); */ // Recuperar usuario con id x (opcional)

accountRouter.post('/producto', altaProducto);
accountRouter.get('/producto/listar', listarProducto);
accountRouter.delete('/producto/borrar/:idproducto', borrarProducto);
/* accountRouter.get('/product/{id}', createAccount); */ // Recuperar producto con id x 

accountRouter.post('/account', createAccount);
accountRouter.get('/account/activate', activateAccount);
accountRouter.post('/account/login', login);

module.exports = accountRouter;


