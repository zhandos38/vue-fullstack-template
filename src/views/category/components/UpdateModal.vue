<template>
  <Dialog
    class="w-1/2"
    modal
    header="Обновить запись"
    :visible="show"
    @update:visible="$emit('update:show', false)"
  >
    <DataForm :record="record" @submit="handleSubmit" />
  </Dialog>
</template>

<script lang="ts" setup>
import DataForm from "@/views/category/components/DataForm.vue";
import Dialog from "primevue/dialog";
import { useAppToast } from "@/helpers/toast";
import { ref, watch } from "vue";
import { remult } from "remult";
import { Category } from "@/shared/Category";

const props = defineProps({
  show: Boolean,
  recordId: Number || undefined,
});

const emits = defineEmits(["update:show"]);

const toast = useAppToast();
const categoryRepo = remult.repo(Category);

const isLoading = ref(false);
const handleSubmit = async (data: any) => {
  try {
    isLoading.value = true;
    if (!props.recordId) {
      throw new Error("recordId is not set");
    }

    await categoryRepo.update(props.recordId, data).then(() => {
      toast.showSuccess("Успешно сохранено");
    });
    emits("update:show", false);
  } catch {
    toast.showError("Ошибка сервера");
  } finally {
    isLoading.value = false;
  }
};

const record = ref<Category>();
watch(
  () => props.recordId,
  async (data) => {
    if (data) {
      record.value = await categoryRepo.findId(data);
    }
  }
);
</script>

<style scoped></style>
