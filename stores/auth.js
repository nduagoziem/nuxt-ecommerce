import { defineStore } from "pinia";
import { reactive } from "vue";

/**
 * The sole purpose of this store is for authentication
 *  Do not use it for any other logic apart from this.
 * The value of this store should only be set/changed in init-auth.global.js file
 */
export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = reactive({ customer: null });

  return {
    isAuthenticated,
  };
});
