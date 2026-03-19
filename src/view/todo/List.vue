<template>
    <div class="row position-relative">
        <transition-group name="todo-list">
            <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"/>
        </transition-group>
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
