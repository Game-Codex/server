const routes = require('express').Router()
const UserController = require('../controllers').UserController

routes.post('/', UserController.login)

module.exports = routes