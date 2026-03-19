import {mount} from '@vue/test-utils'
import {describe, it, expect, beforeEach, vi, afterEach} from 'vitest'
import axios from 'axios'
import {sleep} from '@/helper'
import Axios from '@/view/Axios.vue'
import router from '../router-mock'

vi.mock('axios')
const mockAxios = axios as vi.Mocked<typeof axios>
const usersMock = [{id: 1, title: 'Task 1'}, {id: 2, title: 'Task 2'}]

beforeEach(async () => {
    mockAxios.get.mockResolvedValue({
        data: usersMock
    })

    await router.push('/axios')
    await router.isReady()
})

afterEach(async () => {
    vi.clearAllMocks()
})

describe('Axios.vue', () => {
    it('displays loading state initially', async () => {
        const wrapper = mount(Axios, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.find('.card-header').text()).toContain('Axios')
        expect(wrapper.find('.card-body').text()).toContain('Process: loading data')

        await sleep(2500)
        expect(wrapper.find('.card-body').text()).toContain('Process: data was downloaded')

        await sleep(2500)
        expect(wrapper.find('.card-body').text()).toContain('Process: data processing')

        await sleep(2500)
        expect(wrapper.find('.card-body').text()).toContain('Fake online REST API data')
    })

    it('displays todos from API after loading', async () => {
        const wrapper = mount(Axios, {
            global: {
                plugins: [router]
            }
        })

        await sleep(7500)

        const todos = wrapper.findAll('#todos-list p')
        expect(todos).toHaveLength(usersMock.length)

        expect(todos[0].text()).toBe('Task 1')
        expect(todos[1].text()).toBe('Task 2')
    })
})
