import {ref, computed} from 'vue'
import {TodoModel} from '@/model/todo-model'
import {useTodoStore} from '@/store/module/todo'

export default function useTodos() {
    const store = useTodoStore()
    const newTodoTitle = ref('')
    const newTodoDescription = ref('')

    const todos = computed(() => store.getTodos)

    const getNewId = (): number => {
        const todosSlice = store.getTodos.slice(-1)
        if (todosSlice.length > 0) {
            return store.getTodos.slice(-1)[0]['id'] + 1
        }

        return 1
    }

    const addTodo = (): void => {
        const title = newTodoTitle.value && newTodoTitle.value.trim()
        const description = newTodoDescription.value && newTodoDescription.value.trim()
        if (!title) {
            return
        }

        const payload = new TodoModel(getNewId(), title, description, false)

        store.addTodo(payload)
        newTodoTitle.value = ''
        newTodoDescription.value = ''
    }

    const removeTodo = (id: number): void => {
        store.removeTodo(id)
    }

    const updateTodo = (todo: TodoModel): void => {
        store.updateTodo(todo)
    }

    const updateTodoDone = (id: number, done: boolean): void => {
        store.updateTodoDone({id: id, done: done})
    }

    const getTodoById = (id: number): TodoModel => {
        store.getTodoById(id)
        const todo: TodoModel | null = store.getTodo

        if (todo === null) {
            throw Error('todo cant be null.')
        }

        return todo
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
