<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Task Manager (Watchers)</h5>
                <div class="card-body">
                    <div class="task-manager">
                        <ul class="task-messages">
                            <li v-for="(message, index) in taskMessages"
                                :key="index">
                                {{ message }}
                            </li>
                        </ul>
                        <ul class="settings-messages">
                            <li v-for="(message, index) in settingsMessages"
                                :key="index">
                                {{ message }}
                            </li>
                        </ul>
                        <div class="task-input mb-4">
                            <input v-model="newTaskTitle" placeholder="Enter task title" class="mr-2"/>
                            <select v-model="newTaskCategory" class="mr-2">
                                <option v-for="category in categories"
                                        :key="category"
                                        :value="category">
                                    {{ category }}
                                </option>
                            </select>
                            <button @click="addTask" class="btn btn-primary">Add Task</button>
                        </div>
                        <button class="btn btn-outline mb-4" @click="toggleCategoryManagement">
                            {{ showCategoryManagement ? 'Hide Categories' : 'Manage Categories' }}
                        </button>
                        <div v-if="showCategoryManagement" class="category-management mb-4">
                            <div class="category-input mb-3">
                                <input v-model="newCategory" placeholder="Enter new category" class="mr-2"/>
                                <button @click="addCategory" class="btn btn-info">Add Category</button>
                            </div>
                            <ul class="category-list">
                                <li v-for="category in categories" :key="category">
                                    <div class="category-text">
                                        <input v-model="editCategoryValue"
                                               placeholder="Edit category"
                                               v-if="editingCategory === category"
                                               class="mr-2"
                                        />
                                        <span v-else>{{ category }}</span>
                                    </div>
                                    <div class="category-buttons">
                                        <button class="btn btn-warning mr-2" @click="startEditCategory(category)"
                                                v-if="editingCategory !== category">Edit
                                        </button>
                                        <button class="btn btn-primary mr-2" @click="saveEditCategory(category)"
                                                v-if="editingCategory === category">Save
                                        </button>
                                        <button class="btn btn-danger" @click="deleteCategory(category)">Delete</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="controls mb-4">
                            <div class="form-group">
                                <label>Filter by category:</label>
                                <select v-model="filterCategory">
                                    <option value="All">All Categories</option>
                                    <option v-for="category in categories"
                                            :key="category"
                                            :value="category">
                                        {{ category }}
                                    </option>
                                </select>
                            </div>
                            <div class="custom-control">
                                <input type="checkbox" v-model="userSettings.autoSave" id="auto-save"
                                       class="custom-control-input"/>
                                <label for="auto-save" class="custom-control-label">Auto-save changes</label>
                            </div>
                        </div>
                        <p class="stats mb-3">{{ taskStats }}</p>
                        <ul class="task-list">
                            <li v-for="task in filteredTasks"
                                :key="task.id"
                                :class="{ completed: task.completed }"
                            >
                                <div class="task-content">
                                    <input type="checkbox"
                                           :checked="task.completed"
                                           @change="toggleTaskCompletion(task.id)"
                                           class="custom-control-input"
                                    />
                                    <span>{{ task.title }} ({{ task.category }})</span>
                                </div>
                                <button class="btn btn-danger" @click="removeTask(task.id)">Delete</button>
                            </li>
                        </ul>
                        <div v-if="showModal" class="modal">
                            <div class="modal-content card">
                                <div class="card-body">
                                    <p class="mb-4">Tasks and categories found in localStorage. Load them or start
                                        fresh?</p>
                                    <button class="btn btn-primary mr-2" @click="loadFromStorage">Load Data</button>
                                    <button class="btn btn-outline" @click="startFresh">Start Fresh</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, watchEffect} from 'vue'

interface Task {
    id: number
    title: string
    completed: boolean
    category: string
}

const TASKS_STORAGE_KEY = 'watchers.tasks'
const CATEGORIES_STORAGE_KEY = 'watchers.categories'
const DEFAULT_TASKS = [
    {id: 1, title: 'Learn Vue', completed: false, category: 'Work'},
    {id: 2, title: 'Buy groceries', completed: true, category: 'Personal'}
]

const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)
const storedCategories = localStorage.getItem(CATEGORIES_STORAGE_KEY)
const showModal = ref(storedTasks !== null || storedCategories !== null)
const tasks = ref<Task[]>(storedTasks ? [] : DEFAULT_TASKS)

const categories = ref<string[]>(storedCategories ? JSON.parse(storedCategories) : ['Work', 'Personal'])
const newTaskTitle = ref<string>('')
const newTaskCategory = ref<string>('Work')
const filterCategory = ref<string>('All')
const userSettings = ref<{
    autoSave: boolean
    notificationCount: number
}>({
    autoSave: true,
    notificationCount: 0
})
const newCategory = ref<string>('')
const editingCategory = ref<string | null>(null)
const editCategoryValue = ref<string>('')
const showCategoryManagement = ref<boolean>(false)

const filteredTasks = computed<Task[]>(() => {
    if (filterCategory.value === 'All') {
        return tasks.value
    }

    return tasks.value.filter(task => task.category === filterCategory.value)
})

