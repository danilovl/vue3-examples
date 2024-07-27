<template>
    <nav class="menu">
        <ul>
            <li v-for="route in routes" :key="route.name" class="nav-item mb-2">
                <router-link :to="{name: route.name}" active-class="active">
                    {{ route.meta.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {RouteRecord} from 'vue-router'
import {useRouter} from 'vue-router'

interface SetupData {
    routes: RouteRecord[];
}

export default defineComponent({
    name: 'NavBar',
    setup(): SetupData {
        const routes = useRouter()
            .getRoutes()
            .filter((item: RouteRecord): boolean => item.meta.display)
            .sort((first: RouteRecord, second: RouteRecord): number => first.meta.position - second.meta.position)

        return {
            routes
        }
    }
})
</script>
