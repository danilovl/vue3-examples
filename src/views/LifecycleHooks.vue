<template>
  <div>
    <h1>Lifecycle hooks</h1>
  </div>
  <div class="col-md-12">
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">Open console</h5>
      <div class="card-body">
        <input v-model="dataMessage" placeholder="data message"/>
        <p>Data message is: {{ dataMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onActivated,
  onDeactivated,
  onUpdated,
  onUnmounted
} from 'vue'

export default defineComponent({
  name: 'LifecycleHooks',
  data() {
    return {
      dataMessage: ''
    }
  },
  setup(): void {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onActivated(() => {
      console.log('onActivated')
    })

    onDeactivated(() => {
      console.log('onDeactivated')
    })
  }
})
</script>
