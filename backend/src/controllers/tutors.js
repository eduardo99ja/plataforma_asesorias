const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Tutor = require('../models/Tutor')

// @desc      Create tutor
// @route     POST /api/v1/tutors
// @access    Private
exports.createTutor = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.create(req.body)

  res.status(201).json({
    success: true,
    data: tutor,
  })
})
