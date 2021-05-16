const express = require('express')
const { getThemes, getTheme, addTheme } = require('../controllers/themes')

const Theme = require('../models/Theme')
const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth')

const router = express.Router({ mergeParams: true })
router
  .route('/')
  .get(
    advancedResults(Theme, {
      path: 'subject',
      select: 'name description',
    }),
    getThemes
  )
  .post(protect, authorize('asesor', 'admin'), addTheme)
router.route('/:id').get(getTheme)

module.exports = router
