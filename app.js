const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')

const loginRouter = require('./routes/login')
const usersRouter = require('./routes/users')

const TokenManager = require('./Helpers/AuthManager')
var config = require('./config/config')

setupServer()

function setupServer() {
    const app = express()

    app.use(cors({origin: '*'}))
    app.use(bodyParser.json())
    app.use('/api/login', loginRouter)
    app.use('/api/users', TokenManager.ensureUserToken, usersRouter)
    app.listen(config.app.port, function () {
        console.log(`Server listening on port ${config.app.port}`)
    })
}