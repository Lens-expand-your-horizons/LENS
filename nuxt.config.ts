// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app:{
    head: {
      title: "LENS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        }, 
        {
          rel: "search",
          type: "application/opensearchdescription+xml",
          title: "LENS",
          href: "/osd.xml"
        },
      ],
    },
  },
  modules: [
    '@vite-pwa/nuxt'
  ],
  plugins: [
    '~/plugins/gcse.client.js',
  ],
  pwa: {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: 'LENS: expand your horizons',
      description: "meta search engine over multi languages",
      theme_color: "#ffffff",
      lang: "ja",
      short_name: "LENS",
      start_url: "/",
      display: "standalone",
      background_color: "#e7e7eb",
      icons: [
        {
          src: 'pwa.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any',
        },
        {
          src: 'pwa-465x465.png',
          sizes: '465x465',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,svg,ico}"],
    },
    devOptions: {
      enabled: true,
      type: "module"
    },
  }
})
