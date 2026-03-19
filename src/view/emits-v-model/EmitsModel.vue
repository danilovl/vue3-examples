<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <form-model
                                v-model:name="address.name"
                                v-model:addressLine="address.addressLine"
                                v-model:streetNumber="address.streetNumber"
                                v-model:town="address.town"
                                v-model:country="address.country"
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
