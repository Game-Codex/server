const routes = require('express').Router()
const PokemonRouter = require('./PokemonRouter')

routes.use('/pokemon', PokemonRouter)

module.exports = routes
