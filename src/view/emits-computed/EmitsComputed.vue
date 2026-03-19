<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body">
                    <p class="mb-3">Has published books in parent component: <strong>{{
                            publishedBooksMessage
                        }}</strong></p>
                    <hr class="mb-4"/>
                    <author-book
                        @clearBooks="clearBooks"
                        @createBooks="createBooks"
                        :author="author"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive} from 'vue'
import AuthorBook from '@/view/emits-computed/AuthorBook.vue'
import useRouteMeta from '@/hook/useRouteMeta'
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
