<<<<<<< HEAD
exports.homepage = (req, res) => {
    res.render('pages/homepage')
}

exports.about = (req, res) => {
    res.send('About us')
}
=======
// controllers/PagesController.js
// Importa el modelo de productos
let RifaModel = require('../models/Rifa')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  RifaModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let rifas = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { rifas: rifas });
    });
}

// Reglas para la respuesta para la petición "/about"
exports.boleto = (req, res) => {
  res.render('pages/boleto')

}

exports.ticket = (req, res) => {
  res.render('pages/ticket')
}

>>>>>>> diana
