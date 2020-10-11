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

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

// blogs route
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create New Blog' })
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})