<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn append-icon="mdi-chevron-down" variant="plain" v-bind="props">
        <span>{{ language }}</span>
      </v-btn>
    </template>
    <v-list @click:select="onSelect" :selected="[language]">
      <v-list-item :value="'EN'">EN</v-list-item>
      <v-list-item :value="'KG'">KG</v-list-item>
      <v-list-item :value="'RU'">RU</v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const language = ref('EN')

function onSelect(value) {
  if (value.value && value.id && typeof value.id === 'string') {
    language.value = value.id
  }
}
</script>
