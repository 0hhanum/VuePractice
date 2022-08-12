import Vuex from "vuex";
import Vue from "vue";

import potato from "./modules/potato";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getter: {},
  modules: { potato },
});

export default store;
