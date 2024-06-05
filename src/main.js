import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const app = createApp(App)

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2D2652'
        },
        success: '#5CBD85'
      }
    }
  },
  components,
  directives,
  defaults: {
    VTextField: {
      variant: 'outlined'
    },
    VTextarea: {
      variant: 'outlined'
    },
    VSelect: {
      variant: 'filled'
    },
    VTabs: {
      color: '#4C49ED'
    }
  }
})

app.use(vuetify)

app.use(createPinia())
app.use(router)

app.mount('#app')
