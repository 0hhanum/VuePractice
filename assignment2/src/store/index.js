import Vuex from "vuex";
import Vue from "vue";

import potato from "./modules/potato";
import order from "./modules/order";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      userId: "temp",
      isSignIn: false,
    };
  },
  mutations: {
    signIn(state) {
      state.isSignIn = true;
    },
  },
  actions: {
    signIn(context) {
      context.commit("signIn");
    },
  },
  getters: {
    getCurrentUser(state) {
      return state.userId;
    },
    getIsSignIn(state) {
      return state.isSignIn;
    },
  },
  modules: { potato, order },
});

export default store;
