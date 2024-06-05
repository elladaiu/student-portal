<template>
  <div class="tw-p-4 sm:tw-p-8">
    <div class="tw-rounded-lg tw-bg-white tw-p-4">
      <div class="tw-flex tw-justify-between tw-items-center tw-gap-4 tw-flex-wrap">
        <v-tabs v-model="tab" class="tw-min-w-[300px]">
          <v-tab value="gradeList">Grade list</v-tab>
          <v-tab value="attendance">Attendance</v-tab>
        </v-tabs>
        <div class="tw-flex tw-gap-2">
          <div class="tw-flex">
            <v-select
              hide-details
              variant="solo"
              density="compact"
              label="Term"
              :items="[1, 2]"
              class="tw-w-[100px]"
            ></v-select>
          </div>
          <div class="tw-flex">
            <v-select
              hide-details
              variant="solo"
              density="compact"
              label="Year"
              :items="[1, 2]"
              class="tw-w-[100px]"
            ></v-select>
          </div>
        </div>
      </div>
      <v-window v-model="tab">
        <v-window-item value="gradeList">
          <v-data-table
            :headers="headers"
            :items="items"
            class="tw-mt-4"
            show-expand
            fixed-footer
            item-value="code"
          >
            <template #item.letterGrade="{ item }">
              <span class="text-success">{{ item.letterGrade }}</span></template
            >
            <template v-slot:expanded-row="{ columns, item }">
              <tr>
                <td :colspan="columns.length">Instructor: Ruslan Isaev</td>
              </tr>
              <tr>
                <td :colspan="columns.length">
                  <table class="tw-w-full tw-mb-4">
                    <tr class="tw-text-gray-500">
                      <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Midterm</td>
                      <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Final</td>
                      <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">MUE</td>
                      <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Total</td>
                    </tr>
                    <tr class="tw-text-gray-700">
                      <td class="tw-pt-4">90</td>
                      <td class="tw-pt-4">90</td>
                      <td class="tw-pt-4"></td>
                      <td class="tw-pt-4">90</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </template>
            <template #bottom></template>
          </v-data-table>
        </v-window-item>
        <v-window-item value="attendance">
          <v-data-table
            :headers="attendanceHeaders"
            :items="attendanceItems"
            class="tw-mt-4"
            fixed-footer
          >
            <template #header.checked>
              <v-icon color="green">mdi-check</v-icon>
            </template>
            <template #header.missed>
              <v-icon color="red">mdi-window-close</v-icon>
            </template>
            <template #header.question>
              <v-icon color="primary">mdi-debug-step-over</v-icon>
            </template>
            <template #bottom></template>
          </v-data-table>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const headers = [
  {
    value: 'code',
    title: 'Code'
  },
  {
    value: 'course',
    title: 'Course'
  },
  {
    value: 'credits',
    title: 'Credits',
    align: 'center'
  },
  {
    value: 'total',
    title: 'Total',
    align: 'center'
  },
  {
    value: 'letterGrade',
    title: 'Letter grade',
    align: 'center'
  }
]

const items = [
  {
    code: 'MAT 901',
    course: 'Introduction to Data Science',
    credits: 6,
    total: 91,
    letterGrade: 'A'
  },
  { code: 'MAT 902', course: 'Optimization Methods', credits: 6, total: 91, letterGrade: 'A' },
  {
    code: 'MAT 903',
    course: 'Introduction to Data Science',
    credits: 6,
    total: 91,
    letterGrade: 'A'
  },
  {
    code: 'MAT 904',
    course: 'Introduction to Data Science',
    credits: 6,
    total: 91,
    letterGrade: 'A'
  },
  {
    code: 'MAT 905',
    course: 'Introduction to Data Science',
    credits: 6,
    total: 91,
    letterGrade: 'A'
  },
  {
    code: 'MAT 906',
    course: 'Introduction to Data Science',
    credits: 6,
    total: 91,
    letterGrade: 'A'
  },
  {
    code: 'MAT 907',
    course: 'Introduction to Data Science',
    credits: 6,
    total: 91,
    letterGrade: 'A'
  },
  {
    code: 'MAT 908',
    course: 'Introduction to Data Science',
    credits: 6,
    total: 91,
    letterGrade: 'A'
  }
]

const attendanceHeaders = [
  {
    value: 'code',
    title: 'Code'
  },
  {
    value: 'course',
    title: 'Course'
  },
  {
    value: 'hours',
    title: 'Hours'
  },
  {
    value: 'absence',
    title: 'Absence'
  },
  {
    value: 'checked',
    title: ''
  },
  {
    value: 'missed',
    title: ''
  },
  {
    value: 'question',
    title: ''
  }
]

const attendanceItems = [
  {
    code: 'MAT 901',
    course: 'Introduction to Data Science',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  },
  {
    code: 'MAT 902',
    course: 'Optimization Methods',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  },
  {
    code: 'MAT 903',
    course: 'Introduction to Data Science',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  },
  {
    code: 'MAT 904',
    course: 'Introduction to Data Science',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  },
  {
    code: 'MAT 905',
    course: 'Introduction to Data Science',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  },
  {
    code: 'MAT 906',
    course: 'Introduction to Data Science',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  },
  {
    code: 'MAT 907',
    course: 'Introduction to Data Science',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  },
  {
    code: 'MAT 908',
    course: 'Introduction to Data Science',
    hours: 64,
    absence: '4%',
    checked: 64,
    missed: 0,
    question: 128
  }
]

const tab = ref('gradeList')
</script>
