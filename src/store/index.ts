import {createStore} from 'vuex'
import modules from './module/module.loader'

export default createStore({
    modules: modules,
    strict: process.env.NODE_ENV !== 'production'
})
