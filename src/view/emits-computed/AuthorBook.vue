<template>
    <div>
        <p class="mb-3">Has published books in child component (defineProps): <strong>{{
                publishedBooksMessage
            }}</strong></p>
        <div class="d-flex gap-2">
            <button class="btn btn-danger mr-2" @click="clearBooks()">Clear Books (Emit)</button>
            <button class="btn btn-primary" @click="createBooks()">Restore Books (Emit)</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {AuthorModel} from '@/model/author-model'

const props = defineProps({
    author: {
        type: AuthorModel,
        required: true
    }
})

const emit = defineEmits(['createBooks', 'clearBooks'])
const createBooks = (): void => {
    emit('createBooks')
}

const clearBooks = (): void => {
    emit('clearBooks')
}

function hasBooks(books: string []): string {
    return books.length > 0 ? 'Yes' : 'No'
}

const publishedBooksMessage = computed((): string => {
    return hasBooks(props.author.books)
})
</script>
