const http = require('http')

const server = http.createServer((req, res) => {
  // set header content type
  res.setHeader('Content-Type', 'text/html')

  res.write('<head><title>Hello World in node js</title></head>')
  res.write('<p>Hello World!</p>')
  res.write('<p>Hello World! again</p>')
  res.end()
})

// port number, hostname
server.listen(3000, 'localhost', () => {
  console.log('listening request on port 3000')
})