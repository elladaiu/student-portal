<template>
  <div>
    <div class="tw-flex tw-gap-4 tw-mb-4 tw-flex-wrap sm:tw-flex-nowrap">
      <div
        class="tw-w-full sm:tw-w-1/2 tw-flex tw-gap-y-4 sm:tw-gap-x-4 tw-items-center tw-flex-wrap sm:tw-flex-nowrap"
      >
        <div
          class="tw-w-full tw-bg-white tw-rounded-lg tw-p-4 tw-flex tw-gap-2 tw-flex-col sm:tw-h-full"
        >
          <div class="tw-flex">
            <div class="tw-text-gray-500 tw-mr-4 tw-w-2/5 tw-flex-shrink-0">Student №:</div>
            <span>200102037</span>
          </div>
          <div class="tw-flex">
            <div class="tw-text-gray-500 tw-mr-4 tw-w-2/5 tw-flex-shrink-0">Student Name:</div>
            <span>Ellada Ismailova</span>
          </div>
          <div class="tw-flex">
            <div class="tw-text-gray-500 tw-mr-4 tw-w-2/5 tw-flex-shrink-0">Level:</div>
            <span>Bachelor</span>
          </div>
          <div class="tw-flex">
            <div class="tw-text-gray-500 tw-mr-4 tw-w-2/5 tw-flex-shrink-0">Faculty:</div>
            <span>FACULTY OF ENGINEERING AND INFORMATICS</span>
          </div>
          <div class="tw-flex">
            <div class="tw-text-gray-500 tw-mr-4 tw-w-2/5 tw-flex-shrink-0">Specialty:</div>
            <span>510200 - Applied Math&Informatics - Bh</span>
          </div>
        </div>
        <div class="tw-flex tw-gap-4 sm:tw-flex-col sm:tw-h-full tw-w-full sm:tw-w-1/2">
          <div
            class="tw-bg-white tw-rounded-lg tw-w-full tw-h-full tw-flex-grow tw-p-4 tw-text-xl tw-justify-between tw-flex-col tw-flex"
          >
            <div class="tw-flex tw-justify-between tw-items-center tw-gap-2">
              <div>200</div>
              <v-icon> mdi-note-plus </v-icon>
            </div>
            <div class="tw-text-2xl tw-text-gray-500">Total credits</div>
          </div>
          <div
            class="tw-bg-white tw-rounded-lg tw-w-full tw-h-full tw-flex-grow tw-p-4 tw-text-xl tw-justify-between tw-flex-col tw-flex"
          >
            <div class="tw-flex tw-justify-between tw-items-center tw-gap-2">
              <div>3.96</div>
              <v-icon> mdi-star </v-icon>
            </div>
            <div class="tw-text-2xl tw-text-gray-500">GPA</div>
          </div>
        </div>
      </div>
      <div
        class="tw-w-full sm:tw-w-1/2 tw-bg-white tw-rounded-lg tw-p-4 tw-flex tw-flex-col tw-gap-2 tw-h-full"
      >
        <div class="tw-flex tw-gap-2 tw-justify-between tw-items-center">
          <div class="tw-text-2xl tw-text-gray-700">SPA</div>
          <div class="tw-flex tw-gap-8 tw-items-center">
            <div class="tw-flex tw-gap-2 tw-items-center">
              <div class="tw-w-6 tw-h-2 tw-rounded-full tw-bg-blue-500"></div>
              <span class="">1 Term</span>
            </div>
            <div class="tw-flex tw-gap-2 tw-items-center">
              <div class="tw-w-6 tw-h-2 tw-rounded-full tw-bg-violet-500"></div>
              <span class="">2 Term</span>
            </div>
          </div>
        </div>
        <div class="tw-justify-between tw-items-end tw-flex tw-gap-4 tw-flex-grow tw-h-full">
          <div class="tw-flex tw-gap-2 tw-flex-col tw-flex-grow">
            <div class="tw-text-lg tw-text-gray-500">100</div>
            <div class="tw-text-lg tw-text-gray-500">84</div>
            <div class="tw-text-lg tw-text-gray-500">69</div>
            <div class="tw-text-lg tw-text-gray-500">49</div>
            <div class="tw-text-lg tw-text-gray-500">0</div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2 tw-flex-grow tw-items-center">
            <div class="tw-flex tw-gap-1 tw-h-full tw-items-end">
              <div class="tw-w-8 tw-rounded tw-h-24 tw-bg-blue-800"></div>
              <div class="tw-w-8 tw-rounded tw-h-20 tw-bg-violet-800"></div>
            </div>
            <div class="tw-text-gray-400 tw-font-bold">2020-2021</div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2 tw-flex-grow tw-items-center">
            <div class="tw-flex tw-gap-1 tw-h-full tw-items-end">
              <div class="tw-w-8 tw-rounded tw-h-16 tw-bg-blue-800"></div>
              <div class="tw-w-8 tw-rounded tw-h-28 tw-bg-violet-800"></div>
            </div>
            <div class="tw-text-gray-400 tw-font-bold">2021-2022</div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2 tw-flex-grow tw-items-center">
            <div class="tw-flex tw-gap-1 tw-h-full tw-items-end">
              <div class="tw-w-8 tw-rounded tw-h-24 tw-bg-blue-800"></div>
              <div class="tw-w-8 tw-rounded tw-h-16 tw-bg-violet-800"></div>
            </div>
            <div class="tw-text-gray-400 tw-font-bold">2022-2023</div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2 tw-flex-grow tw-items-center">
            <div class="tw-flex tw-gap-1 tw-h-full tw-items-end">
              <div class="tw-w-8 tw-rounded tw-h-20 tw-bg-blue-800"></div>
            </div>
            <div class="tw-text-gray-400 tw-font-bold">2023-2024</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-rounded-lg tw-bg-white tw-p-4">
      <div class="tw-flex tw-items-center tw-gap-4 tw-font-bold tw-text-lg">
        <div>Year 2020-2021</div>
        <div>Term 1</div>
      </div>
      <v-data-table :headers="headers" :items="items" class="tw-mt-4">
        <template #bottom></template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
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
    value: 'credit',
    title: 'Credit'
  },
  {
    title: 'Grade',
    value: 'grade'
  },
  {
    value: 'letterGrade',
    title: 'Letter grade'
  },
  {
    value: 'traditional',
    title: 'Traditional'
  }
]

const items = [
  {
    code: 'MAT 407',
    course: 'Introduction to Data Science',
    credit: 4,
    grade: 91,
    letterGrade: 'A',
    traditional: 'Excellent'
  },
  {
    code: 'MAT 407',
    course: 'Introduction to Data Science',
    credit: 4,
    grade: 91,
    letterGrade: 'A',
    traditional: 'Excellent'
  },
  {
    code: 'MAT 407',
    course: 'Introduction to Data Science',
    credit: 4,
    grade: 91,
    letterGrade: 'A',
    traditional: 'Excellent'
  },
  {
    code: 'MAT 407',
    course: 'Introduction to Data Science',
    credit: 4,
    grade: 91,
    letterGrade: 'A',
    traditional: 'Excellent'
  },
  {
    grade: 'Total:',
    letterGrade: '90.6',
    traditional: 'GPA: 90.6'
  }
]
</script>
