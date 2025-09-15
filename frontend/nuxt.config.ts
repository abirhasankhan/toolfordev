// nuxt.config.ts
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/tailwindcss", '@nuxt/icon'],
    
    icon: {
        size: '1em', // optional default size
        class: 'inline-block', // optional default class
    },

    nitro: {
        routeRules: {
            '/api/**': {
                cors: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            }
        }
    }
});