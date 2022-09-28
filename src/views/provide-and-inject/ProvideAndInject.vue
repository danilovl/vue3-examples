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

<script lang="ts">
import type {Ref} from 'vue'
import type RouteMeta from '@/interfaces/routeMeta'
import ChildComponent from '@/views/provide-and-inject/ChildComponent.vue'
import {ref, provide, readonly, defineComponent} from 'vue'
import useRouteMeta from '@/hooks/useRouteMeta'

interface SetupData {
    injectMessage: Ref;
    meta: RouteMeta;
}

interface ProvideState {
    childComponentMessage: string;
    subChildComponentMessage: string;
}

export const MessageUniqueIdentifierSymbol = Symbol('User settings state provider identifier')

export default defineComponent({
    name: 'ProvideAndInject',
    components: {
        ChildComponent
    },
    setup(): SetupData {
        const injectMessage = ref<string | number>('')

        provide<Ref>(MessageUniqueIdentifierSymbol, readonly(injectMessage))
        const meta = useRouteMeta()

        return {
            injectMessage,
            meta
        }
    },
    provide(): ProvideState {
        return {
            childComponentMessage: 'Child component inject message',
            subChildComponentMessage: 'Sub child component inject message'
        }
    }
})
</script>
