import Vuex from "vuex";
import Vue from "vue";

import potato from "./modules/potato";

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
  modules: { potato },
});

export default store;
