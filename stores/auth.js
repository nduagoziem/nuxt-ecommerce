// import { useFetch } from "nuxt/app";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRuntimeConfig } from "nuxt/app";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = reactive({customer: null});

  return {
    isAuthenticated,
  };
});
