<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <form-models
                v-model:name="address.name"
                v-model:country="address.country"
                v-model:addressLine="address.addressLine"
                v-model:streetNumber="address.streetNumber"
                v-model:town="address.town"
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

<script setup lang="ts">
import FormModels from '@/view/multiple-v-models/FormModels.vue'
import {reactive} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

interface Address {
    name: string;
    country: string;
    addressLine: string;
    streetNumber: string;
    town: string;
    homeAddress: boolean;
}

const address = reactive<Address>({
    name: '',
    country: '',
    addressLine: '',
    streetNumber: '',
    town: '',
    homeAddress: false
}) as Address

const meta = useRouteMeta()
</script>
