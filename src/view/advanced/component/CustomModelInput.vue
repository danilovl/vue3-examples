<template>
    <div class="mb-3">
        <label v-if="label">{{ label }}</label>
        <input
            v-model="model"
            class="form-control"
            :placeholder="placeholder"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label?: string
    placeholder?: string
}>()

const model = defineModel<string>()
</script>
