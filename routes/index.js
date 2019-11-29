const routes = require('express').Router()
const PokemonRouter = require('./PokemonRouter')
const loginGoogleRouter = require('./loginGoogle')
const registerRouter = require('./registerRouter')
const loginRouter = require('./login')
const auth = require('../middlewares/auth')
const yugiohRouter = require('./yugioh')

routes.use('/loginGoogle', loginGoogleRouter)
routes.use('/register', registerRouter)
routes.use('/login', loginRouter)

routes.use(auth)
routes.use('/pokemon', PokemonRouter)
routes.use('/yugioh', yugiohRouter)
routes.use('/dota', require('./dotas'))

module.exports = routes
