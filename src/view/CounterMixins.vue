<template>
    <div>
        <h1>{{ meta.title }}</h1>
        <button @click="increment">
            Count is: {{ state.count }}, double is: {{ state.double }}
        </button>
    </div>
</template>

<script setup lang="ts">
import Counter from '@/mixins/counter'
import useRouteMeta from '@/hook/useRouteMeta'

const meta = useRouteMeta()
const {state, increment} = Counter()
</script>
