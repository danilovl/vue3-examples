<template>
    <div class="row">
        <div class="col-md-12">
            <app-card>
                <div class="text-center">
                    <hello-message
                        message="Welcome to demo Vue3 + Pinia + TypeScript"
                        description="Demonstrate new features for Vue 3 and how to use them"
                    />
                </div>
            </app-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import HelloMessage from '@/component/HelloMessage.vue'
import AppCard from '@/component/AppCard.vue'
</script>
