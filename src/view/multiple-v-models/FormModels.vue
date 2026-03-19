<template>
    <form @submit.prevent>
        <div class="form-group">
            <label for="name">Full name</label>
            <input
                type="text"
                id="name"
                :value="props.name"
                @input="$emit('update:name', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="country">Country</label>
            <input
                type="text"
                id="country"
                :value="props.country"
                @input="$emit('update:country', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="addressLine">Address</label>
            <input
                type="text"
                id="addressLine"
                :value="props.addressLine"
                @input="$emit('update:addressLine', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="streetNumber">Street</label>
            <input
                type="text"
                id="streetNumber"
                :value="streetNumber"
                @input="$emit('update:streetNumber', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="town">Town</label>
            <input
                type="text"
                id="town"
                :value="props.town"
                @input="$emit('update:town', $event.target.value)"
            />
        </div>
        <div class="custom-control">
            <input
                type="checkbox"
                id="homeAddress"
                class="custom-control-input"
                :checked="props.homeAddress"
                @change="$emit('update:homeAddress', $event.target.checked)"
            />
            <label class="custom-control-label" for="homeAddress">is home address</label>
        </div>
    </form>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    addressLine: {
        type: String,
        require: true
    },
    streetNumber: {
        type: String,
        require: true
    },
    town: {
        type: String,
        require: true
    },
    homeAddress: {
        type: Boolean,
        require: true
    }
})
</script>
