exports.up = function (knex) {
  return knex.schema.createTable('files', function (table) {
    table.increments('id').primary();
    table.string('originalname').notNullable();
    table.string('filename').notNullable();
    table.string('path').notNullable()
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('User.id')
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('files');
};