<template>
  <div class="tw-p-8 tw-flex tw-gap-8 tw-flex-col">
    <div class="tw-bg-white tw-rounded-lg tw-p-4">
      <div class="tw-font-bold tw-text-xl">Registration address</div>
      <v-data-table :headers="headers" :items="items" class="tw-mt-4" fixed-footer>
        <template #bottom></template>
      </v-data-table>
    </div>
    <div class="tw-bg-white tw-rounded-lg tw-p-4">
      <div class="tw-font-bold tw-text-xl">Current address</div>
      <v-data-table :headers="headers" :items="items" class="tw-mt-4" fixed-footer>
        <template #bottom></template>
      </v-data-table>
    </div>
    <div class="tw-bg-white tw-rounded-lg tw-p-4">
      <div class="tw-font-bold tw-text-xl">Place of birth</div>
      <v-data-table :headers="headers" :items="items" class="tw-mt-4" fixed-footer>
        <template #bottom></template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
const headers = [
  {
    value: 'country',
    title: 'Country'
  },
  {
    value: 'region',
    title: 'Region'
  },
  {
    value: 'addressLine',
    title: 'Address Line'
  },
  {
    value: 'province',
    title: 'Province'
  },
  {
    value: 'city',
    title: 'City'
  }
]

const items = [
  {
    country: 'Kyrgyzstan',
    region: 'Chui region',
    addressLine: 'Street Moskovskaya',
    province: 'Chui region',
    city: 'Bishkek'
  }
]
</script>
