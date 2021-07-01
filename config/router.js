import express from 'express'
import { getAllWorkspaces , addWorkspace, getWorkspace, updateWorkspace, deleteWorkspace } from '../controllers/workspaces.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getUserProfile } from '../controllers/users.js'


const router = express.Router()

router.route('/workspaces')
  .get(getAllWorkspaces)

router.route('/workspaces/:id')
  .get(getWorkspace)
  .put(secureRoute, updateWorkspace)
  .delete(secureRoute, deleteWorkspace)

router.route('/workspaces')
  .post(secureRoute, addWorkspace)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile) 

export default router