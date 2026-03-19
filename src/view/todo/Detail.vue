<template>
    <div class="mb-3">
        <back-link text="Back to task list" route-name="todo_list"/>
    </div>
    <div class="row">
        <todo-item :todo="todo" :show-detail-btn="false" :show-delete-btn="false"/>
    </div>
</template>

<script setup lang="ts">
import TodoItem from './component/TodoItem.vue'
import BackLink from '@/component/BackLink.vue'
import useTodos from '@/hook/useTodos'
import {useRoute} from 'vue-router'

const route = useRoute()
const {getTodoById} = useTodos()

const todo = getTodoById(Number(route.params['id']))
</script>
