const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log('server is running on port ', PORT)
    console.log('http://localhost:3000')
})