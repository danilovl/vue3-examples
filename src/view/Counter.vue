<template>
    <div>
        <h1>{{ meta.title }}</h1>
        <button @click="increment">
            Count is: {{ state.count }}, double is: {{ state.double }}
        </button>
    </div>
</template>

<script setup lang="ts">
import type {ComputedRef} from 'vue'
import {reactive, computed} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

interface StateReactive {
    count: number;
    double: ComputedRef;
}

interface CounterState {
    count: number;
    double: number;
}

const state = reactive<StateReactive>({
    count: 0,
    double: computed((): number => state.count * 2)
}) as CounterState

function increment(): void {
    state.count++
}

const meta = useRouteMeta()
</script>
