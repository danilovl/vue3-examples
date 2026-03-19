<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <form-models
                                v-model:name="address.name"
                                v-model:country="address.country"
                                v-model:addressLine="address.addressLine"
                                v-model:streetNumber="address.streetNumber"
                                v-model:town="address.town"
                                v-model:homeAddress="address.homeAddress"
                            />
                        </div>
                        <div class="col-md-6">
                            <h6>Address Data (JSON):</h6>
                            <pre>{{ JSON.stringify(address, null, 2) }}</pre>
                        </div>
                    </div>
                </div>
            </div>
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
