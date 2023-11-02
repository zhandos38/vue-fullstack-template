<template>
  <main class="h-screen">
    <div class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <div class="w-full max-w-md mx-auto p-6">
        <div
          class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <div class="text-4xl font-bold">Admin Panel</div>
              <p>Вход в админ панель</p>
            </div>

            <div class="mt-5">
              <!-- Form -->
              <form @submit.prevent="handleSubmit(!v$.$invalid)">
                <div class="grid gap-y-4">
                  <!-- Form Group -->
                  <div>
                    <label for="login" class="block text-sm mb-2 dark:text-white">Логин</label>
                    <div class="relative">
                      <Input
                        class="w-full"
                        :class="{
                          'border-red-500': v$.username.$invalid && submitted
                        }"
                        name="login"
                        type="text"
                        v-model="state.username"
                        placeholder="Введите логин"
                      />
                      <div
                        class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                      >
                        <svg
                          class="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <!-- Form Group -->
                  <div class="relative">
                    <Input
                      class="w-full"
                      :class="{
                        'border-red-500': v$.password.$invalid && submitted
                      }"
                      type="password"
                      v-model="state.password"
                      placeholder="Введите пароль"
                    />
                    <div
                      class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                    >
                      <svg
                        class="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <!-- End Form Group -->

                  <Button severity="info" type="submit" label="Войти" />
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { required } from '@vuelidate/validators'
import Input from 'primevue/inputtext'
import Button from 'primevue/button'
import { useVuelidate } from '@vuelidate/core'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { HttpStatusCode } from 'axios'
import { useAppToast } from '@/helpers/toast'

const toast = useAppToast()
const router = useRouter()
const authStore = useAuthStore()

const state = reactive({
  username: '',
  password: ''
})

const rules = {
  username: { required }, // Matches state.firstName
  password: { required } // Matches state.lastName
}

const submitted = ref(false)
const v$ = useVuelidate(rules, state)

const handleSubmit = async (isFormValid: boolean) => {
  submitted.value = true
  if (!isFormValid) {
    return
  }

  await authStore.login(state.username, state.password).catch((err) => {
    if (err && err.response && err.response.status === HttpStatusCode.Unauthorized) {
      toast.showError('Неверный пароль или логин')
    } else {
      toast.showError('Возникла какая-то ошибка')
    }
  })
}

onMounted(async () => {
  if (authStore.getIsLoggedIn()) {
    await router.push('/')
  }
})
</script>
