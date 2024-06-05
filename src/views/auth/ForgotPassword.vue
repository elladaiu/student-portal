<template>
  <div class="tw-h-screen tw-flex tw-justify-center">
    <div
      class="tw-h-screen tw-p-8 tw-flex tw-flex-col tw-justify-center tw-items-center tw-relative md:tw-w-1/2 lg:tw-w-2/5"
    >
      <div class="tw-absolute tw-top-24 tw-left-2">
        <language-select></language-select>
      </div>
      <div class="tw-flex tw-flex-col tw-items-center tw-gap-2 mb-8">
        <img src="@/assets/img/logo.png" alt="logo" class="tw-w-14 tw-h-14" />
        <div class="tw-font-bold tw-text-2xl">Forgot password!</div>
        <div class="tw-text-gray-500 tw-text-xl">
          To start password reset process please enter the student № given to you by University.
        </div>
      </div>
      <v-form class="tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-4" ref="form">
        <v-text-field
          label="Student ID number"
          place-holder="Enter ID number"
          autocomplete="username"
        ></v-text-field>
        <v-btn color="primary" class="tw-w-full" @click="resetDialog = true">Reset password</v-btn>
        <div class="tw-flex tw-justify-center">
          <router-link :to="{ name: 'login' }">
            <v-btn variant="plain" prepend-icon="mdi-arrow-left">Back to log in</v-btn></router-link
          >
        </div>
      </v-form>
    </div>
    <v-dialog v-model="resetDialog" width="500">
      <v-card>
        <v-card-text>
          <div class="tw-flex tw-justify-end">
            <v-btn icon variant="plain" @click="resetDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-my-4">
            <v-icon size="large">mdi-key</v-icon>
          </div>
          <div class="tw-text-center">
            <div class="tw-font-bold tw-text-lg">Please check your email.</div>
            <div class="tw-mt-4 tw-text-gray-500">
              We have sent instructions to reset your password to your email address
              ellada.ismailova@alatoo.edu.kg
            </div>
          </div>
          <div class="tw-flex tw-justify-end tw-mt-4">
            <v-btn color="primary" @click="resetDialog = false"> Continue </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LanguageSelect from '@/components/app/LanguageSelect.vue'

const resetDialog = ref(false)
</script>
