const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors')

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

    //Mount routers
    // this.app.use('/api/v1/travels', travels)

    // this.app.use(errorHandler)
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
