import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './Doc/SwitchDemo.vue'
import DialogDemo from './Doc/DialogDemo.vue'
import ButtonDemo from './Doc/ButtonDemo.vue'
import TabsDemo from './Doc/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'

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
        {path: '', component: DocDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'tabs', component: TabsDemo}
      ]
    }
  ]
})