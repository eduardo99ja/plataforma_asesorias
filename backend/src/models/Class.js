const mongoose = require('mongoose')

const classSchema = mongoose.Schema(
  {
    pupil: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    tutor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    classItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        theme: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Theme',
        },
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isAccepted: {
      type: Boolean,
      required: true,
      default: false,
    },
    isFinished: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    dateClass: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('Class', classSchema)
