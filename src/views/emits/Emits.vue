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
  <div class="col-md-12">
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">Add to cart object emit</h5>
      <div class="card-body">
        <add-to-cart-object @addToCartObject='addToCartObject' class="mb-2"/>
        <p>Cart object items: {{ cartObject.length }}</p>
        <div class="col-4">
          <pre :style="{ 'text-align': 'left' }">{{ JSON.stringify(cartObject, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type RouteMeta from '@/interfaces/routeMeta'
import {defineComponent, reactive} from 'vue'
import AddToCart from '@/views/emits/AddToCart.vue'
import AddToCartObject from '@/views/emits/AddToCartObject.vue'
import useRouteMeta from '@/hooks/useRouteMeta'

type ItemObject = {
    id: number;
    title: string;
}

interface SetupData {
    cart: string[];
    cartObject: object[];
    addToCart: () => number;
    addToCartObject: (item: ItemObject) => number;
    meta: RouteMeta;
}

export default defineComponent({
    name: 'Emits',
    components: {
        AddToCart,
        AddToCartObject
    },
    setup(): SetupData {
        const cart = reactive<string[]>([])
        const cartObject = reactive<object[]>([])

        const addToCart = (): number => cart.push('item')
        const addToCartObject = (item: ItemObject): number => cartObject.push(item)
        const meta = useRouteMeta()

        return {
            meta,
            cart,
            cartObject,
            addToCart,
            addToCartObject
        }
    }
})
</script>
