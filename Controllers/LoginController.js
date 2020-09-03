const constants = require('../config/contants')
const AuthManager = require('../Helpers/AuthManager')

var jwt = require('jsonwebtoken')

class LoginController {
    static login(email, senha, response) {
        AuthManager.ensureValidUser(email, senha, (error, userData) => {
            if (error != null) {
                return response(error, null)
            }
            //Generate token
            let token = AuthManager.generateToken(userData)
            return response(null, { token: token, userData: userData })
        })
    }

    static validateToken(req, response) {
        AuthManager.containsToken(req)
        jwt.verify(req.token, constants.APISecretKey, (error, data) => {
            if (error) {
                response(constants.invalidSession, false)
            } else {
                response(null, true)
            }
        })
    }
}

module.exports = LoginController