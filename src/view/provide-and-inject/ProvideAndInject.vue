<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Parent component</h5>
            <div class="card-body">
                <input v-model="injectMessage" placeholder="reactive message"/>
                <p>reactive message: {{ injectMessage }}</p>
            </div>
        </div>
    </div>
    <child-component/>
</template>

<script setup lang="ts">
import type {Ref} from 'vue'
import ChildComponent from '@/view/provide-and-inject/ChildComponent.vue'
import {ref, provide, readonly} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'
import {messageUniqueIdentifierSymbol} from '@/helper'

const injectMessage = ref<string | number>('')

provide<Ref>(messageUniqueIdentifierSymbol, readonly(injectMessage))
const meta = useRouteMeta()

provide('childComponentMessage', 'Child component inject message')
provide('subChildComponentMessage', 'Sub child component inject message')
</script>
