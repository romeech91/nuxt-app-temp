// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["usebootstrap"],
  compatibilityDate: "2025-02-27",
  app: {
    head: {
      title: "My project",
      meta: [
        {
          name: "charset",
          content: "utf-8",
        },
      ],
    },
  },
});
