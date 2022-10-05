<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>

    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <p>Has published books in parent component:</p>
            <span>{{ publishedBooksMessage }}</span>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <div class="card-body">
                <author-book
                    @clearBooks="clearBooks"
                    @createBooks="createBooks"
                    :author="author"
                    class="mb-2"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive} from 'vue'
import AuthorBook from '@/views/emits-computed/AuthorBook.vue'
import useRouteMeta from '@/hooks/useRouteMeta'
import {AuthorModel} from '@/model/author-model'

const books: string[] = [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
]

const meta = useRouteMeta()
const author = reactive<AuthorModel>(new AuthorModel('John Doe', books))

const clearBooks = (): void => {
    author.books = []
}

const createBooks = (): void => {
    author.books = books
}

function hasBooks(books: string []): string {
    return books.length > 0 ? 'Yes' : 'No'
}

const publishedBooksMessage = computed((): string => {
    return hasBooks(author.books)
})
</script>
