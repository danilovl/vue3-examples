<template>
  <back-link text="back to todo list" route-name="todo_list"/>
  <div class="row">
    <todo-item :todo="todo" :show-detail-btn="false" :show-delete-btn="false"/>
  </div>
</template>

<script lang="ts">
import type {TodoModel} from '@/model/todo-model'
import {defineComponent} from 'vue'
import TodoItem from './component/TodoItem.vue'
import BackLink from '@/components/BackLink.vue'
import useTodos from '@/hooks/useTodos'
import {useRoute} from 'vue-router'

interface SetupData {
  todo: TodoModel | null;
}

export default defineComponent({
  name: 'TodoDetail',
  components: {
    TodoItem,
    BackLink
  },
  setup(): SetupData {
    const route = useRoute()
    const {getTodoById} = useTodos()

    const todo = getTodoById(Number(route.params['id']))

    return {
      todo
    }
  }
})
</script>
