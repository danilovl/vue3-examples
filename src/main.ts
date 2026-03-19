import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import addFilters from './filter'
import addPlugins from './plugin'
import {setupAxios} from './plugin/axios'
import {createI18n} from './plugin/i18n'
import messages from '@/translation'
import './assets/style.scss'

const i18n = createI18n({
    locale: localStorage.getItem('locale') || 'en',
    messages
})

const app = createApp(App)
const pinia = createPinia()

addPlugins(app)
addFilters(app)

app.use(pinia).use(router).use(i18n).mount('#app')

setupAxios()
