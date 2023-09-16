<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <form-model
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

<script setup lang="ts">
import FormModel from '@/view/emits-v-model/FormModel.vue'
import {reactive} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

interface Address {
    name: string;
    addressLine: string;
    streetNumber: string;
    town: string;
    country: string;
    homeAddress: boolean;
}

const address = reactive<Address>({
    name: '',
    addressLine: '',
    streetNumber: '',
    town: '',
    country: '',
    homeAddress: false
}) as Address

const meta = useRouteMeta()
</script>
