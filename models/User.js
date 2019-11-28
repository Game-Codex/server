const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

   name: String,
   email: {
      
      type: String,
      unique: true
   },
   password: String
})

userSchema.pre('save', function() {
    this.password = Math.floor(Math.random() * 99999999)
})

const User = mongoose.model('User', userSchema)

module.exports = User