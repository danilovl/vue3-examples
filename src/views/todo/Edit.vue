<template>
    <back-link text="back to todo detail" route-name="todo_detail" :route-param="{id: todo.id}"/>

    <input type="text" class="form-control mr-sm-2 mb-2" v-model="todo.title"/>
    <textarea class="form-control mr-sm-2 mb-2" v-model="todo.description"/>
    <input type="button"
           class="btn btn-outline-success my-2 my-sm-0"
           @click="editTodo"
           value="edit"
    >
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {TodoModel} from '@/model/todo-model'
import useTodos from '@/hooks/useTodos'
import {useRoute, useRouter} from 'vue-router'
import BackLink from '@/components/BackLink.vue'

interface SetupData {
    todo: TodoModel;
    editTodo: () => void;
}

export default defineComponent({
    name: 'EditTodoItem',
    components: {
        BackLink
    },
    setup(): SetupData {
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

        return {
            todo,
            editTodo
        }
    }
})
</script>
