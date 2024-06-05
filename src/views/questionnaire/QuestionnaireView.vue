<template>
  <div>
    <div class="tw-rounded-lg tw-bg-white tw-p-4">
      <v-data-table :headers="headers" :items="items" class="tw-mt-4">
        <template #item.index="{ index }"> {{ index + 1 }}</template>
        <template #item.action="{ item }">
          <v-btn v-if="item.action" color="blue" size="small" @click="addQuestionDialog = true"
            >open</v-btn
          >
          <div v-else>Done</div>
        </template>
        <template #bottom></template>
      </v-data-table>
      <v-dialog v-model="addQuestionDialog" width="800">
        <v-card>
          <v-card-text>
            <div class="tw-flex tw-justify-end">
              <v-btn icon variant="plain" @click="addQuestionDialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <div class="tw-text-xl tw-font-bold tw-text-center">
              Questionnaire for students of IAU
            </div>
            <div>
              <div class="tw-h-[1px] tw-w-full tw-bg-gray-200 tw-my-4"></div>
              <label class="tw-font-bold">How would you rate?</label>
              <div class="tw-flex tw-gap-2 tw-justify-between tw-items-center">
                <div>Unsatisfied</div>
                <div>
                  <v-radio-group inline hide-details>
                    <v-radio value="one"></v-radio>
                    <v-radio value="two"></v-radio>
                    <v-radio value="three"></v-radio>
                    <v-radio value="four"></v-radio>
                    <v-radio value="five"></v-radio>
                  </v-radio-group>
                </div>
                <div>Satisfied</div>
              </div>
            </div>
            <div>
              <div class="tw-h-[1px] tw-w-full tw-bg-gray-200 tw-my-4"></div>
              <label class="tw-font-bold">How would you rate?</label>
              <div class="tw-flex tw-gap-2 tw-justify-between tw-items-center">
                <div>Unsatisfied</div>
                <div>
                  <v-radio-group inline hide-details>
                    <v-radio value="one"></v-radio>
                    <v-radio value="two"></v-radio>
                    <v-radio value="three"></v-radio>
                    <v-radio value="four"></v-radio>
                    <v-radio value="five"></v-radio>
                  </v-radio-group>
                </div>
                <div>Satisfied</div>
              </div>
            </div>
            <div class="tw-h-[1px] tw-w-full tw-bg-gray-200 tw-my-4"></div>
            <div class="tw-flex tw-flex-col">
              <label class="tw-font-bold">How would you rate?</label>
              <textarea
                class="tw-border-2 tw-border-solid tw-border-gray-200 tw-rounded tw-resize-none tw-mt-2"
                rows="4"
              ></textarea>
            </div>
            <div class="tw-h-[1px] tw-w-full tw-bg-gray-200 tw-my-4"></div>
            <div class="tw-flex tw-flex-col">
              <label class="tw-font-bold">How would you rate?</label>
              <textarea
                class="tw-border-2 tw-border-solid tw-border-gray-200 tw-rounded tw-resize-none tw-mt-2"
                rows="4"
              ></textarea>
            </div>
            <div class="tw-flex tw-justify-end tw-gap-2 tw-mt-4">
              <v-btn variant="plain" @click="addQuestionDialog = false">Cancel</v-btn>
              <v-btn color="primary" @click="addQuestionDialog = false">Submit</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  {
    value: 'index',
    title: '#',
    width: 50
  },
  {
    value: 'name',
    title: 'Name'
  },
  {
    value: 'explanation',
    title: 'Explanation'
  },
  {
    value: 'question',
    title: 'Question'
  },
  {
    value: 'analysis',
    title: 'Analysis'
  },
  {
    value: 'action',
    title: '',
    align: 'center'
  }
]

const items = [
  {
    name: 'Questionnaire for students of IAU',
    explanation: 'Please fill in the following questionnaire',
    question: 10,
    action: true
  },
  {
    name: 'Questionnaire for students of IAU',
    explanation: 'Please fill in the following questionnaire',
    question: 10,
    action: true
  },
  {
    name: 'Questionnaire for students of IAU',
    explanation: 'Please fill in the following questionnaire',
    question: 10,
    action: true
  },
  {
    name: 'Questionnaire for students of IAU',
    explanation: 'Please fill in the following questionnaire',
    question: 10,
    action: false
  }
]

const addQuestionDialog = ref(false)
</script>
