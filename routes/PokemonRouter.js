const router = require('express').Router()
const PokemonController = require('../controllers/PokemonController')

router.get('/cards', PokemonController.getCards)
router.get('/getTypes/:numOfTypes', PokemonController.getRandomizedTypes)
router.get('/getByTypes/:type', PokemonController.getCardsByType)

module.exports = router