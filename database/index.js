var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'job_quest'
    },
    migrations: {
      tableName: 'migrations'
    }
  });

  module.exports = knex;