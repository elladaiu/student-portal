<template>
  <div class="tw-rounded-lg tw-bg-white tw-p-4">
    <v-tabs v-model="tab">
      <v-tab value="main">Main courses</v-tab>
      <v-tab value="elective">Elective courses</v-tab>
      <v-tab value="selected">Selected courses</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="main">
        <v-data-table :headers="headers" :items="items" class="tw-mt-4">
          <template #bottom></template>
          <template #item.action>
            <v-btn color="blue" prepend-icon="mdi-plus" size="small" @click="addCourseDialog = true"
              >Add</v-btn
            >
          </template>
        </v-data-table>
      </v-window-item>
      <v-window-item value="elective">
        <v-data-table :headers="headers" :items="items" class="tw-mt-4">
          <template #bottom></template>
          <template #item.action>
            <v-btn color="blue" prepend-icon="mdi-plus" size="small" @click="addCourseDialog = true"
              >Add</v-btn
            >
          </template>
        </v-data-table>
      </v-window-item>
      <v-window-item value="selected">
        <v-data-table :headers="headers" :items="items" class="tw-mt-4">
          <template #bottom></template>
          <template #item.action>
            <v-btn color="red" size="small" @click="removeCourseDialog = true">Remove</v-btn>
          </template>
        </v-data-table>
        <div class="tw-flex tw-justify-end tw-mt-4 tw-p-2">
          <div class="tw-flex tw-gap-8 tw-text-sm">
            <span>Sum of ECTS:</span>
            <span>30</span>
          </div>
        </div>
      </v-window-item>
    </v-window>
    <v-dialog v-model="addCourseDialog" width="500">
      <v-card>
        <v-card-text>
          <div class="tw-flex tw-justify-end">
            <v-btn icon variant="plain" @click="addCourseDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-my-4">
            <v-icon size="large">mdi-file-document-plus</v-icon>
          </div>
          <div class="tw-text-center">
            <div class="tw-font-bold tw-text-lg">
              Do you want to add this course to your basket list?
            </div>
            <div class="tw-mt-4 tw-text-gray-500">
              This course will be added to you selected courses.
            </div>
          </div>
        </v-card-text>
        <div class="pa-6 tw-flex tw-justify-end tw-gap-2">
          <v-btn variant="plain" @click="addCourseDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="addCourseDialog = false">Yes</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="removeCourseDialog" width="500">
      <v-card>
        <v-card-text>
          <div class="tw-flex tw-justify-end">
            <v-btn icon variant="plain" @click="removeCourseDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-my-4">
            <v-icon size="large" color="red">mdi-trash-can</v-icon>
          </div>
          <div class="tw-text-center">
            <div class="tw-font-bold tw-text-lg">
              Do you want to delete this from your basket list?
            </div>
            <div class="tw-mt-4 tw-text-gray-500">
              This course will be deleted from your selected courses.
            </div>
          </div>
        </v-card-text>
        <div class="pa-6 tw-flex tw-justify-end tw-gap-2">
          <v-btn variant="plain" @click="removeCourseDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="removeCourseDialog = false">Yes</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const addCourseDialog = ref(false)
const removeCourseDialog = ref(false)

const tab = ref('main')
const headers = [
  {
    value: 'index',
    title: '#'
  },
  {
    value: 'code',
    title: 'Code'
  },
  {
    value: 'course',
    title: 'Course'
  },
  {
    value: 'credit',
    title: 'Credit'
  },
  {
    value: 'ects',
    title: 'ECTS'
  },
  {
    value: 'grade',
    title: 'Grade'
  },
  {
    value: 'action',
    title: ''
  }
]

const items = [
  {
    index: 1,
    code: 'MAT 901',
    course: 'Introduction to Data Science',
    credit: 6,
    ects: 9,
    grade: 'A'
  },
  {
    index: 2,
    code: 'MAT 902',
    course: 'Optimization Methods',
    credit: 6,
    ects: 9,
    grade: 'A'
  },
  {
    index: 3,
    code: 'MAT 903',
    course: 'Introduction to Data Science',
    credit: 6,
    ects: 9,
    grade: 'A'
  },
  {
    index: 4,
    code: 'MAT 904',
    course: 'Introduction to Data Science',
    credit: 6,
    ects: 9,
    grade: 'A'
  },
  {
    index: 5,
    code: 'MAT 905',
    course: 'Introduction to Data Science',
    credit: 6,
    ects: 9,
    grade: 'A'
  },
  {
    index: 6,
    code: 'MAT 906',
    course: 'Introduction to Data Science',
    credit: 6,
    ects: 9,
    grade: 'A'
  }
]
</script>
