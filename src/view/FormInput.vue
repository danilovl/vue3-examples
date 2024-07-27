<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Data message</h5>
            <div class="card-body">
                <input type="text" v-model="dataMessage" placeholder="data message"/>
                <p>Data message is: {{ dataMessage }}</p>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Ref message</h5>
            <div class="card-body">
                <input type="text" v-model="refMessage" placeholder="ref message"/>
                <p>Ref message is: {{ refMessage }}</p>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Checked</h5>
            <div class="card-body">
                <input type="checkbox" id="checkbox" v-model="checked"/>
                <label for="checkbox">{{ checked }}</label>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Checked names</h5>
            <div class="card-body">
                <div v-for="name in checkedNames.names" :key="name.id">
                    <input type="checkbox" :id="'checked-' + name" :value="name" v-model="checkedNames.checked"/>
                    <label :for="'checked-' + name">{{ name }}</label>
                </div>
                <br/>
                <span>Checked names: {{ checkedNames.checked }}</span>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Picked name</h5>
            <div class="card-body">
                <div v-for="name in pickedNames.names" :key="'picked-' + name">
                    <input type="radio" :id="'picked-' + name" :value="name" v-model="pickedNames.picked"/>
                    <label :for="'picked-' + name">{{ name }}</label>
                </div>
                <br/>
                <span>Picked names: {{ pickedNames.picked }}</span>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Computed sum</h5>
            <div class="card-body">
                <span v-for="number in sumState.numbers" :key="'number-' + number" class="mr-2">
                  <input type="checkbox" :id="'number-' + number" :value="number" v-model="sumState.checkedNumbers"/>
                  <label :for="'number-' + number">{{ number }}</label>
                </span>
                <br/>
                <span>Sum: {{ sumState.sum }}</span>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card mb-4 box-shadow">
            <h5 class="card-header">Selected name</h5>
            <div class="card-body">
                <select v-model="selectedNames.selected">
                    <option v-for="name in selectedNames.names" :value="name" :key="'selected-' + name">
                        {{ name }}
                    </option>
                </select>
                <span>Selected: {{ selectedNames.selected }}</span>
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
