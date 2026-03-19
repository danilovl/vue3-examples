<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }} - Open console</h5>
                <div class="card-body">
                    <div class="form-group">
                        <label>Try to update data and see console</label>
                        <input type="text" v-model="dataMessage"
                               placeholder="Type something to trigger update hooks..."/>
                    </div>
                    <p class="mt-3">Data message is: <strong>{{ dataMessage }}</strong></p>
                </div>
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
