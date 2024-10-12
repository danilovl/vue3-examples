import {mount} from '@vue/test-utils'
import {describe, it, expect, beforeEach} from 'vitest'
import Filters from '@/view/Filters.vue'
import router from '../router-mock'

let wrapper

beforeEach(async () => {
    await router.push('/filters')
    await router.isReady()

    wrapper = mount(Filters, {
        global: {
            plugins: [router]
        }
    })
})

describe('Filters.vue', () => {
    it('renders meta title from useRouteMeta', () => {
        expect(wrapper.find('h1').text()).toBe('Filters')
    })

    it('applies global filter correctly', () => {
        const globalText = wrapper.find('#global-title').text()
        expect(globalText).toContain('Global filter - capitalizeFirstLetter')

        const filterGlobalText = wrapper.find('#filter-global-title').text()
        expect(filterGlobalText).toContain('example text => Example text')
    })

    it('applies local filter correctly', () => {
        const globalText = wrapper.find('#local-title').text()
        expect(globalText).toContain('Local filter - toUpperCase')

        const filterLocalText = wrapper.find('#filter-local-title').text()
        expect(filterLocalText).toContain('example => EXAMPLE')
    })
})
