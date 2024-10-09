import {createRouter, createWebHistory} from 'vue-router'
import {routes} from '../../src/router'

export default createRouter({
    history: createWebHistory(),
    routes: routes
})
