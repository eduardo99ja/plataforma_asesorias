const mongoose = require('mongoose')
const slugify = require('slugify')

const ThemeSchema = new mongoose.Schema({
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
  subthemes: {
    type: [String],
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
  slug: String,
})

// Create theme slug  from the name
ThemeSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true })
  next()
})

module.exports = mongoose.model('Theme', ThemeSchema)
