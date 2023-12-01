const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Buildings', table => {
    table.increments('id').primary().unique().notNullable();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('User.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Buildings');
};
