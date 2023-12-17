/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Contacts', table => {
    table.increments('id').primary().unique().notNullable();
    table
      .integer('sender_id').unsigned().notNullable()
      .references('User.id');
    table
      .integer('receiver_id').unsigned().notNullable()
      .references('User.id');
    table.datetime('created_at').notNullable().defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Contacts');
};
