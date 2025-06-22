require('dotenv').config()
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()

// console.log(`Proccess:`, process.env)
// init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init dbs
require('.//dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
checkOverload()
// init routes
app.get('/', (res, req, next) => {
    return req.status(200).json({
        message: 'Hello World'
    })
})

// handling errors


module.exports = app