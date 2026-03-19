import {ref, inject, type App} from 'vue'

const I18N_SYMBOL = Symbol('i18n')

export function createI18n(options: { locale: string; messages: any }) {
    const locale = ref(options.locale)
    const messages = options.messages

    const t = (key: any) => {
        if (!key || typeof key !== 'string') return ''
        const keys = key.split('.')
        let value = messages[locale.value]
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k]
            } else {
                return key
            }
        }
        return value
    }

    const setLocale = (newLocale: string) => {
        if (messages[newLocale]) {
            locale.value = newLocale
        }
    }

    return {
        install(app: App) {
            app.config.globalProperties.$t = t
            app.config.globalProperties.$i18n = {
                locale,
                setLocale
            }
            app.provide(I18N_SYMBOL, {locale, t, setLocale})
        }
    }
}

export function useI18n() {
    const i18n = inject<any>(I18N_SYMBOL)
    if (!i18n) throw new Error('I18n not provided')
    return i18n
}
