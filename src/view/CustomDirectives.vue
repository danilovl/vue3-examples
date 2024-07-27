<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div>
        <p>
            <input type="text" v-focus/>
        </p>
        <p>
            <input type="text" v-attribute="{ id: 'directive-input', text: 'hello!' }"/>
        </p>
        <p>
            <button v-alert="'hello!'">alert</button>
        </p>
    </div>
</template>

<script setup lang="ts">
import useRouteMeta from '@/hook/useRouteMeta'

const meta = useRouteMeta()

const vFocus = {
    mounted: (element: HTMLInputElement): void => {
        element.focus()
    }
}

const vAttribute = {
    mounted: (element: HTMLInputElement, binding: Object): void => {
        element.id = binding.value.id
        element.value = binding.value.text
    }
}

const vAlert = {
    mounted: (element: HTMLInputElement, binding: Object): void => {
        element.addEventListener('click', (): void => {
            alert(binding.value)
        })
    }
}
</script>
