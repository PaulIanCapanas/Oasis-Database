/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Rooms', table => {
    table.increments('id').primary();
    table.string('description');
    table.string('type').notNullable();
    table.string('status').notNullable();
    table.integer('building_id').unsigned().notNullable();
    table.foreign('building_id').references('Buildings.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Rooms');
};
