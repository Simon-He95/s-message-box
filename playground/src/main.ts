import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import ElementPlus from 'element-plus'
import { VerifyForm, VerifyFormField } from 'verify-form'
import { VividTyping } from 'vivid-typing'
import { sMessageBox } from '../../src'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.component('SMessageBox', sMessageBox)
app.component('VerifyForm', VerifyForm)
app.component('VerifyFormField', VerifyFormField)
app.component('VividTyping', VividTyping)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
