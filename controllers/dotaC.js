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
}

module.exports = DotaController
