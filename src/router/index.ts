import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

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
            display: false,
            title: 'Todo'
        },
        component: () => import('@/layouts/DefaultLayout.vue'),
        children: [
            {
                path: 'list',
                name: 'todo_list',
                meta: {
                    position: 2,
                    display: true,
                    title: 'Todo list'
                },
                component: () => import('@/views/todo/List.vue'),
            },
            {
                path: 'detail/:id(\\d+)',
                name: 'todo_detail',
                meta: {
                    display: false,
                    title: 'Todo detail'
                },
                component: () => import('@/views/todo/Detail.vue')
            },
            {
                path: 'edit/:id(\\d+)',
                name: 'todo_edit',
                meta: {
                    display: false,
                    title: 'Todo edit'
                },
                component: () => import('@/views/todo/Edit.vue')
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
        component: () => import('@/views/dynamic-layout/DynamicLayout.vue'),
        children: [
            {
                path: 'blog',
                name: 'dynamic_layout_blog',
                meta: {
                    display: false,
                    title: 'Blog layout',
                    layout: 'blog'
                },
                component: () => import('@/views/dynamic-layout/DynamicLayout.vue')
            },
            {
                path: 'simple',
                name: 'dynamic_layout_simple',
                meta: {
                    display: false,
                    title: 'Simple layout',
                    layout: 'simple'
                },
                component: () => import('@/views/dynamic-layout/DynamicLayout.vue')
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
        component: () => import('@/views/Counter.vue')
    },
    {
        path: '/form-input-bindings',
        name: 'form_input_bindings',
        meta: {
            position: 5,
            display: true,
            title: 'Form input bindings'
        },
        component: () => import('@/views/FormInput.vue')
    },
    {
        path: '/lifecycle-hooks',
        name: 'lifecycle_hooks',
        meta: {
            position: 6,
            display: true,
            title: 'Lifecycle hooks'
        },
        component: () => import('@/views/LifecycleHooks.vue')
    },
    {
        path: '/axios',
        name: 'axios',
        meta: {
            position: 7,
            display: true,
            title: 'Axios'
        },
        component: () => import('@/views/Axios.vue')
    },
    {
        path: '/teleport',
        name: 'teleport',
        meta: {
            position: 8,
            display: true,
            title: 'Teleport'
        },
        component: () => import('@/views/Teleport.vue')
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
        if (el.parentNode === null) {
            return null
        }

        return el.parentNode.removeChild(el)
    })

    if (!nearestWithMeta) {
        return next()
    }

    nearestWithMeta.meta.metaTags.map(function (tagDef: any) {
        const tag = document.createElement('meta')

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key])
        })

        tag.setAttribute('data-vue-router-controlled', '')

        return tag
    }).forEach(function (tag: any) {
        return document.head.appendChild(tag)
    })

    next()
})

export default router
