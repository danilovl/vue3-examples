<template>
    <div class="skeleton" :style="style"></div>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
    width?: string
    height?: string
    borderRadius?: string
}>()

const style = computed(() => ({
    width: props.width || '100%',
    height: props.height || '1rem',
    borderRadius: props.borderRadius || '4px'
}))
</script>
