import {mount} from '@vue/test-utils'
import {describe, it, expect, beforeEach} from 'vitest'
import CustomDirectives from '@/view/CustomDirectives.vue'
import router from '../router-mock'

let wrapper

beforeEach(async () => {
    await router.push('/custom-directives')
    await router.isReady()

    wrapper = mount(CustomDirectives, {
        global: {
            plugins: [router]
        }
    })
})

describe('CustomDirectives.vue', () => {
    it('renders meta title from useRouteMeta', () => {
        expect(wrapper.find('h1').text()).toBe('Custom directives')
    })

    it('v-focus directive should focus the input element on mount', () => {
        const input = wrapper.find('#text-focus')
        expect(input.element.classList[0]).toBe('text-focus')
    })
})
