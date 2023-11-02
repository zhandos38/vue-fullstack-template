<template>
  <main>
    <div class="flex justify-between">
      <span class="text-xl text-900 font-bold"> Категории товаров </span>
      <Button
        icon="pi pi-plus"
        rounded
        severity="info"
        @click="IsShowCreateModal = true"
      />
    </div>
    <DataTable
      class="p-datatable-sm mt-4"
      ref="dt"
      dataKey="id"
      :value="records"
      paginator
      lazy
      :rows="8"
      :total-records="totalRecords"
      @page="onPage($event)"
      show-gridlines
    >
      <Column field="id" header="id"></Column>
      <Column field="name" header="Наименование"></Column>
      <Column field="img" header="Изображение">
        <template #body="{ data }">
          <img v-if="data.img" :src="data.img" alt="img" style="height: 60px" />
          <div v-else>-</div>
        </template>
      </Column>
      <Column field="parentId" header="Родитель">
        <template #body="{ data }">
          {{
            categories.find((category) => category.id === data.parentId)?.name
          }}
        </template>
      </Column>
      <Column field="action" header="Действие">
        <template #body="{ data }">
          <div class="flex flex-wrap gap-2">
            <Button
              type="button"
              icon="pi pi-pencil"
              size="small"
              text
              rounded
              severity="info"
              @click="updateRow(data.id)"
            />
            <Button
              type="button"
              icon="pi pi-trash"
              size="small"
              text
              severity="danger"
              @click="deleteRow(data.id)"
            />
          </div>
        </template>
      </Column>
    </DataTable>

    <CreateModal v-model:show="IsShowCreateModal" @update:show="loadLazyData" />
    <UpdateModal
      v-model:show="IsShowUpdateModal"
      @update:show="handleCloseUpdateModal"
      :record-id="recordId"
    />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import { useAppToast } from "@/helpers/toast";
import CreateModal from "@/views/category/components/CreateModal.vue";
import UpdateModal from "@/views/category/components/UpdateModal.vue";
import { useAppConfirm } from "@/helpers/confirm";
import { useLoading } from "vue-loading-overlay";
import { Category } from "@/shared/Category";
import { remult } from "remult";

const toast = useAppToast();
const confirm = useAppConfirm();
const $loading = useLoading();

const categoryRepo = remult.repo(Category);

const dt = ref<any>(null);
const totalRecords = ref(10);
const records = ref<Category[]>([]);

const lazyParams = ref<any>({
  first: 0,
  rows: 0,
  sortField: null,
  sortOrder: null,
});

// load lazy data
const loadLazyData = async () => {
  const loader = $loading.show();
  records.value = await categoryRepo.find({
    limit: lazyParams.value.rows,
    page: lazyParams.value.page,
  });

  totalRecords.value = await categoryRepo.count();
  loader.hide();
};

// Pagination
const onPage = (event: any) => {
  lazyParams.value = event;
  loadLazyData();
};

// Form
const IsShowCreateModal = ref<boolean>(false);
const IsShowUpdateModal = ref<boolean>(false);
const recordId = ref<number>();
const updateRow = async (id: number) => {
  try {
    recordId.value = id;
    IsShowUpdateModal.value = true;
  } catch {
    toast.showError();
  }
};
const handleCloseUpdateModal = () => {
  loadLazyData();
  recordId.value = undefined;
  IsShowUpdateModal.value = false;
};

// Delete Row
function deleteRow(id: number) {
  confirm.showDelete({
    accept: async () => {
      try {
        await categoryRepo.delete(id);
        toast.showSuccess("Запись удалена");
        loadLazyData();
      } catch {
        toast.showError();
      }
    },
  });
}

const categories = ref<Category[]>([]);
onMounted(async () => {
  lazyParams.value.rows = dt.value.rows;
  await loadLazyData();

  categories.value = await categoryRepo.find();
});
</script>
