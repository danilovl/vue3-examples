<template>
    <div class="form-group">
        <label v-if="label" :for="id">{{ label }}</label>
        <input
            v-if="type === 'number'"
            :id="id"
            v-model.number="model"
            type="number"
            :placeholder="placeholder"
            :class="['form-control', { 'is-invalid': error }]"
            :disabled="disabled"
            @blur="$emit('blur', $event)"
        />
        <input
            v-else
            :id="id"
            v-model="model"
            :type="type"
            :placeholder="placeholder"
            :class="['form-control', { 'is-invalid': error }]"
            :disabled="disabled"
            @blur="$emit('blur', $event)"
        />
        <div v-if="error" class="error-message">
            {{ error }}
        </div>
    </div>
</template>

<script setup lang="ts">
import {useId} from 'vue'

interface Props {
    label?: string
    type?: string
    placeholder?: string
    error?: string
    disabled?: boolean
}

withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: '',
    disabled: false
})

defineEmits<{
    (e: 'blur', event: FocusEvent): void
}>()

const id = useId()
const model = defineModel<string | number>()
</script>
