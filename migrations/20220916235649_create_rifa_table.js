exports.up = function(knex) {
    return knex.schema
      .createTable('rifa', (table) => {
        table.increments('id').notNullable();
        table.string('ticket');
        table.string('name', 255).notNullable();
        table.string('correo', 320);
        table.string('telefono',10).notNullable();
        table.string('gift');
        table.timestamps(true, true);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('rifa');
  };