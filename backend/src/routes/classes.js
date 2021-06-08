const express = require('express')

const { addClassItems, getClassById } = require('../controllers/classes')
const { protect, authorize } = require('../middleware/auth')

const router = express.Router()

router.route('/').post(protect, addClassItems)
router.route('/:id').get(protect, getClassById)

module.exports = router
