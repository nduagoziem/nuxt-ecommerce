import { useRuntimeConfig } from "nuxt/app";
import { useAuthStore } from "../stores/auth";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();
  const { isAuthenticated } = useAuthStore();

  // use `nuxtApp.ssrContext` when on server
  if (import.meta.server) {
    try {
      const response = await $fetch("/customer", {
        headers: nuxtApp.ssrContext?.event.node.req.headers,
        baseURL: config.public.apiAuth,
        method: "GET",
      });

      if (response.success == true) {
        isAuthenticated.customer = true;
      } else {
        isAuthenticated.customer = null;
        return;
      }
    } catch (error) {
      isAuthenticated.customer = null;
      console.log(error);
      return;
    }
  }
  // On client, Nuxt automatically hydrates the store
});
