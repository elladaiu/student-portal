<template>
  <div class="tw-p-8 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-8 tw-items-start">
    <div>
      <v-textarea rows="2" :label="data.thesisTopicEn.label"></v-textarea>
      <v-textarea rows="2" :label="data.thesisTopicRu.label"></v-textarea>
      <v-textarea rows="2" :label="data.thesisTopicKg.label"></v-textarea>
      <v-text-field :label="data.level.label"></v-text-field>
    </div>
    <div>
      <v-text-field :label="data.university.label"></v-text-field>
      <v-text-field :label="data.teacher.label"></v-text-field>
      <v-text-field :label="data.reviewer.label"></v-text-field>
      <div class="tw-grid tw-grid-cols-2 tw-gap-8">
        <v-text-field :label="data.beginYear.label"></v-text-field>
        <v-text-field :label="data.defenceYear.label"></v-text-field>
      </div>
      <div class="tw-flex tw-justify-end">
        <v-btn color="primary">Save</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = {
  thesisTopicEn: {
    label: 'Thesis topic EN'
  },
  university: {
    label: 'University'
  },
  teacher: {
    label: 'Teacher'
  },
  thesisTopicRu: {
    label: 'Thesis topic RU'
  },
  reviewer: {
    label: 'Reviewer'
  },
  thesisTopicKg: {
    label: 'Thesis topic KG'
  },
  beginYear: {
    label: 'Begin year'
  },
  defenceYear: {
    label: 'Defence year'
  },
  level: {
    label: 'Level'
  }
}
</script>
