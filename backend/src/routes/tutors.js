const express = require('express')
const { createTutor } = require('../controllers/tutors')

const router = express.Router()

router.route('/').post(createTutor)


module.exports = router