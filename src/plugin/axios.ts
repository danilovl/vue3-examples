import axios from 'axios'
import {useToastStore} from '@/store/module/toast'

export function setupAxios() {
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            const toastStore = useToastStore()

            if (!error.response) {
                toastStore.error('Server is unreachable. Please check your connection.')
            } else {
                const message = error.response.data?.message || error.message || 'An unexpected error occurred'
                toastStore.error(message)
            }

            return Promise.reject(error)
        }
    )
}
