const knex = require('../database/connection');

exports.find = (ticket) => { //jalamos el regalo
    // Realiza la consulta dentro de knex
    return knex
      .select('*')
      .from('rifa')
      .where('ticket', ticket)
      .first();
}
