/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Messages', table => {
    table.increments('id').primary().unique().notNullable();
    table.string('contents').notNullable();
    table
      .integer('contact_id').unsigned().notNullable()
      .references('Contacts.id');
    table.integer('sender_id').unsigned().notNullable()
      .references('User.id')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Messages');
};
