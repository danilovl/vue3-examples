<template>
  <div>
    <h1>{{ meta.title }}</h1>
  </div>
  <div class="col-md-12">
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">Suspense</h5>
      <Suspense>
        <template #default>
          <suspense-async/>
        </template>
        <template #fallback>
          <p class="m-4">Loading async component <i>SuspenseAsync</i>...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent} from 'vue'
import useRouteMeta from '@/hooks/useRouteMeta'
import RouteMeta from '@/interfaces/routeMeta'

interface SetupData {
  meta: RouteMeta;
}

export default defineComponent({
  name: 'Suspense',
  components: {
    SuspenseAsync: defineAsyncComponent(() => import('@/views/suspense/SuspenseAsync.vue'))
  },
  setup(): SetupData {
    const meta = useRouteMeta()

    return {
      meta
    }
  }
})
</script>
