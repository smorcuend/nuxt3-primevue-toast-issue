import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  css: [
    "primevue/resources/themes/vela-purple/theme.css",
    "primevue/resources/primevue.css"
  ],
  build: {
    transpile: ["primevue"]
  }
});
