<script setup lang="ts">
import MainLayout from './MainLayout.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    if (metaLayout) {
      metaLayout = metaLayout.charAt(0).toUpperCase() + metaLayout.slice(1)
    }

    try {
      const component = metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}Layout.vue`))
      layout.value = markRaw(component?.default || MainLayout)
    } catch (e) {
      console.error(e)
      layout.value = markRaw(MainLayout)
    }
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>
