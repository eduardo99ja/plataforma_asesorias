const express = require('express')
const { createTutor, getTutors } = require('../controllers/tutors')
const Tutor = require('../models/Tutor')
const advancedResults = require('../middleware/advancedResults')

const router = express.Router()

router
  .route('/')
  .get(
    advancedResults(Tutor, { path: 'user', select: 'name lastName email' }),
    getTutors
  )
  .post(createTutor)

module.exports = router
