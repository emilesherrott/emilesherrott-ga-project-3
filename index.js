import express from 'express' //! 1.0 import express
import mongoose from 'mongoose' //! 2.0 import mongoose
import { port, dbURI } from './config/environment.js' //! 3.0 create environment component 
// import connectToDatabase from  './lib/connectToDb.js'
// import logger from './lib/logger.js'
import router from './config/router.js' //! 10
// import errorHandler from './lib/errorHandler.js'
import path from 'path'



const app = express() //! 4.0 create express app

const __dirname = path.resolve()


const startServer = async () => { //! 5.0 get server running

  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('DATABASE IS CONNECTED SUCESSFULLY') //! 6.0 connect mongoose to DB and log it

    app.use((req, _res, next) => { //! 7.0 logger of request method and url of direction it goes to
      console.log(` ICOMING REQUEST: METHOD: ${req.method}, URL IS: ${req.url}`)
      next()
    })

    app.use(express.static(`${__dirname}/client/build`))

    app.use(express.json())

    // app.use(logger)

    app.use('/api', router)

    app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`))

    // app.use(errorHandler)

    app.listen(port, () => console.log(`EXPRESS IS RUNNING ON PORT ${port}`)) //! 9.0 
  } catch (error) {
    console.log(error)
    console.log('something has gone wrong')
  }
}

startServer()