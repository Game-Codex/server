const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

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
              
              return new Promise((resolve, reject) => {
  
                 jwt.sign(payload, process.env.JW_SECRET, (jwtSignError, jwToken) => {
  
                    if(jwtSignError) reject(jwtSignError)
                    else resolve(jwToken)
                 })
              })
           }
           else {
  
              createFlag = true
  
              return User.create({
                 
                 name: googlePayload.name,
                 email: googlePayload.email
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
  
              console.log('create and login success')
              res.status(201).json(token)
           }
        })
        .catch(next)
     }
}

module.exports = UserController