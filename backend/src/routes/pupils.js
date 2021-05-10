const express = require('express')
const {
  getPupils,
  getMe,
  createPupil,
  updateDetails,
} = require('../controllers/pupils')
const Pupil = require('../models/Pupil')
const advancedResults = require('../middleware/advancedResults')
const { protect } = require('../middleware/auth')

const router = express.Router()

router
  .route('/')
  .get(
    advancedResults(Pupil, { path: 'user', select: 'name lastName email' }),
    getPupils
  )
  .post(createPupil)
router.get('/me', protect, getMe)
router.put('/updatedetails', protect, updateDetails)

module.exports = router
