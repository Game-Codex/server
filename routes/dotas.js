const dotas = require('express').Router()
const { DotaController } = require('../controllers')

dotas.get('/', DotaController.getAllHeroes)

module.exports = dotas
