const express = require('express')
const { getSubjects, createSubject } = require('../controllers/subjects')
const { protect, authorize } = require('../middleware/auth')
const advancedResults = require('../middleware/advancedResults')
const Subject = require('../models/Subject')
const router = express.Router()

router
  .route('/')
  .get(advancedResults(Subject),getSubjects)
  .post(protect, authorize('admin', 'asesor'), createSubject)

module.exports = router
