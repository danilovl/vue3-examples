<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="col-md-12">
        <input
            type="text"
            @keydown="keyCodeEvent($event)"
            @keyup="keyCodeEvent($event)"
            @keypress="keyCodeEvent($event)"
            @focus="keyCodeEvent($event)"
            @focusout="keyCodeEvent($event)"
        />
    </div>
    <div class="row justify-content-center" v-if="events.length > 0">
        <div class="col-4">
            <pre :style="{ 'text-align': 'left' }">{{ JSON.stringify(events, null, 2) }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

const meta = useRouteMeta()
const eventsType: Array<object> = []
const events = reactive(eventsType)

const keyCodeEvent = (event: any): void => {
    events.length = 0
    events.push({
        type: event.type,
        key: event.key,
        charCode: event.charCode,
        keyCode: event.keyCode
    })
}
</script>
