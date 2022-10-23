<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div>
        <p>
            <input ref="input"/>
        </p>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import useRouteMeta from '@/hooks/useRouteMeta'

const meta = useRouteMeta()

const input = ref<HTMLInputElement | null>(null)

onMounted((): void => {
    if (input.value === null) {
        return
    }

    input.value.style.color = 'green'

    input.value.addEventListener('input', function (): void {
        this.style.color = this.value.length > 5 ? 'red' : 'green'
    })
})
</script>
