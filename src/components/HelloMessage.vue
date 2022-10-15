<template>
    <div class="hello">
        <h1>{{ message }}</h1>
        <p>{{ description }}</p>
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
