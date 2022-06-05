import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ToDoView from '../views/ToDoView.vue'
import NotFoundView from '../views/NotFoundView'

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/todo',
    name: 'todo',
    component: ToDoView
  },
  { path: "/:pathMatch(.*)*", component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
