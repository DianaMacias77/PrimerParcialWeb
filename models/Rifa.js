// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (ticket, name, correo, telefono, gift) => {
  return {
    ticket: ticket,
    name: name,
    correo: correo,
    telefono: telefono,
    gift: gift
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('rifa');
}

exports.create = (rifa) => {
    return knex('rifa')
      .insert({
        ticket: rifa.ticket,
        name: rifa.name,
        correo: rifa.correo,
        telefono: rifa.telefono,
        gift: rifa.gift
      });
}

exports.find = (id) => {
    return knex
      .select('*')
      .from('rifa')
      .where('id', id)
      .first();
  }

exports.update = (id, rifa) => {
    return knex('rifa')
      .update(rifa)
      .update('updated_at', knex.fn.now())
      .where('id', id);
}

exports.delete = (id) => {
    return knex('rifa')
      .delete()
      .where('id', id);
  }