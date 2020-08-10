import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './Doc/SwitchDemo.vue'
import IconDemo from './Doc/IconDemo.vue'
import ButtonDemo from './Doc/ButtonDemo.vue'

const history = createWebHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Doc',
      component: Doc,
      children: [
        {path: 'switch', component: SwitchDemo},
        {path: 'icon', component: IconDemo},
        {path: 'button', component: ButtonDemo}
      ]
    }
  ]
})