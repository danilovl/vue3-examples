import {App} from '@vue/runtime-core'
import capitalizeFirstLetter from './capitalizeFirstLetter'

export default function addFilters(app: App): void {
    app.config.globalProperties.$filters = {
        capitalizeFirstLetter
    }
}

