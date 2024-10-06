import {config} from '@vue/test-utils'
import capitalizeFirstLetter from '@/filter/capitalizeFirstLetter'

config.global = {
    config: {
        globalProperties: {
            $filters: {
                capitalizeFirstLetter
            }
        }
    }
}
