const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // set header content type
  res.setHeader('Content-Type', 'text/html')

  let path = './views/'
  switch(req.url) {
    case '/': 
      path += 'index.html'
      break
    case '/about':
      path += 'about.html'
      break
    default:
      path += '404.html'
      break
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("err", err)
      res.end()
    } else {
      res.end(data)
    }
  })
})

// port number, hostname
server.listen(3000, 'localhost', () => {
  console.log('listening request on port 3000')
})