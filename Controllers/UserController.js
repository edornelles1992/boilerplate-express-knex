const constants = require('../config/contants')
const DAO = require('../DAO/UsersDAO')

class UserController {

    static async list(response) {
        try {
            response(null, await DAO.list());
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async findUser(id, response) {
        try {
            const data = await DAO.findUserById(id);
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async addUser(newUser, response) {
        try {
            const data = await DAO.save(newUser)
            response(null, { id_usuario: data[0] })
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updateUser(user, response) {
        try {
            const data = await DAO.update({...user, updated_at: new Date()}, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async deleteUser(id, response) {
        try {
            const data = await DAO.delete(id)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }
}

module.exports = UserController