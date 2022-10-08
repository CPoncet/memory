const knex = require('./configuration');

knex.schema.hasTable('scores').then((exists) => {
  if (!exists) {
    return knex.schema.createTable('scores', (table) => {
      table.increments('id').primary();
      table.string('username', 100);
      table.integer('score', 100);
    });
  }
});

module.exports = knex;
