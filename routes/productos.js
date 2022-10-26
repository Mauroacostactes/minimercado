//RUTAS

const express = require('express')
const router = express.Router()

const productoController = require('../controllers/pruductoController')

// mostrar todos los Prodcutos (GET)
router.get('/', productoController.mostrar)

// Crear Producto (POST)
router.post('/crear', productoController.crear)

//Editar Producto (POST)
router.post('/editar',productoController.editar)

//Borrar producto (GET)
router.get('/borrar/:id', productoController.borrar)



module.exports = router
