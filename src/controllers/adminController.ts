import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { User, UserRole } from '../entities/User'
import { catchAsync } from '../utils/catchAsync'
import { AppError } from '../middleware/errorHandler'

const userRepository = AppDataSource.getRepository(User)

export const adminController = {
    changeUserRole: catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { userId } = req.params
        const { role } = req.body

        if (!['admin', 'user', 'moderator'].includes(role)) {
            throw new AppError('Invalid role', 400)
        }

        const user = await userRepository.findOne({
            where: { id: Number(userId) }
        })

        if (!user) {
            throw new AppError('User not found', 404)
        }

        user.role = role as UserRole
        await userRepository.save(user)

        res.status(200).json({
            status: 'success',
            message: `User role changed to ${role}`,
            data: { id: user.id, username: user.username, role: user.role }
        })
    })
}
