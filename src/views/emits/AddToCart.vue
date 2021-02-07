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
import RouteMeta from '@/interfaces/routeMeta'

interface SetupData {
  events: Array<object>;
  keyCodeEvent: Function;
  meta: RouteMeta;
}

export default defineComponent({
  name: 'AddToCart',
  emits: ['addToCart']
})
</script>
