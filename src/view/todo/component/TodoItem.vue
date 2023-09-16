<template>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow" :class="todoCardClass">
            <h5 class="card-header" :class="{done: props.todo.done}">{{ props.todo.title }}</h5>

            <div class="card-body">
                <p class="card-text">{{ props.todo.description }}</p>
                <div class="custom-control custom-checkbox mb-1">
                    <input type="checkbox"
                           class="custom-control-input"
                           :id="'customCheck' + props.todo.id"
                           v-model="todoDone"
                    >
                    <label class="custom-control-label" :for="'customCheck' + props.todo.id">done</label>
                </div>

                <router-link
                    class="btn btn-primary mr-2"
                    v-if="props.showDetailBtn"
                    :to="{name: 'todo_detail', params: { id: props.todo.id }}"
                >
                    detail
                </router-link>

                <router-link
                    class="btn btn-warning mr-2"
                    v-if="props.showEditBtn"
                    :to="{name: 'todo_edit', params: { id: props.todo.id }}"
                >
                    edit
                </router-link>

                <a href="#"
                   class="btn btn-danger"
                   v-if="props.showDeleteBtn"
                   @click.prevent="removeTodo(props.todo.id)"
                >
                    delete
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, watch, computed} from 'vue'
import {TodoModel} from '@/model/todo-model'
import useTodos from '@/hook/useTodos'

const props = defineProps({
    todo: {
        type: TodoModel,
        require: true
    },
    showDetailBtn: {
        type: Boolean,
        require: false,
        default: true
    },
    showEditBtn: {
        type: Boolean,
        require: false,
        default: true
    },
    showDeleteBtn: {
        type: Boolean,
        require: false,
        default: true
    }
})

const {removeTodo, updateTodoDone} = useTodos()
const todoDone = ref<boolean>(props.todo ? props.todo.done : false)

watch(todoDone, (): void => {
    if (props.todo !== undefined) {
        updateTodoDone(props.todo.id, todoDone.value)
    }
})

const todoCardClass = computed<string>((): string => todoDone.value === true ? 'green' : 'red')
</script>
