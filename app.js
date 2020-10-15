const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

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
app.use(express.urlencoded({ extended: true })) // agar bisa digunakan di req object
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

// blog routes
app.use(blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})