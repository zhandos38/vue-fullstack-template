<template>
  <main>
    <div class="flex justify-between">
      <span class="text-xl text-900 font-bold">Пользователи</span>
      <div class="flex">
        <Button
          v-if="selectedRows.length"
          size="small"
          icon="pi pi-trash"
          text
          raised
          rounded
          outlined
          severity="danger"
          @click="deleteManyRows"
        />
        <Button
          class="ml-2"
          icon="pi pi-plus"
          rounded
          severity="info"
          @click="showFormModal = true"
        />
      </div>
    </div>
    <DataTable
      class="p-datatable-sm mt-4"
      ref="dt"
      dataKey="id"
      v-model:selection="selectedRows"
      :value="users"
      paginator
      lazy
      :rows="8"
      :total-records="totalRecords"
      tableStyle="min-width: 50rem"
      @page="onPage"
      @row-click="updateRow($event)"
      show-gridlines
      row-hover
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="username" header="Логин"></Column>
      <Column field="name" header="Имя"></Column>
      <Column field="role" header="Роль">
        <template #body="{ data }">
          {{ roles.find((role) => role.value === data.role)?.label }}
        </template>
      </Column>
    </DataTable>

    <Dialog
      class="w-[50%]"
      v-model:visible="showFormModal"
      modal
      :header="row ? 'Обновить пользователя' : 'Добавить пользователя'"
    >
      <form class="grid gap-y-4" @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6">
            <div class="input-group">
              <label for="username">Логин</label>
              <InputText
                id="username"
                class="w-full"
                :class="{
                  'p-invalid': v$.username.$invalid && submitted,
                }"
                v-model="v$.username.$model"
              />
            </div>
          </div>
          <div class="col-span-6">
            <div class="input-group" v-if="!row">
              <label for="password">Пароль</label>
              <InputText
                id="password"
                class="w-full"
                :class="{
                  'p-invalid': v$.password.$invalid && submitted,
                }"
                v-model="v$.password.$model"
                placeholder="Введите пароль"
                type="password"
              />
            </div>
          </div>
          <div class="col-span-6">
            <div class="input-group">
              <label for="role">Роль</label>
              <Dropdown
                id="role"
                class="w-full"
                :class="{
                  'p-invalid': v$.role.$invalid && submitted,
                }"
                :options="roles"
                option-label="label"
                option-value="value"
                v-model="v$.role.$model"
                placeholder="Выберите роль"
              />
            </div>
          </div>
          <div class="col-span-6">
            <div class="input-group">
              <label for="name">Имя</label>
              <InputText
                id="name"
                class="w-full"
                :class="{
                  'p-invalid': v$.name.$invalid && submitted,
                }"
                v-model="v$.name.$model"
                placeholder="Введите имя"
              />
            </div>
          </div>
          <div class="col-span-6">
            <div class="input-group">
              <label for="surname">Фамилия</label>
              <InputText
                id="surname"
                class="w-full"
                v-model="v$.surname.$model"
                placeholder="Введите фамилию"
              />
            </div>
          </div>
        </div>

        <Button type="submit" label="Сохранить" severity="info" />
      </form>
    </Dialog>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Dropdown from "primevue/dropdown";
import { useAppToast } from "@/helpers/toast";
import { useAppConfirm } from "@/helpers/confirm";
import { assignParamsOfFirstFromSecondObject } from "@/helpers/functions";
import { User, UserRole, roles } from "@/shared/User";
import { remult } from "remult";
import { UserController } from "@/shared/UserController";

const toast = useAppToast();
const confirm = useAppConfirm();

const dt = ref<any>(null);
const totalRecords = ref(10);

const userRepo = remult.repo(User);
const users = ref<User[]>([]);

onMounted(async () => {
  lazyParams.value.rows = dt.value.rows;
  await loadLazyData();
});

const loadLazyData = async () => {
  users.value = await userRepo.find({
    limit: lazyParams.value.rows,
    page: lazyParams.value.page,
  });
  totalRecords.value = await userRepo.count();
};

const lazyParams = ref<any>({
  first: 0,
  rows: 0,
  sortField: null,
  sortOrder: null,
});

async function onPage(event: any) {
  lazyParams.value = event;
  await loadLazyData();
}

// User Form
const showFormModal = ref<boolean>(false);
const row = ref<User | null>(null);

const stateDefault = {
  username: "",
  name: "",
  surname: "",
  password: "",
  role: UserRole.USER,
};
const state = ref({ ...stateDefault });

const rules = computed(() => {
  const rules = {
    username: { required },
    name: { required },
    surname: {},
    role: { required },
    password: {},
  };

  if (!row.value) {
    rules.password = { required };
  }

  return rules;
});

const submitted = ref(false);
const v$ = useVuelidate(rules, state, { $autoDirty: true });

const handleSubmit = async (isFormValid: boolean) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }

  try {
    if (row.value) {
      await userRepo.update(row.value.id, {
        ...state.value,
      });
    } else {
      await userRepo.insert(state.value);
    }

    toast.showSuccess("Успешно создано");
    await loadLazyData();
    showFormModal.value = false;

    state.value = stateDefault;
    v$.value.$reset();
  } catch (err) {
    toast.showError("Какая-то ошибка");
  }
};

const updateRow = async (event: any) => {
  try {
    row.value = await userRepo.findId(event.data.id);

    state.value = assignParamsOfFirstFromSecondObject(state.value, row.value);

    showFormModal.value = true;
  } catch {
    toast.showError();
  }
};

const resetForm = () => {
  submitted.value = false;

  state.value = { ...stateDefault };
};

watch(
  () => showFormModal.value,
  (value) => {
    if (!value) {
      row.value = null;
      resetForm();
    }
  }
);

// Delete Row
const selectedRows = ref<User[]>([]);
function deleteManyRows() {
  const ids = selectedRows.value.map((selectedProduct) => selectedProduct.id);
  confirm.showDelete({
    accept: async () => {
      try {
        await UserController.deleteMany(ids);
        toast.showSuccess("Запись удалена");
        loadLazyData();
      } catch {
        toast.showError();
      }
    },
  });
}
</script>
