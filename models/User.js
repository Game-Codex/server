const mongoose = require('mongoose')
const hash = require('../helpers/bcrypt').hash

const userSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      validate: {
          validator: function(v) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
          }
      }
   },
   gSignUp: Boolean,
   password: {
       type: String,
       required: true
   }
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