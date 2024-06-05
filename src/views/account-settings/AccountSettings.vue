<template>
  <div>
    <v-tabs v-model="tab" grow>
      <v-tab value="general-information">General Information</v-tab>
      <v-tab value="contacts">Contacts</v-tab>
      <v-tab value="address">Address</v-tab>
      <v-tab value="parent-information">Parent Information</v-tab>
      <v-tab value="decisions">Decisions</v-tab>
      <v-tab value="dissertation">Dissertation</v-tab>
      <v-tab value="password">Password</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="general-information">
        <general-information></general-information>
      </v-window-item>
      <v-window-item value="contacts">
        <contacts-window></contacts-window>
      </v-window-item>
      <v-window-item value="address">
        <address-window></address-window>
      </v-window-item>
      <v-window-item value="parent-information">
        <parent-information></parent-information>
      </v-window-item>
      <v-window-item value="decisions">
        <decisions-window></decisions-window>
      </v-window-item>
      <v-window-item value="dissertation">
        <dissertation-window></dissertation-window>
      </v-window-item>
      <v-window-item value="password">
        <password-window></password-window>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GeneralInformation from '@/components/pages/account-settings/GeneralInformation.vue'
import ContactsWindow from '@/components/pages/account-settings/ContactsWindow.vue'
import AddressWindow from '@/components/pages/account-settings/AddressWindow.vue'
import ParentInformation from '@/components/pages/account-settings/ParentInformation.vue'
import DecisionsWindow from '@/components/pages/account-settings/DecisionsWindow.vue'
import DissertationWindow from '@/components/pages/account-settings/DissertationWindow.vue'
import PasswordWindow from '@/components/pages/account-settings/PasswordWindow.vue'

const tab = ref('general-information')
</script>
