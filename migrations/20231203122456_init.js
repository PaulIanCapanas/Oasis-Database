/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Reviews', table => {
    table.increments('id').primary().unique().notNullable();
    table.string('content');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('User.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews');
};
