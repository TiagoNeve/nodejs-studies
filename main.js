const http = require('http')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-TYpe', 'text/html ; charset=utf-8')
    res.end('Olá mundão')
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})