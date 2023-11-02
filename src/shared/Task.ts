import { Entity, Fields } from 'remult'

@Entity('tasks', {
  allowApiCrud: true
})
export class Task {
  @Fields.autoIncrement()
  id = 0
  @Fields.string<Task>({
    validate: (task) => {
      if (task.title.length < 3) {
        throw Error('Too short')
      }
    }
  })
  title = ''
  @Fields.boolean()
  completed = false
}
