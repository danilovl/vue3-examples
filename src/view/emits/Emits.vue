<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }} - Basic Emit</h5>
                <div class="card-body">
                    <AddToCart @addToCart='addToCart()' class="mb-3"/>
                    <p>Items in cart: <strong>{{ cart.length }}</strong></p>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }} - Object Emit</h5>
                <div class="card-body">
                    <AddToCartObject @addToCartObject='addToCartObject' class="mb-3"/>
                    <p class="mb-3">Items in cart: <strong>{{ cartObject.length }}</strong></p>
                    <div v-if="cartObject.length > 0">
                        <h6>Cart Data:</h6>
                        <pre>{{ JSON.stringify(cartObject, null, 2) }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import AddToCart from '@/view/emits/AddToCart.vue'
import AddToCartObject from '@/view/emits/AddToCartObject.vue'
import useRouteMeta from '@/hook/useRouteMeta'

type ItemObject = {
    id: number;
    title: string;
}

const cart = reactive<string[]>([])
const cartObject = reactive<object[]>([])

const addToCart = (): number => cart.push('item')
const addToCartObject = (item: ItemObject): number => cartObject.push(item)
const meta = useRouteMeta()
</script>
