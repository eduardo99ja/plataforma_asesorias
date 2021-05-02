const express = require('express')
const { getSubjects } = require('../controllers/subjects')

const router = express.Router()

router.route('/').get(getSubjects)

module.exports = router
