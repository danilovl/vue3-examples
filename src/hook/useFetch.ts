import {ref, onMounted} from 'vue'
import axios from 'axios'

export function useFetch<T>(url: string) {
    const data = ref<T | null>(null)
    const error = ref<any>(null)
    const loading = ref(true)

    const fetchData = async () => {
        loading.value = true
        try {
            const response = await axios.get(url)
            data.value = response.data
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    onMounted(fetchData)

    return {data, error, loading, refetch: fetchData}
}
