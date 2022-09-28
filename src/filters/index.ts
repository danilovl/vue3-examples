import type {App} from 'vue'
import capitalizeFirstLetter from './capitalizeFirstLetter'

export default function addFilters(app: App): void {
    app.config.globalProperties.$filters = {
        capitalizeFirstLetter
    }
}
