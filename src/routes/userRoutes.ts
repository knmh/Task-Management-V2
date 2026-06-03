import { Router } from 'express'
import { userController } from '../controllers/userController'
import { requiredAuth } from '../middleware/requiredAuth'
import { requiredRole } from '../middleware/requiredRole'

const router = Router()


router.post('/', userController.create)


router.get('/', requiredAuth, userController.getAll)


router.get('/admin-only', requiredAuth, requiredRole('admin'), (req, res) => {
    res.json({ message: 'Only admin can see this' })
})


router.get('/moderator-area', requiredAuth, requiredRole('moderator', 'admin'), (req, res) => {
    res.json({ message: 'Moderator or admin area' })
})

router.route('/:id')
    .get(requiredAuth, userController.getOne)
    .patch(requiredAuth, userController.update)
    .delete(requiredAuth, requiredRole('admin'), userController.delete)

export default router