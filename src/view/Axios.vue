<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Axios</h5>
            <div class="card-body" v-if="isLoading === true">
                <p>
                    <a :href="apiUrl" class="href">Loading from here</a>
                </p>
                <p>
                    Process: {{ processInformation }}
                </p>
            </div>
            <div class="card-body" v-else>
                <h1>Fake online REST API data</h1>
                <p v-for="todo in todos" :key="todo.title">
                    {{ $filters.capitalizeFirstLetter(todo.title) }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {AxiosResponse} from 'axios'
import {onMounted, ref} from 'vue'
import axios from 'axios'
import {sleep} from '@/helper'
import apiUrlConstant from '@/constant/api'
import useRouteMeta from '@/hook/useRouteMeta'

const apiUrl = apiUrlConstant.apiTodoUrl
const isLoading = ref<boolean>(true)
const processInformation = ref<string>('loading data')
const todos = ref<AxiosResponse>()
const meta = useRouteMeta()

onMounted((): void => {
    axios
        .get(apiUrl)
        .then(async (response): Promise<void | null> => {
            return sleep(2000).then((): void => {
                processInformation.value = 'data was downloaded'
                todos.value = response.data
            });
        })
        .then(async (): Promise<void | null> => {
            return sleep(2000).then((): void => {
                processInformation.value = 'data processing'
            });
        })
        .then((): void => {
            sleep(2000).then((): void => {
                isLoading.value = false
            })
        })
})
</script>
