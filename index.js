import express from 'express'
import mongoose from 'mongoose' 
import { port, dbURI } from './config/environment.js' 
// import connectToDatabase from  './lib/connectToDb.js'
// import logger from './lib/logger.js'
import router from './config/router.js' 
// import errorHandler from './lib/errorHandler.js'
import path from 'path'



const app = express() 

const __dirname = path.resolve()


const startServer = async () => { 

  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('DATABASE IS CONNECTED SUCESSFULLY') 

    app.use((req, _res, next) => {
      console.log(` ICOMING REQUEST: METHOD: ${req.method}, URL IS: ${req.url}`)
      next()
    })

    app.use(express.static(`${__dirname}/client/build`))

    app.use(express.json())

    // app.use(logger)

    app.use('/api', router)

    app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`))

    // app.use(errorHandler)

    app.listen(port, () => console.log(`EXPRESS IS RUNNING ON PORT ${port}`)) 
  } catch (error) {
    console.log(error)
    console.log('something has gone wrong')
  }
}

startServer()