const mongoose = require('mongoose')
const hash = require('../helpers/bcrypt').hash

const userSchema = new mongoose.Schema({
   name: String,
   email: {
      type: String,
      unique: true,
   },
   gSignUp: Boolean,
   password: String
})

userSchema.pre('save', function(next) {
    if (this.gSignUp) {
        this.password = Math.floor(Math.random() * 99999999)
    } else {
        this.password = hash(this.password)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User