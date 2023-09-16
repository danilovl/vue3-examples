<template>
    <div>
        <input type="button"
               value="add object to cart"
               class="btn btn-outline-success my-2 my-sm-0"
               v-on:click="$emit('AddToCartObject', getCartItem())"
        >
    </div>
</template>

<script setup lang="ts">
type ItemObject = {
    id: number;
    title: string;
}

const getCartItem = (): ItemObject => {
    return {
        id: (new Date()).getTime(),
        title: Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5)
    }
}
</script>
