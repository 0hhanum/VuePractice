import Vuex from "vuex";
import Vue from "vue";

import potato from "./modules/potato";
import order from "./modules/order";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      userId: "temp",
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getCurrentUser(state) {
      return state.userId;
    },
  },
  modules: { potato, order },
});

export default store;
