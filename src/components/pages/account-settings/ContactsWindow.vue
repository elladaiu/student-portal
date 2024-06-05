<template>
  <div class="tw-p-8">
    <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3">
      <v-text-field label="Phone number" :model-value="'+996700123123'"></v-text-field>
    </div>
    <v-btn color="primary" prepend-icon="mdi-plus" @click="fieldDialog = true" class="tw-w-full"
      >Add new field</v-btn
    >
    <v-dialog v-model="fieldDialog" width="500">
      <v-card>
        <v-card-text>
          <div class="tw-flex tw-justify-between tw-items-center tw-gap-4 tw-mb-4">
            <div class="tw-text-lg">Add new</div>
            <v-btn icon variant="plain" @click="fieldDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div>
            <v-text-field label="Type" placeholder="Type"></v-text-field>
            <v-text-field label="Phone number" placeholder="Phone number"></v-text-field>
          </div>
          <div class="tw-flex tw-justify-end tw-mt-4">
            <v-btn color="primary" variant="plain" @click="fieldDialog = false"> Cancel </v-btn>
            <v-btn color="primary" @click="fieldDialog = false"> Save </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fieldDialog = ref(false)
</script>
