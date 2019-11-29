const dotas = require('express').Router()
const { DotaController } = require('../controllers')

dotas.get('/', DotaController.getAllHeroes)
dotas.get('/roles/:role', DotaController.getHeroesByRoles)
dotas.get('/:id', DotaController.getHeroDetail)

module.exports = dotas
