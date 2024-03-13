import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {registerPlugins} from '@/plugins'

import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
import i18n from '@/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AOS)
app.use(i18n)
registerPlugins(app)

app.mount('#app')
