<template>
    <div class="mb-4">
        <h1>{{ meta.title }}</h1>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Data message</h5>
                <div class="card-body">
                    <div class="form-group">
                        <label>Message input</label>
                        <input type="text" v-model="dataMessage" placeholder="Enter data message"/>
                    </div>
                    <p class="mt-3">Data message is: <strong>{{ dataMessage }}</strong></p>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Ref message</h5>
                <div class="card-body">
                    <div class="form-group">
                        <label>Ref input</label>
                        <input type="text" v-model="refMessage" placeholder="Enter ref message"/>
                    </div>
                    <p class="mt-3">Ref message is: <strong>{{ refMessage }}</strong></p>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Checked</h5>
                <div class="card-body">
                    <div class="custom-control">
                        <input type="checkbox" class="custom-control-input" id="checkbox" v-model="checked"/>
                        <label class="custom-control-label" for="checkbox">Status: {{ checked }}</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Checked names</h5>
                <div class="card-body">
                    <div v-for="name in checkedNames.names" :key="'checked-' + name" class="custom-control">
                        <input type="checkbox" class="custom-control-input" :id="'checked-' + name" :value="name"
                               v-model="checkedNames.checked"/>
                        <label class="custom-control-label" :for="'checked-' + name">{{ name }}</label>
                    </div>
                    <hr class="my-3"/>
                    <span>Checked names: <strong>{{ checkedNames.checked }}</strong></span>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Picked name</h5>
                <div class="card-body">
                    <div v-for="name in pickedNames.names" :key="'picked-' + name" class="custom-control">
                        <input type="radio" class="custom-control-input" :id="'picked-' + name" :value="name"
                               v-model="pickedNames.picked"/>
                        <label class="custom-control-label" :for="'picked-' + name">{{ name }}</label>
                    </div>
                    <hr class="my-3"/>
                    <span>Picked names: <strong>{{ pickedNames.picked }}</strong></span>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Computed sum</h5>
                <div class="card-body">
                    <div class="mb-3">
                        <div v-for="number in sumState.numbers" :key="'number-' + number"
                             class="custom-control custom-control-inline">
                            <input type="checkbox" class="custom-control-input" :id="'number-' + number" :value="number"
                                   v-model="sumState.checkedNumbers"/>
                            <label class="custom-control-label" :for="'number-' + number">{{ number }}</label>
                        </div>
                    </div>
                    <hr class="my-3"/>
                    <span>Sum: <strong>{{ sumState.sum }}</strong></span>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">Selected name</h5>
                <div class="card-body">
                    <div class="form-group">
                        <label>Select a name</label>
                        <select v-model="selectedNames.selected">
                            <option v-for="name in selectedNames.names" :value="name" :key="'selected-' + name">
                                {{ name }}
                            </option>
                        </select>
                    </div>
                    <p class="mt-3">Selected: <strong>{{ selectedNames.selected }}</strong></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {ComputedRef} from 'vue'
import {ref, computed, reactive} from 'vue'
import useRouteMeta from '@/hook/useRouteMeta'

interface StateReactive {
    numbers: number[];
    checkedNumbers: number[];
    sum: ComputedRef;
}

interface SumState {
    numbers: number[];
    checkedNumbers: number[];
    sum: number;
}

interface CheckedNames {
    names: string[];
    checked: string[];
}

interface PickedNames {
    names: string[];
    picked: string | null;
}

interface SelectedNames {
    names: string[];
    selected: string | null;
}

const dataMessage = ref<string>('')
const checked = ref<boolean>(true)

const checkedNames = ref<CheckedNames>({
    names: ['Jack', 'John', 'Mike'],
    checked: []
})

const pickedNames = ref<PickedNames>({
    names: ['Jack', 'John', 'Mike'],
    picked: null
})

const selectedNames = ref<SelectedNames>({
    names: ['Jack', 'John', 'Mike'],
    selected: null
})

const refMessage = ref<string | number>('')

const sumState = reactive<StateReactive>({
    numbers: Array.from(Array(10).keys()),
    checkedNumbers: [],
    sum: computed((): number => sumState.checkedNumbers.reduce((a: number, b: number): number => a + b, 0))
}) as SumState

const meta = useRouteMeta()
</script>
