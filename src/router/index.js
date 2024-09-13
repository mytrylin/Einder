import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import Index from '../views/Index.vue'
// import Per from '../views/Per.vue'

const Index = () => import('../views/Index.vue')
const Per = () => import('../views/Per.vue')

const router = createRouter ({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/per',
      name: 'per',
      component: Per,
    },
    { path: '/:catchAll(.*)', name: '404', component: Index } // router 例外處理
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (!window.location.hash) {
        // 為了防止頁面中的錨點功能被吃掉
        setTimeout(() => {
          resolve({ left: 0, top: 0 , behavior: 'smooth'})
        }, 300)
      }
    })
  }
})

export default router