<template>
  <Dialog
    class="w-1/2"
    modal
    header="Добавить запись"
    :visible="show"
    @update:visible="$emit('update:show', false)"
  >
    <FormComponent @submit="handleSubmit" :is-loading="isLoading" />
  </Dialog>
</template>

<script lang="ts" setup>
import FormComponent from '@/views/category/components/DataForm.vue'
import Dialog from 'primevue/dialog'
import { useAppToast } from '@/helpers/toast'
import { ref } from 'vue'
import { CategoryController } from '@/shared/CategoryController'

defineProps({
  show: Boolean
})
const emits = defineEmits(['update:show'])

const toast = useAppToast()

const isLoading = ref(false)
const handleSubmit = async (data: any) => {
  try {
    isLoading.value = true
    await CategoryController.create(data)
    toast.showSuccess('Успешно сохранено')
    emits('update:show', false)
  } catch (e) {
    toast.showError('Ошибка сервера')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped></style>
