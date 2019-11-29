const routes = require('express').Router()
const UserController = require('../controllers').UserController

routes.post('/', UserController.register)

module.exports = routes