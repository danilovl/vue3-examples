<template>
    <div class="form-group">
        <label v-if="label" :for="id">{{ label }}</label>
        <select
            :id="id"
            v-model="model"
            :class="['form-control', { 'is-invalid': error }]"
            :disabled="disabled"
            @blur="$emit('blur', $event)"
        >
            <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.label || option.text }}
            </option>
        </select>
        <div v-if="error" class="error-message">
            {{ error }}
        </div>
    </div>
</template>

<script setup lang="ts">
import {useId} from 'vue'

interface Option {
    label: string
    value: string | number
}

interface Props {
    label?: string
    placeholder?: string
    options: Option[]
    error?: string
    disabled?: boolean
}

withDefaults(defineProps<Props>(), {
    placeholder: '',
    disabled: false
})

defineEmits<{
    (e: 'blur', event: FocusEvent): void
}>()

const id = useId()
const model = defineModel<string | number>()
</script>
