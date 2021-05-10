const mongoose = require('mongoose')

const TutorSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  birthday: {
    type: Date,
    required: [true, 'Debe agregar su fecha de nacimiento'],
  },
  gender: {
    type: String,
    enum: ['masculino', 'femenino'],
    required: [true, 'Debe seleccionar su sexo'],
  },
  phoneNumber: {
    type: Number,
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  level: {
    type: String,
  },
  school: {
    type: String,
  },
  averageRating: {
    type: Number,
    min: [1, 'La calificación minima es de 1'],
    max: [5, 'La calificacion no puede ser mas de 5'],
  },
  hourPrice: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
})

module.exports = mongoose.model('Tutor', TutorSchema)
