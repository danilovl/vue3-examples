<template>
  <div class="about">
    <h1>Counter mixins</h1>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Counter from '@/mixins/counter'

export default defineComponent({
  name: 'CounterMixins',
  // mixins: [Counter], this not working with Composition API
  setup() {
    return {...Counter()}
  }
})
</script>
