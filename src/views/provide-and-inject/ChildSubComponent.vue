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

<script lang="ts">
import type {Ref} from 'vue'
import {defineComponent, inject} from 'vue'
import {MessageUniqueIdentifierSymbol} from '@/views/provide-and-inject/ProvideAndInject.vue'

interface SetupData {
    injectMessage: Ref | undefined;
}

export default defineComponent({
    name: 'ChildSubComponent',
    inject: ['subChildComponentMessage'],
    setup(): SetupData {
        const injectMessage = inject<Ref>(MessageUniqueIdentifierSymbol)

        return {
            injectMessage
        }
    }
})
</script>
