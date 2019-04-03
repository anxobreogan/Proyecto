'use strict';

const express = require('express');
const createAccount = require('../controllers/account/create-acount');

const accountRouter = express.Router();
const activateAccount = require('../controllers/account/activate-acount');
/* const altaProducto = require('../controllers/productos/alta'); */

/* accountRouter.post('/login/{id}', createAccount); */ // login

/* accountRouter.post('/account', createAccount); */ // Crear usuario
/* accountRouter.get('/account', createAccount); */ // Recuperar usuarios
/* accountRouter.get('/account/{id}', createAccount); */ // Recuperar usuario con id x (opcional)

/*accountRouter.post('/product', altaProducto); */// Alta producto
/* accountRouter.get('/product/{id}', createAccount); */ // Recuperar producto con id x 

accountRouter.post('/account', createAccount);
accountRouter.get('/account/activate', activateAccount);

module.exports = accountRouter;


