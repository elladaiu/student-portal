<template>
  <div class="tw-flex tw-gap-8 tw-p-8 tw-items-start tw-flex-col sm:tw-flex-row">
    <div class="tw-flex tw-items-center tw-gap-8 tw-flex-col tw-w-full sm:tw-w-min">
      <img src="@/assets/img/account.png" alt="logo" class="tw-w-36 tw-h-36" />
      <v-btn color="primary" variant="text" prepend-icon="mdi-pencil" @click="photoDialog = true">
        Edit photo
      </v-btn>
    </div>
    <div
      class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-8 tw-flex-grow tw-w-full sm:tw-w-min"
    >
      <v-text-field :label="data.email.label" :model-value="data.email.value"></v-text-field>
      <v-text-field
        :label="data.attestatType.label"
        :model-value="data.attestatType.value"
      ></v-text-field>
      <v-text-field
        :label="data.birthDate.label"
        :model-value="data.birthDate.value"
      ></v-text-field>
      <v-text-field
        :label="data.attestatNo.label"
        :model-value="data.attestatNo.value"
      ></v-text-field>
      <v-text-field
        :label="data.citizenship.label"
        :model-value="data.citizenship.value"
      ></v-text-field>
      <v-text-field
        :label="data.attestatIssueDate.label"
        :model-value="data.attestatIssueDate.value"
      ></v-text-field>
      <v-text-field
        :label="data.documentType.label"
        :model-value="data.documentType.value"
      ></v-text-field>
      <v-text-field
        :label="data.entranceExam.label"
        :model-value="data.entranceExam.value"
      ></v-text-field>
      <v-text-field
        :label="data.documentNumber.label"
        :model-value="data.documentNumber.value"
      ></v-text-field>
      <v-text-field :label="data.untScore.label" :model-value="data.untScore.value"></v-text-field>
      <v-text-field
        :label="data.documentAuthority.label"
        :model-value="data.documentAuthority.value"
      ></v-text-field>
      <v-text-field
        :label="data.untExamCode.label"
        :model-value="data.untExamCode.value"
      ></v-text-field>
      <v-text-field
        :label="data.documentIssueDate.label"
        :model-value="data.documentIssueDate.value"
      ></v-text-field>
      <v-text-field
        :label="data.untIssueDate.label"
        :model-value="data.untIssueDate.value"
      ></v-text-field>
    </div>
    <v-dialog v-model="photoDialog" width="500">
      <v-card>
        <v-card-text class="px-10">
          <div class="tw-flex tw-justify-end">
            <v-btn icon variant="plain" @click="photoDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="tw-text-xl tw-text-center">Paste the image here</div>
          <div class="tw-text-gray-500 tw-text-center tw-mt-4">
            It is supposed not to pass 25 KB and is to be 3x4 ratio in size.
          </div>
          <div
            class="tw-border-2 tw-border-dashed tw-rounded-lg tw-p-8 tw-flex tw-flex-col tw-items-center tw-mt-8"
          >
            <v-icon size="large">mdi-image</v-icon>
            <div class="tw-text-center tw-text-gray-500 tw-text-lg tw-mt-4">
              Drop your image or browse
            </div>
          </div>
          <div class="tw-flex tw-justify-end tw-mt-4">
            <v-btn color="primary" variant="plain" @click="photoDialog = false"> Cancel </v-btn>
            <v-btn color="primary" @click="photoDialog = false"> Change </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const photoDialog = ref(false)
const data = {
  email: { label: 'Email', value: 'ellada.ismailova@alatoo.edu.kg' },
  attestatType: { label: 'Attestat type', value: 'Certificate' },
  birthDate: { label: 'Birth date', value: '01.01.02' },
  attestatNo: { label: 'Attestat no', value: '12345' },
  citizenship: { label: 'Citizenship', value: 'Kyrgyzstan' },
  attestatIssueDate: { label: 'Attestat issue date', value: '01.01.20' },
  documentType: { label: 'Document type', value: 'Identity card' },
  entranceExam: { label: 'Entrance exam', value: 'Unified National Testing' },
  documentNumber: { label: 'Document number', value: '12345' },
  untScore: { label: 'UNT score', value: '123' },
  documentAuthority: { label: 'Document authority', value: '12345' },
  untExamCode: { label: 'UNT exam code', value: '12345' },
  documentIssueDate: { label: 'Document issue date', value: '01.01.20' },
  untIssueDate: { label: 'UNT issue date', value: '01.01.20' }
}
</script>
