import {mount} from '@vue/test-utils'
import {describe, it, expect, beforeEach} from 'vitest'
import Directives from '@/view/Directives.vue'
import router from '../router-mock'

let wrapper

beforeEach(async () => {
    await router.push('/directives')
    await router.isReady()

    wrapper = mount(Directives, {
        global: {
            plugins: [router]
        }
    })
})

describe('Directives.vue', () => {
    it('renders meta title from useRouteMeta', () => {
        expect(wrapper.find('h1').text()).toBe('Directives')
    })

    it('v-once: initial message renders and doesnt update on change', async () => {
        let initialMessage = wrapper.find('#once-message').text()
        expect(initialMessage).toBe('hello world')

        await wrapper.find('#update-message').trigger('click')

        initialMessage = wrapper.find('#once-message').text()
        expect(initialMessage).toBe('hello world')

        const currentStateMessage = wrapper.find('#current-state-message').text()
        expect(currentStateMessage).toBe('hello world count click: 0')

        await wrapper.find('#update-message').trigger('click')

        const currentStateMessageUpdate = wrapper.find('p:nth-of-type(4)').text()
        expect(currentStateMessageUpdate).toBe('hello world count click: 1')
    })
})
