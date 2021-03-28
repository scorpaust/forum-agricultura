import  {createRouter, createWebHistory} from 'vue-router'

import AppCategory from '../components/AppCategory.vue'
import Forum from '../views/Forum.vue'
import HomePage from '../views/Home.vue'
import PageNotFound from '../views/NotFound.vue'
import PageShowThread from '../views/ShowThread.vue'
import UserProfile from '../views/UserProfile.vue'
import sourceData from '@/data.json'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/me',
    name: 'Profile',
    component: UserProfile
  },
  { path: '/category/:id', name: 'Category', component: AppCategory },
  { path: '/forum/:id', name: 'Forum', component: Forum, props: true},
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


