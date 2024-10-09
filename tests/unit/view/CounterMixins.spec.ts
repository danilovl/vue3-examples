import {mount} from '@vue/test-utils'
import {describe, it, expect, beforeEach} from 'vitest'
import CounterMixins from '@/view/CounterMixins.vue'
import router from '../router-mock'

let wrapper

beforeEach(async () => {
    await router.push('/counter-mixins')
    await router.isReady()

    wrapper = mount(CounterMixins, {
        global: {
            plugins: [router]
        }
    })
})

describe('CounterMixins.vue', () => {
    it('renders meta title from useRouteMeta', () => {
        expect(wrapper.find('h1').text()).toBe('Counter mixins')
    })

    it('displays the initial count and double value', () => {
        expect(wrapper.find('button').text()).toContain('Count is: 0, double is: 0')
    })

    it('increments count and updates double value on button click', async () => {
        await wrapper.find('button').trigger('click')

        expect(wrapper.find('button').text()).toContain('Count is: 1, double is: 2')
    })
})
