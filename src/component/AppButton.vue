<template>
    <button
        :class="['btn', `btn-${variant}`, { 'btn-sm': small }]"
        :type="type"
        :disabled="disabled || loading"
        @click="$emit('click', $event)"
    >
        <span v-if="loading" class="spinner-border spinner-border-sm mr-2"></span>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    small?: boolean
}

withDefaults(defineProps<Props>(), {
    variant: 'primary',
    type: 'button',
    disabled: false,
    loading: false,
    small: false
})

defineEmits(['click'])
</script>
