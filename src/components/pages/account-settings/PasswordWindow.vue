<template>
  <div class="tw-p-8">
    <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-8">
      <v-text-field :type="type.Current" label="Current password">
        <template #append-inner>
          <v-btn icon variant="plain" @click="togglePasswordType('Current')">
            <v-icon>{{ type.Current === 'password' ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-text-field :type="type.Password" label="Password">
        <template #append-inner>
          <v-btn icon variant="plain" @click="togglePasswordType('Password')">
            <v-icon>{{ type.Password === 'password' ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-text-field :type="type.Repeat" label="Repeat password">
        <template #append-inner>
          <v-btn icon variant="plain" @click="togglePasswordType('Repeat')">
            <v-icon>{{ type.Repeat === 'password' ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <v-btn color="primary" class="tw-w-full sm:tw-w-min">Save</v-btn>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const type = reactive({
  Current: 'password',
  Password: 'password',
  Repeat: 'password'
})

function togglePasswordType(_type) {
  type[_type] = type[_type] === 'password' ? 'text' : 'password'
}
</script>
