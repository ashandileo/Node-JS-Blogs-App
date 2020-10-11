const express = require('express')
const morgan = require('morgan')


const app = express()

// register view engine
app.set('view engine', 'ejs')

app.listen(3000)

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  const blogs = [
      { title: 'lorem 1', snippet: 'lorem lorem lorem lorem' },
      { title: 'lorem 2', snippet: 'lorem lorem lorem lorem' },
      { title: 'lorem 3', snippet: 'lorem lorem lorem lorem' }
  ]

  res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create New Blog' })
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})