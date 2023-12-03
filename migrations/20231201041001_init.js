/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Reservations', table => {
    table.increments('id').primary().unique().notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('User.id');
    table.integer('building_id').unsigned().notNullable();
    table.foreign('building_id').references('Building.id');
    table.timestamp('check_in').notNullable();
    table.timestamp('check_out').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Reservations');
};
