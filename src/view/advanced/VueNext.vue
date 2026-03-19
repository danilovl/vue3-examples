<template>
    <div class="row">
        <div class="col-md-12">
            <app-card title="Vue 3.5+ Features">
                <div class="mb-5">
                    <h5>1. useTemplateRef</h5>
                    <p>New way to get access to DOM elements in 3.5+.</p>
                    <div class="d-flex align-items-center gap-2">
                        <input ref="inputRef" class="form-control mr-2" style="width: 200px"
                               placeholder="I will be focused"/>
                        <app-button @click="focusInput" small>Focus Me</app-button>
                    </div>
                </div>

                <div class="mb-5 pt-4 border-top">
                    <h5>2. defineModel (Extended)</h5>
                    <p>Simplified two-way binding. The value below is synced between parent and custom input.</p>
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Parent State: {{ modelValue }}</h6>
                            <CustomModelInput v-model="modelValue" label="Sync Input"/>
                        </div>
                    </div>
                </div>

                <div class="pt-4 border-top">
                    <h5>3. useWindowSize (Custom Composable)</h5>
                    <p>Current Window Dimensions: <strong>{{ width }} x {{ height }}</strong></p>
                    <div class="skeleton-demo mt-2">
                        <app-skeleton :width="width / 10 + 'px'" height="20px"/>
                    </div>
                </div>
            </app-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useTemplateRef, ref} from 'vue'
import AppCard from '@/component/AppCard.vue'
import AppButton from '@/component/AppButton.vue'
import AppSkeleton from '@/component/AppSkeleton.vue'
import CustomModelInput from './component/CustomModelInput.vue'
import {useWindowSize} from '@/hook/useWindowSize'

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')
const focusInput = () => {
    inputRef.value?.focus()
}

const modelValue = ref('Initial Value')

const {width, height} = useWindowSize()
</script>
