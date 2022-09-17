const knex = require('../database/connection');

exports.all = () => {
    // Realiza la consulta dentro de knex
    return knex
      .select('*')
      .from('rifa');
}
