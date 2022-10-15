<template>
    <div class="row">
        <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"/>
    </div>
    <div class="row">
        <create-todo-item/>
    </div>
</template>

<script lang="ts">
import type {ComputedRef, Ref} from 'vue'
import {defineComponent} from 'vue'
import TodoItem from './component/TodoItem.vue'
import CreateTodoItem from './component/CreateTodoItem.vue'
import useTodos from '@/hooks/useTodos'

interface SetupData {
    todos: ComputedRef;
    addTodo: () => void;
    removeTodo: (id: number) => void;
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
