// // router.js
// import { createRouter, createWebHistory } from 'vue-router'
// import AppDois from '../view/AppDois.vue'
// import AppUm from '../AppUm.vue'
// import HelloWorld from '../components/HelloWorld.vue'

// const routes = [
//   { path: '/', component: AppUm },
//   { path: '/app-dois', component: AppDois },
//   { path: '/', component: HelloWorld}
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router'
import AppDois from '../view/AppDois.vue'
import AppTres from '../view/AppTres.vue'

const routes = [
  {
    path: '/app-dois',
    name: 'AppDois',
    component: AppDois,
  },
  {
    path: '/app-tres',
    name: 'AppTres',
    component: AppTres,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
