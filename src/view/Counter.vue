<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body text-center">
                    <p class="card-text">Current count value and its double</p>
                    <button class="btn btn-primary" @click="increment">
                        Count is: {{ state.count }}, double is: {{ state.double }}
                    </button>
                </div>
            </div>
        </div>
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
