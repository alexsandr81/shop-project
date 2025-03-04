import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    user: null,
    cart: [],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
});
