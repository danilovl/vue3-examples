<template>
  <div class="col-md-12">
    <div class="card-body">
      <h1>Fake online REST API data</h1>
      <p v-for="todo in todos" :key="todo.title">
        {{ $filters.capitalizeFirstLetter(todo.title) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios'
import {sleep} from '@/helpers'
import apiConstant from '@/constants/api'

export default defineComponent({
  name: 'SuspenseAsync',
  async setup() {
    const todos = await axios
        .get(apiConstant.apiTodosUrl)
        .then(response => {
          return sleep(2000).then(function () {
            return response.data
          })
        })

    return {
      todos
    }
  }
})
</script>