import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["vuetify/styles"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify()],
    server: {
      allowedHosts: ["peacock-artistic-subtly.ngrok-free.app"],
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/alien-svgrepo-com 256.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/alien-svgrepo-com 512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/alien-svgrepo-com 256.png' }
      ]
    },
  },
  modules: [],
  runtimeConfig: {
    public: {
      formspreeEndpoint: process.env.NUXT_PUBLIC_FORMSPREE_ENDPOINT,
    },
  },
});
