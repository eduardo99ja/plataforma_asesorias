const asyncHandler = require('../middleware/async')
const Subject = require('../models/Subject')

//? @desc        Get all subjects
//? @route       GET /api/v1/subjects
//? @accesss     Public
exports.getSubjects = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

//? @desc        Get single subject
//? @route       GET /api/v1/subjects/:id
//? @accesss     Public
exports.getSubject = asyncHandler(async (req, res, next) => {
  const subject = await Subject.findById(req.params.id)
  if (!subject) {
    return next(
      new ErrorResponse(`Materia no encontrada con el id ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  })
})

//? @desc        Create new subject
//? @route       POST /api/v1/subjects
//? @accesss     Private/Admin

exports.createSubject = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id
  const subject = await Subject.create(req.body)

  res.status(200).json({
    success: true,
    data: subject,
  })
})
