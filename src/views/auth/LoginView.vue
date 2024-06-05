<template>
  <div class="tw-h-screen lg:tw-flex">
    <div class="tw-h-screen lg:tw-w-1/2 tw-flex tw-justify-center">
      <div
        class="tw-h-screen tw-p-8 tw-flex tw-flex-col tw-justify-center tw-items-center md:tw-w-1/2 lg:tw-w-full xl:tw-w-3/4 2xl:tw-w-1/2 tw-relative"
      >
        <div class="tw-absolute tw-top-10 tw-left-0">
          <language-select></language-select>
        </div>
        <div class="tw-flex tw-flex-col tw-items-center tw-gap-2 mb-8">
          <img src="@/assets/img/logo.png" alt="logo" class="tw-w-14 tw-h-14" />
          <div class="tw-font-bold tw-text-lg">Welcome back!</div>
          <div class="tw-text-gray-500">Student Information System</div>
        </div>
        <v-form class="tw-w-full tw-mt-4 tw-flex tw-flex-col tw-gap-4" ref="form">
          <v-text-field
            v-model="formData.id"
            label="Student ID number"
            place-holder="Enter ID number"
            :rules="[required]"
            autocomplete="username"
          ></v-text-field>
          <v-text-field
            v-model="formData.password"
            label="Password"
            place-holder="Enter password"
            :type="passwordType"
            :rules="[required]"
            autocomplete="current-password"
          >
            <template #append-inner>
              <v-btn icon variant="plain" @click="togglePasswordType">
                <v-icon>{{ passwordType === 'password' ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
              </v-btn>
            </template>
          </v-text-field>
          <div class="tw-flex tw-gap-2 tw-justify-between tw-items-center">
            <div>
              <v-checkbox label="Remember me" hide-details></v-checkbox>
            </div>
            <router-link :to="{ name: 'forgot-password' }">Forgot password?</router-link>
          </div>
          <v-btn color="primary" class="tw-w-full" @click="onLogin">Log in</v-btn>
          <v-btn variant="outlined" prepend-icon="mdi-google" @click="onLogin">
            Sign up with Google
          </v-btn>
        </v-form>
      </div>
    </div>
    <div class="tw-hidden lg:tw-block tw-h-screen tw-w-1/2">
      <img
        src="@/assets/img/login.png"
        alt="login-bg"
        class="tw-w-full tw-h-full tw-object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { required } from '@/utils/rules'
import { useRouter } from 'vue-router'
import LanguageSelect from '@/components/app/LanguageSelect.vue'

const router = useRouter()

const passwordType = ref('password')
const form = ref()
const formData = reactive({
  id: null,
  password: null
})

function togglePasswordType() {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}

function onLogin() {
  if (!form.value) return
  form.value.validate().then((data) => {
    if (data.valid) {
      router.push({ name: 'home' })
    }
  })
}
</script>
