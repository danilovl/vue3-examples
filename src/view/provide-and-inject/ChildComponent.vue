<template>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Child component </h5>
            <div class="card-body">
                <div class="mt-4">
                    Simple inject message in ChildComponent: <strong> {{ childComponentMessage }}</strong>
                </div>
                <div class="mt-4">
                    injected reactive message: <strong> {{ injectMessage }}</strong>
                </div>
            </div>
        </div>
    </div>
    <child-sub-component/>
</template>

<script setup lang="ts">
import type {Ref} from 'vue'
import {inject} from 'vue'
import ChildSubComponent from '@/view/provide-and-inject/ChildSubComponent.vue'
import {messageUniqueIdentifierSymbol} from '@/helper'

const childComponentMessage = inject('childComponentMessage')
const injectMessage = inject<Ref>(messageUniqueIdentifierSymbol)
</script>
