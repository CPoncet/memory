// instantiate the database connection
const knex = require('knex')({
  client: 'better-sqlite3',
  connection: {
    filename: ':memory:',
  },
});

module.exports = knex;
