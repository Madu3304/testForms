// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './AppUm.vue'
// import router from './router/router'
// import AppDois from './view/AppDois.vue'

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//   {
//   path: '/',
//   component: App
//   },
//   {
//   path: '/app-dois',
//   component: AppDois
//   }
//   ]
//   })

//   createApp(App).use(router).mount('#app')

import { createApp } from 'vue'

import App from '../src/AppUm.vue'
import router from './router/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
