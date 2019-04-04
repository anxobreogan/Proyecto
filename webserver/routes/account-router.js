'use strict';

const express = require('express');
const createAccount = require('../controllers/account/create-acount');


const activateAccount = require('../controllers/account/activate-acount');
const altaProducto = require('../controllers/productos/alta');

const accountRouter = express.Router();
/* accountRouter.post('/login/{id}', createAccount); */ // login

/* accountRouter.post('/account', createAccount); */ // Crear usuario
/* accountRouter.get('/account', createAccount); */ // Recuperar usuarios
/* accountRouter.get('/account/{id}', createAccount); */ // Recuperar usuario con id x (opcional)

accountRouter.post('/producto', altaProducto);
/* accountRouter.get('/product/{id}', createAccount); */ // Recuperar producto con id x 

accountRouter.post('/account', createAccount);
accountRouter.get('/account/activate', activateAccount);

module.exports = accountRouter;


