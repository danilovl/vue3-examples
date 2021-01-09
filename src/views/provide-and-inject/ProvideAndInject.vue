<template>
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
import ChildComponent from '@/views/provide-and-inject/ChildComponent.vue'
import {Ref, ref, provide, readonly} from 'vue'

interface SetupData {
  injectMessage: Ref;
}

interface ProvideState {
  childComponentMessage: string;
  subChildComponentMessage: string;
}

export const MessageUniqueIdentifierSymbol = Symbol('User settings state provider identifier')

export default {
  name: 'ProvideAndInject',
  components: {
    ChildComponent
  },
  setup(): SetupData {
    const injectMessage = ref<string | number>('')

    provide<Ref>(MessageUniqueIdentifierSymbol, readonly(injectMessage))

    return {
      injectMessage
    }
  },
  provide(): ProvideState {
    return {
      childComponentMessage: 'Child component inject message',
      subChildComponentMessage: 'Sub child component inject message'
    }
  }
}
</script>