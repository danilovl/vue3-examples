<template>
    <input type="text" class="form-control mr-sm-2 mb-2" v-model="newTodoTitle"/>
    <textarea class="form-control mr-sm-2 mb-2" v-model="newTodoDescription"/>
    <input type="button"
           class="btn btn-outline-success my-2 my-sm-0"
           @click="addTodo"
           value="add todo"
    >
</template>

<script setup lang="ts">
import useTodos from '@/hook/useTodos'

const {addTodo, newTodoTitle, newTodoDescription} = useTodos()
</script>
