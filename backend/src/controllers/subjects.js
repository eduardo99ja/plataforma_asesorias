const asyncHandler = require('../middleware/async')

//? @desc        Get all subjects
//? @route       GET /api/v1/subjects
//? @accesss     Public
exports.getSubjects = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
  })
})
