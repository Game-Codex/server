const router = require('express').Router()
const Yugioh = require('../controllers/YugiohController')

router.get('/', Yugioh.getCards)
router.get('/random', Yugioh.getRandom)
router.get('/detail', Yugioh.getDetail)

module.exports = router
