const express = require('express')
const blogController = require('../controllers/blogController')

const router = express.Router()

router.get('/', blogController.index)
router.get('/create', blogController.create)
router.get('/:id', blogController.show)
router.delete('/:id', blogController.remove)
router.post('/', blogController.store)

module.exports = router