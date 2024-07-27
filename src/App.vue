<template>
    <nav-bar/>

    <main class="content">
        <router-view/>
    </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NavBar from '@/component/Navbar.vue'

export default defineComponent({
    components: {
        NavBar
    }
})
</script>
