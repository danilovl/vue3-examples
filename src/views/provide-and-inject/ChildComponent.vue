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

<script lang="ts">
import type {Ref} from 'vue'
import {defineComponent, inject} from 'vue'
import ChildSubComponent from '@/views/provide-and-inject/ChildSubComponent.vue'
import {MessageUniqueIdentifierSymbol} from '@/views/provide-and-inject/ProvideAndInject.vue'

interface SetupData {
    injectMessage: Ref | undefined;
}

export default defineComponent({
    name: 'ChildComponent',
    components: {
        ChildSubComponent
    },
    inject: ['childComponentMessage'],
    setup(): SetupData {
        const injectMessage = inject<Ref>(MessageUniqueIdentifierSymbol)

        return {
            injectMessage
        }
    }
})
</script>
