import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router'
import vuetify from './plugins/vuetify'

const app = createApp(App)
app.use(vuetify)
app.use(router);
app.mount('#app')
