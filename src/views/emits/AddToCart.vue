<template>
  <div>
    <input type="button"
           value="add to cart"
           class="btn btn-outline-success my-2 my-sm-0"
           v-on:click="$emit('addToCart')"
    >
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'AddToCart',
  emits: ['addToCart']
})
</script>
