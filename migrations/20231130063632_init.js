
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('User', table => {
    table.increments('id').primary().unique().notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('phone_number');
    table.date('date_of_birth').notNullable();
    table.integer('age').generatedAs(knex.raw("EXTRACT(YEAR FROM AGE(date_of_birth))"))
    table.string('user_type').notNullable();
    table.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('User');
};
