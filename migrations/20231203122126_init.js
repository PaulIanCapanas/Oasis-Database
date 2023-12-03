/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Amenities', table => {
    table.increments('id').primary().unique().notNullable();
    table.string('features');
    table.integer('building_id').unsigned().notNullable();
    table.foreign('building_id').references('Building.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('amenities');
};
