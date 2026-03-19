import {ref, watch, onMounted} from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T) {
    const data = ref<T>(defaultValue)

    onMounted(() => {
        const storedValue = localStorage.getItem(key)
        if (storedValue !== null) {
            try {
                data.value = JSON.parse(storedValue)
            } catch (e) {
                console.error(`Error parsing localStorage key "${key}":`, e)
            }
        }
    })

    watch(data, (newValue) => {
        if (newValue === undefined) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(newValue))
        }
    }, {deep: true})

    return data
}
