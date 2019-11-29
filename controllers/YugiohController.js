const axios = require('axios').default.create({
  baseURL: 'https://db.ygoprodeck.com/api/v5/'
})

class YugiohController {
  static getCards(req, res, next) {
    console.log(req.query)
    let listCards = []
    let pageNow = req.query.pageNow
    if (pageNow === 'page1') {
      axios({
        method: 'GET',
        url: 'cardinfo.php'
      })
        .then(({ data }) => {
          for (let i = 0; i < 12; i++) {
            listCards.push(data[i])
          }
          res.status(200).json(listCards)
        })
        .catch(next)
    } else if (pageNow === 'page2') {
      // console.log('mmasuk page2')
      axios({
        method: 'GET',
        url: 'cardinfo.php'
      })
        .then(({ data }) => {
          for (let i = 12; i < 24; i++) {
            listCards.push(data[i])
          }
          res.status(200).json(listCards)
        })
        .catch(next)
    } else if (pageNow === 'page3') {
      axios({
        method: 'GET',
        url: 'cardinfo.php'
      })
        .then(({ data }) => {
          for (let i = 24; i < 36; i++) {
            listCards.push(data[i])
          }
          res.status(200).json(listCards)
        })
        .catch(next)
    }
  }

  static getRandom(req, res, next) {
    axios({
      method: 'GET',
      url: 'randomcard.php'
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static getDetail(req, res, next) {
    // console.log(req.query.name)
    axios({
      method: 'GET',
      url: `cardinfo.php?name=${req.query.name}`
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = YugiohController
