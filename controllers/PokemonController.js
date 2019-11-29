
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

   static getCardsByType(req, res, next) {

      let page = 1
      let type = ''

      if(req.params.type != `all`) type = req.params.type

      axios.get(`${process.env.POKEMON_URL}/cards?types=${type}`)
      .then(({data}) => {

         res.status(200).json(data.cards)
      })
      .catch(error => {

         console.log(error)
         next(error)
      })
   }

   static searchCards(req, res, next) {

      const name = req.body.name.split('%20').join(' ')

      axios.get(`${process.env.POKEMON_URL}/cards?name=${name}`)
      .then(({data}) => {

         res.status(200).json(data.cards)
      })
      .catch(error => {

         console.log(error)
         next(error)
      })
   }

   static getRandomizedTypes(req, res, next) {


      let numOfTypes = 1;

      if(req.params.numOfTypes) numOfTypes = req.params.numOfTypes

      res.status(200).json(pokemonHelper.getSetofTypes(numOfTypes))
   }

   static getCardDetail(req, res, next) {

      axios.get(`${process.env.POKEMON_URL}/cards/${req.params.id}`)
      .then(({data}) => {

         res.status(200).json(data.card)
      })
      .catch(error => {

         console.log(error)
         next(error)
      })
   }
}

module.exports = PokemonController