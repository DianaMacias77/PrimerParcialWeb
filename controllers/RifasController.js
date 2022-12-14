let RifaModel = require('../models/Rifa')

exports.create = (req, res) => {
  res.render('rifas/create');
}

// ...
// Almacena el producto
exports.store = (req, res) => {
  // Crea un objeto con la información del usuario
  let rifa = {
    ticket: req.body.ticket,
    name: req.body.name,
    correo: req.body.correo,
    telefono: req.body.telefono,
    gift: req.body.gift
  };

  RifaModel.create(rifa)
    .then((id) => {
      // Al finalizar la creación, reenvía al usuario a la página
      // inicial
      res.redirect('/');
    });
}

exports.show = (req, res) => {
  // Obtiene el id que viene en la url
  let id = req.params.id;
  // Busca dentro de la base de datos el producto con el id indicado
  RifaModel.find(id).then((rifa) => {
    // Si el producto no existe entonces
    if (rifa == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }
    // Si el producto existe entonces muestra la vista products/show.hbs
    // con la información del producto
    res.render('rifas/show', { rifa: rifa });
  });
}

exports.showTicket = (req, res) => {

  let ref = req.body.ticket;

  RifaModel.find(ref).then((rifa) => {
    if (rifa == null) {
      res.status(404).send('not found');
      return;
    } if (rifa != null && rifa.telefono == ' ') {
      return res.render('rifas/edit', { rifa: rifa });
    }
    res.render('rifas/show', { rifa: rifa });
  });
}

exports.edit = (req, res) => {
  // Obtiene el id que viene en la url
  let ticket = req.body.ticket;
  // Busca dentro de la base de datos el producto con el id indicado
  RifaModel.find(ticket).then((rifa) => {
    // Si el producto no existe entonces
    if (rifa == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }
    // Si el producto existe entonces muestra la vista products/edit.hbs
    // con la información del producto
    res.render('rifas/edit', { rifa: rifa });
  });
}

exports.update = (req, res) => {
  // Obtiene el id que viene en la url
  console.log('entrando');
  let ticket = req.body.ticket;
  // Busca dentro de la base de datos el producto con el id indicado
  RifaModel.find(ticket).then((rifa) => {
    // Si el producto no existe entonces
    if (rifa == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }

    // Define los datos del producto actualizado
    let updateRifa = {
      ticket: req.body.ticket,
      name: req.body.name,
      correo: req.body.correo,
      telefono: req.body.telefono,
      //gift: req.body.gift
    }
    console.log(updateRifa);
    // Actualiza los datos del producto
    RifaModel.update(rifa.ticket, updateRifa)
      .then((ticket) => {
        // Al terminar redirige el índice
        res.redirect('/');
      });
  });
}

exports.delete = (req, res) => {
  // Obtiene el id que viene en la url
  let id = req.params.id;
  // Busca dentro de la base de datos el producto con el id indicado
  RifaModel.find(id).then((rifa) => {
    // Si el producto no existe entonces
    if (rifa == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }
    // Elimina los datos del producto
    RifaModel.delete(rifa.id)
      .then((id) => {
        // Al terminar redirige el índice
        res.redirect('/');
      });
  });
}
