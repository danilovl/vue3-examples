<template>
  <div>
    <h1>Counter mixins</h1>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script lang="ts">
import type RouteMeta from '@/interfaces/routeMeta'
import type {CounterState} from '@/mixins/counter'
import {defineComponent} from 'vue'
import Counter from '@/mixins/counter'
import useRouteMeta from '@/hooks/useRouteMeta'

interface SetupData {
    state: CounterState;
    increment: () => void;
    meta: RouteMeta;
}

export default defineComponent({
    name: 'CounterMixins',
    // mixins: [Counter], this not working with Composition API
    setup(): SetupData {
        const meta = useRouteMeta()

        return {
            ...Counter(),
            meta
        }
    }
})
</script>
