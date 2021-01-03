import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {TodoModel} from '@/model/todo-model'

export default function useTodos() {
    const store = useStore()
    const newTodoTitle = ref('')
    const newTodoDescription = ref('')

    const todos = computed(() => useStore().state.todos.todos)

    const getNewId = () => {
        const todosSlice = store.state['todos'].todos.slice(-1)
        if (todosSlice.length > 0) {
            return store.state['todos'].todos.slice(-1)[0]['id'] + 1
        }

        return 1
    }

    const addTodo = () => {
        const title = newTodoTitle.value && newTodoTitle.value.trim()
        const description = newTodoDescription.value && newTodoDescription.value.trim()
        if (!title) {
            return
        }

        const payload = new TodoModel(getNewId(), title, description, false)

        store.dispatch('todos/addTodo', payload)
        newTodoTitle.value = ''
        newTodoDescription.value = ''
    }

    const removeTodo = (id: number) => {
        store.dispatch('todos/removeTodo', id)
    }

    const updateTodo = (todo: TodoModel) => {
        store.dispatch('todos/updateTodo', todo)
    }

    const updateTodoDone = (id: number, done: boolean) => {
        store.dispatch('todos/updateTodoDone', {id: id, done: done})
    }

    const getTodoById = (id: number): TodoModel => {
        store.dispatch('todos/getTodoById', id)

        return store.state['todos'].todo
    }

    return {
        addTodo,
        newTodoTitle,
        newTodoDescription,
        updateTodo,
        updateTodoDone,
        removeTodo,
        todos,
        getTodoById
    }
}
