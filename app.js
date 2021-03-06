const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const morgan = require('morgan')

const loginRouter = require('./routes/login')
const usersRouter = require('./routes/users')
const buildBanner = require('./Helpers/Banner')
const TokenManager = require('./Helpers/AuthManager')
var config = require('./config/config')

setupServer()

function setupServer() {
    const app = express()

    app.use(cors({origin: '*'}))
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use('/api/login', loginRouter) //rotas de login -> públicas
    app.use('/api/users', TokenManager.ensureUserToken, usersRouter) // TokenManager.ensureUserToken -> rota protegida por autenticação
    app.listen(config.app.port, buildBanner(config.app.port))
}