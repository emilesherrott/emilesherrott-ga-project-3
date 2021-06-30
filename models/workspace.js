import mongoose from 'mongoose'

//Define the schema for workspace, the schema is a blueprint for how we want each document for be formatted
const workspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  long: { type: String, required: true, unique: true },
  lat: { type: String, required: true, unique: true },
  link: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  textDescription: { type: String, required: true, unique: true, maxlength: 1000 },
  facilities: { type: Array }
})

export default mongoose.model('Workspace', workspaceSchema)