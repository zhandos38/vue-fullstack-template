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
import FormComponent from "@/views/category/components/DataForm.vue";
import Dialog from "primevue/dialog";
import { useAppToast } from "@/helpers/toast";
import { ref } from "vue";
import { remult } from "remult";
import { Category } from "@/shared/Category";
import { CategoryController } from "@/shared/CategoryController";

defineProps({
  show: Boolean,
});
const emits = defineEmits(["update:show"]);

const toast = useAppToast();
const categoryRepo = remult.repo(Category);

const isLoading = ref(false);
const handleSubmit = async (data: any) => {
  try {
    isLoading.value = true;
    // await categoryRepo.insert(data);
    CategoryController.uploadImg(data);
    toast.showSuccess("Успешно сохранено");
    emits("update:show", false);
  } catch (e) {
    toast.showError("Ошибка сервера");
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped></style>
