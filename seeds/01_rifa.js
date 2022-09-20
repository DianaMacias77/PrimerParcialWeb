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
        { ticket:'2568', name: 'Josefina', correo: 'joseFina@yahoo.com', telefono: '5574210396', gift:'24578' },
        { ticket:'1094', name: 'Rocio', correo: 'roci0@yahoo.com', telefono: '3331290432', gift:'3478' },
        { ticket:'4728', name: 'Karen', correo: 'k4r3n@yahoo.com', telefono: '5432076512', gift:'5310' },
        { ticket:'5291', name: 'Beatriz', correo: 'b3ty@yahoo.com', telefono: '5231407796', gift:'6218' },
        { ticket:'7120', name: 'Diana', correo: 'dianaa@yahoo.com', telefono: '5532995420', gift:'7321' },
        { ticket:'8014', name: 'Julieta', correo: 'juliet4@yahoo.com', telefono: '7773204198', gift:'8765' },
        { ticket:'1143', name: 'Paola', correo: 'paola@yahoo.com', telefono: '5555610520', gift:'1043' },
        {ticket: '1111', name: ' ', correo: ' ', telefono: ' ', gift: ' ' }
      ]);
    });
};
