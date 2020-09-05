module.exports = function insertsTable(knex) {
  // Deletes ALL existing entries
  return knex('usuario')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('usuario').insert([
        {
          nome: 'admin',
          email: 'admin@gmail.com',
          senha: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', //123456
          perfil: 1
        },
        {
          nome: 'Joao Silva',
          email: 'joao@gmail.com',
          senha: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
          perfil: 2
        },
        {
          nome: 'Maria Flores',
          email: 'maria@gmail.com',
          senha: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
          perfil: 2
        },
        {
          nome: 'Paulo Neves',
          email: 'paulo@gmail.com',
          senha: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
          perfil: 2
        },
      ])
    })
}