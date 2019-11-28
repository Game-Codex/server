if (process.env.NODE_ENV === 'development') require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

require('./config/mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.use('/', require('./routes'))
// app.use('*')
// app.use(require('./middlewares/errorHandler'))

module.exports = app
