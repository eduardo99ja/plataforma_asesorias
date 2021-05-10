const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Pupil = require('../models/Pupil')

//? @desc      Create pupil
//? @route     POST /api/v1/pupils
//? @access    Private
exports.createPupil = asyncHandler(async (req, res, next) => {
  const pupil = await Pupil.create(req.body)

  res.status(201).json({
    success: true,
    data: pupil,
  })
})

//? @desc      Get all pupils
//? @route     GET /api/v1/pupils
//? @access    Public
exports.getPupils = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

//? @desc      Get current logged pupil
//? @route     GET /api/v1/pupils/me
//? @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const pupil = await Pupil.findById(req.user.id).populate(
    'user',
    'name lastName email'
  )

  res.status(200).json({
    success: true,
    data: pupil,
  })
})
//? @desc      Update pupil details
//? @route     PUT /api/v1/pupils/updatedetails
//? @access    Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
  const pupil = await Pupil.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: pupil,
  })
})

//TODO: Delete account
