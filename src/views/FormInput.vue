<template>
  <div>
    <h1>{{ meta.title }}</h1>
  </div>
  <div class="col-md-12">
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">Data message</h5>
      <div class="card-body">
        <input v-model="dataMessage" placeholder="data message"/>
        <p>Data message is: {{ dataMessage }}</p>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">Ref message</h5>
      <div class="card-body">
        <input v-model="refMessage" placeholder="ref message"/>
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
          <option v-for="name in selectedNames.names" :value="name" :key="'selected-' + name">{{ name }}</option>
        </select>
        <span>Selected: {{ selectedNames.selected }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed, reactive, Ref} from 'vue'
import {ComputedRef} from '@vue/reactivity'
import useRouteMeta from '@/hooks/useRouteMeta'
import RouteMeta from '@/interfaces/routeMeta'

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

interface SetupData {
  refMessage: Ref;
  sumState: SumState;
  meta: RouteMeta;
}

export default defineComponent({
  name: 'FormInput',
  data() {
    return {
      dataMessage: '',
      checked: true,
      checkedNames: {
        names: ['Jack', 'John', 'Mike'],
        checked: []
      },
      pickedNames: {
        names: ['Jack', 'John', 'Mike'],
        picked: null
      },
      selectedNames: {
        names: ['Jack', 'John', 'Mike'],
        selected: null
      }
    }
  },
  setup(): SetupData {
    const refMessage = ref<string | number>('')

    const sumState = reactive<StateReactive>({
      numbers: Array.from(Array(10).keys()),
      checkedNumbers: [],
      sum: computed(() => sumState.checkedNumbers.reduce((a: number, b: number): number => a + b, 0))
    }) as SumState

    const meta = useRouteMeta()

    return {
      refMessage,
      sumState,
      meta
    }
  }
})
</script>
