<template>
  <div>
    <div class="tw-flex tw-gap-2 tw-mb-4 tw-flex-wrap sm:tw-flex-nowrap">
      <div
        class="tw-w-full sm:tw-w-1/2 tw-bg-white tw-rounded-lg tw-p-4 tw-flex tw-gap-2 tw-justify-between tw-items-center"
      >
        <div>
          <div class="tw-font-bold">Current year</div>
          <div>Balance</div>
        </div>
        <div class="tw-text-gray-500">2023-2024</div>
        <v-progress-circular
          :model-value="50"
          :rotate="360"
          :size="100"
          :width="15"
          color="primary"
        >
          <template v-slot:default> 50% </template>
        </v-progress-circular>
      </div>
      <div
        class="tw-w-full sm:tw-w-1/2 tw-bg-white tw-rounded-lg tw-p-4 tw-flex tw-gap-2 tw-justify-between tw-items-center"
      >
        <div>
          <div class="tw-font-bold">Current term</div>
          <div>Balance</div>
        </div>
        <div class="tw-text-gray-500">2023(1.Term)</div>
        <v-progress-circular
          :model-value="100"
          :rotate="360"
          :size="100"
          :width="15"
          color="primary"
        >
          <template v-slot:default> 100% </template>
        </v-progress-circular>
      </div>
    </div>
    <div class="tw-rounded-lg tw-bg-white tw-p-4">
      <v-data-table :headers="headers" :items="items" class="tw-mt-4" show-expand>
        <template v-slot:expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length" class="tw-font-bold">Payments</td>
          </tr>
          <tr>
            <td :colspan="columns.length">
              <table class="tw-w-full tw-mb-4">
                <tr class="tw-text-gray-500">
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Payments ddate</td>
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Payment code title</td>
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Payment amount</td>
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Payment remainder</td>
                </tr>
                <tr class="tw-text-gray-700">
                  <td class="tw-pt-4">07.04.2024</td>
                  <td class="tw-pt-4">Bank payment</td>
                  <td class="tw-pt-4">800</td>
                  <td class="tw-pt-4">0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td :colspan="columns.length" class="tw-font-bold">Discounts</td>
          </tr>
          <tr>
            <td :colspan="columns.length">
              <table class="tw-w-full tw-mb-4">
                <tr class="tw-text-gray-500">
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Title</td>
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Type</td>
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Percentage</td>
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Amount</td>
                  <td class="tw-border-b-[1px] tw-border-gray-200 tw-py-4">Calculated amount</td>
                </tr>
                <tr class="tw-text-gray-700">
                  <td class="tw-pt-4">Discount according to test placements</td>
                  <td class="tw-pt-4">ORT</td>
                  <td class="tw-pt-4">5</td>
                  <td class="tw-pt-4">0</td>
                  <td class="tw-pt-4">50</td>
                </tr>
              </table>
            </td>
          </tr>
        </template>
        <template #bottom></template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
const headers = [
  {
    value: 'year',
    title: 'Year'
  },
  {
    value: 'term',
    title: 'Term'
  },
  {
    value: 'calculatedFee',
    title: 'Calculated fee'
  },
  {
    value: 'balance',
    title: 'Balance'
  },
  {
    value: 'charges',
    title: 'Charges'
  },
  {
    value: 'totalBalance',
    title: 'Total Balance'
  },
  {
    value: 'paymentAmount',
    title: 'Payment amount'
  },
  {
    value: 'remainder',
    title: 'Remainder'
  },
  {
    value: 'currency',
    title: 'Currency'
  }
]

const items = [
  {
    id: 1,
    year: 2020,
    term: 1,
    calculatedFee: 800,
    balance: 0,
    totalBalance: 0,
    charges: 0,
    paymentAmount: 800,
    remainder: 800,
    currency: 'USD'
  },
  {
    id: 2,
    year: 2020,
    term: 1,
    calculatedFee: 800,
    balance: 0,
    totalBalance: 0,
    charges: 0,
    paymentAmount: 800,
    remainder: 800,
    currency: 'USD'
  },
  {
    id: 3,
    year: 2020,
    term: 1,
    calculatedFee: 800,
    balance: 0,
    totalBalance: 0,
    charges: 0,
    paymentAmount: 800,
    remainder: 800,
    currency: 'USD'
  },
  {
    id: 4,
    year: 2020,
    term: 1,
    calculatedFee: 800,
    balance: 0,
    totalBalance: 0,
    charges: 0,
    paymentAmount: 800,
    remainder: 800,
    currency: 'USD'
  },
  {
    id: 5,
    year: 2020,
    term: 1,
    calculatedFee: 800,
    balance: 0,
    totalBalance: 0,
    charges: 0,
    paymentAmount: 800,
    remainder: 800,
    currency: 'USD'
  },
  {
    id: 6,
    year: 2020,
    term: 1,
    calculatedFee: 800,
    balance: 0,
    totalBalance: 0,
    charges: 0,
    paymentAmount: 800,
    remainder: 800,
    currency: 'USD'
  },
  {
    id: 7,
    year: 2020,
    term: 1,
    calculatedFee: 800,
    balance: 0,
    totalBalance: 0,
    charges: 0,
    paymentAmount: 800,
    remainder: 800,
    currency: 'USD'
  }
]
</script>
