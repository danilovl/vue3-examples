<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div>
        <strong>v-once</strong>
        <p>Initial msg with v-once:</p>
        <p id="once-message" v-once>{{ message }}</p>

        <button id="update-message" @click="updateMessage">Change message</button>
        <p>Current state msg:</p>
        <p id="current-state-message">{{ message }}</p>
    </div>
    <br>
    <div>
        <strong>v-memo</strong>
        <div>
            <div v-memo="[subscribers]">
                <p>Subscribers: {{ subscribers }}</p>
                <p>Views: {{ views }}</p>
                <p>Likes: {{ likes }}</p>
            </div>
            <button @click="subscribers++">Subscribers++</button>
            <button @click="views++">Views++</button>
            <button @click="likes++">Likes++</button>
            <div>
                <p>Current state:</p>
                <p>Subscribers: {{ subscribers }}</p>
                <p>Views: {{ views }}</p>
                <p>Likes: {{ likes }}</p>
            </div>
        </div>
    </div>
    <br>
    <div>
        <strong>v-clock</strong>
        <div v-cloak>
            {{ message }}
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

<style scoped>
[v-cloak] {
    display: none;
}
</style>
