<template>
    <div class="heavy-component">
        <h3>Data Loaded!</h3>
        <p>This data was fetched asynchronously with a deliberate delay to demonstrate Suspense.</p>
        <ul>
            <li v-for="item in data" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {sleep} from '@/helper'

const fetchData = async () => {
    await sleep(3000)
    return [
        {id: 1, title: 'Async Item 1'},
        {id: 2, title: 'Async Item 2'},
        {id: 3, title: 'Async Item 3'}
    ]
}

const data = await fetchData()
</script>
