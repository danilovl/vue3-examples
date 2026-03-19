<template>
    <div class="row">
        <div class="col-md-12">
            <app-card :title="meta.title">
                <form @submit.prevent>
                    <app-input
                        v-model="address.name"
                        label="Full name"
                        placeholder="Enter your full name"
                        :error="startTyping.name ? addressErrorMessage.name : ''"
                    />

                    <app-input
                        v-model="address.addressLine"
                        label="Address"
                        placeholder="Street, house, apt"
                        :error="startTyping.addressLine ? addressErrorMessage.addressLine : ''"
                    />

                    <app-input
                        v-model="address.streetNumber"
                        label="Street"
                        placeholder="Street name"
                        :error="startTyping.streetNumber ? addressErrorMessage.streetNumber : ''"
                    />

                    <app-input
                        v-model="address.town"
                        label="Town"
                        placeholder="Your city"
                        :error="startTyping.town ? addressErrorMessage.town : ''"
                    />

                    <div class="custom-control">
                        <input
                            type="checkbox"
                            id="homeAddress"
                            class="custom-control-input"
                            v-model="address.homeAddress"
                        />
                        <label class="custom-control-label" for="homeAddress">Is home address</label>
                    </div>
                </form>
            </app-card>
        </div>
    </div>
    <div class="row" v-if="isFormValid()">
        <div class="col-md-12">
            <app-card title="Form Data (JSON)">
                <pre>{{ JSON.stringify(address, null, 2) }}</pre>
            </app-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue'
import {reactive, watch} from 'vue'
import {useField} from 'vee-validate'
import useRouteMeta from '@/hook/useRouteMeta'
import AppCard from '@/component/AppCard.vue'
import AppInput from '@/component/AppInput.vue'

interface Address {
    name: string | null;
    addressLine: string | null;
    streetNumber: string | null;
    town: string | null;
    homeAddress: boolean;
}

interface AddressRef {
    name: Ref;
    addressLine: Ref;
    streetNumber: Ref;
    town: Ref;
    homeAddress: boolean;
}

interface AddressErrorMessageRef {
    name: Ref<string | undefined>;
    addressLine: Ref<string | undefined>;
    streetNumber: Ref<string | undefined>;
    town: Ref<string | undefined>;
}

interface AddressErrorMessageKeys {
    [key: string]: string | null;
}

interface AddressErrorMessage extends AddressErrorMessageKeys {
    name: string | null;
    addressLine: string | null;
    streetNumber: string | null;
    town: string | null;
}

interface StartTypingKeys {
    [key: string]: boolean;
}

interface StartTyping extends StartTypingKeys {
    name: boolean;
    addressLine: boolean;
    streetNumber: boolean;
    town: boolean;
}

const startTyping: StartTyping = {
    name: false,
    addressLine: false,
    streetNumber: false,
    town: false
}

function validate(value: any): boolean | string {
    if (!value) {
        return 'This field is required'
    }

    if (value.length < 3) {
        return 'Must contain more than 3 characters'
    }

    return true
}

const {value: name, errorMessage: errorMessageName} = useField('name', validate)
const {value: addressLine, errorMessage: errorMessageAddressLine} = useField('addressLine', validate)
const {value: streetNumber, errorMessage: errorMessageStreetNumber} = useField('streetNumber', validate)
const {value: town, errorMessage: errorMessageTown} = useField('town', validate)

const address = reactive<AddressRef>({
    name: name,
    addressLine: addressLine,
    streetNumber: streetNumber,
    town: town,
    homeAddress: false
}) as Address

watch(name, (): void => {
    startTyping.name = true
})
watch(addressLine, (): void => {
    startTyping.addressLine = true
})
watch(streetNumber, (): void => {
    startTyping.streetNumber = true
})
watch(town, (): void => {
    startTyping.town = true
})

const addressErrorMessage = reactive<AddressErrorMessageRef>({
    name: errorMessageName,
    addressLine: errorMessageAddressLine,
    streetNumber: errorMessageStreetNumber,
    town: errorMessageTown,
}) as AddressErrorMessage


const isFormValid = (): boolean => {
    for (const field in addressErrorMessage) {
        if (addressErrorMessage[field] !== undefined || !startTyping[field]) {
            return false
        }
    }

    return true
}

const meta = useRouteMeta()
</script>
