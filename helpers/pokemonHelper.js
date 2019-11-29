
const types = [
   "Colorless",
   "Darkness",
   "Dragon",
   "Fairy",
   "Fighting",
   "Fire",
   "Grass",
   "Lightning",
   "Metal",
   "Psychic",
   "Water"
]

function cardsPagination(cards, page) {

   const sliceStart = page * 9 - 9
   const sliceEnd = page * 9
   
   return cards.slice(sliceStart, sliceEnd)
}

function getSetofTypes(numOfTypes = 1) {

   const pokemonTypes = []

   for(let i = 0; i < numOfTypes; i++) {

      let randType = Math.floor(Math.random() * types.length)

      if(!pokemonTypes.includes(types[randType])) pokemonTypes.push(types[randType])
      else i--
   }
   
   return pokemonTypes
}

module.exports = {
   cardsPagination,
   getSetofTypes
}