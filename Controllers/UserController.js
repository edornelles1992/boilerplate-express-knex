const constants = require('../config/contants')
// const DAO = require('../DAO/UsersDAO')
const sha256 = require('sha256')
const { login } = require('../Controllers/LoginController')
const db = require ('../database');

class UserController {


    static list(callback) {
        db.select().from('usuario').then(function(data){
            callback(null, data)
        }).catch(e => {
            console.log(e)
            callback(e, null)
        })
    }

    static findUser(id, callback) {
        db.select().from('usuario').where('id_usuario', id).then(function(data){
            callback(null, data[0])
        }).catch(e => {
            console.log(e)
            callback(e, null)        
        })
    }    
}

module.exports = UserController