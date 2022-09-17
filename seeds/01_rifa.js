// seeds/01_products.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rifa').del()
    .then(function () {
      // Inserts seed entries
      return knex('rifa').insert([
        { ticket:'6453', name: 'Gabriela', correo: 'gaby@gmail.com', telefono: '5532974010', gift:'4567'},
        { ticket:'3215', name: 'Laura', correo: 'lauraVenites@hotmail.com', telefono: '4321984500', gift:'9876' },
        { ticket:'9845', name: 'Rosa', correo: 'ros4@yahoo.com', telefono: '7772343070', gift:'1234' },
      ]);
    });
};
