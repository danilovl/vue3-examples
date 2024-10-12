import {mount} from '@vue/test-utils'
import {describe, it, expect, beforeEach} from 'vitest'
import KeyCode from '@/view/KeyCode.vue'
import router from '../router-mock'

let wrapper

beforeEach(async () => {
    await router.push('/key-code')
    await router.isReady()

    wrapper = mount(KeyCode, {
        global: {
            plugins: [router]
        }
    })
})

describe('KeyCode.vue', () => {
    it('renders meta title from useRouteMeta', () => {
        expect(wrapper.find('h1').text()).toBe('Key code')
    })

    it('captures keydown event and updates the events array', async () => {
        const input = wrapper.find('input')
        await input.trigger('keydown', {key: 'a', charCode: 97, keyCode: 65})

        const events = JSON.parse(wrapper.find('pre').text())

        expect(events[0]).toEqual({
            type: 'keydown',
            key: 'a',
            charCode: 97,
            keyCode: 65
        })
    })

    it('captures keyup event and updates the events array', async () => {
        const input = wrapper.find('input')
        await input.trigger('keyup', {key: 'a', charCode: 97, keyCode: 65})

        const events = JSON.parse(wrapper.find('pre').text())

        expect(events[0]).toEqual({
            type: 'keyup',
            key: 'a',
            charCode: 97,
            keyCode: 65
        })
    })

    it('captures focus event and updates the events array', async () => {
        const input = wrapper.find('input')
        await input.trigger('focus')

        const events = JSON.parse(wrapper.find('pre').text())

        expect(events[0].type).toBe('focus')
    })

    it('captures focusout event and updates the events array', async () => {
        const input = wrapper.find('input')
        await input.trigger('focusout')

        const events = JSON.parse(wrapper.find('pre').text())

        expect(events[0].type).toBe('focusout')
    })
})
