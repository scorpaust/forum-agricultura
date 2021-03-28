import App from './App.vue'
import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'
import router from '@/router'
import store from '@/store'
import vuetify from './plugins/vuetify'

const app = createApp(App)

const appDate = defineAsyncComponent(() =>
  import('./components/AppDate.vue')
)

const appCategory = defineAsyncComponent(() =>
  import('./components/AppCategory.vue')
)

app.component('app-date', appDate)
app.component('app-category', appCategory)

app.use(vuetify)
app.use(router);
app.use(store);

app.mount('#app')
