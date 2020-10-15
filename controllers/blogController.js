const Blog = require('../models/blog')

const index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('blogs/index', { title: 'All Blogs', blogs: result })
    })
    .catch(err => {
      console.log(err)
    })
}

const show = (req, res) => {
  const id = req.params.id

  Blog.findById(id)
    .then(result => {
      res.render('blogs/details', { blog: result, title: 'Blog Details' })
    })
    .catch(err => {
      res.status('404').render('404', { title: 'Blog not found' })
    })
}

const create = (req, res) => {
  res.render('blogs/create', { title: 'Create New Blog' })
}

const store = (req, res) => {
  const blog = new Blog(req.body)

  blog.save()
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      console.log(err)
    })
}

const remove = (req, res) => {
  const id = req.params.id

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/' })
    })
    .catch(err => {
      console.log(err)
    })
}


module.exports = {
  index,
  show,
  create,
  store,
  remove
}