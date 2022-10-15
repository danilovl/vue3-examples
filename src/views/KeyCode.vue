<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="col-md-12">
        <input
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

<script lang="ts">
import type RouteMeta from '@/interfaces/routeMeta'
import {defineComponent, reactive} from 'vue'
import useRouteMeta from '@/hooks/useRouteMeta'

interface SetupData {
    events: Array<object>;
    keyCodeEvent: (event: any) => void;
    meta: RouteMeta;
}

export default defineComponent({
    name: 'KeyCode',
    setup(): SetupData {
        const meta = useRouteMeta()
        const eventsType: Array<object> = []
        const events = reactive(eventsType)

        const keyEvent = (event: any): void => {
            events.length = 0
            events.push({
                type: event.type,
                key: event.key,
                charCode: event.charCode,
                keyCode: event.keyCode
            })
        }

        return {
            events,
            meta,
            keyCodeEvent: keyEvent
        }
    }
})
</script>
