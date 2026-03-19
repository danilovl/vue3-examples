<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body">
                    <p class="card-text mb-4">Using slots for flexible component layouts.</p>
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <BaseLayout>
                                <template v-for="(content, index) in templates" :key="index" #[index]>
                                    <div class="p-4 bg-light rounded border mb-2">
                                        <h6 class="text-uppercase text-muted fw-bold mb-3 small">{{ index }} slot</h6>
                                        <div class="text-dark">
                                            {{ content }}
                                        </div>
                                    </div>
                                </template>
                            </BaseLayout>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseLayout from '@/view/slot/BaseLayout.vue'
import useRouteMeta from '@/hook/useRouteMeta'

type Template = Record<'header' | 'main' | 'footer', string>

const templates: Template = {
    header: 'Header Section: Usually contains the site logo, navigation menu, and search bar.',
    main: 'Main Content Area: This is where the primary information of the page is displayed to the user.',
    footer: 'Footer Section: Often includes copyright information, legal links, and social media icons.'
}

const meta = useRouteMeta()
</script>
