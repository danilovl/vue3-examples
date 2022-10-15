<template>
    <div>
        <input type="button"
               value="add object to cart"
               class="btn btn-outline-success my-2 my-sm-0"
               v-on:click="$emit('AddToCartObject', getCartItem())"
        >
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

type ItemObject = {
    id: number;
    title: string;
}

interface SetupData {
    getCartItem: () => ItemObject;
}

export default defineComponent({
    name: 'AddToCartObject',
    emits: ['AddToCartObject'],
    setup(): SetupData {
        const getCartItem = (): ItemObject => {
            return {
                id: (new Date()).getTime(),
                title: Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5)
            };
        }

        return {
            getCartItem
        }
    }
})
</script>
