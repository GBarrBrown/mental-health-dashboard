const path = require('path')
const express = require('express')
const server = express()

const exampleRoutes = require('./routes/example')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/api/v1/example', exampleRoutes) // to be confirmed
module.exports = server