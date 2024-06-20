import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

const app = createApp(App)

app.use(router)
app.use(Quasar, { /* quasar options */ })
app.mount('#app')
