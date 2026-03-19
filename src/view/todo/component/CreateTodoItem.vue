<template>
    <div class="col-md-12">
        <div class="card mb-4">
            <h5 class="card-header">Add New Task</h5>
            <div class="card-body">
                <div class="form-group">
                    <label>Task Title</label>
                    <input type="text" v-model="newTodoTitle" placeholder="What needs to be done?"/>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea v-model="newTodoDescription" placeholder="Add more details... (optional)"
                              rows="3"></textarea>
                </div>
                <button class="btn btn-primary" @click="addTodo">
                    Add Todo Task
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useTodos from '@/hook/useTodos'

const {addTodo, newTodoTitle, newTodoDescription} = useTodos()
</script>
