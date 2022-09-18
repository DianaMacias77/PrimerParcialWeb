// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');
let RifasController = require('../controllers/RifasController');
let DashboardController = require('../controllers/DashboardController');
// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

router.get('/rifas/create', RifasController.create); //SIRVE

router.post('/rifas', RifasController.store); //SIRVE

router.get('/rifas/:id', RifasController.show); //SIRVE

router.get('/rifas/:id/edit', RifasController.edit); //NO SIRVE

router.put('/rifas/:id', RifasController.update); //NO SIRVE

router.delete('/rifas/:id', RifasController.delete); //NO SIRVE

router.get('/dashboard', DashboardController.dashboard); //SIRVE

module.exports = router;