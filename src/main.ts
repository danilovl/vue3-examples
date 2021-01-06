import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import addFilters from './filters'
import './assets/style.scss'

const app = createApp(App)
addFilters(app)

app.use(store).use(router).mount('#app')
