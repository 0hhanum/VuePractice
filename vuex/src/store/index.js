import Vuex from "vuex";
import Vue from "vue";

import rootMutations from "./mutations";
import rootGetters from "./getters";
import rootActions from "./actions";

import firstModule from "./first-module/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    firstModule,
  },
  state() {
    return {
      items: ["a", "b", "c", "d"],
      loggedIn: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
