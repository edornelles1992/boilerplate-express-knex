const createTables = require('./migrations/20200903011429_migration_create_table')
const insertsTable = require('./seeds/01_users')

var conn = {
  host: 'localhost',
  user: 'root',
  password: '',
  charset: 'utf8'
};

// connect without database selected
var knex = require('knex')({
  client: 'mysql2',
  connection: conn,
  migrations: {
    tableName: 'migrations'
  }
});

/*
ESSE SCRIPT RODA AO INICIAR A API:
CRIA O SCHEMA NO BANCO E JA POPULA AS TABELAS, CASO NÃO EXISTAM.
CONFORME FOREM SENDO CRIADO SCRIPTS DE TABELAS E CARGAS INICIAIS É 
IMPORTANTE ADICIONAR AQUI BUSCANDO DOS ARQUIVOS DE MIGRATIONS E SEEDS
*/
knex.raw('CREATE DATABASE IF NOT EXISTS job_quest')
  .then(async function () {
    knex.destroy();
    // connect with database selected
    conn.database = 'job_quest';
    knex = require('knex')({ client: 'mysql2', connection: conn });
    await generateUserTableIfNotExists();
  });

module.exports = knex;

async function generateUserTableIfNotExists() {
  const hasUserTable = await knex.schema.hasTable('usuario');
  if (!hasUserTable) { //cria e popula tabela somente se ainda n existe na base
    await createTables(knex);
    await insertsTable(knex);
  }
}
