<template>
    <form @submit.prevent>
        <div class="form-group">
            <label for="name">Full name</label>
            <input
                type="text"
                id="name"
                v-model="name"
            />
        </div>
        <div class="form-group">
            <label for="addressLine">Address</label>
            <input
                type="text"
                id="addressLine"
                v-model="addressLine"
            />
        </div>
        <div class="form-group">
            <label for="streetNumber">Street</label>
            <input
                type="text"
                id="streetNumber"
                v-model="streetNumber"
            />
        </div>
        <div class="form-group">
            <label for="town">Town</label>
            <input
                type="text"
                id="town"
                v-model="town"
            />
        </div>
        <div class="form-group">
            <label for="country">Country</label>
            <input
                type="text"
                id="country"
                v-model="country"
            />
        </div>
        <div class="custom-control">
            <input
                type="checkbox"
                id="homeAddress"
                class="custom-control-input"
                v-model="homeAddress"
            />
            <label class="custom-control-label" for="homeAddress">is home address</label>
        </div>
    </form>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {objectEntries} from '@/helper'

const props = defineProps<{
    name: string
    addressLine: string
    streetNumber: string
    town: string
    country: string
    homeAddress: boolean
}>()

const emit = defineEmits([
    'update:name',
    'update:addressLine',
    'update:streetNumber',
    'update:town',
    'update:country',
    'update:homeAddress'
])

const name = ref<string>(props.name)
const addressLine = ref<string>(props.addressLine)
const streetNumber = ref<string>(props.streetNumber)
const town = ref<string>(props.town)
const country = ref<string>(props.country)
const homeAddress = ref<boolean>(props.homeAddress)

const watchModels = {
    name: name,
    addressLine: addressLine,
    streetNumber: streetNumber,
    town: town,
    country: country,
    homeAddress: homeAddress
}

for (const [key, value] of objectEntries(watchModels)) {
    watch(value, (value): void => emit(`update:${key}`, value))
}
</script>
