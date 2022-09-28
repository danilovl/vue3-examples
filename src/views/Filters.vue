<template>
  <div class="col-md-12">
    <div>
      <h1>{{ meta.title }}</h1>
    </div>
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">{{ texts.global.title }}</h5>
      <div class="card-body">
        {{ texts.global.text }} => {{ $filters.capitalizeFirstLetter(texts.global.text) }}
      </div>
    </div>
    <div class="card mb-4 box-shadow">
      <h5 class="card-header">{{ texts.local.title }}</h5>
      <div class="card-body">
        {{ texts.local.text }} => {{ toUpperCase(texts.local.text) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type RouteMeta from '@/interfaces/routeMeta'
import {defineComponent} from 'vue'
import useRouteMeta from '@/hooks/useRouteMeta'

interface SetupData {
    texts: object;
    toUpperCase: (string: string) => string;
    meta: RouteMeta;
}

export default defineComponent({
    name: 'Filters',
    setup(): SetupData {
        const texts = {
            global: {
                title: 'Global filter - capitalizeFirstLetter',
                text: 'example text'
            },
            local: {
                title: 'Local filter - toUpperCase',
                text: 'example'
            }
        }

        const toUpperCase = (string: string): string => string.toUpperCase()
        const meta = useRouteMeta()

        return {
            texts,
            toUpperCase,
            meta
        }
    }
})
</script>
