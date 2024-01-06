/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('Building', t => {
    t.double('latitude').alter();
    t.double('longitude').alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('Building', t => {
    t.float('latitude').alter();
    t.float('longitude').alter();
  });
};
