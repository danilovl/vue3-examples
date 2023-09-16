<template>
    <div>
        <p>Has published books in child component by defineProps:</p>
        <span>{{ publishedBooksMessage }}</span>
        <br>
        <p>
            <button @click="clearBooks()">clear books emit in parent component</button>
        </p>
        <p>
            <button @click="createBooks()">create books emit in parent component</button>
        </p>
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
