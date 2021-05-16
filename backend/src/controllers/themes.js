const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Theme = require('../models/Theme')
const { Query } = require('mongoose')
const Subject = require('../models/Subject')

//? @desc      Get Themes
//? @route     GET /api/v1/themes
//? @route     GET /api/v1/subjects/:subjectId/themes
//? @access    Public
exports.getThemes = asyncHandler(async (req, res, next) => {
  if (req.params.subjectId) {
    const themes = await Theme.find({ subject: req.params.subjectId })
    //? for specific subject
    return res
      .status(200)
      .json({ success: true, count: themes.length, data: themes })
  } else {
    res.status(200).json(res.advancedResults)
  }
})
//? @desc      Get single theme
//? @route     GET /api/v1/themes/:id
//? @access    Public
exports.getTheme = asyncHandler(async (req, res, next) => {
  const theme = await Theme.findById(req.params.id).populate({
    path: 'subject',
    select: 'name description',
  })

  if (!theme) {
    return next(
      new ErrorResponse(`No theme with the id of ${req.params.id}`),
      404
    )
  }

  res.status(200).json({
    success: true,
    data: theme,
  })
})
//? @desc      Add theme
//? @route     POST /api/v1/subjects/:subjectId/themes
//? @access    Private
exports.addTheme = asyncHandler(async (req, res, next) => {
  req.body.subject = req.params.subjectId
  req.body.user = req.user.id

  const subject = await Subject.findById(req.params.subjectId)

  if (!subject) {
    return next(
      new ErrorResponse(`No subject with the id of ${req.params.subjectId}`),
      404
    )
  }
  //? Make sure user is subject owner
  if (subject.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add a theme to bootcamp ${subject._id}`,
        401
      )
    )
  }

  const theme = await Theme.create(req.body)

  res.status(200).json({
    success: true,
    data: theme,
  })
})

//TODO: Update theme
//TODO: Delete theme
