<template>
  <div>
    <div class="tw-font-bold tw-text-lg tw-my-4">2020-Applied Math & Informatics - B.S.(EN)</div>
    <div class="tw-flex tw-gap-4 tw-my-4 tw-flex-wrap">
      <div class="tw-flex tw-gap-2 tw-items-center">
        <span class="tw-w-3 tw-h-3 tw-inline-block tw-bg-red-500 tw-rounded-full"></span>
        <span class="tw-text-sm tw-text-gray-700">Failed courses</span>
      </div>
      <div class="tw-flex tw-gap-2 tw-items-center">
        <span class="tw-w-3 tw-h-3 tw-inline-block tw-bg-blue-500 tw-rounded-full"></span>
        <span class="tw-text-sm tw-text-gray-700">Courses will be selected</span>
      </div>
      <div class="tw-flex tw-gap-2 tw-items-center">
        <span class="tw-w-3 tw-h-3 tw-inline-block tw-bg-green-500 tw-rounded-full"></span>
        <span class="tw-text-sm tw-text-gray-700">Successfully passed courses</span>
      </div>
      <div class="tw-flex tw-gap-2 tw-items-center">
        <span class="tw-w-3 tw-h-3 tw-inline-block tw-bg-orange-500 tw-rounded-full"></span>
        <span class="tw-text-sm tw-text-gray-700">Courses already selected</span>
      </div>
    </div>
    <div class="tw-rounded-lg tw-bg-white tw-p-4">
      <v-tabs v-model="tab">
        <v-tab value="main">Main courses</v-tab>
        <v-tab value="elective">Elective courses</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="main">
          <v-data-table :headers="headers" :items="items" class="tw-mt-4">
            <template #bottom></template>
            <template #item.action>
              <v-btn
                color="blue"
                prepend-icon="mdi-plus"
                size="small"
                @click="addCourseDialog = true"
                >Add</v-btn
              >
            </template>
            <template #item.grade="{ item }">
              <span class="text-success">{{ item.grade }}</span></template
            >
          </v-data-table>
        </v-window-item>
        <v-window-item value="elective">
          <v-data-table :headers="headers" :items="items" class="tw-mt-4">
            <template #bottom></template>
            <template #item.action>
              <v-btn
                color="blue"
                prepend-icon="mdi-plus"
                size="small"
                @click="addCourseDialog = true"
                >Add</v-btn
              >
            </template>
          </v-data-table>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const addCourseDialog = ref(false)

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
    title: 'Credit',
    align: 'center'
  },
  {
    value: 'ects',
    title: 'ECTS',
    align: 'center'
  },
  {
    value: 'grade',
    title: 'Grade',
    align: 'center'
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
