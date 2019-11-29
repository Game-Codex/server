const routes = require('express').Router()
const UserController = require('../controllers').UserController

routes.post('/', UserController.loginGoogle)

module.exports = routes