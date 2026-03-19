<template>
    <div class="card" :class="cardClass">
        <div v-if="$slots.header || title" class="card-header">
            <slot name="header">
                <h5 class="mb-0">{{ title }}</h5>
            </slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string
    cardClass?: string
}>()
</script>
