const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const UserController = require('../Controllers/UserController')

const routerUsers = express.Router()

routerUsers.post('/', (req, res) => {
    UserController.addUser(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerUsers.patch('/', (req, res) => {
    UserController.updateUser(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerUsers.get('/', (req, res) => {
    UserController.list((error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerUsers.get('/:id', (req, res) => {
    UserController.findUser(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerUsers.delete('/:id', (req, res) => {
    UserController.deleteUser(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

module.exports = routerUsers