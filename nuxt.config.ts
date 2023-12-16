// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    app: {
        head: {
            title: 'LENS',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'search',
                    type: 'application/opensearchdescription+xml',
                    title: 'LENS',
                    href: '/osd.xml',
                },
            ],
        },
    },
    modules: ['@vite-pwa/nuxt', '@nuxtjs/eslint-module', 'nuxt-gtag'],
    runtimeConfig: {
        public: {
            gcseApiKey: '',
        },
    },
    pwa: {
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico'],
        client: {
            installPrompt: true,
        },
        manifest: {
            name: 'LENS: expand your horizons',
            description: 'meta search engine over multi languages',
            theme_color: '#fd5401',
            lang: 'ja',
            short_name: 'LENS',
            start_url: '/',
            display: 'standalone',
            background_color: '#fbe5d6',
            icons: [
                {
                    src: 'images/pwa/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: 'images/pwa/icon-384x384.png',
                    sizes: '384x384',
                    type: 'image/png',
                },
                {
                    src: 'images/pwa/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'images/pwa/icon-152x152.png',
                    sizes: '152x152',
                    type: 'image/png',
                },
                {
                    src: 'images/pwa/icon-144x144.png',
                    sizes: '144x144',
                    type: 'image/png',
                },
                {
                    src: 'images/pwa/icon-128x128.png',
                    sizes: '128x128',
                    type: 'image/png',
                },
                {
                    src: 'images/pwa/icon-96x96.png',
                    sizes: '96x96',
                    type: 'image/png',
                },
                {
                    src: 'images/pwa/icon-72x72.png',
                    sizes: '72x72',
                    type: 'image/png',
                },
            ],
        },
        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,svg,ico}'],
        },
        devOptions: {
            enabled: true,
            type: 'module',
        },
    },
});
