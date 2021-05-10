const mongoose = require('mongoose')

const PupilSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
})

module.exports = mongoose.model('Pupil', PupilSchema)
