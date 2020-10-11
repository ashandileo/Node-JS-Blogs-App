const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express()

// connect to mongoDB
const DBURI = 'mongodb+srv://ashandileo:Jenggot2020@cluster0.ugva9.mongodb.net/nodejs-blogs?retryWrites=true&w=majority'
mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    console.log('connected to database')
    app.listen(3000)
  })
  .catch(err => console.log(err))

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'))

// mongoose
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog',
    body: 'more about my new blog',
    test: 'lalala'
  })

  blog.save()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log(err)
  })
})

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/single-blog', (req, res) => {
  Blog.findById('5f82d90d30a8147367622d7d')
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
})

// routes
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