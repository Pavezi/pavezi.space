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
      title: "Pavezi",
      titleTemplate: "%s - Vinícius Pavezi",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Portfólio de Vinícius Pavezi - Desenvolvedor Fullstack JavaScript",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "256x256",
          href: "/icon256.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/icon512.png",
        },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/icon256.png" },
      ],
    },
  },
  modules: ["@nuxthub/core"],
  runtimeConfig: {
    public: {
      formspreeEndpoint: process.env.NUXT_PUBLIC_FORMSPREE_ENDPOINT,
    },
  },
});