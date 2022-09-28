import type {ComputedRef} from 'vue'
import {computed, reactive} from 'vue'

export interface StateReactive {
    count: number;
    double: ComputedRef;
}

export interface UseCounter {
    state: CounterState;
    increment: () => void;
}

export interface CounterState {
    count: number;
    double: number;
}

function useCounter(): UseCounter {
    const state = reactive<StateReactive>({
        count: 0,
        double: computed((): number => state.count * 2)
    }) as CounterState

    function increment(): void {
        state.count++
    }

    return {
        state,
        increment
    }
}

interface SetupData {
    state: CounterState;
    increment: () => void;
}

export default function (): SetupData {
    const {state, increment} = useCounter()

    return {
        state,
        increment
    }
}
