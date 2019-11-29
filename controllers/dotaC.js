const axios = require('axios').default.create({
  baseURL: 'http://serverdoto.dreamcarofficial.com'
})

class DotaController {
  static getAllHeroes(req, res, next) {
    axios({
      method: 'get',
      url: 'hero'
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static getHeroesByRoles(req, res, next) {
    const role =
      req.params.role[0].toUpperCase() + req.params.role.slice(1).toLowerCase()
    axios({
      method: 'get',
      url: `dota/role/${role}`
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static getHeroDetail(req, res, next) {
    axios({
      method: 'get',
      url: `dota/${req.params.id}`
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = DotaController
