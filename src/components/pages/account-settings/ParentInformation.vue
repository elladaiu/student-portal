<template>
  <div class="tw-p-8 tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 tw-gap-8">
    <v-text-field :label="data.name.label" :model-value="data.name.value"></v-text-field>
    <v-text-field :label="data.surname.label" :model-value="data.surname.value"></v-text-field>
    <v-text-field
      :label="data.dateOfBirth.label"
      :model-value="data.dateOfBirth.value"
    ></v-text-field>
    <v-text-field
      :label="data.profession.label"
      :model-value="data.profession.value"
    ></v-text-field>
    <v-text-field :label="data.email.label" :model-value="data.email.value"></v-text-field>
    <v-text-field
      :label="data.phoneNumber.label"
      :model-value="data.phoneNumber.value"
    ></v-text-field>
  </div>
</template>

<script setup>
const data = {
  name: {
    label: 'Name',
    value: 'Ellada'
  },
  surname: {
    label: 'Surname',
    value: 'Ismailova'
  },
  dateOfBirth: {
    label: 'Date of Birth',
    value: '01.01.70'
  },
  profession: {
    label: 'Profession',
    value: 'Doctor'
  },
  email: {
    label: 'Email',
    value: 'email@gmail.com'
  },
  phoneNumber: {
    label: 'Phone number',
    value: '+996700700700'
  }
}
</script>
