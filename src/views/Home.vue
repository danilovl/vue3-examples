<template>
  <div class="home">
    <hello-message
        message="Welcome to demo Vue3 + Pinia + TypeScript"
        description="Demonstrate new features for Vue 3 and how to use them"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HelloMessage from '@/components/HelloMessage.vue'

export default defineComponent({
    name: 'Home',
    components: {
        HelloMessage
    }
})
</script>
