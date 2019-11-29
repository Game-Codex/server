const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const User = require('../models').User
const jwt = require('jsonwebtoken')
const verify = require('../helpers/bcrypt').verify

class UserController {
    static loginGoogle(req, res, next) {
        let googlePayload = {}
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_ID,
        })
        .then(loginTicket => {
           const payload = loginTicket.getPayload()
           const googleUserId = payload['sub']
  
           googlePayload.name = payload.name
           googlePayload.email = payload.email
  
           return User.findOne({email: payload.email})
        })
        .then(user => {
           if(user) {
              const payload = {id: user._id}
            //   return jwt.sign(payload, process.env.JW_SECRET)
              return new Promise((resolve, reject) => {
                 jwt.sign(payload, process.env.JW_SECRET, (jwtSignError, jwToken) => {
                    if(jwtSignError) reject(jwtSignError)
                    else resolve(jwToken)
                 })
              })
           }
           else {
              return User.create({
                 email: googlePayload.email,
                 gSignUp: true
              })
           }
        })
        .then(userOrToken => {
           if(typeof userOrToken == "string") {
              console.log('login success')
              res.status(200).json(userOrToken)
           }
           else {
              const payload = {id: userOrToken._id}
              const token = jwt.sign(payload, process.env.JW_SECRET)
              console.log('created and login success')
              res.status(201).json(token)
           }
        })
        .catch(next)
    }

    static register(req, res, next) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            console.log('successfully created')
            res.status(201).json({ message: 'successfully created'})
        }).catch(next)
    }

    static login(req, res, next){
        let payload = {};
        let token = '';
        const { email, password } = req.body
        User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (verify(password, user.password)) {
                    payload._id = user._id
                    payload.email = user.email
                    token = jwt.sign(payload, process.env.JW_SECRET);
                    res.status(200).json({ access_token: token, email: payload.email });
                } else {
                    throw { code: 400, message: "Invalid email/password" }
                }
            } else {
                throw { code: 400, message: "Invalid email/password" }
            }

        })
        .catch(next);
    }
}

module.exports = UserController