const express = require('express')
const { getSubjects, createSubject } = require('../controllers/subjects')
const { protect, authorize } = require('../middleware/auth')
const advancedResults = require('../middleware/advancedResults')
const Subject = require('../models/Subject')

//include other resources routers
const themeRouter = require('./themes')
const router = express.Router()

//Re-routes into other resource routers
router.use('/:subjectId/themes', themeRouter)

router
  .route('/')
  .get(advancedResults(Subject), getSubjects)
  .post(protect, authorize('admin', 'asesor'), createSubject)

module.exports = router
