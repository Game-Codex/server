const router = require('express').Router()
const PokemonController = require('../controllers/PokemonController')

router.get('/cards', PokemonController.getCards)
router.post('/cards', PokemonController.searchCards)
router.get('/getTypes/:numOfTypes', PokemonController.getRandomizedTypes)
router.get('/getByTypes/:type', PokemonController.getCardsByType)
router.get('/getDetail/:id', PokemonController.getCardDetail)

module.exports = router