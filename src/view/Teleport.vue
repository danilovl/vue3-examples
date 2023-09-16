<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="mt-4">
        <button @click="isModalOpen = true"
                v-if="isModalOpen === false"
                class="btn btn-outline-primary my-2 my-sm-0"
        >
            Open screen modal
        </button>

        <teleport to="body">
            <div v-if="isModalOpen">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Teleport</h5>
                            <button type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="close"
                                    @click="isModalOpen = false"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>render the modal's content as a child of the body tag..</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button"
                                    class="btn btn-primary"
                                    @click="isModalOpen = false"
                            >
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

const isModalOpen = ref<boolean>(false)

const meta = useRouteMeta()
</script>
