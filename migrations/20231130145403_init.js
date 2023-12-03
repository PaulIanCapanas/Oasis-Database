/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('BuildingOwner', table => {
    table.increments('id').primary().unique().notNullable();
    table.string('address').notNullable();
    table.integer('owner_id').unsigned().notNullable();
    table.foreign('owner_id').references('User.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('BuildingOwner');
};
