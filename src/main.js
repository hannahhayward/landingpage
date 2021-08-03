// import 'bootstrap'
import 'jquery'
import 'popper.js'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')
// I will be creating a different pen with touch support but right // now I have no time for it due to school
