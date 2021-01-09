<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto display-block">
        <li v-for="route in routes" :key="route.name" class="nav-item mb-2">
          <router-link :to="{name: route.name}">{{ route.meta.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {RouteRecord, useRouter} from 'vue-router'

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
