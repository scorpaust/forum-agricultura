import * as VueRouter from 'vue-router'

import App from './App.vue'
import HomePage from './components/HomePage.vue'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'

const routes = [
  { path: '/', component: HomePage }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes // short for `routes: routes`
})

const app = createApp(App)
app.use(vuetify)
app.use(router);
app.mount('#app')
