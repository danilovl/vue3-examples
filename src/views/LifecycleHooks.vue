<template>
  <div>
    <h1>{{ meta.title }}</h1>
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
import type RouteMeta from '@/interfaces/routeMeta'
import useRouteMeta from '@/hooks/useRouteMeta'
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

interface SetupData {
    meta: RouteMeta;
}

export default defineComponent({
    name: 'LifecycleHooks',
    data() {
        return {
            dataMessage: ''
        }
    },
    setup(): SetupData {
        onBeforeMount((): void => {
            console.log('onBeforeMount')
        })

        onMounted((): void => {
            console.log('onMounted')
        })

        onBeforeUpdate((): void => {
            console.log('onBeforeUpdate')
        })

        onUpdated((): void => {
            console.log('onUpdated')
        })

        onUnmounted((): void => {
            console.log('onUnmounted')
        })

        onActivated((): void => {
            console.log('onActivated')
        })

        onDeactivated((): void => {
            console.log('onDeactivated')
        })

        const meta = useRouteMeta()

        return {
            meta
        }
    }
})
</script>
