const router = require('express').Router()
const PokemonController = require('../controllers/PokemonController')

router.get('/cards', PokemonController.getCards)

module.exports = router