import { BackendMethod, remult } from 'remult'
import { Task } from '@/shared/Task'

export class TaskController {
  @BackendMethod({ allowed: true })
  static async setAllCompleted(boolean: boolean) {
    const taskRepo = remult.repo(Task)
    for (const task of await taskRepo.find()) {
      await taskRepo.save({
        ...task,
        completed: boolean
      })
    }
  }
}
