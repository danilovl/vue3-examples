<template>
    <div class="hello">
        <h1 class="mb-3">{{ message }}</h1>
        <p class="card-text" style="font-size: 1.2rem;">{{ description }}</p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'HelloMessage',
    props: {
        message: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        }
    }
})
</script>
