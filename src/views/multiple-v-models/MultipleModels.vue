<template>
  <div>
    <h1>{{ meta.title }}</h1>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <form-models
          v-model:name="address.name"
          v-model:addressLine="address.addressLine"
          v-model:streetNumber="address.streetNumber"
          v-model:town="address.town"
          v-model:country="address.country"
          v-model:homeAddress="address.homeAddress"
      />
    </div>
  </div>
  <hr/>
  <div class="row justify-content-center">
    <div class="col-4">
      <pre :style="{ 'text-align': 'left' }">{{ JSON.stringify(address, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import type RouteMeta from '@/interfaces/routeMeta'
import FormModels from '@/views/multiple-v-models/FormModels.vue'
import {defineComponent, reactive} from 'vue'
import useRouteMeta from '@/hooks/useRouteMeta'

interface Address {
    name: string;
    addressLine: string;
    streetNumber: string;
    town: string;
    homeAddress: boolean;
}

interface SetupData {
    address: Address;
    meta: RouteMeta;
}

export default defineComponent({
    name: 'MultiModels',
    components: {
        FormModels
    },
    setup(): SetupData {
        const address = reactive<Address>({
            name: '',
            addressLine: '',
            streetNumber: '',
            town: '',
            homeAddress: false
        }) as Address

        const meta = useRouteMeta()

        return {
            address,
            meta
        }
    }
})
</script>
