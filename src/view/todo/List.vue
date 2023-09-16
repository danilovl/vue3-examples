<template>
    <div class="row">
        <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"/>
    </div>
    <div class="row">
        <create-todo-item/>
    </div>
</template>

<script setup lang="ts">
import TodoItem from './component/TodoItem.vue'
import CreateTodoItem from './component/CreateTodoItem.vue'
import useTodos from '@/hook/useTodos'

const {todos} = useTodos()
</script>
