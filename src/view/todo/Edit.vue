<template>
    <div class="mb-3">
        <back-link text="Back to details" route-name="todo_detail" :route-param="{id: todo.id}"/>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <h5 class="card-header">Edit Task</h5>
                <div class="card-body">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" v-model="todo.title"/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea v-model="todo.description" rows="5"></textarea>
                    </div>
                    <button class="btn btn-warning" @click="editTodo">
                        Update Task
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {TodoModel} from '@/model/todo-model'
import useTodos from '@/hook/useTodos'
import {useRoute, useRouter} from 'vue-router'
import BackLink from '@/component/BackLink.vue'

const route = useRoute()
const router = useRouter()
const {getTodoById, updateTodo} = useTodos()

const existTodo = getTodoById(Number(route.params['id']))
const todo = new TodoModel(
    existTodo.id,
    existTodo.title,
    existTodo.description,
    existTodo.done
);

const editTodo = (): void => {
    updateTodo(todo)
    router.push({name: 'todo_detail', params: {id: todo.id}})
}
</script>
