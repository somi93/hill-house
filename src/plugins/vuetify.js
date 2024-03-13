/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import '@/styles/settings.scss'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  display: {
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1520,
      xxl: 2560,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#cfa975',
          // secondary: '#F14A16',
          secondary: '#e31e24',
          accent: '#F3F6Fa'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#b99d75',
          // secondary: '#F14A16',
          secondary: '#e31e24',
          accent: '#F3F6Fa'
        }
      },
    },
  },
})
