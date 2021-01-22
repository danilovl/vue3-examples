<template>
  <div>
    <h1>Counter mixins</h1>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Counter, {CounterState} from '@/mixins/counter'
import useRouteMeta from '@/hooks/useRouteMeta'
import RouteMeta from '@/interfaces/routeMeta'

interface SetupData {
  state: CounterState;
  increment: Function;
  meta: RouteMeta;
}

export default defineComponent({
  name: 'CounterMixins',
  // mixins: [Counter], this not working with Composition API
  setup() {
    const meta = useRouteMeta()

    return {
      ...Counter(),
      meta
    }
  }
})
</script>
