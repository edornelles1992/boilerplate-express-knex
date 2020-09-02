const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const UserController = require('../Controllers/UserController')

const routerUsers = express.Router()


routerUsers.post('/', (req, res) => {
    UserController.addUser(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data, res, true))
    })
})


routerUsers.get('/', (req, res) => {
    UserController.list((error, data) => {
        res.json(ResponseHelper.createResponse(error, data, res, false))
    })
})

routerUsers.get('/:id', (req, res) => {
    UserController.findUser(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data, res, true))
    })
})


module.exports = routerUsers