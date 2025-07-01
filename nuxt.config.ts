// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css", "~/assets/css/input.css"],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag == "UserLayout",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      appURL: "https://nuxt-ecommerce-seven.vercel.app",
      apiBase: "http://localhost:8000/api",
      appName: "Gadgets Hub",
    },
  },
});
