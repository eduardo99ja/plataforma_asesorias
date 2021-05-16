const path = require('path')
const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const cors = require('cors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const auth = require('./routes/auth')
const tutors = require('./routes/tutors')
const pupils = require('./routes/pupils')
const subjects = require('./routes/subjects')
const themes = require('./routes/themes')

class Server {
  constructor() {
    this.app = express()

    connectDB()
  }

  middlewares() {
    //body parser
    this.app.use(express.json())
    //dev logging middleware
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'))
    }

    // Enable CORS
    this.app.use(cors())

    // this.app.use(errorHandler)
    if (process.env.NODE_ENV === 'production') {
      path.join(__dirname, '..')
      this.app.use(
        express.static(
          path.join(
            path.normalize(path.join(__dirname, '..')),
            '/../frontend/out'
          )
        )
      )

      // this.app.get('*', (req, res) =>
      //   res.sendFile(path.resolve(__dirname, 'frontend', 'out', 'index.html'))
      // )
    }
    // else {
    //   this.app.get('/', (req, res) => {
    //     res.send('API is running....')
    //   })
    // }
    //Mount routers

    this.app.use('/api/v1/subjects', subjects)
    this.app.use('/api/v1/themes', themes)
    this.app.use('/api/v1/auth', auth)
    this.app.use('/api/v1/tutors', tutors)
    this.app.use('/api/v1/pupils', pupils)

    this.app.use(errorHandler)
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares()

    const PORT = process.env.PORT || 5000
    const server = this.app.listen(
      PORT,
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
      )
    )
    //Handle inhandled promises rejections

    process.on('unhandledRejection', (err, promise) => {
      console.log(`Error: ${err.message}`.red)
      //close server and exit process
      server.close(() => process.exit(1))
    })
  }
}

module.exports = Server
