<template>
  <input type="text" class="form-control mr-sm-2 mb-2" v-model="newTodoTitle"/>
  <textarea class="form-control mr-sm-2 mb-2" v-model="newTodoDescription"/>
  <input type="button"
         class="btn btn-outline-success my-2 my-sm-0"
         @click="addTodo"
         value="add todo"
  >
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {TodoModel} from '@/model/todo-model'
import useTodos from '@/hooks/useTodos'

export default defineComponent({
    name: 'CreateTodoItem',
    props: {
        todo: {
            type: TodoModel,
            require: false
        }
    },
    setup() {
        const {addTodo, newTodoTitle, newTodoDescription} = useTodos()

        return {
            addTodo,
            newTodoTitle,
            newTodoDescription
        }
    }
})
</script>
