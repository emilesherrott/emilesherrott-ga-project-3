//import the model from emil
import Workspace from '../models/workspace.js'
//i have used "Workspace" as a model

//GET REQUEST '/workspaces'
export const getAllWorkspaces = async (_req, res) => {
  const workspaces = await Workspace.find()
  return res.status(200).json(workspaces)
}





//ADD A NEW WORKSPACE '/workspaces'
export const addWorkspace = async (req, res) => {
  try {
    const workspaceToAdd = await Workspace.create(req.body)
    return res.status(201).json(workspaceToAdd)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}


//GET ONE WORKSPACE 'workspace/:id'
export const getWorkspace = async (req, res) => {
  try {
    const { id } = req.params
    const oneWorkspace = await Workspace.findById(id)
    if (!oneWorkspace) throw new Error()
    return res.status(200).json(oneWorkspace)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ 'message': 'Workspace not found' })
  }
}