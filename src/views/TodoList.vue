<script setup lang="ts">
import { Task } from '@/shared/Task'
import { onMounted, onUnmounted, ref } from 'vue'
import { remult } from 'remult'
import { TaskController } from '@/shared/TaskController'

const tasks = ref<Task[]>()

const taskRepo = remult.repo(Task)
onMounted(() => {
  onUnmounted(
    taskRepo
      .liveQuery({
        limit: 10,
        page: 1
      })
      .subscribe((info) => (tasks.value = info.applyChanges(tasks.value)))
  )
})

const newTaskTitle = ref('')
const addNewTask = async () => {
  try {
    const task = await taskRepo.insert({ title: newTaskTitle.value })
    // tasks.value?.push(task)
    newTaskTitle.value = ''
  } catch (e: any) {
    alert(e.message)
  }
}
const saveTask = (task: Task) => {
  try {
    taskRepo.save(task)
  } catch (e) {
    alert(e)
  }
}

const deleteTask = async (task: Task) => {
  try {
    await taskRepo.delete(task)
    tasks.value = tasks.value?.filter((t) => t !== task)
  } catch (e) {
    alert(e)
  }
}

const setAllCompleted = (boolean: boolean) => {
  TaskController.setAllCompleted(boolean)
}
</script>

<template>
  <div>
    <h1>Tasks</h1>

    <main>
      <form @submit.prevent="addNewTask">
        <input type="text" v-model="newTaskTitle" />
        <button>Submit</button>
      </form>
      <div class="task" v-for="task of tasks" :key="task.id">
        <input type="checkbox" @change="saveTask(task)" v-model="task.completed" />
        <input type="text" v-model="task.title" />
        <button @click="saveTask(task)">Save</button>
        <button @click="deleteTask(task)">Delete</button>
      </div>
      <button @click="setAllCompleted(true)">Save All Completed</button>
      <button @click="setAllCompleted(false)">Save All Uncompleted</button>
    </main>
  </div>
</template>

<style scoped>
main {
  max-width: 500px;
  background-color: white;
  border: 1px solid #cccccc;
}
form,
.task {
  display: flex;
  align-items: center;
  padding: 0.5em;
  gap: 0.25em;
  border-bottom: 1px solid #ccc;
}

input {
  width: 100%;
  height: 100%;
  border: none;
  padding: 8px;
}
input[type='checkbox'] {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}
button {
  background-color: white;
  border-radius: 6px;
  border-color: #cccccc;
  cursor: pointer;
}
</style>
