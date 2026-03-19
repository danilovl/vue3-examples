<template>
    <div class="row">
        <div class="col-md-12">
            <app-card :title="meta.title">
                <div v-if="isLoading">
                    <div v-for="i in 5" :key="i" class="mb-3">
                        <app-skeleton height="24px" width="80%"/>
                    </div>
                    <p class="text-muted mt-3 small">
                        Process: {{ processInformation }}
                    </p>
                </div>
                <div id="todos-list" v-else>
                    <h2 class="mb-3">Fake online REST API data</h2>
                    <p v-for="todo in (todos as any)" :key="todo.title" class="mb-2">
                        {{ $filters.capitalizeFirstLetter(todo.title) }}
                    </p>
                </div>
            </app-card>
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
import AppCard from '@/component/AppCard.vue'
import AppSkeleton from '@/component/AppSkeleton.vue'

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
