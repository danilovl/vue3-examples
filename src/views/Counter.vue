<template>
  <div>
    <h1>Counter</h1>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, computed} from 'vue'
import {ComputedRef} from '@vue/reactivity'

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

    return {
      state,
      increment
    }
  }
})
</script>
