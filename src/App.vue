<template>
  <div class="container">
    <nav-bar/>
    <router-view/>
  </div>
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
