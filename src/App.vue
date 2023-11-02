<template>
  <AppLayout />

  <Toast />
  <ConfirmDialog />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'
import AppLayout from '@/layouts/AppLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
    Toast,
    ConfirmDialog
  }
})
</script>

<style scoped></style>
