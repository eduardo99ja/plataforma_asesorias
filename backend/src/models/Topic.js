const mongoose = require('mongoose')

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Debe agregar un titulo'],
  },
  description: {
    type: String,
    required: [true, 'Debe agregar una descripcion'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subject: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subject',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
})




module.exports = mongoose.model('Topic', TopicSchema)