const taskMessages = ref<string[]>([])
const settingsMessages = ref<string[]>([])

function addMessage(messages: string[], message: string) {
    if (messages.length >= 5) {
        messages.shift()
    }

    messages.push(message)
    setTimeout(() => {
        messages.shift()
    }, 5000)
}

watch(tasks, (newTasks) => {
    if (userSettings.value.autoSave) {
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(newTasks))
        addMessage(settingsMessages.value, `Task list saved to localStorage at ${new Date().toLocaleTimeString()}`)
    }
}, {deep: true})

watch(categories, (newCategories) => {
    if (userSettings.value.autoSave) {
        localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(newCategories))
        addMessage(settingsMessages.value, `Categories saved to localStorage at ${new Date().toLocaleTimeString()}`)
    }
}, {deep: true})

watch(tasks, (newTasks, oldTasks) => {
    if (newTasks.length < oldTasks.length) {
        addMessage(taskMessages.value, 'Task deleted')
    }
}, {deep: true})

watch([newTaskTitle, newTaskCategory], ([newTitle, newCategory], [_oldTitle, oldCategory]) => {
    if (newTitle && newCategory !== oldCategory) {
        addMessage(taskMessages.value, `New task category changed to ${newCategory}`)
    }
})

watch(() => userSettings.value.autoSave, (autoSave) => {
    addMessage(settingsMessages.value, autoSave ? 'Auto-save enabled' : 'Auto-save disabled')
}, {immediate: true})

const taskStats = ref<string>('')
watchEffect(() => {
    const total = tasks.value.length
    const completed = tasks.value.filter(t => t.completed).length

    taskStats.value = `Total tasks: ${total}, Completed: ${completed}, Active: ${total - completed}`
})

watch(userSettings, (newSettings) => {
    if (newSettings.notificationCount > 0) {
        addMessage(settingsMessages.value, `Pending notifications: ${newSettings.notificationCount}`)
    }
}, {deep: true})

function addTask() {
    if (!newTaskTitle.value.trim()) {
        return
    }

    const newTask = {
        id: tasks.value.length + 1,
        title: newTaskTitle.value.trim(),
        completed: false,
        category: newTaskCategory.value
    }

    taskMessages.value = []
    tasks.value.push(newTask)
    addMessage(taskMessages.value, `Added task: ${newTask.title}`)
    newTaskTitle.value = ''
    userSettings.value.notificationCount++
}

function toggleTaskCompletion(taskId: number) {
    const task = tasks.value.find(t => t.id === taskId)
    if (task) {
        task.completed = !task.completed
        userSettings.value.notificationCount++
    }
}

function removeTask(taskId: number) {
    tasks.value = tasks.value.filter(t => t.id !== taskId)
}

function addCategory() {
    if (newCategory.value.trim() && !categories.value.includes(newCategory.value.trim())) {
        categories.value.push(newCategory.value.trim())
        addMessage(taskMessages.value, `Added category: ${newCategory.value.trim()}`)
        newCategory.value = ''
    }
}

function startEditCategory(category: string) {
    editingCategory.value = category
    editCategoryValue.value = category
}

function saveEditCategory(oldCategory: string) {
    if (!editCategoryValue.value.trim() || categories.value.includes(editCategoryValue.value.trim())) {
        return
    }

    const index = categories.value.indexOf(oldCategory)
    categories.value[index] = editCategoryValue.value.trim()
    tasks.value = tasks.value.map(task =>
        task.category === oldCategory ? {...task, category: editCategoryValue.value.trim()} : task
    )
    addMessage(taskMessages.value, `Edited category: ${oldCategory} to ${editCategoryValue.value.trim()}`)
    editingCategory.value = null
    editCategoryValue.value = ''
}

function deleteCategory(category: string) {
    if (categories.value.length <= 1) {
        addMessage(taskMessages.value, 'Cannot delete the last category')

        return
    }

    categories.value = categories.value.filter(c => c !== category)
    tasks.value = tasks.value.map(task =>
        task.category === category ? {...task, category: categories.value[0]} : task
    )
    addMessage(taskMessages.value, `Deleted category: ${category}`)
    if (filterCategory.value === category) {
        filterCategory.value = 'All'
    }

    if (newTaskCategory.value === category) {
        newTaskCategory.value = categories.value[0]
    }
}

function toggleCategoryManagement() {
    showCategoryManagement.value = !showCategoryManagement.value
    if (!showCategoryManagement.value) {
        newCategory.value = ''
        editingCategory.value = null
        editCategoryValue.value = ''
    }
}

function loadFromStorage() {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)
    const storedCategories = localStorage.getItem(CATEGORIES_STORAGE_KEY)

    if (storedTasks) {
        tasks.value = JSON.parse(storedTasks)
    }

    if (storedCategories) {
        categories.value = JSON.parse(storedCategories)
    }

    showModal.value = false
}

function startFresh() {
    localStorage.removeItem(TASKS_STORAGE_KEY)
    localStorage.removeItem(CATEGORIES_STORAGE_KEY)
    tasks.value = DEFAULT_TASKS
    categories.value = ['Work', 'Personal']
    showModal.value = false
}
</script>
