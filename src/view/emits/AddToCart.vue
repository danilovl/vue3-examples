<template>
    <div>
        <input type="button"
               value="add to cart"
               class="btn btn-outline-success my-2 my-sm-0"
               v-on:click="$emit('addToCart')"
        >
    </div>
</template>

<script setup lang="ts">
defineEmits(['addToCart'])
</script>
