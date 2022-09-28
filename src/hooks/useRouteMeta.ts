import {reactive, toRef} from 'vue'
import {useRoute} from 'vue-router'
import type RouteMeta from '@/interfaces/routeMeta'

export default function useRouteMeta(): RouteMeta {
    const meta = toRef(reactive(useRoute()), 'meta')

    return {
        metaRef: meta,
        position: meta.value.position,
        display: meta.value.display,
        title: meta.value.title,
        layout: meta.value.layout
    }
}
