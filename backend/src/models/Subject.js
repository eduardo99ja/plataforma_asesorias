const mongoose = require('mongoose')
const slugify = require('slugify')

const SubjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Debe agregar un nombre'],
      unique: true,
      trim: true,
      maxlength: [50, 'El nombre no puede ser mayor a 50 caracteres'],
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Debe agregar una descripcion'],

      maxlength: [500, 'La descripcion no puede ser mayor a 50 caracteres'],
    },

    level: {
      // Array of strings
      type: String,
      required: true,
      //enum means only the elements of the array can be selected
      enum: ['Secundaria', 'Bachillerato', 'Licenciatura'],
    },
    photo: {
      type: String,
      default: 'no-photo.jpg',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  }, //virtuals
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

// Create subject slug  from the name
SubjectSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

// Reverse populate with virtuals
SubjectSchema.virtual('topics', {
  ref: 'Topic',
  localField: '_id',
  foreignField: 'subject',
  justOne: false,
})

module.exports = mongoose.model('Subject', SubjectSchema)
