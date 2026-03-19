<template>
    <nav class="menu">
        <div class="menu-header mb-4">
            <button @click="toggleLocale" class="lang-toggle mr-2">
                {{ locale === 'en' ? 'RU' : 'EN' }}
            </button>
            <button @click="toggleTheme" class="theme-toggle">
                {{ theme === 'light' ? '🌙' : '☀️' }}
            </button>
        </div>
        <ul>
            <li v-for="route in routes" :key="route.name" class="nav-item mb-1">
                <router-link :to="{name: route.name}" active-class="active">
                    {{ $t('menu.' + (route.name as string)) }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {useTheme} from '@/hook/useTheme'
import {useI18n} from '@/plugin/i18n'

const router = useRouter()
const routes = router
    .getRoutes()
    .filter((item) => item.meta.display)
    .sort((first, second) => (first.meta.position as number) - (second.meta.position as number))

const {theme, toggleTheme} = useTheme()
const {locale, setLocale} = useI18n()

const toggleLocale = () => {
    const newLocale = locale.value === 'en' ? 'ru' : 'en'
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
}
</script>
