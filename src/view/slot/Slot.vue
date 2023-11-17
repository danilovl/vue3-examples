<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="row justify-content-center">
        <BaseLayout>
            <template v-for="(content, index) in templates" #[index]>
                {{ content }}
            </template>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
import BaseLayout from '@/view/slot/BaseLayout.vue'
import useRouteMeta from '@/hook/useRouteMeta'

type Template = Record<'header' | 'main' | 'footer', string>

const templates: Template = {
    header: 'header content',
    main: 'main content',
    footer: 'footer content'
}

const meta = useRouteMeta()
</script>
