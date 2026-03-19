<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body text-center">
                    <p class="card-text mb-4">
                        Teleport allows you to render a component's template in a different part of the DOM tree,
                        outside of the component's hierarchy.
                    </p>
                    <button @click="isModalOpen = true"
                            v-if="isModalOpen === false"
                            class="btn btn-primary"
                    >
                        Open Modal via Teleport
                    </button>
                </div>
            </div>
        </div>
    </div>

    <teleport to="body">
        <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
            <div class="modal-container card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Teleported Modal</h5>
                    <button type="button" class="close-btn" @click="isModalOpen = false">&times;</button>
                </div>
                <div class="card-body">
                    <p>This modal is rendered as a direct child of the <code>&lt;body&gt;</code> tag!</p>
                    <p>It's useful for breaking out of parent containers with <code>overflow: hidden</code> or complex
                        Z-index stacks.</p>
                </div>
                <div class="card-footer text-right">
                    <button type="button" class="btn btn-primary" @click="isModalOpen = false">
                        Close Modal
                    </button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

const isModalOpen = ref<boolean>(false)
const meta = useRouteMeta()
</script>
