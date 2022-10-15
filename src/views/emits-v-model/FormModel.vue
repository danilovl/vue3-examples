<template>
    <form>
        <div class="form-group">
            <label for="name">Full name</label>
            <input
                type="text"
                id="name"
                class="form-control"
                v-model="name"
            />
        </div>
        <div class="form-group">
            <label for="addressLine">Address</label>
            <input
                type="text"
                id="addressLine"
                class="form-control"
                v-model="addressLine"
            />
        </div>
        <div class="form-group">
            <label for="streetNumber">Street</label>
            <input
                type="text"
                id="streetNumber"
                class="form-control"
                v-model="streetNumber"
            />
        </div>
        <div class="form-group">
            <label for="town">Town</label>
            <input
                type="text"
                id="town"
                class="form-control"
                v-model="town"
            />
        </div>
        <div class="form-group">
            <label for="homeAddress">is home address</label>
            <input
                type="checkbox"
                id="homeAddress"
                class="form-control"
                v-model="homeAddress"
            />
        </div>
    </form>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {objectEntries} from '@/helpers'

const props = defineProps<{
    name: string
    addressLine: string
    streetNumber: string
    town: string
    homeAddress: boolean
}>()

const emit = defineEmits([
    'update:name',
    'update:addressLine',
    'update:streetNumber',
    'update:town',
    'update:homeAddress'
])

const name = ref<string>(props.name)
const addressLine = ref<string>(props.addressLine)
const streetNumber = ref<string>(props.streetNumber)
const town = ref<string>(props.town)
const homeAddress = ref<boolean>(props.homeAddress)

const watchModels = {
    name: name,
    addressLine: addressLine,
    streetNumber: streetNumber,
    town: town,
    homeAddress: homeAddress
}

for (const [key, value] of objectEntries(watchModels)) {
    watch(value, (value): void => emit(`update:${key}`, value))
}
</script>
