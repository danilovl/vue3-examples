<template>
    <form>
        <div class="form-group">
            <label for="name">Full name</label>
            <input
                type="text"
                id="name"
                class="form-control"
                :value="props.name"
                @input="$emit('update:name', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="name">Country</label>
            <input
                type="text"
                id="country"
                class="form-control"
                :value="props.country"
                @input="$emit('update:country', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="addressLine">Address</label>
            <input
                type="text"
                id="addressLine"
                class="form-control"
                :value="props.addressLine"
                @input="$emit('update:addressLine', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="streetNumber">Street</label>
            <input
                type="text"
                id="streetNumber"
                class="form-control"
                :value="streetNumber"
                @input="$emit('update:streetNumber', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="town">Town</label>
            <input
                type="text"
                id="town"
                class="form-control"
                :value="props.town"
                @input="$emit('update:town', $event.target.value)"
            />
        </div>
        <div class="form-group">
            <label for="homeAddress">is home address</label>
            <input
                type="checkbox"
                id="homeAddress"
                class="form-control"
                :value="props.homeAddress"
                @change="$emit('update:homeAddress', $event.target.checked)"
            />
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
