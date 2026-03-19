import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueDevTools  from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: "0.0.0.0",
        hmr: {
            clientPort: 5173
        },
        port: 5173,
        watch: {
            usePolling: true
        }
    },
    test: {
        cache: false,
        globals: true,
        watch: false,
        environment: 'jsdom',
        coverage: {
            reporter: ['lcov'],
        },
        setupFiles: [path.resolve(__dirname, 'tests/unit/setup.ts')],
        testTimeout: 10000
    }
})
