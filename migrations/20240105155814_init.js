/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('User', table => {
    table.float('latitude').nullable();
    table.float('longitude').nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('User', table => {
    table.dropColumn('latitude');
    table.dropColumn('longitude');
  })
};
