<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body">
                    <div class="mb-4">
                        <h6>Directives (v-t)</h6>
                        <div class="p-3 bg-light rounded">
                            <p class="mb-1"><span v-t="'greeting'"></span></p>
                            <p class="mb-0"><span v-t="'farewell'"></span></p>
                        </div>
                    </div>

                    <div class="mb-4">
                        <h6>Function call ($translate)</h6>
                        <button class="btn btn-info" @click="showTranslatedQuestion">
                            {{ $translate('show_question') }}
                        </button>
                    </div>

                    <div class="mb-4">
                        <h6>Input placeholder directive</h6>
                        <div class="form-group">
                            <input type="text" v-t-input="{ key: 'instruction' }"/>
                        </div>
                    </div>

                    <div>
                        <h6>Plain translation</h6>
                        <p class="card-text">
                            <strong>{{ $translate('statement') }}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

const meta = useRouteMeta();

const translate = inject<(key: string, params?: Record<string, string | number>) => string>('translate')

const $translate = (key: string, params?: Record<string, string | number>) => {
    return translate ? translate(key, params) : key
};

const vTInput = {
    mounted(el: HTMLInputElement, binding: { value: { key: string } }): void {
        el.placeholder = $translate(binding.value.key)
    },
};

const showTranslatedQuestion = (): void => {
    alert($translate('question'))
};
</script>
