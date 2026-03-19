import {config} from '@vue/test-utils'
import capitalizeFirstLetter from '@/filter/capitalizeFirstLetter'

config.global.globalProperties = config.global.globalProperties || {}
config.global.globalProperties.$filters = {
    capitalizeFirstLetter
}

config.global.mocks = config.global.mocks || {}
config.global.mocks.$filters = {
    capitalizeFirstLetter
}
