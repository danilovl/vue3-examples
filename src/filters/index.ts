import {App} from "@vue/runtime-core";
import capitalizeFirstLetter from './capitalizeFirstLetter'

export default function addFilters(app: App) {
    app.config.globalProperties.$filters = {
        capitalizeFirstLetter
    }
}

