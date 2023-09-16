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

<script setup lang="ts">
import useRouteMeta from '@/hook/useRouteMeta'
import {
    onBeforeMount,
    onBeforeUpdate,
    onMounted,
    onActivated,
    onDeactivated,
    onUpdated,
    onUnmounted, ref
} from 'vue'

const dataMessage = ref<string>('')

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
</script>
