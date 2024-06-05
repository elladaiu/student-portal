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
        <v-btn @click="infoDialog = true" icon variant="text">
          <img src="@/assets/img/account.png" alt="logout" class="tw-w-10 tw-h-10" />
        </v-btn>
      </div>
    </div>
    <div class="tw-flex tw-items-center tw-gap-4 tw-justify-between tw-px-4">
      <span class="main-title">Home</span>
    </div>
    <router-view></router-view>
  </div>
  <div class="tw-hidden sm:tw-flex tw-h-screen">
    <nav-bar></nav-bar>
    <div class="tw-flex-grow tw-bg-gray-100 tw-h-screen tw-overflow-auto">
      <div class="tw-flex tw-items-center tw-gap-4 tw-justify-between tw-px-8 tw-pt-8">
        <span class="main-title">Home</span>
        <language-select></language-select>
      </div>
      <router-view></router-view>
    </div>
    <div class="layout-navbar-right tw-h-screen tw-flex-shrink-0 tw-p-8 tw-overflow-auto">
      <div class="tw-flex tw-justify-end tw-w-full">
        <router-link :to="{ name: 'account-settings' }">
          <v-icon>mdi-cog</v-icon>
        </router-link>
      </div>
      <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-mt-8">
        <img src="@/assets/img/account.png" alt="logout" class="tw-w-40 tw-h-40" />
      </div>
      <div class="tw-text-center">
        <div class="tw-font-bold tw-text-lg">Ellada Ismailova</div>
        <div class="tw-font-light tw-text-sm">ellada.ismailova@alatoo.edu.kg</div>
      </div>
      <div
        class="tw-flex tw-justify-between tw-items-center tw-w-full tw-bg-gray-100 tw-py-2 tw-px-4 tw-rounded-md tw-mt-8"
      >
        <span>Status:</span>
        <span class="tw-text-green-500">Studying</span>
      </div>
      <div
        class="tw-flex tw-justify-between tw-items-center tw-w-full tw-bg-gray-100 tw-py-2 tw-px-4 tw-rounded-md tw-mt-4"
      >
        <span>Registration date:</span>
        <span class="tw-text-purple-500">03.09.20</span>
      </div>
      <div
        class="tw-flex tw-justify-between tw-items-center tw-w-full tw-bg-gray-100 tw-py-2 tw-px-4 tw-rounded-md tw-mt-4"
      >
        <span>Last login date:</span>
        <span class="tw-text-purple-500">28.04.24</span>
      </div>
      <div class="tw-mt-8">
        <div class="tw-text-gray-500 tw-text-sm">Student ID number</div>
        <div>200102037</div>
      </div>
      <div class="tw-mt-4">
        <div class="tw-text-gray-500 tw-text-sm">Advisor</div>
        <div>Andrei Ermakov</div>
      </div>
      <div class="tw-mt-4">
        <div class="tw-text-gray-500 tw-text-sm">Program</div>
        <div>Applied Mathematics and Informatics</div>
      </div>
      <div class="tw-mt-4">
        <div class="tw-text-gray-500 tw-text-sm">Class</div>
        <div>MAT20</div>
      </div>
    </div>
  </div>
  <v-dialog v-model="infoDialog" fullscreen>
    <v-card>
      <v-card-text>
        <div class="tw-flex tw-justify-between tw-w-full">
          <v-btn icon @click="infoDialog = false" variant="text">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="tw-flex tw-gap-2 tw-items-center">
            <language-select></language-select>
            <router-link :to="{ name: 'account-settings' }">
              <v-icon>mdi-cog</v-icon>
            </router-link>
          </div>
        </div>
        <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-mt-8">
          <img src="@/assets/img/account.png" alt="logout" class="tw-w-40 tw-h-40" />
        </div>
        <div class="tw-text-center">
          <div class="tw-font-bold tw-text-lg">Ellada Ismailova</div>
          <div class="tw-font-light tw-text-sm">ellada.ismailova@alatoo.edu.kg</div>
        </div>
        <div
          class="tw-flex tw-justify-between tw-items-center tw-w-full tw-bg-gray-100 tw-py-2 tw-px-4 tw-rounded-md tw-mt-8"
        >
          <span>Status:</span>
          <span class="tw-text-green-500">Studying</span>
        </div>
        <div
          class="tw-flex tw-justify-between tw-items-center tw-w-full tw-bg-gray-100 tw-py-2 tw-px-4 tw-rounded-md tw-mt-4"
        >
          <span>Registration date:</span>
          <span class="tw-text-purple-500">03.09.20</span>
        </div>
        <div
          class="tw-flex tw-justify-between tw-items-center tw-w-full tw-bg-gray-100 tw-py-2 tw-px-4 tw-rounded-md tw-mt-4"
        >
          <span>Last login date:</span>
          <span class="tw-text-purple-500">28.04.24</span>
        </div>
        <div class="tw-mt-8">
          <div class="tw-text-gray-500 tw-text-sm">Student ID number</div>
          <div>200102037</div>
        </div>
        <div class="tw-mt-4">
          <div class="tw-text-gray-500 tw-text-sm">Advisor</div>
          <div>Andrei Ermakov</div>
        </div>
        <div class="tw-mt-4">
          <div class="tw-text-gray-500 tw-text-sm">Program</div>
          <div>Applied Mathematics and Informatics</div>
        </div>
        <div class="tw-mt-4">
          <div class="tw-text-gray-500 tw-text-sm">Class</div>
          <div>MAT20</div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import NavBar from '@/components/layouts/components/NavBar.vue'
import { ref } from 'vue'
import LanguageSelect from '../app/LanguageSelect.vue'

const sidebar = ref(false)
const infoDialog = ref(false)

function toggleSidebar() {
  sidebar.value = !sidebar.value
}
</script>

<style scoped>
.layout-navbar-right {
  @apply tw-w-80;
}
</style>
