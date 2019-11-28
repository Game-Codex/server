
const axios = require('axios')
const pokemonHelper = require('../helpers/pokemonHelper')

class PokemonController {

   static getCards(req, res, next) {

      let page = 1

      if(req.query.page) page = req.query.page

      axios.get(`${process.env.POKEMON_URL}/cards`)
      .then(({data}) => {

         res.status(200).json(pokemonHelper.cardsPagination(data.cards, page))
      })
      .catch(error => {

         console.log(error)
         next(error)
      })
   }

   static getCardsByTypes(req, res, next) {

      let page = 1
      

      axios.get(`${process.env.POKEMON_URL}/cards?types=`)
      .then(({data}) => {

         res.status(200).json(pokemonHelper.cardsPagination(data.cards, page))
      })
      .catch(error => {

         console.log(error)
         next(error)
      })
   }
}

module.exports = PokemonController