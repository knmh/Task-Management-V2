import { Router } from 'express'
import { adminController } from '../controllers/adminController'
import { requiredAuth } from '../middleware/requiredAuth'
import { requiredRole } from '../middleware/requiredRole'

const router = Router()

router.use(requiredAuth, requiredRole('admin'))

router.patch('/users/:userId/role', adminController.changeUserRole)

export default router
