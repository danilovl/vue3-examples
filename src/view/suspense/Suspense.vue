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

<script setup lang="ts">
import {defineAsyncComponent} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

const SuspenseAsync = defineAsyncComponent(() =>
    import('@/view/suspense/SuspenseAsync.vue')
)

const meta = useRouteMeta()
</script>
