const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const Class = require('../models/Class')

// @desc    Create new class
// @route   POST /api/classes
// @access  Private

exports.addClassItems = asyncHandler(async (req, res, next) => {
  const {
    classItems,
    tutor,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
  } = req.body
  if (classItems && classItems.length === 0) {
    return next(new ErrorResponse(`No class items`, 400))
  } else {
    const order = new Class({
      classItems,
      pupil: req.user._id,
      tutor,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      totalPrice,
    })

    const createdClass = await order.save()

    res.status(200).json({
      success: true,
      data: createdClass,
    })
  }
})
// @desc    Get class by ID
// @route   GET /api/classes/:id
// @access  Private
exports.getClassById = asyncHandler(async (req, res) => {
  const order = await Class.findById(req.params.id).populate(
    'pupil',
    'name email'
  ).populate(
    'tutor',
    'name email'
  )

  if (order) {
    res.status(200).json({
      success: true,
      data: order,
    })
  } else {
    return next(new ErrorResponse(`Class not found`, 404))
  }
})
