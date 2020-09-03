const db = require('../database');
const constants = require('../config/contants')

class UsersDAO {

    static list() {
        return db.select()
        .from('usuario')
    }

    static findUserById(id) {
        return db.select()
        .from('usuario')
        .where('id_usuario', id)
        .first()
    }

    static findUserByEmailAndPassword(email, senha) {
        return db.select()
        .from('usuario')
        .where({email, senha})
        .first()
    }

    static save(newUser) {
        return db('usuario')
        .insert(newUser);
    }

    static update(user){
        return db('usuario')
        .where("id_usuario", user.id_usuario)
        .update(user)
    }

    static delete(id){
        return db('usuario')
        .where("id_usuario", id)
        .del()
    }
}

module.exports = UsersDAO