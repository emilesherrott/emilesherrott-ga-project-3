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

// CREATE COMMENTS
export const addComment = async (req, res) => {
  try {
    const { id } = req.params //CATCH ID FROM PARAMS
    const workspace = await Workspace.findById(id) 
    if (!workspace) throw new Error('No workspace found')
    const commentToAdd = { ...res.body, owner: req.currentUser._id }
    console.log('commentToAdd ->', commentToAdd)
    console.log('actuals comment for now ->', workspace.comments)
    workspace.comments.push(commentToAdd)
    console.log('actuals comments after pushing comment into comments.array ->', workspace.comments)
    await workspace.save()
    console.log('workspace withsaved comments ->', workspace)
    return res.status(200).json(workspace)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

// DELETE COMMENTS
export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params
    const workspace = await Workspace.findById(id)
    if (!workspace) throw new Error('Workspace not found')
    const commentToDelete = workspace.comment.id(commentId)
    if (!commentToDelete) throw new Error('Comment not found')
    await commentToDelete.remove() 
    await workspace.save()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}