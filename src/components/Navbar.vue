<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'todo_list'}">Todo list</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'dynamic_layout'}">Dynamic layout</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'counter'}">Counter</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'form_input_bindings'}">Form input bindings</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'lifecycle_hooks'}">Lifecycle hooks</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'axios'}">Axios</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>
