import { createRouter, createWebHistory } from 'vue-router'
import ResourceList from '../components/ResourceList.vue'
import Newsletter from '../components/Newsletter.vue'

const routes = [
  {
    path: '/',
    name: 'ResourceList',
    component: ResourceList
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: Newsletter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
