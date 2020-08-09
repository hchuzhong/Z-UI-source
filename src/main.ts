import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './Doc/SwitchDemo.vue'
import IconDemo from './Doc/IconDemo.vue'
import ButtonDemo from './Doc/ButtonDemo.vue'
import './index.scss'

const history = createWebHistory()
const router = createRouter({
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
const app = createApp(App)
app.use(router)
app.mount('#app')