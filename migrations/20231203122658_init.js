/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Ticket', table => {
    table.increments('id').primary().unique().notNullable();
    table.integer('room_id').unsigned().notNullable();
    table.foreign('room_id').references('Room.id');
    table.integer('boarder_id').unsigned().notNullable();
    table.foreign('boarder_id').references('Boarder.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Ticket');
};
