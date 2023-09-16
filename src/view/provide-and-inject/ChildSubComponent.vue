<template>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Child sub component</h5>
            <div class="card-body">
                <div class="mt-4">
                    Simple inject message in ChildSubComponent: <strong> {{ subChildComponentMessage }}</strong>
                </div>
                <div class="mt-4">
                    injected reactive message: <strong> {{ injectMessage }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue'
import {inject} from 'vue'
import {messageUniqueIdentifierSymbol} from '@/helper'

const subChildComponentMessage = inject('subChildComponentMessage')
const injectMessage = inject<Ref>(messageUniqueIdentifierSymbol)
</script>
