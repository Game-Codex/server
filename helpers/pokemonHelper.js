
const types = [

   
]

function cardsPagination(cards, page) {

   const sliceStart = page * 9 - 9
   const sliceEnd = page * 9
   
   return cards.slice(sliceStart, sliceEnd)
}

module.exports = {
   cardsPagination
}