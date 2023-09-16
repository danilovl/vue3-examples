<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Add to cart emit</h5>
            <div class="card-body">
                <AddToCart @addToCart='addToCart()' class="mb-2"/>
                <p>Cart items: {{ cart.length }}</p>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Add to cart object emit</h5>
            <div class="card-body">
                <AddToCartObject @addToCartObject='addToCartObject' class="mb-2"/>
                <p>Cart object items: {{ cartObject.length }}</p>
                <div class="col-4">
                    <pre :style="{ 'text-align': 'left' }">{{ JSON.stringify(cartObject, null, 2) }}</pre>
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
