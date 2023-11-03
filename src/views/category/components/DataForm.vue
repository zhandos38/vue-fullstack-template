<template>
  <form class="grid gap-y-4" @submit.prevent="handleSubmit(!v$.$invalid)">
    <div class="input-group">
      <label for="title">Наименование</label>
      <InputText
        v-model="v$.name.$model"
        placeholder="Введите наименование"
        class="w-full"
        :class="{
          'p-invalid': v$.name.$invalid && submitted
        }"
      />
    </div>
    <div class="input-group">
      <label for="title">Изображения</label>
      <FileUpload
        class="w-full"
        mode="basic"
        name="img"
        accept="image/*"
        :maxFileSize="1000000"
        choose-label="Выбрать изображения"
        cancel-label="Отменить"
        custom-upload
        @select="selectImg"
      />
      <div class="text-center mt-2" v-show="imgPreviewUrl">
        <img class="w-full" :src="imgPreviewUrl" />
      </div>
    </div>
    <div class="input-group">
      <label for="parentId">Родительская категория</label>
      <Dropdown
        id="parentId"
        v-model="state.parentId"
        placeholder="Выбрать родительскую категрию"
        class="w-full"
        :options="categories"
        option-label="name"
        option-value="id"
        show-clear
      />
    </div>

    <Button type="submit" label="Сохранить" severity="success" :loading="isLoading" />
  </form>
</template>

<script lang="ts" setup>
import Button from 'primevue/button'
import { onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import FileUpload from 'primevue/fileupload'
import { Category } from '@/shared/Category'
import { remult } from 'remult'
import { convertFileToBase64 } from '@/shared/utils/uploadFile'

interface IFormState {
  name: string
  parentId?: number
  imgFile?: any
  img?: string
}

const emits = defineEmits(['submit'])

const props = defineProps({
  record: Object as PropType<Category>,
  isLoading: {
    type: Boolean,
    default: false
  }
})
watch(
  () => props.record,
  (data) => {
    if (data) {
      state.value.name = data.name
      state.value.parentId = data.parentId

      if (data.img) {
        imgPreviewUrl.value = `/api/${data.img}`
      }
    }
  }
)

const categoryRepo = remult.repo(Category)

// form
const stateDefault: IFormState = {
  name: '',
  parentId: undefined,
  imgFile: undefined,
  img: undefined
}
const state = ref(stateDefault)
const rules = {
  name: { required }
}
const submitted = ref(false)
const v$ = useVuelidate(rules, state, { $autoDirty: true })

const handleSubmit = async (isFormValid: boolean) => {
  submitted.value = true
  if (!isFormValid) {
    return
  }

  emits('submit', state.value)
  resetForm()
}

const resetForm = () => {
  submitted.value = false
  state.value = { ...stateDefault }
}

const categories = ref<Category[]>([])
onMounted(async () => {
  categories.value = await categoryRepo.find()
})

// img
const imgPreviewUrl = ref<any>(null)
const selectImg = (event: any) => {
  state.value.imgFile = event.files[0]
  imgPreviewUrl.value = URL.createObjectURL(state.value.imgFile)

  uploadImg(event.files[0])
}

const uploadImg = async (file: File) => {
  state.value.img = file.name
  state.value.imgFile = await convertFileToBase64(file)
}
</script>

<style scoped></style>
