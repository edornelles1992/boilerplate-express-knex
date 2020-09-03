
exports.up = function(knex) {
    return knex.schema
    .createTable('usuario', function(table) {
        table.increments('id_usuario').primary()
        table.string('nome', 100).notNullable()
        table.string('email', 100).notNullable()
        table.string('senha', 300).notNullable()
        table.integer('perfil').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario')
};
