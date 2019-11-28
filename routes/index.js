const routes = require('express').Router()
const PokemonRouter = require('./PokemonRouter')
const loginGoogleRouter = require('./loginGoogle')

routes.use('/pokemon', PokemonRouter)
routes.use('/loginGoogle', loginGoogleRouter)

routes.use('/dota', require('./dotas'))

module.exports = routes
