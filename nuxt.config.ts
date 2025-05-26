// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', '~/assets/css/input.css'],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag == 'UserLayout',
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    public: {
      appURL: 'https://nuxt-ecommerce-seven.vercel.app',
      appName: "Gadgets Hub",
    }
  },

  // modules: ['@nuxtjs/color-mode'],

  // colorMode: {
  //   classSuffix: '', // Ensures the 'dark' class is applied directly
  //   preference: 'system',
  //   fallback: 'light',
  //   dataValue: 'theme',
  //   storageKey: 'nuxt-color-mode'
  // }
});