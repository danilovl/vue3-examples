<template>
    <div class="row">
        <div class="col-md-12">
            <app-card title="Async Components & Suspense">
                <p class="mb-4">
                    Suspense allows you to display fallback content while waiting for async components
                    to load or for their top-level `await` calls to resolve.
                </p>

                <Suspense>
                    <template #default>
                        <HeavyComponent/>
                    </template>
                    <template #fallback>
                        <div class="text-center p-5">
                            <app-skeleton height="100px" class="mb-3"/>
                            <p>Loading async data, please wait...</p>
                        </div>
                    </template>
                </Suspense>
            </app-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineAsyncComponent} from 'vue'
import AppCard from '@/component/AppCard.vue'
import AppSkeleton from '@/component/AppSkeleton.vue'

const HeavyComponent = defineAsyncComponent(() =>
    import('./component/HeavyComponent.vue')
)
</script>
