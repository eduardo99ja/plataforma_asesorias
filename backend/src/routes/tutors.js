const express = require('express')
const {
  createTutor,
  getTutors,
  getMe,
  updateDetails,
  getTutor
} = require('../controllers/tutors')
const Tutor = require('../models/Tutor')
const advancedResults = require('../middleware/advancedResults')
const { protect } = require('../middleware/auth')

const router = express.Router()

router
  .route('/')
  .get(
    advancedResults(Tutor, { path: 'user', select: 'name lastName email' }),
    getTutors
  )
  .post(createTutor)
router.get('/me', protect, getMe)
router.put('/updatedetails', protect, updateDetails)
router.route('/:id').get(getTutor)

module.exports = router
