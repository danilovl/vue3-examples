import {Commit} from 'vuex'
import {TodosState} from '@/store/type/todos'
import {TodoModel} from '@/model/todo-model'

const state: TodosState = {
    todo: null,
    todos: [
        new TodoModel(1, 'Create app', 'description', false),
        new TodoModel(2, 'Read article', 'description', false),
        new TodoModel(3, 'Delete article', 'description', true)
    ]
}

const getters = {
    todos: function (state: TodosState): TodoModel[] {
        return state.todos
    },
    getNewId: function (state: TodosState): number {
        return state.todos.slice(-1)[0]['id'] + 1
    }
}

const actions = {
    addTodo({commit}: { commit: Commit }, payload: TodoModel): void {
        commit('addTodo', payload)
    },
    removeTodo({commit}: { commit: Commit }, payload: number): void {
        commit('deleteTodo', payload)
    },
    updateTodo({commit}: { commit: Commit }, payload: TodoModel): void {
        commit('updateTodo', payload)
    },
    updateTodoDone({commit}: { commit: Commit }, payload: {}): void {
        commit('updateTodoDone', payload)
    },
    getTodoById({commit}: { commit: Commit }, payload: number): void {
        const todo = state.todos.find(function (t: TodoModel): boolean {
            return t.id === payload
        })

        commit('setTodo', todo)
    }
}

const mutations = {
    addTodo(state: TodosState, payload: TodoModel): void {
        state.todos = [...state.todos, payload]
    },
    setTodo(state: TodosState, payload: TodoModel): void {
        state.todo = payload
    },
    deleteTodo(state: TodosState, payload: number): void {
        const index = state.todos.findIndex(todo => todo.id === payload)
        state.todos.splice(index, 1)
    },
    updateTodo(state: TodosState, payload: TodoModel): void {
        const index = state.todos.findIndex(todo => todo.id === payload.id)
        state.todos[index] = payload
    },
    updateTodoDone(state: TodosState, payload: { id: number; done: boolean }): void {
        const index = state.todos.findIndex(todo => todo.id === payload.id)
        state.todos[index].done = payload.done
    }
}

export default {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}
