<template>
  <div class="tw-block sm:tw-hidden tw-h-screen tw-relative tw-bg-gray-100">
    <div
      v-if="sidebar"
      class="tw-absolute tw-z-10 tw-top-0 tw-h-screen tw-bg-gray-400 tw-w-full tw-opacity-75"
      @click="toggleSidebar"
    ></div>
    <div class="tw-absolute tw-z-20 tw-top-0 tw-h-screen tw-w-72" v-if="sidebar">
      <nav-bar @click="toggleSidebar"></nav-bar>
    </div>
    <div class="tw-flex tw-justify-between tw-items-center tw-gap-2">
      <v-btn icon variant="plain" @click="toggleSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="tw-flex tw-gap-2 tw-items-center tw-p-4">
        <language-select></language-select>
        <img src="@/assets/img/account.png" alt="logout" class="tw-w-10 tw-h-10" />
      </div>
    </div>
    <div class="tw-flex tw-items-center tw-gap-4 tw-justify-between tw-px-4">
      <span class="main-title">{{ title }}</span>
    </div>
    <div class="tw-p-4">
      <router-view></router-view>
    </div>
  </div>
  <div class="tw-hidden sm:tw-flex tw-h-screen">
    <nav-bar></nav-bar>
    <div class="tw-flex-grow tw-bg-gray-100 tw-p-8 tw-h-screen tw-overflow-y-auto">
      <div class="tw-flex tw-items-center tw-gap-4 tw-justify-between tw-mb-8">
        <span class="main-title">{{ title }}</span>
        <div class="tw-flex tw-gap-2 tw-items-center">
          <language-select></language-select>
          <img src="@/assets/img/account.png" alt="logout" class="tw-w-10 tw-h-10" />
          <div>Ellada Ismailova</div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/layouts/components/NavBar.vue'
import LanguageSelect from '@/components/app/LanguageSelect.vue'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const title = computed(() => {
  if (route.meta.title) return route.meta.title
  return 'Home'
})

const sidebar = ref(false)

function toggleSidebar() {
  sidebar.value = !sidebar.value
}
</script>

<style scoped>
.layout-navbar-right {
  @apply tw-w-80;
}
</style>
