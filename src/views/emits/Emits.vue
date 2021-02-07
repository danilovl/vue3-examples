<template>
  <div>
    <h1>{{ meta.title }}</h1>
  </div>
  <div class="col-md-12">
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">Add to cart emit</h5>
      <div class="card-body">
        <add-to-cart @addToCart='addToCart()' class="mb-2"/>
        <p>Cart items: {{ cart.length }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import AddToCart from '@/views/emits/AddToCart.vue'
import useRouteMeta from '@/hooks/useRouteMeta'
import RouteMeta from '@/interfaces/routeMeta'

interface SetupData {
  cart: string[];
  addToCart: Function;
  meta: RouteMeta;
}

export default defineComponent({
  name: 'Emits',
  components: {
    AddToCart
  },
  setup(): SetupData {
    const cart = reactive<string[]>([])

    const addToCart = (): number => cart.push('item')
    const meta = useRouteMeta()

    return {
      meta,
      cart,
      addToCart
    }
  }
})
</script>
