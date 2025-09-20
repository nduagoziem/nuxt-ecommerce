import { defineStore } from "pinia";
import { reactive} from "vue";

/**
 * The sole purpose of this store is for retrieving the customers' info
 *  Do not use it for any other logic apart from this.
 * The value of this store should only be set/changed in init-auth.global.js file
 */
export const useCustomerInfoStore = defineStore("customerInfo", () => {
  const customerInfo = reactive({
    name: "",
    email: "",
  })
  return {
    customerInfo
  };
});
