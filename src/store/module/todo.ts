import type {TodoState} from '../type/todo'
import {TodoModel} from '@/model/todo-model'
import {defineStore} from 'pinia'
import {computed, reactive} from 'vue'

export const useTodoStore = defineStore('todo', () => {
    const state = reactive<TodoState>({
        todo: null,
        todos: [
            new TodoModel(1, 'Create app', 'description', false),
            new TodoModel(2, 'Read article', 'description', false),
            new TodoModel(3, 'Delete article', 'description', true)
        ]
    }) as TodoState

    const getTodo = computed((): TodoModel | null => state.todo)
    const getTodos = computed((): TodoModel[] => state.todos)
    const getNewId = computed((): number => state.todos.slice(-1)[0]['id'] + 1)

    const getTodoById = (todoModelId: number): void => {
        const todo: TodoModel | undefined = state.todos.find((t: TodoModel): boolean => t.id === todoModelId)
        if (!todo) {
            return
        }

        setTodo(todo)
    }

    const addTodo = (todoModel: TodoModel): void => {
        state.todos = [...state.todos, todoModel]
    }

    const setTodo = (todoModel: TodoModel): void => {
        state.todo = todoModel
    }

    const removeTodo = (todoModelId: number): void => {
        const index = state.todos.findIndex(todo => todo.id === todoModelId)
        state.todos.splice(index, 1)
    }

    const updateTodo = (todoModel: TodoModel): void => {
        const index = state.todos.findIndex(todo => todo.id === todoModel.id)
        state.todos[index] = todoModel
    }
    const updateTodoDone = (todoModel: { id: number; done: boolean }): void => {
        const index = state.todos.findIndex(todo => todo.id === todoModel.id)
        state.todos[index].done = todoModel.done
    }

    return {
        getTodo,
        getTodos,
        getNewId,
        getTodoById,
        addTodo,
        setTodo,
        removeTodo,
        updateTodo,
        updateTodoDone
    }
})
