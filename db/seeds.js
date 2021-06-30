import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Workspace from '../models/workspace.js'
import workspaceData from './data/workspaces.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log(`DB connected to seeds`)

    //drop old db
    await mongoose.connection.db.dropDatabase()
    console.log(`DB dropped`)

    //create shows
    const workspaces = await Workspace.create(workspaceData)
    console.log(`DB seeds with ${workspaces.length} workspaces`)

    //close connection
    await mongoose.connection.close()
    console.log(`Connection Closed`)
    
  } catch (err) {
    console.log(err)
    console.log('🆘 Something has gone wrong')
    await mongoose.connection.close()
    console.log(`Bye`)
  }
}

seedDatabase()