let DashboardModel = require('../models/Dashboard')

// Reglas para la respuesta para la petición "/"
exports.dashboard = (req, res) => {
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  DashboardModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let rifa = data;
      // Enviamos los datos a la vista
      res.render('pages/dashboard', { rifa: rifa });
    });
}
