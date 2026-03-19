import {defineStore} from 'pinia'
import {ref} from 'vue'

export type ToastType = 'success' | 'danger' | 'warning' | 'info'

export interface Toast {
    id: number
    message: string
    type: ToastType
    timeout: number
}

export const useToastStore = defineStore('toast', () => {
    const toasts = ref<Toast[]>([])
    let count = 0

    const addToast = (message: string, type: ToastType = 'info', timeout = 3000) => {
        const id = ++count
        toasts.value.push({id, message, type, timeout})

        if (timeout > 0) {
            setTimeout(() => {
                removeToast(id)
            }, timeout)
        }
    }

    const removeToast = (id: number) => {
        const index = toasts.value.findIndex(t => t.id === id)
        if (index !== -1) {
            toasts.value.splice(index, 1)
        }
    }

    const success = (msg: string) => addToast(msg, 'success')
    const error = (msg: string) => addToast(msg, 'danger')
    const warning = (msg: string) => addToast(msg, 'warning')
    const info = (msg: string) => addToast(msg, 'info')

    return {
        toasts,
        addToast,
        removeToast,
        success,
        error,
        warning,
        info
    }
})
