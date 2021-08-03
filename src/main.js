// import 'bootstrap'
import 'jquery'
import 'popper.js'
import { createApp } from 'vue'
import '@mdi/js'
import '@mdi/font/css/materialdesignicons.css'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')
