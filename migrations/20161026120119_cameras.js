'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('cameras', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('image').notNullable().defaultTo('');
    table.enu('rating', [1, 2, 3, 4, 5]).notNullable();
    table.decimal('price', 8, 2);
    table.string('shutter_speed').notNullable().defaultTo('');
    table.string('digital_zoom').notNullable().defaultTo('');
    table.boolean('on_sale');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cameras');
};
