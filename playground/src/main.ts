import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { sMessageBox } from '../../src'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.component('s-message-box', sMessageBox)
app.use(router)
app.mount('#app')
