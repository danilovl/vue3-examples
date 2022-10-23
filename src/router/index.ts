import type {RouteRecordRaw} from 'vue-router'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        meta: {
            position: 0,
            display: true,
            title: 'Home'
        },
        component: Home
    },
    {
        path: '/todo',
        name: 'todo',
        meta: {
            position: 1,
            display: false,
            title: 'Todo'
        },
        component: (): Promise<any> => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: 'list',
                name: 'todo_list',
                meta: {
                    position: 2,
                    display: true,
                    title: 'Todo list'
                },
                component: (): Promise<any> => import('@/views/todo/List.vue'),
            },
            {
                path: 'detail/:id(\\d+)',
                name: 'todo_detail',
                meta: {
                    display: false,
                    title: 'Todo detail'
                },
                component: (): Promise<any> => import('@/views/todo/Detail.vue')
            },
            {
                path: 'edit/:id(\\d+)',
                name: 'todo_edit',
                meta: {
                    display: false,
                    title: 'Todo edit'
                },
                component: (): Promise<any> => import('@/views/todo/Edit.vue')
            }
        ]
    },
    {
        path: '/dynamic-layout',
        name: 'dynamic_layout',
        meta: {
            position: 3,
            display: true,
            title: 'Dynamic layout'
        },
        component: (): Promise<any> => import('@/views/dynamic-layout/DynamicLayout.vue'),
        children: [
            {
                path: 'blog',
                name: 'dynamic_layout_blog',
                meta: {
                    display: false,
                    title: 'Blog layout',
                    layout: 'blog'
                },
                component: (): Promise<any> => import('@/views/dynamic-layout/DynamicLayout.vue')
            },
            {
                path: 'simple',
                name: 'dynamic_layout_simple',
                meta: {
                    display: false,
                    title: 'Simple layout',
                    layout: 'simple'
                },
                component: (): Promise<any> => import('@/views/dynamic-layout/DynamicLayout.vue')
            }
        ]
    },
    {
        path: '/counter',
        name: 'counter',
        meta: {
            position: 4,
            display: true,
            title: 'Counter'
        },
        component: (): Promise<any> => import('@/views/Counter.vue')
    },
    {
        path: '/counter-mixins',
        name: 'counter_mixins',
        meta: {
            position: 5,
            display: true,
            title: 'Counter mixins'
        },
        component: (): Promise<any> => import('@/views/CounterMixins.vue')
    },
    {
        path: '/form-input-bindings',
        name: 'form_input_bindings',
        meta: {
            position: 6,
            display: true,
            title: 'Form input bindings'
        },
        component: (): Promise<any> => import('@/views/FormInput.vue')
    },
    {
        path: '/lifecycle-hooks',
        name: 'lifecycle_hooks',
        meta: {
            position: 7,
            display: true,
            title: 'Lifecycle hooks'
        },
        component: (): Promise<any> => import('@/views/LifecycleHooks.vue')
    },
    {
        path: '/axios',
        name: 'axios',
        meta: {
            position: 8,
            display: true,
            title: 'Axios'
        },
        component: (): Promise<any> => import('@/views/Axios.vue')
    },
    {
        path: '/teleport',
        name: 'teleport',
        meta: {
            position: 9,
            display: true,
            title: 'Teleport'
        },
        component: (): Promise<any> => import('@/views/Teleport.vue')
    },
    {
        path: '/suspense',
        name: 'suspense',
        meta: {
            position: 10,
            display: true,
            title: 'Suspense'
        },
        component: (): Promise<any> => import('@/views/suspense/Suspense.vue')
    },
    {
        path: '/provide-and-inject',
        name: 'provide_inject',
        meta: {
            position: 11,
            display: true,
            title: 'Provide and inject'
        },
        component: (): Promise<any> => import('@/views/provide-and-inject/ProvideAndInject.vue')
    },
    {
        path: '/multiple-v-models',
        name: 'multiple_v_models',
        meta: {
            position: 12,
            display: true,
            title: 'Multiple v-models'
        },
        component: (): Promise<any> => import('@/views/multiple-v-models/MultipleModels.vue')
    },
    {
        path: '/vee-validate',
        name: 'vee_validate',
        meta: {
            position: 13,
            display: true,
            title: 'Vee validate'
        },
        component: (): Promise<any> => import('@/views/VeeValidate.vue')
    },
    {
        path: '/filters',
        name: 'filters',
        meta: {
            position: 14,
            display: true,
            title: 'Filters'
        },
        component: (): Promise<any> => import('@/views/Filters.vue')
    },
    {
        path: '/key-code',
        name: 'key_code',
        meta: {
            position: 15,
            display: true,
            title: 'Key code'
        },
        component: (): Promise<any> => import('@/views/KeyCode.vue')
    },
    {
        path: '/emits',
        name: 'emits',
        meta: {
            position: 16,
            display: true,
            title: 'Emits'
        },
        component: (): Promise<any> => import('@/views/emits/Emits.vue')
    } ,
    {
        path: '/emits-computed',
        name: 'emits_computed',
        meta: {
            position: 17,
            display: true,
            title: 'Emits computed'
        },
        component: (): Promise<any> => import('@/views/emits-computed/EmitsComputed.vue')
    },
    {
        path: '/emits-v-model',
        name: 'emits_v_model',
        meta: {
            position: 18,
            display: true,
            title: 'Emits v-model'
        },
        component: (): Promise<any> => import('@/views/emits-v-model/EmitsModel.vue')
    },
    {
        path: '/directives',
        name: 'directives',
        meta: {
            position: 19,
            display: true,
            title: 'Directives'
        },
        component: (): Promise<any> => import('@/views/Directives.vue')
    },
    {
        path: '/custom-directives',
        name: 'custom_directives',
        meta: {
            position: 20,
            display: true,
            title: 'Custom directives'
        },
        component: (): Promise<any> => import('@/views/CustomDirectives.vue')
    },
    {
        path: '/ref-attribute',
        name: 'ref_attribute',
        meta: {
            position: 20,
            display: true,
            title: 'Ref attribute'
        },
        component: (): Promise<any> => import('@/views/RefAttribute.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => {
        return el.parentNode === null ? null : el.parentNode.removeChild(el)
    })

    if (!nearestWithMeta) {
        return next()
    }

    nearestWithMeta.meta.metaTags
        .map((tagDef: any): Element => {
            const tag = document.createElement('meta')

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key])
            })

            tag.setAttribute('data-vue-router-controlled', '')

            return tag
        })
        .forEach((tag: Element): Element => document.head.appendChild(tag))

    next()
})

export default router
