<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <h5 class="card-header">{{ meta.title }}</h5>
                <div class="card-body text-center">
                    <p class="card-text mb-4">Using mixins for shared counter logic.</p>
                    <button class="btn btn-primary" @click="increment">
                        Count is: {{ state.count }}, double is: {{ state.double }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Counter from '@/mixins/counter'
import useRouteMeta from '@/hook/useRouteMeta'

const meta = useRouteMeta()
const {state, increment} = Counter()
</script>
