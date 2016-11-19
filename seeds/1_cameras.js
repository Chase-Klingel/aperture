/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('cameras').del()
    .then(() => {
      return knex('cameras').insert([{
        id: 1,
        name: 'Pentax D3100 DSLR',
        image: 'images/camera-1.jpg',
        rating: 4,
        price: 369.99,
        shutter_speed: '30 fps',
        digital_zoom: '3x',
        on_sale: true
      },
      {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'images/camera-2.jpg',
        rating: 2,
        price: 1099.0,
        shutter_speed: '60 fps',
        digital_zoom: '9x',
        on_sale: false
      },
      {
        id: 3,
        name: 'Nikon D810A',
        image: 'images/camera-3.jpg',
        rating: 3,
        price: 3796.95,
        shutter_speed: '120 fps',
        digital_zoom: '12x',
        on_sale: true
      }, {
        id: 4,
        name: 'Fuji D170B',
        image: 'images/camera-4.jpg',
        rating: 3,
        price: 870.95,
        shutter_speed: '60fps',
        digital_zoom: '6x',
        on_sale: false
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cameras_id_seq', (SELECT MAX(id) FROM cameras));"
      );
    });
};
