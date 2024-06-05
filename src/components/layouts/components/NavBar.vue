<template>
  <div
    class="layout-navbar tw-h-screen bg-primary tw-flex tw-py-6 tw-justify-between tw-flex-col tw-flex-shrink-0 tw-overflow-y-auto"
  >
    <div>
      <div class="tw-flex tw-gap-2 tw-items-center tw-justify-center tw-mt-6 tw-mb-12">
        <img src="@/assets/img/logo.png" alt="logo" class="tw-w-9 tw-h-9" />
        <div>My Ala-Too</div>
      </div>
      <div class="tw-px-4 tw-flex tw-gap-2 tw-flex-col">
        <nav-bar-link
          @click="onLinkClick"
          :to="{ name: 'home' }"
          icon="mdi-home"
          title="Home"
        ></nav-bar-link>
        <nav-bar-link
          @click="onLinkClick"
          :to="{ name: 'course' }"
          icon="mdi-folder-plus"
          title="Course Registration"
        ></nav-bar-link>
        <nav-bar-link
          @click="onLinkClick"
          :to="{ name: 'curriculum' }"
          icon="mdi-file-document-outline"
          title="My Curriculum"
        ></nav-bar-link>
        <nav-bar-link
          @click="onLinkClick"
          :to="{ name: 'accounting' }"
          icon="mdi-wallet"
          title="Accounting Information"
        ></nav-bar-link>
        <nav-bar-link
          @click="onLinkClick"
          :to="{ name: 'schedule' }"
          icon="mdi-calendar-outline"
          title="Course Schedule"
        ></nav-bar-link>
        <nav-bar-link
          @click="onLinkClick"
          :to="{ name: 'transcript' }"
          icon="mdi-chart-line"
          title="Transcript"
        ></nav-bar-link>
        <nav-bar-link
          @click="onLinkClick"
          :to="{ name: 'questionnaire' }"
          icon="mdi-comment-question"
          title="Questionnaire"
        ></nav-bar-link>
      </div>
    </div>
    <div class="tw-px-4 tw-flex tw-flex-col tw-gap-2">
      <nav-bar-link
        :href="'https://my.alatoo.edu.kg/common/download/guidelineiau.pdf'"
        type="anchor"
        icon="mdi-information-outline"
        title="Portal guideline"
      ></nav-bar-link>
      <hr />
      <button class="tw-flex tw-gap-2 tw-items-center tw-rounded-md tw-p-2" @click="logout">
        <v-icon>mdi-logout</v-icon>
        Sign out
      </button>
      <v-dialog v-model="signDialog" width="500">
        <v-card>
          <v-card-text>
            <div class="tw-flex tw-justify-end">
              <v-btn variant="plain" @click="signDialog = false" icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-my-8">
              <v-icon size="x-large"> mdi-chat-question </v-icon>
            </div>
            <div class="tw-text-center tw-text-xl tw-font-bold">
              Are you sure you want to sign out?
            </div>
            <div class="tw-text-center tw-text-lg tw-text-gray-500 tw-my-2">
              You are about to sign out from your account
            </div>
            <div class="tw-flex tw-justify-end tw-gap-2 tw-mt-8">
              <v-btn variant="plain" @click="signDialog = false"> Cancel </v-btn>
              <v-btn color="primary" @click="onSignOut"> Sign out </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
import NavBarLink from './NavBarLink.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const signDialog = ref(false)
const router = useRouter()
const emit = defineEmits(['click'])

function logout() {
  signDialog.value = true
}

function onSignOut() {
  signDialog.value = false
  router.push({ name: 'login' })
}

function onLinkClick() {
  emit('click')
}
</script>

<style scoped>
.layout-navbar {
  @apply tw-w-72;
}
</style>
