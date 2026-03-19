<template>
    <div v-if="error" class="error-boundary">
        <app-card title="Something went wrong">
            <p class="text-danger">{{ error.message || 'An unexpected error occurred.' }}</p>
            <app-button @click="resetError">Try Again</app-button>
        </app-card>
    </div>
    <slot v-else></slot>
</template>

<script setup lang="ts">
import {ref, onErrorCaptured} from 'vue'
import AppCard from './AppCard.vue'
import AppButton from './AppButton.vue'

const error = ref<Error | null>(null)

const resetError = () => {
    error.value = null
}

onErrorCaptured((err) => {
    error.value = err as Error
    return false // prevent error from propagating further
})
</script>
