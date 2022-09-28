import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import addFilters from './filters'
import './assets/style.scss'

const app = createApp(App)
addFilters(app)

app.use(createPinia()).use(router).mount('#app')
