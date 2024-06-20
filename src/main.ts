import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'
import apolloProvider from './plugins/apollo'

const app = createApp(App)
app.use(apolloProvider)
app.use(createPinia())
app.use(router)

app.mount('#app')
