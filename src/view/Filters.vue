<template>
    <div class="col-md-12">
        <div>
            <h1>{{ meta.title }}</h1>
        </div>
        <div class="card mb-4 box-shadow">
            <h5 id="global-title" class="card-header">{{ texts.global.title }}</h5>
            <div id="filter-global-title" class="card-body">
                {{ texts.global.text }} => {{ $filters.capitalizeFirstLetter(texts.global.text) }}
            </div>
        </div>
        <div class="card mb-4 box-shadow">
            <h5 id="local-title" class="card-header">{{ texts.local.title }}</h5>
            <div id="filter-local-title" class="card-body">
                {{ texts.local.text }} => {{ toUpperCase(texts.local.text) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useRouteMeta from '@/hook/useRouteMeta'

const texts = {
    global: {
        title: 'Global filter - capitalizeFirstLetter',
        text: 'example text'
    },
    local: {
        title: 'Local filter - toUpperCase',
        text: 'example'
    }
}

const toUpperCase = (string: string): string => string.toUpperCase()
const meta = useRouteMeta()
</script>
