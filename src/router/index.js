import  {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../views/Home.vue'
import PageNotFound from '../views/NotFound.vue'
import PageShowThread from '../views/ShowThread.vue'
import sourceData from '@/data.json'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/thread/:id', name: 'Thread', component: PageShowThread, props: true, beforeEnter(to, from, next) {
    const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
    if (threadExists) {
      return next()
    } else {
      next({ name: 'NotFound', params: { pathMatch: to.path.substring(1).split('/')}, query: to.query, hash: to.hash})
    }
  }},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound}
]

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
})


