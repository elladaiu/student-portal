<template>
  <div class="tw-p-8 tw-flex tw-gap-8 tw-flex-col">
    <div class="tw-bg-white tw-rounded-lg tw-p-4">
      <v-data-table :headers="headers" :items="items" class="tw-mt-4" fixed-footer>
        <template #bottom></template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
const headers = [
  {
    value: 'decisionType',
    title: 'Decision type'
  },
  {
    value: 'decisionDate',
    title: 'Decision date'
  },
  {
    value: 'decisionTopic',
    title: 'Decision topic'
  },
  {
    value: 'documentN',
    title: 'Document N'
  },
  {
    value: 'theTextOfTheDecision',
    title: 'The text of the decision'
  }
]

const items = [
  {
    id: 1,
    decisionType: 'RETURNED from Student Exchange Program',
    decisionDate: '01-09-2023',
    decisionTopic: 'Finish Exchange Program',
    documentN: '164',
    theTextOfTheDecision: 'Finish Exchange Program'
  },
  {
    id: 2,
    decisionType: 'RETURNED from Student Exchange Program',
    decisionDate: '01-09-2023',
    decisionTopic: 'Finish Exchange Program',
    documentN: '164',
    theTextOfTheDecision: 'Finish Exchange Program'
  },
  {
    id: 3,
    decisionType: 'RETURNED from Student Exchange Program',
    decisionDate: '01-09-2023',
    decisionTopic: 'Finish Exchange Program',
    documentN: '164',
    theTextOfTheDecision: 'Finish Exchange Program'
  },
  {
    id: 4,
    decisionType: 'RETURNED from Student Exchange Program',
    decisionDate: '01-09-2023',
    decisionTopic: 'Finish Exchange Program',
    documentN: '164',
    theTextOfTheDecision: 'Finish Exchange Program'
  }
]
</script>
