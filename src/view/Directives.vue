<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }} - v-once</h5>
                <div class="card-body">
                    <p class="card-text">The content below is rendered only once and will not change when the message is
                        updated.</p>
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <strong>v-once message:</strong>
                            <p id="once-message" class="mt-2" v-once><strong>{{ message }}</strong></p>
                        </div>
                        <div class="col-md-6 text-center">
                            <strong>Current state:</strong>
                            <p id="current-state-message" class="mt-2"><strong>{{ message }}</strong></p>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <button id="update-message" class="btn btn-primary" @click="updateMessage">Change message
                        </button>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }} - v-memo</h5>
                <div class="card-body">
                    <p class="card-text">This block only updates when <code>subscribers</code> changes.</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div v-memo="[subscribers]" class="p-3 bg-light rounded mb-3">
                                <h6>Memoized State:</h6>
                                <p>Subscribers: <strong>{{ subscribers }}</strong></p>
                                <p>Views: {{ views }}</p>
                                <p>Likes: {{ likes }}</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3 bg-light rounded mb-3">
                                <h6>Actual State:</h6>
                                <p>Subscribers: <strong>{{ subscribers }}</strong></p>
                                <p>Views: {{ views }}</p>
                                <p>Likes: {{ likes }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex gap-2 justify-content-center">
                        <button class="btn btn-info mr-2" @click="subscribers++">Subscribers++</button>
                        <button class="btn btn-outline mr-2" @click="views++">Views++</button>
                        <button class="btn btn-outline" @click="likes++">Likes++</button>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }} - v-cloak</h5>
                <div class="card-body">
                    <p class="card-text">Prevents showing uncompiled templates before Vue is ready.</p>
                    <div v-cloak class="p-3 bg-light rounded">
                        <strong>{{ message }}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

const meta = useRouteMeta()
const message = ref('hello world')

let count = 0
const updateMessage = (): void => {
    message.value = `hello world count click: ${count}`
    count++
}

const subscribers = ref<number>(4000)
const views = ref<number>(10000)
const likes = ref<number>(3000)
</script>
