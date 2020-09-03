const constants = require('../config/contants')
const jwt = require('jsonwebtoken')
const ResponseHelper = require('../Helpers/ResponseHelper')
const sha256 = require('sha256')
const DAO = require('../DAO/UsersDAO')

// const UserModel = models['Users']


// const users = db.sequelize.model('Users')

class AuthManager {
    static ensureUserToken(req, res, next) {
        if (AuthManager.containsToken(req)) {
            jwt.verify(req.token, constants.APISecretKey, function (err, data) {
                if (err) {
                    let error = { desc: constants.invalidToken, code: constants.errorCodeAuth }
                    res.json(ResponseHelper.createResponse(error, null))
                } else {
                    req.User = data
                    next()
                }
            })
        } else {
            let error = { desc: constants.tokenNotFound, code: constants.errorCodeAuth }
            res.json(ResponseHelper.createResponse(error, null))
        }
    }

    static generateToken(userData) {
        return jwt.sign(userData, constants.APISecretKey, { expiresIn: constants.sessionTime })
    }

    static async ensureValidUser(email, senha, response) {
        try {
            const user = await DAO.findUserByEmailAndPassword(email, senha)
            console.log(user)
            if (!!user && (user.senha === senha))
                response(null, { ...user, senha: null })
            else
                response({ code: constants.invalidUser, desc: constants.authenticationFailed }, null);
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static containsToken(req) {
        const bearerHeader = req.headers.authorization
        if (bearerHeader !== undefined) {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[1]
            req.token = bearerToken
            return true
        } else {
            return false
        }
    }
}

module.exports = AuthManager