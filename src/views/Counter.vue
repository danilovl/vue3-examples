<template>
  <div>
    <h1>{{ meta.title }}</h1>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, computed} from 'vue'
import {ComputedRef} from '@vue/reactivity'
import useRouteMeta from '@/hooks/useRouteMeta'
import RouteMeta from '@/interfaces/routeMeta'

interface StateReactive {
  count: number;
  double: ComputedRef;
}

interface CounterState {
  count: number;
  double: number;
}

interface SetupData {
  state: CounterState;
  increment: Function;
  meta: RouteMeta;
}

export default defineComponent({
  name: 'Counter',
  setup(): SetupData {
    const state = reactive<StateReactive>({
      count: 0,
      double: computed((): number => state.count * 2)
    }) as CounterState

    function increment() {
      state.count++
    }

    const meta = useRouteMeta()

    return {
      state,
      increment,
      meta
    }
  }
})
</script>
