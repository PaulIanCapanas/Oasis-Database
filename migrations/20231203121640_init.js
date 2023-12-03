
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Room', table => {
    table.increments('id').primary();
    table.string('description');
    table.string('type').notNullable();
    table.string('status').notNullable();
    table.integer('reservation_id').unsigned().notNullable();
    table.foreign('reservation_id').references('Reservations.id');
    table.integer('building_id').unsigned().notNullable();
    table.foreign('building_id').references('Building.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Room');
};
