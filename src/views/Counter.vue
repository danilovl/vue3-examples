<template>
  <div class="about">
    <h1>Counter</h1>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, computed} from 'vue'

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
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
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
