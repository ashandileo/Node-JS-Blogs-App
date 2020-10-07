const http = require('http')

const server = http.createServer((req, res) => {
  console.log("req", req)
  console.log('request made')
})

// port number, hostname
server.listen(3000, 'localhost', () => {
  console.log('listening request on port 3000')
})