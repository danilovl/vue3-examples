<template>
  <div class="row">
    <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"/>
  </div>
  <div class="row">
    <create-todo-item/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TodoItem from '@/components/todo/TodoItem.vue'
import CreateTodoItem from '@/components/todo/CreateTodoItem.vue'
import useTodos from '@/hooks/useTodos'
import {ComputedRef, Ref} from '@vue/reactivity'

interface SetupData {
  todos: ComputedRef;
  addTodo: Function;
  removeTodo: Function;
  newTodoTitle: Ref;
  newTodoDescription: Ref;
}

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
    CreateTodoItem
  },
  setup(): SetupData {
    const {todos, addTodo, removeTodo, newTodoTitle, newTodoDescription} = useTodos()

    return {
      todos,
      addTodo,
      removeTodo,
      newTodoTitle,
      newTodoDescription
    }
  }
})
</script>
