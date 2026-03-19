<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body">
                    <div class="form-group">
                        <label>Press any key inside the input</label>
                        <input
                            type="text"
                            placeholder="Type here..."
                            @keydown="keyCodeEvent($event)"
                            @keyup="keyCodeEvent($event)"
                            @keypress="keyCodeEvent($event)"
                            @focus="keyCodeEvent($event)"
                            @focusout="keyCodeEvent($event)"
                        />
                    </div>

                    <div class="mt-4" v-if="events.length > 0">
                        <h6>Last Event Data:</h6>
                        <pre>{{ JSON.stringify(events, null, 2) }}</pre>
                    </div>
                </div>
            </div>
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
