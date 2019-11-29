const mongoose = require('mongoose')
const URI = process.env.MONGODB_URI || 'mongodb://localhost/default'

mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true
  })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log('mongodb connection failed\n', err))
