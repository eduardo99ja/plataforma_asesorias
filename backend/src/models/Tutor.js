const mongoose = require('mongoose')

const TutorSchema = new mongoose.Schema({
  _id:  mongoose.Schema.Types.ObjectId,
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
})

module.exports = mongoose.model('Tutor', TutorSchema)
