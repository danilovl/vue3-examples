<template>
    <div>
        <h1>{{ meta.title }}</h1>
    </div>

    <ul>
        <li class="nav-item">
            <router-link :to="{name: 'dynamic_layout_simple'}">
                simple template
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'dynamic_layout_blog'}">
                blog template
            </router-link>
        </li>
    </ul>

    <component v-if="state.layout" :is="state.layout">
        <template v-slot:content>
            <h2 class="blog-post-title">Sample blog post</h2>
            <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic
                typography, images, and code are all supported.
            </p>
            <hr>
            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu
                leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at
                lobortis.
                Cras mattis consectetur purus sit amet fermentum.
            </p>
            <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
                    leo.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                fermentum.
                Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <h2>Heading</h2>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
                luctus,
                nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
                vestibulum
                at eros.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <pre><code>Example code block</code></pre>
            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
                dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.
            </p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
                bibendum
                nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
        </template>

        <template v-slot:about>
            <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit
                amet
                fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
        </template>
    </component>
</template>

<script lang="ts">
import type {ComputedRef} from 'vue'
import type {RouteMeta} from 'vue-router'
import {defineComponent, computed, reactive} from 'vue'
import useRouteMeta from '@/hooks/useRouteMeta'
import SimpleLayout from '@/views/dynamic-layout/SimpleLayout.vue'
import BlogLayout from '@/views/dynamic-layout/BlogLayout.vue'

interface SetupData {
    state: State;
    meta: RouteMeta;
}

interface State {
    metas: RouteMeta;
    layout: string;
}

interface StateReactive {
    metas: RouteMeta;
    layout: ComputedRef;
}

export default defineComponent({
    components: {
        SimpleLayout,
        BlogLayout
    },
    setup(): SetupData {
        const meta = useRouteMeta()

        const state = reactive<StateReactive>({
            metas: meta.metaRef,
            layout: computed<string | null>((): string | null => state.metas.layout !== undefined ? state.metas.layout + '-layout' : null)
        }) as State

        return {
            state,
            meta
        }
    }
})
</script>
