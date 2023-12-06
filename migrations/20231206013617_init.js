/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Messages', table => {
    table.increments('id').primary().unique().notNullable();
    table
      .integer('sender_id').unsigned().notNullable()
      .references('User.id');
    table
      .integer('receiver_id').unsigned().notNullable()
      .references('User.id')
      .references('BuildingOwner')
      .references('Boarder.id');
    table.text('content');
    table.date('sent_at');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Messages');
};
