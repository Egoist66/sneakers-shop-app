// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  experimental: {
    viewTransition: true,
    asyncContext: true,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "stylesheet", href: "" }],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  // css: ["~/assets/css/global.scss", "~/assets/css/tailwind.css"],

  vue: {
    propsDestructure: true,
  },

  runtimeConfig: {
    // The private keys which are only available server-side

    // Keys within public are also exposed client-side
    public: {
    
    },
  },

  $development: {
    devtools: { enabled: true },
  },

  modules: ["@pinia/nuxt"],
})