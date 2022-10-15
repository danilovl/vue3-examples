<template>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow" :class="todoCardClass">
            <h5 class="card-header" :class="{done: todo.done}">{{ todo.title }}</h5>

            <div class="card-body">
                <p class="card-text">{{ todo.description }}</p>
                <div class="custom-control custom-checkbox mb-1">
                    <input type="checkbox"
                           class="custom-control-input"
                           :id="'customCheck' + todo.id"
                           v-model="todoDone"
                    >
                    <label class="custom-control-label" :for="'customCheck' + todo.id">done</label>
                </div>

                <router-link
                    class="btn btn-primary mr-2"
                    v-if="showDetailBtn === true"
                    :to="{name: 'todo_detail', params: { id: todo.id }}"
                >
                    detail
                </router-link>

                <router-link
                    class="btn btn-warning mr-2"
                    v-if="showEditBtn === true"
                    :to="{name: 'todo_edit', params: { id: todo.id }}"
                >
                    edit
                </router-link>

                <a href="#"
                   class="btn btn-danger"
                   v-if="showDeleteBtn === true"
                   @click.prevent="removeTodo(todo.id)"
                >
                    delete
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type {Ref, ComputedRef} from 'vue/'
import {defineComponent, ref, watch, computed} from 'vue'
import {TodoModel} from '@/model/todo-model'
import useTodos from '@/hooks/useTodos'

interface SetupData {
    removeTodo: (id: number) => void;
    todoDone: Ref;
    todoCardClass: ComputedRef;
}

export default defineComponent({
    name: 'TodoItem',
    props: {
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
    },
    setup(props): SetupData {
        const {removeTodo, updateTodoDone} = useTodos()
        const todoDone = ref<boolean>(props.todo ? props.todo.done : false)

        watch(todoDone, (): void => {
            if (props.todo !== undefined) {
                updateTodoDone(props.todo.id, todoDone.value)
            }
        })

        const todoCardClass = computed<string>((): string => todoDone.value === true ? 'green' : 'red')

        return {
            removeTodo,
            todoDone,
            todoCardClass
        }
    }
});
</script>
