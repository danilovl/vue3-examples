<template>
    <div class="toast-container">
        <transition-group name="toast">
            <div
                v-for="toast in toasts"
                :key="toast.id"
                :class="['toast-item', `toast-${toast.type}`]"
                @click="removeToast(toast.id)"
            >
                {{ toast.message }}
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import {useToastStore} from '@/store/module/toast'
import {storeToRefs} from 'pinia'

const store = useToastStore()
const {toasts} = storeToRefs(store)
const {removeToast} = store

</script>
