<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <form>
                <div class="form-group">
                    <label for="name">Full name</label>
                    <input
                        type="text"
                        id="name"
                        class="form-control"
                        :class="fieldValidationClass('name')"
                        v-model="address.name"
                    />
                    <div>{{ addressErrorMessage.name }}</div>
                </div>
                <br>
                <div class="form-group">
                    <label for="addressLine">Address</label>
                    <input
                        type="text"
                        id="addressLine"
                        class="form-control"
                        :class="fieldValidationClass('addressLine')"
                        v-model="address.addressLine"
                    />
                    <div>{{ addressErrorMessage.addressLine }}</div>
                </div>
                <br>
                <div class="form-group">
                    <label for="streetNumber">Street</label>
                    <input
                        type="text"
                        id="streetNumber"
                        class="form-control"
                        :class="fieldValidationClass('streetNumber')"
                        v-model="address.streetNumber"
                    />
                    <div>{{ addressErrorMessage.streetNumber }}</div>
                </div>
                <br>
                <div class="form-group">
                    <label for="town">Town</label>
                    <input
                        type="text"
                        id="town"
                        class="form-control"
                        :class="fieldValidationClass('town')"
                        v-model="address.town"
                    />
                    <div>{{ addressErrorMessage.town }}</div>
                </div>
                <br>
                <div class="form-group">
                    <label for="homeAddress">is home address</label>
                    <input
                        type="checkbox"
                        id="homeAddress"
                        class="form-control"
                        v-model="address.homeAddress"
                    />
                </div>
            </form>
        </div>
    </div>
    <div class="row justify-content-center" v-if="isFormValid()">
        <div class="col-4">
            <pre :style="{ 'text-align': 'left' }">{{ JSON.stringify(address, null, 2) }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {Ref} from 'vue'
import {reactive, watch} from 'vue'
import {useField} from 'vee-validate'
import useRouteMeta from '@/hook/useRouteMeta'

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

const fieldValidationClass = (type: string): string | null => {
    if (!startTyping[type]) {
        return null
    }

    return addressErrorMessage[type] === undefined ? 'is-valid' : 'is-invalid'
}

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
