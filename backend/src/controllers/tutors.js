const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Tutor = require('../models/Tutor')

//? @desc      Create tutor
//? @route     POST /api/v1/tutors
//? @access    Private
exports.createTutor = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.create(req.body)

  res.status(201).json({
    success: true,
    data: tutor,
  })
})

//? @desc      Get all tutors
//? @route     GET /api/v1/tutors
//? @access    Public
exports.getTutors = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

//? @desc      Get current logged tutor
//? @route     GET /api/v1/tutors/me
//? @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.findById(req.user.id).populate(
    'user',
    'name lastName email'
  )

  res.status(200).json({
    success: true,
    data: tutor,
  })
})
//? @desc      Update tutor details
//? @route     PUT /api/v1/tutors/updatedetails
//? @access    Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
  const tutor = await Tutor.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: tutor,
  })
})

//TODO: Delete account
