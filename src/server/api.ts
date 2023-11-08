import { remultExpress } from 'remult/remult-express'
import { Task } from '@/shared/Task'
import { TaskController } from '@/shared/TaskController'
import { User } from '@/shared/User'
import { UserController } from '@/shared/UserController'
import { Category } from '@/shared/Category'
import { CategoryController } from '@/shared/CategoryController'

export const api = remultExpress({
  entities: [Task, User, Category],
  controllers: [TaskController, UserController, CategoryController],
  getUser: (req) => req.session!['user']
})
