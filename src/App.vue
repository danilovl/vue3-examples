<template>
    <nav-bar/>

    <main class="content">
        <error-boundary>
            <router-view/>
        </error-boundary>
    </main>
    <app-toast/>
</template>

<script setup lang="ts">
import NavBar from '@/component/Navbar.vue'
import AppToast from '@/component/AppToast.vue'
import ErrorBoundary from '@/component/ErrorBoundary.vue'
</script>
