<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AuthLayout from './components/layouts/AuthLayout.vue'
import HomeLayout from './components/layouts/HomeLayout.vue'
import MainLayout from './components/layouts/MainLayout.vue'

const route = useRoute()
const layout = computed(() => {
  if (route.meta.layout === 'auth') return AuthLayout
  if (route.meta.layout === 'home') return HomeLayout
  return MainLayout
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
