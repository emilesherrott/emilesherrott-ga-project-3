import express from 'express'
import { getAllWorkspaces , addWorkspace, getWorkspace } from '../controllers/workspaces.js'


const router = express.Router()

router.route('/workspaces').get(getAllWorkspaces)

router.route('/workspaces/:id').get(getWorkspace)

router.route('/workspaces').post(addWorkspace)

export default router