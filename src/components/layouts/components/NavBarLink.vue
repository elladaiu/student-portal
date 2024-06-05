<template>
  <router-link
    v-if="to && type === 'router-link'"
    :to="to"
    class="tw-flex tw-gap-2 tw-items-center tw-rounded-md tw-p-2"
    :class="{ 'link-active': isActive }"
  >
    <v-icon>{{ icon }}</v-icon>
    <div>
      {{ title }}
    </div>
  </router-link>
  <a
    v-else-if="type === 'anchor'"
    :href="href"
    class="tw-flex tw-gap-2 tw-items-center tw-rounded-md tw-p-2"
    :class="{ 'link-active': isActive }"
  >
    <v-icon>{{ icon }}</v-icon>
    <div>
      {{ title }}
    </div>
  </a>
  <div v-else class="tw-flex tw-gap-2 tw-items-center tw-rounded-md tw-p-2">
    <v-icon>{{ icon }}</v-icon>
    <div>
      {{ title }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
  to: Object,
  icon: String,
  title: String,
  type: {
    type: String,
    default: 'router-link'
  },
  href: {
    type: String,
    default: ''
  }
})

const isActive = computed(() => {
  if (typeof props.to === 'string') {
    return route.path === props.to
  }
  return props.to && route.name === props.to.name
})
</script>

<style scoped>
.link-active {
  background: #ffffff1a;
}
</style>
