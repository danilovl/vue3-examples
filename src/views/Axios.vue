<template>
  <div>
    <h1>Axios</h1>
  </div>
  <div class="col-md-12">
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">Axios</h5>
      <div class="card-body" v-if="isLoading === true">
        <p>
          <a :href="apiUrl" class="href">Loading from here</a>
        </p>
        <p>
          Process: {{ processInformation }}
        </p>
      </div>
      <div class="card-body" v-else>
        <h1>Fake online REST API data</h1>
        <p v-for="todo in todos" :key="todo.title">
          {{ $filters.capitalizeFirstLetter(todo.title) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  Ref,
  ref
} from 'vue'
import axios, {AxiosResponse} from 'axios'
import {sleep} from '@/helpers'
import useRouteMeta from '@/hooks/useRouteMeta'
import RouteMeta from '@/interfaces/routeMeta'

interface SetupData {
  isLoading: Ref;
  processInformation: Ref;
  apiUrl: string;
  todos: Ref;
  meta: RouteMeta;
}

export default defineComponent({
  name: 'Axios',
  setup(): SetupData {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
    const isLoading = ref<boolean>(true)
    const processInformation = ref<string>('loading data')
    const todos = ref<AxiosResponse>()

    onMounted(() => {
      axios
          .get(apiUrl)
          .then(function (response) {
            return sleep(2000).then(function () {
              processInformation.value = 'data was downloaded'
              todos.value = response.data
            })
          })
          .then(function () {
            return sleep(2000).then(function () {
              processInformation.value = 'data processing'
            })
          })
          .then(function () {
            sleep(2000).then(function () {
              isLoading.value = false
            })
          })
    })

    const meta = useRouteMeta()

    return {
      isLoading,
      processInformation,
      apiUrl,
      todos,
      meta
    }
  }
})
</script>
