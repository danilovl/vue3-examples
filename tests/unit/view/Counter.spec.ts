import {createRouter, createWebHistory} from 'vue-router'
import {mount} from '@vue/test-utils'
import {describe, it, expect, beforeEach} from 'vitest'
import Counter from '@/view/Counter.vue'
import {routes} from '@/router/index'

let router
let wrapper

beforeEach(async () => {
    router = createRouter({
        history: createWebHistory(),
        routes: routes
    })

    router.push('/counter')
    await router.isReady()

    wrapper = mount(Counter, {
        global: {
            plugins: [router]
        }
    })
})

describe('Counter.vue', () => {
    it('renders meta title from useRouteMeta', () => {
        expect(wrapper.find('h1').text()).toBe('Counter')
    })

    it('displays the initial count and double value', () => {
        expect(wrapper.find('button').text()).toContain('Count is: 0, double is: 0')
    })

    it('increments count and updates double value on button click', async () => {
        await wrapper.find('button').trigger('click')

        expect(wrapper.find('button').text()).toContain('Count is: 1, double is: 2')
    })
})
