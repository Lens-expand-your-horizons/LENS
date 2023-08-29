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
        }
      ],
    },
  }
})
