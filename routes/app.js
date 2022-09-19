// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();

// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');
let RifasController = require('../controllers/RifasController');
let DashboardController = require('../controllers/DashboardController');
let TicketController = require('../controllers/TicketController');
// Establece que al hacer una petición GET a la ruta / se conteste

//PagesController
router.get('/', PagesController.homepage);
router.get('/boleto', PagesController.boleto);
router.get('/ticket', PagesController.ticket);

//TicketController
router.get('/rifas/:id', TicketController.tick);

//RifasController
router.get('/rifas/:id', RifasController.showTicket);

router.get('/rifas/create', RifasController.create); //SIRVE

router.post('/rifas', RifasController.showTicket); //SIRVE

router.get('/rifas/:id', RifasController.show); //SIRVE

router.get('/rifas/:id/edit', RifasController.edit); //SIRVE

router.put('/rifas/:id', RifasController.update); //SIRVE

router.delete('/rifas/:id', RifasController.delete); //SIRVE

router.get('/dashboard', DashboardController.dashboard);//SIRVE

module.exports = router;