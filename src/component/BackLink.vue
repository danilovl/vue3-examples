<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <router-link :to="{name: routeName, params: routeParam}" class="btn btn-primary">
            {{ text }}
        </router-link>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'BackLink',
    props: {
        text: {
            type: String,
            require: true
        },
        routeName: {
            type: String,
            require: true
        },
        routeParam: {
            type: Object,
            require: false
        }
    }
})
</script>
